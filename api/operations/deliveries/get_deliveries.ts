import { log } from "@/api/helpers/pino";
import { prisma } from "@/api/helpers/prisma";
import { ServerError } from "@/api/types/errors";
import type { Address, Delivery, Employee, Sale } from "@prisma/client";

interface GetAllDeliveriesResponse {
  deliveries: (Delivery & {
    sale: Sale;
    employee: Employee | null;
    address: Address;
  })[];
}

// Example of query options
interface GetDeliveriesOptions {}

async function getDeliveries(
  _options: GetDeliveriesOptions = {}
): Promise<GetAllDeliveriesResponse> {
  try {
    const deliveries = await prisma.delivery.findMany({
      include: {
        sale: true,
        employee: true,
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
