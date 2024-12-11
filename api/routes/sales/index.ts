import { castToNumberSchema } from "@/api/helpers/validation_schemas";
import { audit, AuditEntityTypes } from "@/api/middlewares/audit";
import type { JWTVariables } from "@/api/middlewares/auth";
import { guard } from "@/api/middlewares/guard";
import { createSale } from "@/api/operations/sales/create_sale";
import { deleteSale } from "@/api/operations/sales/delete_sale";
import { getSaleById } from "@/api/operations/sales/get_sale_by_id";
import { getSales } from "@/api/operations/sales/get_sales";
import { updateSale } from "@/api/operations/sales/update_sale";
import { zValidator } from "@hono/zod-validator";
import { AuditAction, EntityType, SaleStatusEnum } from "@prisma/client";
import { Hono } from "hono";
import { z } from "zod";

const sales = new Hono<{ Variables: JWTVariables }>();

const idParamsValidationSchema = z.object({
  id: castToNumberSchema,
});

sales.get(
  "/:id",
  guard("sale.read", EntityType.Permission),
  zValidator("param", idParamsValidationSchema),
  async (c) => {
    const { id } = c.req.valid("param");
    const result = await getSaleById(id);
    return c.json(result);
  }
);

sales.get("/", guard("sale.browse", EntityType.Permission), async (c) => {
  const result = await getSales();
  return c.json(result);
});

const createSaleValidationSchema = z.object({
  customerId: z.number().positive(),
  products: z.array(
    z.object({
      productId: z.number().positive(),
      quantity: z.number().positive(),
    })
  ),
  deliveries: z.array(
    z.object({
      employeeId: z.number().positive(),
      addressId: z.number().positive(),
      startDate: z.coerce.date(),
    })
  ),
  startDate: z.coerce.date(),
  employeeId: z.number().positive(),
});

sales.post(
  "/",
  guard("sale.add", EntityType.Permission),
  zValidator("json", createSaleValidationSchema),
  audit(AuditAction.CREATE, AuditEntityTypes.SALE),
  async (c) => {
    const { customerId, products, startDate, employeeId } = c.req.valid("json");
    const result = await createSale({
      customerId,
      products,
      deliveries,
      startDate,
      employeeId,
    });
    return c.json(result);
  }
);

sales.delete(
  "/:id",
  guard("sale.delete", EntityType.Permission),
  zValidator("param", idParamsValidationSchema),
  audit(AuditAction.DELETE, AuditEntityTypes.SALE),
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
  deliveries: z
    .array(
      z.object({
        employeeId: z.number().positive(),
        addressId: z.number().positive(),
        startDate: z.coerce.date(),
      })
    )
    .optional(),
  status: z.nativeEnum(SaleStatusEnum).optional(),
  customerId: z.number().positive().optional(),
  employeeId: z.number().positive().optional(),
});

sales.put(
  "/",
  guard("sale.edit", EntityType.Permission),
  zValidator("json", updateSaleValidationSchema),
  audit(AuditAction.UPDATE, AuditEntityTypes.SALE),
  async (c) => {
    const { saleId, products, status, customerId, employeeId, deliveries } =
      c.req.valid("json");
    const result = await updateSale({
      saleId,
      products,
      status,
      customerId,
      employeeId,
      deliveries,
    });
    return c.json(result);
  }
);

export { sales };
