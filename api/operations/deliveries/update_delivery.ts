import { prisma } from "@/api/helpers/prisma";
import {
  BUSINESS_ALLOWED_STATUS_TRANSITIONS,
  DRIVER_ALLOWED_STATUS_TRANSITIONS,
  getDeliveryStatus,
  validateStatusTransition,
} from "@/api/operations/deliveries/utils";
import { sendUpdatedDeliveryEmail } from "@/api/operations/email/send_updated_delivery";
import { ErrorCode, ResourceError, ServerError } from "@/api/types/errors";
import {
  DriverStatusEnum,
  Prisma,
  type BusinessStatusEnum,
  type Delivery,
  type Employee,
  type User,
} from "@prisma/client";

interface UpdateDeliveryInput {
  deliveryId: number;
  employeeId?: number;
  addressId?: number;
  businessStatus?: BusinessStatusEnum;
  driverStatus?: DriverStatusEnum;
  startDate?: Date;
}

interface UpdateDeliveryResponse extends Delivery {}

async function updateDelivery(
  {
    deliveryId,
    employeeId,
    addressId,
    businessStatus,
    driverStatus,
    startDate,
  }: UpdateDeliveryInput,
  tx: Prisma.TransactionClient
): Promise<UpdateDeliveryResponse> {
  try {
    const db = tx ?? prisma;

    const delivery = await db.delivery.findUnique({
      where: { id: deliveryId },
    });

    if (!delivery) {
      throw new ResourceError(ErrorCode.RESOURCE_NOT_FOUND);
    }

    const sale = await db.sale.findUnique({
      where: { id: delivery.saleId },
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

    let employee: (Employee & { user: User | null }) | null = null;
    if (employeeId) {
      employee = await db.employee.findUnique({
        where: { id: employeeId },
        include: {
          user: true,
        },
      });
    }

    const address = sale.customer.addresses.find(
      (address) => address.id === addressId
    );

    if (!address) {
      throw new ResourceError(ErrorCode.RESOURCE_NOT_FOUND);
    }

    const validateBusinessStatus = validateStatusTransition(
      BUSINESS_ALLOWED_STATUS_TRANSITIONS,
      delivery.businessStatus,
      businessStatus
    );

    if (!validateBusinessStatus.isValid) {
      throw new ResourceError(ErrorCode.INVALID_STATUS_TRANSITION);
    }

    if (employeeId) {
      const validateDriverStatus = validateStatusTransition(
        DRIVER_ALLOWED_STATUS_TRANSITIONS,
        delivery.driverStatus ?? DriverStatusEnum.PENDING_PICKUP,
        driverStatus
      );

      if (!validateDriverStatus.isValid) {
        throw new ResourceError(ErrorCode.INVALID_STATUS_TRANSITION);
      }
    }

    const deliveryStatus = getDeliveryStatus(delivery);

    const updatedDelivery = await db.delivery.update({
      where: { id: deliveryId },
      data: {
        employeeId,
        addressId,
        businessStatus,
        driverStatus,
        status: deliveryStatus,
        startDate,
      },
      include: {
        address: true,
      },
    });

    if (employee && employee.user) {
      await sendUpdatedDeliveryEmail(employee.user, employee, updatedDelivery);
    }

    return updatedDelivery;
  } catch (error) {
    if (error instanceof ResourceError) {
      throw error;
    }
    throw new ServerError();
  }
}

export { updateDelivery };
