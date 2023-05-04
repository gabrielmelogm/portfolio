import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { prisma } from "../../../lib/prisma";

import "dotenv/config";

function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case "GET":
      return;
    case "POST":
      return signIn();
    case "PUT":
      return verifyToken();
    case "DELETE":
      return;

    default:
      return res.status(400).send("No method provider");
  }

  async function signIn() {
    const { username, password } = req.body;

    const user = await prisma.user.findFirst({
      where: {
        username,
      },
    });

    if (user) {
      const isAuth = await bcrypt.compare(password, user?.password);

      if (!isAuth) return res.status(401).json({ error: "User not found" });

      return res.status(200).json({
        message: "User authenticate successfully",
        user: {
          id: user.id,
          username: user.username,
          email: user.email,
        },
        token: jwt.sign({ id: user.id }, String(process.env.SECRET), {
          expiresIn: process.env.TIME_SECTION,
        }),
      });
    } else {
      res.status(401).json({ error: "User not found" });
    }
  }

  async function verifyToken() {
    try {
      const response = await recoverUserInformation(req.body.token);
      return res.status(200).send(response);
    } catch (error) {
      return res.status(401).send(error);
    }
  }
}

export async function recoverUserInformation(token: string) {
  if (!token) throw new Error("Token not informed");

  jwt.verify(token, process.env.SECRET, async (err, decoded: any) => {
    if (err) throw new Error("Invalid token");

    try {
      const user = await prisma.user.findFirst({
        where: {
          id: decoded.id,
        },
      });

      return {
        user: {
          id: user.id,
          username: user.username,
          email: user.email,
        },
      };
    } catch (error) {
      throw new Error(error);
    }
  });
}

export default handler;
