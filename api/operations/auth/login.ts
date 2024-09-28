import { generateJWT } from "@/api/helpers/jwt.ts";
import { AccessError } from "@/api/types/errors.ts";
import { prisma } from "@/api/helpers/prisma.ts";
import { createHash } from 'node:crypto';
import { createSession } from "@/api/operations/auth/create_session";
import type { RequestTelemetrics } from "@/api/types/api";
import { hash } from "@/api/helpers/hash";

interface LoginInput {
  email: string;
  password: string;
  remember: boolean;
  telemetrics: RequestTelemetrics;
}

interface LoginResponse {
  expires: Date;
  token: string;
  verified: boolean;
}

async function login({ email, password, remember, telemetrics }: LoginInput) {
  // Check if user exists
  const existingUser = await prisma.usuario.findFirst({
    where: { email: email },
  });

  if (!existingUser) {
    throw new AccessError("User doesnt exist");
  }

  const hashedPassword = await hash(password);

  if (hashedPassword !== existingUser.clave || email !== existingUser.email) {
    throw new AccessError("Incorrect password");
  }

  const { tokenJWT: token, sesion } = await createSession(existingUser, telemetrics, remember);

  const response: LoginResponse = {
    expires: sesion.expiresAt,
    token,
    verified: existingUser.habilitado
  }

  return response;
}

export { login };