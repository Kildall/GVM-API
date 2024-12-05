import { log } from "@/api/helpers/pino";
import { prisma } from "@/api/helpers/prisma";
import { ServerError } from "@/api/types/errors";

import type { Product } from "@prisma/client";

interface GetAllProductsResponse {
  products: Pick<
    Product,
    "id" | "name" | "price" | "quantity" | "measure" | "brand"
  >[];
}

async function getProductsPublicInfo(): Promise<GetAllProductsResponse> {
  try {
    const products = await prisma.product.findMany({
      where: {
        enabled: true,
      },
      select: {
        id: true,
        name: true,
        price: true,
        quantity: true,
        measure: true,
        brand: true,
      },
    });
    return { products };
  } catch (error) {
    log.error(error);
    throw new ServerError();
  }
}

export { getProductsPublicInfo };
