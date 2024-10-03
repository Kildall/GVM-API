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
    const deletedProduct = await prisma.product.delete({
      where: { id: productId },
    });

    if (!deletedProduct) {
      throw new ParamsError("product not found");
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
