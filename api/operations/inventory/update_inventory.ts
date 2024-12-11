import { prisma } from "@/api/helpers/prisma";
import { ServerError } from "@/api/types/errors";
import type { Prisma } from "@prisma/client";

interface UpdateInventoryInput {
  productId: number;
  quantity: number;
  isIncrease: boolean;
}

async function updateInventory(
  { productId, quantity, isIncrease }: UpdateInventoryInput,
  tx?: Prisma.TransactionClient
): Promise<void> {
  try {
    if (!tx) {
      return await prisma.$transaction(async (tx) => {
        return await updateInventory({ productId, quantity, isIncrease }, tx);
      });
    }

    await prisma.product.update({
      where: { id: productId },
      data: {
        quantity: {
          [isIncrease ? "increment" : "decrement"]: quantity,
        },
      },
    });
  } catch (error) {
    throw new ServerError();
  }
}

export { updateInventory };
