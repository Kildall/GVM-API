import { prisma } from "@/api/helpers/prisma";
import { ErrorCode, ResourceError } from "@/api/types/errors";

import type { Supplier } from "@prisma/client";

interface GetSupplierByIdResponse extends Supplier {}

async function getSupplierById(
  supplierId: number
): Promise<GetSupplierByIdResponse> {
  const supplier = await prisma.supplier.findUnique({
    where: { id: supplierId, enabled: true },
  });

  if (!supplier) {
    throw new ResourceError(ErrorCode.RESOURCE_NOT_FOUND);
  }

  return supplier;
}

export { getSupplierById };
