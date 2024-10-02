import { prisma } from "@/api/helpers/prisma";
import { ParamsError } from "@/api/types/errors";

interface DeleteCustomerResponse {
  message: string;
}

async function deleteCustomer(customerId: number) {
  const customer = await prisma.customer.findFirst({
    where: {
      id: customerId,
    },
  });

  if (!customer) {
    throw new ParamsError("customer not found");
  }

  await prisma.customer.update({
    where: {
      id: customer.id,
    },
    data: {
      enabled: false,
    },
  });

  const response: DeleteCustomerResponse = {
    message: "customer deleted successfully",
  };

  return response;
}

export { deleteCustomer };
