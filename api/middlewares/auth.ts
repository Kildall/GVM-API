import { createMiddleware } from "hono/factory";
import { jwt as honoJwt, verify } from "hono/jwt";
import { env } from "@/config/env.ts";
import { z } from "zod";
import { prisma } from "@/api/helpers/prisma";
import { HTTPException } from "hono/http-exception";

export const jwtValidationSchema = z.object({
  id: z.number().positive(),
  sesion: z.string().uuid(),
});

export type JWTPayload = z.infer<typeof jwtValidationSchema>;

export interface JWTVariables {
  jwtPayload?: JWTPayload;
  isAuthenticated: boolean;
}

const auth = createMiddleware<{ Variables: JWTVariables }>(async (c, next) => {
  const path = c.req.path;
  const isAuthRoute = path.startsWith("/api/auth");

  // Initialize default values
  c.set("isAuthenticated", false);

  const authHeader = c.req.header("Authorization");
  if (!authHeader) {
    if (!isAuthRoute) {
      throw new HTTPException(401, { message: "authorization header missing" });
    }
    return next();
  }

  try {
    const [, token] = authHeader.split(" ");
    const payload = await verify(token, env.JWT_SECRET);
    const validationResult = jwtValidationSchema.safeParse(payload);

    if (!validationResult.success) {
      throw new Error("invalid token payload");
    }

    const { id, sesion } = validationResult.data;

    c.set("jwtPayload", validationResult.data);

    const user = await prisma.user.findFirst({
      where: { id, verified: true, enabled: true },
    });
    if (!user) {
      throw new Error("user not found");
    }

    const session = await prisma.session.findFirst({
      where: {
        id: sesion,
        active: true,
        expiresAt: {
          gt: new Date(),
        },
      },
    });

    if (!session) {
      throw new Error("active session not found");
    }
    c.set("isAuthenticated", true);
  } catch (error) {
    if (!isAuthRoute) {
      throw new HTTPException(401, { message: "unable to authorize" });
    }
  }

  await next();
});

export { auth };
