export enum ErrorCode {
  // Authentication errors (1000-1099)
  AUTH_ERROR = 1000,
  ACCESS_DENIED = 1001,
  INVALID_TOKEN = 1002,
  TOKEN_EXPIRED = 1003,
  MISSING_AUTH = 1004,
  AUTHENTICATED = 1005,
  USER_NOT_FOUND = 1006,

  // User errors (1100-1199)
  USER_ERROR = 1100,
  INCORRECT_PASSWORD = 1102,
  USER_ALREADY_EXISTS = 1103,
  USER_NOT_ENABLED = 1104,

  // Resource errors (2000-2999)
  RESOURCE_ERROR = 2000,
  RESOURCE_NOT_FOUND = 2001,
  RESOURCE_ALREADY_EXISTS = 2002,
  RESOURCE_UPDATE_FAILED = 2003,

  // Validation errors (3000-3099)
  VALIDATION_ERROR = 3000,
  INVALID_PARAMS = 3001,
  INSUFFICIENT_INVENTORY = 3002,

  // Server errors (5000-5099)
  SERVER_ERROR = 5000,
  DATABASE_ERROR = 5001,
}

type ErrorType = keyof typeof ErrorCode;

export interface ResponseError {
  code: number;
  message: string;
}

// Standardized error messages
const ERROR_MESSAGES: Record<ErrorCode, string> = {
  [ErrorCode.AUTH_ERROR]: "Authentication error occurred",
  [ErrorCode.ACCESS_DENIED]: "Access denied",
  [ErrorCode.INVALID_TOKEN]: "Invalid token",
  [ErrorCode.TOKEN_EXPIRED]: "Token has expired",
  [ErrorCode.MISSING_AUTH]: "Authentication not provided",
  [ErrorCode.AUTHENTICATED]: "Already authenticated",
  [ErrorCode.USER_ERROR]: "User error occurred",
  [ErrorCode.USER_NOT_FOUND]: "User not found",
  [ErrorCode.USER_NOT_ENABLED]: "User not enabled",
  [ErrorCode.INCORRECT_PASSWORD]: "Incorrect password",
  [ErrorCode.USER_ALREADY_EXISTS]: "User already exists",
  [ErrorCode.RESOURCE_ERROR]: "Resource error occurred",
  [ErrorCode.RESOURCE_NOT_FOUND]: "Resource not found",
  [ErrorCode.RESOURCE_ALREADY_EXISTS]: "Resource already exists",
  [ErrorCode.RESOURCE_UPDATE_FAILED]: "Resource update failed",
  [ErrorCode.VALIDATION_ERROR]: "Validation error occurred",
  [ErrorCode.INVALID_PARAMS]: "Invalid parameters",
  [ErrorCode.INSUFFICIENT_INVENTORY]: "Insufficient inventory",
  [ErrorCode.SERVER_ERROR]: "Server error occurred",
  [ErrorCode.DATABASE_ERROR]: "Database error occurred",
};

export class APIError extends Error {
  constructor(
    public readonly type: ErrorType,
    public readonly code: ErrorCode,
    message?: string
  ) {
    super(message || ERROR_MESSAGES[code]);
    this.name = type;

    // Maintains proper stack trace for where our error was thrown (only available on V8)
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, APIError);
    }
  }
}

// Type-safe error creation function
function createError<T extends ErrorType>(type: T, baseCode: ErrorCode) {
  return class extends APIError {
    constructor(code?: ErrorCode, message?: string) {
      if (typeof code === "number") {
        super(type, code, message);
      } else {
        super(type, baseCode, message);
      }
    }
  };
}

// Define error classes
export const AuthError = createError("AUTH_ERROR", ErrorCode.AUTH_ERROR);

export const ResourceError = createError(
  "RESOURCE_ERROR",
  ErrorCode.RESOURCE_ERROR
);

export const ValidationError = createError(
  "VALIDATION_ERROR",
  ErrorCode.VALIDATION_ERROR
);

export const InvalidParamsError = createError(
  "INVALID_PARAMS",
  ErrorCode.INVALID_PARAMS
);

export const ServerError = createError("SERVER_ERROR", ErrorCode.SERVER_ERROR);
export const DatabaseError = createError(
  "DATABASE_ERROR",
  ErrorCode.DATABASE_ERROR
);
