import { hash } from "@/api/helpers/hash";
import { prisma } from "@/api/helpers/prisma.ts";
import { ParamsError } from "@/api/types/errors.ts";
import { createHash } from "node:crypto";

interface SignupInput {
  email: string;
  password: string;
  name: string;
}

async function signup({ email, password, name }: SignupInput) {
  const existingUser = await prisma.user.findFirst({
    where: { email: email },
  });

  if (existingUser) {
    throw new ParamsError("Usuario ya existe");
  }

  // Hash the password
  const hashedPassword = await hash(password);

  // Create new user
  await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
      name,
      enabled: false,
    },
  });

  // TODO: Add verification of email
  // await sendVerificationEmail(newUser);

  return;
}

export { signup };
