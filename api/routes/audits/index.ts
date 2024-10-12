import {
  castToNumberSchema,
  orderBySchema,
} from "@/api/helpers/validation_schemas";
import { AuditEntityTypes } from "@/api/middlewares/audit";
import type { JWTVariables } from "@/api/middlewares/auth";
import { guard } from "@/api/middlewares/guard";
import { getAudits } from "@/api/operations/audit/get_audits";
import { zValidator } from "@hono/zod-validator";
import { AuditAction, EntityType } from "@prisma/client";
import { Hono } from "hono";
import { z } from "zod";

const audits = new Hono<{ Variables: JWTVariables }>();

const validateGetAllAuditsSchema = z.object({
  action: z.nativeEnum(AuditAction).optional(),
  entityType: z.nativeEnum(AuditEntityTypes).optional(),
  orderBy: orderBySchema.optional(),
  skip: castToNumberSchema
    .refine((arg) => arg >= 0, "Number must be positive")
    .optional(),
  take: castToNumberSchema
    .refine((arg) => arg >= 0, "Number must be positive")
    .optional(),
  userId: castToNumberSchema
    .refine((arg) => arg > 0, "Number must be positive")
    .optional(),
});

audits.get(
  "/",
  guard("audits.browse", EntityType.Permission),
  zValidator("query", validateGetAllAuditsSchema),
  async (c) => {
    const { action, entityType, orderBy, skip, take, userId } =
      c.req.valid("query");
    const result = await getAudits({
      action,
      entityType,
      orderBy,
      skip,
      take,
      userId,
    });
    return c.json(result);
  }
);

export { audits };
