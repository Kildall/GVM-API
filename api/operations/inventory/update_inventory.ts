import { prisma } from "@/api/helpers/prisma";
import { ParamsError } from "@/api/types/errors";

interface UpdateInventoryInput {
  productId: number;
  quantity: number;
  isIncrease: boolean;
}

async function updateInventory({
  productId,
  quantity,
  isIncrease,
}: UpdateInventoryInput): Promise<void> {
  try {
    await prisma.product.update({
      where: { id: productId },
      data: {
        quantity: {
          [isIncrease ? "increment" : "decrement"]: quantity,
        },
      },
    });
  } catch (error) {
    throw new ParamsError(
      `failed to update inventory for product ${productId}`
    );
  }
}

export { updateInventory };
