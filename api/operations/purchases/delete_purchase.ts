import { ResourceError, ServerError } from "@/api/types/errors";

interface DeletePurchaseResponse {
  message: string;
}

async function deletePurchase(
  purchaseId: number
): Promise<DeletePurchaseResponse> {
  try {
    return { message: "purchase deleted successfully" };
  } catch (error) {
    if (error instanceof ResourceError) {
      throw error;
    }
    throw new ServerError();
  }
}

export { deletePurchase };
