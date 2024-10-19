import { verify } from "hono/jwt";
import { prisma } from "@/api/helpers/prisma";
import { env } from "@/config/env";
import {
  AuthError,
  ErrorCode,
  ResourceError,
  ServerError,
} from "@/api/types/errors";
import type { JWTPayload } from "hono/utils/jwt/types";
import { log } from "@/api/helpers/pino";

interface VerifyTokenPayload extends JWTPayload {
  id: string;
  user: number;
}

interface VeriftAccountTokenInput {
  token: string;
  userAgent: string;
  ip: string;
}

interface VerifyAccountTokenResponse {
  message: string;
}

async function verifyAccountToken({
  token,
  ip,
  userAgent,
}: VeriftAccountTokenInput): Promise<VerifyAccountTokenResponse> {
  try {
    // Verify the JWT token
    const payload = (await verify(token, env.JWT_SECRET)) as VerifyTokenPayload;

    // Check if the signature exists and is valid
    const signature = await prisma.signature.findUnique({
      where: { id: payload.id, ip: null, userAgent: null },
      include: { User: true },
    });

    if (!signature) {
      throw new ResourceError(ErrorCode.RESOURCE_NOT_FOUND);
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
    if (!signature.User || signature.User.verified) {
      throw new AuthError(ErrorCode.USER_ERROR);
    }

    await prisma.$transaction(async (prisma) => {
      // Update the user's status to enabled
      await prisma.user.update({
        where: { id: signature.userId },
        data: { verified: true },
      });

      await prisma.signature.update({
        where: {
          id: signature.id,
        },
        data: {
          ip,
          userAgent,
        },
      });
    });

    return { message: "account verified successfully" };
  } catch (error) {
    if (error instanceof AuthError || error instanceof ResourceError) {
      throw error;
    }
    log.error(error);
    throw new ServerError();
  }
}

export { verifyAccountToken };
