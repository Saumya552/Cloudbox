"use server";
import { prisma } from "@cloudbox/db";
export async function createProject(
  name: string,
  githubUrl: string,
  userId: string
) {
  return await prisma.project.create({
    data: {
      name,
      githubUrl,
      userId,
    },
  });
}