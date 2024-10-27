import { EntityType, PrismaClient } from "@prisma/client";

export const seedSecurity = async (prisma: PrismaClient) => {
  const permissions = [
    "address",
    "customer",
    "delivery",
    "employee",
    "product",
    "purchase",
    "sale",
    "supplier",
  ].reduce((acc, entity) => {
    return acc.concat(
      ["read", "browse", "add", "delete", "edit"].map(
        (action) => `${entity}.${action}`
      )
    );
  }, [] as string[]);

  // Create permissions
  const createdPermissions = await Promise.all(
    permissions.map((permission) =>
      prisma.entity.create({
        data: {
          name: permission,
          type: EntityType.Permission,
        },
      })
    )
  );

  // Create admin role
  const adminRole = await prisma.entity.create({
    data: {
      name: "gvm.admin",
      type: EntityType.Role,
      permissions: {
        connect: createdPermissions.map((p) => ({ id: p.id })),
      },
    },
  });

  return { permissions: createdPermissions, adminRole };
};
