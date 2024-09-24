import { EmailParams, MailerSend, Recipient, Sender } from "mailersend";

const MAILERSEND_API_KEY = Deno.env.get("MAILERSEND_API_KEY");

if (!MAILERSEND_API_KEY) {
    throw new Error("MAILERSEND_API_KEY not set");
}

const mailerSend = new MailerSend({
    apiKey: MAILERSEND_API_KEY,
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
