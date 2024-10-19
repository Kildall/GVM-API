import { generateJWT } from "@/api/helpers/jwt";
import { prisma } from "@/api/helpers/prisma";
import type { RequestTelemetrics } from "@/api/types/api";
import { AuthError, ErrorCode } from "@/api/types/errors";
import type { Session, User } from "@prisma/client";
import dayjs from "dayjs";

interface CreateSesionResult {
  session: Session;
  jwt: string;
}

async function createSession(
  user: User,
  telemetrics: RequestTelemetrics,
  remember: boolean
): Promise<CreateSesionResult> {
  if (!user.enabled) {
    throw new AuthError(ErrorCode.ACCESS_DENIED);
  }

  const now = dayjs();
  const sesionDuration = remember ? 7 : 1; // Duration in days

  const session = await prisma.session.create({
    data: {
      ip: telemetrics.ip,
      userAgent: telemetrics.userAgent,
      createdAt: now.toDate(),
      expiresAt: now.add(sesionDuration, "days").toDate(),
      active: true,
      User: {
        connect: {
          id: user.id,
        },
      },
    },
  });

  const jwt = await generateJWT(user, session);

  return {
    jwt,
    session,
  };
}

export { createSession };
