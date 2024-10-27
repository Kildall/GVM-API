import { prisma } from "@/api/helpers/prisma";
import { ErrorCode, ResourceError } from "@/api/types/errors";
import type { Employee } from "@prisma/client";

interface GetEmployeeByIdResponse extends Employee {}

async function getEmployeeById(
  employeeId: number
): Promise<GetEmployeeByIdResponse> {
  const employee = await prisma.employee.findUnique({
    where: { id: employeeId, enabled: true },
    include: {
      deliveries: true,
      sales: true,
      purchases: true,
      employeeDelivery: true,
      _count: {
        select: {
          deliveries: true,
          sales: true,
          purchases: true,
        },
      },
    },
  });

  if (!employee) {
    throw new ResourceError(ErrorCode.RESOURCE_NOT_FOUND);
  }

  return employee;
}
export { getEmployeeById };
