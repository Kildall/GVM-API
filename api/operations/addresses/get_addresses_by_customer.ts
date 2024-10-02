import { prisma } from "@/api/helpers/prisma";
import { ParamsError } from "@/api/types/errors";
import type { Address } from "@prisma/client";

interface GetAddressesByCustomersResponse {
  result: Address[];
}

async function getAddressesByCustomer(
  customerId: number
): Promise<GetAddressesByCustomersResponse> {
  const customer = await prisma.customer.findFirst({
    where: {
      id: customerId,
      enabled: true,
    },
  });

  if (!customer) {
    throw new ParamsError("customer not found");
  }

  const addresses = await prisma.address.findMany({
    where: {
      customerId: customerId,
      enabled: true,
    },
  });

  const response: GetAddressesByCustomersResponse = {
    result: addresses,
  };

  return response;
}

export { getAddressesByCustomer };
