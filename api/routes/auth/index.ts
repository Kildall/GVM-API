import { Hono } from "hono";
import { z } from "zod";
import { signup } from "@/api/operations/auth/signup.ts";
import { login } from "@/api/operations/auth/login.ts";
import { zValidator } from "@hono/zod-validator";
import { getConnInfo } from "hono/bun";
import type { RequestTelemetrics } from "@/api/types/api";
import { decode } from "hono/jwt";
import { HTTPException } from "hono/http-exception";
import { logout } from "@/api/operations/auth/logout";
import { jwtValidationSchema } from "@/api/middlewares/jwt";

const auth = new Hono();

// Signup route

const signupValidationSchema = z.object({
  email: z.string().email().max(100),
  password: z.string().min(8).max(256),
  name: z.string().max(256),
});

auth.post("/signup", zValidator("json", signupValidationSchema), async (c) => {
  const { email, name, password } = c.req.valid("json");
  await signup({ email, name, password });

  return c.json({ message: "User created successfully" });
});

// Login route

const loginValidationSchema = z.object({
  email: z.string().email().max(100),
  password: z.string().min(8).max(256),
  remember: z.boolean(),
});

auth.post("/login", zValidator("json", loginValidationSchema), async (c) => {
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
  const authHeader = c.req.header("Authorization");
  if (!authHeader) {
    throw new HTTPException(401, {
      cause: { message: "unable to authorize" },
    });
  }
  const [, , token] = authHeader.split(" ");
  const { payload } = decode(token);
  const validationResult = jwtValidationSchema.safeParse(payload);
  if (!validationResult.success) {
    throw new HTTPException(401, {
      cause: { message: "unable to authorize" },
    });
  }

  const { sesion: sessionId, id: userId } = validationResult.data;

  const result = await logout({ userId, sessionId });

  return c.json(result);
});

export { auth };
