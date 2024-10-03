import { prisma } from "@/api/helpers/prisma";
import { ParamsError } from "@/api/types/errors";
import type { Product } from "@prisma/client";

interface GetProductByIdResponse extends Product {}

async function getProductById(
  productId: number
): Promise<GetProductByIdResponse> {
  const product = await prisma.product.findUnique({
    where: { id: productId },
  });

  if (!product) {
    throw new ParamsError("product not found");
  }

  return { ...product };
}
