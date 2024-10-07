import { castToNumberSchema } from "@/api/helpers/validation_schemas";
import type { JWTVariables } from "@/api/middlewares/auth";
import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { z } from "zod";
import { getSaleById } from "@/api/operations/sales/get_sale_by_id";
import { getSales } from "@/api/operations/sales/get_sales";
import { createSale } from "@/api/operations/sales/create_sale";
import { deleteSale } from "@/api/operations/sales/delete_sale";
import { updateSale } from "@/api/operations/sales/update_sale";
import { SaleStatusEnum } from "@prisma/client";

const sales = new Hono<{ Variables: JWTVariables }>();

const idParamsValidationSchema = z.object({
  id: castToNumberSchema,
});

sales.get("/:id", zValidator("param", idParamsValidationSchema), async (c) => {
  const { id } = c.req.valid("param");
  const result = await getSaleById(id);
  return c.json(result);
});

sales.get("/", async (c) => {
  const result = await getSales();
  return c.json(result);
});

// TODO: Sales have no employee??
const createSaleValidationSchema = z.object({
  customerId: z.number().positive(),
  products: z.array(
    z.object({
      productId: z.number().positive(),
      quantity: z.number().positive(),
    })
  ),
  startDate: z.coerce.date(),
});

sales.post("/", zValidator("json", createSaleValidationSchema), async (c) => {
  const { customerId, products, startDate } = c.req.valid("json");
  const result = await createSale({ customerId, products, startDate });
  return c.json(result);
});

sales.delete(
  "/:id",
  zValidator("param", idParamsValidationSchema),
  async (c) => {
    const { id } = c.req.valid("param");
    const result = await deleteSale(id);
    return c.json(result);
  }
);

const updateSaleValidationSchema = z.object({
  saleId: z.number().positive(),
  products: z
    .array(
      z.object({
        productId: z.number().positive(),
        quantity: z.number().positive(),
      })
    )
    .optional(),
  status: z.nativeEnum(SaleStatusEnum).optional(),
});

sales.put("/", zValidator("json", updateSaleValidationSchema), async (c) => {
  const { saleId, products, status } = c.req.valid("json");
  const result = await updateSale({
    saleId,
    products,
    status,
  });
  return c.json(result);
});

export { sales };
