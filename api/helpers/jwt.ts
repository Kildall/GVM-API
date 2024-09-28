import type { Sesion, Usuario } from "@prisma/client";
import { sign } from "hono/jwt";
import { env } from "@/config/env.ts";
import type { APIJWTPayload } from "@/api/types/api";

async function generateJWT(user: Usuario, sesion: Sesion) {
  const payload: APIJWTPayload = { id: user.id, sesion: sesion.id }
  return await sign(payload, env.JWT_SECRET);
}

export { generateJWT };
