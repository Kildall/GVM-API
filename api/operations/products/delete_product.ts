import { log } from "@/api/helpers/pino";
import { prisma } from "@/api/helpers/prisma";
import { ParamsError } from "@/api/types/errors";

interface DeleteProductResponse {
  message: string;
}

async function deleteProduct(
  productId: number
): Promise<DeleteProductResponse> {
  try {
    // TODO: Agregar validacion de montos de estos productos en ventas
    const deletedProduct = await prisma.product.updateMany({
      where: { id: productId, enabled: true },
      data: {
        enabled: false,
      },
    });

    if (deletedProduct.count === 0) {
      throw new ParamsError("product not found or has already been deleted");
    }

    return { message: "product deleted successfully" };
  } catch (error) {
    log.error(error);
    if (error instanceof ParamsError) {
      throw error;
    }
    throw new ParamsError("could not delete product");
  }
}

export { deleteProduct };
