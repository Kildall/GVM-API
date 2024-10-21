import { prisma } from "@/api/helpers/prisma";
import type { User } from "@prisma/client";

interface GetUsersResponse {
  users: User[];
}

async function getUsers(): Promise<GetUsersResponse> {
  const users = await prisma.user.findMany({
    include: {
      sessions: true,
      permissions: true,
      signatures: true,
      employee: true,
    },
  });

  return { users };
}

export { getUsers };
