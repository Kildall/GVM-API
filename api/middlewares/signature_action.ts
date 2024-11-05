import { prisma } from "@/api/helpers/prisma";
import type { RequestTelemetrics } from "@/api/types/api";
import { AuthError, ErrorCode, ResourceError } from "@/api/types/errors";
import { env } from "@/config/env";
import type { AccountAction } from "@prisma/client";
import { getConnInfo } from "hono/bun";
import { createMiddleware } from "hono/factory";
import { verify } from "hono/jwt";
import type { JWTPayload } from "hono/utils/jwt/types";
import { z } from "zod";

export interface VerifyTokenPayload extends JWTPayload {
  id: string;
  user: number;
  data: string;
}

const signatureValidationSchema = z.object({
  signature: z.string().min(16).max(512),
});

const handleSignature = (action: AccountAction) =>
  createMiddleware(async (c, next) => {
    const reqQuery = c.req.query();
    const { success, data } = signatureValidationSchema.safeParse(reqQuery);
    if (!success) {
      throw new ResourceError(ErrorCode.RESOURCE_NOT_FOUND);
    }
    const { signature: token } = data;
    const connInfo = getConnInfo(c);
    const telemetrics: RequestTelemetrics = {
      ip: connInfo.remote.address || "Unknown",
      userAgent: c.req.header("User-Agent") || "Unknown",
    };

    // Verify the JWT token
    const payload = (await verify(token, env.JWT_SECRET)) as VerifyTokenPayload;

    // Check if the signature exists and is valid
    const signature = await prisma.signature.findUnique({
      where: { id: payload.id, ip: null, userAgent: null },
      include: { user: true },
    });

    if (!signature) {
      throw new ResourceError(ErrorCode.RESOURCE_NOT_FOUND);
    }

    if (signature.action !== action) {
      throw new AuthError(ErrorCode.INVALID_TOKEN);
    }

    // Check if the signature has expired
    if (new Date() > signature.expiresAt) {
      throw new AuthError(ErrorCode.TOKEN_EXPIRED);
    }

    // Check if the user ID in the token matches the user ID in the signature
    if (signature.userId !== payload.user) {
      throw new AuthError(ErrorCode.INVALID_TOKEN);
    }

    // Check if the user exists and is not already verified
    if (!signature.user || signature.user.verified) {
      throw new AuthError(ErrorCode.USER_ERROR);
    }

    c.set("userId", signature.userId);

    await next();

    // Set signature details
    await prisma.signature.update({
      where: { id: signature.id },
      data: { ip: telemetrics.ip, userAgent: telemetrics.userAgent },
    });
  });

export { handleSignature };
