import { prisma } from "@/api/helpers/prisma";
import { AuthError, ErrorCode } from "@/api/types/errors";
import { EntityType } from "@prisma/client";
import { createMiddleware } from "hono/factory";

async function hasEntityRecursive(
  userId: number,
  targetEntityName: string,
  entityType: EntityType,
  visitedEntities: Set<number> = new Set()
): Promise<boolean> {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    include: { permissions: true },
  });

  if (!user) return false;


  for (const userEntity of user.permissions) {
    if (visitedEntities.has(userEntity.id)) {
      continue; // Skip if we've already visited this entity to prevent infinite loops
    }
    visitedEntities.add(userEntity.id);

    if (userEntity.name === targetEntityName && userEntity.type === entityType) {
      return true; // Found the target entity
    }

    // If this is a role, check its permissions
    if (userEntity.type === EntityType.Role) {
      const rolePermissions = await prisma.entity.findMany({
        where: {
          roles: { some: { id: userEntity.id } },
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

    // TODO: Check nested roles
    // Recursive check for nested entities
    // const nestedEntities = await prisma.entity.findMany({
    //   where: { roles: { some: { id: userEntity.entityId } } },
    // });

    // for (const nestedEntity of nestedEntities) {
    //   if (
    //     await hasEntityRecursive(
    //       userId,
    //       targetEntityName,
    //       entityType,
    //       visitedEntities
    //     )
    //   ) {
    //     return true;
    //   }
    // }
  }

  return false; // If we've checked everything and haven't returned true, the entity wasn't found
}

const guard = (entityName: string, entityType: EntityType) => {
  return createMiddleware(async (c, next) => {
    if (!c.get("isAuthenticated")) {
      throw new AuthError(ErrorCode.ACCESS_DENIED);
    }

    const userId = c.get("jwtPayload")?.id;
    if (!userId) {
      throw new AuthError(ErrorCode.INVALID_TOKEN);
    }

    const hasEntity = await hasEntityRecursive(userId, entityName, entityType);

    if (!hasEntity) {
      throw new AuthError(
        ErrorCode.ACCESS_DENIED,
        `user does not have required ${entityType.toLowerCase()}: ${entityName}`
      );
    }

    // If we reach this point, the user has the required entity
    await next();
  });
};

export { guard };
