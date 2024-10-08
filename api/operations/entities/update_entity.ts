import { prisma } from "@/api/helpers/prisma";
import { ParamsError } from "@/api/types/errors";
import { EntityType, type Entity } from "@prisma/client";

interface ModifyEntityInput {
  entityId: number;
  name?: string;
  childEntityIds?: number[];
}

interface ModifyEntityResponse {
  entity: Entity;
}

async function updateEntity({
  entityId,
  name,
  childEntityIds,
}: ModifyEntityInput): Promise<ModifyEntityResponse> {
  const existingEntity = await prisma.entity.findUnique({
    where: { id: entityId },
    include: { roles: true },
  });

  if (!existingEntity) {
    throw new ParamsError("entity not found");
  }

  if (name && name !== existingEntity.name) {
    const nameExists = await prisma.entity.findUnique({
      where: { name },
    });
    if (nameExists) {
      throw new ParamsError("an entity with this name already exists");
    }
  }

  let updateData: any = {};
  if (name) updateData.name = name;

  if (childEntityIds && childEntityIds.length > 0) {
    if (existingEntity.type !== EntityType.Role) {
      updateData.type = EntityType.Role;
    }
    updateData.roles = {
      set: childEntityIds.map((id) => ({ id })),
    };
  }

  const updatedEntity = await prisma.entity.update({
    where: { id: entityId },
    data: updateData,
    include: { roles: true },
  });

  return { entity: updatedEntity };
}

export { updateEntity };
