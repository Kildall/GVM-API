import { prisma } from "@/api/helpers/prisma";
import { ParamsError } from "@/api/types/errors";

interface RemoveEntityInput {
  id: number;
}

interface RemoveEntityResponse {
  message: string;
}

async function deleteEntity({
  id,
}: RemoveEntityInput): Promise<RemoveEntityResponse> {
  const existingEntity = await prisma.entity.findUnique({
    where: { id },
    include: { entityUser: true, roles: true },
  });

  if (!existingEntity) {
    throw new ParamsError("entity not found");
  }

  // Remove all associations
  await prisma.$transaction(async (prisma) => {
    await prisma.entity.delete({
      where: { id },
    });
  });

  return { message: "entity successfully removed" };
}

export { deleteEntity };
