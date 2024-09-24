export class APIError extends Error {
    readonly statusCode: number | undefined;
}

function createError(name: string, statusCode: number, message?: string) {
    return class CustomError extends APIError {
        readonly statusCode: number;

        constructor(customMessage?: string) {
            super(customMessage || message || `${name} Error`);
            this.name = name;
            this.statusCode = statusCode;

            // Maintain proper stack trace
            if (Error.captureStackTrace) {
                Error.captureStackTrace(this, this.constructor);
            }
        }
    };
}

export const AccessError = createError(
    "AccessError",
    401,
    "User is not authenticated",
);

export const ParamsError = createError(
    "ParamsError",
    400,
    "Params are not valid",
);
