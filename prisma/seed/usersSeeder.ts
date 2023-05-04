import bcrypt from "bcrypt";

import { prisma } from "../../src/lib/prisma";

import "dotenv/config";

export async function usersSeeder() {
  await prisma.user.deleteMany();

  const hash = await bcrypt.hash(process.env.SEED_PASSWORD, 10);

  await prisma.user.create({
    data: {
      username: process.env.SEED_USERNAME,
      email: process.env.SEED_EMAIL,
      password: hash,
    },
  });
}
