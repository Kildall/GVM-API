import { prisma } from "@/api/helpers/prisma";
import { ParamsError } from "@/api/types/errors";
import type { User } from "@prisma/client";

interface GetUserByIdInput {
  id: number;
}

interface GetUserByIdResponse {
  user: Partial<User>;
}

async function getUserById(
  { id }: GetUserByIdInput,
  selectFields: Record<string, boolean> = {
    id: true,
    email: true,
    verified: true,
    sessions: true,
    permissions: true,
    signatures: true,
  }
): Promise<GetUserByIdResponse> {
  const user = await prisma.user.findUnique({
    where: { id },
    select: selectFields,
  });

  if (!user) {
    throw new ParamsError("user not found");
  }

  return { user };
}

export { getUserById };
