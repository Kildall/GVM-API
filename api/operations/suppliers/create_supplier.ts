import { prisma } from "@/api/helpers/prisma";
import { ServerError } from "@/api/types/errors";

import type { Supplier } from "@prisma/client";

interface CreateSupplierInput {
  name: string;
}

interface CreateSupplierResponse extends Supplier {}

async function createSupplier({
  name,
}: CreateSupplierInput): Promise<CreateSupplierResponse> {
  try {
    const supplier = await prisma.supplier.create({
      data: {
        name,
      },
    });

    return supplier;
  } catch (error) {
    throw new ServerError();
  }
}

export { createSupplier };
