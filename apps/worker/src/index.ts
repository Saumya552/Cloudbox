import { Worker } from "bullmq";

import { connection } from "@cloudbox/queue";

import { io } from "./socket";
import { buildContainer } from "./deployments/docker";

import { cloneRepo } from "./deployments/clone-repo";

const worker = new Worker(
  "deployment-queue",

  async (job) => {

    const projectName = job.data.projectName;

    const githubUrl = job.data.githubUrl;

    const sendLog = (message: string) => {

      console.log(message);

      io.emit("deployment-log", {
        projectName,
        message,
      });
    };

    try {

      sendLog(
        `🚀 Starting deployment for ${projectName}`
      );

      sendLog("📦 Cloning repository...");

      const repoPath = await cloneRepo(
        githubUrl,
        projectName
      );

      sendLog(
        `✅ Repository cloned to ${repoPath}`
      );

      sendLog("📦 Installing dependencies...");

      await new Promise((resolve) =>
        setTimeout(resolve, 2000)
      );

      sendLog("🔨 Building application...");

      await new Promise((resolve) =>
        setTimeout(resolve, 3000)
      );

      sendLog("🐳 Building Docker image...");

      await buildContainer(
        repoPath,
        projectName,
        sendLog
      );

      sendLog("🚀 Starting container...");
      await new Promise((resolve) =>
        setTimeout(resolve, 2000)
      );

      sendLog("✅ Deployment successful!");

    } catch (error) {

      console.error(error);

      sendLog("❌ Deployment failed");

    }
  },

  {
    connection,
  }
);

worker.on("completed", (job) => {

  console.log(
    `Job ${job.id} completed`
  );

});

console.log("Worker running...");