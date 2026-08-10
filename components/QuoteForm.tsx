"use client";

import { useState } from "react";
import HoneypotFields from "@/components/HoneypotFields";
import { getAttribution } from "@/lib/attribution";
import { collateralGroups, intensives } from "@/lib/collateral";

const inputClass =
  "bg-white border border-warm text-ink font-sans text-[13px] font-light px-4 py-3.5 outline-none focus:border-crimson w-full";
const labelClass =
  "block text-[9px] font-semibold tracking-[2.5px] uppercase text-mauve mb-2";

export default function QuoteForm() {
  const [selected, setSelected] = useState<string[]>([]);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");

  function toggle(id: string) {
    setSelected((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (selected.length === 0) {
      setError("Pick at least one item you'd like quoted.");
      return;
    }
    setStatus("sending");
    setError("");

    const data = new FormData(e.currentTarget);
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          company_website: data.get("company_website"),
          attribution: getAttribution(),
          rendered_at: data.get("rendered_at"),
          firstName: data.get("firstName"),
          lastName: data.get("lastName"),
          email: data.get("email"),
          phone: data.get("phone"),
          company: data.get("company"),
          website: data.get("website"),
          timeline: data.get("timeline"),
          budget: data.get("budget"),
          details: data.get("details"),
          items: selected,
        }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
    } catch {
      setStatus("error");
      setError("Something went wrong. Email admin@gobenotable.com and we'll pick it up from there.");
    }
  }

  if (status === "sent") {
    return (
      <div className="bg-white border border-warm p-9">
        <div className="text-[9px] font-semibold tracking-[3px] uppercase text-crimson mb-3">Request Received</div>
        <h3 className="font-display font-bold text-ink text-[26px] mb-3 leading-[1.15]">
          We&apos;re on it.
        </h3>
        <div className="w-8 h-0.5 bg-crimson mb-5" />
        <p className="text-[14px] font-light text-[#333] leading-[1.85] mb-3">
          Your quote request is in. We&apos;ll come back within one business day with a written
          quote covering everything you selected — scope, price, and turnaround, itemized.
        </p>
        <p className="text-[14px] font-light text-[#333] leading-[1.85]">
          Check your inbox for a confirmation listing what you asked us to price.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-warm p-7 md:p-9">
      <HoneypotFields />
      {/* Pick what you want quoted */}
      <div className="mb-8">
        <div className={labelClass}>What would you like quoted?</div>
        <p className="text-[12px] font-light text-[#666] leading-[1.7] mb-5">
          Select as many as you need. Prices shown are starting points — your quote confirms
          the final scope.
        </p>

        {[...collateralGroups, { heading: "Standalone intensives", note: "", items: intensives }].map((group) => (
          <fieldset key={group.heading} className="mb-6 last:mb-0 border-none p-0 m-0">
            <legend className="text-[11px] font-semibold tracking-[1.5px] uppercase text-ink pb-2 mb-1 w-full border-b border-warm">
              {group.heading}
              {group.note && <span className="font-light italic tracking-normal normal-case text-mid"> · {group.note}</span>}
            </legend>
            {group.items.map((item) => {
              const checked = selected.includes(item.id);
              return (
                <label
                  key={item.id}
                  className={`flex items-start gap-3 py-3 border-b border-warm cursor-pointer transition-colors duration-150 ${
                    checked ? "bg-bone" : "hover:bg-bone/60"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => toggle(item.id)}
                    className="mt-1 accent-crimson w-4 h-4 flex-shrink-0 cursor-pointer"
                  />
                  <span className="flex-1 min-w-0">
                    <span className="block text-[13px] font-semibold text-ink leading-[1.4]">{item.item}</span>
                    <span className="block text-[12px] font-light text-[#666] leading-[1.55]">{item.scope}</span>
                  </span>
                  <span className="text-[14px] font-bold text-crimson whitespace-nowrap pl-2">{item.price}</span>
                </label>
              );
            })}
          </fieldset>
        ))}

        <div className="mt-4 text-[12px] font-light text-mid">
          {selected.length === 0
            ? "Nothing selected yet."
            : `${selected.length} item${selected.length === 1 ? "" : "s"} selected.`}
        </div>
      </div>

      {/* Who you are */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className={labelClass} htmlFor="firstName">First Name *</label>
          <input id="firstName" name="firstName" required className={inputClass} />
        </div>
        <div>
          <label className={labelClass} htmlFor="lastName">Last Name *</label>
          <input id="lastName" name="lastName" required className={inputClass} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className={labelClass} htmlFor="email">Email *</label>
          <input id="email" name="email" type="email" required className={inputClass} />
        </div>
        <div>
          <label className={labelClass} htmlFor="phone">Phone</label>
          <input id="phone" name="phone" type="tel" className={inputClass} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className={labelClass} htmlFor="company">Company</label>
          <input id="company" name="company" className={inputClass} />
        </div>
        <div>
          <label className={labelClass} htmlFor="website">Website</label>
          <input id="website" name="website" placeholder="https://" className={inputClass} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className={labelClass} htmlFor="timeline">When do you need it?</label>
          <select id="timeline" name="timeline" defaultValue="" className={`${inputClass} cursor-pointer`}>
            <option value="">Select a timeline</option>
            <option>As soon as possible</option>
            <option>Within 2 weeks</option>
            <option>Within a month</option>
            <option>Next quarter</option>
            <option>Just exploring</option>
          </select>
        </div>
        <div>
          <label className={labelClass} htmlFor="budget">Budget range</label>
          <select id="budget" name="budget" defaultValue="" className={`${inputClass} cursor-pointer`}>
            <option value="">Prefer not to say</option>
            <option>Under $1,000</option>
            <option>$1,000–$2,500</option>
            <option>$2,500–$5,000</option>
            <option>$5,000+</option>
          </select>
        </div>
      </div>

      <div className="mb-6">
        <label className={labelClass} htmlFor="details">Anything we should know?</label>
        <textarea
          id="details"
          name="details"
          rows={4}
          placeholder="What the materials are for, who they're going to, anything you already have."
          className={`${inputClass} resize-y`}
        />
      </div>

      {error && <p className="text-[12px] text-crimson mb-4">{error}</p>}

      <button
        type="submit"
        disabled={status === "sending"}
        className="bg-crimson text-white text-[10px] font-semibold tracking-[2.5px] uppercase px-8 py-4 hover:bg-crimson2 transition-colors duration-200 cursor-pointer border-none w-full disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Request My Quote"}
      </button>

      <p className="text-[11px] font-light text-mid leading-[1.7] mt-4">
        No obligation. We reply within one business day with an itemized quote.
      </p>
    </form>
  );
}
