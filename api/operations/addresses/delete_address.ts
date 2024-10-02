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
  const address = await prisma.address.findFirst({
    where: {
      id: addressId,
      customerId: customerId,
      enabled: true,
    },
  });

  if (!address) {
    throw new ParamsError("address not found");
  }

  await prisma.address.update({
    where: {
      id: address.id,
    },
    data: {
      enabled: false,
    },
  });

  const response: DeleteAddressResponse = {
    message: "address deleted succesfully",
  };

  return response;
}

export { deleteAddress };
