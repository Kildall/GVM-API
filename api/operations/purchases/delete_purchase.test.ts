import { ErrorCode, ResourceError, ServerError } from "@/api/types/errors";
import {
  SaleStatusEnum,
  type Product,
  type Purchase,
  type PurchaseProduct,
} from "@prisma/client";
import { describe, expect, mock, test } from "bun:test";
import { deletePurchase } from "./delete_purchase";

// Create base mock data
const mockProduct: Product = {
  id: 1,
  name: "Test Product",
  quantity: 100,
  measure: 1,
  brand: "Test Brand",
  price: 10,
  enabled: true,
};

const mockPurchaseProduct: PurchaseProduct = {
  purchaseId: 1,
  productId: 1,
  quantity: 50,
};

const mockPurchase: Purchase = {
  id: 1,
  employeeId: 1,
  supplierId: 1,
  date: new Date(),
  amount: 500,
  description: "Test Purchase",
};

// Create transaction-aware mock prisma
function createMockPrisma(overrides = {}) {
  const basePrisma = {
    purchase: {
      findUnique: mock(() => null),
      delete: mock(() => null),
    },
    product: {
      update: mock(() => null),
    },
    productSale: {
      aggregate: mock(() => ({ _sum: { quantity: 0 } })),
    },
    ...overrides,
  };

  const mockTransaction = mock(async (callback) => {
    return callback(basePrisma);
  });

  return {
    ...basePrisma,
    $transaction: mockTransaction,
  };
}

describe("purchases/delete_purchase", () => {
  test("should throw ResourceError when purchase not found", async () => {
    const prisma = createMockPrisma();
    mock.module("@/api/helpers/prisma", () => ({ prisma }));

    await expect(deletePurchase(1)).rejects.toEqual(
      new ResourceError(ErrorCode.RESOURCE_NOT_FOUND)
    );
  });

  test("should successfully delete purchase and update product quantities", async () => {
    const mockPurchaseWithProducts = {
      ...mockPurchase,
      products: [
        {
          ...mockPurchaseProduct,
          product: mockProduct,
        },
      ],
    };

    const prisma = createMockPrisma({
      purchase: {
        findUnique: mock(() => mockPurchaseWithProducts),
        delete: mock(() => mockPurchaseWithProducts),
      },
      product: {
        update: mock(() => ({ ...mockProduct, quantity: 50 })),
      },
    });

    mock.module("@/api/helpers/prisma", () => ({ prisma }));

    const result = await deletePurchase(1);

    expect(result).toEqual({ message: "purchase deleted successfully" });
    expect(prisma.product.update).toHaveBeenCalledTimes(1);
    expect(prisma.purchase.delete).toHaveBeenCalledTimes(1);
  });

  test("should throw InsufficientInventory when deleting would cause stock shortage", async () => {
    const mockPurchaseWithProducts = {
      ...mockPurchase,
      products: [
        {
          ...mockPurchaseProduct,
          product: mockProduct,
        },
      ],
    };

    const prisma = createMockPrisma({
      purchase: {
        findUnique: mock(() => mockPurchaseWithProducts),
      },
      productSale: {
        aggregate: mock(() => ({ _sum: { quantity: 80 } })),
      },
    });

    mock.module("@/api/helpers/prisma", () => ({ prisma }));

    await expect(deletePurchase(1)).rejects.toEqual(
      new ResourceError(ErrorCode.INSUFFICIENT_INVENTORY)
    );
  });

  test("should handle unexpected errors", async () => {
    const prisma = createMockPrisma({
      purchase: {
        findUnique: mock(() => {
          throw new Error("Unexpected database error");
        }),
      },
    });

    mock.module("@/api/helpers/prisma", () => ({ prisma }));

    await expect(deletePurchase(1)).rejects.toEqual(new ServerError());
  });

  test("should handle multiple products in purchase", async () => {
    const mockPurchaseWithMultipleProducts = {
      ...mockPurchase,
      products: [
        {
          purchaseId: 1,
          productId: 1,
          quantity: 30,
          product: { ...mockProduct, id: 1 },
        },
        {
          purchaseId: 1,
          productId: 2,
          quantity: 20,
          product: { ...mockProduct, id: 2 },
        },
      ],
    };

    const prisma = createMockPrisma({
      purchase: {
        findUnique: mock(() => mockPurchaseWithMultipleProducts),
        delete: mock(() => mockPurchaseWithMultipleProducts),
      },
      product: {
        update: mock(() => mockProduct),
      },
    });

    mock.module("@/api/helpers/prisma", () => ({ prisma }));

    const result = await deletePurchase(1);

    expect(result).toEqual({ message: "purchase deleted successfully" });
    expect(prisma.product.update).toHaveBeenCalledTimes(2);
    expect(prisma.purchase.delete).toHaveBeenCalledTimes(1);
  });

  test("should check ongoing sales across all statuses except CANCELLED and DELIVERED", async () => {
    const mockPurchaseWithProducts = {
      ...mockPurchase,
      products: [
        {
          ...mockPurchaseProduct,
          product: mockProduct,
        },
      ],
    };

    let aggregateQueryParams: any;
    const prisma = createMockPrisma({
      purchase: {
        findUnique: mock(() => mockPurchaseWithProducts),
        delete: mock(() => mockPurchaseWithProducts),
      },
      productSale: {
        aggregate: mock((params) => {
          aggregateQueryParams = params;
          return { _sum: { quantity: 30 } };
        }),
      },
    });

    mock.module("@/api/helpers/prisma", () => ({ prisma }));

    const result = await deletePurchase(1);

    expect(result).toEqual({ message: "purchase deleted successfully" });
    expect(aggregateQueryParams.where.sale.status.notIn).toEqual([
      SaleStatusEnum.CANCELLED,
      SaleStatusEnum.DELIVERED,
    ]);
  });
});
