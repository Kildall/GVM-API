import { prisma } from "@/api/helpers/prisma";
import { ParamsError } from "@/api/types/errors";
import type { Employee } from "@prisma/client";

interface UpdateEmployeeInput {
  name?: string;
  position?: string;
}

interface UpdateEmployeeResponse extends Employee {}

async function updateEmployee(
  employeeId: number,
  input: UpdateEmployeeInput
): Promise<UpdateEmployeeResponse> {
  try {
    const employee = await prisma.employee.update({
      where: { id: employeeId, enabled: true },
      data: input,
    });
    return employee;
  } catch (error) {
    throw new ParamsError("could not update employee");
  }
}

export { updateEmployee };
