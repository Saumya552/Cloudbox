"use client";

import { signIn } from "next-auth/react";

export default function LoginPage() {
  async function handleLogin(formData: FormData) {
    await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      callbackUrl: "/dashboard",
    });
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="w-full max-w-md border border-purple-500/30 bg-white/5 backdrop-blur-xl rounded-2xl p-8">
        <h1 className="text-4xl font-bold text-purple-400 mb-6">
          Login
        </h1>

        <form action={handleLogin} className="space-y-4">
          <input
            name="email"
            placeholder="Email"
            className="w-full p-3 rounded-lg bg-black/40 border border-purple-500/20"
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded-lg bg-black/40 border border-purple-500/20"
          />

          <button className="w-full p-3 rounded-lg bg-purple-500 text-black font-bold">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}