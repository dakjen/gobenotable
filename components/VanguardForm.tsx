"use client";
import { useState } from "react";

export default function VanguardForm() {
  const [submitted, setSubmitted] = useState(false);
  const f = "bg-white border border-navywarm text-ink font-sans text-[13px] font-light px-4 py-3.5 outline-none transition-all duration-200 focus:border-navy w-full resize-none appearance-none placeholder:text-[#ccd0e0]";
  const l = "text-[10px] font-semibold tracking-[3px] uppercase text-mauve";

  return (
    <form className="flex flex-col gap-4" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-2"><label className={l}>First Name</label><input type="text" placeholder="First name" required className={f} /></div>
        <div className="flex flex-col gap-2"><label className={l}>Last Name</label><input type="text" placeholder="Last name" required className={f} /></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-2"><label className={l}>Email Address</label><input type="email" placeholder="your@email.com" required className={f} /></div>
        <div className="flex flex-col gap-2"><label className={l}>Phone</label><input type="tel" placeholder="(000) 000-0000" className={f} /></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-2"><label className={l}>Company / Organization</label><input type="text" placeholder="Your company" className={f} /></div>
        <div className="flex flex-col gap-2"><label className={l}>Industry</label><input type="text" placeholder="Your field" className={f} /></div>
      </div>
      <div className="flex flex-col gap-2">
        <label className={l}>Tell Us About Your Work &amp; Impact</label>
        <textarea rows={5} placeholder="What have you built? Who are you impacting? Be specific — this is your first impression." required className={f} />
      </div>
      <div className="flex flex-col gap-2">
        <label className={l}>How Do You Bring Others With You?</label>
        <textarea rows={4} placeholder="Tell us how you actively lift others. Concrete examples matter." className={f} />
      </div>
      <div className="flex flex-col gap-2">
        <label className={l}>LinkedIn Profile URL</label>
        <input type="url" placeholder="https://linkedin.com/in/yourprofile" className={f} />
      </div>
      <div className="flex items-center gap-5 flex-wrap pt-1">
        {!submitted ? (
          <button type="submit" className="bg-navy text-white text-[10px] font-semibold tracking-[2.5px] uppercase px-7 py-3.5 hover:bg-navy2 transition-colors duration-200 cursor-pointer border-none">
            Submit My Application
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
