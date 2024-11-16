import { log } from "@/api/helpers/pino";
import { prisma } from "@/api/helpers/prisma";
import { ServerError } from "@/api/types/errors";

import type { Prisma } from "@prisma/client";

const postSelect = {
  id: true,
  name: true,
  position: true,
  user: {
    select: {
      email: true,
    },
  },
} satisfies Prisma.EmployeeSelect;

type GetEmployeesResponse = {
  employees: Prisma.EmployeeGetPayload<{
    select: typeof postSelect;
  }>[];
};

async function getEmployees(): Promise<GetEmployeesResponse> {
  try {
    const employees = await prisma.employee.findMany({
      where: {
        enabled: true,
      },
      select: postSelect,
    });
    return { employees };
  } catch (error) {
    log.error(error);
    throw new ServerError();
  }
}

export { getEmployees };
