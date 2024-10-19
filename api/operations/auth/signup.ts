import { hash } from "@/api/helpers/hash";
import { prisma } from "@/api/helpers/prisma.ts";
import { sendVerificationEmail } from "@/api/operations/email/send_verification_email";
import { AuthError, ErrorCode } from "@/api/types/errors.ts";
import { AccountAction } from "@prisma/client";
import dayjs from "dayjs";

interface SignupInput {
  email: string;
  password: string;
  name: string;
}

async function signup({ email, password, name }: SignupInput) {
  const existingUser = await prisma.user.findUnique({
    where: { email: email },
  });

  if (existingUser) {
    throw new AuthError(ErrorCode.USER_ALREADY_EXISTS);
  }

  // Hash the password
  const hashedPassword = await hash(password);

  return await prisma.$transaction(async (prisma) => {
    // Create new user
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
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
  });
}

export { signup };
