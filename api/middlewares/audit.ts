import { AuditService } from "@/api/helpers/audit_service";
import { isOriginalBody } from "@/api/middlewares/formatter";
import { AuditAction } from "@prisma/client";
import { createMiddleware } from "hono/factory";
import { HTTPException } from "hono/http-exception";

enum AuditEntityTypes {
  USER = "USER",
  CUSTOMER = "CUSTOMER",
  PURCHASE = "PURCHASE",
  ADDRESS = "ADDRESS",
  SUPPLIER = "SUPPLIER",
  EMPLOYEE = "EMPLOYEE",
  DELIVERY = "DELIVERY",
  PRODUCT = "PRODUCT",
  SALE = "SALE",
  DELIVERY_PERSON = "DELIVERY_PERSON",
  ENTITY = "ENTITY",
  ENTITY_USER = "ENTITY_USER",
  SESSION = "SESSION",
  SIGNATURE = "SIGNATURE",
}

const ACTIONS_WITH_BODY: AuditAction[] = [
  AuditAction.CREATE,
  AuditAction.UPDATE,
];

const audit = (
  action: AuditAction,
  entityType: string,
  description?: string
) => {
  return createMiddleware(async (c, next) => {
    if (!c.get("isAuthenticated")) {
      throw new HTTPException(401, { message: "user not authenticated" });
    }

    const userId = c.get("jwtPayload")?.id;
    if (!userId) {
      throw new HTTPException(401, {
        message: "user id not found in jwt payload",
      });
    }

    await next();
    const response = c.res.clone();

    // This logic is here because in case of an error it catches it before coming back (with standard body of response)
    // So an error would be registered as an audit item, when in reality it failed to do the action
    // And thus it should not be kept in record
    if (response.headers.get("Content-Type")?.includes("application/json")) {
      const originalBody = await response.json();

      if (isOriginalBody(originalBody) && !originalBody.status.success) {
        return;
      }

      let reqData = {
        params: c.req.param(),
        query: c.req.query(),
      };

      let auditData: string = JSON.stringify(reqData);
      if (ACTIONS_WITH_BODY.includes(action)) {
        auditData = JSON.stringify({
          body: await c.req.json(),
          ...reqData,
        });
      }

      if (!description) {
        description = `${action} operation performed on ${entityType}`;
      }
      AuditService.createAuditRecord(
        action,
        entityType,
        userId,
        auditData,
        description
      );
    }
  });
};
export { audit, AuditEntityTypes };
