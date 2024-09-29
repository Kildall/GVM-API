import { Hono } from "hono";
import { api } from "@/api/routes";
import { env } from "@/config/env";

const app = new Hono();

app.route("/", api);

export default { 
  port: env.PORT, 
  fetch: app.fetch, 
}
