import { prisma } from "@/api/helpers/prisma";
import { ErrorCode, ResourceError, ServerError } from "@/api/types/errors";

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
      throw new ResourceError(ErrorCode.RESOURCE_UPDATE_FAILED);
    }

    return { message: "supplier deleted successfully" };
  } catch (error) {
    if (error instanceof ResourceError) {
      throw error;
    }
    throw new ServerError();
  }
}

export { deleteSupplier };
