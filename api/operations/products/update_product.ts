import { prisma } from "@/api/helpers/prisma";
import { ServerError } from "@/api/types/errors";

import type { Product } from "@prisma/client";

interface UpdatePurchaseInput {
  productId: number;
  name?: string;
  measure?: number;
  brand?: string;
  price?: number;
  quantity?: number;
}

interface UpdateProductResponse extends Product {}

async function updateProduct({
  productId,
  brand,
  measure,
  name,
  price,
  quantity,
}: UpdatePurchaseInput): Promise<UpdateProductResponse> {
  try {
    // TODO: Agregar validacion de montos de estos productos en ventas

    const product = await prisma.product.update({
      where: { id: productId, enabled: true },
      data: { brand, measure, name, price, quantity },
    });
    return product;
  } catch (error) {
    throw new ServerError();
  }
}

export { updateProduct };
