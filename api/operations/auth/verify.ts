import { verify } from "hono/jwt";
import { prisma } from "@/api/helpers/prisma";
import { env } from "@/config/env";
import { ParamsError } from "@/api/types/errors";
import type { JWTPayload } from "hono/utils/jwt/types";

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
      throw new ParamsError("invalid or expired token");
    }

    // Check if the signature has expired
    if (new Date() > signature.expiresAt) {
      throw new ParamsError("token has expired");
    }

    // Check if the user ID in the token matches the user ID in the signature
    if (signature.userId !== payload.user) {
      throw new ParamsError("invalid token");
    }

    // Check if the user exists and is not already verified
    if (!signature.User || signature.User.enabled) {
      throw new ParamsError("user not found or already verified");
    }

    await prisma.$transaction(async (prisma) => {
      // Update the user's status to enabled
      await prisma.user.update({
        where: { id: signature.userId },
        data: { enabled: true },
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
    if (error instanceof ParamsError) {
      throw error;
    }
    if (error instanceof Error && error.message === "invalid signature") {
      throw new ParamsError("invalid token");
    }
    throw new Error("account verification failed");
  }
}

export { verifyAccountToken };
