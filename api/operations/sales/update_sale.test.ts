import { ErrorCode, ResourceError, ServerError } from "@/api/types/errors";
import {
  type Address,
  BusinessStatusEnum,
  type Delivery,
  DeliveryStatusEnum,
  DriverStatusEnum,
  type Employee,
  type Product,
  type ProductSale,
  type Sale,
  SaleStatusEnum,
} from "@prisma/client";
import { beforeEach, describe, expect, mock, test } from "bun:test";
import { updateSale } from "./update_sale";

const baseDate = new Date("2024-01-01T12:00:00Z");

const mockExistingDelivery: Delivery = {
  id: 1,
  saleId: 1,
  employeeId: 1,
  addressId: 1,
  startDate: baseDate,
  lastUpdateDate: baseDate,
  status: DeliveryStatusEnum.CREATED,
  businessStatus: BusinessStatusEnum.PENDING,
  driverStatus: null,
};

const mockSale: Sale = {
  id: 1,
  customerId: 1,
  employeeId: 1,
  startDate: new Date(),
  lastUpdateDate: new Date(),
  status: SaleStatusEnum.CREATED,
};

const mockProductSales: ProductSale[] = [
  {
    saleId: 1,
    productId: 1,
    quantity: 5,
  },
  {
    saleId: 1,
    productId: 2,
    quantity: 3,
  },
];

type MockPrismaClient = {
  sale: {
    findUnique: ReturnType<typeof mock>;
    update: ReturnType<typeof mock>;
  };
  productSale: {
    findMany: ReturnType<typeof mock>;
  };
  product: {
    findMany: ReturnType<typeof mock>;
  };
  address: {
    findMany: ReturnType<typeof mock>;
  };
  employee: {
    findMany: ReturnType<typeof mock>;
  };
  $transaction: <T>(fn: (tx: MockPrismaClient) => Promise<T>) => Promise<T>;
  _transactionCalled: () => boolean;
};

// Create transaction-aware mock prisma
function createMockPrisma(overrides = {}): MockPrismaClient {
  let transactionCalled = false;

  const basePrisma = {
    sale: {
      findUnique: mock(() => {}),
      update: mock(() => {}),
    },
    productSale: {
      findMany: mock(() => []),
    },
    product: {
      findMany: mock(() => []),
    },
    address: {
      findMany: mock(() => []),
    },
    employee: {
      findMany: mock(() => []),
    },
    ...overrides,
  };

  const mockPrisma = {
    ...basePrisma,
    $transaction: async <T>(
      fn: (tx: MockPrismaClient) => Promise<T>
    ): Promise<T> => {
      transactionCalled = true;
      return fn(mockPrisma);
    },
    _transactionCalled: () => transactionCalled,
  };

  return mockPrisma;
}

// const mockLogger = {
//   info: mock(() => {}),
//   error: mock(() => {}),
//   debug: mock(() => {}),
//   warn: mock(() => {}),
//   trace: mock(() => {}),
// };

describe("sales/update_sale", () => {
  const mockUpdateInventory = mock(async () => {});
  const mockCreateDelivery = mock(async () => {});
  const mockUpdateDelivery = mock(async () => {});

  beforeEach(() => {
    mockUpdateInventory.mockReset();
    mockCreateDelivery.mockReset();
    mockUpdateDelivery.mockReset();
  });

  // beforeEach(() => {
  //   mock.module("@/api/helpers/pino", () => ({
  //     log: mockLogger,
  //   }));
  // });

  test("should throw ResourceError when sale not found", async () => {
    const prisma = createMockPrisma();

    mock.module("@/api/helpers/prisma", () => ({ prisma }));
    mock.module("@/api/operations/inventory/update_inventory", () => ({
      updateInventory: mockUpdateInventory,
    }));

    await expect(updateSale({ saleId: 1 })).rejects.toEqual(
      new ResourceError(ErrorCode.RESOURCE_NOT_FOUND)
    );
  });

  test("should successfully update sale with new products", async () => {
    const mockProducts: Product[] = [
      {
        id: 1,
        name: "Product 1",
        quantity: 10,
        measure: 1,
        brand: "Brand 1",
        price: 10.0,
        enabled: true,
      },
      {
        id: 2,
        name: "Product 2",
        quantity: 15,
        measure: 1,
        brand: "Brand 2",
        price: 20.0,
        enabled: true,
      },
    ];

    const mockUpdatedSale: Sale & { products: ProductSale[] } = {
      ...mockSale,
      products: [
        { saleId: 1, productId: 1, quantity: 3 },
        { saleId: 1, productId: 2, quantity: 4 },
      ],
    };

    const prisma = createMockPrisma({
      sale: {
        findUnique: mock(() => ({ ...mockSale, deliveries: [] })),
        update: mock(() => mockUpdatedSale),
      },
      productSale: {
        findMany: mock(() => mockProductSales),
      },
      product: {
        findMany: mock(() => mockProducts),
      },
    });

    mock.module("@/api/helpers/prisma", () => ({ prisma }));
    mock.module("@/api/operations/inventory/update_inventory", () => ({
      updateInventory: mockUpdateInventory,
    }));

    const result = await updateSale({
      saleId: 1,
      products: [
        { productId: 1, quantity: 3 },
        { productId: 2, quantity: 4 },
      ],
    });

    expect(result).toStrictEqual(mockUpdatedSale);
    expect(mockUpdateInventory).toHaveBeenCalledTimes(4); // 2 reverts + 2 new products
    expect(prisma._transactionCalled()).toBe(true);
  });

  test("should throw ResourceError for insufficient inventory", async () => {
    const mockProducts = [
      {
        id: 1,
        name: "Product 1",
        quantity: 5,
        measure: 1,
        brand: "Brand 1",
        price: 10.0,
        enabled: true,
      },
      {
        id: 2,
        name: "Product 2",
        quantity: 15,
        measure: 1,
        brand: "Brand 2",
        price: 20.0,
        enabled: true,
      },
    ];

    const prisma = createMockPrisma({
      sale: {
        findUnique: mock(() => ({ ...mockSale, deliveries: [] })),
      },
      productSale: {
        findMany: mock(() => mockProductSales),
      },
      product: {
        findMany: mock(() => mockProducts),
      },
      $transaction: mock((callback) =>
        callback({
          sale: {
            update: mock(() => ({ ...mockSale })),
          },
        })
      ),
    });

    mock.module("@/api/helpers/prisma", () => ({ prisma }));
    mock.module("@/api/operations/inventory/update_inventory", () => ({
      updateInventory: mockUpdateInventory,
    }));

    // Test case 1: New product quantity exceeds available inventory
    await expect(
      updateSale({
        saleId: 1,
        products: [
          { productId: 1, quantity: 10 }, // Requesting more than available (5)
          { productId: 2, quantity: 4 },
        ],
      })
    ).rejects.toEqual(new ResourceError(ErrorCode.INSUFFICIENT_INVENTORY));

    // Test case 2: Increment existing product beyond available inventory
    mockProductSales.push({ saleId: 1, productId: 1, quantity: 3 });
    await expect(
      updateSale({
        saleId: 1,
        products: [
          { productId: 1, quantity: 8 }, // Current: 3, New: 8, Available: 5
        ],
      })
    ).rejects.toEqual(new ResourceError(ErrorCode.INSUFFICIENT_INVENTORY));
  });

  test("should successfully process deliveries", async () => {
    const mockAddress: Address = {
      id: 1,
      name: "Address 1",
      customerId: 1,
      street1: "Street 1",
      street2: null,
      postalCode: "12345",
      state: "State",
      city: "City",
      details: null,
      enabled: true,
    };

    const mockEmployee: Employee = {
      id: 1,
      name: "Employee 1",
      position: "Driver",
      enabled: true,
      userId: null,
    };

    const mockUpdatedSale: Sale & { products: ProductSale[] } = {
      ...mockSale,
      products: [],
    };

    const prisma = createMockPrisma({
      sale: {
        findUnique: mock(() => ({
          ...mockSale,
          deliveries: [],
        })),
        update: mock(() => mockUpdatedSale),
      },
      address: {
        findMany: mock(() => [mockAddress]),
      },
      employee: {
        findMany: mock(() => [mockEmployee]),
      },
      productSale: {
        findMany: mock(() => []),
      },
    });

    mock.module("@/api/helpers/prisma", () => ({ prisma }));
    mock.module("@/api/operations/deliveries/create_delivery", () => ({
      createDelivery: mockCreateDelivery,
    }));

    const deliveryDate = new Date();

    await updateSale({
      saleId: 1,
      deliveries: [
        {
          addressId: 1,
          employeeId: 1,
          startDate: deliveryDate,
        },
      ],
    });

    expect(mockCreateDelivery).toHaveBeenCalledTimes(1);
    expect(mockCreateDelivery).toHaveBeenCalledWith({
      saleId: 1,
      addressId: 1,
      employeeId: 1,
      startDate: deliveryDate,
    });
  });

  test("should handle delivery updates", async () => {
    const existingDelivery: Delivery = {
      id: 1,
      saleId: 1,
      employeeId: 1,
      addressId: 1,
      startDate: new Date(),
      lastUpdateDate: new Date(),
      status: DeliveryStatusEnum.CREATED,
      businessStatus: BusinessStatusEnum.PENDING,
      driverStatus: null,
    };

    const mockUpdatedSale: Sale & { products: ProductSale[] } = {
      ...mockSale,
      products: [],
    };

    const prisma = createMockPrisma({
      sale: {
        findUnique: mock(() => ({
          ...mockSale,
          deliveries: [existingDelivery],
        })),
        update: mock(() => mockUpdatedSale),
      },
      productSale: {
        findMany: mock(() => []),
      },
    });

    mock.module("@/api/helpers/prisma", () => ({ prisma }));
    mock.module("@/api/operations/deliveries/update_delivery", () => ({
      updateDelivery: mockUpdateDelivery,
    }));

    const newStartDate = new Date();
    await updateSale({
      saleId: 1,
      deliveries: [
        {
          employeeId: 1,
          addressId: 1,
          startDate: newStartDate,
        },
      ],
    });

    expect(mockUpdateDelivery).toHaveBeenCalledWith({
      deliveryId: 1,
      startDate: newStartDate,
      addressId: 1,
      employeeId: 1,
    });
  });

  test("should handle unexpected errors", async () => {
    const prisma = createMockPrisma({
      sale: {
        findUnique: mock(() => {
          throw new Error("Unexpected database error");
        }),
      },
    });

    mock.module("@/api/helpers/prisma", () => ({ prisma }));

    await expect(
      updateSale({
        saleId: 1,
      })
    ).rejects.toEqual(new ServerError());
  });

  test("should update basic sale information", async () => {
    const mockUpdatedSale: Sale & { products: ProductSale[] } = {
      ...mockSale,
      status: SaleStatusEnum.DELIVERED,
      employeeId: 2,
      customerId: 3,
      products: [],
    };

    const prisma = createMockPrisma({
      sale: {
        findUnique: mock(() => mockSale),
        update: mock(() => mockUpdatedSale),
      },
      productSale: {
        findMany: mock(() => []),
      },
    });

    mock.module("@/api/helpers/prisma", () => ({ prisma }));

    const result = await updateSale({
      saleId: 1,
      status: SaleStatusEnum.DELIVERED,
      employeeId: 2,
      customerId: 3,
    });

    expect(result).toStrictEqual(mockUpdatedSale);
    expect(prisma._transactionCalled()).toBe(true);
  });

  test("should add new deliveries", async () => {
    const prisma = createMockPrisma({
      sale: {
        findUnique: mock(() => ({ ...mockSale, deliveries: [] })),
        update: mock(() => ({ ...mockSale, products: [] })),
      },
      address: {
        findMany: mock(() => [
          { id: 1, customerId: 1 },
          { id: 2, customerId: 1 },
        ]),
      },
      employee: {
        findMany: mock(() => [{ id: 1 }, { id: 2 }]),
      },
    });

    mock.module("@/api/helpers/prisma", () => ({ prisma }));
    mock.module("@/api/operations/deliveries/create_delivery", () => ({
      createDelivery: mockCreateDelivery,
    }));

    const newDeliveries = [
      { addressId: 1, employeeId: 1, startDate: baseDate },
      { addressId: 2, employeeId: 2, startDate: baseDate },
    ];

    await updateSale({
      saleId: 1,
      deliveries: newDeliveries,
    });

    expect(mockCreateDelivery).toHaveBeenCalledTimes(2);
    expect(mockCreateDelivery).toHaveBeenCalledWith({
      saleId: 1,
      ...newDeliveries[0],
    });
    expect(mockCreateDelivery).toHaveBeenCalledWith({
      saleId: 1,
      ...newDeliveries[1],
    });
  });

  test("should remove existing deliveries", async () => {
    const existingDeliveries = [
      { ...mockExistingDelivery, id: 1, employeeId: 1, addressId: 1 },
      { ...mockExistingDelivery, id: 2, employeeId: 2, addressId: 2 },
    ];

    const prisma = createMockPrisma({
      sale: {
        findUnique: mock(() => ({
          ...mockSale,
          deliveries: existingDeliveries,
        })),
        update: mock(() => ({ ...mockSale, products: [] })),
      },
    });

    mock.module("@/api/helpers/prisma", () => ({ prisma }));
    mock.module("@/api/operations/deliveries/update_delivery", () => ({
      updateDelivery: mockUpdateDelivery,
    }));

    // Empty deliveries array effectively removes all existing deliveries
    await updateSale({
      saleId: 1,
      deliveries: [],
    });

    expect(mockUpdateDelivery).toHaveBeenCalledTimes(2);
    existingDeliveries.forEach((delivery) => {
      expect(mockUpdateDelivery).toHaveBeenCalledWith({
        deliveryId: delivery.id,
        businessStatus: BusinessStatusEnum.CANCELLED,
        driverStatus: DriverStatusEnum.CANCELLED,
      });
    });
  });

  test("should update existing deliveries", async () => {
    const existingDelivery = {
      ...mockExistingDelivery,
      id: 1,
      employeeId: 1,
      addressId: 1,
    };
    const newDate = new Date("2024-01-02T12:00:00Z");

    const prisma = createMockPrisma({
      sale: {
        findUnique: mock(() => ({
          ...mockSale,
          deliveries: [existingDelivery],
        })),
        update: mock(() => ({ ...mockSale, products: [] })),
      },
    });

    mock.module("@/api/helpers/prisma", () => ({ prisma }));
    mock.module("@/api/operations/deliveries/update_delivery", () => ({
      updateDelivery: mockUpdateDelivery,
    }));

    await updateSale({
      saleId: 1,
      deliveries: [
        {
          employeeId: 1,
          addressId: 1,
          startDate: newDate,
        },
      ],
    });

    expect(mockUpdateDelivery).toHaveBeenCalledTimes(1);
    expect(mockUpdateDelivery).toHaveBeenCalledWith({
      deliveryId: 1,
      employeeId: 1,
      addressId: 1,
      startDate: newDate,
    });
  });

  test("should handle mixed delivery operations", async () => {
    const existingDeliveries = [
      { ...mockExistingDelivery, id: 1, employeeId: 1, addressId: 1 },
      { ...mockExistingDelivery, id: 2, employeeId: 2, addressId: 2 },
    ];

    const prisma = createMockPrisma({
      sale: {
        findUnique: mock(() => ({
          ...mockSale,
          deliveries: existingDeliveries,
        })),
        update: mock(() => ({ ...mockSale, products: [] })),
      },
      address: {
        findMany: mock(() => [
          { id: 1, customerId: 1 },
          { id: 3, customerId: 1 },
        ]),
      },
      employee: {
        findMany: mock(() => [{ id: 1 }, { id: 3 }]),
      },
    });

    mock.module("@/api/helpers/prisma", () => ({ prisma }));
    mock.module("@/api/operations/deliveries/create_delivery", () => ({
      createDelivery: mockCreateDelivery,
    }));
    mock.module("@/api/operations/deliveries/update_delivery", () => ({
      updateDelivery: mockUpdateDelivery,
    }));

    const newDate = new Date("2024-01-02T12:00:00Z");
    await updateSale({
      saleId: 1,
      deliveries: [
        // Update existing delivery
        { employeeId: 1, addressId: 1, startDate: newDate },
        // Add new delivery
        { employeeId: 3, addressId: 3, startDate: baseDate },
        // Delivery 2 will be removed (not included)
      ],
    });

    // Check update of existing delivery
    expect(mockUpdateDelivery).toHaveBeenCalledWith({
      deliveryId: 1,
      employeeId: 1,
      addressId: 1,
      startDate: newDate,
    });

    // Check removal of delivery 2
    expect(mockUpdateDelivery).toHaveBeenCalledWith({
      deliveryId: 2,
      businessStatus: BusinessStatusEnum.CANCELLED,
      driverStatus: DriverStatusEnum.CANCELLED,
    });

    // Check creation of new delivery
    expect(mockCreateDelivery).toHaveBeenCalledWith({
      saleId: 1,
      employeeId: 3,
      addressId: 3,
      startDate: baseDate,
    });
  });

  test("should throw ResourceError for invalid address", async () => {
    const prisma = createMockPrisma({
      sale: {
        findUnique: mock(() => ({ ...mockSale, deliveries: [] })),
      },
      address: {
        findMany: mock(() => []), // No matching addresses found
      },
      employee: {
        findMany: mock(() => [{ id: 1 }]),
      },
    });

    mock.module("@/api/helpers/prisma", () => ({ prisma }));

    await expect(
      updateSale({
        saleId: 1,
        deliveries: [
          {
            addressId: 999,
            employeeId: 1,
            startDate: baseDate,
          },
        ],
      })
    ).rejects.toEqual(new ResourceError(ErrorCode.RESOURCE_NOT_FOUND));
  });

  test("should throw ResourceError for invalid employee", async () => {
    const prisma = createMockPrisma({
      sale: {
        findUnique: mock(() => ({ ...mockSale, deliveries: [] })),
      },
      address: {
        findMany: mock(() => [{ id: 1, customerId: 1 }]),
      },
      employee: {
        findMany: mock(() => []), // No matching employees found
      },
    });

    mock.module("@/api/helpers/prisma", () => ({ prisma }));

    await expect(
      updateSale({
        saleId: 1,
        deliveries: [
          {
            addressId: 1,
            employeeId: 999,
            startDate: baseDate,
          },
        ],
      })
    ).rejects.toEqual(new ResourceError(ErrorCode.RESOURCE_NOT_FOUND));
  });

  test("should handle empty deliveries array with no existing deliveries", async () => {
    const prisma = createMockPrisma({
      sale: {
        findUnique: mock(() => ({ ...mockSale, deliveries: [] })),
        update: mock(() => ({ ...mockSale, products: [] })),
      },
    });

    mock.module("@/api/helpers/prisma", () => ({ prisma }));

    await updateSale({
      saleId: 1,
      deliveries: [],
    });

    expect(mockCreateDelivery).not.toHaveBeenCalled();
    expect(mockUpdateDelivery).not.toHaveBeenCalled();
  });

  // Test undefined deliveries parameter
  test("should handle undefined deliveries parameter", async () => {
    const existingDeliveries = [
      { ...mockExistingDelivery, id: 1, employeeId: 1, addressId: 1 },
    ];

    const prisma = createMockPrisma({
      sale: {
        findUnique: mock(() => ({
          ...mockSale,
          deliveries: existingDeliveries,
        })),
        update: mock(() => ({ ...mockSale, products: [] })),
      },
    });

    mock.module("@/api/helpers/prisma", () => ({ prisma }));

    await updateSale({
      saleId: 1,
    });

    expect(mockCreateDelivery).not.toHaveBeenCalled();
    expect(mockUpdateDelivery).not.toHaveBeenCalled();
  });

  // Test partial delivery updates
  test("should handle partial delivery updates", async () => {
    const existingDelivery = {
      ...mockExistingDelivery,
      id: 1,
      employeeId: 1,
      addressId: 1,
    };

    const prisma = createMockPrisma({
      sale: {
        findUnique: mock(() => ({
          ...mockSale,
          deliveries: [existingDelivery],
        })),
        update: mock(() => ({ ...mockSale, products: [] })),
      },
    });

    mock.module("@/api/helpers/prisma", () => ({ prisma }));
    mock.module("@/api/operations/deliveries/update_delivery", () => ({
      updateDelivery: mockUpdateDelivery,
    }));

    // Only update startDate, keep same employee and address
    const newDate = new Date("2024-01-02T12:00:00Z");
    await updateSale({
      saleId: 1,
      deliveries: [
        {
          employeeId: existingDelivery.employeeId,
          addressId: existingDelivery.addressId,
          startDate: newDate,
        },
      ],
    });

    expect(mockUpdateDelivery).toHaveBeenCalledTimes(1);
    expect(mockUpdateDelivery).toHaveBeenCalledWith({
      deliveryId: 1,
      employeeId: existingDelivery.employeeId,
      addressId: existingDelivery.addressId,
      startDate: newDate,
    });
  });

  // Test multiple address validation
  test("should validate all addresses for new deliveries", async () => {
    const prisma = createMockPrisma({
      sale: {
        findUnique: mock(() => ({ ...mockSale, deliveries: [] })),
      },
      address: {
        findMany: mock(() => [
          { id: 1, customerId: 1 }, // Only first address exists
        ]),
      },
      employee: {
        findMany: mock(() => [{ id: 1 }, { id: 2 }]),
      },
    });

    mock.module("@/api/helpers/prisma", () => ({ prisma }));

    await expect(
      updateSale({
        saleId: 1,
        deliveries: [
          { addressId: 1, employeeId: 1, startDate: baseDate },
          { addressId: 2, employeeId: 2, startDate: baseDate }, // Non-existent address
        ],
      })
    ).rejects.toEqual(new ResourceError(ErrorCode.RESOURCE_NOT_FOUND));
  });

  // Test multiple employee validation
  test("should validate all employees for new deliveries", async () => {
    const prisma = createMockPrisma({
      sale: {
        findUnique: mock(() => ({ ...mockSale, deliveries: [] })),
      },
      address: {
        findMany: mock(() => [
          { id: 1, customerId: 1 },
          { id: 2, customerId: 1 },
        ]),
      },
      employee: {
        findMany: mock(() => [
          { id: 1 }, // Only first employee exists
        ]),
      },
    });

    mock.module("@/api/helpers/prisma", () => ({ prisma }));

    await expect(
      updateSale({
        saleId: 1,
        deliveries: [
          { addressId: 1, employeeId: 1, startDate: baseDate },
          { addressId: 2, employeeId: 2, startDate: baseDate }, // Non-existent employee
        ],
      })
    ).rejects.toEqual(new ResourceError(ErrorCode.RESOURCE_NOT_FOUND));
  });

  // Test address customer validation
  test("should validate address belongs to sale customer", async () => {
    const prisma = createMockPrisma({
      sale: {
        findUnique: mock(() => ({ ...mockSale, deliveries: [] })),
      },
      address: {
        findMany: mock(() => [
          { id: 1, customerId: 2 }, // Different customer
        ]),
      },
      employee: {
        findMany: mock(() => [{ id: 1 }]),
      },
    });

    mock.module("@/api/helpers/prisma", () => ({ prisma }));

    await expect(
      updateSale({
        saleId: 1,
        deliveries: [{ addressId: 1, employeeId: 1, startDate: baseDate }],
      })
    ).rejects.toEqual(new ResourceError(ErrorCode.RESOURCE_NOT_FOUND));
  });

  // Test duplicate deliveries in request
  test("should handle duplicate deliveries in request", async () => {
    const prisma = createMockPrisma({
      sale: {
        findUnique: mock(() => ({ ...mockSale, deliveries: [] })),
        update: mock(() => ({ ...mockSale, products: [] })),
      },
      address: {
        findMany: mock(() => [{ id: 1, customerId: 1 }]),
      },
      employee: {
        findMany: mock(() => [{ id: 1 }]),
      },
    });

    mock.module("@/api/helpers/prisma", () => ({ prisma }));
    mock.module("@/api/operations/deliveries/create_delivery", () => ({
      createDelivery: mockCreateDelivery,
    }));

    // Same delivery appears twice in the request
    await updateSale({
      saleId: 1,
      deliveries: [
        { addressId: 1, employeeId: 1, startDate: baseDate },
        { addressId: 1, employeeId: 1, startDate: baseDate },
      ],
    });

    // Should only create one delivery
    expect(mockCreateDelivery).toHaveBeenCalledTimes(1);
  });

  // Test concurrent updates and removals
  test("should handle concurrent updates and removals of the same delivery", async () => {
    const existingDeliveries = [
      { ...mockExistingDelivery, id: 1, employeeId: 1, addressId: 1 },
    ];

    const prisma = createMockPrisma({
      sale: {
        findUnique: mock(() => ({
          ...mockSale,
          deliveries: existingDeliveries,
        })),
        update: mock(() => ({ ...mockSale, products: [] })),
      },
    });

    mock.module("@/api/helpers/prisma", () => ({ prisma }));
    mock.module("@/api/operations/deliveries/update_delivery", () => ({
      updateDelivery: mockUpdateDelivery,
    }));

    // Empty deliveries array should trigger removal, not update
    await updateSale({
      saleId: 1,
      deliveries: [],
    });

    expect(mockUpdateDelivery).toHaveBeenCalledTimes(1);
    expect(mockUpdateDelivery).toHaveBeenCalledWith({
      deliveryId: 1,
      businessStatus: BusinessStatusEnum.CANCELLED,
      driverStatus: DriverStatusEnum.CANCELLED,
    });
  });

  // Test transaction rollback on delivery error
  test("should handle transaction rollback on delivery error", async () => {
    const mockError = new Error("Delivery creation failed");

    const prisma = createMockPrisma({
      sale: {
        findUnique: mock(() => ({ ...mockSale, deliveries: [] })),
      },
      address: {
        findMany: mock(() => [{ id: 1, customerId: 1 }]),
      },
      employee: {
        findMany: mock(() => [{ id: 1 }]),
      },
    });

    mock.module("@/api/helpers/prisma", () => ({ prisma }));
    mock.module("@/api/operations/deliveries/create_delivery", () => ({
      createDelivery: mock(() => {
        throw mockError;
      }),
    }));

    await expect(
      updateSale({
        saleId: 1,
        deliveries: [{ addressId: 1, employeeId: 1, startDate: baseDate }],
      })
    ).rejects.toEqual(new ServerError());

    // expect(mockLogger.error).toHaveBeenCalledWith(mockError);
  });
});
