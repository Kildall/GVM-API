import { PrismaClient } from "@prisma/client";

export const seedSuppliers = async (prisma: PrismaClient) => {
  const suppliers = [
    { name: "Distribuidora El Pampa" },
    { name: "Molinos Río de la Plata" },
  ];

  return await Promise.all(
    suppliers.map((supplier) => prisma.supplier.create({ data: supplier }))
  );
};
