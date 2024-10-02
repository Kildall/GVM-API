import { prisma } from "@/api/helpers/prisma";
import type { Address } from "@prisma/client";

interface GetAddressesResponse {
  result: Address[];
}

async function getAddresses(): Promise<GetAddressesResponse> {
  const addresses = await prisma.address.findMany({
    where: {
      enabled: true,
    },
  });

  const response: GetAddressesResponse = {
    result: addresses,
  };

  return response;
}

export { getAddresses };
