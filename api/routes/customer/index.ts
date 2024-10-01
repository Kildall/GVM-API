import { castToNumberSchema } from "@/api/helpers/validation_schemas";
import type { JWTVariables } from "@/api/middlewares/auth";
import { getCustomerById } from "@/api/operations/customer/get_customer_by_id";
import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { z } from "zod";

const customer = new Hono<{ Variables: JWTVariables }>();

const getCustomerByIdValidationSchema = z.object({
  id: castToNumberSchema,
});

customer.get(
  "/:id",
  zValidator("param", getCustomerByIdValidationSchema),
  async (c) => {
    const { id } = c.req.valid("param");
    const result = await getCustomerById(id);
    return c.json(result);
  }
);

export { customer };
