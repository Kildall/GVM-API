import { prisma } from "@/api/helpers/prisma.ts";
import { sendPasswordResetEmail } from "@/api/operations/email/send_password_reset";
import { AccountAction } from "@prisma/client";
import dayjs from "dayjs";

interface ResetPasswordInput {
  email: string;
}

async function resetPassword({ email }: ResetPasswordInput) {
  await prisma.$transaction(async (prisma) => {
    const existingUser = await prisma.user.findUnique({
      where: { email, enabled: true, verified: true },
    });

    if (!existingUser) {
      return { message: "password reset" };
    }
    const signature = await prisma.signature.create({
      data: {
        action: AccountAction.RESET_PASSWORD,
        createdAt: new Date(),
        expiresAt: dayjs().add(24, "hours").toDate(),
        userId: existingUser.id,
      },
    });
    await sendPasswordResetEmail(existingUser, signature);
  });

  return { message: "password reset" };
}

export { resetPassword };
