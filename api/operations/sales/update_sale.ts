import { prisma } from "@/api/helpers/prisma";
import { updateInventory } from "@/api/operations/inventory/update_inventory";
import { ErrorCode, ServerError, ValidationError } from "@/api/types/errors";

import type { ProductSale, Sale, SaleStatusEnum } from "@prisma/client";

interface UpdateSaleInput {
  saleId: number;
  status?: SaleStatusEnum;
  products?: Array<{
    productId: number;
    quantity: number;
  }>;
  employeeId?: number;
}

interface UpdateSaleResponse extends Sale {
  products: ProductSale[];
}

async function updateSale({
  saleId,
  products,
  status,
  employeeId,
}: UpdateSaleInput): Promise<UpdateSaleResponse> {
  try {
    return await prisma.$transaction(async (prisma) => {
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

      // Update the sale
      const updatedSale = await prisma.sale.update({
        where: { id: saleId },
        data: {
          lastUpdateDate: new Date(),
          status,
          employeeId,
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
