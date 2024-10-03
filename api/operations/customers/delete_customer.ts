import { prisma } from "@/api/helpers/prisma";
import { ParamsError } from "@/api/types/errors";

interface DeleteCustomerResponse {
  message: string;
}

async function deleteCustomer(
  customerId: number
): Promise<DeleteCustomerResponse> {
  try {
    const updatedCustomer = await prisma.customer.updateMany({
      where: {
        id: customerId,
        enabled: true,
      },
      data: {
        enabled: false,
      },
    });

    if (updatedCustomer.count === 0) {
      throw new ParamsError("customer not found or already deleted");
    }

    return { message: "customer deleted successfully" };
  } catch (error) {
    if (error instanceof ParamsError) {
      throw error;
    }
    throw new Error("failed to delete customer");
  }
}

export { deleteCustomer };
