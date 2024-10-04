import { prisma } from "@/api/helpers/prisma";

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

  // Seed Suppliers
  const supplier1 = await prisma.supplier.create({
    data: {
      name: "Distribuidora El Pampa",
    },
  });

  // Seed Employees
  const employee1 = await prisma.employee.create({
    data: {
      name: "María Rodríguez",
      position: "Gerente de Ventas",
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

  // Seed Purchases
  const purchase1 = await prisma.purchase.create({
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

  // Seed DeliveryPerson
  const deliveryPerson1 = await prisma.deliveryPerson.create({
    data: {
      name: "Carlos Gómez",
      phone: "11-4444-5678",
    },
  });

  // Seed Delivery
  const delivery1 = await prisma.delivery.create({
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

  console.log("Datos de muestra creados exitosamente!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
