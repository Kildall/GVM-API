import { PrismaClient } from "@prisma/client";
import { seedCustomers } from "./data/customers";
import { seedDeliveries } from "./data/deliveries";
import { seedEmployees } from "./data/employees";
import { seedProducts } from "./data/products";
import { seedSecurity } from "./data/security";
import { seedSuppliers } from "./data/suppliers";
import { seedTransactions } from "./data/transactions";
import { seedUsers } from "./data/users";

const prisma = new PrismaClient();

async function main() {
  try {
    // Create base entities
    const customers = await seedCustomers(prisma);
    const suppliers = await seedSuppliers(prisma);
    const employees = await seedEmployees(prisma);
    const products = await seedProducts(prisma);

    // Create security entities
    const { adminRole } = await seedSecurity(prisma);

    // Create users
    await seedUsers(prisma, employees, adminRole.id);

    // Create transactions
    const { sales } = await seedTransactions(
      prisma,
      customers,
      employees,
      products,
      suppliers
    );

    // Create deliveries
    const customerAddresses = await prisma.address.findMany();
    await seedDeliveries(prisma, sales, employees, customerAddresses);

    console.log("🌱 Seed completed successfully");
  } catch (error) {
    console.error("❌ Seed failed:", error);
    throw error;
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
