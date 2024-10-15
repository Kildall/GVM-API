import { prisma } from "@/api/helpers/prisma";
import { ParamsError } from "@/api/types/errors";
import type { Entity, User } from "@prisma/client";

interface GetEntityByIdInput {
  id: number;
}

interface GetEntityByIdResponse {
  entity: Entity & {
    users: User[];
    childEntities: Entity[];
  };
}

async function getEntityById({
  id,
}: GetEntityByIdInput): Promise<GetEntityByIdResponse> {
  const entity = await prisma.entity.findUnique({
    where: { id },
    include: {
      entityUser: {
        include: {
          user: true,
        },
      },
      roles: true,
    },
  });

  if (!entity) {
    throw new ParamsError("Entity not found");
  }

  const formattedEntity = {
    ...entity,
    users: entity.entityUser.map((eu) => eu.user),
    childEntities: entity.roles,
  };

  return { entity: formattedEntity };
}

export { getEntityById };