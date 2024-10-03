import { prisma } from "@/api/helpers/prisma";
import { ParamsError } from "@/api/types/errors";
import type {
  Purchase,
  PurchaseProduct,
  Employee,
  Supplier,
  Product,
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
      throw new ParamsError("purchase not found");
    }

    return purchase;
  } catch (error) {
    if (error instanceof ParamsError) {
      throw error;
    }
    throw new ParamsError(`could not retrieve purchase with id ${purchaseId}`);
  }
}

export { getPurchaseById };
