/*
  Warnings:

  - The primary key for the `Sesion` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `sesionId` on the `Sesion` table. All the data in the column will be lost.
  - You are about to drop the column `token` on the `Sesion` table. All the data in the column will be lost.
  - The required column `id` was added to the `Sesion` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- AlterTable
ALTER TABLE "Sesion" DROP CONSTRAINT "Sesion_pkey",
DROP COLUMN "sesionId",
DROP COLUMN "token",
ADD COLUMN     "id" UUID NOT NULL,
ADD CONSTRAINT "Sesion_pkey" PRIMARY KEY ("id");
