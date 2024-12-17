import { prisma } from "@/api/helpers/prisma";
import { ErrorCode, ResourceError, ServerError } from "@/api/types/errors";
import type { Prisma } from "@prisma/client";

type EmployeeDeliveries = Prisma.DeliveryGetPayload<{
  select: {
    id: true;
    sale: {
      select: {
        id: true;
        products: {
          select: {
            product: {
              select: {
                id: true;
                name: true;
                price: true;
              };
            };
            quantity: true;
          };
        };
        customer: {
          select: {
            id: true;
            name: true;
            phone: true;
          };
        };
        employee: {
          select: {
            id: true;
            name: true;
          };
        };
      };
    };
    address: {
      select: {
        id: true;
        street1: true;
        street2: true;
        city: true;
        state: true;
        postalCode: true;
        details: true;
      };
    };
  };
}>;

interface GetDeliveriesByEmployeeIdResponse {
  deliveries: EmployeeDeliveries[];
}

async function getDeliveriesByEmployeeId(
  employeeId: number,
  userId: number
): Promise<GetDeliveriesByEmployeeIdResponse> {
  try {
    const deliveries = await prisma.delivery.findMany({
      where: { employeeId: employeeId, employee: { userId: userId } },
      select: {
        id: true,
        sale: {
          select: {
            id: true,
            products: {
              select: {
                product: {
                  select: {
                    id: true,
                    name: true,
                    price: true,
                  },
                },
                quantity: true,
              },
            },
            customer: {
              select: {
                id: true,
                name: true,
                phone: true,
              },
            },
            employee: {
              select: {
                id: true,
                name: true,
              },
            },
          },
        },
        address: {
          select: {
            id: true,
            street1: true,
            street2: true,
            city: true,
            state: true,
            postalCode: true,
            details: true,
          },
        },
      },
      orderBy: {
        startDate: "desc",
      },
    });

    if (!deliveries.length) {
      throw new ResourceError(ErrorCode.RESOURCE_NOT_FOUND);
    }

    return { deliveries };
  } catch (error) {
    if (error instanceof ResourceError) {
      throw error;
    }
    throw new ServerError();
  }
}

export { getDeliveriesByEmployeeId };
