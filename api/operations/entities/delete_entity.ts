import { prisma } from "@/api/helpers/prisma";
import { ErrorCode, ResourceError } from "@/api/types/errors";

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
  });

  if (!existingEntity) {
    throw new ResourceError(ErrorCode.RESOURCE_NOT_FOUND);
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
