import { prisma } from "@/api/helpers/prisma";
import { updateInventory } from "@/api/operations/inventory/update_inventory";
import { ParamsError } from "@/api/types/errors";
import { type Sale, type ProductSale, SaleStatusEnum } from "@prisma/client";

interface CreateSaleInput {
  customerId: number;
  startDate: Date;
  products: Array<{
    productId: number;
    quantity: number;
  }>;
}

interface CreateSaleResponse extends Sale {
  products: ProductSale[];
}

async function createSale({
  customerId,
  startDate,
  products,
}: CreateSaleInput): Promise<CreateSaleResponse> {
  try {
    return await prisma.$transaction(async (prisma) => {
      for (const product of products) {
        const inventoryCheck = await prisma.product.findUnique({
          where: { id: product.productId },
          select: { quantity: true },
        });
        if (!inventoryCheck || inventoryCheck.quantity < product.quantity) {
          throw new ParamsError(
            `not enough inventory for product ${product.productId}`
          );
        }
      }

      const createdSale = await prisma.sale.create({
        data: {
          customerId,
          status: SaleStatusEnum.STARTED,
          startDate,
          lastUpdateDate: new Date(),
          products: {
            create: products.map((product) => ({
              productId: product.productId,
              quantity: product.quantity,
            })),
          },
        },
        include: {
          products: true,
        },
      });

      // Update inventory for each product
      for (const product of products) {
        await updateInventory({
          productId: product.productId,
          quantity: product.quantity,
          isIncrease: false,
        });
      }

      return createdSale;
    });
  } catch (error) {
    if (error instanceof ParamsError) {
      throw error;
    }
    throw new ParamsError("could not create sale");
  }
}

export { createSale };
