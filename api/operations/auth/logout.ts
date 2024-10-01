import { prisma } from "@/api/helpers/prisma";
import { HTTPException } from "hono/http-exception";

interface LogoutInput {
  userId: number;
  sessionId: string;
}

interface LogoutResponse {
  message: string;
}

async function logout({ userId, sessionId }: LogoutInput) {
  const user = await prisma.usuario.findFirst({
    where: {
      id: userId,
    },
  });

  if (!user) {
    throw new HTTPException(401, {
      cause: { message: "unable to authorize" },
    });
  }

  const session = await prisma.sesion.findFirst({
    where: {
      id: sessionId,
      usuarioId: user.id,
      activo: true,
    },
  });

  if (!session) {
    throw new HTTPException(401, {
      cause: { message: "unable to authorize" },
    });
  }

  // Update the session

  await prisma.sesion.update({
    where: {
      id: sessionId,
      usuarioId: user.id,
    },
    data: {
      activo: false,
    },
  });

  const result: LogoutResponse = {
    message: "logout succesful",
  };

  return result;
}

export { logout };
