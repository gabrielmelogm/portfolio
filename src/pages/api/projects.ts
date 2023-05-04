import { NextApiRequest, NextApiResponse } from "next";

import { recoverUserInformation } from "./auth/signIn";
import { prisma } from "../../lib/prisma";

function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case "GET":
      return getProjects();
    case "POST":
      return createProject();
    case "PUT":
      return;
    case "DELETE":
      return;

    default:
      return res.status(400).send("No method provider");
  }

  async function getProjects() {
    try {
      const projects = await prisma.project.findMany({
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

  async function createProject() {
    const { thumb, title, category, description, repositoryUrl, link, stacks } =
      req.body.fields;

    const { authorization } = req.headers;

    try {
      try {
        await recoverUserInformation(authorization);
      } catch (error) {
        return res.status(401).send(error);
      }

      const response = await prisma.project.create({
        data: {
          thumb,
          title,
          category,
          description,
          repositoryUrl,
          link,
          stacks: {
            createMany: {
              data: stacks,
            },
          },
        },
      });

      return res.status(201).send(response);
    } catch (error) {
      console.error(error);
      return res.status(400).send(error);
    }
  }
}

export default handler;
