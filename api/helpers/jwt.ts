import type { Session, User } from "@prisma/client";
import { sign } from "hono/jwt";
import { env } from "@/config/env.ts";
import type { APIJWTPayload } from "@/api/types/api";

async function generateJWT(user: User, sesion: Session) {
  const payload: APIJWTPayload = { id: user.id, sesion: sesion.id };
  return await sign(payload, env.JWT_SECRET);
}

export { generateJWT };
