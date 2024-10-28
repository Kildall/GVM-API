import { prisma } from "@/api/helpers/prisma";
import { ErrorCode, ResourceError } from "@/api/types/errors";
import type { Customer } from "@prisma/client";

interface GetCustomerByIdResponse extends Customer {}

async function getCustomerById(
  customerId: number
): Promise<GetCustomerByIdResponse> {
  const customer = await prisma.customer.findUnique({
    where: {
      id: customerId,
      enabled: true,
    },
    include: {
      sales: true,
      addresses: true,
      _count: {
        select: {
          sales: true,
          addresses: true,
        },
      },
    },
  });

  if (!customer) {
    throw new ResourceError(ErrorCode.RESOURCE_ERROR);
  }

  return { ...customer };
}

export { getCustomerById };
