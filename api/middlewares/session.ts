import { prisma } from "@/api/helpers/prisma";
import { jwtValidationSchema } from "@/api/middlewares/jwt";
import { createMiddleware } from "hono/factory";
import { HTTPException } from "hono/http-exception";

const session = createMiddleware(async (c, next) => {
  const path = c.req.path;
  if (path.startsWith("/api/auth")) {
    return next();
  }

  const jwtPayload = c.get("jwtPayload");
  const validationResult = jwtValidationSchema.safeParse(jwtPayload);
  if (!validationResult.success) {
    throw new HTTPException(401, {
      message: "unable to authorize",
    });
  }

  const { id, sesion } = validationResult.data;

  const user = await prisma.usuario.findFirst({
    where: {
      id: id,
    },
  });

  if (!user) {
    throw new HTTPException(401, {
      message: "unable to authorize",
    });
  }

  const session = await prisma.sesion.findFirst({
    where: {
      id: sesion,
      activo: true,
    },
  });

  if (!sesion) {
    throw new HTTPException(401, {
      message: "unable to authorize",
    });
  }

  c.set("user", user);
  c.set("session", session);

  await next();
});

export { session };
