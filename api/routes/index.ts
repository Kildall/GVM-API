import { Hono } from "hono";
import type { JwtVariables } from "hono/jwt";
import { cors } from "hono/cors";
import { auth } from "@/api/routes/auth/index.ts";
import { jwt } from "@/api/middlewares/jwt.ts";
import logger from "@/api/middlewares/logger.ts";
import { responseFormatter } from "@/api/middlewares/formatter.ts";
import { HTTPException } from "hono/http-exception";
import { APIResponse } from "@/api/types/api.ts";

type Variables = JwtVariables;

const api = new Hono<{ Variables: Variables }>().basePath("/api");

api.use("/*", cors());

// Custom middleware for selective JWT checking

api.onError((error, c) => {
  if (error instanceof HTTPException) {
    const response: APIResponse = {
      status: {
        success: false,
        errors: [
          error.cause,
        ].flat(),
      },
      data: null,
    };

    return c.json(response);
  }

  let errorMessage = "An unknown error occurred";

  const response: APIResponse = {
    status: {
      success: false,
      errors: [{ message: errorMessage }],
    },
    data: null,
  };

  if (error instanceof Error) {
    errorMessage = error.message;
  }

  return c.json(response);
});

api.use(
  "/*",
  responseFormatter,
);

api.use(
  "/*",
  logger,
);

api.use(
  "/*",
  jwt,
);

api.route("/auth", auth);

export { api };
