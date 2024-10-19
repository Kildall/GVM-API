import { log } from "@/api/helpers/pino";
import { prisma } from "@/api/helpers/prisma";
import { ServerError } from "@/api/types/errors";
import type { Delivery, Sale, DeliveryPerson, Address } from "@prisma/client";

interface GetAllDeliveriesResponse {
  deliveries: (Delivery & {
    sale: Sale;
    deliveryPerson: DeliveryPerson | null;
    address: Address;
  })[];
}

// Example of query options
interface GetDeliveriesOptions {
  skip?: number;
  take?: number;
  orderBy?: {
    [key: string]: "asc" | "desc";
  };
}

async function getDeliveries(
  options: GetDeliveriesOptions = {}
): Promise<GetAllDeliveriesResponse> {
  try {
    const { skip = 0, take = 50, orderBy = { startDate: "desc" } } = options;

    const deliveries = await prisma.delivery.findMany({
      skip,
      take,
      orderBy,
      include: {
        sale: true,
        deliveryPerson: true,
        address: true,
      },
    });

    return { deliveries };
  } catch (error) {
    log.error(error);
    throw new ServerError();
  }
}

export { getDeliveries };
