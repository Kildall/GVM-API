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
  tx?: Prisma.TransactionClient
): Promise<UpdateDeliveryResponse> {
  try {
    const db = tx ?? prisma;

    if (!tx) {
      return await prisma.$transaction(async (tx) => {
        return await updateDelivery(
          {
            deliveryId,
            employeeId,
            addressId,
            businessStatus,
            driverStatus,
            startDate,
          },
          tx
        );
      });
    }

    // Fetch the delivery
    const delivery = await db.delivery.findUnique({
      where: { id: deliveryId },
    });

    // If the delivery is not found, we throw an error
    if (!delivery) {
      throw new ResourceError(ErrorCode.RESOURCE_NOT_FOUND);
    }

    // Fetch the sale to get the customer and addresses
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

    // If the sale is not found, we throw an error
    if (!sale) {
      throw new ResourceError(ErrorCode.RESOURCE_NOT_FOUND);
    }

    // If the employeeId is provided, we fetch the employee
    let employee: (Employee & { user: User | null }) | null = null;
    if (employeeId) {
      employee = await db.employee.findUnique({
        where: { id: employeeId },
        include: {
          user: true,
        },
      });
    }

    // If the addressId is provided, we fetch the address
    if (addressId) {
      const address = sale.customer.addresses.find(
        (address) => address.id === addressId
      );

      if (!address) {
        throw new ResourceError(ErrorCode.RESOURCE_NOT_FOUND);
      }
    }

    if (businessStatus || driverStatus) {
      // Validate the business status transition
      if (businessStatus) {
        const validateBusinessStatus = validateStatusTransition(
          BUSINESS_ALLOWED_STATUS_TRANSITIONS,
          delivery.businessStatus,
          businessStatus
        );

        if (!validateBusinessStatus.isValid) {
          throw new ResourceError(ErrorCode.INVALID_STATUS_TRANSITION);
        }
      }

      // Validate the driver status transition
      if (driverStatus && (employeeId || delivery.employeeId)) {
        const validateDriverStatus = validateStatusTransition(
          DRIVER_ALLOWED_STATUS_TRANSITIONS,
          delivery.driverStatus ?? DriverStatusEnum.PENDING_PICKUP,
          driverStatus
        );

        if (!validateDriverStatus.isValid) {
          throw new ResourceError(ErrorCode.INVALID_STATUS_TRANSITION);
        }
      }
    }

    // Get the delivery status
    const deliveryStatus = getDeliveryStatus(delivery);

    // Update the delivery
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

    // Send the updated delivery email to the new employee
    if (employee && employee.user) {
      await sendUpdatedDeliveryEmail(employee.user, employee, updatedDelivery);
    }

    // Return the updated delivery
    return updatedDelivery;
  } catch (error) {
    if (error instanceof ResourceError) {
      throw error;
    }
    throw new ServerError();
  }
}

export { updateDelivery };
