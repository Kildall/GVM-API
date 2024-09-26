import { Hono } from "hono";
import { logger } from "hono/logger";
import { api } from "@/api/routes";
import { env } from "@/config/env";

const app = new Hono();

app.use(logger());

app.route("/", api);

export default { 
  port: env.PORT, 
  fetch: app.fetch, 
}
