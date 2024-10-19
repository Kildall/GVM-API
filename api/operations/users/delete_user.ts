import { prisma } from "@/api/helpers/prisma";

interface DeleteUserInput {
  id: number;
}

interface DeleteUserResponse {
  message: string;
}

async function deleteUser({
  id,
}: DeleteUserInput): Promise<DeleteUserResponse> {
  const existingUser = await prisma.user.findUnique({
    where: { id },
  });

  if (!existingUser) {
    throw new ParamsError("user not found");
  }

  await prisma.$transaction(async (prisma) => {
    // Delete related sessions
    await prisma.session.deleteMany({
      where: { userId: id },
    });

    // Delete related permissions (EntityUser)
    await prisma.entityUser.deleteMany({
      where: { userId: id },
    });

    // Delete related signatures
    await prisma.signature.deleteMany({
      where: { userId: id },
    });

    // Delete the user
    await prisma.user.delete({
      where: { id },
    });
  });

  return { message: "user and related data successfully deleted" };
}

export { deleteUser };
