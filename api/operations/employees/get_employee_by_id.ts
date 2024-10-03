import { prisma } from "@/api/helpers/prisma";
import { ParamsError } from "@/api/types/errors";
import type { Employee } from "@prisma/client";

interface GetEmployeeByIdResponse extends Employee {}

async function getEmployeeById(
  employeeId: number
): Promise<GetEmployeeByIdResponse> {
  const employee = await prisma.employee.findUnique({
    where: { id: employeeId, enabled: true },
  });

  if (!employee) {
    throw new ParamsError("employee not found");
  }

  return employee;
}
export { getEmployeeById };
