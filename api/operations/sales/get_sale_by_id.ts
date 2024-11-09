import { prisma } from "@/api/helpers/prisma";
import { ErrorCode, ResourceError, ServerError } from "@/api/types/errors";

import type { Customer, Product, ProductSale, Sale } from "@prisma/client";

interface GetSaleByIdResponse extends Sale {
  customer: Customer;
  products: (ProductSale & {
    product: Product;
  })[];
}

async function getSaleById(saleId: number): Promise<GetSaleByIdResponse> {
  try {
    const sale = await prisma.sale.findUnique({
      where: { id: saleId },
      include: {
        customer: true,
        products: {
          include: {
            product: true,
          },
        },
        employee: true,
        deliveries: true,
        _count: {
          select: {
            deliveries: true,
            products: true,
          },
        },
      },
    });

    if (!sale) {
      throw new ResourceError(ErrorCode.RESOURCE_NOT_FOUND);
    }

    return sale;
  } catch (error) {
    if (error instanceof ResourceError) {
      throw error;
    }
    throw new ServerError();
  }
}

export { getSaleById };
