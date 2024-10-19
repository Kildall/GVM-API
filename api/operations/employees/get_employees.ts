import { log } from "@/api/helpers/pino";
import { prisma } from "@/api/helpers/prisma";
import { ServerError } from "@/api/types/errors";

import type { Employee } from "@prisma/client";

interface GetAllProductsResponse {
  employees: Employee[];
}

async function getEmployees(): Promise<GetAllProductsResponse> {
  try {
    const employees = await prisma.employee.findMany({
      where: {
        enabled: true,
      },
    });
    return { employees };
  } catch (error) {
    log.error(error);
    throw new ServerError();
  }
}

export { getEmployees };
