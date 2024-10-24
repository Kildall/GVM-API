import { prisma } from "@/api/helpers/prisma";
import { ErrorCode, ResourceError } from "@/api/types/errors";
import type { Entity, User } from "@prisma/client";

interface GetEntityByIdInput {
  id: number;
}

interface GetEntityByIdResponse {
  entity: Entity & {
    users: Partial<User>[];
    childEntities: Entity[];
    _count: {
      users: number;
      permissions: number;
      roles: number;
    };
  };
}

async function getEntityById({
  id,
}: GetEntityByIdInput): Promise<GetEntityByIdResponse> {
  const entity = await prisma.entity.findUnique({
    where: { id },
    include: {
      users: {
        select: {
          id: true,
          email: true,
          employee: true,
          password: false,
        },
      },
      roles: true,
      permissions: true,
      _count: {
        select: {
          users: true,
          permissions: true,
          roles: true,
        },
      },
    },
  });

  if (!entity) {
    throw new ResourceError(ErrorCode.RESOURCE_NOT_FOUND);
  }

  const formattedEntity = {
    ...entity,
    users: entity.users,
    childEntities: entity.roles,
  };

  return { entity: formattedEntity };
}

export { getEntityById };
