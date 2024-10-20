/*
  Warnings:

  - You are about to drop the `EntityUser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "EntityUser" DROP CONSTRAINT "EntityUser_entityId_fkey";

-- DropForeignKey
ALTER TABLE "EntityUser" DROP CONSTRAINT "EntityUser_userId_fkey";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "entityId" INTEGER;

-- DropTable
DROP TABLE "EntityUser";

-- CreateTable
CREATE TABLE "_EntityUser" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_EntityUser_AB_unique" ON "_EntityUser"("A", "B");

-- CreateIndex
CREATE INDEX "_EntityUser_B_index" ON "_EntityUser"("B");

-- AddForeignKey
ALTER TABLE "_EntityUser" ADD CONSTRAINT "_EntityUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Entity"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EntityUser" ADD CONSTRAINT "_EntityUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("UserId") ON DELETE CASCADE ON UPDATE CASCADE;
