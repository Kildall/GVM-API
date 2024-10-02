import { castToNumberSchema } from "@/api/helpers/validation_schemas";
import type { JWTVariables } from "@/api/middlewares/auth";
import { createCustomer } from "@/api/operations/customers/create_customer";
import { deleteCustomer } from "@/api/operations/customers/delete_customer";
import { getCustomers } from "@/api/operations/customers/get_customers";
import { getCustomerById } from "@/api/operations/customers/get_customer_by_id";
import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { z } from "zod";
import { getAddressesByCustomer } from "@/api/operations/addresses/get_addresses_by_customer";
import { getAddresses } from "@/api/operations/addresses/get_addresses";
import { createAddress } from "@/api/operations/addresses/create_address";
import { deleteAddress } from "@/api/operations/addresses/delete_address";

const addresses = new Hono<{ Variables: JWTVariables }>();

const idParamsValidationSchema = z.object({
  id: castToNumberSchema,
});

addresses.get(
  "/customer/:id",
  zValidator("param", idParamsValidationSchema),
  async (c) => {
    const { id } = c.req.valid("param");
    const result = await getAddressesByCustomer(id);
    return c.json(result);
  }
);

addresses.get("/", async (c) => {
  const result = await getAddresses();
  return c.json(result);
});

const createAddressValidationSchema = z.object({
  name: z.string().min(3).max(256),
  city: z.string().max(256),
  postalCode: z.string().min(3).max(20),
  state: z.string().min(3).max(256),
  street1: z.string().min(3).max(256),
  street2: z.string().min(3).max(256).optional(),
  details: z.string().max(256).optional(),
  customerId: z.number().positive(),
});

addresses.post(
  "/",
  zValidator("json", createAddressValidationSchema),
  async (c) => {
    const addressData = c.req.valid("json");
    const result = await createAddress(addressData);
    return c.json(result);
  }
);

const deleteAddressValidationSchema = z.object({
  id: castToNumberSchema,
  customerId: castToNumberSchema,
});

addresses.delete(
  "/:id/customer/:customerId",
  zValidator("param", deleteAddressValidationSchema),
  async (c) => {
    const { id, customerId } = c.req.valid("param");
    const result = await deleteAddress({ addressId: id, customerId });
    return c.json(result);
  }
);

export { addresses };
