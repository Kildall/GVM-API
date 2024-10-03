import { prisma } from "@/api/helpers/prisma";
import { ParamsError } from "@/api/types/errors";
import type { Supplier } from "@prisma/client";

interface UpdateSupplierInput {
  name?: string;
}

interface UpdateSupplierResponse extends Supplier {}

async function updateSupplier(
  supplierId: number,
  input: UpdateSupplierInput
): Promise<UpdateSupplierResponse> {
  try {
    const supplier = await prisma.supplier.update({
      where: { id: supplierId, enabled: true },
      data: input,
    });
    return supplier;
  } catch (error) {
    throw new ParamsError("could not update supplier");
  }
}

export { updateSupplier };
