import { castToNumberSchema } from "@/api/helpers/validation_schemas";
import type { JWTVariables } from "@/api/middlewares/auth";
import { createCustomer } from "@/api/operations/customers/create_customer";
import { deleteCustomer } from "@/api/operations/customers/delete_customer";
import { getCustomers } from "@/api/operations/customers/get_customers";
import { getCustomerById } from "@/api/operations/customers/get_customer_by_id";
import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { z } from "zod";
import { getSupplierById } from "@/api/operations/suppliers/get_supplier_by_id";
import { getSuppliers } from "@/api/operations/suppliers/get_suppliers";
import { createSupplier } from "@/api/operations/suppliers/create_supplier";
import { deleteSupplier } from "@/api/operations/suppliers/delete_supplier";
import { updateSupplier } from "@/api/operations/suppliers/update_suppliers";

const suppliers = new Hono<{ Variables: JWTVariables }>();

const idParamsValidationSchema = z.object({
  id: castToNumberSchema,
});

suppliers.get(
  "/:id",
  zValidator("param", idParamsValidationSchema),
  async (c) => {
    const { id } = c.req.valid("param");
    const result = await getSupplierById(id);
    return c.json(result);
  }
);

suppliers.get("/", async (c) => {
  const result = await getSuppliers();
  return c.json(result);
});

const createSupplierValidationSchema = z.object({
  name: z.string().min(3).max(256),
});

suppliers.post(
  "/",
  zValidator("json", createSupplierValidationSchema),
  async (c) => {
    const { name } = c.req.valid("json");
    const result = await createSupplier({ name });
    return c.json(result);
  }
);

suppliers.delete(
  "/:id",
  zValidator("param", idParamsValidationSchema),
  async (c) => {
    const { id } = c.req.valid("param");
    const result = await deleteSupplier(id);
    return c.json(result);
  }
);

const updateSupplierValidationSchema = z.object({
  supplierId: z.number().positive(),
  name: z.string().min(3).max(256).optional(),
});

suppliers.put(
  "/",
  zValidator("json", updateSupplierValidationSchema),
  async (c) => {
    const { supplierId, name } = c.req.valid("json");
    const result = await updateSupplier({
      supplierId,
      name,
    });
    return c.json(result);
  }
);

export { suppliers };
