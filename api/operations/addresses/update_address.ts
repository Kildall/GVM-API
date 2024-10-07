import { prisma } from "@/api/helpers/prisma";
import { ParamsError } from "@/api/types/errors";
import type { Address } from "@prisma/client";

interface UpdateAddressInput {
  addressId: number;
  name?: string;
  street1?: string;
  street2?: string;
  postalCode?: string;
  state?: string;
  city?: string;
  details?: string;
}

interface UpdateAddressResponse extends Address {}

async function updateAddress({
  addressId,
  city,
  details,
  name,
  postalCode,
  state,
  street1,
  street2,
}: UpdateAddressInput): Promise<UpdateAddressResponse> {
  try {
    const updatedAddress = await prisma.address.update({
      where: { id: addressId, enabled: true },
      data: {
        city,
        details,
        name,
        postalCode,
        state,
        street1,
        street2,
      },
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
