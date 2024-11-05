import { hash } from "@/api/helpers/hash";
import { log } from "@/api/helpers/pino";
import { prisma } from "@/api/helpers/prisma";
import { AuthError, ErrorCode, ServerError } from "@/api/types/errors";

interface ConfirmResetPasswordInput {
  userId: number;
  newPassword: string;
}

async function createNewPassword({
  userId,
  newPassword,
}: ConfirmResetPasswordInput) {
  if (!userId) {
    throw new AuthError(ErrorCode.USER_ERROR);
  }

  try {
    const hashedPassword = await hash(newPassword);

    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new AuthError(ErrorCode.USER_ERROR);
    }

    await prisma.$transaction(async (prisma) => {
      await prisma.user.update({
        where: { id: user.id },
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
