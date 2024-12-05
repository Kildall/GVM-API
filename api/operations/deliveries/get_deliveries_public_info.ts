import { log } from "@/api/helpers/pino";
import { prisma } from "@/api/helpers/prisma";
import { ServerError } from "@/api/types/errors";
import type { Delivery } from "@prisma/client";

interface GetAllDeliveriesResponse {
  deliveries: Pick<Delivery, "id" | "startDate" | "status">[];
}

async function getDeliveriesPublicInfo(): Promise<GetAllDeliveriesResponse> {
  try {
    const deliveries = await prisma.delivery.findMany({
      select: {
        id: true,
        startDate: true,
        status: true,
        sale: {
          select: {
            id: true,
            products: {
              select: {
                quantity: true,
                product: {
                  select: {
                    id: true,
                    name: true,
                    price: true,
                  },
                },
              },
            },
          },
        },
      },
    });

    return { deliveries };
  } catch (error) {
    log.error(error);
    throw new ServerError();
  }
}

export { getDeliveriesPublicInfo };
