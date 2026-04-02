import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";

export const metadata = { title: "Client Results — Notable" };

const stats = [
  { n: "+237%", l: "LinkedIn Network Growth" },
  { n: "28×", l: "Engagement Increase" },
  { n: "336", l: "Posts Published" },
  { n: "3,898", l: "Connections Added" },
];

const growth = [
  { year: "Pre-Engagement (avg/yr)", val: "~150", note: "Organic growth, no brand management" },
  { year: "Year 1", val: "453", note: "Engagement begins — 3× prior baseline" },
  { year: "Year 2", val: "313", note: "Platform building, early content strategy" },
  { year: "Year 3", val: "1,013", note: "Best year on record — 7× baseline", peak: true },
  { year: "Year 4", val: "853", note: "Sustained growth — 5× baseline" },
  { year: "Year 5", val: "618", note: "4× baseline through engagement close" },
];

const comments = [
  { year: "Pre-Engagement (avg/yr)", val: "~26", note: "Occasional, organic activity" },
  { year: "Year 2", val: "172", note: "6× pre-engagement average" },
  { year: "Year 3", val: "731", note: "28× pre-engagement average", peak: true },
  { year: "Year 4", val: "491", note: "19× pre-engagement average" },
  { year: "Year 5", val: "615", note: "Platform maturity — sustains itself" },
];

const seniority = [
  { title: "Director-Level", count: "535+" },
  { title: "President / Principal", count: "510+" },
  { title: "Founder", count: "504+" },
  { title: "CEO", count: "338+" },
  { title: "C-Suite (Other)", count: "334+" },
  { title: "VP / Vice President", count: "242+" },
  { title: "Partner", count: "202+" },
];

const built = [
  {
    cat: "Website & Digital Infrastructure",
    items: [
      "Designed, developed, and launched an 8-page thought leader website — home, about, speaking, media, passions, awards, and booking",
      "Maintained and updated the site continuously over 5 years, tracking news, awards, and speaking appearances",
      "Built and maintained affiliate websites for client's development firm",
    ],
  },
  {
    cat: "Content & LinkedIn Management",
    items: [
      "Wrote, designed, and published all LinkedIn content — 336 posts over 4 years",
      "Developed and executed a strategic content calendar aligned with speaking schedule, award cycles, and milestones",
      "Grew comment engagement from 215 total (all prior years) to 2,346 during engagement",
      "Built company following from zero to 199 targeted organizations",
    ],
  },
  {
    cat: "Brand Collateral & Proposal Support",
    items: [
      "Designed all outward-facing marketing packets, RFP covers, and distributable content",
      "Compiled, edited, and reworked RFP/RFQ documents for government contract submissions",
      "Created fillable deliverables, custom PDF forms, and testimonial videos",
    ],
  },
  {
    cat: "Thought Leadership & PR Positioning",
    items: [
      "Supported media placements contributing to features in major business publications",
      "Built platform infrastructure supporting multiple national award recognitions",
      "Positioned client as a credible, visible voice in her industry through consistent strategic content",
    ],
  },
];

export default function Results() {
  return (
    <div>
      <PageHero
        eyebrow="Client Results"
        title={<>The Work <em className="font-display font-normal italic text-crimson">Speaks.</em></>}
        subtitle="We don't share names without permission. But we do share what happened. Here's a look inside a 5-year Notable engagement — from first deliverable to full platform."
      />

      {/* CASE STUDY INTRO */}
      <section className="bg-white py-14 md:py-20 px-6 md:px-16">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="block w-4 h-px bg-crimson" />
            <span className="text-[10px] font-semibold tracking-[4px] uppercase text-crimson">5-Year Engagement</span>
          </div>
          <h2 className="font-display font-bold text-ink leading-[1.1] tracking-[-0.5px] mb-3"
            style={{ fontSize: "clamp(28px,3.5vw,44px)" }}>
            The Client: A Recognized Expert With a{" "}
            <em className="font-display font-normal italic text-crimson">Limited Digital Footprint.</em>
          </h2>
          <div className="w-8 h-0.5 bg-crimson my-5" />
          <p className="text-[14px] font-light text-[#333] leading-[1.9] max-w-3xl mb-4">
            She was a prominent real estate developer, affordable housing leader, and active speaker — with a decade of credibility and almost nothing to show for it online. Her LinkedIn was quiet. Her website didn&apos;t exist. Her brand didn&apos;t match her impact.
          </p>
          <p className="text-[14px] font-light text-[#333] leading-[1.9] max-w-3xl mb-4">
            Over five years, Notable built her entire digital presence from the ground up: personal brand website, LinkedIn platform, content strategy, RFP collateral, video production, and ongoing brand management. The engagement grew through three progressive roles — from content specialist to brand marketing manager to full creative director.
          </p>
          <p className="text-[15px] font-normal text-ink leading-[1.9] max-w-3xl">
            She arrived as a best-kept secret. She left{" "}
            <em className="italic text-crimson">impossible to overlook.</em>
          </p>
        </div>
      </section>

      {/* IMPACT AT A GLANCE */}
      <section className="bg-ink py-14 md:py-20 px-6 md:px-16">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="block w-4 h-px bg-crimson" />
            <span className="text-[10px] font-semibold tracking-[4px] uppercase text-crimson">Impact at a Glance</span>
          </div>
          <h2 className="font-display font-bold text-white leading-[1.1] tracking-[-0.5px] mb-10"
            style={{ fontSize: "clamp(28px,3.5vw,44px)" }}>
            The Numbers Tell the{" "}
            <em className="font-display font-normal italic text-crimson">Story.</em>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-14">
            {stats.map((s) => (
              <div key={s.l} className="border-l-2 border-crimson pl-5">
                <div className="font-display font-bold text-white text-[32px] md:text-[40px] leading-none">{s.n}</div>
                <div className="text-[10px] font-medium tracking-[2.5px] uppercase text-[#888] mt-2">{s.l}</div>
              </div>
            ))}
          </div>

          {/* Additional stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { n: "199", l: "Companies Following" },
              { n: "2,346", l: "Comments During Engagement" },
              { n: "535+", l: "Director-Level Connections" },
              { n: "60%+", l: "C-Suite & Senior Network" },
            ].map((s) => (
              <div key={s.l} className="border-l border-[#333] pl-5">
                <div className="font-display font-bold text-white text-[24px] leading-none">{s.n}</div>
                <div className="text-[10px] font-medium tracking-[2.5px] uppercase text-[#666] mt-2">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NETWORK GROWTH */}
      <section className="bg-bone py-14 md:py-20 px-6 md:px-16">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="block w-4 h-px bg-crimson" />
            <span className="text-[10px] font-semibold tracking-[4px] uppercase text-crimson">LinkedIn Network Growth</span>
          </div>
          <h2 className="font-display font-bold text-ink leading-[1.1] tracking-[-0.5px] mb-3"
            style={{ fontSize: "clamp(24px,3vw,38px)" }}>
            From 1,645 to 5,543.{" "}
            <em className="font-display font-normal italic text-crimson">In Five Years.</em>
          </h2>
          <p className="text-[14px] font-light text-[#444] leading-[1.85] max-w-2xl mb-8">
            Before Notable, the network grew ~150 connections per year over a decade of organic activity. During the engagement, that pace accelerated to over 1,000 in a single year — and never dropped back down.
          </p>

          <div className="flex flex-col">
            {growth.map((g) => (
              <div key={g.year} className={`flex items-center gap-5 py-4 border-b border-warm first:border-t ${g.peak ? "bg-white -mx-4 px-4" : ""}`}>
                <div className="w-[140px] md:w-[200px] flex-shrink-0">
                  <span className="text-[12px] font-semibold text-ink">{g.year}</span>
                </div>
                <div className="w-[80px] flex-shrink-0 text-right">
                  <span className={`font-display font-bold text-[20px] ${g.peak ? "text-crimson" : "text-ink"}`}>{g.val}</span>
                </div>
                <div className="flex-1">
                  <span className="text-[12px] font-light text-[#666]">{g.note}</span>
                  {g.peak && <span className="ml-2 text-[9px] font-bold tracking-[2px] uppercase text-crimson">Peak Year</span>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ENGAGEMENT & CONTENT */}
      <section className="bg-white py-14 md:py-20 px-6 md:px-16">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14">
          {/* Content Production */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <span className="block w-4 h-px bg-crimson" />
              <span className="text-[10px] font-semibold tracking-[4px] uppercase text-crimson">Content Production</span>
            </div>
            <h3 className="font-display font-bold text-ink leading-[1.1] tracking-[-0.5px] mb-3"
              style={{ fontSize: "clamp(22px,2.5vw,32px)" }}>
              336 Posts. <em className="font-display font-normal italic text-crimson">10× Output.</em>
            </h3>
            <p className="text-[13px] font-light text-[#444] leading-[1.85] mb-6">
              Before Notable, she had published 33 posts across 8+ years. We produced 336 in four years — a 10× increase in publishing volume. The most active month saw 21 posts, each tied to strategic moments in her calendar.
            </p>
            <div className="bg-bone p-5">
              <div className="flex justify-between items-end mb-3">
                <span className="text-[10px] font-semibold tracking-[3px] uppercase text-mauve">Before</span>
                <span className="font-display font-bold text-ink text-[20px]">33 posts</span>
              </div>
              <div className="w-full h-[3px] bg-warm mb-1 relative">
                <div className="absolute left-0 top-0 h-full bg-[#ccc]" style={{ width: "9%" }} />
              </div>
              <p className="text-[10px] font-light text-[#999] mb-5">8+ years, no strategy</p>

              <div className="flex justify-between items-end mb-3">
                <span className="text-[10px] font-semibold tracking-[3px] uppercase text-crimson">During</span>
                <span className="font-display font-bold text-crimson text-[20px]">336 posts</span>
              </div>
              <div className="w-full h-[3px] bg-warm mb-1 relative">
                <div className="absolute left-0 top-0 h-full bg-crimson" style={{ width: "100%" }} />
              </div>
              <p className="text-[10px] font-light text-[#999]">4 years, Notable content management</p>
            </div>
          </div>

          {/* Comment Engagement */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <span className="block w-4 h-px bg-crimson" />
              <span className="text-[10px] font-semibold tracking-[4px] uppercase text-crimson">Engagement Activity</span>
            </div>
            <h3 className="font-display font-bold text-ink leading-[1.1] tracking-[-0.5px] mb-3"
              style={{ fontSize: "clamp(22px,2.5vw,32px)" }}>
              2,346 Comments. <em className="font-display font-normal italic text-crimson">From 215.</em>
            </h3>
            <p className="text-[13px] font-light text-[#444] leading-[1.85] mb-6">
              The platform didn&apos;t just grow — it activated. Comment activity surged from an average of 26 per year to 731 in a single year. The community she built continues to engage even after the engagement ended.
            </p>
            <div className="flex flex-col">
              {comments.map((c) => (
                <div key={c.year} className="flex items-center gap-4 py-3 border-b border-warm first:border-t">
                  <div className="w-[140px] flex-shrink-0">
                    <span className="text-[11px] font-semibold text-ink">{c.year}</span>
                  </div>
                  <div className="w-[60px] flex-shrink-0 text-right">
                    <span className={`font-display font-bold text-[18px] ${c.peak ? "text-crimson" : "text-ink"}`}>{c.val}</span>
                  </div>
                  <div className="flex-1">
                    <span className="text-[11px] font-light text-[#666]">{c.note}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* NETWORK QUALITY */}
      <section className="bg-ink py-14 md:py-20 px-6 md:px-16">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="block w-4 h-px bg-crimson" />
            <span className="text-[10px] font-semibold tracking-[4px] uppercase text-crimson">Network Quality</span>
          </div>
          <h2 className="font-display font-bold text-white leading-[1.1] tracking-[-0.5px] mb-3"
            style={{ fontSize: "clamp(24px,3vw,38px)" }}>
            We Didn&apos;t Just Grow the Network.{" "}
            <em className="font-display font-normal italic text-crimson">We Calibrated It.</em>
          </h2>
          <p className="text-[13px] font-light text-[#888] leading-[1.85] max-w-2xl mb-10">
            Over 60% of connections added carry Director-level or above titles — the decision-makers, capital sources, and sector leaders most relevant to the client&apos;s work. Connections include professionals from JPMorgan Chase, Goldman Sachs, Wells Fargo, Capital One, EY, CBRE, JLL, and more.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-[2px]">
            {seniority.slice(0, 4).map((s) => (
              <div key={s.title} className="bg-[#1a1a1a] p-5">
                <div className="font-display font-bold text-white text-[24px] leading-none mb-2">{s.count}</div>
                <div className="text-[10px] font-medium tracking-[2px] uppercase text-[#888]">{s.title}</div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-[2px] mt-[2px]">
            {seniority.slice(4).map((s) => (
              <div key={s.title} className="bg-[#1a1a1a] p-5">
                <div className="font-display font-bold text-white text-[24px] leading-none mb-2">{s.count}</div>
                <div className="text-[10px] font-medium tracking-[2px] uppercase text-[#888]">{s.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WAS BUILT */}
      <section className="bg-bone py-14 md:py-20 px-6 md:px-16">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="block w-4 h-px bg-crimson" />
            <span className="text-[10px] font-semibold tracking-[4px] uppercase text-crimson">What Was Built</span>
          </div>
          <h2 className="font-display font-bold text-ink leading-[1.1] tracking-[-0.5px] mb-10"
            style={{ fontSize: "clamp(24px,3vw,38px)" }}>
            The Full Scope of a{" "}
            <em className="font-display font-normal italic text-crimson">Notable Engagement.</em>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {built.map((b) => (
              <div key={b.cat} className="bg-white p-7">
                <div className="text-[10px] font-semibold tracking-[3px] uppercase text-mauve mb-4">{b.cat}</div>
                <div className="w-5 h-[1.5px] bg-crimson mb-4" />
                <ul className="space-y-3">
                  {b.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="text-crimson text-xs mt-0.5 flex-shrink-0">—</span>
                      <span className="text-[12px] font-light text-[#444] leading-[1.75]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SUMMARY QUOTE */}
      <section className="bg-white py-14 md:py-20 px-6 md:px-16">
        <div className="max-w-3xl mx-auto text-center">
          <span className="font-display text-[72px] text-crimson leading-none opacity-20 select-none">&ldquo;</span>
          <p className="font-display italic text-ink text-[20px] md:text-[24px] leading-[1.5] -mt-8 mb-6">
            She arrived as a recognized expert with a limited digital footprint. She left with a platform that matches her impact — a website, a LinkedIn presence connected to capital sources and policymakers, and a content archive that proves her expertise over five years.
          </p>
          <div className="w-8 h-[1.5px] bg-crimson mx-auto mb-4" />
          <div className="text-[10px] font-semibold tracking-[3px] uppercase text-mauve">
            Notable · DakJen Creative LLC
          </div>
        </div>
      </section>

      <CtaBand
        title={<>Ready to build <em className="font-display font-normal italic text-white/40">your platform?</em></>}
        body="Book a discovery call. In 45 minutes we'll map out exactly what Notable can build for you."
        cta="Book a Discovery Call"
      />
    </div>
  );
}
