import { log } from "@/api/helpers/pino";
import {
  auth as authMiddleware,
  type JWTVariables,
} from "@/api/middlewares/auth";
import { responseFormatter } from "@/api/middlewares/formatter.ts";
import { logger } from "@/api/middlewares/logger.ts";
import { addresses } from "@/api/routes/address";
import { admin } from "@/api/routes/admin";
import { audits } from "@/api/routes/audits";
import { auth } from "@/api/routes/auth/index.ts";
import { customers } from "@/api/routes/customers";
import { dashboard } from "@/api/routes/dashboard";
import { deliveries } from "@/api/routes/deliveries";
import { employees } from "@/api/routes/employees";
import { products } from "@/api/routes/products";
import { purchases } from "@/api/routes/purchases";
import { sales } from "@/api/routes/sales";
import { suppliers } from "@/api/routes/suppliers";
import type { APIResponse } from "@/api/types/api.ts";
import { APIError, type ResponseError } from "@/api/types/errors";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { HTTPException } from "hono/http-exception";

type Variables = JWTVariables;

const api = new Hono<{ Variables: Variables }>().basePath("/api");

api.use("/*", cors());

api.use("/*", responseFormatter);

api.use("/*", logger);

api.use("/*", authMiddleware);

api.onError((error, c) => {
  log.error(error);
  if (error instanceof HTTPException) {
    const errors: ResponseError[] = [];
    errors.push({
      code: 0,
      message: typeof error.cause === "string" ? error.cause : error.message,
    });
    const response: APIResponse = {
      status: {
        success: false,
        errors: errors,
      },
      data: null,
    };

    return c.json(response);
  }
  let genericError: ResponseError = {
    code: 0,
    message: "an unknown error occurred",
  };

  const response: APIResponse = {
    status: {
      success: false,
      errors: [genericError],
    },
    data: null,
  };

  if (error instanceof APIError) {
    response.status.errors = [
      { code: error.code ?? 0, message: error.message },
    ];
  }

  return c.json(response);
});

api.route("/addresses", addresses);
api.route("/admin", admin);
api.route("/audits", audits);
api.route("/auth", auth);
api.route("/customers", customers);
api.route("/dashboard", dashboard);
api.route("/deliveries", deliveries);
api.route("/employees", employees);
api.route("/products", products);
api.route("/purchases", purchases);
api.route("/sales", sales);
api.route("/suppliers", suppliers);

export { api };
