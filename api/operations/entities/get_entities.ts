import { prisma } from "@/api/helpers/prisma";
import type { Entity, EntityType } from "@prisma/client";

interface ListEntitiesInput {
  type?: EntityType;
}

interface ListEntitiesResponse {
  entities: Entity[];
}

async function getEntities({
  type,
}: ListEntitiesInput = {}): Promise<ListEntitiesResponse> {
  const whereClause = type ? { type } : {};

  const entities = await prisma.entity.findMany({
    where: whereClause,
    include: { roles: true, permissions: true },
  });

  return { entities };
}

export { getEntities };
