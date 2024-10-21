import { prisma } from "@/api/helpers/prisma";
import { ServerError } from "@/api/types/errors";
import {
  BusinessStatusEnum,
  DeliveryStatusEnum,
  type Delivery,
} from "@prisma/client";

interface CreateDeliveryInput {
  saleId: number;
  employeeId: number;
  addressId: number;
  startDate: Date;
}

interface CreateDeliveryResponse extends Delivery {}

async function createDelivery({
  saleId,
  employeeId,
  addressId,
  startDate,
}: CreateDeliveryInput): Promise<CreateDeliveryResponse> {
  try {
    const delivery = await prisma.delivery.create({
      data: {
        saleId,
        employeeId,
        addressId,
        startDate,
        lastUpdateDate: new Date(),
        status: DeliveryStatusEnum.PENDING_ASSIGNMENT,
        businessStatus: BusinessStatusEnum.STARTED,
      },
      include: {
        sale: true,
        employee: true,
        address: true,
      },
    });

    return delivery;
  } catch (error) {
    throw new ServerError();
  }
}

export { createDelivery };
