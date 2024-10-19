import { log } from "@/api/helpers/pino";
import { prisma } from "@/api/helpers/prisma";
import {
  ErrorCode,
  InvalidParamsError,
  ResourceError,
  ServerError,
} from "@/api/types/errors";

interface DeleteAddressInput {
  addressId: number;
  customerId: number;
}

interface DeleteAddressResponse {
  message: string;
}

async function deleteAddress({
  addressId,
  customerId,
}: DeleteAddressInput): Promise<DeleteAddressResponse> {
  try {
    const updatedAddress = await prisma.address.updateMany({
      where: {
        id: addressId,
        customerId: customerId,
        enabled: true,
      },
      data: {
        enabled: false,
      },
    });

    if (updatedAddress.count === 0) {
      throw new ResourceError(ErrorCode.RESOURCE_UPDATE_FAILED);
    }

    return { message: "address deleted successfully" };
  } catch (error) {
    if (error instanceof InvalidParamsError) {
      throw error;
    }
    log.error(error);
    throw new ServerError();
  }
}

export { deleteAddress };
