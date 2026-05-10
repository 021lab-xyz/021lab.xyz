"use client";

import { useState } from "react";

type State = "idle" | "loading" | "success" | "error";

export default function BuilderSignup() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [state, setState] = useState<State>("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setState("loading");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
      });
      setState(res.ok ? "success" : "error");
    } catch {
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <div className="flex items-center gap-2 text-sm text-green-400">
        <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        You&apos;re in. We&apos;ll be in touch.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full max-w-sm">
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-white/25 transition-colors"
      />
      <div className="flex gap-2">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-white/25 transition-colors"
        />
        <button
          type="submit"
          disabled={state === "loading" || !email}
          className="bg-white text-black px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-zinc-200 transition-colors disabled:opacity-40 disabled:cursor-not-allowed shrink-0"
        >
          {state === "loading" ? "..." : "Join"}
        </button>
      </div>
      {state === "error" && (
        <p className="text-xs text-red-400">Something went wrong — email us at hello@021lab.xyz</p>
      )}
    </form>
  );
}
