import { prisma } from "@/api/helpers/prisma";
import { ErrorCode, ResourceError } from "@/api/types/errors";

import type { Entity, EntityType } from "@prisma/client";

interface CreateEntityInput {
  name: string;
  type: EntityType;
}

interface CreateEntityResponse {
  entity: Entity;
}

async function createEntity({
  name,
  type,
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
    },
  });

  return { entity };
}

export { createEntity };
