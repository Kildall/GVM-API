import { prisma } from "@/api/helpers/prisma";
import { ErrorCode, ResourceError } from "@/api/types/errors";

interface AddEntityInput {
  userId: number;
  entityId: number;
}

interface AddEntityResponse {
  message: string;
}

async function addEntityToUser({
  userId,
  entityId,
}: AddEntityInput): Promise<AddEntityResponse> {
  const entity = await prisma.entity.findUnique({
    where: {
      id: entityId,
    },
  });

  if (!entity) {
    throw new ResourceError(ErrorCode.RESOURCE_NOT_FOUND);
  }

  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  if (!user) {
    throw new ResourceError(ErrorCode.RESOURCE_NOT_FOUND);
  }

  await prisma.user.update({
    where: { id: userId },
    data: {
      permissions: {
        connect: {
          id: entityId,
        },
      },
    },
  });

  return { message: "added entity to user" };
}

export { addEntityToUser };
