import { prisma } from "@/api/helpers/prisma";
import { ParamsError } from "@/api/types/errors";
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
      throw new ParamsError("delivery not found");
    }

    return delivery;
  } catch (error) {
    if (error instanceof ParamsError) {
      throw error;
    }
    throw new ParamsError(`could not retrieve delivery with id ${deliveryId}`);
  }
}

export { getDeliveryById };
