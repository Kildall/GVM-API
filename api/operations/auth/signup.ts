import { hash } from "@/api/helpers/hash";
import { prisma } from "@/api/helpers/prisma.ts";
import { sendVerificationEmail } from "@/api/operations/email/send_verification_email";
import { ParamsError } from "@/api/types/errors.ts";
import { AccountAction } from "@prisma/client";
import dayjs from "dayjs";
import { sign } from "hono/jwt";

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
    throw new ParamsError("usuario ya existe");
  }

  // Hash the password
  const hashedPassword = await hash(password);

  // Create new user
  const user = await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
      name,
      enabled: false,
    },
  });

  const signature = await prisma.signature.create({
    data: {
      action: AccountAction.ACTIVATE,
      createdAt: new Date(),
      expiresAt: dayjs().add(7, "days").toDate(),
      userId: user.id,
    },
  });

  await sendVerificationEmail(user, signature);

  return;
}

export { signup };
