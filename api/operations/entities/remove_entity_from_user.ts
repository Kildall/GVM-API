import { prisma } from "@/api/helpers/prisma";
import { ErrorCode, ResourceError } from "@/api/types/errors";

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
  const updateResult = await prisma.user.update({
    where: { id: userId },
    data: {
      permissions: {
        delete: { id: entityId },
      },
    },
  });

  if (!updateResult) {
    throw new ResourceError(ErrorCode.RESOURCE_NOT_FOUND);
  }

  return { message: "entity successfully removed from user" };
}

export { removeEntityFromUser };
