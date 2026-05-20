"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  Rocket,
  Boxes,
  Activity,
  Settings,
} from "lucide-react";

const links = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Deployments",
    href: "/deployments",
    icon: Rocket,
  },
  {
    name: "Projects",
    href: "/projects",
    icon: Boxes,
  },
  {
    name: "Monitoring",
    href: "/monitoring",
    icon: Activity,
  },
  {
    name: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  return (
    <aside className="w-72 border-r border-cyan-500/10 bg-black/30 backdrop-blur-xl">

      <div className="border-b border-cyan-500/10 p-6">
        <h1 className="text-3xl font-bold text-cyan-400">
          CloudBox
        </h1>

        <p className="mt-2 text-sm text-zinc-500">
          AI Deployment Platform
        </p>
      </div>

      <nav className="space-y-2 p-4">

        {links.map((link) => {
          const Icon = link.icon;

          return (
            <Link
              key={link.name}
              href={link.href}
              className="
                flex
                items-center
                gap-3
                rounded-xl
                px-4
                py-3
                text-zinc-400
                transition-all
                hover:bg-cyan-500/10
                hover:text-cyan-400
              "
            >
              <Icon size={20} />

              {link.name}
            </Link>
          );
        })}

      </nav>
    </aside>
  );
}