import { prisma } from "@/api/helpers/prisma";
import { ErrorCode, ResourceError, ServerError } from "@/api/types/errors";

import type {
  Employee,
  Product,
  Purchase,
  PurchaseProduct,
  Supplier,
} from "@prisma/client";

interface GetPurchaseByIdResponse extends Purchase {
  employee: Employee;
  supplier: Supplier;
  products: (PurchaseProduct & {
    product: Product;
  })[];
}

async function getPurchaseById(
  purchaseId: number
): Promise<GetPurchaseByIdResponse> {
  try {
    const purchase = await prisma.purchase.findUnique({
      where: { id: purchaseId },
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

    if (!purchase) {
      throw new ResourceError(ErrorCode.RESOURCE_NOT_FOUND);
    }

    return purchase;
  } catch (error) {
    if (error instanceof ResourceError) {
      throw error;
    }
    throw new ServerError();
  }
}

export { getPurchaseById };
