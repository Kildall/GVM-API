import { prisma } from "@/api/helpers/prisma";
import { ParamsError } from "@/api/types/errors";

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
      throw new ParamsError("employee not found or already deleted");
    }

    return { message: "employee deleted successfully" };
  } catch (error) {
    if (error instanceof ParamsError) {
      throw error;
    }
    throw new Error("failed to delete employee");
  }
}

export { deleteEmployee };
