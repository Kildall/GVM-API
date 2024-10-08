import { HTTPException } from "hono/http-exception";
import { prisma } from "@/api/helpers/prisma";
import { EntityType } from "@prisma/client";
import { createMiddleware } from "hono/factory";

async function hasEntityRecursive(
  userId: number,
  targetEntityName: string,
  entityType: EntityType,
  visitedEntities: Set<number> = new Set()
): Promise<boolean> {
  const userEntities = await prisma.entityUser.findMany({
    where: { userId: userId },
    include: { entity: true },
  });

  for (const userEntity of userEntities) {
    if (visitedEntities.has(userEntity.entityId)) {
      continue; // Skip if we've already visited this entity to prevent infinite loops
    }
    visitedEntities.add(userEntity.entityId);

    if (
      userEntity.entity.name === targetEntityName &&
      userEntity.entity.type === entityType
    ) {
      return true; // Found the target entity
    }

    // If this is a role, check its permissions
    if (userEntity.entity.type === EntityType.Role) {
      const rolePermissions = await prisma.entity.findMany({
        where: {
          roles: { some: { id: userEntity.entityId } },
          type: EntityType.Permission,
        },
      });

      for (const permission of rolePermissions) {
        if (
          permission.name === targetEntityName &&
          entityType === EntityType.Permission
        ) {
          return true; // Found the target permission within the role
        }
      }
    }

    // Recursive check for nested entities
    const nestedEntities = await prisma.entity.findMany({
      where: { roles: { some: { id: userEntity.entityId } } },
    });

    for (const nestedEntity of nestedEntities) {
      if (
        await hasEntityRecursive(
          userId,
          targetEntityName,
          entityType,
          visitedEntities
        )
      ) {
        return true;
      }
    }
  }

  return false; // If we've checked everything and haven't returned true, the entity wasn't found
}

const guard = (entityName: string, entityType: EntityType) => {
  return createMiddleware(async (c, next) => {
    if (!c.get("isAuthenticated")) {
      throw new HTTPException(401, { message: "User not authenticated" });
    }

    const userId = c.get("jwtPayload")?.id;
    if (!userId) {
      throw new HTTPException(401, {
        message: "User ID not found in JWT payload",
      });
    }

    try {
      const hasEntity = await hasEntityRecursive(
        userId,
        entityName,
        entityType
      );

      if (!hasEntity) {
        throw new HTTPException(403, {
          message: `User does not have the required ${entityType.toLowerCase()}: ${entityName}`,
        });
      }

      // If we reach this point, the user has the required entity
      await next();
    } catch (error) {
      if (error instanceof HTTPException) {
        throw error;
      }
      throw new HTTPException(500, { message: "Error checking user entity" });
    }
  });
};

export { guard };
