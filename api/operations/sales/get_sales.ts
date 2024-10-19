import { log } from "@/api/helpers/pino";
import { prisma } from "@/api/helpers/prisma";
import { ServerError } from "@/api/types/errors";

import type { Customer, Product, ProductSale, Sale } from "@prisma/client";

interface GetAllSalesResponse {
  sales: (Sale & {
    customer: Customer;
    products: (ProductSale & {
      product: Product;
    })[];
  })[];
}

interface GetSalesOptions {
  skip?: number;
  take?: number;
  orderBy?: {
    [key: string]: "asc" | "desc";
  };
}

async function getSales(
  options: GetSalesOptions = {}
): Promise<GetAllSalesResponse> {
  try {
    const { skip = 0, take = 50, orderBy = { startDate: "desc" } } = options;

    const sales = await prisma.sale.findMany({
      skip,
      take,
      orderBy,
      include: {
        customer: true,
        products: {
          include: {
            product: true,
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

export { getSales };
