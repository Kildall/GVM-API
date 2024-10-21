import { sendEmail } from "@/api/helpers/mailersend.ts";
import { log } from "@/api/helpers/pino";
import { ServerError } from "@/api/types/errors";
import { env } from "@/config/env";
import type { Signature, User } from "@prisma/client";
import { sign } from "hono/jwt";
import { Recipient } from "mailersend";

const SUBJECT = "Verify your GVM Account";
const EMAIL_VERIFICATION_TEMPLATE_ID = "jpzkmgq6jxn4059v";

async function sendVerificationEmail(user: User, signature: Signature) {
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
      token: token,
    });
  } catch (error) {
    log.error(error);
    throw new ServerError();
  }
}

export { sendVerificationEmail };
