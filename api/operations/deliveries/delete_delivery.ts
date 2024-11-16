import { prisma } from "@/api/helpers/prisma";
import { sendCancelledDeliveryEmail } from "@/api/operations/email/send_cancelled_delivery";
import { ErrorCode, ResourceError, ServerError } from "@/api/types/errors";

interface DeleteDeliveryResponse {
  message: string;
}

interface DeleteDeliveryInput {
  deliveryId: number;
}

async function deleteDelivery({
  deliveryId,
}: DeleteDeliveryInput): Promise<DeleteDeliveryResponse> {
  try {
    await prisma.$transaction(async (prisma) => {
      // Delete the Delivery record
      const deletedDelivery = await prisma.delivery.delete({
        where: { id: deliveryId },
        include: {
          address: true,
          employee: {
            include: {
              user: true,
            },
          },
        },
      });

      if (!deletedDelivery) {
        throw new ResourceError(ErrorCode.RESOURCE_NOT_FOUND);
      }

      if (deletedDelivery.employee?.user) {
        await sendCancelledDeliveryEmail(
          deletedDelivery.employee.user,
          deletedDelivery.employee,
          deletedDelivery
        );
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
