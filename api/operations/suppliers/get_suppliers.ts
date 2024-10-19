import { log } from "@/api/helpers/pino";
import { prisma } from "@/api/helpers/prisma";
import { ServerError } from "@/api/types/errors";

import type { Supplier } from "@prisma/client";

interface GetAllSuppliersResponse {
  suppliers: Supplier[];
}

async function getSuppliers(): Promise<GetAllSuppliersResponse> {
  try {
    const suppliers = await prisma.supplier.findMany({
      where: {
        enabled: true,
      },
    });
    return { suppliers };
  } catch (error) {
    log.error(error);
    throw new ServerError();
  }
}

export { getSuppliers };
