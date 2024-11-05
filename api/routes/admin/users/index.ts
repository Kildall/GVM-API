import { castToNumberSchema } from "@/api/helpers/validation_schemas";
import { audit, AuditEntityTypes } from "@/api/middlewares/audit";
import type { JWTVariables } from "@/api/middlewares/auth";
import { resetPassword } from "@/api/operations/auth/reset_password";
import { createUser } from "@/api/operations/users/create_user";
import { deleteUser } from "@/api/operations/users/delete_user";
import { getUserById } from "@/api/operations/users/get_user_by_id";
import { getUsers } from "@/api/operations/users/get_users";
import { updateUser } from "@/api/operations/users/update_user";
import { zValidator } from "@hono/zod-validator";
import { AuditAction } from "@prisma/client";
import { Hono } from "hono";
import { z } from "zod";

const users = new Hono<{ Variables: JWTVariables }>();

const validateIdSchema = z.object({
  id: castToNumberSchema,
});

users.get("/", async (c) => {
  const result = await getUsers();
  return c.json(result);
});

users.get("/:id", zValidator("param", validateIdSchema), async (c) => {
  const { id } = c.req.valid("param");
  const result = await getUserById({ id });
  return c.json(result);
});

const validateCreateUserSchema = z.object({
  name: z.string().min(3).max(256),
  email: z.string().email().max(100),
  password: z.string().min(8).max(256),
  enabled: z.boolean().optional(),
  verified: z.boolean().optional(),
});

users.post(
  "/",
  zValidator("json", validateCreateUserSchema),
  audit(AuditAction.CREATE, AuditEntityTypes.USER),
  async (c) => {
    const { name, email, password, enabled, verified } = c.req.valid("json");
    const result = await createUser({
      name,
      email,
      password,
      enabled,
      verified,
    });
    return c.json(result);
  }
);

const validateUpdateUserSchema = z.object({
  userId: z.number().positive(),
  name: z.string().min(3).max(256).optional(),
  email: z.string().email().max(100).optional(),
  password: z.string().min(8).max(256).optional(),
  enabled: z.boolean().optional(),
  verified: z.boolean().optional(),
});

users.put(
  "/",
  zValidator("json", validateUpdateUserSchema),
  audit(AuditAction.UPDATE, AuditEntityTypes.USER),
  async (c) => {
    const { userId, name, email, password, enabled, verified } =
      c.req.valid("json");
    const result = await updateUser({
      userId,
      name,
      email,
      password,
      enabled,
      verified,
    });
    return c.json(result);
  }
);

users.delete(
  "/:id",
  zValidator("param", validateIdSchema),
  audit(AuditAction.DELETE, AuditEntityTypes.USER),
  async (c) => {
    const { id } = c.req.valid("param");
    const result = await deleteUser({ id });
    return c.json(result);
  }
);

const validateResetPasswordSchema = z.object({
  email: z.string().email().max(100),
});

users.post(
  "/reset-password",
  zValidator("json", validateResetPasswordSchema),
  async (c) => {
    const { email } = c.req.valid("json");
    const result = await resetPassword({ email });
    return c.json(result);
  }
);

export { users };
