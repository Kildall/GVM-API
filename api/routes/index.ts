import { Hono } from "hono";
import type { JwtVariables } from "hono/jwt";
import { cors } from "hono/cors";
import { auth } from "@/api/routes/auth/index.ts";
import { jwt } from "@/api/middlewares/jwt.ts";
import logger from "@/api/middlewares/logger.ts";
import { responseFormatter } from "@/api/middlewares/formatter.ts";
import { HTTPException } from "hono/http-exception";
import type { APIResponse, HonoAuthenticatedRoute } from "@/api/types/api.ts";
import { log } from "@/api/helpers/pino";
import { session } from "@/api/middlewares/session";
import { every } from "hono/combine";

type Variables = JwtVariables & HonoAuthenticatedRoute;

const api = new Hono<{ Variables: Variables }>().basePath("/api");

api.use("/*", cors());

api.use("/*", responseFormatter);

api.use("/*", logger);

api.use("/*", every(jwt, session));

api.onError((error, c) => {
  log.error(error);
  if (error instanceof HTTPException) {
    const response: APIResponse = {
      status: {
        success: false,
        errors: [error.cause || error.message].flat(),
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
    response.status.errors = [error.message];
  }

  return c.json(response);
});

api.route("/auth", auth);

export { api };
