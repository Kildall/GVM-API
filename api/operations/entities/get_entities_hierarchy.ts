import { prisma } from "@/api/helpers/prisma";
import type { Entity } from "@prisma/client";

interface EntityWithChildren extends Entity {
  children: EntityWithChildren[];
}

interface ListEntityHierarchyResponse {
  hierarchy: EntityWithChildren[];
}

async function getEntitiesHierarchy(): Promise<ListEntityHierarchyResponse> {
  const allEntities = await prisma.entity.findMany({
    include: {
      roles: true,
    },
  });

  const buildHierarchy = (
    entities: (Entity & { roles: Entity[] })[],
    parentId: number | null = null
  ): EntityWithChildren[] => {
    return entities
      .filter((entity) =>
        parentId === null
          ? !entity.roles.some((role) => entities.find((e) => e.id === role.id))
          : entity.roles.some((role) => role.id === parentId)
      )
      .map((entity) => ({
        ...entity,
        children: buildHierarchy(entities, entity.id),
      }));
  };

  const hierarchy = buildHierarchy(allEntities);

  return { hierarchy };
}

export { getEntitiesHierarchy };
