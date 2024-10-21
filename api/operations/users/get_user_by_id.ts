import { prisma } from "@/api/helpers/prisma";
import { ErrorCode, ResourceError } from "@/api/types/errors";

import type { User } from "@prisma/client";

interface GetUserByIdInput {
  id: number;
}

interface GetUserByIdResponse {
  user: Partial<User>;
}

async function getUserById(
  { id }: GetUserByIdInput,
  selectFields: Record<string, unknown> = {
    id: true,
    email: true,
    verified: true,
    sessions: true,
    permissions: true,
    signatures: true,
    employee: true,
    sales: true,
    deliveries: true,
    purchases: true,
  }
): Promise<GetUserByIdResponse> {
  const user = await prisma.user.findUnique({
    where: { id },
    select: selectFields,
  });

  if (!user) {
    throw new ResourceError(ErrorCode.RESOURCE_NOT_FOUND);
  }

  return { user };
}

export { getUserById };
