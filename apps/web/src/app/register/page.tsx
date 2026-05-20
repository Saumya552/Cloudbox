"use client";

import { useState } from "react";
import { registerUser } from "@/features/auth/actions/register";

export default function RegisterPage() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(formData: FormData) {
    setLoading(true);

    try {
      await registerUser(
        formData.get("name") as string,
        formData.get("email") as string,
        formData.get("password") as string
      );

      alert("User created successfully!");
    } catch (error) {
      alert("Registration failed");
    }

    setLoading(false);
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="w-full max-w-md border border-cyan-500/30 bg-white/5 backdrop-blur-xl rounded-2xl p-8">
        <h1 className="text-4xl font-bold text-cyan-400 mb-6">
          CloudBox
        </h1>

        <form action={handleSubmit} className="space-y-4">
          <input
            name="name"
            placeholder="Name"
            className="w-full p-3 rounded-lg bg-black/40 border border-cyan-500/20"
          />

          <input
            name="email"
            placeholder="Email"
            type="email"
            className="w-full p-3 rounded-lg bg-black/40 border border-cyan-500/20"
          />

          <input
            name="password"
            placeholder="Password"
            type="password"
            className="w-full p-3 rounded-lg bg-black/40 border border-cyan-500/20"
          />

          <button
            disabled={loading}
            className="w-full p-3 rounded-lg bg-cyan-500 text-black font-bold"
          >
            {loading ? "Creating..." : "Create Account"}
          </button>
        </form>
      </div>
    </div>
  );
}