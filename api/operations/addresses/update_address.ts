import { prisma } from "@/api/helpers/prisma";
import { ParamsError } from "@/api/types/errors";
import type { Address } from "@prisma/client";

interface UpdateAddressInput {
  name?: string;
  street1?: string;
  street2?: string;
  postalCode?: string;
  state?: string;
  city?: string;
  details?: string;
  enabled?: boolean;
}

interface UpdateAddressResponse extends Address {}

async function updateAddress(
  addressId: number,
  input: UpdateAddressInput
): Promise<UpdateAddressResponse> {
  try {
    const updatedAddress = await prisma.address.update({
      where: { id: addressId },
      data: input,
    });

    if (!updatedAddress) {
      throw new ParamsError("Address not found");
    }

    return updatedAddress;
  } catch (error) {
    if (error instanceof ParamsError) {
      throw error;
    }
    throw new ParamsError("Could not update address");
  }
}

export { updateAddress };
