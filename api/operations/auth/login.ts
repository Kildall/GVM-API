import { generateJWT } from "@/api/helpers/jwt.ts";
import { AccessError } from "@/api/types/errors.ts";
import { prisma } from "@/api/helpers/prisma.ts";
import { createHash } from "node:crypto";
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
  const existingUser = await prisma.user.findFirst({
    where: { email: email },
  });

  if (!existingUser) {
    throw new AccessError("User doesnt exist");
  }

  const hashedPassword = await hash(password);

  if (
    hashedPassword !== existingUser.password ||
    email !== existingUser.email
  ) {
    throw new AccessError("Incorrect password");
  }

  const { jwt: token, session } = await createSession(
    existingUser,
    telemetrics,
    remember
  );

  const response: LoginResponse = {
    expires: session.expiresAt,
    token,
    verified: existingUser.enabled,
  };

  return response;
}

export { login };
