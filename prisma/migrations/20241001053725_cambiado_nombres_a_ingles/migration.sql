/*
  Warnings:

  - You are about to drop the `Cliente` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Compra` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CompraProducto` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Direccion` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Distribuidor` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Empleado` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Entidad` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `EntidadUsuario` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Envio` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `EstadoEnvio` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `EstadoVenta` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Producto` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ProductoVenta` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Repartidor` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `RepartidorEnvio` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Sesion` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Usuario` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Venta` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_PermisoRol` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "EntityType" AS ENUM ('Permission', 'Role');

-- DropForeignKey
ALTER TABLE "Compra" DROP CONSTRAINT "Compra_distribuidorId_fkey";

-- DropForeignKey
ALTER TABLE "Compra" DROP CONSTRAINT "Compra_empleadoId_fkey";

-- DropForeignKey
ALTER TABLE "CompraProducto" DROP CONSTRAINT "CompraProducto_compraId_fkey";

-- DropForeignKey
ALTER TABLE "CompraProducto" DROP CONSTRAINT "CompraProducto_productoId_fkey";

-- DropForeignKey
ALTER TABLE "Direccion" DROP CONSTRAINT "Direccion_clienteId_fkey";

-- DropForeignKey
ALTER TABLE "EntidadUsuario" DROP CONSTRAINT "EntidadUsuario_entidadId_fkey";

-- DropForeignKey
ALTER TABLE "EntidadUsuario" DROP CONSTRAINT "EntidadUsuario_usuarioId_fkey";

-- DropForeignKey
ALTER TABLE "Envio" DROP CONSTRAINT "Envio_direccionId_fkey";

-- DropForeignKey
ALTER TABLE "Envio" DROP CONSTRAINT "Envio_estado_fkey";

-- DropForeignKey
ALTER TABLE "Envio" DROP CONSTRAINT "Envio_repartidorId_fkey";

-- DropForeignKey
ALTER TABLE "Envio" DROP CONSTRAINT "Envio_ventaId_fkey";

-- DropForeignKey
ALTER TABLE "ProductoVenta" DROP CONSTRAINT "ProductoVenta_productoId_fkey";

-- DropForeignKey
ALTER TABLE "ProductoVenta" DROP CONSTRAINT "ProductoVenta_ventaId_fkey";

-- DropForeignKey
ALTER TABLE "RepartidorEnvio" DROP CONSTRAINT "RepartidorEnvio_envioId_fkey";

-- DropForeignKey
ALTER TABLE "RepartidorEnvio" DROP CONSTRAINT "RepartidorEnvio_estado_fkey";

-- DropForeignKey
ALTER TABLE "RepartidorEnvio" DROP CONSTRAINT "RepartidorEnvio_repartidorId_fkey";

-- DropForeignKey
ALTER TABLE "Sesion" DROP CONSTRAINT "Sesion_usuarioId_fkey";

-- DropForeignKey
ALTER TABLE "Venta" DROP CONSTRAINT "Venta_clienteId_fkey";

-- DropForeignKey
ALTER TABLE "Venta" DROP CONSTRAINT "Venta_estado_fkey";

-- DropForeignKey
ALTER TABLE "_PermisoRol" DROP CONSTRAINT "_PermisoRol_A_fkey";

-- DropForeignKey
ALTER TABLE "_PermisoRol" DROP CONSTRAINT "_PermisoRol_B_fkey";

-- DropTable
DROP TABLE "Cliente";

-- DropTable
DROP TABLE "Compra";

-- DropTable
DROP TABLE "CompraProducto";

-- DropTable
DROP TABLE "Direccion";

-- DropTable
DROP TABLE "Distribuidor";

-- DropTable
DROP TABLE "Empleado";

-- DropTable
DROP TABLE "Entidad";

-- DropTable
DROP TABLE "EntidadUsuario";

-- DropTable
DROP TABLE "Envio";

-- DropTable
DROP TABLE "EstadoEnvio";

-- DropTable
DROP TABLE "EstadoVenta";

-- DropTable
DROP TABLE "Producto";

-- DropTable
DROP TABLE "ProductoVenta";

-- DropTable
DROP TABLE "Repartidor";

-- DropTable
DROP TABLE "RepartidorEnvio";

-- DropTable
DROP TABLE "Sesion";

-- DropTable
DROP TABLE "Usuario";

-- DropTable
DROP TABLE "Venta";

-- DropTable
DROP TABLE "_PermisoRol";

-- DropEnum
DROP TYPE "TipoEntidad";

-- CreateTable
CREATE TABLE "Customer" (
    "CustomerId" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "registrationDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Customer_pkey" PRIMARY KEY ("CustomerId")
);

-- CreateTable
CREATE TABLE "Purchase" (
    "PurchaseId" SERIAL NOT NULL,
    "employeeId" INTEGER NOT NULL,
    "supplierId" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Purchase_pkey" PRIMARY KEY ("PurchaseId")
);

-- CreateTable
CREATE TABLE "PurchaseProduct" (
    "purchaseId" INTEGER NOT NULL,
    "productId" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,

    CONSTRAINT "PurchaseProduct_pkey" PRIMARY KEY ("purchaseId","productId")
);

-- CreateTable
CREATE TABLE "Address" (
    "AddressId" SERIAL NOT NULL,
    "customerId" INTEGER NOT NULL,
    "street1" TEXT NOT NULL,
    "street2" TEXT,
    "postalCode" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "details" TEXT,

    CONSTRAINT "Address_pkey" PRIMARY KEY ("AddressId")
);

-- CreateTable
CREATE TABLE "Supplier" (
    "SupplierId" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Supplier_pkey" PRIMARY KEY ("SupplierId")
);

-- CreateTable
CREATE TABLE "Employee" (
    "EmployeeId" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "position" TEXT NOT NULL,

    CONSTRAINT "Employee_pkey" PRIMARY KEY ("EmployeeId")
);

-- CreateTable
CREATE TABLE "Shipment" (
    "ShipmentId" SERIAL NOT NULL,
    "saleId" INTEGER NOT NULL,
    "deliveryPersonId" INTEGER NOT NULL,
    "addressId" INTEGER NOT NULL,
    "status" INTEGER NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "lastUpdateDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Shipment_pkey" PRIMARY KEY ("ShipmentId")
);

-- CreateTable
CREATE TABLE "ShipmentStatus" (
    "StatusId" INTEGER NOT NULL,
    "statusDescription" TEXT NOT NULL,

    CONSTRAINT "ShipmentStatus_pkey" PRIMARY KEY ("StatusId")
);

-- CreateTable
CREATE TABLE "SaleStatus" (
    "StatusId" INTEGER NOT NULL,
    "statusDescription" TEXT NOT NULL,

    CONSTRAINT "SaleStatus_pkey" PRIMARY KEY ("StatusId")
);

-- CreateTable
CREATE TABLE "Product" (
    "ProductId" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "measure" DOUBLE PRECISION NOT NULL,
    "brand" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("ProductId")
);

-- CreateTable
CREATE TABLE "ProductSale" (
    "saleId" INTEGER NOT NULL,
    "productId" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,

    CONSTRAINT "ProductSale_pkey" PRIMARY KEY ("saleId","productId")
);

-- CreateTable
CREATE TABLE "DeliveryPerson" (
    "DeliveryPersonId" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "phone" TEXT NOT NULL,

    CONSTRAINT "DeliveryPerson_pkey" PRIMARY KEY ("DeliveryPersonId")
);

-- CreateTable
CREATE TABLE "DeliveryPersonShipment" (
    "deliveryPersonId" INTEGER NOT NULL,
    "shipmentId" INTEGER NOT NULL,
    "status" INTEGER NOT NULL,

    CONSTRAINT "DeliveryPersonShipment_pkey" PRIMARY KEY ("deliveryPersonId","shipmentId")
);

-- CreateTable
CREATE TABLE "Sale" (
    "SaleId" SERIAL NOT NULL,
    "customerId" INTEGER NOT NULL,
    "status" INTEGER NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL,
    "lastUpdateDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Sale_pkey" PRIMARY KEY ("SaleId")
);

-- CreateTable
CREATE TABLE "Entity" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "type" "EntityType" NOT NULL,

    CONSTRAINT "Entity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EntityUser" (
    "userId" INTEGER NOT NULL,
    "entityId" INTEGER NOT NULL,

    CONSTRAINT "EntityUser_pkey" PRIMARY KEY ("userId","entityId")
);

-- CreateTable
CREATE TABLE "User" (
    "UserId" SERIAL NOT NULL,
    "name" VARCHAR(256) NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "password" VARCHAR(256) NOT NULL,
    "enabled" BOOLEAN NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("UserId")
);

-- CreateTable
CREATE TABLE "Session" (
    "id" UUID NOT NULL,
    "ip" TEXT NOT NULL,
    "userAgent" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_PermissionRole" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_PermissionRole_AB_unique" ON "_PermissionRole"("A", "B");

-- CreateIndex
CREATE INDEX "_PermissionRole_B_index" ON "_PermissionRole"("B");

-- AddForeignKey
ALTER TABLE "Purchase" ADD CONSTRAINT "Purchase_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "Employee"("EmployeeId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Purchase" ADD CONSTRAINT "Purchase_supplierId_fkey" FOREIGN KEY ("supplierId") REFERENCES "Supplier"("SupplierId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PurchaseProduct" ADD CONSTRAINT "PurchaseProduct_purchaseId_fkey" FOREIGN KEY ("purchaseId") REFERENCES "Purchase"("PurchaseId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PurchaseProduct" ADD CONSTRAINT "PurchaseProduct_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("ProductId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer"("CustomerId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Shipment" ADD CONSTRAINT "Shipment_saleId_fkey" FOREIGN KEY ("saleId") REFERENCES "Sale"("SaleId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Shipment" ADD CONSTRAINT "Shipment_deliveryPersonId_fkey" FOREIGN KEY ("deliveryPersonId") REFERENCES "DeliveryPerson"("DeliveryPersonId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Shipment" ADD CONSTRAINT "Shipment_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "Address"("AddressId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Shipment" ADD CONSTRAINT "Shipment_status_fkey" FOREIGN KEY ("status") REFERENCES "ShipmentStatus"("StatusId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductSale" ADD CONSTRAINT "ProductSale_saleId_fkey" FOREIGN KEY ("saleId") REFERENCES "Sale"("SaleId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductSale" ADD CONSTRAINT "ProductSale_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("ProductId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DeliveryPersonShipment" ADD CONSTRAINT "DeliveryPersonShipment_deliveryPersonId_fkey" FOREIGN KEY ("deliveryPersonId") REFERENCES "DeliveryPerson"("DeliveryPersonId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DeliveryPersonShipment" ADD CONSTRAINT "DeliveryPersonShipment_shipmentId_fkey" FOREIGN KEY ("shipmentId") REFERENCES "Shipment"("ShipmentId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DeliveryPersonShipment" ADD CONSTRAINT "DeliveryPersonShipment_status_fkey" FOREIGN KEY ("status") REFERENCES "ShipmentStatus"("StatusId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sale" ADD CONSTRAINT "Sale_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer"("CustomerId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sale" ADD CONSTRAINT "Sale_status_fkey" FOREIGN KEY ("status") REFERENCES "SaleStatus"("StatusId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EntityUser" ADD CONSTRAINT "EntityUser_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("UserId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EntityUser" ADD CONSTRAINT "EntityUser_entityId_fkey" FOREIGN KEY ("entityId") REFERENCES "Entity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("UserId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PermissionRole" ADD CONSTRAINT "_PermissionRole_A_fkey" FOREIGN KEY ("A") REFERENCES "Entity"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PermissionRole" ADD CONSTRAINT "_PermissionRole_B_fkey" FOREIGN KEY ("B") REFERENCES "Entity"("id") ON DELETE CASCADE ON UPDATE CASCADE;
