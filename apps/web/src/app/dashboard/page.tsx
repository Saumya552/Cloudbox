import DashboardShell from "@/components/layout/dashboard-shell";

import CreateProjectModal from "@/features/projects/components/create-project-modal";

import ProjectCard from "@/features/projects/components/project-card";

import { getProjects } from "@/features/projects/actions/get-projects";
import DeploymentTerminal from "@/features/projects/components/depolyment-terminal";

export default async function DashboardPage() {

  const projects = await getProjects();

  return (
    <DashboardShell>

      <div className="
        flex
        items-center
        justify-between
      ">

        <div>

          <h1 className="text-5xl font-bold text-cyan-400">
            Dashboard
          </h1>

          <p className="mt-3 text-zinc-500">
            Monitor deployments and infrastructure.
          </p>

        </div>

        <CreateProjectModal />
        <DeploymentTerminal />

      </div>

      <div className="
        mt-10
        grid
        gap-6
        md:grid-cols-2
        xl:grid-cols-3
      ">

        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            name={project.name}
            githubUrl={project.githubUrl}
            status={project.status}
          />
        ))}

      </div>

    </DashboardShell>
  );
}