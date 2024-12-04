import { log } from "@/api/helpers/pino";
import { prisma } from "@/api/helpers/prisma";
import { ErrorCode, ResourceError, ServerError } from "@/api/types/errors";

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

    await prisma.address.updateMany({
      where: {
        customerId,
      },
      data: {
        enabled: false,
      },
    });

    if (updatedCustomer.count === 0) {
      throw new ResourceError(ErrorCode.RESOURCE_UPDATE_FAILED);
    }

    return { message: "customer deleted successfully" };
  } catch (error) {
    if (error instanceof ResourceError) {
      throw error;
    }
    log.error(error);
    throw new ServerError();
  }
}

export { deleteCustomer };
