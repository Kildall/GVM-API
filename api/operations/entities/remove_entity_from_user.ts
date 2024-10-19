import { prisma } from "@/api/helpers/prisma";
import { ResourceError } from "@/api/types/errors";

interface RemoveEntityFromUserInput {
  userId: number;
  entityId: number;
}

interface RemoveEntityFromUserResponse {
  message: string;
}

async function removeEntityFromUser({
  userId,
  entityId,
}: RemoveEntityFromUserInput): Promise<RemoveEntityFromUserResponse> {
  const entityUser = await prisma.entityUser.findUnique({
    where: {
      userId_entityId: {
        userId,
        entityId,
      },
    },
  });

  if (!entityUser) {
    throw new ResourceError();
  }

  await prisma.entityUser.delete({
    where: {
      userId_entityId: {
        userId,
        entityId,
      },
    },
  });

  return { message: "entity successfully removed from user" };
}

export { removeEntityFromUser };
