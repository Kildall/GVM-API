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

interface ProductStats {
  product: Product;
  totalQuantitySold: number;
  totalRevenue: number;
}

interface CustomerStats {
  customer: Customer;
  totalOrders: number;
  totalSpent: number;
}

interface DashboardStats {
  totalSalesAmount: number;
  totalActiveSales: number;
  totalActiveDeliveries: number;
  totalProducts: number;
  totalCustomers: number;
  lowStockProducts: number;
  topSellingProducts: ProductStats[];
  mostActiveCustomers: CustomerStats[];
}

interface DashboardResponse {
  stats: DashboardStats;
  sales: (Sale & {
    customer: Customer;
    products: (ProductSale & {
      product: Product;
    })[];
  })[];
  deliveries: (Delivery & {
    sale: {
      customer: Customer;
    };
    address: Address;
  })[];
  products: Product[];
  customers: Customer[];
}

const ACTIVE_DELIVERY_STATUS: DeliveryStatusEnum[] = [
  DeliveryStatusEnum.ASSIGNED,
  DeliveryStatusEnum.IN_PROGRESS,
];

const ACTIVE_SALES_STATUS: SaleStatusEnum[] = [
  SaleStatusEnum.CREATED,
  SaleStatusEnum.IN_PROGRESS,
];

const LOW_STOCK_THRESHOLD = 10;
const TOP_ITEMS_LIMIT = 5;

async function getDashboard(): Promise<DashboardResponse> {
  try {
    // Fetch all required data in parallel
    const [sales, deliveries, products, customers] = await Promise.all([
      prisma.sale.findMany({
        include: {
          customer: true,
          products: {
            include: {
              product: true,
            },
          },
          employee: true,
        },
      }),
      prisma.delivery.findMany({
        include: {
          sale: {
            include: {
              customer: true,
            },
          },
          address: true,
        },
      }),
      prisma.product.findMany(),
      prisma.customer.findMany(),
    ]);

    // Calculate all product statistics
    const productSalesMap = new Map<
      string,
      { quantitySold: number; revenue: number }
    >();
    sales.forEach((sale) => {
      sale.products.forEach((productSale) => {
        const existing = productSalesMap.get(
          productSale.product.id.toString()
        ) || {
          quantitySold: 0,
          revenue: 0,
        };
        const saleRevenue = productSale.quantity * productSale.product.price;
        productSalesMap.set(productSale.product.id.toString(), {
          quantitySold: existing.quantitySold + productSale.quantity,
          revenue: existing.revenue + saleRevenue,
        });
      });
    });

    // Calculate all customer statistics
    const customerStatsMap = new Map<
      string,
      { orders: number; spent: number }
    >();
    sales.forEach((sale) => {
      const existing = customerStatsMap.get(sale.customer.id.toString()) || {
        orders: 0,
        spent: 0,
      };
      const saleTotal = sale.products.reduce(
        (total, ps) => total + ps.quantity * ps.product.price,
        0
      );
      customerStatsMap.set(sale.customer.id.toString(), {
        orders: existing.orders + 1,
        spent: existing.spent + saleTotal,
      });
    });

    // Convert product statistics to sorted array
    const allProductStats: ProductStats[] = Array.from(
      productSalesMap.entries()
    )
      .map(([productId, stats]) => ({
        product: products.find((p) => p.id === Number(productId))!,
        totalQuantitySold: stats.quantitySold,
        totalRevenue: stats.revenue,
      }))
      .sort((a, b) => b.totalRevenue - a.totalRevenue);

    // Convert customer statistics to sorted array
    const allCustomerStats: CustomerStats[] = Array.from(
      customerStatsMap.entries()
    )
      .map(([customerId, stats]) => ({
        customer: customers.find((c) => c.id === Number(customerId))!,
        totalOrders: stats.orders,
        totalSpent: stats.spent,
      }))
      .sort((a, b) => b.totalSpent - a.totalSpent);

    // Calculate dashboard statistics
    const stats: DashboardStats = {
      totalSalesAmount: sales.reduce((total, sale) => {
        const saleTotal = sale.products.reduce(
          (st, ps) => st + ps.quantity * ps.product.price,
          0
        );
        return total + saleTotal;
      }, 0),
      totalActiveSales: sales.filter((sale) =>
        ACTIVE_SALES_STATUS.includes(sale.status)
      ).length,
      totalActiveDeliveries: deliveries.filter((delivery) =>
        ACTIVE_DELIVERY_STATUS.includes(delivery.status)
      ).length,
      totalProducts: products.length,
      totalCustomers: customers.length,
      lowStockProducts: products.filter(
        (product) => product.quantity <= LOW_STOCK_THRESHOLD
      ).length,
      // Apply limits only when returning the data
      topSellingProducts: allProductStats.slice(0, TOP_ITEMS_LIMIT),
      mostActiveCustomers: allCustomerStats.slice(0, TOP_ITEMS_LIMIT),
    };

    return {
      stats,
      sales,
      deliveries,
      products,
      customers,
    };
  } catch (error) {
    log.error(error);
    throw new ServerError();
  }
}

export { getDashboard };
