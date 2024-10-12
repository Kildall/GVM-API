import { createMiddleware } from "hono/factory";
import { getConnInfo } from "hono/bun";
import { log } from "@/api/helpers/pino";
import dayjs from "dayjs";

const logger = createMiddleware(async (c, next) => {
  const requestStartTime = dayjs();
  const method = c.req.method;
  const url = c.req.url;
  const connInfo = getConnInfo(c);
  const ip = connInfo.remote.address;

  // Log request details
  log.debug(
    {
      type: "request",
      method,
      url,
      ip,
      headers: c.req.raw.headers,
    },
    "incoming request"
  );

  await next();

  // Calculate response time
  const responseTime = dayjs().diff(requestStartTime);

  // Log response details
  log.debug(
    {
      type: "response",
      method,
      url,
      ip,
      statusCode: c.res.status,
      responseTime,
      responseHeaders: c.res.headers,
    },
    "outgoing response"
  );
});

export { logger };
