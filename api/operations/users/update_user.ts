import { hash } from "@/api/helpers/hash";
import { prisma } from "@/api/helpers/prisma";
import { ResourceError, ErrorCode } from "@/api/types/errors";

import type { User } from "@prisma/client";

interface UpdateUserInput {
  userId: number;
  name?: string;
  email?: string;
  password?: string;
  enabled?: boolean;
  verified?: boolean;
}

interface UpdateUserResponse {
  user: User;
}

async function updateUser({
  userId,
  name,
  email,
  password,
  enabled,
  verified,
}: UpdateUserInput): Promise<UpdateUserResponse> {
  const existingUser = await prisma.user.findUnique({
    where: { id: userId },
  });

  if (!existingUser) {
    throw new ResourceError(ErrorCode.RESOURCE_NOT_FOUND);
  }

  if (email && email !== existingUser.email) {
    const emailExists = await prisma.user.findUnique({
      where: { email },
    });
    if (emailExists) {
      throw new ResourceError(ErrorCode.RESOURCE_NOT_FOUND);
    }
  }

  let hashedPassword: string | undefined;
  if (password) {
    hashedPassword = await hash(password);
  }

  const updatedUser = await prisma.user.update({
    where: { id: userId },
    data: {
      name,
      email,
      password: hashedPassword,
      enabled,
      verified,
    },
    include: {
      sessions: true,
      permissions: true,
      signatures: true,
    },
  });

  return { user: updatedUser };
}

export { updateUser };
