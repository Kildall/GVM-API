import { log } from "@/api/helpers/pino";
import { prisma } from "@/api/helpers/prisma";
import { updateInventory } from "@/api/operations/inventory/update_inventory";
import { ErrorCode, ResourceError } from "@/api/types/errors";

interface DeleteSaleResponse {
  message: string;
}

async function deleteSale(saleId: number): Promise<DeleteSaleResponse> {
  try {
    return await prisma.$transaction(
      async (prisma) => {
        const sale = await prisma.sale.findUnique({
          where: { id: saleId },
        });

        if (!sale) {
          throw new ResourceError(ErrorCode.RESOURCE_NOT_FOUND);
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
      },
      {
        timeout: 20000,
        maxWait: 20000,
      }
    );
  } catch (error) {
    if (error instanceof ResourceError) {
      throw error;
    }
    log.error(error);
    throw new Error("failed to delete sale");
  }
}

export { deleteSale };
