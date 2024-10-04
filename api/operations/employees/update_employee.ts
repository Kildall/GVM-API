import { prisma } from "@/api/helpers/prisma";
import { ParamsError } from "@/api/types/errors";
import type { Employee } from "@prisma/client";

interface UpdateEmployeeInput {
  employeeId: number;
  name?: string;
  position?: string;
}

interface UpdateEmployeeResponse extends Employee {}

async function updateEmployee({
  employeeId,
  name,
  position,
}: UpdateEmployeeInput): Promise<UpdateEmployeeResponse> {
  try {
    const employee = await prisma.employee.update({
      where: { id: employeeId, enabled: true },
      data: { name, position },
    });
    return employee;
  } catch (error) {
    throw new ParamsError("could not update employee");
  }
}

export { updateEmployee };
