import { APIResponse } from "@/api/types/api.ts";
import { createMiddleware } from "hono/factory";

const responseFormatter = createMiddleware(async (c, next) => {
    await next();

    const response = c.res;

    if (response.headers.get("Content-Type")?.includes("application/json")) {
        const originalBody = await response.json();

        if (!originalBody?.status?.success) {
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
