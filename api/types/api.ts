import type { Sesion, Usuario } from "@prisma/client";
import type { JWTPayload } from "hono/utils/jwt/types";

export interface APIResponse {
  status: {
    success: boolean;
    errors: unknown[];
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

export interface HonoAuthenticatedRoute {
  user?: Usuario;
  session?: Sesion;
}
