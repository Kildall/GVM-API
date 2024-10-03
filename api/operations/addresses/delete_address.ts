import { prisma } from "@/api/helpers/prisma";
import { ParamsError } from "@/api/types/errors";

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
      throw new ParamsError("address not found or already deleted");
    }

    return { message: "address deleted successfully" };
  } catch (error) {
    if (error instanceof ParamsError) {
      throw error;
    }
    throw new Error("failed to delete address");
  }
}

export { deleteAddress };
