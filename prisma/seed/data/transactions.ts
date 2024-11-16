import {
  PrismaClient,
  SaleStatusEnum,
  type Customer,
  type Employee,
  type Product,
  type Supplier,
} from "@prisma/client";

export const seedTransactions = async (
  prisma: PrismaClient,
  customers: Customer[],
  employees: Employee[],
  products: Product[],
  suppliers: Supplier[]
) => {
  // Create sales
  const sales = [
    {
      customerId: customers[0].id,
      employeeId: employees[0].id,
      startDate: new Date(),
      lastUpdateDate: new Date(),
      status: SaleStatusEnum.IN_PROGRESS,
      products: {
        create: [
          {
            productId: products[0].id,
            quantity: 3,
          },
        ],
      },
    },
    {
      customerId: customers[1].id,
      employeeId: employees[0].id,
      startDate: new Date(),
      lastUpdateDate: new Date(),
      status: SaleStatusEnum.READY,
      products: {
        create: [
          {
            productId: products[1].id,
            quantity: 2,
          },
        ],
      },
    },
  ];

  // Create purchases
  const purchases = [
    {
      employeeId: employees[0].id,
      supplierId: suppliers[0].id,
      date: new Date(),
      amount: 42525,
      description: "Reposición de Yerba Mate",
      products: {
        create: [
          {
            productId: products[0].id,
            quantity: 50,
          },
        ],
      },
    },
    {
      employeeId: employees[1].id,
      supplierId: suppliers[1].id,
      date: new Date(),
      amount: 16037.5,
      description: "Reposición de Alfajores",
      products: {
        create: [
          {
            productId: products[1].id,
            quantity: 50,
          },
        ],
      },
    },
  ];

  const createdSales = await Promise.all(
    sales.map((sale) => prisma.sale.create({ data: sale }))
  );

  const createdPurchases = await Promise.all(
    purchases.map((purchase) => prisma.purchase.create({ data: purchase }))
  );

  return { sales: createdSales, purchases: createdPurchases };
};
