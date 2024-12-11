import { prisma } from "@/api/helpers/prisma";
import { createDelivery } from "@/api/operations/deliveries/create_delivery";
import { updateDelivery } from "@/api/operations/deliveries/update_delivery";
import { updateInventory } from "@/api/operations/inventory/update_inventory";
import {
  ErrorCode,
  ResourceError,
  ServerError,
  ValidationError,
} from "@/api/types/errors";

import {
  BusinessStatusEnum,
  DriverStatusEnum,
  type ProductSale,
  type Sale,
  type SaleStatusEnum,
} from "@prisma/client";

interface UpdateSaleInput {
  saleId: number;
  status?: SaleStatusEnum;
  products?: Array<{
    productId: number;
    quantity: number;
  }>;
  deliveries?: Array<{
    addressId: number;
    employeeId: number;
    startDate: Date;
  }>;
  employeeId?: number;
  customerId?: number;
}

interface UpdateSaleResponse extends Sale {
  products: ProductSale[];
}

async function updateSale({
  saleId,
  products,
  status,
  employeeId,
  customerId,
  deliveries,
}: UpdateSaleInput): Promise<UpdateSaleResponse> {
  try {
    return await prisma.$transaction(async (prisma) => {
      const sale = await prisma.sale.findUnique({
        where: { id: saleId },
        include: {
          deliveries: true,
        },
      });

      if (!sale) {
        throw new ResourceError(ErrorCode.RESOURCE_NOT_FOUND);
      }

      // Get the current sale products
      const currentSaleProducts = await prisma.productSale.findMany({
        where: { saleId },
      });

      // If updating products, check inventory
      if (products) {
        for (const product of products) {
          const inventoryCheck = await prisma.product.findUnique({
            where: { id: product.productId },
            select: { quantity: true },
          });
          const currentProductSale = currentSaleProducts.find(
            (p) => p.productId === product.productId
          );
          const additionalQuantity = currentProductSale
            ? product.quantity - currentProductSale.quantity
            : product.quantity;
          if (!inventoryCheck || inventoryCheck.quantity < additionalQuantity) {
            throw new ValidationError(ErrorCode.INSUFFICIENT_INVENTORY);
          }
        }
      }

      if (deliveries) {
        // If deliveries were removed then delete them
        if (deliveries.length < sale.deliveries.length) {
          for (const delivery of sale.deliveries) {
            if (
              !deliveries.some(
                (d) =>
                  d.employeeId === delivery.employeeId &&
                  d.addressId === delivery.addressId
              )
            ) {
              await updateDelivery({
                deliveryId: delivery.id,
                businessStatus: BusinessStatusEnum.CANCELLED,
                driverStatus: DriverStatusEnum.CANCELLED,
              });
            }
          }
        }

        // Handle updates to existing deliveries
        for (const existingDelivery of sale.deliveries) {
          const matchingDelivery = deliveries.find(
            (d) =>
              d.employeeId === existingDelivery.employeeId &&
              d.addressId === existingDelivery.addressId
          );

          if (matchingDelivery) {
            // Check if any fields have changed
            if (
              existingDelivery.startDate?.getTime() !==
              matchingDelivery.startDate?.getTime()
            ) {
              await updateDelivery({
                deliveryId: existingDelivery.id,
                startDate: matchingDelivery.startDate,
              });
            }
          }
        }

        // If deliveries were added then create them
        for (const delivery of deliveries) {
          if (
            sale.deliveries.some(
              (d) =>
                d.employeeId === delivery.employeeId &&
                d.addressId === delivery.addressId
            )
          ) {
            continue;
          }

          const address = await prisma.address.findUnique({
            where: { id: delivery.addressId, customerId: sale.customerId },
          });
          if (!address) {
            throw new ResourceError(ErrorCode.RESOURCE_NOT_FOUND);
          }

          const employee = await prisma.employee.findUnique({
            where: { id: delivery.employeeId },
          });
          if (!employee) {
            throw new ResourceError(ErrorCode.RESOURCE_NOT_FOUND);
          }

          await createDelivery({
            saleId,
            employeeId: employee.id,
            addressId: address.id,
            startDate: delivery.startDate,
          });
        }
      }

      // Update the sale
      const updatedSale = await prisma.sale.update({
        where: { id: saleId },
        data: {
          lastUpdateDate: new Date(),
          status,
          employeeId,
          customerId,
          products: products
            ? {
                deleteMany: {},
                create: products.map((product) => ({
                  productId: product.productId,
                  quantity: product.quantity,
                })),
              }
            : undefined,
        },
        include: {
          products: true,
        },
      });

      // Update inventory
      if (products) {
        // Revert the inventory for the old products
        for (const product of currentSaleProducts) {
          await updateInventory({
            productId: product.productId,
            quantity: product.quantity,
            isIncrease: true,
          });
        }

        // Update the inventory for the new products
        for (const product of products) {
          await updateInventory({
            productId: product.productId,
            quantity: product.quantity,
            isIncrease: false,
          });
        }
      }

      return updatedSale;
    });
  } catch (error) {
    if (error instanceof ValidationError) {
      throw error;
    }
    throw new ServerError();
  }
}

export { updateSale };
