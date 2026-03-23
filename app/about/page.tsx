import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";

const diffs = [
  { n:"01", t:"We Execute, Not Just Advise", b:"You leave with deliverables, not a deck full of ideas. Real assets, written, designed, and launch-ready before our engagement ends." },
  { n:"02", t:"We Find the Revenue You're Sitting On", b:"We identify the monetizable opportunities you're too close to see — the course, the book, the LinkedIn presence, the speaking series." },
  { n:"03", t:"A Creative Ecosystem, Not Just a Service", b:"We bring tech builders, publicists, and event planners so your strategy actually gets executed end to end." },
  { n:"04", t:"Every Tier Leads to the Next", b:"Our Essentials clients become our Amplify clients. We're not selling one-time transactions — we're building long-term relationships." },
  { n:"05", t:"Built for One Client", b:"We specialize in the high-performing woman founder. We know her challenges, her goals, and what it takes to get her seen." },
];

const phases = [
  { n:"01", t:"Brand Foundation",  b:"Qualifications package, deck, and website. The tools that make you look the part and get you in the room." },
  { n:"02", t:"Platform Buildout",  b:"Courses, books, LinkedIn, speaking series — your expertise packaged and monetized through a Notable Amplify engagement." },
  { n:"03", t:"Revenue Growth",     b:"Multiple income streams, active audiences, and a platform that reflects your actual impact." },
  { n:"04", t:"Ongoing Management", b:"Monthly content and brand management through Amplify+ Ongoing — so your platform never falls behind your ambition." },
];

export const metadata = { title: "About — Notable by DakJen Creative LLC" };

export default function About() {
  return (
    <div>
      <PageHero
        eyebrow="About Notable"
        title={<>We Don&apos;t Just Build<br />Your Brand. We Build<br />Your <em className="font-display font-normal italic text-crimson">Platform.</em></>}
        subtitle="Notable exists at the intersection of brand, platform, and revenue — built for the high-performing woman founder who is done being the best-kept secret in her industry."
      />

      {/* MISSION */}
      <section className="bg-white py-20 md:py-28 px-6 md:px-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <span className="block w-4 h-px bg-crimson" />
              <span className="text-[10px] font-semibold tracking-[4px] uppercase text-crimson">The Mission</span>
            </div>
            <h2 className="font-display font-bold text-ink leading-[1.1] tracking-[-0.5px] mb-0" style={{ fontSize:"clamp(30px,4vw,48px)" }}>
              What Is <em className="font-display font-normal italic text-crimson">Notable?</em>
            </h2>
            <div className="w-8 h-0.5 bg-crimson my-5" />
            <p className="text-[14px] font-light text-[#555] leading-[1.9] mb-4">
              Notable works with women solopreneurs and business owners who have done the work, built the reputation, and earned the credibility — but haven&apos;t yet built the platform and revenue streams that reflect how far they&apos;ve come.
            </p>
            <p className="text-[15px] font-normal text-ink leading-[1.9]">
              Most branding agencies will make you look good. Notable makes you{" "}
              <em className="italic text-crimson">impossible to overlook.</em>
            </p>
          </div>
          <div>
            <div className="relative w-full aspect-[4/3] mb-8 overflow-hidden">
              <Image src="/images/profile-editorial.jpg" alt="Notable editorial portrait" fill className="object-cover object-top" sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
            <div className="relative bg-bone p-6 pl-7 mb-8">
              <span className="absolute top-[-8px] left-4 font-display text-[72px] text-crimson leading-none opacity-20 select-none">&ldquo;</span>
              <p className="font-display italic text-[17px] text-ink leading-[1.65] relative z-10">
                &ldquo;Notable is not a vendor relationship. It is a growth partnership. We are with you from your first brand asset to your first course launch to your first fireside chat series.&rdquo;
              </p>
              <div className="text-[10px] font-semibold tracking-[3px] uppercase text-mauve mt-3">Notable · DakJen Creative LLC</div>
            </div>
            <div className="bg-bone p-7">
              <div className="text-[10px] font-semibold tracking-[3px] uppercase text-mauve mb-4">Who We Serve</div>
              {[
                "High-performing women solopreneurs and small business owners",
                "Women of color founders pursuing contracts, investment, and partnerships",
                "Executives building a personal brand and thought leadership platform",
                "Established founders ready to launch a new revenue stream",
                "Professionals who know they have more to offer but haven't had the right partner to package it",
              ].map((item) => (
                <div key={item} className="flex gap-2.5 py-2.5 border-b border-warm last:border-b-0">
                  <span className="text-crimson font-bold flex-shrink-0">–</span>
                  <p className="text-[13px] font-light text-[#555] leading-[1.6]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHAT MAKES US DIFFERENT */}
      <section className="bg-bone py-20 md:py-28 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="block w-4 h-px bg-crimson" />
            <span className="text-[10px] font-semibold tracking-[4px] uppercase text-crimson">The Difference</span>
          </div>
          <h2 className="font-display font-bold text-ink leading-[1.1] tracking-[-0.5px] mb-12" style={{ fontSize:"clamp(30px,4vw,48px)" }}>
            What Makes Notable <em className="font-display font-normal italic text-crimson">Different</em>
          </h2>
          <div className="flex flex-col">
            {diffs.map((d) => (
              <div key={d.n} className="flex gap-5 items-start py-6 border-b border-warm first:border-t">
                <span className="font-display font-normal italic text-warm text-[30px] leading-none w-10 flex-shrink-0 pt-0.5">{d.n}</span>
                <div>
                  <div className="text-[14px] font-semibold text-ink mb-1.5">{d.t}</div>
                  <div className="text-[13px] font-light text-[#666] leading-[1.75]">{d.b}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE JOURNEY */}
      <section className="bg-ink py-20 md:py-28 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="block w-4 h-px bg-crimson" />
            <span className="text-[10px] font-semibold tracking-[4px] uppercase text-crimson">The Client Journey</span>
          </div>
          <h2 className="font-display font-bold text-white leading-[1.1] tracking-[-0.5px] mb-12" style={{ fontSize:"clamp(30px,4vw,48px)" }}>
            Four Stages. <em className="font-display font-normal italic text-crimson">One Platform.</em>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[2px] bg-[#1a1a1a]">
            {phases.map((p) => (
              <div key={p.n} className="bg-[#111] p-8">
                <div className="font-display font-bold text-[#1e1e1e] text-[48px] leading-none mb-3">{p.n}</div>
                <div className="text-[11px] font-semibold tracking-[2.5px] uppercase text-crimson mb-3">{p.t}</div>
                <div className="text-[13px] font-light text-[#666] leading-[1.75]">{p.b}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title={<>Ready to build the platform <em className="font-display font-normal italic text-white/40">you&apos;ve earned?</em></>}
        body="Book a discovery call. We'll map out your opportunities in 45 minutes."
        cta="Book a Discovery Call"
      />
    </div>
  );
}
