import { prisma } from "@/api/helpers/prisma";
import { ErrorCode, ResourceError, ServerError } from "@/api/types/errors";
import type { Address, Delivery, Employee, Sale } from "@prisma/client";

interface GetDeliveryByIdResponse extends Delivery {
  sale: Sale;
  employee: Employee | null;
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
        employee: true,
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
