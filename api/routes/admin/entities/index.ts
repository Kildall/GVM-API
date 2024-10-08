import { castToNumberSchema } from "@/api/helpers/validation_schemas";
import type { JWTVariables } from "@/api/middlewares/auth";
import { getEntities } from "@/api/operations/entities/get_entities";
import { getEntityById } from "@/api/operations/entities/get_entity_by_id";
import { getEntitiesHierarchy } from "@/api/operations/entities/get_entities_hierarchy";
import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { z } from "zod";
import { addEntityToUser } from "@/api/operations/entities/add_entity_to_user";
import { EntityType } from "@prisma/client";
import { createEntity } from "@/api/operations/entities/create_entity";
import { updateEntity } from "@/api/operations/entities/update_entity";
import { deleteEntity } from "@/api/operations/entities/delete_entity";
import { getEntityUsers } from "@/api/operations/entities/get_entity_users";
import { removeEntityFromUser } from "@/api/operations/entities/remove_entity_from_user";

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
});

entities.post(
  "/",
  zValidator("json", validateCreateEntitySchema),
  async (c) => {
    const { name, type } = c.req.valid("json");
    const result = await createEntity({ name, type });
    return c.json(result);
  }
);

const validateUpdateEntitySchema = z.object({
  entityId: z.number().positive(),
  name: z.string().min(3).max(256).optional(),
  childEntityIds: z.array(z.number()).optional(),
});

entities.put("/", zValidator("json", validateUpdateEntitySchema), async (c) => {
  const { entityId, childEntityIds, name } = c.req.valid("json");
  const result = await updateEntity({ entityId, childEntityIds, name });
  return c.json(result);
});

entities.delete("/:id", zValidator("param", validateIdSchema), async (c) => {
  const { id } = c.req.valid("param");
  const result = await deleteEntity({ id });
  return c.json(result);
});

const validateAddEntityToUserSchema = z.object({
  entityId: z.number().positive(),
  userId: z.number().positive(),
});

entities.post(
  "/user",
  zValidator("json", validateAddEntityToUserSchema),
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
  async (c) => {
    const { entityId, userId } = c.req.valid("json");
    const result = await removeEntityFromUser({ userId, entityId });
    return c.json(result);
  }
);

export { entities };
