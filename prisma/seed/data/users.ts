import { PrismaClient } from "@prisma/client";

export const seedUsers = async (
  prisma: PrismaClient,
  employees: any[],
  adminRoleId: number
) => {
  const users = [
    {
      email: "admin@example.com",
      password:
        "dc9ebe0f939a0b9907fc3f89d830cf92c46d4d8ee40c814751fcfa3febb77e9b69498f9466dbb6fb7ff5955da006d25355e0eb2f4d8e12e9e6c494ddfdd8d6a1",
      enabled: true,
      verified: true,
      employeeId: employees[1].id,
      permissions: {
        connect: { id: adminRoleId },
      },
    },
  ];

  return await Promise.all(
    users.map((user) => prisma.user.create({ data: user }))
  );
};
