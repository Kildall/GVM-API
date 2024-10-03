import { prisma } from "@/api/helpers/prisma";
import { updateInventory } from "@/api/operations/inventory/update_inventory";
import { ParamsError } from "@/api/types/errors";

interface DeletePurchaseResponse {
  message: string;
}

async function deletePurchase(
  purchaseId: number
): Promise<DeletePurchaseResponse> {
  try {
    const result = await prisma.$transaction(async (prisma) => {
      // Fetch the purchase products before deletion
      const purchaseProducts = await prisma.purchaseProduct.findMany({
        where: { purchaseId },
      });

      // Delete the purchase (cascade will handle PurchaseProduct deletion)
      const deletedPurchase = await prisma.purchase.delete({
        where: { id: purchaseId },
      });

      if (!deletedPurchase) {
        throw new ParamsError("purchase not found");
      }

      // Update inventory for each product
      for (const product of purchaseProducts) {
        await updateInventory({
          productId: product.productId,
          quantity: product.quantity,
          isIncrease: false,
        });
      }

      return deletedPurchase;
    });

    return { message: "purchase deleted successfully" };
  } catch (error) {
    if (error instanceof ParamsError) {
      throw error;
    }
    throw new Error("failed to delete purchase");
  }
}

export { deletePurchase };
