import { prisma } from "@/api/helpers/prisma";
import { ErrorCode, ResourceError } from "@/api/types/errors";
import type { Product } from "@prisma/client";

interface GetProductByIdResponse extends Product {}

async function getProductById(
  productId: number
): Promise<GetProductByIdResponse> {
  const product = await prisma.product.findUnique({
    where: { id: productId, enabled: true },
    include: {
      purchases: true,
      sales: true,
      _count: {
        select: {
          purchases: true,
          sales: true,
        },
      },
    },
  });

  if (!product) {
    throw new ResourceError(ErrorCode.RESOURCE_NOT_FOUND);
  }

  return { ...product };
}

export { getProductById };
