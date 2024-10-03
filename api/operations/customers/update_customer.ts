import { prisma } from "@/api/helpers/prisma";
import { ParamsError } from "@/api/types/errors";
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
      where: { id: customerId },
      data: {
        name,
        phone,
      },
    });

    if (!updatedCustomer) {
      throw new ParamsError("Customer not found");
    }

    return updatedCustomer;
  } catch (error) {
    if (error instanceof ParamsError) {
      throw error;
    }
    throw new ParamsError("Could not update customer");
  }
}

export { updateCustomer };
