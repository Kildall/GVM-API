import { prisma } from "@/api/helpers/prisma";
import { EntityType, type Entity } from "@prisma/client";

async function getUserEntities(userId: number): Promise<Entity[]> {
  // Get user with all nested permissions and roles in a single query
  const userWithPermissions = await prisma.user.findUnique({
    where: { id: userId },
    select: {
      id: true,
      permissions: {
        select: {
          id: true,
          name: true,
          type: true,
          permissions: {
            select: {
              id: true,
              name: true,
              type: true,
            },
          },
        },
      },
    },
  });

  if (!userWithPermissions) return [];

  const visitedEntityIds: Set<number> = new Set();
  const entities: Entity[] = [];

  function processEntity(
    entity: Entity & {
      permissions?: Entity[];
    }
  ): void {
    if (!entity || visitedEntityIds.has(entity.id)) return;

    visitedEntityIds.add(entity.id);
    entities.push(entity);

    // Process permissions within this entity
    if (entity.permissions?.length) {
      for (const permission of entity.permissions) {
        processEntity(permission);
      }
    }
  }

  // Process all user permissions
  for (const userEntity of userWithPermissions.permissions) {
    processEntity(userEntity);
  }

  // Sort entities by type (Roles first, then Permissions) and then by name
  return entities
    .map((x) => ({
      id: x.id,
      name: x.name,
      type: x.type,
    }))
    .sort((a, b) => {
      if (a.type !== b.type) {
        return a.type === EntityType.Role ? -1 : 1;
      }
      return a.name.localeCompare(b.name);
    });
}

export { getUserEntities };
