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

  const passwordBytes = new TextEncoder().encode(password);

  // Hash the password
  const hashedPassword = await crypto.subtle.digest("SHA-256", passwordBytes);

  const hashArray = Array.from(new Uint8Array(hashedPassword)); // convert buffer to byte array
  const hashHex = hashArray
    .map((b) => b.toString(16).padStart(2, "0"))
    .join(""); // convert bytes to hex string

  // Create new user
  await prisma.usuario.create({
    data: {
      email,
      clave: hashHex,
      nombre: name,
      habilitado: false,
    },
  });

  // TODO: Add verification of email
  // await sendVerificationEmail(newUser);

  return;
}

export { signup };
