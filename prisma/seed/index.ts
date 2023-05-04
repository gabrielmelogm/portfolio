import { prisma } from "../../src/lib/prisma";
import { projectsSeeder } from "./projectsSeeder";
import { usersSeeder } from "./usersSeeder";

async function main() {
  await usersSeeder();
  await projectsSeeder();
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
