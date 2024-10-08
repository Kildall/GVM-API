import { castToNumberSchema } from "@/api/helpers/validation_schemas";
import type { JWTVariables } from "@/api/middlewares/auth";
import { guard } from "@/api/middlewares/guard";
import { createDelivery } from "@/api/operations/deliveries/create_delivery";
import { deleteDelivery } from "@/api/operations/deliveries/delete_delivery";
import { getDeliveries } from "@/api/operations/deliveries/get_deliveries";
import { getDeliveryById } from "@/api/operations/deliveries/get_delivery_by_id";
import { updateDelivery } from "@/api/operations/deliveries/update_delivery";
import { zValidator } from "@hono/zod-validator";
import { DeliveryStatusEnum, EntityType } from "@prisma/client";
import { Hono } from "hono";
import { z } from "zod";

const deliveries = new Hono<{ Variables: JWTVariables }>();

const idParamsValidationSchema = z.object({
  id: castToNumberSchema,
});

deliveries.get(
  "/:id",
  guard("delivery.read", EntityType.Permission),
  zValidator("param", idParamsValidationSchema),
  async (c) => {
    const { id } = c.req.valid("param");
    const result = await getDeliveryById(id);
    return c.json(result);
  }
);

deliveries.get(
  "/",
  guard("delivery.browse", EntityType.Permission),
  async (c) => {
    const result = await getDeliveries();
    return c.json(result);
  }
);

const createDeliveryValidationSchema = z.object({
  saleId: z.number().positive(),
  deliveryPersonId: z.number().positive(),
  addressId: z.number().positive(),
  startDate: z.coerce.date(),
});

deliveries.post(
  "/",
  guard("delivery.add", EntityType.Permission),
  zValidator("json", createDeliveryValidationSchema),
  async (c) => {
    const { saleId, addressId, deliveryPersonId, startDate } =
      c.req.valid("json");
    const result = await createDelivery({
      saleId,
      addressId,
      deliveryPersonId,
      startDate,
    });
    return c.json(result);
  }
);

deliveries.delete(
  "/:id",
  guard("delivery.delete", EntityType.Permission),
  zValidator("param", idParamsValidationSchema),
  async (c) => {
    const { id } = c.req.valid("param");
    const result = await deleteDelivery(id);
    return c.json(result);
  }
);

const updateDeliveryValidationSchema = z.object({
  deliveryId: z.number().positive(),
  addressId: z.number().positive().optional(),
  deliveryPersonId: z.number().positive().optional(),
  status: z.nativeEnum(DeliveryStatusEnum).optional(),
});

deliveries.put(
  "/",
  guard("delivery.edit", EntityType.Permission),
  zValidator("json", updateDeliveryValidationSchema),
  async (c) => {
    const { deliveryId, status, addressId, deliveryPersonId } =
      c.req.valid("json");
    const result = await updateDelivery({
      deliveryId,
      addressId,
      deliveryPersonId,
      status,
    });
    return c.json(result);
  }
);

export { deliveries };
