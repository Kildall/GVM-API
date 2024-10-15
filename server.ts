import { Hono } from "hono";
import { api } from "@/api/routes";
import { env } from "@/config/env";
import { log } from "@/api/helpers/pino";

const app = new Hono();

app.route("/", api);

log.info(`Server running on port ${env.PORT} 👍`);

export default {
  port: env.PORT,
  fetch: app.fetch,
};
