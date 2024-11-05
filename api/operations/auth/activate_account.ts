import { log } from "@/api/helpers/pino";
import { prisma } from "@/api/helpers/prisma";
import { ServerError } from "@/api/types/errors";

interface VeriftAccountTokenInput {
  userId: number;
}

interface VerifyAccountTokenResponse {
  message: string;
}

async function activateAccount({
  userId,
}: VeriftAccountTokenInput): Promise<VerifyAccountTokenResponse> {
  try {
    await prisma.$transaction(async (prisma) => {
      // Update the user's status to enabled
      await prisma.user.update({
        where: { id: userId, verified: false },
        data: { verified: true },
      });
    });

    return { message: "account verified successfully" };
  } catch (error) {
    log.error(error);
    throw new ServerError();
  }
}

export { activateAccount };
