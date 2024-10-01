import { Hono } from "hono";
import { z } from "zod";
import { signup } from "@/api/operations/auth/signup.ts";
import { login } from "@/api/operations/auth/login.ts";
import { zValidator } from "@hono/zod-validator";
import { getConnInfo } from "hono/bun";
import type { RequestTelemetrics } from "@/api/types/api";
import { HTTPException } from "hono/http-exception";
import { logout } from "@/api/operations/auth/logout";
import type { JWTVariables } from "@/api/middlewares/auth";

const auth = new Hono<{ Variables: JWTVariables }>();

const signupValidationSchema = z.object({
  email: z.string().email().max(100),
  password: z.string().min(8).max(256),
  name: z.string().max(256),
});

auth.post("/signup", zValidator("json", signupValidationSchema), async (c) => {
  if (c.get("isAuthenticated")) {
    throw new HTTPException(400, { message: "you are already logged in" });
  }
  const { email, name, password } = c.req.valid("json");
  await signup({ email, name, password });
  return c.json({ message: "user created successfully" });
});

const loginValidationSchema = z.object({
  email: z.string().email().max(100),
  password: z.string().min(8).max(256),
  remember: z.boolean(),
});

auth.post("/login", zValidator("json", loginValidationSchema), async (c) => {
  if (c.get("isAuthenticated")) {
    throw new HTTPException(400, { message: "you are already logged in" });
  }
  const { email, password, remember } = c.req.valid("json");
  const connInfo = getConnInfo(c);
  const telemetrics: RequestTelemetrics = {
    ip: connInfo.remote.address || "Unknown",
    userAgent: c.req.header("User-Agent") || "Unknown",
  };

  const result = await login({ email, password, remember, telemetrics });
  return c.json(result);
});

auth.post("/logout", async (c) => {
  if (!c.get("isAuthenticated")) {
    throw new HTTPException(401, { message: "you are not logged in" });
  }
  const jwtPayload = c.get("jwtPayload");
  if (!jwtPayload) {
    throw new HTTPException(401, { message: "invalid session" });
  }
  const { sesion: sessionId, id: userId } = jwtPayload;

  const result = await logout({ userId, sessionId });
  return c.json(result);
});

export { auth };