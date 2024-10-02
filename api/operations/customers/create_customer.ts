import { log } from "@/api/helpers/pino";
import { prisma } from "@/api/helpers/prisma";
import { ParamsError } from "@/api/types/errors";
import type { Customer } from "@prisma/client";

interface CreateCustomerInput {
  name: string;
  phone: string;
}

interface CreateCustomerResponse extends Customer {}

async function createCustomer({
  name,
  phone,
}: CreateCustomerInput): Promise<CreateCustomerResponse> {
  try {
    const customer = await prisma.customer.create({
      data: {
        name,
        phone,
        registrationDate: new Date(),
      },
    });

    return customer;
  } catch (error) {
    log.error(error);
    throw new ParamsError("could not create customer");
  }
}

export { createCustomer };
