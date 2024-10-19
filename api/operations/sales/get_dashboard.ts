import { log } from "@/api/helpers/pino";
import { prisma } from "@/api/helpers/prisma";
import { ServerError } from "@/api/types/errors";

import {
  type Address,
  type Customer,
  type Delivery,
  DeliveryStatusEnum,
  type Product,
  type ProductSale,
  type Sale,
  SaleStatusEnum,
} from "@prisma/client";

interface DashboardResponse {
  recentSales: (Sale & {
    customer: Customer;
    products: (ProductSale & {
      product: Product;
    })[];
  })[];
  recentDeliveries: (Delivery & {
    sale: {
      customer: Customer;
    };
    address: Address;
  })[];
  totalSalesAmount: number;
  totalActiveSales: number;
  totalActiveDeliveries: number;
}

const ACTIVE_DELIVERY_STATUS: DeliveryStatusEnum[] = [
  DeliveryStatusEnum.ASSIGNED,
  DeliveryStatusEnum.IN_PROGRESS,
];
const ACTIVE_SALES_STATUS: SaleStatusEnum[] = [
  SaleStatusEnum.STARTED,
  SaleStatusEnum.IN_PROGRESS,
];

async function getDashboard(): Promise<DashboardResponse> {
  try {
    const now = new Date();
    const twentyFourHoursAgo = new Date(now.getTime() - 24 * 60 * 60 * 1000);

    // Fetch all required data in a single query
    const [sales, deliveries] = await Promise.all([
      prisma.sale.findMany({
        where: {
          startDate: {
            gt: twentyFourHoursAgo,
          },
        },
        orderBy: {
          startDate: "desc",
        },
        include: {
          customer: true,
          products: {
            include: {
              product: true,
            },
          },
        },
      }),
      prisma.delivery.findMany({
        where: {
          startDate: {
            gt: twentyFourHoursAgo,
          },
        },
        orderBy: {
          startDate: "desc",
        },
        include: {
          sale: {
            include: {
              customer: true,
            },
          },
          address: true,
        },
      }),
    ]);

    // Process sales data
    const recentSales = sales.slice(0, 3);
    const totalSalesAmount = sales.reduce((total, sale) => {
      const saleTotal = sale.products.reduce((saleTotal, productSale) => {
        return saleTotal + productSale.quantity * productSale.product.price;
      }, 0);
      return total + saleTotal;
    }, 0);
    const totalActiveSales = sales.filter((sale) =>
      ACTIVE_SALES_STATUS.includes(sale.status)
    ).length;

    // Process deliveries data
    const recentDeliveries = deliveries.slice(0, 3);
    const totalActiveDeliveries = deliveries.filter((delivery) =>
      ACTIVE_DELIVERY_STATUS.includes(delivery.status)
    ).length;

    return {
      recentSales,
      recentDeliveries,
      totalSalesAmount,
      totalActiveSales,
      totalActiveDeliveries,
    };
  } catch (error) {
    log.error(error);
    throw new ServerError();
  }
}

export { getDashboard };
