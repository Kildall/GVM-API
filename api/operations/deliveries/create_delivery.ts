import { prisma } from "@/api/helpers/prisma";
import { sendNewDeliveryEmail } from "@/api/operations/email/send_new_delivery";
import { ErrorCode, ResourceError, ServerError } from "@/api/types/errors";
import {
  BusinessStatusEnum,
  DeliveryStatusEnum,
  type Delivery,
} from "@prisma/client";

interface CreateDeliveryInput {
  saleId: number;
  employeeId?: number;
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
    const delivery = await prisma.$transaction(async (prisma) => {
      const employee = employeeId
        ? await prisma.employee.findUnique({
            where: { id: employeeId, enabled: true },
            include: {
              user: true,
            },
          })
        : null;

      const sale = await prisma.sale.findUnique({
        where: { id: saleId },
        include: {
          customer: {
            include: {
              addresses: true,
            },
          },
        },
      });

      if (!sale) {
        throw new ResourceError(ErrorCode.RESOURCE_NOT_FOUND);
      }

      const address = sale.customer.addresses.find((a) => a.id === addressId);

      if (!address) {
        throw new ResourceError(ErrorCode.RESOURCE_NOT_FOUND);
      }

      const delivery = await prisma.delivery.create({
        data: {
          saleId,
          employeeId,
          addressId,
          startDate,
          lastUpdateDate: new Date(),
          status: DeliveryStatusEnum.CREATED,
          businessStatus: BusinessStatusEnum.PENDING,
        },
        include: {
          sale: true,
          employee: true,
          address: true,
        },
      });

      const completeDelivery = await prisma.delivery.findUnique({
        where: { id: delivery.id },
        include: {
          sale: {
            include: {
              products: {
                include: {
                  product: true,
                },
              },
              customer: true,
            },
          },
          employee: true,
          address: true,
        },
      });

      if (!completeDelivery) {
        throw new ServerError();
      }

      if (employee?.user) {
        await sendNewDeliveryEmail(employee.user, employee, completeDelivery);
      }

      return delivery;
    });

    return delivery;
  } catch (error) {
    throw new ServerError();
  }
}

export { createDelivery };
