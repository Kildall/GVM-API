/*
  Warnings:

  - You are about to drop the `DeliveryPersonShipment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `SaleStatus` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Shipment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ShipmentStatus` table. If the table is not empty, all the data it contains will be lost.
  - Changed the type of `status` on the `Sale` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "DeliveryStatusEnum" AS ENUM ('PENDING_ASSIGNMENT', 'ASSIGNED', 'IN_PROGRESS', 'DELIVERED', 'CANCELED', 'DISPUTED');

-- CreateEnum
CREATE TYPE "BusinessStatusEnum" AS ENUM ('STARTED', 'IN_PROGRESS', 'COMPLETED', 'CANCELED');

-- CreateEnum
CREATE TYPE "DriverStatusEnum" AS ENUM ('STARTED', 'IN_PROGRESS', 'COMPLETED', 'CANCELED');

-- CreateEnum
CREATE TYPE "SaleStatusEnum" AS ENUM ('STARTED', 'IN_PROGRESS', 'COMPLETED', 'CANCELED');

-- CreateEnum
CREATE TYPE "AccountAction" AS ENUM ('ACTIVATE');

-- DropForeignKey
ALTER TABLE "DeliveryPersonShipment" DROP CONSTRAINT "DeliveryPersonShipment_deliveryPersonId_fkey";

-- DropForeignKey
ALTER TABLE "DeliveryPersonShipment" DROP CONSTRAINT "DeliveryPersonShipment_shipmentId_fkey";

-- DropForeignKey
ALTER TABLE "DeliveryPersonShipment" DROP CONSTRAINT "DeliveryPersonShipment_status_fkey";

-- DropForeignKey
ALTER TABLE "PurchaseProduct" DROP CONSTRAINT "PurchaseProduct_purchaseId_fkey";

-- DropForeignKey
ALTER TABLE "Sale" DROP CONSTRAINT "Sale_status_fkey";

-- DropForeignKey
ALTER TABLE "Shipment" DROP CONSTRAINT "Shipment_addressId_fkey";

-- DropForeignKey
ALTER TABLE "Shipment" DROP CONSTRAINT "Shipment_deliveryPersonId_fkey";

-- DropForeignKey
ALTER TABLE "Shipment" DROP CONSTRAINT "Shipment_saleId_fkey";

-- DropForeignKey
ALTER TABLE "Shipment" DROP CONSTRAINT "Shipment_status_fkey";

-- AlterTable
ALTER TABLE "Employee" ADD COLUMN     "enabled" BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "enabled" BOOLEAN NOT NULL DEFAULT true,
ALTER COLUMN "quantity" SET DEFAULT 0;

-- AlterTable
ALTER TABLE "Sale" DROP COLUMN "status",
ADD COLUMN     "status" "SaleStatusEnum" NOT NULL;

-- AlterTable
ALTER TABLE "Supplier" ADD COLUMN     "enabled" BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "enabled" SET DEFAULT true;

-- DropTable
DROP TABLE "DeliveryPersonShipment";

-- DropTable
DROP TABLE "SaleStatus";

-- DropTable
DROP TABLE "Shipment";

-- DropTable
DROP TABLE "ShipmentStatus";

-- CreateTable
CREATE TABLE "Delivery" (
    "DeliveryId" SERIAL NOT NULL,
    "saleId" INTEGER NOT NULL,
    "deliveryPersonId" INTEGER,
    "addressId" INTEGER NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "lastUpdateDate" TIMESTAMP(3) NOT NULL,
    "status" "DeliveryStatusEnum" NOT NULL,
    "businessStatus" "BusinessStatusEnum" NOT NULL,
    "driverStatus" "DriverStatusEnum",

    CONSTRAINT "Delivery_pkey" PRIMARY KEY ("DeliveryId")
);

-- CreateTable
CREATE TABLE "DeliveryPersonDelivery" (
    "deliveryPersonId" INTEGER NOT NULL,
    "deliveryId" INTEGER NOT NULL,
    "status" "DeliveryStatusEnum" NOT NULL,

    CONSTRAINT "DeliveryPersonDelivery_pkey" PRIMARY KEY ("deliveryPersonId","deliveryId")
);

-- CreateTable
CREATE TABLE "Signature" (
    "id" UUID NOT NULL,
    "action" "AccountAction" NOT NULL,
    "userAgent" TEXT,
    "ip" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER,

    CONSTRAINT "Signature_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "PurchaseProduct" ADD CONSTRAINT "PurchaseProduct_purchaseId_fkey" FOREIGN KEY ("purchaseId") REFERENCES "Purchase"("PurchaseId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Delivery" ADD CONSTRAINT "Delivery_saleId_fkey" FOREIGN KEY ("saleId") REFERENCES "Sale"("SaleId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Delivery" ADD CONSTRAINT "Delivery_deliveryPersonId_fkey" FOREIGN KEY ("deliveryPersonId") REFERENCES "DeliveryPerson"("DeliveryPersonId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Delivery" ADD CONSTRAINT "Delivery_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "Address"("AddressId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DeliveryPersonDelivery" ADD CONSTRAINT "DeliveryPersonDelivery_deliveryPersonId_fkey" FOREIGN KEY ("deliveryPersonId") REFERENCES "DeliveryPerson"("DeliveryPersonId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DeliveryPersonDelivery" ADD CONSTRAINT "DeliveryPersonDelivery_deliveryId_fkey" FOREIGN KEY ("deliveryId") REFERENCES "Delivery"("DeliveryId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Signature" ADD CONSTRAINT "Signature_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("UserId") ON DELETE SET NULL ON UPDATE CASCADE;
