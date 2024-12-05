import { log } from "@/api/helpers/pino";
import { prisma } from "@/api/helpers/prisma";
import { ServerError } from "@/api/types/errors";

import type { Product, ProductSale, Sale } from "@prisma/client";

interface GetAllSalesResponse {
  sales: (Sale & {
    products: (ProductSale & {
      product: Product;
    })[];
  })[];
}

async function getSalesPublicInfo(): Promise<GetAllSalesResponse> {
  try {
    const sales = await prisma.sale.findMany({
      include: {
        products: {
          include: {
            product: true,
          },
        },
        _count: {
          select: {
            products: true,
            deliveries: true,
          },
        },
      },
    });

    return { sales };
  } catch (error) {
    log.error(error);
    throw new ServerError();
  }
}

export { getSalesPublicInfo };
