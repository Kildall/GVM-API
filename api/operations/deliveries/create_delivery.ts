import { prisma } from "@/api/helpers/prisma";
import { ParamsError } from "@/api/types/errors";
import { type Delivery } from "@prisma/client";

interface CreateDeliveryInput {
  saleId: number;
  addressId: number;
  deliveryPersonId: number;
}

interface CreateDeliveryResponse extends Delivery {}

async function createDelivery(
  input: CreateDeliveryInput
): Promise<CreateDeliveryResponse> {
  try {
    const delivery = await prisma.delivery.create({
      data: {
        sale: { connect: { id: input.saleId } },
        address: { connect: { id: input.addressId } },
        deliveryPerson: { connect: { id: input.deliveryPersonId } },
        startDate: new Date(),
        lastUpdateDate: new Date(),
        deliveryStatus: {
          create: {
            status: "STARTED",
          },
        },
      },
      include: {
        deliveryStatus: true,
      },
    });

    return delivery;
  } catch (error) {
    throw new ParamsError("could not create delivery");
  }
}

export { createDelivery };
