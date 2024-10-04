import { castToNumberSchema } from "@/api/helpers/validation_schemas";
import type { JWTVariables } from "@/api/middlewares/auth";
import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { z } from "zod";
import { getPurchaseById } from "@/api/operations/purchases/get_purchase_by_id";
import { getPurchases } from "@/api/operations/purchases/get_purchases";
import { createPurchase } from "@/api/operations/purchases/create_purchase";
import { deletePurchase } from "@/api/operations/purchases/delete_purchase";
import { updatePurchase } from "@/api/operations/purchases/update_purchase";

const purchases = new Hono<{ Variables: JWTVariables }>();

const idParamsValidationSchema = z.object({
  id: castToNumberSchema,
});

purchases.get(
  "/:id",
  zValidator("param", idParamsValidationSchema),
  async (c) => {
    const { id } = c.req.valid("param");
    const result = await getPurchaseById(id);
    return c.json(result);
  }
);

purchases.get("/", async (c) => {
  const result = await getPurchases();
  return c.json(result);
});

// employeeId, supplierId, date, amount
const createPurchaseValidationSchema = z.object({
  employeeId: z.number().positive(),
  supplierId: z.number().positive(),
  date: z.coerce.date(),
  amount: z.number().positive(),
  products: z.array(
    z.object({
      productId: z.number().positive(),
      quantity: z.number().positive(),
    })
  ),
  description: z.string().min(3).max(256).default(""),
});

purchases.post(
  "/",
  zValidator("json", createPurchaseValidationSchema),
  async (c) => {
    const { employeeId, amount, date, description, products, supplierId } =
      c.req.valid("json");
    const result = await createPurchase({
      employeeId,
      amount,
      date,
      description,
      products,
      supplierId,
    });
    return c.json(result);
  }
);

purchases.delete(
  "/:id",
  zValidator("param", idParamsValidationSchema),
  async (c) => {
    const { id } = c.req.valid("param");
    const result = await deletePurchase(id);
    return c.json(result);
  }
);

const updatePurchaseValidationSchema = z.object({
  purchaseId: z.number().positive(),
  employeeId: z.number().positive().optional(),
  supplierId: z.number().positive().optional(),
  amount: z.number().positive().optional(),
  date: z.coerce.date().optional(),
  description: z.string().min(3).max(256).optional(),
  products: z
    .array(
      z.object({
        productId: z.number().positive(),
        quantity: z.number().positive(),
      })
    )
    .optional(),
});

purchases.put(
  "/",
  zValidator("json", updatePurchaseValidationSchema),
  async (c) => {
    const {
      purchaseId,
      amount,
      date,
      description,
      employeeId,
      products,
      supplierId,
    } = c.req.valid("json");
    const result = await updatePurchase({
      purchaseId,
      amount,
      date,
      description,
      employeeId,
      products,
      supplierId,
    });
    return c.json(result);
  }
);

export { purchases };
