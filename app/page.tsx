import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section className="bg-ink min-h-[60vh] flex items-center justify-center px-6 md:px-16 py-14 relative overflow-hidden mt-[36px]">
        {/* Background image */}
        <Image src="/images/hero-silhouette.jpg" alt="" fill className="object-cover object-center opacity-[0.55] pointer-events-none" sizes="100vw" />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-ink/40 pointer-events-none" />

        <div className="relative z-10 max-w-3xl">
          <div className="flex items-center gap-3 mb-7">
            <span className="block w-6 h-px bg-crimson" />
            <span className="text-[10px] font-medium tracking-[4px] uppercase text-crimson">
              Notable · by DakJen Creative LLC
            </span>
          </div>

          <h1 className="font-display font-black text-white leading-[1.0] tracking-[-2px] mb-3 fade-up-delay-1"
            style={{ fontSize: "clamp(52px, 8vw, 88px)" }}>
            Go Be<br />
            <em className="font-display font-normal italic text-crimson">Notable.</em>
          </h1>
          <p className="font-sans font-light text-[#999] tracking-wide text-lg mb-7 fade-up-delay-2">
            We&apos;ll Do The Rest.
          </p>

          <p className="font-sans font-light text-[#aaa] leading-[1.85] max-w-[480px] mb-9 text-[15px] fade-up-delay-3">
            For high-performing women founders and executives who are done being
            the best-kept secret in their industry. We build the brand, the
            platform, and the revenue streams that make you impossible to overlook.
          </p>

          <div className="flex gap-3 flex-wrap mb-12 fade-up-delay-4">
            <Link href="/contact"
              className="bg-crimson text-white text-[10px] font-semibold tracking-[2.5px] uppercase px-7 py-3.5 no-underline hover:bg-crimson2 transition-colors duration-200">
              Book a Discovery Call
            </Link>
            <Link href="/essentials"
              className="bg-transparent border border-[#333] text-[#999] text-[10px] font-semibold tracking-[2.5px] uppercase px-7 py-3.5 no-underline hover:border-[#666] hover:text-white transition-colors duration-200">
              See Services
            </Link>
          </div>

          <div className="flex gap-8 md:gap-12 flex-wrap">
            {[
              { n: "$1K",  l: "Starting Point" },
              { n: "6–8", l: "Week Amplify Build" },
              { n: "3",   l: "Service Tiers" },
            ].map((s) => (
              <div key={s.l} className="border-l-2 border-crimson pl-4">
                <div className="font-display font-bold text-white text-[28px] leading-none">{s.n}</div>
                <div className="text-[10px] font-medium tracking-[2.5px] uppercase text-[#888] mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 24-HOUR BRAND INTENSIVE — LIMITED TIME PROMO */}
      <section className="relative bg-ink py-10 md:py-12 px-6 md:px-16 overflow-hidden border-t border-b border-crimson/30">
        <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-10 md:gap-14 items-start">
          {/* Left — Headline & CTA */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block bg-crimson text-white text-[9px] font-bold tracking-[3px] uppercase px-3 py-1">
                Limited Availability
              </span>
              <span className="text-[10px] font-medium tracking-[3px] uppercase text-crimson/70">
                2 / Month
              </span>
            </div>

            <h2 className="font-display font-black text-white leading-[1.05] tracking-[-1.5px] mb-2"
              style={{ fontSize: "clamp(26px,4vw,42px)" }}>
              The 24-Hour <em className="font-display font-normal italic text-crimson">Brand Intensive.</em>
            </h2>
            <p className="font-sans font-light text-[#777] tracking-wide text-[14px] mb-4">
              Give Us 24 Hours. Walk Away With Your Brand.
            </p>
            <div className="w-7 h-[1.5px] bg-crimson mb-4" />
            <p className="text-[12px] font-light text-[#999] leading-[1.85] mb-6">
              A focused, high-output engagement for women founders who are done waiting. Book your day, show up for a 1-hour kickoff, and walk away 24 hours later with everything built and ready to use.
            </p>

            {/* How It Works — inline */}
            <div className="grid grid-cols-2 gap-x-5 gap-y-3 mb-6">
              {[
                { step: "01", title: "Book Your Date" },
                { step: "02", title: "Kickoff Call" },
                { step: "03", title: "We Build" },
                { step: "04", title: "Review & Launch" },
              ].map((s) => (
                <div key={s.step} className="flex items-center gap-2">
                  <span className="font-display font-normal italic text-crimson/40 text-[18px] leading-none">{s.step}</span>
                  <span className="text-[10px] font-semibold text-white tracking-wide">{s.title}</span>
                </div>
              ))}
            </div>

            <div className="flex gap-3 flex-wrap items-center">
              <Link href="/intensive"
                className="bg-crimson text-white text-[10px] font-semibold tracking-[2.5px] uppercase px-7 py-3.5 no-underline hover:bg-crimson2 transition-colors duration-200">
                Book Your Intensive
              </Link>
              <span className="text-[10px] font-light text-[#555]">
                50% deposit to reserve
              </span>
            </div>
          </div>

          {/* Right — Two Tier Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-[2px]">
            {/* Tier 1 */}
            <div className="bg-[#1a1a1a] p-5 md:p-6 flex flex-col">
              <div className="text-[9px] font-semibold tracking-[3px] uppercase text-mauve mb-1.5">Tier 1</div>
              <div className="font-display font-bold text-white text-[18px] leading-tight mb-0.5">The Launch</div>
              <div className="text-[22px] font-bold text-crimson mb-2">$1,750</div>
              <div className="w-5 h-[1.5px] bg-crimson mb-3" />
              <ul className="space-y-1.5 flex-1">
                {[
                  "Website (1–4 pages, live)",
                  "2–4 Branded Templates",
                  "30 Days LinkedIn Content",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-crimson text-xs mt-0.5 flex-shrink-0">✓</span>
                    <span className="text-[11px] font-light text-[#aaa] leading-[1.6]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tier 2 */}
            <div className="bg-[#1a1a1a] p-5 md:p-6 flex flex-col relative">
              <div className="absolute top-0 right-0 bg-crimson text-white text-[7px] font-semibold tracking-[2px] uppercase px-2.5 py-1">
                Full Build
              </div>
              <div className="text-[9px] font-semibold tracking-[3px] uppercase text-mauve mb-1.5">Tier 2</div>
              <div className="font-display font-bold text-white text-[18px] leading-tight mb-0.5">The Full Build</div>
              <div className="text-[22px] font-bold text-crimson mb-2">$4,500</div>
              <div className="w-5 h-[1.5px] bg-crimson mb-3" />
              <ul className="space-y-1.5 flex-1">
                {[
                  "Everything in The Launch",
                  "3 Brand Deliverables",
                  "90-Day Marketing Plan",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-crimson text-xs mt-0.5 flex-shrink-0">✓</span>
                    <span className="text-[11px] font-light text-[#aaa] leading-[1.6]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IS NOTABLE */}
      <section className="bg-white py-14 md:py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[1.15fr_1fr] gap-16 md:gap-20">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <span className="block w-4 h-px bg-crimson" />
              <span className="text-[10px] font-semibold tracking-[4px] uppercase text-crimson">What Is Notable</span>
            </div>
            <h2 className="font-display font-bold text-ink leading-[1.1] tracking-[-0.5px] mb-0"
              style={{ fontSize: "clamp(30px,4vw,48px)" }}>
              Brand. Platform.<br /><em className="font-display font-normal italic text-crimson">Revenue.</em>
            </h2>
            <div className="w-8 h-0.5 bg-crimson my-5" />
            <p className="text-[14px] font-light text-[#333] leading-[1.9] mb-4">
              Notable exists at the intersection of brand, platform, and revenue.
              We work with women solopreneurs and business owners who have done
              the work, built the reputation, and earned the credibility — but
              haven&apos;t yet built the platform that reflects how far they&apos;ve come.
            </p>
            <p className="text-[15px] font-normal text-ink leading-[1.9] mb-8">
              Most branding agencies will make you look good. Notable makes you{" "}
              <em className="italic text-crimson">impossible to overlook.</em>
            </p>
            <Link href="/about"
              className="bg-transparent border border-warm text-ink text-[10px] font-semibold tracking-[2.5px] uppercase px-7 py-3.5 no-underline hover:bg-ink hover:text-white hover:border-ink transition-colors duration-200">
              Our Story
            </Link>
          </div>

          <div>
            {/* Image */}
            <div className="relative w-full aspect-[4/3] mb-8 overflow-hidden">
              <Image src="/images/working-laptop.jpg" alt="Woman founder working on laptop" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
            {/* Pull quote */}
            <div className="relative bg-bone p-6 pl-7 mb-8">
              <span className="absolute top-[-8px] left-4 font-display text-[72px] text-crimson leading-none opacity-20 select-none">&ldquo;</span>
              <p className="font-display italic text-[17px] text-ink leading-[1.65] relative z-10">
                &ldquo;Notable is not a vendor relationship. It is a growth partnership —
                from your first brand asset to your first course launch to your
                first fireside chat series.&rdquo;
              </p>
              <div className="text-[10px] font-semibold tracking-[3px] uppercase text-mauve mt-3">
                Notable · DakJen Creative LLC
              </div>
            </div>

            {/* Diff list */}
            <div className="flex flex-col">
              {[
                { n: "01", t: "We Execute, Not Just Advise", b: "You leave with deliverables in hand — not a deck full of ideas." },
                { n: "02", t: "We Find the Revenue You're Sitting On", b: "We identify monetizable opportunities you've been too close to see." },
                { n: "03", t: "Built for One Client", b: "The high-performing woman founder. We know her challenges and what it takes to get her seen." },
              ].map((d) => (
                <div key={d.n} className="flex gap-5 items-start py-5 border-b border-warm first:border-t">
                  <span className="font-display font-normal italic text-mid text-[30px] leading-none w-10 flex-shrink-0 pt-0.5">{d.n}</span>
                  <div>
                    <div className="text-[13px] font-semibold text-ink mb-1">{d.t}</div>
                    <div className="text-[12px] font-light text-[#444] leading-[1.75]">{d.b}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="bg-bone pt-12 md:pt-16 px-6 md:px-16 pb-0">
        <div className="max-w-6xl mx-auto pb-10">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="block w-4 h-px bg-crimson" />
            <span className="text-[10px] font-semibold tracking-[4px] uppercase text-crimson">Services</span>
          </div>
          <h2 className="font-display font-bold text-ink leading-[1.1] tracking-[-0.5px] mb-3"
            style={{ fontSize: "clamp(30px,4vw,48px)" }}>
            Three Tiers. <em className="font-display font-normal italic text-crimson">One Journey.</em>
          </h2>
          <p className="text-[14px] font-light text-[#444] max-w-[480px] leading-[1.85]">
            Enter where you are. Grow into what&apos;s next. Every tier leads naturally to the one that follows.
          </p>
        </div>
      </section>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[2px] bg-warm">
        {[
          {
            tag: "Tier 1 · Brand Foundation",
            name: "Notable Essentials",
            price: "From $1,000",
            note: "Ready 2 Roll · Get Loud · Marquis",
            desc: "Qualifications packages, decks, and websites that make you look the part from day one.",
            href: "/essentials",
            cta: "View Packages",
            dark: false,
            flagship: false,
          },
          {
            tag: "Tier 2 · Platform Buildout",
            name: "Notable Amplify",
            price: "From $4,000",
            note: "Custom-scoped per engagement · 6–8 weeks",
            desc: "Platform and revenue stream buildout — courses, books, LinkedIn, speaking series — fully executed.",
            href: "/amplify",
            cta: "Learn About Amplify",
            dark: true,
            flagship: true,
          },
          {
            tag: "Tier 3 · Ongoing Retainer",
            name: "Amplify+ Ongoing",
            price: "$3,000–$5,000",
            note: "Per month · 3-month minimum",
            desc: "Monthly platform management so your brand never falls behind your ambition.",
            href: "/contact",
            cta: "Let's Talk",
            dark: false,
            flagship: false,
          },
        ].map((t) => (
          <div key={t.name}
            className={`relative flex flex-col p-9 md:p-11 group transition-colors duration-200 ${
              t.dark
                ? "bg-ink hover:bg-[#111]"
                : "bg-bone hover:bg-white"
            }`}>
            {t.flagship && (
              <div className="absolute top-0 right-0 bg-crimson text-white text-[8px] font-semibold tracking-[2px] uppercase px-3.5 py-1.5">
                Flagship
              </div>
            )}
            <div className={`text-[9px] font-semibold tracking-[3px] uppercase mb-2.5 ${t.dark ? "text-mauve" : "text-mauve"}`}>
              {t.tag}
            </div>
            <div className={`font-display font-bold text-[24px] leading-[1.1] mb-4 ${t.dark ? "text-white" : "text-ink"}`}>
              {t.name}
            </div>
            <div className={`w-7 h-[1.5px] bg-crimson mb-5`} />
            <p className={`text-[13px] font-light leading-[1.85] mb-6 flex-1 ${t.dark ? "text-[#888]" : "text-[#444]"}`}>
              {t.desc}
            </p>
            <div className={`text-[26px] font-bold mb-1 ${t.dark ? "text-white" : "text-crimson"}`}>
              {t.price}
            </div>
            <div className={`text-[10px] mb-7 ${t.dark ? "text-[#888]" : "text-mid"}`}>
              {t.note}
            </div>
            <Link href={t.href}
              className={`self-start text-[10px] font-semibold tracking-[2.5px] uppercase px-6 py-3 no-underline transition-colors duration-200 ${
                t.dark
                  ? "bg-crimson text-white hover:bg-crimson2"
                  : "bg-transparent border border-warm text-ink hover:bg-ink hover:text-white hover:border-ink"
              }`}>
              {t.cta}
            </Link>
          </div>
        ))}
      </div>

      {/* CLIENT JOURNEY */}
      <section className="bg-ink py-14 md:py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <span className="block w-4 h-px bg-crimson" />
              <span className="text-[10px] font-semibold tracking-[4px] uppercase text-crimson">The Client Journey</span>
            </div>
            <h2 className="font-display font-black text-white leading-[1.05] tracking-[-1px]"
              style={{ fontSize: "clamp(32px,5vw,52px)" }}>
              She Comes for<br />a Qual Package.<br />
              <em className="font-display font-normal italic text-crimson">She Stays for<br />the Platform.</em>
            </h2>
            <div className="relative w-full aspect-[3/4] max-w-[320px] mt-10 overflow-hidden hidden md:block">
              <Image src="/images/confident-red.jpg" alt="Confident woman founder" fill className="object-cover" sizes="320px" />
            </div>
          </div>
          <div>
            {[
              "A founder enters with Ready 2 Roll — she needs a qual package before a pitch next month. We deliver it and she wins the contract.",
              "Six months later she's back: she wants to start posting on LinkedIn and she's been thinking about a course. That's a LinkedIn Voice Intensive and a Notable Amplify engagement.",
              "A year later, her platform is running, her course is live, and she wants ongoing support. That's Amplify+ Ongoing.",
            ].map((p, i) => (
              <p key={i} className="text-[14px] font-light text-[#333] leading-[1.9] mb-4">{p}</p>
            ))}
            <Link href="/contact"
              className="inline-block mt-2 bg-crimson text-white text-[10px] font-semibold tracking-[2.5px] uppercase px-7 py-3.5 no-underline hover:bg-crimson2 transition-colors duration-200">
              Start Your Journey
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="bg-crimson py-14 md:py-20 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span className="font-display font-black italic text-white opacity-[0.03] whitespace-nowrap"
            style={{ fontSize: "clamp(100px,18vw,200px)", letterSpacing: "-6px" }}>
            Notable
          </span>
        </div>
        <h2 className="font-display font-bold text-white leading-[1.1] mb-4 relative z-10"
          style={{ fontSize: "clamp(28px,4vw,48px)" }}>
          Ready to be{" "}
          <em className="font-display font-normal italic text-white/40">impossible to ignore?</em>
        </h2>
        <p className="text-[14px] font-light text-white/60 max-w-[420px] mx-auto mb-9 leading-[1.8] relative z-10">
          Book a discovery call. In 45 minutes we&apos;ll map out your platform and show you exactly what Notable can build for you.
        </p>
        <Link href="/contact"
          className="relative z-10 inline-block bg-white text-crimson text-[10px] font-semibold tracking-[2.5px] uppercase px-8 py-4 no-underline hover:bg-bone transition-colors duration-200">
          Book a Discovery Call
        </Link>
      </div>
    </div>
  );
}
