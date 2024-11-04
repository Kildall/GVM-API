import { castToNumberSchema } from "@/api/helpers/validation_schemas";
import { audit, AuditEntityTypes } from "@/api/middlewares/audit";
import type { JWTVariables } from "@/api/middlewares/auth";
import { guard } from "@/api/middlewares/guard";
import { createPurchase } from "@/api/operations/purchases/create_purchase";
import { deletePurchase } from "@/api/operations/purchases/delete_purchase";
import { getPurchaseById } from "@/api/operations/purchases/get_purchase_by_id";
import { getPurchases } from "@/api/operations/purchases/get_purchases";
import { updatePurchase } from "@/api/operations/purchases/update_purchase";
import { zValidator } from "@hono/zod-validator";
import { AuditAction, EntityType } from "@prisma/client";
import { Hono } from "hono";
import { z } from "zod";

const purchases = new Hono<{ Variables: JWTVariables }>();

const idParamsValidationSchema = z.object({
  id: castToNumberSchema,
});

purchases.get(
  "/:id",
  guard("purchase.read", EntityType.Permission),
  zValidator("param", idParamsValidationSchema),
  async (c) => {
    const { id } = c.req.valid("param");
    const result = await getPurchaseById(id);
    return c.json(result);
  }
);

purchases.get(
  "/",
  guard("purchase.browse", EntityType.Permission),
  async (c) => {
    const result = await getPurchases();
    return c.json(result);
  }
);

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
  description: z.string().min(3).max(256),
});

purchases.post(
  "/",
  guard("purchase.add", EntityType.Permission),
  zValidator("json", createPurchaseValidationSchema),
  audit(AuditAction.CREATE, AuditEntityTypes.PURCHASE),
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
  guard("purchase.delete", EntityType.Permission),
  zValidator("param", idParamsValidationSchema),
  audit(AuditAction.DELETE, AuditEntityTypes.PURCHASE),
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
  guard("purchase.edit", EntityType.Permission),
  zValidator("json", updatePurchaseValidationSchema),
  audit(AuditAction.UPDATE, AuditEntityTypes.PURCHASE),
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
