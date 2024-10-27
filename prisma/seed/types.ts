import type { PrismaClient } from "@prisma/client";

export type SeedFunction = (prisma: PrismaClient) => Promise<void>;
