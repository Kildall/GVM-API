import { Hono } from "hono";
import { jwt } from "hono/jwt";
import type { JwtVariables } from "hono/jwt";
import { cors } from "hono/cors";
import { auth } from "@/api/routes/auth/index.ts";

type Variables = JwtVariables

const api = new Hono<{ Variables: Variables }>().basePath('/api');

api.use('/*', cors())

// Custom middleware for selective JWT checking
api.use(
    '/*',  (c, next) => {
        const path = c.req.path;
        if (path.startsWith('/api/auth/login') || path.startsWith('/api/auth/signup')) {
            // Skip JWT check for login and signup routes
            return next();
        }
    
        const secret = Deno.env.get('JWT_SECRET');
        if (!secret) {
            throw new Error("JWT Secret not found");
        }
        const jwtMiddleware = jwt({
            secret,
        });
        return jwtMiddleware(c, next);
    }
)

api.route('/auth', auth)


export { api }