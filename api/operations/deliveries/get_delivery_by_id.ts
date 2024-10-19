import { prisma } from "@/api/helpers/prisma";
import { ErrorCode, ResourceError, ServerError } from "@/api/types/errors";
import type { Delivery, Sale, DeliveryPerson, Address } from "@prisma/client";

interface GetDeliveryByIdResponse extends Delivery {
  sale: Sale;
  deliveryPerson: DeliveryPerson | null;
  address: Address;
}

async function getDeliveryById(
  deliveryId: number
): Promise<GetDeliveryByIdResponse> {
  try {
    const delivery = await prisma.delivery.findUnique({
      where: { id: deliveryId },
      include: {
        sale: true,
        deliveryPerson: true,
        address: true,
      },
    });

    if (!delivery) {
      throw new ResourceError(ErrorCode.RESOURCE_NOT_FOUND);
    }

    return delivery;
  } catch (error) {
    if (error instanceof ResourceError) {
      throw error;
    }
    throw new ServerError();
  }
}

export { getDeliveryById };
