import { Hono } from "hono";
import type { JwtVariables } from "hono/jwt";
import { cors } from "hono/cors";
import { auth } from "@/api/routes/auth/index.ts";
import logger from "@/api/middlewares/logger.ts";
import { responseFormatter } from "@/api/middlewares/formatter.ts";
import { HTTPException } from "hono/http-exception";
import type { APIResponse } from "@/api/types/api.ts";
import { log } from "@/api/helpers/pino";
import {
  auth as authMiddleware,
  type JWTVariables,
} from "@/api/middlewares/auth";
import { customers } from "@/api/routes/customers";
import { addresses } from "@/api/routes/address";
import { deliveries } from "@/api/routes/deliveries";
import { employees } from "@/api/routes/employees";
import { purchases } from "@/api/routes/purchases";
import { sales } from "@/api/routes/sales";
import { suppliers } from "@/api/routes/suppliers";
import { products } from "@/api/routes/products";

type Variables = JWTVariables;

const api = new Hono<{ Variables: Variables }>().basePath("/api");

api.use("/*", cors());

api.use("/*", responseFormatter);

api.use("/*", logger);

api.use("/*", authMiddleware);

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

api.route("/addresses", addresses);
api.route("/auth", auth);
api.route("/customers", customers);
api.route("/deliveries", deliveries);
api.route("/employees", employees);
api.route("/products", products);
api.route("/purchases", purchases);
api.route("/sales", sales);
api.route("/suppliers", suppliers);

export { api };
