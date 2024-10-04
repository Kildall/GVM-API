import { castToNumberSchema } from "@/api/helpers/validation_schemas";
import type { JWTVariables } from "@/api/middlewares/auth";
import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { z } from "zod";
import { getEmployeeById } from "@/api/operations/employees/get_employee_by_id";
import { getEmployees } from "@/api/operations/employees/get_employees";
import { createEmployee } from "@/api/operations/employees/create_employee";
import { deleteEmployee } from "@/api/operations/employees/delete_employee";
import { updateEmployee } from "@/api/operations/employees/update_employee";

const employees = new Hono<{ Variables: JWTVariables }>();

const idParamsValidationSchema = z.object({
  id: castToNumberSchema,
});

employees.get(
  "/:id",
  zValidator("param", idParamsValidationSchema),
  async (c) => {
    const { id } = c.req.valid("param");
    const result = await getEmployeeById(id);
    return c.json(result);
  }
);

employees.get("/", async (c) => {
  const result = await getEmployees();
  return c.json(result);
});

const createEmployeeValidationSchema = z.object({
  name: z.string().min(3).max(256),
  position: z.string().min(3).max(256),
});

employees.post(
  "/",
  zValidator("json", createEmployeeValidationSchema),
  async (c) => {
    const { name, position } = c.req.valid("json");
    const result = await createEmployee({ name, position });
    return c.json(result);
  }
);

employees.delete(
  "/:id",
  zValidator("param", idParamsValidationSchema),
  async (c) => {
    const { id } = c.req.valid("param");
    const result = await deleteEmployee(id);
    return c.json(result);
  }
);

const updateEmployeeValidationSchema = z.object({
  employeeId: z.number().positive(),
  name: z.string().min(3).max(256).optional(),
  position: z.string().min(3).max(256).optional(),
});

employees.put(
  "/",
  zValidator("json", updateEmployeeValidationSchema),
  async (c) => {
    const { employeeId, name, position } = c.req.valid("json");
    const result = await updateEmployee({ employeeId, name, position });
    return c.json(result);
  }
);

export { employees };
