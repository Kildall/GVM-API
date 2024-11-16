import { sendEmail, type Recipient } from "@/api/helpers/mailjet";
import { log } from "@/api/helpers/pino";
import { ServerError } from "@/api/types/errors";
import type { Address, Delivery, Employee, User } from "@prisma/client";

const SUBJECT = "Se ha actualizado tu entrega";
const EMAIL_VERIFICATION_TEMPLATE_ID = 6477016;

type DeliveryWithAddress = Delivery & {
  address: Address;
};

async function sendUpdatedDeliveryEmail(
  user: User,
  employee: Employee,
  delivery: DeliveryWithAddress
) {
  try {
    const recipient: Recipient = {
      email: user.email,
    };

    await sendEmail(SUBJECT, [recipient], EMAIL_VERIFICATION_TEMPLATE_ID, {
      email: user.email,
      name: employee.name,
      delivery: {
        address: delivery.address.street1,
        businessStatus: delivery.businessStatus,
        driverStatus: delivery.driverStatus,
      },
    });
  } catch (error) {
    log.error(error);
    throw new ServerError();
  }
}

export { sendUpdatedDeliveryEmail };
