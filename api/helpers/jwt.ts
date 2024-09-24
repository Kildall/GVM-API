import { Usuario } from "@/generated/client/deno/index.d.ts";
import { sign } from "hono/jwt";

const JWT_SECRET = Deno.env.get("JWT_SECRET")!;
if (!JWT_SECRET) {
    throw new Error("JWT_SECRET not set");
}

async function generateJWT(user: Usuario) {
    return await sign({ id: user.id }, JWT_SECRET);
}

export { generateJWT };
