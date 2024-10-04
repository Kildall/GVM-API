import { log } from "@/api/helpers/pino";
import { prisma } from "@/api/helpers/prisma";
import { ParamsError } from "@/api/types/errors";
import type { Product } from "@prisma/client";

interface GetAllProductsResponse {
  products: Product[];
}

async function getProducts(): Promise<GetAllProductsResponse> {
  try {
    const products = await prisma.product.findMany({
      where: {
        enabled: true,
      },
    });
    return { products };
  } catch (error) {
    log.error(error);
    throw new ParamsError("could not retrieve products");
  }
}

export { getProducts };
