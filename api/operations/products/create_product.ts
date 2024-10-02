import { log } from "@/api/helpers/pino";
import { prisma } from "@/api/helpers/prisma";
import { ParamsError } from "@/api/types/errors";
import type { Product } from "@prisma/client";

interface CreateProductInput {
  name: string;
  measure: number;
  brand: string;
  price: number;
  quantity: number;
}

interface CreateProductResponse extends Product {}

async function createProduct(
  input: CreateProductInput
): Promise<CreateProductResponse> {
  try {
    const product = await prisma.product.create({
      data: {
        ...input,
      },
    });

    return product;
  } catch (error) {
    log.error(error);
    throw new ParamsError("could not create product");
  }
}

export { createProduct };
