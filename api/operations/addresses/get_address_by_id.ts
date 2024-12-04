import { prisma } from "@/api/helpers/prisma";
import { ErrorCode, ResourceError, ServerError } from "@/api/types/errors";
import type { Address, Customer, Delivery } from "@prisma/client";

interface GetAddressByIdResponse extends Address {
  customer: Customer;
  deliveries: Delivery[];
}

async function getAddressById(
  addressId: number
): Promise<GetAddressByIdResponse> {
  try {
    const address = await prisma.address.findUnique({
      where: { id: addressId },
      include: {
        customer: true,
        deliveries: true,
      },
    });

    if (!address) {
      throw new ResourceError(ErrorCode.RESOURCE_NOT_FOUND);
    }

    return address;
  } catch (error) {
    if (error instanceof ResourceError) {
      throw error;
    }
    throw new ServerError();
  }
}

export { getAddressById };
