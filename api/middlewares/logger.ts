import { createMiddleware } from "hono/factory";
import { log } from "@/api/helpers/pino";

const logger = createMiddleware(async (c, next) => {
  const requestStartTime = Date.now();
  const method = c.req.method;
  const url = c.req.url;

  // Log request details
  log.debug({
    type: "request",
    method,
    url,
    headers: c.req.raw.headers,
    body: await c.req.json().catch(() => ({})), // Attempt to parse JSON body, or empty object if not possible
  }, "incoming request");

  await next();

  // Calculate response time
  const responseTime = Date.now() - requestStartTime;

  // Log response details
  log.debug({
    type: "response",
    method,
    url,
    statusCode: c.res.status,
    responseTime,
    responseHeaders: c.res.headers,
  }, "outgoing response");
});

export default logger;
