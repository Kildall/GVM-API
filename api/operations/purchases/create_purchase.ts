import { log } from "@/api/helpers/pino";
import { prisma } from "@/api/helpers/prisma";
import { ParamsError } from "@/api/types/errors";
import type { Purchase } from "@prisma/client";

interface Product {
  id: number;
  quantity: number;
}

interface CreatePurchaseInput {
  amount: number;
  date: Date;
  description: string;
  employeeId: number;
  supplierId: number;
  products: Product[];
}

interface CreatePurchaseResponse extends Purchase {}

async function createPurchase(
  input: CreatePurchaseInput
): Promise<CreatePurchaseResponse> {
  try {
    const purchase = await prisma.purchase.create({
      data: {
        ...input,
        products: {
          create: input.products.map((p) => ({
            quantity: p.quantity,
            productId: p.id,
          })),
        },
      },
    });

    return purchase;
  } catch (error) {
    log.error(error);
    throw new ParamsError("could not create purchase");
  }
}

export { createPurchase };
