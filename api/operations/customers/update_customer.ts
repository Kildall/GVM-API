import { log } from "@/api/helpers/pino";
import { prisma } from "@/api/helpers/prisma";
import {
  APIError,
  ErrorCode,
  ResourceError,
  ServerError,
} from "@/api/types/errors";
import type { Address, Customer, Prisma } from "@prisma/client";

interface UpdateCustomerInput {
  customerId: number;
  name?: string;
  phone?: string;
  addresses?: (Omit<Address, "customerId" | "id"> & { id?: number })[];
  enabled?: boolean;
}

interface UpdateCustomerResponse extends Customer {
  addresses: Address[];
}

async function updateCustomer({
  customerId,
  name,
  phone,
  addresses,
  enabled,
}: UpdateCustomerInput): Promise<UpdateCustomerResponse> {
  try {
    // First, get existing addresses for the customer
    const existingAddresses = await prisma.address.findMany({
      where: { customerId },
    });

    // Prepare base data object
    const data: Prisma.CustomerUpdateInput = {
      ...(name !== undefined && { name }),
      ...(phone !== undefined && { phone }),
      ...(enabled !== undefined && { enabled }),
      addresses: {},
    };

    if (addresses !== undefined) {
      const newAddressIds = addresses
        .filter((addr) => addr.id)
        .map((addr) => addr.id as number);

      const addressesToDisable = existingAddresses
        .filter((addr) => !newAddressIds.includes(addr.id))
        .map((addr) => addr.id);

      const addressesToUpdate = addresses.filter((addr) => addr.id);
      const addressesToCreate = addresses.filter((addr) => !addr.id);

      if (addressesToUpdate.length > 0 || addressesToDisable.length > 0) {
        data.addresses!.updateMany = [
          ...addressesToUpdate.map((addr) => ({
            where: { id: addr.id },
            data: {
              street1: addr.street1,
              street2: addr.street2,
              city: addr.city,
              state: addr.state,
              postalCode: addr.postalCode,
              enabled: addr.enabled,
              name: addr.name,
              details: addr.details,
            },
          })),
          ...(addressesToDisable.length > 0
            ? [
                {
                  where: { id: { in: addressesToDisable } },
                  data: { enabled: false },
                },
              ]
            : []),
        ];
      } else {
        data.addresses!.updateMany = []; // Explicitly set empty array when no updates
      }

      if (addressesToCreate.length > 0) {
        data.addresses!.createMany = {
          data: addressesToCreate.map((addr) => ({
            ...addr,
          })),
        };
      }
    }

    const updatedCustomer = await prisma.customer.update({
      where: { id: customerId, enabled: true },
      data,
      include: {
        addresses: true,
      },
    });

    if (!updatedCustomer) {
      throw new ResourceError(ErrorCode.RESOURCE_ERROR);
    }

    return updatedCustomer;
  } catch (error) {
    if (error instanceof APIError) {
      throw error;
    }
    log.error(error);
    throw new ServerError();
  }
}

export { updateCustomer };
