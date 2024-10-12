import { hash } from "@/api/helpers/hash";
import { prisma } from "@/api/helpers/prisma";
import { ParamsError } from "@/api/types/errors";
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
  name,
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
    throw new ParamsError("user with this email already exists");
  }

  const hashedPassword = await hash(password);

  const user = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
      verified,
    },
  });

  return { user };
}

export { createUser };
