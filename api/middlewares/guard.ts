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
  // Get all user permissions and their nested relationships in a single query
  const userWithPermissions = await prisma.user.findUnique({
    where: { id: userId },
    include: {
      permissions: {
        include: {
          permissions: {
            include: {
              permissions: true, // Going three levels deep should cover most cases
            },
          },
          roles: {
            include: {
              permissions: true,
              roles: true,
            },
          },
        },
      },
    },
  });

  if (!userWithPermissions) return false;

  // Helper function to check if an entity matches our target
  const isTargetEntity = (entity: any): boolean =>
    entity.name === targetEntityName && entity.type === entityType;

  // Helper function to process an entity and its nested structure
  const processEntity = (entity: any): boolean => {
    if (!entity || visitedEntities.has(entity.id)) return false;
    visitedEntities.add(entity.id);

    // Direct match check
    if (isTargetEntity(entity)) return true;

    // Check permissions within this entity
    if (
      entity.permissions?.some((permission: any) => {
        if (visitedEntities.has(permission.id)) return false;
        return processEntity(permission);
      })
    )
      return true;

    // Check roles within this entity
    if (
      entity.roles?.some((role: any) => {
        if (visitedEntities.has(role.id)) return false;
        return processEntity(role);
      })
    )
      return true;

    return false;
  };

  // Process all user permissions
  return userWithPermissions.permissions.some(processEntity);
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
