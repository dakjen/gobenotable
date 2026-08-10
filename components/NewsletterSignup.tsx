"use client";

import { useState } from "react";
import HoneypotFields from "@/components/HoneypotFields";
import { getAttribution } from "@/lib/attribution";

type Props = {
  /** "dark" for the footer and ink sections, "light" for bone/white bands. */
  tone?: "dark" | "light";
  /** Recorded on the Brevo contact so list growth can be attributed. */
  source?: string;
};

export default function NewsletterSignup({ tone = "dark", source = "site" }: Props) {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [message, setMessage] = useState("");

  const dark = tone === "dark";

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const data = new FormData(e.currentTarget);

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: data.get("email"),
          firstName: data.get("firstName"),
          company_website: data.get("company_website"),
          attribution: getAttribution(),
          rendered_at: data.get("rendered_at"),
          source,
        }),
      });
      if (!res.ok) throw new Error();
      setStatus("done");
      setMessage("You're on the list. Check your inbox.");
    } catch {
      setStatus("error");
      setMessage("That didn't go through. Try again, or email admin@gobenotable.com.");
    }
  }

  if (status === "done") {
    return (
      <p className={`text-[13px] font-light leading-[1.7] ${dark ? "text-[#aaa]" : "text-[#333]"}`}>
        <span className="text-crimson font-semibold">✓</span> {message}
      </p>
    );
  }

  const field = dark
    ? "bg-[#161616] border border-[#2a2a2a] text-white placeholder:text-[#666] focus:border-crimson"
    : "bg-white border border-warm text-ink placeholder:text-[#bbb] focus:border-crimson";

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <HoneypotFields />
      <div className="flex flex-col sm:flex-row gap-2">
        <input
          name="firstName"
          type="text"
          placeholder="First name"
          aria-label="First name"
          className={`${field} font-sans text-[13px] font-light px-4 py-3 outline-none transition-colors duration-200 sm:w-[130px] flex-shrink-0`}
        />
        <input
          name="email"
          type="email"
          required
          placeholder="your@email.com"
          aria-label="Email address"
          className={`${field} font-sans text-[13px] font-light px-4 py-3 outline-none transition-colors duration-200 flex-1 min-w-0`}
        />
        <button
          type="submit"
          disabled={status === "sending"}
          className="bg-crimson text-white text-[10px] font-semibold tracking-[2.5px] uppercase px-6 py-3 hover:bg-crimson2 transition-colors duration-200 cursor-pointer border-none disabled:opacity-60 flex-shrink-0"
        >
          {status === "sending" ? "…" : "Join"}
        </button>
      </div>
      {status === "error" && <p className="text-[11px] text-crimson mt-2">{message}</p>}
      <p className={`text-[10px] font-light mt-2.5 leading-[1.6] ${dark ? "text-[#666]" : "text-mid"}`}>
        Occasional notes on getting seen, and first word on new Intensive dates. Unsubscribe any time.
      </p>
    </form>
  );
}
