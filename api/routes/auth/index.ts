import type { JWTVariables } from "@/api/middlewares/auth";
import { handleSignature } from "@/api/middlewares/signature_action";
import { activateAccount } from "@/api/operations/auth/activate_account";
import { createNewPassword } from "@/api/operations/auth/create_new_password";
import { login } from "@/api/operations/auth/login.ts";
import { logout } from "@/api/operations/auth/logout";
import { resetPassword } from "@/api/operations/auth/reset_password";
import { signup } from "@/api/operations/auth/signup.ts";
import { validateSignature } from "@/api/operations/auth/validate_signature";
import { getUserInfo } from "@/api/operations/users/get_user_info";
import type { RequestTelemetrics } from "@/api/types/api";
import { AuthError, ErrorCode } from "@/api/types/errors";
import { zValidator } from "@hono/zod-validator";
import { AccountAction } from "@prisma/client";
import { Hono, type Context } from "hono";
import { getConnInfo } from "hono/bun";
import { z } from "zod";

const auth = new Hono<{ Variables: JWTVariables }>();

const signupValidationSchema = z.object({
  email: z.string().email().max(100),
  password: z.string().min(8).max(256),
  name: z.string().max(256),
  position: z.string().max(256),
});

auth.post("/signup", zValidator("json", signupValidationSchema), async (c) => {
  if (c.get("isAuthenticated")) {
    throw new AuthError(ErrorCode.AUTHENTICATED);
  }
  const { email, name, password, position } = c.req.valid("json");
  await signup({ email, name, password, position });
  return c.json({ message: "user created successfully" });
});

const loginValidationSchema = z.object({
  email: z.string().email().max(100),
  password: z.string().min(8).max(256),
  remember: z.boolean(),
});

auth.post("/login", zValidator("json", loginValidationSchema), async (c) => {
  if (c.get("isAuthenticated")) {
    throw new AuthError(ErrorCode.AUTHENTICATED);
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
  const jwtPayload = c.get("jwtPayload");
  if (!jwtPayload) {
    throw new AuthError(ErrorCode.MISSING_AUTH);
  }
  const { sesion: sessionId, id: userId } = jwtPayload;

  const result = await logout({ userId, sessionId });
  return c.json(result);
});

const signatureValidationSchema = z.object({
  signature: z.string(),
});

auth.get(
  "/verify-signature",
  zValidator("query", signatureValidationSchema),
  async (c) => {
    const { signature } = c.req.valid("query");
    try {
      const result = await validateSignature(signature);
      return c.json({ valid: result });
    } catch (error) {
      return c.json({ valid: false });
    }
  }
);

auth.post(
  "/activate-account",
  handleSignature(AccountAction.ACTIVATE),
  async (c: Context<{ Variables: JWTVariables & { userId: number } }>) => {
    const userId = c.get("userId");

    const result = await activateAccount({ userId });

    return c.json(result);
  }
);

const changePasswordValidationSchema = z.object({
  newPassword: z.string().min(8).max(256),
});

auth.post(
  "/reset-password",
  handleSignature(AccountAction.RESET_PASSWORD),
  zValidator("json", changePasswordValidationSchema),
  async (
    c: Context<
      {
        Variables: JWTVariables & { userId: number };
      },
      "/reset-password",
      {
        in: {
          json: {
            newPassword: string;
          };
        };
        out: {
          json: {
            newPassword: string;
          };
        };
      }
    >
  ) => {
    const userId = c.get("userId");
    const { newPassword } = c.req.valid("json");

    const result = await createNewPassword({ userId, newPassword });

    return c.json(result);
  }
);

const forgotPasswordValidationSchema = z.object({
  email: z.string().email().max(100),
});

auth.post(
  "/forgot-password",
  zValidator("json", forgotPasswordValidationSchema),
  async (c) => {
    const { email } = c.req.valid("json");

    const result = await resetPassword({ email });

    return c.json(result);
  }
);

auth.post("/validate-token", async (c) => {
  if (c.get("isAuthenticated")) {
    return c.json({ valid: true });
  }

  return c.json({ valid: false });
});

auth.get("/user", async (c) => {
  if (!c.get("isAuthenticated")) {
    throw new AuthError(ErrorCode.ACCESS_DENIED);
  }

  const jwtPayload = c.get("jwtPayload");
  if (!jwtPayload) {
    throw new AuthError(ErrorCode.MISSING_AUTH);
  }
  const { id: userId } = jwtPayload;

  const result = await getUserInfo({
    id: userId,
  });

  return c.json(result);
});

export { auth };
