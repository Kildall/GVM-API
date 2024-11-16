import { sendEmail, type Recipient } from "@/api/helpers/mailjet";
import { log } from "@/api/helpers/pino";
import { ServerError } from "@/api/types/errors";
import type { Address, Delivery, Employee, User } from "@prisma/client";

const SUBJECT = "Tu entrega ha sido cancelada";
const EMAIL_VERIFICATION_TEMPLATE_ID = 6477017;

type DeliveryWithAddress = Delivery & {
  address: Address;
};

async function sendCancelledDeliveryEmail(
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
      },
    });
  } catch (error) {
    log.error(error);
    throw new ServerError();
  }
}

export { sendCancelledDeliveryEmail };
