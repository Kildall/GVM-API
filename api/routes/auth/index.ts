import { Hono } from "hono";
import { z } from "zod";
import { signup } from "@/api/operations/auth/signup.ts";
import { login } from "@/api/operations/auth/login.ts";
import { zValidator } from "@hono/zod-validator";

const auth = new Hono();

// Signup route

const signupValidationSchema = z.object({
  email: z.string().email().max(100),
  password: z.string().min(8).max(256),
  name: z.string().max(256),
});

auth.post("/signup", zValidator("json", signupValidationSchema), async (c) => {
  const { email, name, password } = c.req.valid("json");
  // Check if user already exists

  await signup({ email, name, password });

  return c.json({ message: "User created successfully" });
});

// Login route

const loginValidationSchema = z.object({
  email: z.string().email().max(100),
  password: z.string().min(8).max(256),
});

auth.post("/login", zValidator("json", loginValidationSchema), async (c) => {
  const { email, password } = c.req.valid("json");

  const result = await login({ email, password });

  return c.json(result);
});

export { auth };
