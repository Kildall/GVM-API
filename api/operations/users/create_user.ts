import { hash } from "@/api/helpers/hash";
import { prisma } from "@/api/helpers/prisma";
import { ErrorCode, ResourceError } from "@/api/types/errors";

import type { User } from "@prisma/client";

interface CreateUserInput {
  name: string;
  email: string;
  password: string;
  enabled?: boolean;
  verified?: boolean;
}

interface CreateUserResponse {
  user: User;
}

async function createUser({
  email,
  password,
  verified = false,
}: CreateUserInput): Promise<CreateUserResponse> {
  const existingUser = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (existingUser) {
    throw new ResourceError(ErrorCode.RESOURCE_ALREADY_EXISTS);
  }

  const hashedPassword = await hash(password);

  const user = await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
      verified,
    },
  });

  return { user };
}

export { createUser };
