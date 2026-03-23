import Link from "next/link";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";

export const metadata = { title: "Notable Essentials — Brand Foundation Packages" };

const packages = [
  {
    tag: "Entry Level", name: "Ready 2 Roll", price: "$1,000", timeline: "Complete in 2–3 weeks",
    desc: "The entry-level package for founders who need a polished brand foundation quickly. Everything you need to show up professionally and start pitching.",
    includes: [
      "7-Page Qualifications Package with templates — Cover, TOC, About, Services, Founder page, and more",
      "Project Deck Template",
      "1-Page Website",
      "Wordsmithing and moderate editing throughout",
    ],
    best: "Best for founders who are just starting to pitch for contracts, partnerships, or clients and need a professional presence immediately.",
    dark: false, flagship: false,
  },
  {
    tag: "Mid-Tier", name: "Get Loud", price: "$1,750", timeline: "Complete in 3–4 weeks",
    desc: "The mid-tier package for founders who need a comprehensive brand toolkit — including a deeper qualifications package and a multi-page website.",
    includes: [
      "8–12 Page Qualifications Package with project profile templates — Cover, TOC, About, Services, Founder page, Resume, Previous Projects",
      "Project Deck Template with About and Founder pages completed",
      "2–4 Page Website",
      "$20/month ongoing website maintenance",
      "Wordsmithing and moderate editing throughout",
    ],
    best: "Best for founders actively pursuing government contracts, corporate partnerships, or investor conversations.",
    dark: true, flagship: true,
  },
  {
    tag: "Premium", name: "Marquis", price: "$3,000", timeline: "Complete in 4 weeks",
    desc: "The premium Essentials package. Everything, fully completed, with one year of website maintenance included.",
    includes: [
      "Full Qualifications Package — every section completed with all templates",
      "Full Presentation Deck with template slides",
      "2–4 Page Premium Website",
      "1 year of website maintenance included",
      "Wordsmithing and moderate editing throughout",
    ],
    best: "Best for founders who want the full brand toolkit done right, once, with ongoing support built in.",
    dark: false, flagship: false,
  },
];

const compare = [
  { name: "Ready 2 Roll", qual: "7 pages", site: "1-page", deck: "Template", maint: "—", time: "2–3 weeks", price: "$1,000" },
  { name: "Get Loud",     qual: "8–12 pages", site: "2–4 page", deck: "Template + completed", maint: "$20/mo", time: "3–4 weeks", price: "$1,750" },
  { name: "Marquis",      qual: "Full + all templates", site: "2–4 page premium", deck: "Full deck", maint: "1 year included", time: "4 weeks", price: "$3,000" },
];

export default function Essentials() {
  return (
    <div>
      <PageHero
        eyebrow="Tier 1 · Brand Foundation"
        title={<>Notable <em className="font-display font-normal italic text-crimson">Essentials</em></>}
        subtitle="Look the part. Walk into any room ready. Brand foundation packages that establish credibility, communicate value, and make it possible to pitch, present, and win. Starting at $1,000."
      />

      {/* INTRO */}
      <section className="bg-white py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <span className="block w-4 h-px bg-crimson" />
              <span className="text-[10px] font-semibold tracking-[4px] uppercase text-crimson">What Essentials Does</span>
            </div>
            <h2 className="font-display font-bold text-ink leading-[1.1] tracking-[-0.5px]" style={{ fontSize:"clamp(28px,3.5vw,44px)" }}>
              The Tools That Make You Look <em className="font-display font-normal italic text-crimson">The Part</em>
            </h2>
            <div className="w-8 h-0.5 bg-crimson my-5" />
            <p className="text-[14px] font-light text-[#555] leading-[1.9] mb-4">
              Notable Essentials is the brand foundation every founder needs before she can grow. These are the tools that establish credibility, communicate value, and make it possible to pitch, present, and win — consistently and professionally.
            </p>
            <p className="text-[14px] font-light text-[#555] leading-[1.9]">
              You bring the vision. We build the assets that make it real. All packages include wordsmithing and moderate editing throughout.
            </p>
          </div>
          <div className="relative bg-bone p-6 pl-7 self-start">
            <span className="absolute top-[-8px] left-4 font-display text-[72px] text-crimson leading-none opacity-20 select-none">&ldquo;</span>
            <p className="font-display italic text-[17px] text-ink leading-[1.65] relative z-10">
              &ldquo;She comes to Notable for a qual package. We build it, she wins the contract. Six months later she&apos;s back for her LinkedIn and a course. That is the Notable outcome.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section className="bg-bone pt-16 px-6 md:px-16 pb-0">
        <div className="max-w-6xl mx-auto pb-10">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="block w-4 h-px bg-crimson" />
            <span className="text-[10px] font-semibold tracking-[4px] uppercase text-crimson">Packages</span>
          </div>
          <h2 className="font-display font-bold text-ink leading-[1.1] tracking-[-0.5px]" style={{ fontSize:"clamp(28px,3.5vw,44px)" }}>
            Choose Your <em className="font-display font-normal italic text-crimson">Starting Point</em>
          </h2>
        </div>
      </section>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[2px] bg-warm">
        {packages.map((pkg) => (
          <div key={pkg.name}
            className={`relative flex flex-col p-9 md:p-11 ${pkg.dark ? "bg-ink" : "bg-bone"}`}>
            {pkg.flagship && (
              <div className="absolute top-0 right-0 bg-crimson text-white text-[8px] font-semibold tracking-[2px] uppercase px-3.5 py-1.5">
                Most Popular
              </div>
            )}
            <div className="text-[9px] font-semibold tracking-[3px] uppercase text-mauve mb-2">{pkg.tag}</div>
            <div className={`font-display font-bold text-[26px] mb-1 ${pkg.dark ? "text-white" : "text-ink"}`}>{pkg.name}</div>
            <div className={`text-[36px] font-bold leading-none mb-1 ${pkg.dark ? "text-white" : "text-crimson"}`}>{pkg.price}</div>
            <div className={`text-[11px] mb-5 pb-5 border-b ${pkg.dark ? "text-[#555] border-[#222]" : "text-mid border-warm"}`}>{pkg.timeline}</div>
            <p className={`text-[13px] font-light leading-[1.8] mb-5 ${pkg.dark ? "text-[#888]" : "text-[#666]"}`}>{pkg.desc}</p>
            <div className="text-[9px] font-semibold tracking-[3px] uppercase text-mauve mb-3">What&apos;s Included</div>
            <ul className="list-none mb-5 flex-1">
              {pkg.includes.map((item) => (
                <li key={item} className={`text-[12.5px] font-light py-2 pl-4 relative border-b leading-[1.5] ${pkg.dark ? "text-[#999] border-[#1e1e1e]" : "text-[#555] border-warm/70"}`}>
                  <span className="absolute left-0 text-crimson">–</span>{item}
                </li>
              ))}
            </ul>
            <p className="text-[12px] font-light italic text-mauve leading-[1.6] mb-5">{pkg.best}</p>
            <Link href="/contact"
              className={`self-start text-[10px] font-semibold tracking-[2.5px] uppercase px-6 py-3 no-underline transition-colors duration-200 ${
                pkg.dark
                  ? "bg-crimson text-white hover:bg-crimson2"
                  : "bg-transparent border border-warm text-ink hover:bg-ink hover:text-white hover:border-ink"
              }`}>
              Get Started
            </Link>
          </div>
        ))}
      </div>

      {/* ADD ON */}
      <div className="bg-bone px-9 py-8 flex flex-wrap items-center justify-between gap-6 border-t-[2px] border-warm">
        <div>
          <div className="text-[9px] font-semibold tracking-[3px] uppercase text-mauve mb-1">Add-On Service</div>
          <div className="font-display font-bold text-[24px] text-ink">+ Updates &amp; More</div>
        </div>
        <p className="text-[13px] font-light text-[#666] leading-[1.7] max-w-[380px]">
          For existing clients — qual package updates, deck graphics, website updates. Complete overhauls scoped separately.
        </p>
        <div className="text-[28px] font-bold text-crimson whitespace-nowrap">$150 <span className="text-[13px] font-light text-mid">/ service</span></div>
        <Link href="/contact" className="bg-crimson text-white text-[10px] font-semibold tracking-[2.5px] uppercase px-6 py-3 no-underline hover:bg-crimson2 transition-colors duration-200">
          Add On
        </Link>
      </div>

      {/* LINKEDIN BAND */}
      <div className="bg-crimson py-16 md:py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
          <div>
            <div className="text-[10px] font-semibold tracking-[4px] uppercase text-white/40 mb-3">Standalone Service</div>
            <h2 className="font-display font-bold text-white leading-[1.1] mb-3" style={{ fontSize:"clamp(30px,4vw,48px)" }}>
              LinkedIn Voice <em className="font-display font-normal italic text-white/40">Intensive</em>
            </h2>
            <p className="text-[14px] font-light text-white/70 leading-[1.8] mb-5">
              LinkedIn is often the first place a potential client, investor, or partner checks you out. If your profile doesn&apos;t reflect your expertise, you&apos;re leaving opportunity on the table every single day.
            </p>
            <div className="text-[28px] font-bold text-white mb-1">Starting at $1,500</div>
            <div className="text-[11px] font-light text-white/40 tracking-wide mb-7">Can be added to any Essentials package · or scoped standalone</div>
            <Link href="/contact" className="inline-block bg-white text-crimson text-[10px] font-semibold tracking-[2.5px] uppercase px-7 py-3.5 no-underline hover:bg-bone transition-colors duration-200">
              Get Started
            </Link>
          </div>
          <ul className="list-none">
            {[
              "Full profile audit and rewrite — headline, about section, featured, experience framing",
              "Brand voice and content pillar development",
              "Content strategy and posting framework tailored to your goals",
              "2 months of LinkedIn posts — written, edited, and ready to publish",
              "30-day content calendar",
              "Engagement and network growth strategy",
              "One 60-minute strategy session to align on voice, goals, and audience",
            ].map((item) => (
              <li key={item} className="text-[13px] font-light text-white/80 py-2.5 pl-4 relative border-b border-white/10 leading-[1.5] last:border-b-0">
                <span className="absolute left-0 text-white/35">–</span>{item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* COMPARE */}
      <section className="bg-white py-16 md:py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="block w-4 h-px bg-crimson" />
            <span className="text-[10px] font-semibold tracking-[4px] uppercase text-crimson">Quick Compare</span>
          </div>
          <h2 className="font-display font-bold text-ink leading-[1.1] mb-8" style={{ fontSize:"clamp(28px,3.5vw,44px)" }}>
            Essentials <em className="font-display font-normal italic text-crimson">at a Glance</em>
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-[13px] font-light">
              <thead>
                <tr className="border-b-[1.5px] border-crimson">
                  {["Package","Qual Package","Website","Deck","Maintenance","Timeline","Price"].map(h => (
                    <th key={h} className="text-left py-3 px-4 text-[10px] font-semibold tracking-[2.5px] uppercase text-mauve">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {compare.map((row, i) => (
                  <tr key={row.name} className={`border-b border-warm ${i % 2 === 1 ? "bg-bone" : ""}`}>
                    <td className="py-4 px-4 font-semibold text-ink">{row.name}</td>
                    <td className="py-4 px-4 text-[#555]">{row.qual}</td>
                    <td className="py-4 px-4 text-[#555]">{row.site}</td>
                    <td className="py-4 px-4 text-[#555]">{row.deck}</td>
                    <td className="py-4 px-4 text-[#555]">{row.maint}</td>
                    <td className="py-4 px-4 text-[#555]">{row.time}</td>
                    <td className="py-4 px-4 font-bold text-crimson">{row.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <CtaBand
        title="Ready to look the part?"
        body="Let's get your brand foundation built. Book a call and we'll confirm the right package for where you are right now."
        cta="Book a Call"
      />
    </div>
  );
}
