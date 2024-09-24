import { EmailParams, MailerSend, Recipient, Sender } from "mailersend";
import { env } from "@/config/env.ts";

const mailerSend = new MailerSend({
  apiKey: env.MAILERSEND_API_KEY,
});

const sentFrom = new Sender("no-reply@kildall.ar", "GVM");

async function sendEmail(
  subject: string,
  recipients: Recipient[],
  templateId: string,
  data: Record<string, unknown>,
) {
  const personalizations: EmailParams["personalization"] = recipients.map(
    (x) => {
      return {
        email: x.email,
        data,
      };
    },
  );
  const emailParams = new EmailParams()
    .setFrom(sentFrom)
    .setTo(recipients)
    .setReplyTo(sentFrom)
    .setSubject(subject)
    .setTemplateId(templateId)
    .setPersonalization(personalizations);

  return await mailerSend.email.send(emailParams);
}

export { sendEmail };
