import { log } from "@/api/helpers/pino";
import { api } from "@/api/routes";
import { env } from "@/config/env";
import { Hono } from "hono";

const app = new Hono();

app.route("/", api);

log.info(`Server running on port ${env.PORT} 👍`);

const TWO_MINUTES = 60 * 2;

export default {
  port: env.PORT,
  fetch: app.fetch,
  idleTimeout: TWO_MINUTES,
};
