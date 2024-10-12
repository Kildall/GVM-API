import { prisma } from "@/api/helpers/prisma";
import { AuditAction } from "@prisma/client";

export class AuditService {
  static async createAuditRecord(
    action: AuditAction,
    entityType: string,
    userId: number,
    data?: string,
    description?: string
  ) {
    await prisma.audit.create({
      data: {
        action,
        entityType,
        userId,
        data,
        description,
      },
    });
  }
}
