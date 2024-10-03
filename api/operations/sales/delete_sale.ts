import { prisma } from "@/api/helpers/prisma";
import { updateInventory } from "@/api/operations/inventory/update_inventory";
import { ParamsError } from "@/api/types/errors";

interface DeleteSaleResponse {
  message: string;
}

async function deleteSale(saleId: number): Promise<DeleteSaleResponse> {
  try {
    return await prisma.$transaction(async (prisma) => {
      // Fetch the sale products before deletion
      const saleProducts = await prisma.productSale.findMany({
        where: { saleId },
      });

      // Delete the sale (cascade will handle ProductSale deletion)
      const deletedSale = await prisma.sale.delete({
        where: { id: saleId },
      });

      if (!deletedSale) {
        throw new ParamsError("sale not found");
      }

      // Update inventory for each product
      for (const product of saleProducts) {
        await updateInventory({
          productId: product.productId,
          quantity: product.quantity,
          isIncrease: true,
        });
      }

      return { message: "sale deleted successfully" };
    });
  } catch (error) {
    if (error instanceof ParamsError) {
      throw error;
    }
    throw new Error("failed to delete sale");
  }
}

export { deleteSale };
