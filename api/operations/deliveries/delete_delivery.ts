import { prisma } from "@/api/helpers/prisma";
import { ParamsError } from "@/api/types/errors";

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
        throw new ParamsError("delivery not found");
      }
    });

    return { message: "delivery deleted successfully" };
  } catch (error) {
    if (error instanceof ParamsError) {
      throw error;
    }
    throw new Error("failed to delete delivery");
  }
}

export { deleteDelivery };
