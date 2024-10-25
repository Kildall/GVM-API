import { castToNumberSchema } from "@/api/helpers/validation_schemas";
import { audit, AuditEntityTypes } from "@/api/middlewares/audit";
import type { JWTVariables } from "@/api/middlewares/auth";
import { addEntityToUser } from "@/api/operations/entities/add_entity_to_user";
import { createEntity } from "@/api/operations/entities/create_entity";
import { deleteEntity } from "@/api/operations/entities/delete_entity";
import { getEntities } from "@/api/operations/entities/get_entities";
import { getEntitiesHierarchy } from "@/api/operations/entities/get_entities_hierarchy";
import { getEntityById } from "@/api/operations/entities/get_entity_by_id";
import { getEntityUsers } from "@/api/operations/entities/get_entity_users";
import { removeEntityFromUser } from "@/api/operations/entities/remove_entity_from_user";
import { updateEntity } from "@/api/operations/entities/update_entity";
import { zValidator } from "@hono/zod-validator";
import { AuditAction, EntityType } from "@prisma/client";
import { Hono } from "hono";
import { z } from "zod";

const entities = new Hono<{ Variables: JWTVariables }>();

const validateIdSchema = z.object({
  id: castToNumberSchema,
});

entities.get("/", async (c) => {
  const result = await getEntities();
  return c.json(result);
});

entities.get("/:id", zValidator("param", validateIdSchema), async (c) => {
  const { id } = c.req.valid("param");
  const result = await getEntityById({ id });
  return c.json(result);
});

entities.get("/hierarchy", async (c) => {
  const result = await getEntitiesHierarchy();
  return c.json(result);
});

entities.get("/:id/users", zValidator("param", validateIdSchema), async (c) => {
  const { id } = c.req.valid("param");
  const result = await getEntityUsers({ entityId: id });
  return c.json(result);
});

const validateCreateEntitySchema = z.object({
  name: z.string().min(3).max(256),
  type: z.nativeEnum(EntityType),
  roles: z.array(z.number()).default([]),
  permissions: z.array(z.number()).default([]),
});

entities.post(
  "/",
  zValidator("json", validateCreateEntitySchema),
  audit(AuditAction.CREATE, AuditEntityTypes.ENTITY),
  async (c) => {
    const { name, type, roles, permissions } = c.req.valid("json");
    const result = await createEntity({ name, type, roles, permissions });
    return c.json(result);
  }
);

const validateUpdateEntitySchema = z.object({
  entityId: z.number().positive(),
  name: z.string().min(3).max(256).optional(),
  type: z.nativeEnum(EntityType).optional(),
  roles: z.array(z.number()).optional(),
  permissions: z.array(z.number()).optional(),
  users: z.array(z.number()).optional(),
});

entities.put(
  "/",
  zValidator("json", validateUpdateEntitySchema),
  audit(AuditAction.UPDATE, AuditEntityTypes.ENTITY),
  async (c) => {
    const { entityId, type, roles, permissions, name, users } =
      c.req.valid("json");
    const result = await updateEntity({
      entityId,
      type,
      roles,
      permissions,
      name,
      users,
    });
    return c.json(result);
  }
);

entities.delete(
  "/:id",
  audit(AuditAction.DELETE, AuditEntityTypes.ENTITY),
  zValidator("param", validateIdSchema),
  async (c) => {
    const { id } = c.req.valid("param");
    const result = await deleteEntity({ id });
    return c.json(result);
  }
);

const validateAddEntityToUserSchema = z.object({
  entityId: z.number().positive(),
  userId: z.number().positive(),
});

entities.post(
  "/user",
  zValidator("json", validateAddEntityToUserSchema),
  audit(AuditAction.CREATE, AuditEntityTypes.ENTITY_USER),
  async (c) => {
    const { entityId, userId } = c.req.valid("json");
    const result = await addEntityToUser({ userId, entityId });
    return c.json(result);
  }
);

const validateRemoveEntityToUserSchema = z.object({
  entityId: z.number().positive(),
  userId: z.number().positive(),
});

entities.delete(
  "/user",
  zValidator("json", validateRemoveEntityToUserSchema),
  audit(AuditAction.DELETE, AuditEntityTypes.ENTITY_USER),
  async (c) => {
    const { entityId, userId } = c.req.valid("json");
    const result = await removeEntityFromUser({ userId, entityId });
    return c.json(result);
  }
);

export { entities };
