"use client";

import { useState } from "react";

import { createProject } from "../actions/create-project";

export default function CreateProjectModal() {

  const [open, setOpen] = useState(false);

  async function handleSubmit(formData: FormData) {

    await createProject(
      formData.get("name") as string,
      formData.get("githubUrl") as string,

      // TEMP USER ID
      "cmp2mqajg0000dgeohby3yh6o"
    );

    alert("Project created!");

    setOpen(false);
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="
          rounded-xl
          bg-cyan-500
          px-5
          py-3
          font-bold
          text-black
          transition
          hover:bg-cyan-400
        "
      >
        Create Project
      </button>

      {open && (
        <div className="
          fixed
          inset-0
          flex
          items-center
          justify-center
          bg-black/70
          backdrop-blur-sm
        ">

          <div className="
            w-full
            max-w-lg
            rounded-3xl
            border
            border-cyan-500/20
            bg-[#050816]
            p-8
          ">

            <h2 className="mb-6 text-3xl font-bold text-cyan-400">
              New Project
            </h2>

            <form
              action={handleSubmit}
              className="space-y-4"
            >

              <input
                name="name"
                placeholder="Project Name"
                className="
                  w-full
                  rounded-xl
                  border
                  border-cyan-500/20
                  bg-black/30
                  p-4
                  outline-none
                "
              />

              <input
                name="githubUrl"
                placeholder="GitHub Repository URL"
                className="
                  w-full
                  rounded-xl
                  border
                  border-cyan-500/20
                  bg-black/30
                  p-4
                  outline-none
                "
              />

              <button
                className="
                  w-full
                  rounded-xl
                  bg-cyan-500
                  py-4
                  font-bold
                  text-black
                "
              >
                Create
              </button>

            </form>

          </div>
        </div>
      )}
    </>
  );
}