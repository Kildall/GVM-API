import type { Usuario } from "@prisma/client";
import { sendEmail } from "@/api/helpers/mailersend.ts";
import { Recipient } from "mailersend";

const SUBJECT = "Verify your GVM Account";
const EMAIL_VERIFICATION_TEMPLATE_ID = "jpzkmgq6jxn4059v";

async function sendVerificationEmail(user: Usuario, token: string) {
  const recipient: Recipient = {
    email: user.email,
  };
  const result = await sendEmail(
    SUBJECT,
    [recipient],
    EMAIL_VERIFICATION_TEMPLATE_ID,
    {
      name: user.nombre,
      verification_url: token,
    },
  );

  if (result.statusCode !== 200) {
    throw new Error("Could not send verification email");
  }
}

export { sendVerificationEmail };
