import { prisma } from "@/api/helpers/prisma";
import { ErrorCode, ResourceError, ServerError } from "@/api/types/errors";

interface DeleteDeliveryResponse {
  message: string;
}

async function deleteDelivery(
  deliveryId: number
): Promise<DeleteDeliveryResponse> {
  try {
    await prisma.$transaction(async (prisma) => {
      // Delete the Delivery record
      const deletedDelivery = await prisma.delivery.delete({
        where: { id: deliveryId },
      });

      if (!deletedDelivery) {
        throw new ResourceError(ErrorCode.RESOURCE_NOT_FOUND);
      }
    });

    return { message: "delivery deleted successfully" };
  } catch (error) {
    if (error instanceof ResourceError) {
      throw error;
    }
    throw new ServerError();
  }
}

export { deleteDelivery };
