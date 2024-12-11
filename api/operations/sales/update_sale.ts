import { log } from "@/api/helpers/pino";
import { prisma } from "@/api/helpers/prisma";
import { createDelivery } from "@/api/operations/deliveries/create_delivery";
import { updateDelivery } from "@/api/operations/deliveries/update_delivery";
import { updateInventory } from "@/api/operations/inventory/update_inventory";
import {
  ErrorCode,
  ResourceError,
  ServerError,
  ValidationError,
} from "@/api/types/errors";

import {
  BusinessStatusEnum,
  DriverStatusEnum,
  type ProductSale,
  type Sale,
  SaleStatusEnum,
} from "@prisma/client";

interface UpdateSaleInput {
  saleId: number;
  status?: SaleStatusEnum;
  products?: Array<{
    productId: number;
    quantity: number;
  }>;
  deliveries?: Array<{
    addressId: number;
    employeeId: number;
    startDate: Date;
  }>;
  employeeId?: number;
  customerId?: number;
}

interface UpdateSaleResponse extends Sale {
  products: ProductSale[];
}
async function updateSale({
  saleId,
  products,
  status,
  employeeId,
  customerId,
  deliveries,
}: UpdateSaleInput): Promise<UpdateSaleResponse> {
  try {
    // Step 1: Initial validation and data fetching (outside transaction)
    const initialData = await validateAndFetchInitialData(saleId, products);
    if (!initialData.sale) {
      throw new ResourceError(ErrorCode.RESOURCE_NOT_FOUND);
    }

    // Step 2: Process deliveries (outside transaction since it involves external operations)
    if (deliveries) {
      await processDeliveries(deliveries, initialData.sale);
    }

    // Step 3: Handle sale update and inventory in a transaction
    return await prisma.$transaction(async (tx) => {
      // Update the sale
      const updatedSale = await tx.sale.update({
        where: { id: saleId },
        data: {
          lastUpdateDate: new Date(),
          status,
          employeeId,
          customerId,
          products: products
            ? {
                deleteMany: {},
                create: products.map((product) => ({
                  productId: product.productId,
                  quantity: product.quantity,
                })),
              }
            : undefined,
        },
        include: {
          products: true,
        },
      });

      // Update inventory if products changed
      if (products) {
        await updateInventoryBatch(tx, {
          currentProducts: initialData.currentSaleProducts,
          newProducts: products,
        });
      }

      return updatedSale;
    });
  } catch (error) {
    if (error instanceof ValidationError) {
      throw error;
    }
    log.error(error);
    throw new ServerError();
  }
}

// Helper functions
async function validateAndFetchInitialData(
  saleId: number,
  products?: Array<{ productId: number; quantity: number }>
) {
  const [sale, currentSaleProducts] = await Promise.all([
    prisma.sale.findUnique({
      where: { id: saleId },
      include: {
        deliveries: true,
      },
    }),
    prisma.productSale.findMany({
      where: { saleId },
    }),
  ]);

  if (!sale) {
    return { sale: null, currentSaleProducts: [] };
  }

  if (products) {
    // Fetch all products inventory in a single query
    const productIds = products.map((p) => p.productId);
    const inventoryData = await prisma.product.findMany({
      where: { id: { in: productIds } },
      select: { id: true, quantity: true },
    });

    // Validate inventory
    for (const product of products) {
      const inventoryCheck = inventoryData.find(
        (p) => p.id === product.productId
      );
      const currentProductSale = currentSaleProducts.find(
        (p) => p.productId === product.productId
      );
      const additionalQuantity = currentProductSale
        ? product.quantity - currentProductSale.quantity
        : product.quantity;

      if (!inventoryCheck || inventoryCheck.quantity < additionalQuantity) {
        throw new ValidationError(ErrorCode.INSUFFICIENT_INVENTORY);
      }
    }
  }

  return { sale, currentSaleProducts };
}

async function processDeliveries(
  requestDeliveries: Array<{
    addressId: number;
    employeeId: number;
    startDate: Date;
  }>,
  sale: Sale & { deliveries: any[] }
) {
  const { removed, added, updated } = categorizeSaleDeliveries(
    sale.deliveries,
    requestDeliveries
  );

  // Process all removals in parallel
  if (removed.length > 0) {
    await Promise.all(
      removed.map((delivery) =>
        updateDelivery({
          deliveryId: delivery.id,
          businessStatus: BusinessStatusEnum.CANCELLED,
          driverStatus: DriverStatusEnum.CANCELLED,
        })
      )
    );
  }

  // Process all updates in parallel
  if (updated.length > 0) {
    await Promise.all(
      updated.map(({ existingDelivery, updatedDelivery }) =>
        updateDelivery({
          deliveryId: existingDelivery.id,
          startDate: updatedDelivery.startDate,
          addressId: updatedDelivery.addressId,
          employeeId: updatedDelivery.employeeId,
        })
      )
    );
  }

  // Validate and create new deliveries
  if (added.length > 0) {
    const [addresses, employees] = await Promise.all([
      prisma.address.findMany({
        where: {
          id: { in: added.map((d) => d.addressId) },
          customerId: sale.customerId,
        },
      }),
      prisma.employee.findMany({
        where: {
          id: { in: added.map((d) => d.employeeId) },
        },
      }),
    ]);

    // Validate all resources exist
    for (const delivery of added) {
      if (!addresses.some((a) => a.id === delivery.addressId)) {
        throw new ResourceError(ErrorCode.RESOURCE_NOT_FOUND);
      }
      if (!employees.some((e) => e.id === delivery.employeeId)) {
        throw new ResourceError(ErrorCode.RESOURCE_NOT_FOUND);
      }
    }

    // Create all new deliveries in parallel
    await Promise.all(
      added.map((delivery) =>
        createDelivery({
          saleId: sale.id,
          employeeId: delivery.employeeId,
          addressId: delivery.addressId,
          startDate: delivery.startDate,
        })
      )
    );
  }
}

async function updateInventoryBatch(
  tx: any,
  {
    currentProducts,
    newProducts,
  }: {
    currentProducts: ProductSale[];
    newProducts: Array<{ productId: number; quantity: number }>;
  }
) {
  // Process inventory updates in parallel
  await Promise.all([
    // Revert old products
    ...currentProducts.map((product) =>
      updateInventory(
        {
          productId: product.productId,
          quantity: product.quantity,
          isIncrease: true,
        },
        tx
      )
    ),
    // Add new products
    ...newProducts.map((product) =>
      updateInventory(
        {
          productId: product.productId,
          quantity: product.quantity,
          isIncrease: false,
        },
        tx
      )
    ),
  ]);
}

function categorizeSaleDeliveries(
  existingDeliveries: any[],
  newDeliveries: any[]
) {
  return {
    removed: existingDeliveries.filter(
      (d) =>
        !newDeliveries.some(
          (d2) => d2.employeeId === d.employeeId && d2.addressId === d.addressId
        )
    ),
    added: newDeliveries.filter(
      (d) =>
        !existingDeliveries.some(
          (d2) => d2.employeeId === d.employeeId && d2.addressId === d.addressId
        )
    ),
    updated: newDeliveries
      .filter((d) =>
        existingDeliveries.some(
          (d2) => d2.employeeId === d.employeeId && d2.addressId === d.addressId
        )
      )
      .map((updatedDelivery) => ({
        updatedDelivery,
        existingDelivery: existingDeliveries.find(
          (d) =>
            d.employeeId === updatedDelivery.employeeId &&
            d.addressId === updatedDelivery.addressId
        ),
      })),
  };
}

export { updateSale };
