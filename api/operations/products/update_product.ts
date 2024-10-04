import { prisma } from "@/api/helpers/prisma";
import { updateInventory } from "@/api/operations/inventory/update_inventory";
import { ParamsError } from "@/api/types/errors";
import type { Product, Purchase, PurchaseProduct } from "@prisma/client";

interface UpdatePurchaseInput {
  productId: number;
  name?: string;
  measure?: number;
  brand?: string;
  price?: number;
  quantity?: number;
}

interface UpdateProductResponse extends Product {}

async function updateProduct({
  productId,
  brand,
  measure,
  name,
  price,
  quantity,
}: UpdatePurchaseInput): Promise<UpdateProductResponse> {
  try {
    const product = await prisma.product.update({
      where: { id: productId, enabled: true },
      data: { brand, measure, name, price, quantity },
    });
    return product;
  } catch (error) {
    throw new ParamsError("could not update product");
  }
}

export { updateProduct };
