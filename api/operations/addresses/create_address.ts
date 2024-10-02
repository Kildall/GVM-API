import { log } from "@/api/helpers/pino";
import { prisma } from "@/api/helpers/prisma";
import { ParamsError } from "@/api/types/errors";
import type { Address } from "@prisma/client";

interface CreateAddressInput {
  name: string;
  city: string;
  postalCode: string;
  state: string;
  street1: string;
  street2?: string;
  details?: string;
  customerId: number;
}

interface CreateAddressResponse extends Address {}

async function createAddress(
  input: CreateAddressInput
): Promise<CreateAddressResponse> {
  try {
    const address = await prisma.address.create({
      data: {
        ...input,
      },
    });

    return address;
  } catch (error) {
    log.error(error);
    throw new ParamsError("could not create address");
  }
}

export { createAddress };
