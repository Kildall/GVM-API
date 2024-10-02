import { castToNumberSchema } from "@/api/helpers/validation_schemas";
import type { JWTVariables } from "@/api/middlewares/auth";
import { createCustomer } from "@/api/operations/customers/create_customer";
import { deleteCustomer } from "@/api/operations/customers/delete_customer";
import { getCustomers } from "@/api/operations/customers/get_customers";
import { getCustomerById } from "@/api/operations/customers/get_customer_by_id";
import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { z } from "zod";

const customers = new Hono<{ Variables: JWTVariables }>();

const idParamsValidationSchema = z.object({
  id: castToNumberSchema,
});

customers.get(
  "/:id",
  zValidator("param", idParamsValidationSchema),
  async (c) => {
    const { id } = c.req.valid("param");
    const result = await getCustomerById(id);
    return c.json(result);
  }
);

customers.get("/", async (c) => {
  const result = await getCustomers();
  return c.json(result);
});

const createCustomerValidationSchema = z.object({
  name: z.string().min(3).max(256),
  phone: z.string(),
});

customers.post(
  "/",
  zValidator("json", createCustomerValidationSchema),
  async (c) => {
    const { name, phone } = c.req.valid("json");
    const result = await createCustomer({ name, phone });
    return c.json(result);
  }
);

customers.delete(
  "/:id",
  zValidator("param", idParamsValidationSchema),
  async (c) => {
    const { id } = c.req.valid("param");
    const result = await deleteCustomer(id);
    return c.json(result);
  }
);

export { customers };
