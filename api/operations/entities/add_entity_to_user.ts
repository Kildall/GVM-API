import { prisma } from "@/api/helpers/prisma";

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
    throw new Error("entity not found");
  }

  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  if (!user) {
    throw new Error("user not found");
  }
  await prisma.entityUser.create({
    data: {
      entity: {
        connect: {
          id: entity.id,
        },
      },
      user: {
        connect: {
          id: user.id,
        },
      },
    },
  });

  return { message: "added entity to user" };
}

export { addEntityToUser };
