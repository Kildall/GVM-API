import { prisma } from "@/api/helpers/prisma";
import {
  APIError,
  AuthError,
  ErrorCode,
  ServerError,
} from "@/api/types/errors";
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
    // Check if the user is the same as the employee
    const employee = await prisma.employee.findUnique({
      where: { id: employeeId, userId: userId },
    });

    if (!employee) {
      throw new AuthError(ErrorCode.ACCESS_DENIED);
    }

    const deliveries = await prisma.delivery.findMany({
      where: { employeeId: employeeId },
      select: {
        id: true,
        status: true,
        businessStatus: true,
        driverStatus: true,
        employee: {
          select: {
            id: true,
            name: true,
          },
        },
        employeeId: true,
        startDate: true,
        lastUpdateDate: true,
        sale: {
          select: {
            id: true,
            status: true,
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

    return { deliveries };
  } catch (error) {
    if (error instanceof APIError) {
      throw error;
    }
    throw new ServerError();
  }
}

export { getDeliveriesByEmployeeId };
