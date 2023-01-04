import { prisma } from "../src/plugins/prisma";

async function main() {
  await prisma.projects.create({
    data: {
      thumb: "https://i.ibb.co/G9Q29M6/dtmoney.png",
      category: "Projeto de Desafio",
      title: "Dtmoney",
      description:
        "<p>Uma aplicação simples de <strong>controle de gastos</strong> que tem como funcionalidades <strong>cadastrar entradas e saídas</strong> por meio de login social com <strong>Google</strong> e <strong>Github</strong>.</p>",
      repositoryUrl: "https://github.com/gabrielmelogm/dtmoney",
      link: "https://dtmoney-sigma-seven.vercel.app/",
      stacks: {
        createMany: {
          data: [
            { name: "Docker" },
            { name: "Styled Components" },
            { name: "Create React App" },
            { name: "Firebase" },
          ],
        },
      },
    },
  });
  await prisma.projects.create({
    data: {
      thumb: "https://i.ibb.co/nBkbkKW/mario-jump.png",
      category: "Projeto Pessoal",
      title: "Mario jump",
      description:
        "<p>Um pequeno projeto que fiz do jogo que mais <strong>me marcou quando era criança</strong>, o jogo consiste em <strong>pular os canos para alcançar a maior distância possível</strong>.</p>",
      repositoryUrl: "https://github.com/gabrielmelogm/mario-jump",
      link: "https://mario-jump-three.vercel.app/",
      stacks: {
        createMany: {
          data: [
            { name: "HTML5" },
            { name: "CSS3" },
            { name: "Vanilla Javascript" },
          ],
        },
      },
    },
  });
}

main();
