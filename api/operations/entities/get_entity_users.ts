import { prisma } from "@/api/helpers/prisma";
import { ErrorCode, ResourceError } from "@/api/types/errors";
import type { User } from "@prisma/client";

interface GetEntityUsersInput {
  entityId: number;
}

interface GetEntityUsersResponse {
  users: User[];
}

async function getEntityUsers({
  entityId,
}: GetEntityUsersInput): Promise<GetEntityUsersResponse> {
  const entity = await prisma.entity.findUnique({
    where: {
      id: entityId,
    },
    include: { users: true },

  });
  if (!entity) {
    throw new ResourceError(ErrorCode.RESOURCE_NOT_FOUND);
  }

  const formattedUsers = entity.users.map((entityUser) => {
    return entityUser;
  });

  return { users: formattedUsers };
}

export { getEntityUsers };
