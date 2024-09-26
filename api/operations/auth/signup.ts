import { prisma } from "@/api/helpers/prisma.ts";
import { ParamsError } from "@/api/types/errors.ts";
import { createHash } from 'node:crypto';

interface SignupInput {
  email: string;
  password: string;
  name: string;
}

async function signup({ email, password, name }: SignupInput) {
  const existingUser = await prisma.usuario.findFirst({
    where: { email: email },
  });

  if (existingUser) {
    throw new ParamsError("Usuario ya existe");
  }

  // Hash the password
  const hashedPassword = createHash('sha256').update(password).digest('hex');

  // Create new user
  await prisma.usuario.create({
    data: {
      email,
      clave: hashedPassword,
      nombre: name,
      habilitado: false,
    },
  });

  // TODO: Add verification of email
  // await sendVerificationEmail(newUser);

  return;
}

export { signup };