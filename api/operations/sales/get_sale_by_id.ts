import { prisma } from "@/api/helpers/prisma";
import { ParamsError } from "@/api/types/errors";
import type { Sale, ProductSale, Customer, Product } from "@prisma/client";

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
      },
    });

    if (!sale) {
      throw new ParamsError("sale not found");
    }

    return sale;
  } catch (error) {
    if (error instanceof ParamsError) {
      throw error;
    }
    throw new ParamsError(`could not retrieve sale with id ${saleId}`);
  }
}

export { getSaleById };
