import { prisma } from "@/api/helpers/prisma";
import { EntityType } from "@prisma/client";

async function main() {
  // Seed Customers
  const customer1 = await prisma.customer.create({
    data: {
      name: "Juan Pérez",
      phone: "11-5555-1234",
      registrationDate: new Date(),
      addresses: {
        create: [
          {
            name: "Casa",
            street1: "Av. Corrientes 1234",
            postalCode: "C1043AAZ",
            state: "Buenos Aires",
            city: "Ciudad Autónoma de Buenos Aires",
          },
        ],
      },
    },
    include: {
      addresses: true,
    },
  });

  const customer2 = await prisma.customer.create({
    data: {
      name: "Lucía González",
      phone: "351-444-5678",
      registrationDate: new Date(),
      addresses: {
        create: [
          {
            name: "Trabajo",
            street1: "Av. Colón 788",
            postalCode: "X5000EPU",
            state: "Córdoba",
            city: "Córdoba",
          },
        ],
      },
    },
    include: {
      addresses: true,
    },
  });

  // Seed Suppliers
  const supplier1 = await prisma.supplier.create({
    data: {
      name: "Distribuidora El Pampa",
    },
  });

  const supplier2 = await prisma.supplier.create({
    data: {
      name: "Molinos Río de la Plata",
    },
  });

  // Seed Employees
  const employee1 = await prisma.employee.create({
    data: {
      name: "María Rodríguez",
      position: "Gerente de Ventas",
    },
  });

  const employee2 = await prisma.employee.create({
    data: {
      name: "Carlos Fernández",
      position: "Encargado de Compras",
    },
  });

  // Seed Products
  const product1 = await prisma.product.create({
    data: {
      name: "Yerba Mate Tradicional",
      quantity: 100,
      measure: 0.5,
      brand: "La Merced",
      price: 850.5,
    },
  });

  const product2 = await prisma.product.create({
    data: {
      name: "Alfajores de Chocolate",
      quantity: 50,
      measure: 0.3,
      brand: "Havanna",
      price: 320.75,
    },
  });

  // Seed Sales
  const sale1 = await prisma.sale.create({
    data: {
      customerId: customer1.id,
      startDate: new Date(),
      lastUpdateDate: new Date(),
      status: "STARTED",
      products: {
        create: [
          {
            productId: product1.id,
            quantity: 3,
          },
        ],
      },
    },
  });

  const sale2 = await prisma.sale.create({
    data: {
      customerId: customer2.id,
      startDate: new Date(),
      lastUpdateDate: new Date(),
      status: "COMPLETED",
      products: {
        create: [
          {
            productId: product2.id,
            quantity: 2,
          },
        ],
      },
    },
  });

  // Seed Purchases
  await prisma.purchase.create({
    data: {
      employeeId: employee1.id,
      supplierId: supplier1.id,
      date: new Date(),
      amount: 42525,
      description: "Reposición de Yerba Mate",
      products: {
        create: [
          {
            productId: product1.id,
            quantity: 50,
          },
        ],
      },
    },
  });

  await prisma.purchase.create({
    data: {
      employeeId: employee2.id,
      supplierId: supplier2.id,
      date: new Date(),
      amount: 16037.5,
      description: "Reposición de Alfajores",
      products: {
        create: [
          {
            productId: product2.id,
            quantity: 50,
          },
        ],
      },
    },
  });

  // Seed DeliveryPerson
  const deliveryPerson1 = await prisma.deliveryPerson.create({
    data: {
      name: "Carlos Gómez",
      phone: "11-4444-5678",
    },
  });

  const deliveryPerson2 = await prisma.deliveryPerson.create({
    data: {
      name: "Ana Martínez",
      phone: "351-666-7890",
    },
  });

  // Seed Delivery
  await prisma.delivery.create({
    data: {
      saleId: sale1.id,
      deliveryPersonId: deliveryPerson1.id,
      addressId: customer1.addresses[0].id,
      startDate: new Date(),
      lastUpdateDate: new Date(),
      status: "PENDING_ASSIGNMENT",
      businessStatus: "STARTED",
    },
  });

  await prisma.delivery.create({
    data: {
      saleId: sale2.id,
      deliveryPersonId: deliveryPerson2.id,
      addressId: customer2.addresses[0].id,
      startDate: new Date(),
      lastUpdateDate: new Date(),
      status: "DELIVERED",
      businessStatus: "COMPLETED",
    },
  });

  // Seed Users
  await prisma.user.create({
    data: {
      email: "pedro.estu1@gmail.com",
      name: "Pedro",
      password:
        "dc9ebe0f939a0b9907fc3f89d830cf92c46d4d8ee40c814751fcfa3febb77e9b69498f9466dbb6fb7ff5955da006d25355e0eb2f4d8e12e9e6c494ddfdd8d6a1",
      enabled: true,
      verified: true,
    },
  });

  const user2 = await prisma.user.create({
    data: {
      email: "admin@example.com",
      name: "Admin User",
      password:
        "dc9ebe0f939a0b9907fc3f89d830cf92c46d4d8ee40c814751fcfa3febb77e9b69498f9466dbb6fb7ff5955da006d25355e0eb2f4d8e12e9e6c494ddfdd8d6a1",
      enabled: true,
      verified: true,
    },
  });

  // Seed Security Entities (Permissions)
  const permissions = [
    "address.read",
    "address.browse",
    "address.add",
    "address.delete",
    "address.edit",
    "customer.read",
    "customer.browse",
    "customer.add",
    "customer.delete",
    "customer.edit",
    "delivery.read",
    "delivery.browse",
    "delivery.add",
    "delivery.delete",
    "delivery.edit",
    "employee.read",
    "employee.browse",
    "employee.add",
    "employee.delete",
    "employee.edit",
    "product.read",
    "product.browse",
    "product.add",
    "product.delete",
    "product.edit",
    "purchase.read",
    "purchase.browse",
    "purchase.add",
    "purchase.delete",
    "purchase.edit",
    "sale.read",
    "sale.browse",
    "sale.add",
    "sale.delete",
    "sale.edit",
    "supplier.read",
    "supplier.browse",
    "supplier.add",
    "supplier.delete",
    "supplier.edit",
  ];

  for (const permission of permissions) {
    await prisma.entity.create({
      data: {
        name: permission,
        type: EntityType.Permission,
      },
    });
  }

  // Seed Security Entities (Roles)
  const adminRole = await prisma.entity.create({
    data: {
      name: "gvm.admin",
      type: EntityType.Role,
    },
  });

  // Assign all permissions to admin role
  const allPermissions = await prisma.entity.findMany({
    where: { type: EntityType.Permission },
  });

  await prisma.entity.update({
    where: { id: adminRole.id },
    data: {
      permissions: {
        connect: allPermissions.map((p) => ({ id: p.id })),
      },
    },
  });

  // Assign admin role to user2
  await prisma.entityUser.create({
    data: {
      userId: user2.id,
      entityId: adminRole.id,
    },
  });

  console.log(
    "Datos de muestra y entidades de seguridad creados exitosamente!"
  );
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
