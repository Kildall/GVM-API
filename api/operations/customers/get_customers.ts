import { prisma } from "@/api/helpers/prisma";
import { ErrorCode, ResourceError } from "@/api/types/errors";
import type { Customer } from "@prisma/client";

interface GetCustomersResponse {
  customers: Customer[];
}

async function getCustomers(): Promise<GetCustomersResponse> {
  const customers = await prisma.customer.findMany({
    where: {
      enabled: true,
    },
  });

  if (!customers) {
    throw new ResourceError(ErrorCode.RESOURCE_ERROR);
  }

  const response: GetCustomersResponse = {
    customers,
  };

  return response;
}

export { getCustomers };
