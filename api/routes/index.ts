import { Hono } from "hono";
import type { JwtVariables } from "hono/jwt";
import { cors } from "hono/cors";
import { auth } from "@/api/routes/auth/index.ts";
import { jwt } from "@/api/middlewares/jwt.ts";

type Variables = JwtVariables;

const api = new Hono<{ Variables: Variables }>().basePath("/api");

api.use("/*", cors());

// Custom middleware for selective JWT checking
api.use(
  "/*",
  jwt,
);

api.route("/auth", auth);

export { api };
