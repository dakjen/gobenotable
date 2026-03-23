import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";

export const metadata = { title: "Notable Amplify — Platform & Revenue Stream Buildout" };

const phases = [
  { n:"01", t:"Platform Assessment", b:"Deep-dive interview, audit of existing brand assets, review of current revenue streams. We identify 3–5 monetizable opportunities specific to you.", weeks:"Weeks 1–2" },
  { n:"02", t:"Strategy & Roadmap",  b:"We present your Platform Opportunity Map — what to build, why, in what order, and what it could generate. You choose what to pursue.", weeks:"Weeks 2–3" },
  { n:"03", t:"Build & Execute",     b:"This is where we build. Writing, structuring, designing, and coordinating with our partner network as needed. You review and we finalize.", weeks:"Weeks 3–6" },
  { n:"04", t:"Launch Package",      b:"Every Amplify engagement ends with a Launch Package — content and materials to announce, promote, and activate what we've built together.", weeks:"Week 6" },
];

const deliverables = [
  { name:"Online Course Concept & Launch Package", items:["Course title, positioning, and target audience","Full module and lesson outline","Pricing structure and platform recommendation","Launch email sequence (3–5 emails)","Social content for launch (2 weeks of posts)","Tech partner connection for platform build"] },
  { name:"Book Proposal", items:["Overview and hook — why this book, why now, why you","Chapter-by-chapter outline","Market analysis and comparable titles","Author platform and credentials section","Query letter template for agent outreach","Self-publishing roadmap as alternative path"] },
  { name:"LinkedIn Presence & Content Strategy", items:["Full profile rewrite — headline, about, featured, experience","Brand voice and content pillar development","2 months of LinkedIn posts — written and ready to publish","30-day content calendar","Engagement and growth strategy","Positioning for speaking, partnerships, and client acquisition"] },
  { name:"Blog or Newsletter Launch", items:["Name, positioning, and audience definition","Topic framework and content categories","Monetization strategy — sponsorships, paid tier, lead gen","First 4–6 posts or issues written and ready","Distribution and growth strategy"] },
  { name:"Fireside Chat or Speaking Series", items:["Series concept, name, and positioning","Topic list for 4–6 sessions","Speaker or guest outreach strategy and templates","Event budget and logistics framework","Promotional content for each session","Event planner partner coordination"] },
  { name:"New Line of Business Launch", items:["Business concept refinement and positioning","Name and brand identity for the new offering","Service or product description and pricing structure","One-pager or pitch deck","Website copy for the new offering","Launch content strategy"] },
];

const examples = [
  { tag:"Example Engagement", name:"The Thought Leadership Foundation", desc:"Developer Playbook + 10 How-To Guides + Book Proposal + Agent List + 5 AI-Generated Podcast Episodes. For founders with deep domain expertise ready to become the recognized authority in their space.", price:"From $10,500" },
  { tag:"Example Engagement", name:"The Platform Launch", desc:"LinkedIn Voice Strategy + Online Course Concept + Launch Package + 2 months of ready-to-publish posts. For founders ready to monetize their expertise and build an active online audience.", price:"From $12,000" },
  { tag:"Example Engagement", name:"The Full Build", desc:"Book Proposal + LinkedIn Content Strategy + Blog Launch + Fireside Chat Series + New Line of Business package. For founders building a multi-channel platform with multiple revenue streams.", price:"From $16,000–$20,000" },
];

export default function Amplify() {
  return (
    <div>
      <PageHero
        eyebrow="Tier 2 · The Flagship Offering"
        title={<>Notable <em className="font-display font-normal italic text-crimson">Amplify</em></>}
        subtitle="You're sitting on more revenue than you realize. Let's find it and build it. Platform and revenue stream buildout — custom-scoped, fully executed, ready to launch. Starting at $8,000."
      />

      {/* WHAT IS AMPLIFY */}
      <section className="bg-ink py-20 md:py-28 px-6 md:px-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <span className="block w-4 h-px bg-crimson" />
              <span className="text-[10px] font-semibold tracking-[4px] uppercase text-crimson">What Is Amplify</span>
            </div>
            <h2 className="font-display font-bold text-white leading-[1.1] tracking-[-0.5px]" style={{ fontSize:"clamp(28px,3.5vw,44px)" }}>
              Not a Strategy.<br /><em className="font-display font-normal italic text-crimson">The Actual Thing.</em>
            </h2>
            <div className="w-8 h-0.5 bg-crimson my-5" />
            <p className="text-[14px] font-light text-[#666] leading-[1.9] mb-4">
              Notable Amplify is not a brand refresh. This is a platform and revenue stream buildout — designed for the founder who has done the work, built the expertise, and is ready to be recognized and compensated at a level that matches her actual impact.
            </p>
            <p className="text-[14px] font-light text-[#666] leading-[1.9] mb-8">
              We begin with a deep assessment, identify the monetizable opportunities she&apos;s sitting on, then build them. Not a strategy deck. The actual thing.
            </p>
            <div className="text-[28px] font-bold text-white mb-1">From $8,000</div>
            <div className="text-[11px] font-light text-[#444] tracking-wide mb-7">Custom-scoped per engagement · 6–8 week timeline</div>
            <Link href="/contact" className="inline-block bg-crimson text-white text-[10px] font-semibold tracking-[2.5px] uppercase px-7 py-3.5 no-underline hover:bg-crimson2 transition-colors duration-200">
              Book an Amplify Discovery Call
            </Link>
          </div>
          <div>
            <div className="relative w-full aspect-[3/4] mb-6 overflow-hidden">
              <Image src="/images/city-aspirational.jpg" alt="Woman on city rooftop at dusk" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
            <div className="relative bg-[#0a0a0a] border border-[#1e1e1e] p-7 mb-6">
              <span className="absolute top-[-8px] left-4 font-display text-[72px] text-crimson leading-none opacity-10 select-none">&ldquo;</span>
              <p className="font-display italic text-[17px] text-[#aaa] leading-[1.65] relative z-10">
                &ldquo;Most consultants hand you a list of recommendations. Notable Amplify hands you the deliverables, the content, and the launch materials — ready to go. You leave with assets in hand, not ideas on paper.&rdquo;
              </p>
            </div>
            <div className="border border-[#1e1e1e] p-7">
              <div className="text-[10px] font-semibold tracking-[3px] uppercase text-[#333] mb-4">What Affects Pricing</div>
              {["Number of deliverables in scope","Whether partner network coordination is required","Volume of written content included","Complexity of research or positioning work"].map(item => (
                <div key={item} className="flex gap-2.5 py-2.5 border-b border-[#1a1a1a] last:border-b-0">
                  <span className="text-crimson font-bold flex-shrink-0">–</span>
                  <p className="text-[13px] font-light text-[#555] leading-[1.6]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PHASES */}
      <section className="bg-white py-16 md:py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="block w-4 h-px bg-crimson" />
            <span className="text-[10px] font-semibold tracking-[4px] uppercase text-crimson">The Process</span>
          </div>
          <h2 className="font-display font-bold text-ink leading-[1.1] tracking-[-0.5px] mb-10" style={{ fontSize:"clamp(28px,3.5vw,44px)" }}>
            Four Phases. <em className="font-display font-normal italic text-crimson">One Transformation.</em>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[2px] bg-warm">
            {phases.map(p => (
              <div key={p.n} className="bg-white p-8">
                <div className="font-display font-bold text-warm text-[48px] leading-none mb-3">{p.n}</div>
                <div className="text-[11px] font-semibold tracking-[2.5px] uppercase text-crimson mb-3">{p.t}</div>
                <p className="text-[13px] font-light text-[#666] leading-[1.75] mb-3">{p.b}</p>
                <span className="text-[11px] italic text-mauve">{p.weeks}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DELIVERABLES */}
      <section className="bg-bone py-16 md:py-20 px-6 md:px-16 pb-0">
        <div className="max-w-6xl mx-auto pb-10">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="block w-4 h-px bg-crimson" />
            <span className="text-[10px] font-semibold tracking-[4px] uppercase text-crimson">What We Build</span>
          </div>
          <h2 className="font-display font-bold text-ink leading-[1.1] tracking-[-0.5px] mb-3" style={{ fontSize:"clamp(28px,3.5vw,44px)" }}>
            Every Engagement Is <em className="font-display font-normal italic text-crimson">Custom-Scoped</em>
          </h2>
          <p className="text-[14px] font-light text-[#666] max-w-[540px] leading-[1.85]">
            Most engagements include 2–4 of these depending on scope and budget. We identify the right combination on your discovery call.
          </p>
        </div>
      </section>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2px] bg-warm">
        {deliverables.map(d => (
          <div key={d.name} className="bg-white p-8">
            <div className="text-[13px] font-semibold text-ink mb-4 pb-3 border-b border-warm">{d.name}</div>
            <ul className="list-none">
              {d.items.map(item => (
                <li key={item} className="text-[12px] font-light text-[#666] py-1.5 pl-4 relative leading-[1.5]">
                  <span className="absolute left-0 text-mauve">–</span>{item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* EXAMPLES */}
      <section className="bg-white py-16 md:py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="block w-4 h-px bg-crimson" />
            <span className="text-[10px] font-semibold tracking-[4px] uppercase text-crimson">Example Engagements</span>
          </div>
          <h2 className="font-display font-bold text-ink leading-[1.1] tracking-[-0.5px] mb-3" style={{ fontSize:"clamp(28px,3.5vw,44px)" }}>
            What Amplify Looks Like <em className="font-display font-normal italic text-crimson">In Practice</em>
          </h2>
          <p className="text-[14px] font-light text-[#666] max-w-[500px] leading-[1.85] mb-10">Every scope is custom, but here are examples of real engagement types.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[2px] bg-warm">
            {examples.map(e => (
              <div key={e.name} className="bg-white p-8">
                <div className="text-[9px] font-semibold tracking-[3px] uppercase text-mauve mb-3">{e.tag}</div>
                <div className="font-display font-bold text-[22px] text-ink mb-4 leading-[1.2]">{e.name}</div>
                <p className="text-[13px] font-light text-[#666] leading-[1.75] mb-5">{e.desc}</p>
                <div className="text-[22px] font-bold text-crimson">{e.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AMPLIFY+ TEASER */}
      <section className="bg-ink py-16 md:py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <span className="block w-4 h-px bg-crimson" />
              <span className="text-[10px] font-semibold tracking-[4px] uppercase text-crimson">Tier 3</span>
            </div>
            <h2 className="font-display font-bold text-white leading-[1.1] tracking-[-0.5px] mb-0" style={{ fontSize:"clamp(28px,3.5vw,44px)" }}>
              Amplify+ <em className="font-display font-normal italic text-crimson">Ongoing</em>
            </h2>
            <div className="w-8 h-0.5 bg-crimson my-5" />
            <p className="text-[14px] font-light text-[#666] leading-[1.9] mb-4">You built it. Now let&apos;s run it. Monthly platform management — content, new revenue streams, and brand consistency across every channel.</p>
            <div className="text-[28px] font-bold text-white mb-1">$3,000–$5,000<span className="text-[13px] font-light text-[#444] ml-2">/ month</span></div>
            <div className="text-[11px] font-light text-[#444] tracking-wide mb-7">Minimum 3-month commitment</div>
            <Link href="/contact" className="inline-block bg-transparent border border-[#333] text-[#666] text-[10px] font-semibold tracking-[2.5px] uppercase px-7 py-3.5 no-underline hover:border-[#666] hover:text-white transition-colors duration-200">
              Let&apos;s Talk Ongoing
            </Link>
          </div>
          <div className="border border-[#1e1e1e] p-9">
            <div className="text-[10px] font-semibold tracking-[3px] uppercase text-[#333] mb-5">What&apos;s Included Monthly</div>
            {["Monthly strategy session — 60 minutes, agenda set by your priorities","Ongoing content production — LinkedIn, blog, newsletter, or a combination","Quarterly revenue stream review — new opportunities identified and scoped","Brand asset updates and new collateral as needed","Partner network coordination for any execution needs that arise","Priority access for new projects, launches, and time-sensitive needs"].map(item => (
              <div key={item} className="flex gap-3 py-3 border-b border-[#1a1a1a] last:border-b-0">
                <span className="text-crimson font-bold flex-shrink-0 mt-0.5">–</span>
                <p className="text-[13px] font-light text-[#666] leading-[1.6]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title={<>You&apos;re sitting on more <em className="font-display font-normal italic text-white/40">revenue than you realize.</em></>}
        body="Book a Notable Amplify Discovery Call — we'll map out your platform in 45 minutes."
        cta="Book an Amplify Discovery Call"
      />
    </div>
  );
}
