"use server";

import { prisma } from "@cloudbox/db";

export async function getProjects() {
  return await prisma.project.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
}