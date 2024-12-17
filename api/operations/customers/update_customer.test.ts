import { ErrorCode, ResourceError, ServerError } from "@/api/types/errors";
import type { Address, Customer } from "@prisma/client";
import { describe, expect, mock, test } from "bun:test";
import { updateCustomer } from "./update_customer";

// Create base mock data
const mockAddress: Address = {
  id: 1,
  customerId: 1,
  street1: "123 Test St",
  street2: null,
  city: "Test City",
  state: "TS",
  postalCode: "12345",
  enabled: true,
  name: "Home",
  details: null,
};

const mockCustomer: Customer = {
  id: 1,
  name: "Test Customer",
  phone: "1234567890",
  enabled: true,
  registrationDate: new Date(),
};

// Create transaction-aware mock prisma
function createMockPrisma(overrides = {}) {
  const basePrisma = {
    customer: {
      update: mock(() => null),
    },
    address: {
      findMany: mock(() => []),
    },
    ...overrides,
  };

  return {
    ...basePrisma,
  };
}

describe("customers/update_customer", () => {
  test("should throw ResourceError when customer not found", async () => {
    const prisma = createMockPrisma();
    mock.module("@/api/helpers/prisma", () => ({ prisma }));

    await expect(
      updateCustomer({ customerId: 1, name: "New Name" })
    ).rejects.toEqual(new ResourceError(ErrorCode.RESOURCE_ERROR));
  });

  test("should successfully update customer basic info without addresses", async () => {
    const updatedCustomer = {
      ...mockCustomer,
      name: "Updated Name",
      addresses: [],
    };

    const prisma = createMockPrisma({
      customer: {
        update: mock(() => updatedCustomer),
      },
      address: {
        findMany: mock(() => []),
      },
    });

    mock.module("@/api/helpers/prisma", () => ({ prisma }));

    const result = await updateCustomer({
      customerId: 1,
      name: "Updated Name",
    });

    expect(result).toEqual(updatedCustomer);
    expect(prisma.customer.update).toHaveBeenCalledTimes(1);
    expect(prisma.customer.update).toHaveBeenCalledWith({
      where: { id: 1, enabled: true },
      data: {
        name: "Updated Name",
        addresses: {},
      },
      include: {
        addresses: true,
      },
    });
  });

  test("should handle updating existing addresses", async () => {
    const existingAddresses = [mockAddress];
    const updatedAddress = { ...mockAddress, street1: "456 New St" };

    const prisma = createMockPrisma({
      address: {
        findMany: mock(() => existingAddresses),
      },
      customer: {
        update: mock(() => ({
          ...mockCustomer,
          addresses: [updatedAddress],
        })),
      },
    });

    mock.module("@/api/helpers/prisma", () => ({ prisma }));

    const result = await updateCustomer({
      customerId: 1,
      addresses: [
        {
          id: 1,
          street1: "456 New St",
          street2: null,
          city: "Test City",
          state: "TS",
          postalCode: "12345",
          enabled: true,
          name: "Home",
          details: null,
        },
      ],
    });

    expect(result.addresses[0].street1).toBe("456 New St");
    expect(prisma.customer.update).toHaveBeenCalledTimes(1);
  });

  test("should handle creating new addresses", async () => {
    const newAddress = {
      street1: "789 New St",
      street2: null,
      city: "New City",
      state: "NS",
      postalCode: "54321",
      enabled: true,
      name: "Work",
      details: null,
    };

    const prisma = createMockPrisma({
      address: {
        findMany: mock(() => []),
      },
      customer: {
        update: mock(() => ({
          ...mockCustomer,
          addresses: [{ ...newAddress, id: 2, customerId: 1 }],
        })),
      },
    });

    mock.module("@/api/helpers/prisma", () => ({ prisma }));

    const result = await updateCustomer({
      customerId: 1,
      addresses: [newAddress],
    });

    expect(result.addresses).toHaveLength(1);
    expect(prisma.customer.update).toHaveBeenCalledTimes(1);
    expect(prisma.customer.update).toHaveBeenCalledWith({
      where: { id: 1, enabled: true },
      data: {
        addresses: {
          createMany: {
            data: [
              {
                ...newAddress,
                customerId: 1,
                enabled: true,
              },
            ],
          },
          updateMany: [],
        },
      },
      include: {
        addresses: true,
      },
    });
  });

  test("should handle disabling removed addresses", async () => {
    const existingAddresses = [mockAddress];

    const prisma = createMockPrisma({
      address: {
        findMany: mock(() => existingAddresses),
      },
      customer: {
        update: mock(() => ({
          ...mockCustomer,
          addresses: [{ ...mockAddress, enabled: false }],
        })),
      },
    });

    mock.module("@/api/helpers/prisma", () => ({ prisma }));

    await updateCustomer({
      customerId: 1,
      addresses: [], // No addresses in update = disable existing ones
    });

    expect(prisma.customer.update).toHaveBeenCalledTimes(1);
    expect(prisma.customer.update).toHaveBeenCalledWith({
      where: { id: 1, enabled: true },
      data: {
        addresses: {
          updateMany: [
            {
              where: { id: { in: [1] } },
              data: { enabled: false },
            },
          ],
        },
      },
      include: {
        addresses: true,
      },
    });
  });

  test("should handle multiple address operations simultaneously", async () => {
    const existingAddresses = [mockAddress];
    const updatedAddress = { ...mockAddress, street1: "456 Updated St" };
    const newAddress = {
      street1: "789 New St",
      street2: null,
      city: "New City",
      state: "NS",
      postalCode: "54321",
      enabled: true,
      name: "Work",
      details: null,
    };

    const prisma = createMockPrisma({
      address: {
        findMany: mock(() => existingAddresses),
      },
      customer: {
        update: mock(() => ({
          ...mockCustomer,
          addresses: [updatedAddress, { ...newAddress, id: 2, customerId: 1 }],
        })),
      },
    });

    mock.module("@/api/helpers/prisma", () => ({ prisma }));

    const result = await updateCustomer({
      customerId: 1,
      addresses: [{ ...updatedAddress, id: 1 }, newAddress],
    });

    expect(result.addresses).toHaveLength(2);
    expect(prisma.customer.update).toHaveBeenCalledTimes(1);
  });

  test("should handle unexpected errors", async () => {
    const prisma = createMockPrisma({
      address: {
        findMany: mock(() => []),
      },
      customer: {
        update: mock(() => {
          throw new Error("Unexpected database error");
        }),
      },
    });

    mock.module("@/api/helpers/prisma", () => ({ prisma }));

    await expect(
      updateCustomer({ customerId: 1, name: "New Name" })
    ).rejects.toEqual(new ServerError());
  });
});
