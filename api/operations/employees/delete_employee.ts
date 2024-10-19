import { prisma } from "@/api/helpers/prisma";
import { ErrorCode, ResourceError, ServerError } from "@/api/types/errors";

interface DeleteEmployeeResponse {
  message: string;
}

async function deleteEmployee(
  employeeId: number
): Promise<DeleteEmployeeResponse> {
  try {
    const updatedEmployee = await prisma.employee.updateMany({
      where: {
        id: employeeId,
        enabled: true,
      },
      data: {
        enabled: false,
      },
    });

    if (updatedEmployee.count === 0) {
      throw new ResourceError(ErrorCode.RESOURCE_UPDATE_FAILED);
    }

    return { message: "employee deleted successfully" };
  } catch (error) {
    if (error instanceof ResourceError) {
      throw error;
    }
    throw new ServerError();
  }
}

export { deleteEmployee };
