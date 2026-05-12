"use client";

import { useState } from "react";

type State = "idle" | "loading" | "success" | "error";

const FOCUS = ["AI", "Web3", "Both"];

export default function BuilderSignup() {
  const [state, setState] = useState<State>("idle");
  const [form, setForm] = useState({ email: "", telegram: "", country: "", primaryFocus: "" });

  function set(field: string, value: string) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.email) return;
    setState("loading");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
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

  const inputClass = "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-white/25 transition-colors";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full max-w-sm">
      <input
        type="email"
        placeholder="Email *"
        value={form.email}
        onChange={(e) => set("email", e.target.value)}
        required
        className={inputClass}
      />
      <input
        type="text"
        placeholder="Telegram — how we reach you about events"
        value={form.telegram}
        onChange={(e) => set("telegram", e.target.value)}
        className={inputClass}
      />
      <div className="grid grid-cols-2 gap-3">
        <input
          type="text"
          placeholder="Country"
          value={form.country}
          onChange={(e) => set("country", e.target.value)}
          className={inputClass}
        />
        <select
          value={form.primaryFocus}
          onChange={(e) => set("primaryFocus", e.target.value)}
          className={`${inputClass} appearance-none`}
        >
          <option value="" disabled>AI / Web3</option>
          {FOCUS.map((f) => <option key={f} value={f}>{f}</option>)}
        </select>
      </div>
      <button
        type="submit"
        disabled={state === "loading" || !form.email}
        className="w-full bg-white text-black py-2.5 rounded-xl text-sm font-medium hover:bg-zinc-200 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
      >
        {state === "loading" ? "Joining..." : "Join the Builder Network"}
      </button>
      {state === "error" && (
        <p className="text-xs text-red-400">Something went wrong — email us at hello@021lab.xyz</p>
      )}
    </form>
  );
}
