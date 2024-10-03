import { prisma } from "@/api/helpers/prisma";
import { ParamsError } from "@/api/types/errors";
import type { Delivery, DeliveryStatusEnum } from "@prisma/client";

interface UpdateDeliveryInput {
  deliveryId: number;
  deliveryPersonId?: number;
  addressId?: number;
  status?: DeliveryStatusEnum;
}

interface UpdateDeliveryResponse extends Delivery {}

async function updateDelivery({
  deliveryId,
  addressId,
  deliveryPersonId,
  status,
}: UpdateDeliveryInput): Promise<UpdateDeliveryResponse> {
  try {
    const updatedDelivery = await prisma.$transaction(async (prisma) => {
      const delivery = await prisma.delivery.update({
        where: { id: deliveryId },
        data: {
          addressId,
          deliveryPersonId,
          lastUpdateDate: new Date(),
          status: status,
        },
        include: {
          sale: true,
          deliveryPerson: true,
          address: true,
        },
      });

      if (status) {
        await prisma.deliveryPersonDelivery.updateMany({
          where: { deliveryId },
          data: { status },
        });
      }

      return delivery;
    });

    return updatedDelivery;
  } catch (error) {
    throw new ParamsError("could not update delivery");
  }
}

export { updateDelivery };
