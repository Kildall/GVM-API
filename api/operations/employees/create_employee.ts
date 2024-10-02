import { prisma } from "@/api/helpers/prisma";
import { ParamsError } from "@/api/types/errors";
import type { Supplier } from "@prisma/client";

interface CreateEmployeeInput {
  name: string;
  position: string;
}

interface CreateEmployeeResponse extends Supplier {}

async function createEmployee({
  name,
  position,
}: CreateEmployeeInput): Promise<CreateEmployeeResponse> {
  try {
    const employee = await prisma.employee.create({
      data: {
        name,
        position,
      },
    });

    return employee;
  } catch (error) {
    throw new ParamsError("could not create supplier");
  }
}

export { createEmployee };
