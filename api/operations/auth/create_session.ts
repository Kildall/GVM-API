import { hash } from "@/api/helpers/hash";
import { generateJWT } from "@/api/helpers/jwt";
import { prisma } from "@/api/helpers/prisma";
import type { RequestTelemetrics } from "@/api/types/api";
import type { Sesion, Usuario } from "@prisma/client";
import dayjs from "dayjs";
import { randomUUID } from "node:crypto";

interface CreateSesionResult {
  sesion: Sesion;
  tokenJWT: string;
}

async function createSession(user: Usuario, telemetrics: RequestTelemetrics, remember: boolean): Promise<CreateSesionResult> {
  const now = dayjs()
  const sesionDuration = remember ? 7 : 1;   // Duration in days

  const sesion = await prisma.sesion.create({
    data: {
      ip: telemetrics.ip,
      userAgent: telemetrics.userAgent,
      createdAt: now.toDate(),
      expiresAt: now.add(sesionDuration, 'days').toDate(),
      activo: true,
      Usuario: {
        connect: {
          id: user.id
        }
      }
    },
  })

  const tokenJWT = await generateJWT(user, sesion);

  return {
    tokenJWT,
    sesion
  };
}

export { createSession }