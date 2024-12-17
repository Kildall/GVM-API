import { log } from "@/api/helpers/pino";
import { prisma } from "@/api/helpers/prisma";
import { ErrorCode, ResourceError, ServerError } from "@/api/types/errors";
import { SaleStatusEnum, type Prisma } from "@prisma/client";

interface DeletePurchaseResponse {
  message: string;
}

async function deletePurchase(
  purchaseId: number,
  tx?: Prisma.TransactionClient
): Promise<DeletePurchaseResponse> {
  try {
    const db = tx ?? prisma;

    if (!tx) {
      return await prisma.$transaction(async () => {
        return await deletePurchase(purchaseId, tx);
      });
    }

    // First check if the purchase exists and is valid
    const purchase = await prisma.purchase.findUnique({
      where: { id: purchaseId },
      include: {
        products: {
          include: {
            product: true,
          },
        },
      },
    });

    if (!purchase) {
      throw new ResourceError(ErrorCode.RESOURCE_NOT_FOUND);
    }

    // Check each product's quantity requirements for ongoing sales
    for (const purchaseProduct of purchase.products) {
      // Get current product quantity
      const currentQuantity = purchaseProduct.product.quantity;

      // Calculate quantity needed for ongoing sales
      const ongoingSalesQuantity = await prisma.productSale.aggregate({
        where: {
          productId: purchaseProduct.productId,
          sale: {
            status: {
              notIn: [SaleStatusEnum.CANCELLED, SaleStatusEnum.DELIVERED],
            },
          },
        },
        _sum: {
          quantity: true,
        },
      });

      const requiredQuantity = ongoingSalesQuantity._sum.quantity || 0;

      if (currentQuantity - purchaseProduct.quantity < requiredQuantity) {
        throw new ResourceError(ErrorCode.INSUFFICIENT_INVENTORY);
      }
    }

    for (const purchaseProduct of purchase.products) {
      await db.product.update({
        where: { id: purchaseProduct.productId },
        data: {
          quantity: {
            decrement: purchaseProduct.quantity,
          },
        },
      });
    }

    await db.purchase.delete({
      where: { id: purchaseId },
    });

    return { message: "purchase deleted successfully" };
  } catch (error) {
    log.error(error);
    if (error instanceof ResourceError) {
      throw error;
    }
    throw new ServerError();
  }
}

export { deletePurchase };
