import { hash } from "@/api/helpers/hash";
import { prisma } from "@/api/helpers/prisma.ts";
import { ParamsError } from "@/api/types/errors.ts";

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
  const hashedPassword = await hash(password)

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
