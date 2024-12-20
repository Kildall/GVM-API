import type { JWTVariables } from "@/api/middlewares/auth";
import { guard } from "@/api/middlewares/guard";
import { entities } from "@/api/routes/admin/entities";
import { users } from "@/api/routes/admin/users";
import { EntityType } from "@prisma/client";
import { Hono } from "hono";

const admin = new Hono<{ Variables: JWTVariables }>();

admin.use(guard("gvm.admin", EntityType.Role));

admin.route("/entities", entities);
admin.route("/users", users);

export { admin };
