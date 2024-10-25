import { prisma } from "@/api/helpers/prisma";
import { ErrorCode, ResourceError } from "@/api/types/errors";

import type { Entity, EntityType } from "@prisma/client";

interface CreateEntityInput {
  name: string;
  type: EntityType;
  permissions: number[];
  roles: number[];
}

interface CreateEntityResponse {
  entity: Entity;
}

async function createEntity({
  name,
  type,
  permissions,
  roles,
}: CreateEntityInput): Promise<CreateEntityResponse> {
  const existingEntity = await prisma.entity.findUnique({
    where: {
      name,
    },
  });

  if (existingEntity) {
    throw new ResourceError(ErrorCode.RESOURCE_ALREADY_EXISTS);
  }

  const entity = await prisma.entity.create({
    data: {
      name,
      type,
      permissions: {
        connect: permissions.map((id) => ({ id })),
      },
      roles: {
        connect: roles.map((id) => ({ id })),
      },
    },
  });

  return { entity };
}

export { createEntity };
