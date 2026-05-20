import IORedis from "ioredis";
import { Queue } from "bullmq";

export const connection = new IORedis({
  host: "localhost",
  port: 6379,
  maxRetriesPerRequest: null,
});

export const deploymentQueue = new Queue(
  "deployment-queue",
  {
    connection,
  }
);