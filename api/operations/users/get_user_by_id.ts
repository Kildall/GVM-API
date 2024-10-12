import { prisma } from "@/api/helpers/prisma";
import { ParamsError } from "@/api/types/errors";
import type { User } from "@prisma/client";

interface GetUserByIdInput {
  id: number;
}

interface GetUserByIdResponse {
  user: User;
}

async function getUserById({
  id,
}: GetUserByIdInput): Promise<GetUserByIdResponse> {
  const user = await prisma.user.findUnique({
    where: { id },
    include: {
      sessions: true,
      permissions: true,
      signatures: true,
    },
  });

  if (!user) {
    throw new ParamsError("User not found");
  }

  return { user };
}

export { getUserById };
