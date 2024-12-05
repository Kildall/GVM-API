import type { JWTVariables } from "@/api/middlewares/auth";
import { Hono } from "hono";

const shared = new Hono<{ Variables: JWTVariables }>();

shared.get("/sales", async (c) => {
  return c.json({ message: "sales" });
});

shared.get("/deliveries", async (c) => {
  return c.json({ message: "deliveries" });
});

shared.get("/products", async (c) => {
  return c.json({ message: "products" });
});

shared.get("/suppliers", async (c) => {
  return c.json({ message: "suppliers" });
});

export { shared };
