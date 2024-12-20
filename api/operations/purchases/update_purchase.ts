import { prisma } from "@/api/helpers/prisma";
import { updateInventory } from "@/api/operations/inventory/update_inventory";
import { ServerError } from "@/api/types/errors";

import type { Purchase, PurchaseProduct } from "@prisma/client";

interface UpdatePurchaseInput {
  purchaseId: number;
  employeeId?: number;
  supplierId?: number;
  date?: Date;
  amount?: number;
  description?: string;
  products?: Array<{
    productId: number;
    quantity: number;
  }>;
}

interface UpdatePurchaseResponse extends Purchase {
  products: PurchaseProduct[];
}

async function updatePurchase(
  input: UpdatePurchaseInput
): Promise<UpdatePurchaseResponse> {
  try {
    const {
      purchaseId,
      amount,
      date,
      description,
      employeeId,
      products,
      supplierId,
    } = input;

    return await prisma.$transaction(async (prisma) => {
      // Get the current purchase products
      const currentPurchaseProducts = await prisma.purchaseProduct.findMany({
        where: { purchaseId },
      });

      // Update the purchase
      const updatedPurchase = await prisma.purchase.update({
        where: { id: purchaseId },
        data: {
          amount,
          date,
          description,
          employeeId,
          supplierId,
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
        for (const product of currentPurchaseProducts) {
          await updateInventory({
            productId: product.productId,
            quantity: product.quantity,
            isIncrease: false,
          });
        }

        // Update the inventory for the new products
        for (const product of products) {
          await updateInventory({
            productId: product.productId,
            quantity: product.quantity,
            isIncrease: true,
          });
        }
      }

      return updatedPurchase;
    });
  } catch (error) {
    throw new ServerError();
  }
}

export { updatePurchase };
