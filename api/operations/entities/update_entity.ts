import { prisma } from "@/api/helpers/prisma";
import { ErrorCode, ResourceError } from "@/api/types/errors";
import { EntityType, Prisma, type Entity } from "@prisma/client";

interface ModifyEntityInput {
  entityId: number;
  name?: string;
  type?: EntityType;
  users?: number[];
  roles?: number[];
  permissions?: number[];
}

interface ModifyEntityResponse {
  entity: Entity;
}

async function updateEntity({
  entityId,
  name,
  type,
  users,
  roles,
  permissions,
}: ModifyEntityInput): Promise<ModifyEntityResponse> {
  // Find existing entity with roles and permissions
  const existingEntity = await prisma.entity.findUnique({
    where: { id: entityId },
    include: {
      roles: true,
      permissions: true,
      users: {
        select: {
          id: true,
          email: true,
          employee: {
            select: {
              name: true,
            },
          },
        },
      },
      _count: {
        select: {
          users: true,
          roles: true,
          permissions: true,
        },
      },
    },
  });

  if (!existingEntity) {
    throw new ResourceError(ErrorCode.RESOURCE_NOT_FOUND, "Entity not found");
  }

  // Check for name uniqueness if name is being updated
  if (name && name !== existingEntity.name) {
    const nameExists = await prisma.entity.findUnique({
      where: { name },
    });
    if (nameExists) {
      throw new ResourceError(
        ErrorCode.RESOURCE_ALREADY_EXISTS,
        "Entity with this name already exists"
      );
    }
  }

  // Build update data with proper typing
  const updateData: Prisma.EntityUpdateInput = {
    ...(name && { name }),
    ...(type && { type }),
    ...(roles?.length && {
      roles: {
        set: roles.map((id) => ({ id })),
      },
    }),
    ...(users?.length && {
      users: {
        set: users.map((id) => ({ id })),
      },
    }),
    ...(permissions?.length && {
      permissions: {
        set: permissions.map((id) => ({ id })),
      },
    }),
  };

  // Type validation when updating roles
  if (roles?.length) {
    if (existingEntity.type !== EntityType.Role && !type) {
      updateData.type = EntityType.Role;
    }
  }

  // Only perform update if there are changes
  if (Object.keys(updateData).length === 0) {
    return { entity: existingEntity };
  }

  try {
    const updatedEntity = await prisma.entity.update({
      where: { id: entityId },
      data: updateData,
      include: {
        roles: true,
        permissions: true,
        users: {
          select: {
            id: true,
            email: true,
            employee: {
              select: {
                name: true,
              },
            },
          },
        },
        _count: {
          select: {
            users: true,
            roles: true,
            permissions: true,
          },
        },
      },
    });

    return { entity: updatedEntity };
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2025") {
        throw new ResourceError(
          ErrorCode.RESOURCE_NOT_FOUND,
          "Entity not found"
        );
      }
      // Handle foreign key constraint failures
      if (error.code === "P2003") {
        throw new ResourceError(
          ErrorCode.VALIDATION_ERROR,
          "Invalid role or permission reference"
        );
      }
    }
    throw error;
  }
}

export { updateEntity };
