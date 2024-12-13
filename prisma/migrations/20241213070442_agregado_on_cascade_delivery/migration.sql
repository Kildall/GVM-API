-- DropForeignKey
ALTER TABLE "Delivery" DROP CONSTRAINT "Delivery_saleId_fkey";

-- AddForeignKey
ALTER TABLE "Delivery" ADD CONSTRAINT "Delivery_saleId_fkey" FOREIGN KEY ("saleId") REFERENCES "Sale"("SaleId") ON DELETE CASCADE ON UPDATE CASCADE;
