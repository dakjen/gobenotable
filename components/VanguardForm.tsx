"use client";
import { useState } from "react";

export default function VanguardForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const f = "bg-white border border-navywarm text-ink font-sans text-[13px] font-light px-4 py-3.5 outline-none transition-all duration-200 focus:border-navy w-full resize-none appearance-none placeholder:text-[#ccd0e0]";
  const l = "text-[10px] font-semibold tracking-[3px] uppercase text-mauve";

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/vanguard", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: data.get("firstName"),
          lastName: data.get("lastName"),
          email: data.get("email"),
          phone: data.get("phone"),
          company: data.get("company"),
          industry: data.get("industry"),
          workImpact: data.get("workImpact"),
          bringsOthers: data.get("bringsOthers"),
          linkedin: data.get("linkedin"),
          website: data.get("website"),
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
        <div className="flex flex-col gap-2"><label className={l}>Phone</label><input name="phone" type="tel" placeholder="(000) 000-0000" className={f} /></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-2"><label className={l}>Company / Organization</label><input name="company" type="text" placeholder="Your company" className={f} /></div>
        <div className="flex flex-col gap-2"><label className={l}>Industry</label><input name="industry" type="text" placeholder="Your field" className={f} /></div>
      </div>
      <div className="flex flex-col gap-2">
        <label className={l}>Tell Us About Your Work &amp; Impact</label>
        <textarea name="workImpact" rows={5} placeholder="What have you built? Who are you impacting? Be specific — this is your first impression." required className={f} />
      </div>
      <div className="flex flex-col gap-2">
        <label className={l}>How Do You Bring Others With You?</label>
        <p className="text-[11px] font-light text-[#999] -mt-1">Give us 2 specific, measurable examples of people you&apos;ve lifted — names, outcomes, and how you made it happen.</p>
        <textarea name="bringsOthers" rows={5} placeholder="Example 1: I mentored [Name] through [specific situation] — they went on to [measurable outcome].&#10;Example 2: I brought [Name] into [opportunity] which led to [result]." required className={f} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-2">
          <label className={l}>LinkedIn Profile URL</label>
          <input name="linkedin" type="url" placeholder="https://linkedin.com/in/yourprofile" className={f} />
        </div>
        <div className="flex flex-col gap-2">
          <label className={l}>Website URL</label>
          <input name="website" type="url" placeholder="https://yourwebsite.com" className={f} />
        </div>
      </div>
      <div className="flex items-center gap-5 flex-wrap pt-1">
        {!submitted ? (
          <button type="submit" disabled={submitting} className="bg-navy text-white text-[10px] font-semibold tracking-[2.5px] uppercase px-7 py-3.5 hover:bg-navy2 transition-colors duration-200 cursor-pointer border-none">
            {submitting ? "Submitting..." : "Submit My Application"}
          </button>
        ) : (
          <div className="flex items-center gap-3 flex-wrap">
            <div className="bg-[#152a52] text-white text-[10px] font-semibold tracking-[2.5px] uppercase px-7 py-3.5">Application Submitted ✓</div>
            <p className="text-[12px] font-light text-navy italic">We&apos;ll review it personally and be in touch if you qualify.</p>
          </div>
        )}
      </div>
      <p className="text-[11px] font-light text-[#aaa] leading-[1.7]">We review every submission personally. Applications are confidential.</p>
    </form>
  );
}
