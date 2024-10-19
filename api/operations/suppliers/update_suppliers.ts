import { prisma } from "@/api/helpers/prisma";
import { ServerError } from "@/api/types/errors";

import type { Supplier } from "@prisma/client";

interface UpdateSupplierInput {
  supplierId: number;
  name?: string;
}

interface UpdateSupplierResponse extends Supplier {}

async function updateSupplier({
  supplierId,
  name,
}: UpdateSupplierInput): Promise<UpdateSupplierResponse> {
  try {
    const supplier = await prisma.supplier.update({
      where: { id: supplierId, enabled: true },
      data: { name },
    });
    return supplier;
  } catch (error) {
    throw new ServerError();
  }
}

export { updateSupplier };
