import { prisma } from "@/api/helpers/prisma";
import { ParamsError } from "@/api/types/errors";
import {
  BusinessStatusEnum,
  DeliveryStatusEnum,
  DriverStatusEnum,
  type Delivery,
} from "@prisma/client";

interface CreateDeliveryInput {
  saleId: number;
  deliveryPersonId: number;
  addressId: number;
  startDate: Date;
}

interface CreateDeliveryResponse extends Delivery {}

async function createDelivery({
  saleId,
  deliveryPersonId,
  addressId,
  startDate,
}: CreateDeliveryInput): Promise<CreateDeliveryResponse> {
  try {
    const delivery = await prisma.delivery.create({
      data: {
        saleId,
        deliveryPersonId,
        addressId,
        startDate,
        lastUpdateDate: new Date(),
        status: DeliveryStatusEnum.PENDING_ASSIGNMENT,
        businessStatus: BusinessStatusEnum.STARTED,
      },
      include: {
        sale: true,
        deliveryPerson: true,
        address: true,
      },
    });

    return delivery;
  } catch (error) {
    throw new ParamsError("could not create delivery");
  }
}

export { createDelivery };
