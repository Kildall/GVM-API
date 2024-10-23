import { prisma } from "@/api/helpers/prisma";
import { ErrorCode, ResourceError } from "@/api/types/errors";
import { EntityType, type Entity } from "@prisma/client";

interface ModifyEntityInput {
  entityId: number;
  name?: string;
  type?: EntityType;
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
  roles,
  permissions,
}: ModifyEntityInput): Promise<ModifyEntityResponse> {
  const existingEntity = await prisma.entity.findUnique({
    where: { id: entityId },
    include: { roles: true },
  });

  if (!existingEntity) {
    throw new ResourceError(ErrorCode.RESOURCE_NOT_FOUND);
  }

  if (name && name !== existingEntity.name) {
    const nameExists = await prisma.entity.findUnique({
      where: { name },
    });
    if (nameExists) {
      throw new ResourceError();
    }
  }

  let updateData: any = {};
  if (name) updateData.name = name;

  if (type) updateData.type = type;

  if (roles && roles.length > 0) {
    if (existingEntity.type !== EntityType.Role) {
      updateData.type = EntityType.Role;
    }
    updateData.roles = {
      set: roles.map((id) => ({ id })),
    };
  }

  if (permissions && permissions.length > 0) {
    updateData.permissions = {
      set: permissions.map((id) => ({ id })),
    };
  }

  const updatedEntity = await prisma.entity.update({
    where: { id: entityId },
    data: updateData,
    include: { roles: true, permissions: true },
  });

  return { entity: updatedEntity };
}

export { updateEntity };
