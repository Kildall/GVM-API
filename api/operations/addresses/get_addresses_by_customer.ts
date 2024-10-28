import { prisma } from "@/api/helpers/prisma";
import { ErrorCode, ResourceError } from "@/api/types/errors";
import type { Address } from "@prisma/client";

interface GetAddressesByCustomersResponse {
  result: Address[];
}

async function getAddressesByCustomer(
  customerId: number
): Promise<GetAddressesByCustomersResponse> {
  const customer = await prisma.customer.findUnique({
    where: {
      id: customerId,
      enabled: true,
    },
  });

  if (!customer) {
    throw new ResourceError(ErrorCode.RESOURCE_NOT_FOUND);
  }

  const addresses = await prisma.address.findMany({
    where: {
      customerId: customerId,
      enabled: true,
    },
    include: {
      deliveries: true,
      customer: true,
      _count: {
        select: {
          deliveries: true,
        },
      },
    },
  });

  const response: GetAddressesByCustomersResponse = {
    result: addresses,
  };

  return response;
}

export { getAddressesByCustomer };
