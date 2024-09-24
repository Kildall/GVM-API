import { Usuario } from "@/generated/client/deno/index.d.ts";
import { sign } from "hono/jwt";
import { env } from "@/config/env.ts";

async function generateJWT(user: Usuario) {
  return await sign({ id: user.id }, env.JWT_SECRET);
}

export { generateJWT };
