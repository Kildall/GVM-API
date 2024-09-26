import type { APIResponse } from "@/api/types/api.ts";
import { createMiddleware } from "hono/factory";


// Type guard function to check if a value is an OriginalBody
function isOriginalBody(value: unknown): value is APIResponse {
  return (
      typeof value === 'object' &&
      value !== null &&
      'status' in value &&
      typeof (value as APIResponse).status === 'object' &&
      (value as APIResponse).status !== null &&
      'success' in (value as APIResponse).status &&
      typeof (value as APIResponse).status.success === 'boolean'
  );
}

const responseFormatter = createMiddleware(async (c, next) => {
    await next();

    const response = c.res;

    if (response.headers.get("Content-Type")?.includes("application/json")) {
        const originalBody = await response.json();

        if (isOriginalBody(originalBody) && !originalBody.status.success) {
          c.res = new Response(JSON.stringify(originalBody), {
                status: response.status,
                headers: response.headers,
            });
            return;
        }

        const formattedResponse: APIResponse = {
            status: {
                success: true,
                errors: [],
            },
            data: originalBody,
        };

        c.res = new Response(JSON.stringify(formattedResponse), {
            status: response.status,
            headers: response.headers,
        });
    }
});

export { responseFormatter };
