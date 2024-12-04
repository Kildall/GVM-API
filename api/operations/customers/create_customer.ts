import { log } from "@/api/helpers/pino";
import { prisma } from "@/api/helpers/prisma";
import { ServerError } from "@/api/types/errors";
import type { Address, Customer } from "@prisma/client";

interface CreateCustomerInput {
  name: string;
  phone: string;
  addresses: Omit<Address, "id" | "customerId" | "enabled">[];
}

interface CreateCustomerResponse extends Customer {}

async function createCustomer({
  name,
  phone,
  addresses,
}: CreateCustomerInput): Promise<CreateCustomerResponse> {
  try {
    const customer = await prisma.customer.create({
      data: {
        name,
        phone,
        registrationDate: new Date(),
        addresses: {
          createMany: {
            data: addresses.map((address) => {
              const newAddress: Omit<Address, "id"> = {
                ...address,
                customerId: customer.id,
                enabled: true,
              };
              return newAddress;
            }),
          },
        },
      },
    });

    return customer;
  } catch (error) {
    log.error(error);
    throw new ServerError();
  }
}

export { createCustomer };
