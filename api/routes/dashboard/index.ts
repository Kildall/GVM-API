import type { JWTVariables } from "@/api/middlewares/auth";
import { Hono } from "hono";
import { EntityType } from "@prisma/client";
import { guard } from "@/api/middlewares/guard";
import { getDashboard } from "@/api/operations/sales/get_dashboard";

const dashboard = new Hono<{ Variables: JWTVariables }>();

dashboard.get(
  "/",
  guard("sale.read", EntityType.Permission),
  guard("delivery.read", EntityType.Permission),
  async (c) => {
    const result = await getDashboard();
    return c.json(result);
  }
);

export { dashboard };
