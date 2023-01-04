import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../plugins/prisma";

function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case "GET":
      return GetProjects();
    case "POST":
      return CreateProject();
    case "PUT":
      return;
    case "DELETE":
      return;

    default:
      return res.status(400).send("No method provider");
  }

  async function GetProjects() {
    try {
      const projects = await prisma.projects.findMany({
        include: {
          stacks: {
            select: {
              name: true,
            },
          },
        },
      });

      return res.send(projects);
    } catch (error) {
      return res.status(400).send(error);
    }
  }

  type CreateProjectProps = {
    thumb: string;
    category: string;
    title: string;
    description: string;
    repositoryUrl: string;
    link: string;
    stacks: {
      name: string;
    }[];
  };

  async function CreateProject() {
    const data: CreateProjectProps = req.body;

    try {
      await prisma.projects.create({
        data: {
          thumb: data.thumb,
          category: data.category,
          title: data.title,
          description: data.description,
          repositoryUrl: data.repositoryUrl,
          link: data.link,
          stacks: {
            createMany: {
              data: data.stacks,
            },
          },
        },
      });

      return res.status(201).json({ message: "Project created successfully" });
    } catch (error) {
      return res.status(400).send(error);
    }
  }
}

export default handler;
