import { log } from "@/api/helpers/pino";
import { prisma } from "@/api/helpers/prisma";
import { ServerError } from "@/api/types/errors";

import type {
  Employee,
  Product,
  Purchase,
  PurchaseProduct,
  Supplier,
} from "@prisma/client";

interface GetAllPurchasesResponse {
  purchases: (Purchase & {
    employee: Employee;
    supplier: Supplier;
    products: (PurchaseProduct & {
      product: Product;
    })[];
  })[];
}

interface GetPurchasesOptions {
  skip?: number;
  take?: number;
  orderBy?: {
    [key: string]: "asc" | "desc";
  };
}

async function getPurchases(
  options: GetPurchasesOptions = {}
): Promise<GetAllPurchasesResponse> {
  try {
    const { skip = 0, take = 50, orderBy = { date: "desc" } } = options;

    const purchases = await prisma.purchase.findMany({
      skip,
      take,
      orderBy,
      include: {
        employee: true,
        supplier: true,
        products: {
          include: {
            product: true,
          },
        },
      },
    });

    return { purchases };
  } catch (error) {
    log.error(error);
    throw new ServerError();
  }
}

export { getPurchases };
