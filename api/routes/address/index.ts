import { castToNumberSchema } from "@/api/helpers/validation_schemas";
import { audit, AuditEntityTypes } from "@/api/middlewares/audit";
import type { JWTVariables } from "@/api/middlewares/auth";
import { guard } from "@/api/middlewares/guard";
import { createAddress } from "@/api/operations/addresses/create_address";
import { deleteAddress } from "@/api/operations/addresses/delete_address";
import { getAddressById } from "@/api/operations/addresses/get_address_by_id";
import { getAddresses } from "@/api/operations/addresses/get_addresses";
import { getAddressesByCustomer } from "@/api/operations/addresses/get_addresses_by_customer";
import { updateAddress } from "@/api/operations/addresses/update_address";
import { zValidator } from "@hono/zod-validator";
import { AuditAction, EntityType } from "@prisma/client";
import { Hono } from "hono";
import { z } from "zod";

const addresses = new Hono<{ Variables: JWTVariables }>();

const idParamsValidationSchema = z.object({
  id: castToNumberSchema,
});

addresses.get(
  "/:id",
  guard("address.read", EntityType.Permission),
  zValidator("param", idParamsValidationSchema),
  async (c) => {
    const { id } = c.req.valid("param");
    const result = await getAddressById(id);
    return c.json(result);
  }
);

addresses.get(
  "/customer/:id",
  guard("address.read", EntityType.Permission),
  zValidator("param", idParamsValidationSchema),
  async (c) => {
    const { id } = c.req.valid("param");
    const result = await getAddressesByCustomer(id);
    return c.json(result);
  }
);

addresses.get(
  "/",
  guard("address.browse", EntityType.Permission),
  async (c) => {
    const result = await getAddresses();
    return c.json(result);
  }
);

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
  guard("address.add", EntityType.Permission),
  zValidator("json", createAddressValidationSchema),
  audit(AuditAction.CREATE, AuditEntityTypes.ADDRESS),
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
  guard("address.delete", EntityType.Permission),
  zValidator("param", deleteAddressValidationSchema),
  audit(AuditAction.DELETE, AuditEntityTypes.ADDRESS),
  async (c) => {
    const { id, customerId } = c.req.valid("param");
    const result = await deleteAddress({ addressId: id, customerId });
    return c.json(result);
  }
);

const updateAddressValidationSchema = z.object({
  addressId: z.number().positive(),
  name: z.string().min(3).max(256).optional(),
  city: z.string().max(256).optional(),
  postalCode: z.string().min(3).max(20).optional(),
  state: z.string().min(3).max(256).optional(),
  street1: z.string().min(3).max(256).optional(),
  street2: z.string().min(3).max(256).optional(),
  details: z.string().max(256).optional(),
});

addresses.put(
  "/",
  guard("address.edit", EntityType.Permission),
  zValidator("json", updateAddressValidationSchema),
  audit(AuditAction.UPDATE, AuditEntityTypes.ADDRESS),
  async (c) => {
    const {
      addressId,
      city,
      details,
      name,
      postalCode,
      state,
      street1,
      street2,
    } = c.req.valid("json");
    const result = await updateAddress({
      addressId,
      city,
      details,
      name,
      postalCode,
      state,
      street1,
      street2,
    });
    return c.json(result);
  }
);

export { addresses };
