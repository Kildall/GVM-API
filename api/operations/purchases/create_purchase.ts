import { prisma } from "@/api/helpers/prisma";
import { updateInventory } from "@/api/operations/inventory/update_inventory";
import { ServerError } from "@/api/types/errors";

import type { Purchase, PurchaseProduct } from "@prisma/client";

interface CreatePurchaseInput {
  employeeId: number;
  supplierId: number;
  date: Date;
  amount: number;
  description: string;
  products: Array<{
    productId: number;
    quantity: number;
  }>;
}

interface CreatePurchaseResponse extends Purchase {
  products: PurchaseProduct[];
}

async function createPurchase({
  employeeId,
  supplierId,
  date,
  amount,
  description,
  products,
}: CreatePurchaseInput): Promise<CreatePurchaseResponse> {
  try {
    const purchase = await prisma.$transaction(async (prisma) => {
      const createdPurchase = await prisma.purchase.create({
        data: {
          employeeId,
          supplierId,
          date,
          amount,
          description,
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
          isIncrease: true,
        });
      }

      return createdPurchase;
    });

    return purchase;
  } catch (error) {
    throw new ServerError();
  }
}

export { createPurchase };
