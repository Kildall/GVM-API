import { prisma } from "@/api/helpers/prisma";
import { AuthError, ErrorCode } from "@/api/types/errors";
import { env } from "@/config/env.ts";
import { createMiddleware } from "hono/factory";
import { verify } from "hono/jwt";
import { z } from "zod";

export const jwtValidationSchema = z.object({
  id: z.number().positive(),
  sesion: z.string().uuid(),
});

export type JWTPayload = z.infer<typeof jwtValidationSchema>;

export interface JWTVariables {
  jwtPayload?: JWTPayload;
  isAuthenticated: boolean;
}

const publicRoutes = ["/api/shared", "/api/auth"];

const auth = createMiddleware<{ Variables: JWTVariables }>(async (c, next) => {
  const path = c.req.path;
  const isPublicRoute = publicRoutes.some((route) => path.startsWith(route));

  // Initialize default values
  c.set("isAuthenticated", false);

  const authHeader = c.req.header("Authorization");
  if (!authHeader) {
    if (!isPublicRoute) {
      throw new AuthError(ErrorCode.MISSING_AUTH);
    }
    return next();
  }

  try {
    const [, token] = authHeader.split(" ");
    const payload = await verify(token, env.JWT_SECRET);
    const validationResult = jwtValidationSchema.safeParse(payload);

    if (!validationResult.success) {
      throw new AuthError(ErrorCode.INVALID_TOKEN);
    }

    const { id, sesion } = validationResult.data;

    c.set("jwtPayload", validationResult.data);

    const user = await prisma.user.findFirst({
      where: { id, verified: true, enabled: true },
    });
    if (!user) {
      throw new AuthError(ErrorCode.TOKEN_EXPIRED);
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
      throw new AuthError(ErrorCode.TOKEN_EXPIRED);
    }
    c.set("isAuthenticated", true);
  } catch (error) {
    if (!isPublicRoute) {
      throw new AuthError(ErrorCode.ACCESS_DENIED);
    }
  }

  await next();
});

export { auth };
