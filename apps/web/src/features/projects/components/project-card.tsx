"use client";

import {
  Github,
  Rocket,
} from "lucide-react";
import { deployProject } from "../actions/depoly-project";

interface ProjectCardProps {
  name: string;
  githubUrl: string;
  status: string;
}

export default function ProjectCard({
  name,
  githubUrl,
  status,
}: ProjectCardProps) {

  const statusColors = {
    PENDING: "text-yellow-400",
    BUILDING: "text-cyan-400",
    RUNNING: "text-green-400",
    FAILED: "text-red-400",
  };

  return (
    <div className="
      rounded-3xl
      border
      border-cyan-500/10
      bg-black/30
      p-6
      backdrop-blur-xl
      transition-all
      hover:border-cyan-400/30
      hover:shadow-[0_0_30px_rgba(0,245,255,0.08)]
    ">

      <div className="flex items-start justify-between">

        <div>
          <h2 className="text-2xl font-bold text-white">
            {name}
          </h2>

          <a
            href={githubUrl}
            target="_blank"
            className="
              mt-3
              flex
              items-center
              gap-2
              text-sm
              text-zinc-400
              hover:text-cyan-400
            "
          >
            <Github size={16} />

            Repository
          </a>
        </div>

        <div className={`
          rounded-full
          border
          border-white/10
          px-3
          py-1
          text-sm
          font-semibold
          ${statusColors[
          status as keyof typeof statusColors
          ]}
        `}>
          {status}
        </div>

      </div>

      <div className="
        mt-8
        flex
        items-center
        justify-between
      ">

        <div>
          <p className="text-sm text-zinc-500">
            Last deployment
          </p>

          <p className="mt-1 text-white">
            2 mins ago
          </p>
        </div>

        <button
          onClick={() =>
            deployProject(name, githubUrl)
          }
          className="
    flex
    items-center
    gap-2
    rounded-xl
    bg-cyan-500
    px-4
    py-2
    font-semibold
    text-black
    transition
    hover:bg-cyan-400
  "
        >
          <Rocket size={16} />

          Deploy
        </button>

      </div>
    </div>
  );
}