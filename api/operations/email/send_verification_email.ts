import type { Signature, User } from "@prisma/client";
import { sendEmail } from "@/api/helpers/mailersend.ts";
import { Recipient } from "mailersend";
import { env } from "@/config/env";
import { sign } from "hono/jwt";
import { log } from "@/api/helpers/pino";

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
      name: user.name,
      token: token,
    });
  } catch (error) {
    log.error(error);
    throw new Error("could not send verification email");
  }
}

export { sendVerificationEmail };
