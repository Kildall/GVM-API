import { Hono } from "hono";
import { logger } from "hono/logger";
import { api } from "@/api/routes";

const app = new Hono();

app.use(logger());

app.route("/", api);

export default { 
  port: 8000, 
  fetch: app.fetch, 
} 
