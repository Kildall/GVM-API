import { Hono } from "hono";
import { jwt } from "hono/jwt";
import type { JwtVariables } from "hono/jwt";
import { cors } from "hono/cors";
import { auth } from "@/api/routes/auth/index.ts";

type Variables = JwtVariables
export interface Env {
    JWT_SECRET: string;
}

const api = new Hono<{ Variables: Variables, Bindings: Env }>().basePath('/api');

api.route('/auth/*', auth)

api.use(
    '/*', (c, next) => {
        const jwtMiddleware = jwt({
            secret: c.env.JWT_SECRET,
        })
        return jwtMiddleware(c, next)
    }
)

api.use('/*', cors())

export { api }