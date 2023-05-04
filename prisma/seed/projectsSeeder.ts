import { prisma } from "../../src/lib/prisma";

export async function projectsSeeder() {
  await prisma.project.deleteMany();
  await prisma.stack.deleteMany();

  await prisma.project.create({
    data: {
      thumb: "#",
      title: "Dtmoney",
      category: "Projeto de Desafio",
      description:
        "<p>Uma aplicação simples de <strong>controle de gastos</strong> que tem como funcionalidades <strong>cadastrar entradas e saídas</strong> por meio de login social com <strong>Google</strong> e <strong>Github</strong></p>",
      repositoryUrl: "https://github.com/gabrielmelogm/dtmoney",
      link: "https://dtmoney-sigma-seven.vercel.app/",
      stacks: {
        createMany: {
          data: [
            {
              name: "Docker",
            },
            {
              name: "Styled Components",
            },
            {
              name: "Create React App",
            },
            {
              name: "Firebase",
            },
          ],
        },
      },
    },
  });
}
