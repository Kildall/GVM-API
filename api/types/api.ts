import type { ResponseError } from "@/api/types/errors";
import type { JWTPayload } from "hono/utils/jwt/types";

export interface APIResponse {
  status: {
    success: boolean;
    errors: ResponseError[];
  };
  data: unknown;
}

export interface RequestTelemetrics {
  ip: string;
  userAgent: string;
}

export interface APIJWTPayload extends JWTPayload {
  id: number;
  sesion: string;
}
