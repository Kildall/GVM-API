import { ErrorCode, ResourceError, ServerError } from "@/api/types/errors";
import {
  BusinessStatusEnum,
  DeliveryStatusEnum,
  DriverStatusEnum,
  Prisma,
  SaleStatusEnum,
  type Delivery,
  type Sale,
} from "@prisma/client";
import { beforeEach, describe, expect, mock, test } from "bun:test";
import { updateDelivery } from "./update_delivery";

// Create base mock data
const mockDelivery: Delivery = {
  id: 1,
  saleId: 1,
  businessStatus: BusinessStatusEnum.PENDING,
  driverStatus: null,
  employeeId: null,
  status: DeliveryStatusEnum.CREATED,
  addressId: 1,
  startDate: new Date(),
  lastUpdateDate: new Date(),
};

const mockSale: Sale = {
  id: 1,
  customerId: 1,
  startDate: new Date(),
  lastUpdateDate: new Date(),
  employeeId: 1,
  status: SaleStatusEnum.CREATED,
};

// Create transaction-aware mock prisma
function createMockPrisma(overrides = {}) {
  let transactionCalled = false;
  const basePrisma = {
    delivery: {
      findUnique: mock(() => null),
      update: mock(() => null),
    },
    sale: {
      findUnique: mock(() => null),
    },
    employee: {
      findUnique: mock(() => null),
    },
    ...overrides,
  };

  const mockPrisma = {
    ...basePrisma,
    $transaction: async (fn: Function) => {
      transactionCalled = true;
      return fn(mockPrisma);
    },
    _transactionCalled: () => transactionCalled,
  };

  return mockPrisma;
}

describe("deliveries/update_delivery", () => {
  const mockSendEmail = mock(async () => {});

  beforeEach(() => {
    mockSendEmail.mockReset();
  });

  test("should throw ResourceError when delivery not found", async () => {
    const prisma = createMockPrisma();

    mock.module("@/api/helpers/prisma", () => ({ prisma }));
    mock.module("@/api/operations/email/send_updated_delivery", () => ({
      sendUpdatedDeliveryEmail: mockSendEmail,
    }));

    await expect(updateDelivery({ deliveryId: 1 })).rejects.toEqual(
      new ResourceError(ErrorCode.RESOURCE_NOT_FOUND)
    );

    expect(prisma._transactionCalled()).toBe(true);
  });

  test("should throw ResourceError when sale not found", async () => {
    const prisma = createMockPrisma({
      delivery: {
        findUnique: mock(() => mockDelivery),
      },
      sale: {
        findUnique: mock(() => null),
      },
    });

    mock.module("@/api/helpers/prisma", () => ({ prisma }));
    mock.module("@/api/operations/email/send_updated_delivery", () => ({
      sendUpdatedDeliveryEmail: mockSendEmail,
    }));

    await expect(
      updateDelivery({
        deliveryId: 1,
        businessStatus: BusinessStatusEnum.PENDING,
      })
    ).rejects.toEqual(new ResourceError(ErrorCode.RESOURCE_NOT_FOUND));

    expect(prisma._transactionCalled()).toBe(true);
  });

  test("should successfully update delivery with new employee", async () => {
    const mockEmployee = {
      id: 1,
      user: {
        id: 1,
        email: "test@example.com",
      },
    };

    const mockUpdatedDelivery = {
      ...mockDelivery,
      employeeId: 1,
    };

    const prisma = createMockPrisma({
      delivery: {
        findUnique: mock(() => mockDelivery),
        update: mock(() => mockUpdatedDelivery),
      },
      sale: {
        findUnique: mock(() => ({
          ...mockSale,
          customer: { addresses: [{ id: 1 }] },
        })),
      },
      employee: {
        findUnique: mock(() => mockEmployee),
      },
    });

    mock.module("@/api/helpers/prisma", () => ({ prisma }));
    mock.module("@/api/operations/email/send_updated_delivery", () => ({
      sendUpdatedDeliveryEmail: mockSendEmail,
    }));

    const result = await updateDelivery({
      deliveryId: 1,
      employeeId: 1,
    });

    expect(result).toStrictEqual(mockUpdatedDelivery);
    expect(mockSendEmail).toHaveBeenCalledTimes(1);
    expect(mockSendEmail).toHaveBeenCalledWith(
      mockEmployee.user,
      mockEmployee,
      mockUpdatedDelivery
    );
    expect(prisma._transactionCalled()).toBe(true);
  });

  test("should throw error for invalid business status transition", async () => {
    const prisma = createMockPrisma({
      delivery: {
        findUnique: mock(() => mockDelivery),
      },
      sale: {
        findUnique: mock(() => ({
          ...mockSale,
          customer: { addresses: [{ id: 1 }] },
        })),
      },
    });

    mock.module("@/api/helpers/prisma", () => ({ prisma }));
    mock.module("@/api/operations/email/send_updated_delivery", () => ({
      sendUpdatedDeliveryEmail: mockSendEmail,
    }));

    await expect(
      updateDelivery({
        deliveryId: 1,
        businessStatus: BusinessStatusEnum.DELIVERED,
      })
    ).rejects.toEqual(new ResourceError(ErrorCode.INVALID_STATUS_TRANSITION));

    expect(prisma._transactionCalled()).toBe(true);
  });

  test("should reuse provided transaction", async () => {
    const mockTx = createMockPrisma({
      delivery: {
        findUnique: mock(() => mockDelivery),
        update: mock(() => mockDelivery),
      },
      sale: {
        findUnique: mock(() => ({
          ...mockSale,
          customer: { addresses: [{ id: 1 }] },
        })),
      },
    });

    await updateDelivery(
      { deliveryId: 1 },
      mockTx as unknown as Prisma.TransactionClient
    );

    // Should not create a new transaction when one is provided
    expect(mockTx._transactionCalled()).toBe(false);
  });

  test("should handle unexpected errors", async () => {
    const prisma = createMockPrisma({
      delivery: {
        findUnique: mock(() => {
          throw new Error("Unexpected database error");
        }),
      },
    });

    mock.module("@/api/helpers/prisma", () => ({ prisma }));
    mock.module("@/api/operations/email/send_updated_delivery", () => ({
      sendUpdatedDeliveryEmail: mockSendEmail,
    }));

    await expect(
      updateDelivery({
        deliveryId: 1,
      })
    ).rejects.toEqual(new ServerError());

    expect(prisma._transactionCalled()).toBe(true);
  });

  test("should throw ResourceError when address not found in customer addresses", async () => {
    const prisma = createMockPrisma({
      delivery: {
        findUnique: mock(() => mockDelivery),
      },
      sale: {
        findUnique: mock(() => ({
          ...mockSale,
          customer: {
            addresses: [{ id: 2 }], // Different address ID than requested
          },
        })),
      },
    });

    mock.module("@/api/helpers/prisma", () => ({ prisma }));
    mock.module("@/api/operations/email/send_updated_delivery", () => ({
      sendUpdatedDeliveryEmail: mockSendEmail,
    }));

    await expect(
      updateDelivery({
        deliveryId: 1,
        addressId: 1, // This address ID doesn't exist in customer addresses
      })
    ).rejects.toEqual(new ResourceError(ErrorCode.RESOURCE_NOT_FOUND));

    expect(prisma._transactionCalled()).toBe(true);
  });

  test("should successfully update delivery with new address", async () => {
    const newAddressId = 2;
    const mockUpdatedDelivery = {
      ...mockDelivery,
      addressId: newAddressId,
    };

    const prisma = createMockPrisma({
      delivery: {
        findUnique: mock(() => mockDelivery),
        update: mock(() => mockUpdatedDelivery),
      },
      sale: {
        findUnique: mock(() => ({
          ...mockSale,
          customer: {
            addresses: [{ id: 1 }, { id: 2 }],
          },
        })),
      },
    });

    mock.module("@/api/helpers/prisma", () => ({ prisma }));
    mock.module("@/api/operations/email/send_updated_delivery", () => ({
      sendUpdatedDeliveryEmail: mockSendEmail,
    }));

    const result = await updateDelivery({
      deliveryId: 1,
      addressId: newAddressId,
    });

    expect(result).toStrictEqual(mockUpdatedDelivery);
    expect(mockSendEmail).not.toHaveBeenCalled();
    expect(prisma._transactionCalled()).toBe(true);
  });

  test("should throw error for invalid driver status transition", async () => {
    const mockDeliveryWithDriver = {
      ...mockDelivery,
      employeeId: 1,
      driverStatus: DriverStatusEnum.PENDING_PICKUP,
    };

    const prisma = createMockPrisma({
      delivery: {
        findUnique: mock(() => mockDeliveryWithDriver),
      },
      sale: {
        findUnique: mock(() => ({
          ...mockSale,
          customer: { addresses: [{ id: 1 }] },
        })),
      },
    });

    mock.module("@/api/helpers/prisma", () => ({ prisma }));
    mock.module("@/api/operations/email/send_updated_delivery", () => ({
      sendUpdatedDeliveryEmail: mockSendEmail,
    }));

    await expect(
      updateDelivery({
        deliveryId: 1,
        driverStatus: DriverStatusEnum.DELIVERED,
      })
    ).rejects.toEqual(new ResourceError(ErrorCode.INVALID_STATUS_TRANSITION));

    expect(prisma._transactionCalled()).toBe(true);
  });

  test("should update start date successfully", async () => {
    const newStartDate = new Date("2024-12-15T10:00:00Z");
    const mockUpdatedDelivery = {
      ...mockDelivery,
      startDate: newStartDate,
    };

    const prisma = createMockPrisma({
      delivery: {
        findUnique: mock(() => mockDelivery),
        update: mock(() => mockUpdatedDelivery),
      },
      sale: {
        findUnique: mock(() => ({
          ...mockSale,
          customer: { addresses: [{ id: 1 }] },
        })),
      },
    });

    mock.module("@/api/helpers/prisma", () => ({ prisma }));
    mock.module("@/api/operations/email/send_updated_delivery", () => ({
      sendUpdatedDeliveryEmail: mockSendEmail,
    }));

    const result = await updateDelivery({
      deliveryId: 1,
      startDate: newStartDate,
    });

    expect(result).toStrictEqual(mockUpdatedDelivery);
    expect(result.startDate).toEqual(newStartDate);
    expect(mockSendEmail).not.toHaveBeenCalled();
    expect(prisma._transactionCalled()).toBe(true);
  });

  test("should not send email if employee has no associated user", async () => {
    const mockEmployee = {
      id: 1,
      user: null, // Employee without associated user
    };

    const mockUpdatedDelivery = {
      ...mockDelivery,
      employeeId: 1,
    };

    const prisma = createMockPrisma({
      delivery: {
        findUnique: mock(() => mockDelivery),
        update: mock(() => mockUpdatedDelivery),
      },
      sale: {
        findUnique: mock(() => ({
          ...mockSale,
          customer: { addresses: [{ id: 1 }] },
        })),
      },
      employee: {
        findUnique: mock(() => mockEmployee),
      },
    });

    mock.module("@/api/helpers/prisma", () => ({ prisma }));
    mock.module("@/api/operations/email/send_updated_delivery", () => ({
      sendUpdatedDeliveryEmail: mockSendEmail,
    }));

    const result = await updateDelivery({
      deliveryId: 1,
      employeeId: 1,
    });

    expect(result).toStrictEqual(mockUpdatedDelivery);
    expect(mockSendEmail).not.toHaveBeenCalled();
    expect(prisma._transactionCalled()).toBe(true);
  });

  test("should handle multiple updates simultaneously", async () => {
    const newStartDate = new Date("2024-12-15T10:00:00Z");
    const newAddressId = 2;
    const mockUpdatedDelivery = {
      ...mockDelivery,
      startDate: newStartDate,
      addressId: newAddressId,
      businessStatus: BusinessStatusEnum.IN_PROGRESS,
    };

    const prisma = createMockPrisma({
      delivery: {
        findUnique: mock(() => mockDelivery),
        update: mock(() => mockUpdatedDelivery),
      },
      sale: {
        findUnique: mock(() => ({
          ...mockSale,
          customer: { addresses: [{ id: 1 }, { id: 2 }] },
        })),
      },
    });

    mock.module("@/api/helpers/prisma", () => ({ prisma }));
    mock.module("@/api/operations/email/send_updated_delivery", () => ({
      sendUpdatedDeliveryEmail: mockSendEmail,
    }));

    const result = await updateDelivery({
      deliveryId: 1,
      startDate: newStartDate,
      addressId: newAddressId,
      businessStatus: BusinessStatusEnum.IN_PROGRESS,
    });

    expect(result).toStrictEqual(mockUpdatedDelivery);
    expect(result.startDate).toEqual(newStartDate);
    expect(result.addressId).toEqual(newAddressId);
    expect(result.businessStatus).toEqual(BusinessStatusEnum.IN_PROGRESS);
    expect(mockSendEmail).not.toHaveBeenCalled();
    expect(prisma._transactionCalled()).toBe(true);
  });
});
