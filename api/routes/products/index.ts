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
import { getProductById } from "@/api/operations/products/get_product_by_id";
import { getProducts } from "@/api/operations/products/get_products";
import { createProduct } from "@/api/operations/products/create_product";
import { deleteProduct } from "@/api/operations/products/delete_product";
import { updateProduct } from "@/api/operations/products/update_product";
import { guard } from "@/api/middlewares/guard";
import { AuditAction, EntityType } from "@prisma/client";
import { audit, AuditEntityTypes } from "@/api/middlewares/audit";

const products = new Hono<{ Variables: JWTVariables }>();

const idParamsValidationSchema = z.object({
  id: castToNumberSchema,
});

products.get(
  "/:id",
  guard("product.read", EntityType.Permission),
  zValidator("param", idParamsValidationSchema),
  async (c) => {
    const { id } = c.req.valid("param");
    const result = await getProductById(id);
    return c.json(result);
  }
);

products.get("/", guard("product.browse", EntityType.Permission), async (c) => {
  const result = await getProducts();
  return c.json(result);
});

const createProductValidationSchema = z.object({
  brand: z.string().max(256),
  measure: z.number().positive(),
  name: z.string().min(3).max(256),
  price: z.number().positive(),
  quantity: z.number().positive(),
});

products.post(
  "/",
  guard("product.add", EntityType.Permission),
  zValidator("json", createProductValidationSchema),
  audit(AuditAction.CREATE, AuditEntityTypes.PRODUCT),
  async (c) => {
    const { brand, measure, name, price, quantity } = c.req.valid("json");
    const result = await createProduct({
      brand,
      measure,
      name,
      price,
      quantity,
    });
    return c.json(result);
  }
);

products.delete(
  "/:id",
  guard("product.delete", EntityType.Permission),
  zValidator("param", idParamsValidationSchema),
  audit(AuditAction.DELETE, AuditEntityTypes.PRODUCT),
  async (c) => {
    const { id } = c.req.valid("param");
    const result = await deleteProduct(id);
    return c.json(result);
  }
);

const updatePurchaseValidationSchema = z.object({
  productId: z.number().positive(),
  brand: z.string().max(256).optional(),
  measure: z.number().positive().optional(),
  name: z.string().min(3).max(256).optional(),
  price: z.number().positive().optional(),
  quantity: z.number().min(0).optional(),
});

products.put(
  "/",
  guard("product.edit", EntityType.Permission),
  zValidator("json", updatePurchaseValidationSchema),
  audit(AuditAction.UPDATE, AuditEntityTypes.PRODUCT),
  async (c) => {
    const { productId, brand, measure, name, price, quantity } =
      c.req.valid("json");
    const result = await updateProduct({
      productId,
      brand,
      measure,
      name,
      price,
      quantity,
    });
    return c.json(result);
  }
);

export { products };
