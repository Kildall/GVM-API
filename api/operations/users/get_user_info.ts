import { prisma } from "@/api/helpers/prisma";
import { getUserEntities } from "@/api/operations/entities/get_user_entities";
import { ErrorCode, ResourceError } from "@/api/types/errors";

import { type User } from "@prisma/client";

interface GetUserInfoInput {
  id: number;
}

interface GetUserInfoResponse {
  user: Partial<User> & { permissions: string[]; name: string };
}

async function getUserInfo({
  id,
}: GetUserInfoInput): Promise<GetUserInfoResponse> {
  const dbUser = await prisma.user.findUnique({
    where: { id },
    select: {
      id: true,
      email: true,
      permissions: {
        select: {
          name: true,
        },
      },
      employee: {
        select: {
          name: true,
        },
      },
    },
  });

  if (!dbUser) {
    throw new ResourceError(ErrorCode.RESOURCE_NOT_FOUND);
  }

  const dbUserWithoutEmployee = {
    ...dbUser,
    employee: undefined,
  };

  const user: GetUserInfoResponse["user"] = {
    ...dbUserWithoutEmployee,
    permissions: (await getUserEntities(id)).map((x) => x.name),
    name: dbUser.employee?.name ?? "",
  };

  return { user };
}

export { getUserInfo };
