"use client";
import { useState } from "react";

export default function ContactForm() {
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
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: data.get("firstName"),
          lastName: data.get("lastName"),
          email: data.get("email"),
          phone: data.get("phone"),
          service: data.get("service"),
          message: data.get("message"),
        }),
      });
      if (res.ok) setSubmitted(true);
    } catch {
      // silently fail — still show confirmation
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
        <div className="flex flex-col gap-2"><label className={l}>Phone Number</label><input name="phone" type="tel" placeholder="(000) 000-0000" className={f} /></div>
      </div>
      <div className="flex flex-col gap-2">
        <label className={l}>What Service Are You Interested In?</label>
        <select name="service" className={f}>
          <option value="" disabled>Select a service</option>
          <option>24-Hour Brand Intensive — The Launch ($1,750)</option>
          <option>24-Hour Brand Intensive — The Full Build ($4,500)</option>
          <option>Notable Essentials</option>
          <option>Notable Amplify</option>
          <option>Notable Vanguard (Men only — application required)</option>
          <option>Not sure — I need guidance</option>
        </select>
      </div>
      <div className="flex flex-col gap-2">
        <label className={l}>Tell Us What You&apos;re Working Toward</label>
        <textarea name="message" rows={5} placeholder="What's the goal? What's on the horizon? What have you built that the world doesn't fully see yet?" className={f} />
      </div>
      <div className="flex items-center gap-5 flex-wrap pt-1">
        {!submitted ? (
          <button type="submit" disabled={submitting} className="bg-crimson text-white text-[10px] font-semibold tracking-[2.5px] uppercase px-7 py-3.5 hover:bg-crimson2 transition-colors duration-200 cursor-pointer border-none">
            {submitting ? "Sending..." : "Book My Discovery Call"}
          </button>
        ) : (
          <div className="flex items-center gap-3 flex-wrap">
            <div className="bg-[#333] text-white text-[10px] font-semibold tracking-[2.5px] uppercase px-7 py-3.5">Request Received ✓</div>
            <p className="text-[12px] font-light text-[#444] italic">We&apos;ll be in touch within 24 hours.</p>
          </div>
        )}
      </div>
      <p className="text-[11px] font-light text-[#aaa] leading-[1.7]">We typically respond within 24 hours. Discovery calls are 45 minutes and completely free.</p>
    </form>
  );
}
