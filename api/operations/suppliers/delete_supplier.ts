import { prisma } from "@/api/helpers/prisma";
import { ParamsError } from "@/api/types/errors";

interface DeleteSupplierResponse {
  message: string;
}

async function deleteSupplier(
  supplierId: number
): Promise<DeleteSupplierResponse> {
  try {
    const updatedSupplier = await prisma.supplier.updateMany({
      where: {
        id: supplierId,
        enabled: true,
      },
      data: {
        enabled: false,
      },
    });

    if (updatedSupplier.count === 0) {
      throw new ParamsError("supplier not found or already deleted");
    }

    return { message: "supplier deleted successfully" };
  } catch (error) {
    if (error instanceof ParamsError) {
      throw error;
    }
    throw new Error("failed to delete supplier");
  }
}

export { deleteSupplier };
