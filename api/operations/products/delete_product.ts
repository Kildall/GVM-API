import { log } from "@/api/helpers/pino";
import { prisma } from "@/api/helpers/prisma";
import { ErrorCode, ResourceError, ServerError } from "@/api/types/errors";

interface DeleteProductResponse {
  message: string;
}

async function deleteProduct(
  productId: number
): Promise<DeleteProductResponse> {
  try {
    const deletedProduct = await prisma.product.updateMany({
      where: { id: productId, enabled: true },
      data: {
        enabled: false,
      },
    });

    if (deletedProduct.count === 0) {
      throw new ResourceError(ErrorCode.RESOURCE_NOT_FOUND);
    }

    return { message: "product deleted successfully" };
  } catch (error) {
    log.error(error);
    if (error instanceof ResourceError) {
      throw error;
    }
    throw new ServerError();
  }
}

export { deleteProduct };
