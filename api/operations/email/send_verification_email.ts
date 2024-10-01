import type { User } from "@prisma/client";
import { sendEmail } from "@/api/helpers/mailersend.ts";
import { Recipient } from "mailersend";

const SUBJECT = "Verify your GVM Account";
const EMAIL_VERIFICATION_TEMPLATE_ID = "jpzkmgq6jxn4059v";

async function sendVerificationEmail(user: User, token: string) {
  const recipient: Recipient = {
    email: user.email,
  };
  const result = await sendEmail(
    SUBJECT,
    [recipient],
    EMAIL_VERIFICATION_TEMPLATE_ID,
    {
      name: user.name,
      verification_url: token,
    }
  );

  if (result.statusCode !== 200) {
    throw new Error("Could not send verification email");
  }
}

export { sendVerificationEmail };
