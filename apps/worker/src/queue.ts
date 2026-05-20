import { Queue } from "bullmq";

import { connection } from "./redis";

export const deploymentQueue = new Queue(
  "deployment-queue",
  {
    connection,
  }
);