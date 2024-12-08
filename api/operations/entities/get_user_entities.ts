import { prisma } from "@/api/helpers/prisma";
import { EntityType, type Entity } from "@prisma/client";

async function getUserEntities(userId: number): Promise<Entity[]> {
  const visitedEntityIds: Set<number> = new Set();
  const entities: Entity[] = [];

  async function traverseEntity(entityId: number): Promise<void> {
    if (visitedEntityIds.has(entityId)) {
      return; // Skip
    }
    visitedEntityIds.add(entityId);

    const entity = await prisma.entity.findUnique({
      where: { id: entityId },
      include: { roles: true },
    });

    if (!entity) return;

    entities.push(entity);

    if (entity.type === EntityType.Role) {
      // If this is a role, recursively check its permissions and nested roles
      for (const nestedEntity of entity.roles) {
        await traverseEntity(nestedEntity.id);
      }

      const rolePermissions = await prisma.entity.findMany({
        where: {
          roles: { some: { id: entityId } },
          type: EntityType.Permission,
        },
      });

      for (const permission of rolePermissions) {
        if (!visitedEntityIds.has(permission.id)) {
          visitedEntityIds.add(permission.id);
          entities.push(permission);
        }
      }
    }
  }

  const user = await prisma.user.findUnique({
    where: { id: userId },
    include: { permissions: true },
  });

  if (!user) return [];

  for (const userEntity of user.permissions) {
    await traverseEntity(userEntity.id);
  }

  return entities;
}

export { getUserEntities };
