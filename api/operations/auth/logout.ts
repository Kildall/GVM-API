import { prisma } from "@/api/helpers/prisma";
import { AccessError } from "@/api/types/errors";
import { HTTPException } from "hono/http-exception";

interface LogoutInput {
  userId: number;
  sessionId: string;
}

interface LogoutResponse {
  message: string;
}

async function logout({ userId, sessionId }: LogoutInput) {
  const user = await prisma.user.findFirst({
    where: {
      id: userId,
    },
  });

  if (!user) {
    throw new AccessError();
  }

  const session = await prisma.session.findFirst({
    where: {
      id: sessionId,
      userId: user.id,
      active: true,
    },
  });

  if (!session) {
    throw new AccessError();
  }

  // Update the session

  await prisma.session.update({
    where: {
      id: sessionId,
      userId: user.id,
    },
    data: {
      active: false,
    },
  });

  const result: LogoutResponse = {
    message: "logout succesful",
  };

  return result;
}

export { logout };
