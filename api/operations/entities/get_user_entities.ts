import { prisma } from "@/api/helpers/prisma";
import { EntityType, type Entity } from "@prisma/client";

async function getUserEntities(userId: number): Promise<Entity[]> {
  // Get user with all nested permissions and roles in a single query
  const userWithPermissions = await prisma.user.findUnique({
    where: { id: userId },
    include: {
      permissions: {
        include: {
          permissions: {
            include: {
              permissions: true,
              roles: {
                include: {
                  permissions: true,
                  roles: true,
                },
              },
            },
          },
          roles: {
            include: {
              permissions: true,
              roles: {
                include: {
                  permissions: true,
                  roles: true,
                },
              },
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
      roles?: Entity[];
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

    // If this is a role, process its nested roles and permissions
    if (entity.type === EntityType.Role && entity.roles?.length) {
      for (const role of entity.roles) {
        processEntity(role);
      }
    }
  }

  // Process all user permissions
  for (const userEntity of userWithPermissions.permissions) {
    processEntity(userEntity);
  }

  // Sort entities by type (Roles first, then Permissions) and then by name
  return entities.sort((a, b) => {
    if (a.type !== b.type) {
      return a.type === EntityType.Role ? -1 : 1;
    }
    return a.name.localeCompare(b.name);
  });
}

export { getUserEntities };
