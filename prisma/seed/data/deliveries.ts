import {
  BusinessStatusEnum,
  DeliveryStatusEnum,
  PrismaClient,
  type Address,
  type Employee,
  type Sale,
} from "@prisma/client";

export const seedDeliveries = async (
  prisma: PrismaClient,
  sales: Sale[],
  employees: Employee[],
  customerAddresses: Address[]
) => {
  const deliveries = [
    {
      saleId: sales[0].id,
      employeeId: employees[0].id,
      addressId: customerAddresses[0].id,
      startDate: new Date(),
      lastUpdateDate: new Date(),
      status: DeliveryStatusEnum.ASSIGNED,
      businessStatus: BusinessStatusEnum.PENDING,
    },
    {
      saleId: sales[1].id,
      employeeId: employees[0].id,
      addressId: customerAddresses[1].id,
      startDate: new Date(),
      lastUpdateDate: new Date(),
      status: DeliveryStatusEnum.FINISHED,
      businessStatus: BusinessStatusEnum.DELIVERED,
    },
  ];

  return await Promise.all(
    deliveries.map((delivery) => prisma.delivery.create({ data: delivery }))
  );
};
