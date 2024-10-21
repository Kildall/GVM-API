import { prisma } from "@/api/helpers/prisma";
import { ServerError } from "@/api/types/errors";
import type { Delivery, DeliveryStatusEnum } from "@prisma/client";

interface UpdateDeliveryInput {
  deliveryId: number;
  employeeId?: number;
  addressId?: number;
  status?: DeliveryStatusEnum;
}

interface UpdateDeliveryResponse extends Delivery {}

async function updateDelivery({
  deliveryId,
  addressId,
  employeeId,
  status,
}: UpdateDeliveryInput): Promise<UpdateDeliveryResponse> {
  try {
    const updatedDelivery = await prisma.$transaction(async (prisma) => {
      const delivery = await prisma.delivery.update({
        where: { id: deliveryId },
        data: {
          addressId,
          employeeId,
          lastUpdateDate: new Date(),
          status: status,
        },
        include: {
          sale: true,
          employee: true,
          address: true,
        },
      });

      if (status) {
        await prisma.employeeDelivery.updateMany({
          where: { deliveryId },
          data: { status },
        });
      }

      return delivery;
    });

    return updatedDelivery;
  } catch (error) {
    throw new ServerError();
  }
}

export { updateDelivery };
