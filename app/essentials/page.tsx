import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";

export const metadata = { title: "Notable Essentials — Brand Foundation Packages" };

const packages = [
  {
    name: "Ready 2 Roll", price: "From $1,000", timeline: "2–3 weeks",
    desc: "Qual package, deck template, 1-page website. Everything you need to show up professionally and start pitching.",
    dark: false,
  },
  {
    name: "Get Loud", price: "From $1,750", timeline: "3–4 weeks",
    desc: "Deeper qual package, completed deck pages, multi-page website with ongoing maintenance. The full mid-tier toolkit.",
    dark: true,
  },
  {
    name: "Marquis", price: "From $3,000", timeline: "4 weeks",
    desc: "Everything, fully completed — full qual package, full deck, premium website, and one year of maintenance included.",
    dark: false,
  },
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
            <p className="text-[14px] font-light text-[#333] leading-[1.9] mb-4">
              Notable Essentials is the brand foundation every founder needs before she can grow. These are the tools that establish credibility, communicate value, and make it possible to pitch, present, and win — consistently and professionally.
            </p>
            <p className="text-[14px] font-light text-[#333] leading-[1.9]">
              You bring the vision. We build the assets that make it real. All packages include wordsmithing and moderate editing throughout.
            </p>
          </div>
          <div>
            <div className="relative w-full aspect-[3/4] mb-8 overflow-hidden">
              <Image src="/images/founder-blazer.jpg" alt="Professional woman founder" fill className="object-cover object-top" sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
            <div className="relative bg-bone p-6 pl-7">
              <span className="absolute top-[-8px] left-4 font-display text-[72px] text-crimson leading-none opacity-20 select-none">&ldquo;</span>
              <p className="font-display italic text-[17px] text-ink leading-[1.65] relative z-10">
                &ldquo;She comes to Notable for a qual package. We build it, she wins the contract. Six months later she&apos;s back for her LinkedIn and a course. That is the Notable outcome.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PACKAGES — quick picks */}
      <section className="bg-bone pt-16 px-6 md:px-16 pb-0">
        <div className="max-w-6xl mx-auto pb-10">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="block w-4 h-px bg-crimson" />
            <span className="text-[10px] font-semibold tracking-[4px] uppercase text-crimson">Quick Look</span>
          </div>
          <h2 className="font-display font-bold text-ink leading-[1.1] tracking-[-0.5px] mb-3" style={{ fontSize:"clamp(28px,3.5vw,44px)" }}>
            Three Starting Points. <em className="font-display font-normal italic text-crimson">One Custom Fit.</em>
          </h2>
          <p className="text-[14px] font-light text-[#444] max-w-[540px] leading-[1.85]">
            If you&apos;re looking for a quick upgrade to how you show up, these are our three core offerings. But every founder is different — on your discovery call, we&apos;ll figure out exactly what you need and build the right scope for where you are.
          </p>
        </div>
      </section>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[2px] bg-warm">
        {packages.map((pkg) => (
          <div key={pkg.name}
            className={`flex flex-col p-9 md:p-11 ${pkg.dark ? "bg-ink" : "bg-bone"}`}>
            <div className={`font-display font-bold text-[26px] mb-2 leading-[1.1] ${pkg.dark ? "text-white" : "text-ink"}`}>{pkg.name}</div>
            <div className={`text-[28px] font-bold leading-none mb-1 ${pkg.dark ? "text-white" : "text-crimson"}`}>{pkg.price}</div>
            <div className={`text-[11px] mb-5 pb-5 border-b ${pkg.dark ? "text-[#333] border-[#222]" : "text-mid border-warm"}`}>{pkg.timeline}</div>
            <p className={`text-[13px] font-light leading-[1.85] mb-6 flex-1 ${pkg.dark ? "text-[#666]" : "text-[#444]"}`}>{pkg.desc}</p>
            <Link href="/contact"
              className={`self-start text-[10px] font-semibold tracking-[2.5px] uppercase px-6 py-3 no-underline transition-colors duration-200 ${
                pkg.dark
                  ? "bg-crimson text-white hover:bg-crimson2"
                  : "bg-transparent border border-warm text-ink hover:bg-ink hover:text-white hover:border-ink"
              }`}>
              Let&apos;s Talk
            </Link>
          </div>
        ))}
      </div>

      {/* CUSTOM FIT CALLOUT */}
      <div className="bg-bone px-6 md:px-16 py-10 border-t-[2px] border-warm">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-[500px]">
            <div className="font-display font-bold text-[20px] text-ink mb-2">Not sure which one fits?</div>
            <p className="text-[13px] font-light text-[#444] leading-[1.75]">
              That&apos;s the whole point of the discovery call. We don&apos;t do cookie-cutter — we listen to where you are, where you&apos;re going, and build the right package around you. These are starting points. Your scope is custom.
            </p>
          </div>
          <Link href="/contact" className="bg-crimson text-white text-[10px] font-semibold tracking-[2.5px] uppercase px-7 py-3.5 no-underline hover:bg-crimson2 transition-colors duration-200 flex-shrink-0">
            Book a Discovery Call
          </Link>
        </div>
      </div>

      {/* ADD ON */}
      <div className="bg-bone px-9 py-8 flex flex-wrap items-center justify-between gap-6 border-t-[2px] border-warm">
        <div>
          <div className="text-[9px] font-semibold tracking-[3px] uppercase text-mauve mb-1">Add-On Service</div>
          <div className="font-display font-bold text-[24px] text-ink">+ Updates &amp; More</div>
        </div>
        <p className="text-[13px] font-light text-[#444] leading-[1.7] max-w-[380px]">
          For existing clients — qual package updates, deck graphics, website updates. Complete overhauls scoped separately.
        </p>
        <div className="text-[28px] font-bold text-crimson whitespace-nowrap">$150 <span className="text-[13px] font-light text-mid">/ service</span></div>
        <Link href="/contact" className="bg-crimson text-white text-[10px] font-semibold tracking-[2.5px] uppercase px-6 py-3 no-underline hover:bg-crimson2 transition-colors duration-200">
          Add On
        </Link>
      </div>

      {/* A LA CARTE OFFERINGS */}
      <section className="bg-ink py-12 md:py-16 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="block w-4 h-px bg-crimson" />
            <span className="text-[10px] font-semibold tracking-[4px] uppercase text-crimson">A La Carte</span>
          </div>
          <h2 className="font-display font-bold text-white leading-[1.1] tracking-[-0.5px] mb-3" style={{ fontSize:"clamp(28px,3.5vw,44px)" }}>
            Standalone <em className="font-display font-normal italic text-crimson">Intensives</em>
          </h2>
          <p className="text-[14px] font-light text-[#444] max-w-[520px] leading-[1.85] mb-10">
            These can be added to any Essentials package or purchased on their own. Each one is designed to move the needle on a specific part of your platform.
          </p>
        </div>
      </section>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[2px] bg-[#1a1a1a]">
        {/* LinkedIn Voice Intensive */}
        <div className="bg-ink p-9 md:p-11 flex flex-col">
          <div className="text-[9px] font-semibold tracking-[3px] uppercase text-mauve mb-3">Intensive 01</div>
          <div className="font-display font-bold text-white text-[22px] leading-[1.15] mb-4">LinkedIn Voice Intensive</div>
          <div className="w-7 h-[1.5px] bg-crimson mb-5" />
          <p className="text-[13px] font-light text-[#555] leading-[1.85] mb-5 flex-1">
            LinkedIn is often the first place a potential client, investor, or partner checks you out. We rewrite your entire presence — profile, content strategy, and 2 months of posts, ready to publish.
          </p>
          <ul className="list-none mb-6">
            {["Full profile audit and rewrite", "Brand voice and content pillars", "2 months of posts — written and ready", "30-day content calendar", "Engagement and growth strategy", "60-minute strategy session"].map(item => (
              <li key={item} className="text-[12px] font-light text-[#333] py-1.5 pl-4 relative border-b border-[#1a1a1a] leading-[1.5]">
                <span className="absolute left-0 text-crimson">–</span>{item}
              </li>
            ))}
          </ul>
          <div className="text-[24px] font-bold text-white mb-1">$1,500+</div>
          <div className="text-[10px] text-[#444] mb-6">Standalone or add to any package</div>
          <Link href="/contact" className="self-start bg-crimson text-white text-[10px] font-semibold tracking-[2.5px] uppercase px-6 py-3 no-underline hover:bg-crimson2 transition-colors duration-200">
            Get Started
          </Link>
        </div>

        {/* Video Content Intensive */}
        <div className="bg-ink p-9 md:p-11 flex flex-col">
          <div className="text-[9px] font-semibold tracking-[3px] uppercase text-mauve mb-3">Intensive 02</div>
          <div className="font-display font-bold text-white text-[22px] leading-[1.15] mb-4">Video Content Intensive</div>
          <div className="w-7 h-[1.5px] bg-crimson mb-5" />
          <p className="text-[13px] font-light text-[#555] leading-[1.85] mb-5 flex-1">
            Short-form video is how the world discovers you. We develop your video content strategy, script your first batch, and give you a repeatable framework so you can keep showing up with confidence.
          </p>
          <ul className="list-none mb-6">
            {["Video content strategy and positioning", "Script development for first batch of videos", "Posting framework and cadence plan", "Platform-specific optimization guidance", "Brand voice alignment for video", "60-minute strategy session"].map(item => (
              <li key={item} className="text-[12px] font-light text-[#333] py-1.5 pl-4 relative border-b border-[#1a1a1a] leading-[1.5]">
                <span className="absolute left-0 text-crimson">–</span>{item}
              </li>
            ))}
          </ul>
          <div className="text-[24px] font-bold text-white mb-1">$2,000+</div>
          <div className="text-[10px] text-[#444] mb-6">Standalone or add to any package</div>
          <Link href="/contact" className="self-start bg-crimson text-white text-[10px] font-semibold tracking-[2.5px] uppercase px-6 py-3 no-underline hover:bg-crimson2 transition-colors duration-200">
            Let&apos;s Talk
          </Link>
        </div>

        {/* Social Media Handbook & 30-Day Plan */}
        <div className="bg-ink p-9 md:p-11 flex flex-col">
          <div className="text-[9px] font-semibold tracking-[3px] uppercase text-mauve mb-3">Intensive 03</div>
          <div className="font-display font-bold text-white text-[22px] leading-[1.15] mb-4">Social Media Handbook &amp; 30-Day Plan</div>
          <div className="w-7 h-[1.5px] bg-crimson mb-5" />
          <p className="text-[13px] font-light text-[#555] leading-[1.85] mb-5 flex-1">
            Your complete social media playbook — brand voice guidelines, content categories, a full 30-day posting plan, and everything you need to show up consistently across platforms without second-guessing every post.
          </p>
          <ul className="list-none mb-6">
            {["Brand voice and social media guidelines", "Content pillar and category framework", "Full 30-day content calendar", "Post templates and caption frameworks", "Platform strategy and best practices", "Hashtag and engagement strategy"].map(item => (
              <li key={item} className="text-[12px] font-light text-[#333] py-1.5 pl-4 relative border-b border-[#1a1a1a] leading-[1.5]">
                <span className="absolute left-0 text-crimson">–</span>{item}
              </li>
            ))}
          </ul>
          <div className="text-[24px] font-bold text-white mb-1">$2,750+</div>
          <div className="text-[10px] text-[#444] mb-6">Standalone or add to any package</div>
          <Link href="/contact" className="self-start bg-crimson text-white text-[10px] font-semibold tracking-[2.5px] uppercase px-6 py-3 no-underline hover:bg-crimson2 transition-colors duration-200">
            Let&apos;s Talk
          </Link>
        </div>
      </div>

      <CtaBand
        title="Ready to look the part?"
        body="Let's get your brand foundation built. Book a call and we'll figure out the right fit together."
        cta="Book a Call"
      />
    </div>
  );
}
