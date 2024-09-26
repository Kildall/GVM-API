import { generateJWT } from "@/api/helpers/jwt.ts";
import { AccessError } from "@/api/types/errors.ts";
import { prisma } from "@/api/helpers/prisma.ts";
import { hash, verify } from "@/api/helpers/hash";

interface LoginInput {
  email: string;
  password: string;
}

interface LoginResponse {
  token: string;
  verified: boolean;
}

async function login({ email, password }: LoginInput) {
  // Check if user exists
  const existingUser = await prisma.usuario.findFirst({
    where: { email: email },
  });

  if (!existingUser) {
    throw new AccessError("User doesnt exist");
  }

  if (await verify(password, existingUser.clave) || email !== existingUser.email) {
    throw new AccessError("Incorrect password");
  }
  
  const token = await generateJWT(existingUser);


  const response: LoginResponse = {
    token,
    verified: existingUser.habilitado
  }

  return response;
}

export { login };
