import { prisma } from "@/api/helpers/prisma";
import { ParamsError } from "@/api/types/errors";
import type { Customer } from "@prisma/client";

interface GetCustomersResponse {
  result: Customer[];
}

async function getCustomers(): Promise<GetCustomersResponse> {
  const customers = await prisma.customer.findMany({
    where: {
      enabled: true,
    },
  });

  if (!customers) {
    throw new ParamsError("customer not found");
  }

  const response: GetCustomersResponse = {
    result: customers,
  };

  return response;
}

export { getCustomers };
