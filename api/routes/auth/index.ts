import { Hono } from "hono";
import { prisma } from "@/api/helpers/prisma.ts";
import { z } from "zod";
import { generateJWT } from "@/api/helpers/jwt.ts";
import { sendVerificationEmail } from "@/api/operations/email/send_verification_email.ts";
import { zValidator } from "@hono/zod-validator";

const auth = new Hono();

const signupValidationSchema = z.object({
  email: z.string().email().max(100),
  password: z.string().max(256),
  name: z.string().max(256),
});

// Signup route
auth.post("/signup", , async (c) => {
  const input = await c.req.json();

  const validatedInput = signupValidationSchema.safeParse(input);
  if (!validatedInput.success) {
    return c.json({ message: "Invalid parameters" }, 400);
  }

  const { email, password, name } = validatedInput.data;

  // Check if user already exists
  const existingUser = await prisma.usuario.findFirst({
    where: { email: email },
  });

  if (existingUser) {
    c.status(400);
    return c.json({ message: "Username already exists" });
  }

  const passwordBytes = new TextEncoder().encode(password);

  // Hash the password
  const hashedPassword = await crypto.subtle.digest("SHA-256", passwordBytes);

  const hashArray = Array.from(new Uint8Array(hashedPassword)); // convert buffer to byte array
  const hashHex = hashArray
    .map((b) => b.toString(16).padStart(2, "0"))
    .join(""); // convert bytes to hex string

  // Create new user
  const newUser = await prisma.usuario.create({
    data: {
      email,
      clave: hashHex,
      nombre: name,
      habilitado: false,
    },
  });

  await sendVerificationEmail(newUser);

  return c.json({ message: "User created successfully" });
});

const loginValidationSchema = z.object({
  email: z.string().email().max(100),
  password: z.string().max(256),
});

// Login route
auth.post("/login", zValidator('json', loginValidationSchema), async (c) => {
  const input = await c.req.json();

  const validatedInput = loginValidationSchema.safeParse(input);
  if (!validatedInput.success) {
    return c.json({ message: "Invalid parameters" }, 400);
  }

  const { email, password } = validatedInput.data;

  // Check if user exists
  const existingUser = await prisma.usuario.findFirst({
    where: { email: email },
  });

  if (!existingUser) {
    return c.json({ message: "User doesnt exist" }, 400);
  }
  const passwordBytes = new TextEncoder().encode(password);

  const hashedPassword = await crypto.subtle.digest("SHA-256", passwordBytes);
  const hashArray = Array.from(new Uint8Array(hashedPassword));
  const hashHex = hashArray
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");

  if (hashHex !== existingUser.clave || email !== existingUser.email) {
    return c.json({ message: "Email or password incorrect" }, 400);
  }

  const token = generateJWT(existingUser);
  return c.json({ token });
});

export { auth };
