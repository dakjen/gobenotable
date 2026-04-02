"use client";
import { useState } from "react";

export default function IntensiveForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const f = "bg-white border border-warm text-ink font-sans text-[13px] font-light px-4 py-3.5 outline-none transition-all duration-200 focus:border-crimson w-full resize-none appearance-none placeholder:text-[#bbb]";
  const l = "text-[10px] font-semibold tracking-[3px] uppercase text-mauve";

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/intensive", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: data.get("firstName"),
          lastName: data.get("lastName"),
          email: data.get("email"),
          phone: data.get("phone"),
          company: data.get("company"),
          tier: data.get("tier"),
          preferredDate: data.get("preferredDate"),
          website: data.get("website"),
          businessDescription: data.get("businessDescription"),
          goals: data.get("goals"),
        }),
      });
      if (res.ok) setSubmitted(true);
    } catch {
      setSubmitted(true);
    }
    setSubmitting(false);
  }

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-2"><label className={l}>First Name</label><input name="firstName" type="text" placeholder="First name" required className={f} /></div>
        <div className="flex flex-col gap-2"><label className={l}>Last Name</label><input name="lastName" type="text" placeholder="Last name" required className={f} /></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-2"><label className={l}>Email Address</label><input name="email" type="email" placeholder="your@email.com" required className={f} /></div>
        <div className="flex flex-col gap-2"><label className={l}>Phone Number</label><input name="phone" type="tel" placeholder="(000) 000-0000" required className={f} /></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-2"><label className={l}>Company / Business Name</label><input name="company" type="text" placeholder="Your business name" required className={f} /></div>
        <div className="flex flex-col gap-2"><label className={l}>Current Website (If Any)</label><input name="website" type="url" placeholder="https://yoursite.com" className={f} /></div>
      </div>
      <div className="flex flex-col gap-2">
        <label className={l}>Which Tier Are You Interested In?</label>
        <select name="tier" required className={f}>
          <option value="" disabled selected>Select a tier</option>
          <option value="The Launch — $1,750">Tier 1 — The Launch ($1,750)</option>
          <option value="The Full Build — $4,500">Tier 2 — The Full Build ($4,500)</option>
          <option value="Not sure yet">Not sure yet — help me decide</option>
        </select>
      </div>
      <div className="flex flex-col gap-2">
        <label className={l}>Preferred Intensive Date</label>
        <input name="preferredDate" type="date" required className={f} />
        <p className="text-[11px] font-light text-[#999] -mt-1">We book 2 per month. We&apos;ll confirm availability after you submit.</p>
      </div>
      <div className="flex flex-col gap-2">
        <label className={l}>Tell Us About Your Business</label>
        <textarea name="businessDescription" rows={4} placeholder="What do you do? Who do you serve? How long have you been at it?" required className={f} />
      </div>
      <div className="flex flex-col gap-2">
        <label className={l}>What Are You Hoping to Walk Away With?</label>
        <textarea name="goals" rows={4} placeholder="What's the goal? A website? LinkedIn presence? Deliverables for an upcoming pitch? Tell us everything." required className={f} />
      </div>
      <div className="flex items-center gap-5 flex-wrap pt-1">
        {!submitted ? (
          <button type="submit" disabled={submitting} className="bg-crimson text-white text-[10px] font-semibold tracking-[2.5px] uppercase px-7 py-3.5 hover:bg-crimson2 transition-colors duration-200 cursor-pointer border-none">
            {submitting ? "Submitting..." : "Reserve My Intensive"}
          </button>
        ) : (
          <div className="flex items-center gap-3 flex-wrap">
            <div className="bg-[#333] text-white text-[10px] font-semibold tracking-[2.5px] uppercase px-7 py-3.5">Request Received ✓</div>
            <p className="text-[12px] font-light text-[#444] italic">We&apos;ll confirm your date within 24 hours.</p>
          </div>
        )}
      </div>
      <p className="text-[11px] font-light text-[#aaa] leading-[1.7]">50% deposit required to lock your date. Balance due the morning of your kickoff call.</p>
    </form>
  );
}
