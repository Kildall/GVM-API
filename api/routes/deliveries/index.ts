import { castToNumberSchema } from "@/api/helpers/validation_schemas";
import { audit, AuditEntityTypes } from "@/api/middlewares/audit";
import type { JWTVariables } from "@/api/middlewares/auth";
import { guard } from "@/api/middlewares/guard";
import { createDelivery } from "@/api/operations/deliveries/create_delivery";
import { deleteDelivery } from "@/api/operations/deliveries/delete_delivery";
import { getDeliveries } from "@/api/operations/deliveries/get_deliveries";
import { getDeliveriesByEmployeeId } from "@/api/operations/deliveries/get_deliveries_by_employee_id";
import { getDeliveryById } from "@/api/operations/deliveries/get_delivery_by_id";
import { updateDelivery } from "@/api/operations/deliveries/update_delivery";
import { AuthError, ErrorCode } from "@/api/types/errors";
import { zValidator } from "@hono/zod-validator";
import {
  AuditAction,
  BusinessStatusEnum,
  DriverStatusEnum,
  EntityType,
} from "@prisma/client";
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
  "/employee/:id",
  guard("delivery.browse", EntityType.Permission),
  zValidator("param", idParamsValidationSchema),
  async (c) => {
    const { id } = c.req.valid("param");
    const payload = c.get("jwtPayload");
    if (!payload) {
      throw new AuthError(ErrorCode.MISSING_AUTH);
    }
    const { id: userId } = payload;
    const result = await getDeliveriesByEmployeeId(id, userId);
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
  employeeId: z.number().positive().optional(),
  addressId: z.number().positive(),
  startDate: z.coerce.date(),
});

deliveries.post(
  "/",
  guard("delivery.add", EntityType.Permission),
  zValidator("json", createDeliveryValidationSchema),
  audit(AuditAction.CREATE, AuditEntityTypes.DELIVERY),
  async (c) => {
    const { saleId, addressId, employeeId, startDate } = c.req.valid("json");
    const result = await createDelivery({
      saleId,
      addressId,
      employeeId,
      startDate,
    });
    return c.json(result);
  }
);

deliveries.delete(
  "/:id",
  guard("delivery.delete", EntityType.Permission),
  zValidator("param", idParamsValidationSchema),
  audit(AuditAction.DELETE, AuditEntityTypes.DELIVERY),
  async (c) => {
    const { id } = c.req.valid("param");

    const result = await deleteDelivery({ deliveryId: id });
    return c.json(result);
  }
);

const updateDeliveryValidationSchema = z.object({
  deliveryId: z.number().positive(),
  addressId: z.number().positive().optional(),
  employeeId: z.number().positive().optional(),
  businessStatus: z.nativeEnum(BusinessStatusEnum).optional(),
  driverStatus: z.nativeEnum(DriverStatusEnum).optional(),
});

deliveries.put(
  "/",
  guard("delivery.edit", EntityType.Permission),
  zValidator("json", updateDeliveryValidationSchema),
  audit(AuditAction.UPDATE, AuditEntityTypes.DELIVERY),
  async (c) => {
    const { deliveryId, businessStatus, driverStatus, addressId, employeeId } =
      c.req.valid("json");
    const result = await updateDelivery({
      deliveryId,
      addressId,
      employeeId,
      businessStatus,
      driverStatus,
    });
    return c.json(result);
  }
);

export { deliveries };
