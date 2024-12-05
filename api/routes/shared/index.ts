import type { JWTVariables } from "@/api/middlewares/auth";
import { getDeliveriesPublicInfo } from "@/api/operations/deliveries/get_deliveries_public_info";
import { getProductsPublicInfo } from "@/api/operations/products/get_products_public_info";
import { getSalesPublicInfo } from "@/api/operations/sales/get_sales_public_info";
import { getSuppliersPublicInfo } from "@/api/operations/suppliers/get_suppliers_public_info";
import { Hono } from "hono";

const shared = new Hono<{ Variables: JWTVariables }>();

shared.get("/sales", async (c) => {
  const sales = await getSalesPublicInfo();
  return c.json(sales);
});

shared.get("/deliveries", async (c) => {
  const deliveries = await getDeliveriesPublicInfo();
  return c.json(deliveries);
});

shared.get("/products", async (c) => {
  const products = await getProductsPublicInfo();
  return c.json(products);
});

shared.get("/suppliers", async (c) => {
  const suppliers = await getSuppliersPublicInfo();
  return c.json(suppliers);
});

export { shared };
