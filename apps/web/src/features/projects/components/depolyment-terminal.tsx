"use client";

import { useEffect, useState } from "react";

import { io } from "socket.io-client";

const socket = io("http://localhost:4001");

export default function DeploymentTerminal() {

  const [logs, setLogs] = useState<string[]>([]);

  useEffect(() => {

    socket.on(
      "deployment-log",

      (data) => {

        setLogs((prev) => [
          ...prev,
          data.message,
        ]);
      }
    );

    return () => {
      socket.off("deployment-log");
    };

  }, []);

  return (
    <div className="
      mt-10
      rounded-3xl
      border
      border-cyan-500/10
      bg-black/40
      p-6
      backdrop-blur-xl
    ">

      <h2 className="mb-6 text-2xl font-bold text-cyan-400">
        Deployment Logs
      </h2>

      <div className="
        h-[400px]
        overflow-y-auto
        rounded-2xl
        bg-black
        p-4
        font-mono
        text-sm
      ">

        {logs.map((log, index) => (
          <div
            key={index}
            className="mb-2 text-green-400"
          >
            {log}
          </div>
        ))}

      </div>
    </div>
  );
}