import { env } from "@/config/env.ts";
import Mailjet from "node-mailjet";

export interface Recipient {
  email: string;
  name?: string;
}

const mailjet = new Mailjet({
  apiKey: env.MAILJET_PUBLIC_KEY,
  apiSecret: env.MAILJET_SECRET_KEY,
});

const SENDER_EMAIL = "no-reply@kildall.ar";
const SENDER_NAME = "GVM";

async function sendEmail(
  subject: string,
  recipients: Recipient[],
  templateId: number,
  data: Record<string, unknown>
) {
  const request = mailjet.post("send", { version: "v3.1" }).request({
    Messages: [
      {
        From: {
          Email: SENDER_EMAIL,
          Name: SENDER_NAME,
        },
        To: recipients.map((recipient) => ({
          Email: recipient.email,
          Name: recipient.name,
        })),
        TemplateID: templateId,
        TemplateLanguage: true,
        Subject: subject,
        Variables: data,
      },
    ],
  });

  return await request;
}

export { sendEmail };
