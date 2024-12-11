import { prisma } from "@/api/helpers/prisma";
import { createDelivery } from "@/api/operations/deliveries/create_delivery";
import { updateInventory } from "@/api/operations/inventory/update_inventory";
import { ErrorCode, ServerError, ValidationError } from "@/api/types/errors";

import { type ProductSale, type Sale, SaleStatusEnum } from "@prisma/client";

interface CreateSaleInput {
  customerId: number;
  startDate: Date;
  products: Array<{
    productId: number;
    quantity: number;
  }>;
  deliveries: Array<{
    employeeId: number;
    addressId: number;
    startDate: Date;
  }>;
  employeeId: number;
}

interface CreateSaleResponse extends Sale {
  products: ProductSale[];
}

async function createSale({
  customerId,
  startDate,
  products,
  deliveries,
  employeeId,
}: CreateSaleInput): Promise<CreateSaleResponse> {
  try {
    return await prisma.$transaction(async (prisma) => {
      for (const product of products) {
        const inventoryCheck = await prisma.product.findUnique({
          where: { id: product.productId },
          select: { quantity: true },
        });
        if (!inventoryCheck || inventoryCheck.quantity < product.quantity) {
          throw new ValidationError(ErrorCode.INSUFFICIENT_INVENTORY);
        }
      }

      const createdSale = await prisma.sale.create({
        data: {
          customerId,
          status: SaleStatusEnum.CREATED,
          startDate,
          lastUpdateDate: new Date(),
          employeeId,
          products: {
            create: products.map((product) => ({
              productId: product.productId,
              quantity: product.quantity,
            })),
          },
        },
        include: {
          products: true,
        },
      });

      for (const delivery of deliveries) {
        await createDelivery({
          saleId: createdSale.id,
          employeeId: delivery.employeeId,
          addressId: delivery.addressId,
          startDate: delivery.startDate,
        });
      }

      // Update inventory for each product
      for (const product of products) {
        await updateInventory({
          productId: product.productId,
          quantity: product.quantity,
          isIncrease: false,
        });
      }

      return createdSale;
    });
  } catch (error) {
    if (error instanceof ValidationError) {
      throw error;
    }
    throw new ServerError();
  }
}

export { createSale };
