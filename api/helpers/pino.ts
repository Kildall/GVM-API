import pino from "pino";
import { env } from "@/config/env.ts";

const log = pino({
    level: env.ENVIRONMENT === "development" ? "debug" : "info",
    customLevels: {
        debug: 10,
        info: 20,
        warn: 30,
        error: 40,
    },
    useOnlyCustomLevels: true,
    timestamp: pino.stdTimeFunctions.isoTime,
});

export { log };
