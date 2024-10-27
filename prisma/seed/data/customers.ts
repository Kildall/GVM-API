import type { PrismaClient } from "@prisma/client";

export const seedCustomers = async (prisma: PrismaClient) => {
  const customers = [
    {
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
    {
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
  ];

  return await Promise.all(
    customers.map((customer) =>
      prisma.customer.create({ data: customer, include: { addresses: true } })
    )
  );
};
