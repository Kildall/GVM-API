import { PrismaClient } from "@prisma/client";

export const seedEmployees = async (prisma: PrismaClient) => {
  const employees = [
    { name: "María Rodríguez", position: "Gerente de Ventas" },
    { name: "Carlos Fernández", position: "Encargado de Compras" },
    { name: "Ana Gómez", position: "Supervisor de Almacén" },
    { name: "Luis Pérez", position: "Repartidor" },
  ];

  return await Promise.all(
    employees.map((employee) => prisma.employee.create({ data: employee }))
  );
};
