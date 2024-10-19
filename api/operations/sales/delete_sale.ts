import { log } from "@/api/helpers/pino";
import { prisma } from "@/api/helpers/prisma";
import { updateInventory } from "@/api/operations/inventory/update_inventory";

interface DeleteSaleResponse {
  message: string;
}

async function deleteSale(saleId: number): Promise<DeleteSaleResponse> {
  try {
    return await prisma.$transaction(async (prisma) => {
      const sale = await prisma.sale.findUnique({
        where: { id: saleId },
      });

      if (!sale) {
        throw new ParamsError("sale not found");
      }

      // Fetch the sale products before deletion
      const saleProducts = await prisma.productSale.findMany({
        where: { saleId: sale.id },
      });

      // Delete the sale (cascade will handle ProductSale deletion)
      await prisma.sale.delete({
        where: { id: sale.id },
      });

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
    log.error(error);
    throw new Error("failed to delete sale");
  }
}

export { deleteSale };
