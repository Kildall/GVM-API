import { Hono } from 'hono'
import { logger } from 'hono/logger'
import { api } from "@/api/routes/index.ts";
import "jsr:@std/dotenv/load";

const app = new Hono()

app.use(logger())

app.route('/', api)



Deno.serve(app.fetch)
