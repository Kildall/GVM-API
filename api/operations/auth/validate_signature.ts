import { prisma } from "@/api/helpers/prisma";
import type { VerifyTokenPayload } from "@/api/middlewares/signature_action";
import { AuthError, ErrorCode, ResourceError } from "@/api/types/errors";
import { env } from "@/config/env";
import { verify } from "hono/jwt";

async function validateSignature(signature: string): Promise<boolean> {
  // Verify the JWT token
  const payload = (await verify(
    signature,
    env.JWT_SECRET
  )) as VerifyTokenPayload;

  // Check if the signature exists and is valid
  const existingSignature = await prisma.signature.findUnique({
    where: { id: payload.id, ip: null, userAgent: null },
    include: { user: true },
  });

  if (!existingSignature) {
    throw new ResourceError(ErrorCode.RESOURCE_NOT_FOUND);
  }

  // Check if the signature has expired
  if (new Date() > existingSignature.expiresAt) {
    throw new AuthError(ErrorCode.TOKEN_EXPIRED);
  }

  // Check if the user ID in the token matches the user ID in the signature
  if (existingSignature.userId !== payload.user) {
    throw new AuthError(ErrorCode.INVALID_TOKEN);
  }

  return true;
}

export { validateSignature };
