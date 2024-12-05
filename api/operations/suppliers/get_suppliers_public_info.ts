import { log } from "@/api/helpers/pino";
import { prisma } from "@/api/helpers/prisma";
import { ServerError } from "@/api/types/errors";

import type { Supplier } from "@prisma/client";

interface GetAllSuppliersResponse {
  suppliers: Pick<Supplier, "id" | "name">[];
}

async function getSuppliersPublicInfo(): Promise<GetAllSuppliersResponse> {
  try {
    const suppliers = await prisma.supplier.findMany({
      where: {
        enabled: true,
      },
      select: {
        id: true,
        name: true,
      },
    });
    return { suppliers };
  } catch (error) {
    log.error(error);
    throw new ServerError();
  }
}

export { getSuppliersPublicInfo };
