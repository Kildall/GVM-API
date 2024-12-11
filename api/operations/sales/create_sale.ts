import { log } from "@/api/helpers/pino";
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
    const sale = await prisma.$transaction(async (prisma) => {
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
      return createdSale;
    });

    await Promise.all(
      deliveries.map((delivery) =>
        createDelivery(
          {
            saleId: sale.id,
            employeeId: delivery.employeeId,
            addressId: delivery.addressId,
            startDate: delivery.startDate,
          },
          prisma
        )
      )
    );

    // Update inventory for each product
    await Promise.all(
      products.map((product) =>
        updateInventory(
          {
            productId: product.productId,
            quantity: product.quantity,
            isIncrease: false,
          },
          prisma
        )
      )
    );

    return sale;
  } catch (error) {
    if (error instanceof ValidationError) {
      throw error;
    }
    log.error(error);
    throw new ServerError();
  }
}

export { createSale };
