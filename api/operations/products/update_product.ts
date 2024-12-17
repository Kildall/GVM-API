import { log } from "@/api/helpers/pino";
import { prisma } from "@/api/helpers/prisma";
import {
  APIError,
  ErrorCode,
  ServerError,
  ValidationError,
} from "@/api/types/errors";

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
    const salesWithProduct = await prisma.sale.findMany({
      where: {
        products: {
          some: {
            productId,
          },
        },
      },
      include: {
        products: true,
      },
    });

    const minimumAmount = salesWithProduct.reduce((acc, sale) => {
      const product = sale.products.find((p) => p.productId === productId);
      return acc + (product?.quantity || 0);
    }, 0);

    if (quantity && quantity < minimumAmount) {
      throw new ValidationError(ErrorCode.INSUFFICIENT_INVENTORY);
    }

    const product = await prisma.product.update({
      where: { id: productId, enabled: true },
      data: { brand, measure, name, price, quantity },
    });

    return product;
  } catch (error) {
    if (error instanceof APIError) {
      throw error;
    }
    log.error(error);
    throw new ServerError();
  }
}

export { updateProduct };
