import { sendEmail, type Recipient } from "@/api/helpers/mailjet";
import { log } from "@/api/helpers/pino";
import { ServerError } from "@/api/types/errors";
import type {
  Address,
  Customer,
  Delivery,
  Employee,
  Product,
  ProductSale,
  Sale,
  User,
} from "@prisma/client";

const SUBJECT = "Tienes una nueva entrega asignada";
const EMAIL_VERIFICATION_TEMPLATE_ID = 6477018;

type SaleWithProducts = Sale & {
  products: (ProductSale & { product: Product })[];
  customer: Customer;
};

type DeliveryWithCustomerAndAddress = Delivery & {
  address: Address;
  sale: SaleWithProducts;
};

async function sendNewDeliveryEmail(
  user: User,
  employee: Employee,
  delivery: DeliveryWithCustomerAndAddress
) {
  try {
    const recipient: Recipient = {
      email: user.email,
    };

    await sendEmail(SUBJECT, [recipient], EMAIL_VERIFICATION_TEMPLATE_ID, {
      email: user.email,
      name: employee.name,
      delivery: {
        customer: delivery.sale.customer.name,
        address: delivery.address.street1,
        products: delivery.sale.products.map((product) => product.product.name),
      },
    });
  } catch (error) {
    log.error(error);
    throw new ServerError();
  }
}

export { sendNewDeliveryEmail };
