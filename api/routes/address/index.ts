import { castToNumberSchema } from "@/api/helpers/validation_schemas";
import type { JWTVariables } from "@/api/middlewares/auth";
import { guard } from "@/api/middlewares/guard";
import { getAddressById } from "@/api/operations/addresses/get_address_by_id";
import { getAddresses } from "@/api/operations/addresses/get_addresses";
import { zValidator } from "@hono/zod-validator";
import { EntityType } from "@prisma/client";
import { Hono } from "hono";
import { z } from "zod";

const addresses = new Hono<{ Variables: JWTVariables }>();

const idParamsValidationSchema = z.object({
  id: castToNumberSchema,
});

addresses.get(
  "/:id",
  guard("address.read", EntityType.Permission),
  zValidator("param", idParamsValidationSchema),
  async (c) => {
    const { id } = c.req.valid("param");
    const result = await getAddressById(id);
    return c.json(result);
  }
);

addresses.get(
  "/",
  guard("address.browse", EntityType.Permission),
  async (c) => {
    const result = await getAddresses();
    return c.json(result);
  }
);

export { addresses };
