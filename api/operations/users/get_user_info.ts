import { prisma } from "@/api/helpers/prisma";
import { getUserEntities } from "@/api/operations/entities/get_user_entities";
import { ParamsError } from "@/api/types/errors";
import { type User } from "@prisma/client";

interface GetUserInfoInput {
  id: number;
}

interface GetUserInfoResponse {
  user: Partial<User> & { permissions: string[] };
}

async function getUserInfo({
  id,
}: GetUserInfoInput): Promise<GetUserInfoResponse> {
  const dbUser = await prisma.user.findUnique({
    where: { id },
    select: {
      id: true,
      email: true,
      name: true,
      permissions: {
        select: {
          entity: {
            select: {
              name: true,
            },
          },
        },
      },
    },
  });

  if (!dbUser) {
    throw new ParamsError("user not found");
  }

  const user: GetUserInfoResponse["user"] = {
    ...dbUser,
    permissions: (await getUserEntities(id)).map((x) => x.name),
  };

  return { user };
}

export { getUserInfo };
