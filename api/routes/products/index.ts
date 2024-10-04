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

const products = new Hono<{ Variables: JWTVariables }>();

const idParamsValidationSchema = z.object({
  id: castToNumberSchema,
});

products.get(
  "/:id",
  zValidator("param", idParamsValidationSchema),
  async (c) => {
    const { id } = c.req.valid("param");
    const result = await getProductById(id);
    return c.json(result);
  }
);

products.get("/", async (c) => {
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
  zValidator("json", createProductValidationSchema),
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
  zValidator("param", idParamsValidationSchema),
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
  quantity: z.number().positive().optional(),
});

products.put(
  "/",
  zValidator("json", updatePurchaseValidationSchema),
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
