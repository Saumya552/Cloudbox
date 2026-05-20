"use client";

import { Bell, Search } from "lucide-react";

export default function Navbar() {
  return (
    <header className="
      flex
      items-center
      justify-between
      border-b
      border-cyan-500/10
      bg-black/20
      px-8
      py-4
      backdrop-blur-xl
    ">

      <div className="
        flex
        items-center
        gap-3
        rounded-xl
        border
        border-cyan-500/10
        bg-black/30
        px-4
        py-2
      ">

        <Search size={18} className="text-zinc-500" />

        <input
          placeholder="Search deployments..."
          className="
            bg-transparent
            text-sm
            outline-none
            placeholder:text-zinc-500
          "
        />
      </div>

      <div className="flex items-center gap-4">

        <button className="
          rounded-xl
          border
          border-cyan-500/10
          bg-black/30
          p-3
          transition
          hover:border-cyan-400/30
        ">
          <Bell size={18} />
        </button>

        <div className="
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-full
          bg-cyan-500
          font-bold
          text-black
        ">
          S
        </div>

      </div>
    </header>
  );
}