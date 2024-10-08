import { prisma } from "@/api/helpers/prisma";
import { ParamsError } from "@/api/types/errors";
import type { User, Entity } from "@prisma/client";

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
  });
  if (!entity) {
    throw new ParamsError("entity not found");
  }

  const entityUsers = await prisma.entityUser.findMany({
    where: {
      entityId: entity.id,
    },
    include: {
      user: true,
    },
  });

  const formattedUsers = entityUsers.map((entityUser) => {
    return entityUser.user;
  });

  return { users: formattedUsers };
}

export { getEntityUsers };
