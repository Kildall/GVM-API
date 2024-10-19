import { log } from "@/api/helpers/pino";
import { prisma } from "@/api/helpers/prisma";
import type { AuditEntityTypes } from "@/api/middlewares/audit";
import { ServerError } from "@/api/types/errors";
import type { BaseGetAllRouteInput } from "@/api/types/routes";
import type { Audit, User, AuditAction } from "@prisma/client";

interface GetAllAuditsResponse {
  audits: (Audit & {
    user: User;
  })[];
}

interface GetAuditsInput extends BaseGetAllRouteInput {
  entityType?: AuditEntityTypes;
  action?: AuditAction;
  userId?: number;
}

async function getAudits(
  input: GetAuditsInput = {}
): Promise<GetAllAuditsResponse> {
  try {
    const {
      skip = 0,
      take = 50,
      orderBy = { id: "asc" },
      action,
      entityType,
      userId,
    } = input;

    const audits = await prisma.audit.findMany({
      where: {
        action,
        entityType,
        userId,
      },
      skip,
      take,
      orderBy,
      include: {
        user: true,
      },
    });

    return { audits };
  } catch (error) {
    log.error(error);
    throw new ServerError();
  }
}

export { getAudits };
