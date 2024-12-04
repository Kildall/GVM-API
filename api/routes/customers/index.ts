import { castToNumberSchema } from "@/api/helpers/validation_schemas";
import { audit, AuditEntityTypes } from "@/api/middlewares/audit";
import type { JWTVariables } from "@/api/middlewares/auth";
import { guard } from "@/api/middlewares/guard";
import { createCustomer } from "@/api/operations/customers/create_customer";
import { deleteCustomer } from "@/api/operations/customers/delete_customer";
import { getCustomerById } from "@/api/operations/customers/get_customer_by_id";
import { getCustomers } from "@/api/operations/customers/get_customers";
import { updateCustomer } from "@/api/operations/customers/update_customer";
import { zValidator } from "@hono/zod-validator";
import { AuditAction, EntityType } from "@prisma/client";
import { Hono } from "hono";
import { z } from "zod";

const customers = new Hono<{ Variables: JWTVariables }>();

const idParamsValidationSchema = z.object({
  id: castToNumberSchema,
});

const addressValidationSchema = z.object({
  name: z.string(),
  street1: z.string(),
  street2: z.string().nullable(),
  postalCode: z.string(),
  city: z.string(),
  state: z.string(),
  details: z.string().nullable(),
  enabled: z.boolean().optional().default(true),
});

customers.get(
  "/:id",
  guard("customer.read", EntityType.Permission),
  zValidator("param", idParamsValidationSchema),
  async (c) => {
    const { id } = c.req.valid("param");
    const result = await getCustomerById(id);
    return c.json(result);
  }
);

customers.get(
  "/",
  guard("customer.browse", EntityType.Permission),
  async (c) => {
    const result = await getCustomers();
    return c.json(result);
  }
);

const createCustomerValidationSchema = z.object({
  name: z.string().min(3).max(256),
  phone: z.string(),
  addresses: z.array(addressValidationSchema),
});

customers.post(
  "/",
  guard("customer.add", EntityType.Permission),
  zValidator("json", createCustomerValidationSchema),
  audit(AuditAction.CREATE, AuditEntityTypes.CUSTOMER),
  async (c) => {
    const { name, phone, addresses } = c.req.valid("json");
    const result = await createCustomer({ name, phone, addresses });
    return c.json(result);
  }
);

customers.delete(
  "/:id",
  guard("customer.delete", EntityType.Permission),
  zValidator("param", idParamsValidationSchema),
  audit(AuditAction.DELETE, AuditEntityTypes.CUSTOMER),
  async (c) => {
    const { id } = c.req.valid("param");
    const result = await deleteCustomer(id);
    return c.json(result);
  }
);

const updateCustomerValidationSchema = z.object({
  customerId: z.number().positive(),
  name: z.string().min(3).max(256).optional(),
  phone: z.string().optional(),
  addresses: z.array(addressValidationSchema).optional(),
  enabled: z.boolean().optional(),
});

customers.put(
  "/",
  guard("customer.edit", EntityType.Permission),
  zValidator("json", updateCustomerValidationSchema),
  audit(AuditAction.UPDATE, AuditEntityTypes.CUSTOMER),
  async (c) => {
    const { customerId, name, phone, addresses, enabled } = c.req.valid("json");
    const result = await updateCustomer({
      customerId,
      name,
      phone,
      addresses,
      enabled,
    });
    return c.json(result);
  }
);

export { customers };
