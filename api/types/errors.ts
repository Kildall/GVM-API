export interface ResponseError {
  code: number;
  message: string;
}

export class APIError extends Error {
  readonly errorCode: number | undefined;
}

function createError(name: string, errorCode: number, message?: string) {
  return class CustomError extends APIError {
    readonly errorCode: number;

    constructor(customMessage?: string, customErrorCode?: number) {
      super(customMessage || message || `${name} Error`);
      this.name = name;
      this.errorCode = customErrorCode ?? errorCode;

      // Maintain proper stack trace
      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, this.constructor);
      }
    }
  };
}

export const AccessError = createError(
  "AccessError",
  1001,
  "user is not authenticated"
);

export const ParamsError = createError(
  "ParamsError",
  2001,
  "params are not valid"
);

export const ServerError = createError(
  "ServerError",
  3001,
  "server has encountered an issue"
);
