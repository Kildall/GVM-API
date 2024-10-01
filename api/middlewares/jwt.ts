import { createMiddleware } from "hono/factory";
import { jwt as honoJwt } from "hono/jwt";
import { env } from "@/config/env.ts";
import { z } from "zod";

// Type should be APIJWTPayload
export const jwtValidationSchema = z.object({
  id: z.number().positive(),
  sesion: z.string().uuid(),
});

const jwt = createMiddleware((c, next) => {
  const path = c.req.path;
  if (path.startsWith("/api/auth")) {
    // Skip JWT check for auth routes
    return next();
  }

  const secret = env.JWT_SECRET;
  if (!secret) {
    throw new Error("JWT Secret not found");
  }
  const jwtMiddleware = honoJwt({
    secret,
  });
  return jwtMiddleware(c, next);
});

export { jwt };
