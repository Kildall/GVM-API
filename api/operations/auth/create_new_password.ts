import { hash } from "@/api/helpers/hash";
import { log } from "@/api/helpers/pino";
import { prisma } from "@/api/helpers/prisma";
import { ServerError } from "@/api/types/errors";

interface ConfirmResetPasswordInput {
  userId: number;
  newPassword: string;
}

async function createNewPassword({
  userId,
  newPassword,
}: ConfirmResetPasswordInput) {
  try {
    const hashedPassword = await hash(newPassword);

    await prisma.$transaction(async (prisma) => {
      await prisma.user.update({
        where: { id: userId },
        data: { password: hashedPassword },
      });
    });

    return { message: "password changed successfully" };
  } catch (error) {
    log.error(error);
    throw new ServerError();
  }
}

export { createNewPassword };
