import { prisma } from "@/api/helpers/prisma";
import { ErrorCode, ResourceError, ServerError } from "@/api/types/errors";
import type { Customer } from "@prisma/client";

interface UpdateCustomerInput {
  customerId: number;
  name?: string;
  phone?: string;
}

interface UpdateCustomerResponse extends Customer {}

async function updateCustomer({
  customerId,
  name,
  phone,
}: UpdateCustomerInput): Promise<UpdateCustomerResponse> {
  try {
    const updatedCustomer = await prisma.customer.update({
      where: { id: customerId, enabled: true },
      data: {
        name,
        phone,
      },
    });

    if (!updatedCustomer) {
      throw new ResourceError(ErrorCode.RESOURCE_ERROR);
    }

    return updatedCustomer;
  } catch (error) {
    if (error instanceof ResourceError) {
      throw error;
    }
    throw new ServerError();
  }
}

export { updateCustomer };
