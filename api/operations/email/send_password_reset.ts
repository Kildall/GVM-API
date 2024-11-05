import { sendEmail, type Recipient } from "@/api/helpers/mailjet";
import { log } from "@/api/helpers/pino";
import { ServerError } from "@/api/types/errors";
import { env } from "@/config/env";
import type { Signature, User } from "@prisma/client";
import { sign } from "hono/jwt";

const SUBJECT = "Restablece tu contraseña de GVM";
const EMAIL_VERIFICATION_TEMPLATE_ID = 6441520;

async function sendPasswordResetEmail(user: User, signature: Signature) {
  try {
    const token = await sign(
      { id: signature.id, user: signature.userId },
      env.JWT_SECRET
    );
    const recipient: Recipient = {
      email: user.email,
    };

    await sendEmail(SUBJECT, [recipient], EMAIL_VERIFICATION_TEMPLATE_ID, {
      email: user.email,
      confirmation_link: `${env.FRONTEND_URL}/reset-password?signature=${token}`,
      name: user.email,
    });
  } catch (error) {
    log.error(error);
    throw new ServerError();
  }
}

export { sendPasswordResetEmail };
