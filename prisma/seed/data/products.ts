import { PrismaClient } from "@prisma/client";

export const seedProducts = async (prisma: PrismaClient) => {
  const products = [
    {
      name: "Yerba Mate Tradicional",
      quantity: 100,
      measure: 0.5,
      brand: "La Merced",
      price: 850.5,
    },
    {
      name: "Alfajores de Chocolate",
      quantity: 50,
      measure: 0.3,
      brand: "Havanna",
      price: 320.75,
    },
  ];

  return await Promise.all(
    products.map((product) => prisma.product.create({ data: product }))
  );
};
