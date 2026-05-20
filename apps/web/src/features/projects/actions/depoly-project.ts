"use server";

import { deploymentQueue } from "@cloudbox/queue";

export async function deployProject(
  projectName: string,
  githubUrl: string
) {

  await deploymentQueue.add(
    "deploy",
    {
      projectName,
      githubUrl,
    }
  );

  return {
    success: true,
  };
}