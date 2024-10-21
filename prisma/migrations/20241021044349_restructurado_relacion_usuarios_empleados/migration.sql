/*
  Warnings:

  - You are about to drop the column `deliveryPersonId` on the `Delivery` table. All the data in the column will be lost.
  - You are about to alter the column `name` on the `Employee` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(256)`.
  - You are about to drop the column `entityId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `DeliveryPerson` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `DeliveryPersonDelivery` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[userId]` on the table `Employee` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[employeeId]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `employeeId` to the `Sale` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Delivery" DROP CONSTRAINT "Delivery_deliveryPersonId_fkey";

-- DropForeignKey
ALTER TABLE "DeliveryPersonDelivery" DROP CONSTRAINT "DeliveryPersonDelivery_deliveryId_fkey";

-- DropForeignKey
ALTER TABLE "DeliveryPersonDelivery" DROP CONSTRAINT "DeliveryPersonDelivery_deliveryPersonId_fkey";

-- AlterTable
ALTER TABLE "Delivery" DROP COLUMN "deliveryPersonId",
ADD COLUMN     "employeeId" INTEGER;

-- AlterTable
ALTER TABLE "Employee" ADD COLUMN     "userId" INTEGER,
ALTER COLUMN "name" SET DATA TYPE VARCHAR(256);

-- AlterTable
ALTER TABLE "Sale" ADD COLUMN     "employeeId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "entityId",
DROP COLUMN "name",
ADD COLUMN     "employeeId" INTEGER;

-- DropTable
DROP TABLE "DeliveryPerson";

-- DropTable
DROP TABLE "DeliveryPersonDelivery";

-- CreateTable
CREATE TABLE "EmployeeDelivery" (
    "employeeId" INTEGER NOT NULL,
    "deliveryId" INTEGER NOT NULL,
    "status" "DeliveryStatusEnum" NOT NULL,

    CONSTRAINT "EmployeeDelivery_pkey" PRIMARY KEY ("employeeId","deliveryId")
);

-- CreateIndex
CREATE UNIQUE INDEX "EmployeeDelivery_deliveryId_key" ON "EmployeeDelivery"("deliveryId");

-- CreateIndex
CREATE UNIQUE INDEX "Employee_userId_key" ON "Employee"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "User_employeeId_key" ON "User"("employeeId");

-- AddForeignKey
ALTER TABLE "Delivery" ADD CONSTRAINT "Delivery_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "Employee"("EmployeeId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EmployeeDelivery" ADD CONSTRAINT "EmployeeDelivery_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "Employee"("EmployeeId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EmployeeDelivery" ADD CONSTRAINT "EmployeeDelivery_deliveryId_fkey" FOREIGN KEY ("deliveryId") REFERENCES "Delivery"("DeliveryId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sale" ADD CONSTRAINT "Sale_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "Employee"("EmployeeId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "Employee"("EmployeeId") ON DELETE SET NULL ON UPDATE CASCADE;
