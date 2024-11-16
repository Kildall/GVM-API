import { EntityType, PrismaClient, type Entity } from "@prisma/client";

// Define base permission actions
const BASE_ACTIONS = ["read", "browse", "add", "delete", "edit"] as const;

// Define entity relationships for edit/add operations
const ENTITY_DEPENDENCIES: Record<string, string[]> = {
  purchase: ["employee.browse", "supplier.browse", "product.browse"],
  sale: [
    "customer.browse",
    "employee.browse",
    "product.browse",
    "address.browse",
    "delivery.browse",
  ],
  customer: ["sale.browse", "address.browse"],
  delivery: ["sale.browse", "employee.browse", "address.browse"],
  address: ["customer.browse", "delivery.browse"],
  supplier: ["purchase.browse"],
  employee: ["sale.browse", "delivery.browse", "purchase.browse"],
  product: ["sale.browse", "purchase.browse"],
};

// Define special compound roles
const COMPOUND_ROLES = {
  "employee.role.base": {
    description: "Base employee role",
    permissions: [
      "employee.browse",
      "product.browse",
      "sale.browse",
      "customer.browse",
      "address.browse",
      "delivery.browse",
    ],
  },
  "employee.role.delivery": {
    description: "Delivery employee role",
    permissions: ["delivery.browse", "delivery.read", "delivery.edit.status"],
  },
};

export const seedSecurity = async (prisma: PrismaClient) => {
  // Create all base permissions first
  const baseEntities = [
    "address",
    "customer",
    "delivery",
    "employee",
    "product",
    "purchase",
    "sale",
    "supplier",
  ];

  const specificEntities = ["delivery.edit.status"];

  const allPermissions = new Set<string>();

  // Add base permissions
  baseEntities.forEach((entity) => {
    BASE_ACTIONS.forEach((action) => {
      allPermissions.add(`${entity}.${action}`);
    });
  });

  // Create all permissions in the database
  const createdPermissions = await Promise.all(
    Array.from(allPermissions).map((permission) =>
      prisma.entity.create({
        data: {
          name: permission,
          type: EntityType.Permission,
        },
      })
    )
  );

  const specificPermissions = await Promise.all(
    specificEntities.map((entity) =>
      prisma.entity.create({
        data: { name: entity, type: EntityType.Permission },
      })
    )
  );

  const operationRoles: Entity[] = [];

  for (const [entity, dependencies] of Object.entries(ENTITY_DEPENDENCIES)) {
    const editRoleName = `${entity}.role.edit`;
    const addRoleName = `${entity}.role.add`;

    const editPermissions = [...dependencies];

    const addPermissions = [...dependencies];

    const editRole = await prisma.entity.create({
      data: {
        name: editRoleName,
        type: EntityType.Role,
        permissions: {
          connect: createdPermissions
            .filter((p) => editPermissions.includes(p.name))
            .map((p) => ({ id: p.id })),
        },
      },
    });

    const addRole = await prisma.entity.create({
      data: {
        name: addRoleName,
        type: EntityType.Role,
        permissions: {
          connect: createdPermissions
            .filter((p) => addPermissions.includes(p.name))
            .map((p) => ({ id: p.id })),
        },
      },
    });

    operationRoles.push(editRole, addRole);
  }

  // Create compound roles
  const compoundRoles = await Promise.all(
    Object.entries(COMPOUND_ROLES).map(([roleName, roleConfig]) =>
      prisma.entity.create({
        data: {
          name: roleName,
          type: EntityType.Role,
          permissions: {
            connect: [...createdPermissions, ...specificPermissions]
              .filter((p) => roleConfig.permissions.includes(p.name))
              .map((p) => ({ id: p.id })),
          },
        },
      })
    )
  );

  // Create admin role with all permissions
  const adminRole = await prisma.entity.create({
    data: {
      name: "gvm.admin",
      type: EntityType.Role,
      permissions: {
        connect: createdPermissions.map((p) => ({ id: p.id })),
      },
    },
  });

  return {
    permissions: createdPermissions,
    operationRoles: operationRoles,
    compoundRoles,
    adminRole,
  };
};
