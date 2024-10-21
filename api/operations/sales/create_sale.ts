import { prisma } from "@/api/helpers/prisma";
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
  employeeId: number;
}

interface CreateSaleResponse extends Sale {
  products: ProductSale[];
}

async function createSale({
  customerId,
  startDate,
  products,
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
          status: SaleStatusEnum.STARTED,
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
