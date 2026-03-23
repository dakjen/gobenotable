import Link from "next/link";
import Image from "next/image";
import CtaBand from "@/components/CtaBand";
import VanguardForm from "@/components/VanguardForm";

export const metadata = { title: "Notable Vanguard — For Men Who Lead at the Highest Level" };

const pillars = [
  { n:"01", t:"Exceptional at What They Do", b:"A Vanguard man is at the top of his field — not by accident, but through years of discipline, craft, and relentless commitment. Excellence is not the goal. It is the baseline." },
  { n:"02", t:"Integrity as a Standard", b:"Defined not just by what he has built, but by how he treats the people around him and the values he operates from every single day. Character is not optional here. It is required." },
  { n:"03", t:"Real, Measurable Impact", b:"He is making a measurable difference — in his industry, his community, and the lives of people walking behind him. Impact is a documented reality, not a talking point." },
  { n:"04", t:"He Brings Others With Him", b:"A Vanguard doesn't just rise — he reaches back. He champions the women, the next generation, and the community around him. His success opens doors. He makes sure others walk through them." },
];

const forList = [
  "Men of color innovating in their industry with purpose",
  "Founders, executives, and public figures whose platform hasn't caught up to their impact",
  "Leaders who are actively lifting others — allies, mentors, community builders",
  "Men who are undeniably excellent and ready for the world to know it",
];

export default function Vanguard() {
  return (
    <div>
      {/* HERO — navy */}
      <section className="bg-navydark min-h-[calc(100vh-94px)] grid grid-cols-1 md:grid-cols-2 items-end gap-10 px-6 md:px-16 pt-[calc(36px+80px)] pb-16 relative overflow-hidden border-b border-navy">
        <div className="absolute w-[600px] h-[600px] rounded-full top-[-150px] right-[-80px] pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(30,58,110,0.2) 0%, transparent 70%)" }} />

        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="block w-4 h-px bg-navy" />
            <span className="text-[10px] font-medium tracking-[4px] uppercase text-navy">A Notable Sub-Brand · DakJen Creative LLC</span>
          </div>
          <div className="flex items-center gap-3 mb-1">
            <Image src="/images/vanguard-mark.png" alt="Vanguard logo" width={28} height={36} className="opacity-60" />
            <span className="text-[11px] font-semibold tracking-[6px] uppercase text-[#2a3550]">Notable</span>
          </div>
          <h1 className="font-display font-black text-white leading-[0.95] tracking-[-3px] mb-4"
            style={{ fontSize: "clamp(72px,12vw,120px)" }}>
            Vanguard
          </h1>
          <p className="font-display italic font-light text-mauve text-[18px] mb-7">
            &ldquo;He leads. He excels. He brings others with him.&rdquo;
          </p>
          <p className="text-[14px] font-light text-[#6a7a9a] leading-[1.85] max-width-[420px] mb-9 max-w-[420px]">
            For men of color who are operating at the top of their craft — not because they&apos;re chasing recognition, but because excellence is simply how they move. They don&apos;t just succeed. They bring people with them.
          </p>
          <div className="flex gap-3 flex-wrap">
            <Link href="#apply"
              className="bg-navy text-white text-[10px] font-semibold tracking-[2.5px] uppercase px-7 py-3.5 no-underline hover:bg-navy2 transition-colors duration-200">
              Apply for Vanguard
            </Link>
            <Link href="#standard"
              className="bg-transparent border border-[#1e2e4a] text-[#4a6a9a] text-[10px] font-semibold tracking-[2.5px] uppercase px-7 py-3.5 no-underline hover:border-[#4a6a9a] hover:text-white transition-colors duration-200">
              The Standard
            </Link>
          </div>
        </div>

        {/* Hero image + Standards preview */}
        <div className="hidden md:flex flex-col gap-5 items-end justify-end relative z-10">
          <div className="relative w-full max-w-[400px] aspect-[3/4] mb-5 overflow-hidden">
            <Image src="/images/vanguard-suited.jpg" alt="Man in suit holding coffee" fill className="object-cover object-top" sizes="400px" />
            <div className="absolute inset-0 bg-gradient-to-t from-navydark via-transparent to-transparent" />
          </div>
        <div className="border border-[#1a2540] p-8 w-full max-w-[400px]">
          <div className="text-[9px] font-semibold tracking-[4px] uppercase text-[#2a3550] mb-5">
            What Vanguard Is Built On
          </div>
          {[
            { t: "Exceptional at what they do",   b: "At the top of their field through discipline and craft — not by accident." },
            { t: "Integrity as a standard",        b: "Defined not just by what they've built, but by how they operate every single day." },
            { t: "Real, measurable impact",        b: "In their industry, their community, and the lives of people walking behind them." },
            { t: "He brings others with him",      b: "A Vanguard doesn't just rise — he reaches back. Always." },
          ].map((s) => (
            <div key={s.t} className="flex gap-3 pb-5 last:pb-0 border-b border-[#0f1828] last:border-b-0 mb-5 last:mb-0">
              <div className="w-[2px] bg-navy flex-shrink-0 self-stretch" />
              <div>
                <div className="text-[12px] font-semibold text-white mb-1">{s.t}</div>
                <div className="text-[11px] font-light text-[#4a5a7a] leading-[1.6]">{s.b}</div>
              </div>
            </div>
          ))}
        </div>
        </div>
      </section>

      {/* NOT FOR EVERYONE */}
      <section className="bg-white py-14 md:py-20 px-6 md:px-16" id="standard">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <span className="block w-4 h-px bg-navy" />
              <span className="text-[10px] font-semibold tracking-[4px] uppercase text-navy">Not for Everyone</span>
            </div>
            <h2 className="font-display font-bold text-ink leading-[1.1] tracking-[-0.5px]" style={{ fontSize:"clamp(28px,3.5vw,44px)" }}>
              The Standard{" "}
              <em className="font-display font-normal italic text-navy">Is the Point.</em>
            </h2>
            <div className="w-8 h-0.5 bg-navy my-5" />
            <p className="text-[14px] font-light text-[#333] leading-[1.9] mb-4">
              Notable Vanguard is not an open enrollment service. Every prospective client completes a Vanguard Interest & Application — a short form that allows us to assess fit, verify impact, and ensure that every man who carries the Vanguard name truly embodies what it stands for.
            </p>
            <p className="text-[14px] font-light text-[#333] leading-[1.9] mb-8">
              We are intentional about who we work with because the standard matters. Not everyone will be accepted. That&apos;s exactly what makes it mean something.
            </p>
            <Link href="#apply"
              className="bg-navy text-white text-[10px] font-semibold tracking-[2.5px] uppercase px-7 py-3.5 no-underline hover:bg-navy2 transition-colors duration-200">
              Apply Now
            </Link>
          </div>
          <div>
            <div className="relative w-full aspect-[4/3] mb-7 overflow-hidden">
              <Image src="/images/vanguard-executive.jpg" alt="Executive man looking out window" fill className="object-cover object-center" sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
            <div className="relative bg-navymid p-6 pl-7 mb-7">
              <span className="absolute top-[-8px] left-4 font-display text-[72px] text-navy leading-none opacity-15 select-none">&ldquo;</span>
              <p className="font-display italic text-[17px] text-ink leading-[1.65] relative z-10">
                &ldquo;We are intentional about who we work with because the standard matters.&rdquo;
              </p>
              <div className="text-[10px] font-semibold tracking-[3px] uppercase text-mauve mt-3">Notable Vanguard · DakJen Creative LLC</div>
            </div>
            <div className="bg-navymid p-7">
              <div className="text-[10px] font-semibold tracking-[3px] uppercase text-navy mb-4">Who This Is For</div>
              {forList.map(item => (
                <div key={item} className="flex gap-2.5 py-2.5 border-b border-navywarm last:border-b-0">
                  <span className="text-navy font-bold flex-shrink-0">—</span>
                  <p className="text-[13px] font-light text-[#333] leading-[1.6]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FOUR PILLARS */}
      <section className="bg-bone pb-0 pt-16 px-6 md:px-16">
        <div className="max-w-6xl mx-auto pb-10 grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-12 items-center">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <span className="block w-4 h-px bg-navy" />
              <span className="text-[10px] font-semibold tracking-[4px] uppercase text-navy">What Vanguard Is Built On</span>
            </div>
            <h2 className="font-display font-bold text-ink leading-[1.1] tracking-[-0.5px]" style={{ fontSize:"clamp(28px,3.5vw,44px)" }}>
              Four <em className="font-display font-normal italic text-navy">Standards.</em>
            </h2>
          </div>
          <div className="relative w-full aspect-[16/9] overflow-hidden hidden md:block">
            <Image src="/images/vanguard-cafe.jpg" alt="Young professional at cafe" fill className="object-cover object-center" sizes="50vw" />
          </div>
        </div>
      </section>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[2px] bg-navywarm">
        {pillars.map(p => (
          <div key={p.n} className="bg-white p-10 hover:bg-navymid transition-colors duration-200">
            <div className="font-display font-bold text-[#eef1f8] text-[48px] leading-none mb-3">{p.n}</div>
            <div className="text-[14px] font-semibold text-ink mb-2.5 pb-2.5 border-b border-[#eef1f8]">{p.t}</div>
            <p className="text-[13px] font-light text-[#444] leading-[1.8]">{p.b}</p>
          </div>
        ))}
      </div>

      {/* WHO QUALIFIES */}
      <section className="bg-navydark py-14 md:py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <span className="block w-4 h-px bg-navy" />
              <span className="text-[10px] font-semibold tracking-[4px] uppercase text-navy">Who Qualifies</span>
            </div>
            <h2 className="font-display font-bold text-white leading-[1.1] tracking-[-0.5px] mb-0" style={{ fontSize:"clamp(28px,3.5vw,44px)" }}>
              Not Everyone <em className="font-display font-normal italic text-navy">Makes the Cut.</em>
            </h2>
            <div className="w-8 h-0.5 bg-navy my-5" />
            <p className="text-[14px] font-light text-[#4a5a7a] leading-[1.9] mb-8">
              The Vanguard name means something because we guard it carefully. Every application is reviewed personally. If you qualify, we&apos;ll be in touch.
            </p>
            <Link href="#apply"
              className="inline-block bg-navy text-white text-[10px] font-semibold tracking-[2.5px] uppercase px-7 py-3.5 no-underline hover:bg-navy2 transition-colors duration-200">
              Apply Now
            </Link>
          </div>
          <div>
            <div className="relative w-full aspect-[4/3] mb-7 overflow-hidden">
              <Image src="/images/vanguard-camel.jpg" alt="Man in camel coat on phone" fill className="object-cover object-center" sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
            <div className="flex flex-col">
              {forList.map(item => (
                <div key={item} className="flex gap-3 py-4 border-b border-[#1a2030] first:border-t">
                  <span className="text-navy font-bold flex-shrink-0 mt-0.5">—</span>
                  <p className="text-[13px] font-light text-[#6a7a9a] leading-[1.65]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* APPLICATION */}
      <section className="bg-navymid py-14 md:py-20 px-6 md:px-16" id="apply">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-16 items-start">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <span className="block w-4 h-px bg-navy" />
              <span className="text-[10px] font-semibold tracking-[4px] uppercase text-navy">Vanguard Application</span>
            </div>
            <h2 className="font-display font-bold text-ink leading-[1.1] tracking-[-0.5px] mb-4" style={{ fontSize:"clamp(28px,3.5vw,44px)" }}>
              Are You a <em className="font-display font-normal italic text-navy">Vanguard?</em>
            </h2>
            <div className="w-8 h-0.5 bg-navy mb-5" />
            <p className="text-[14px] font-light text-[#333] leading-[1.85] mb-4">
              Complete the Notable Vanguard Interest & Application. We review every submission personally and reach out to those who qualify.
            </p>
            <p className="text-[14px] font-light text-[#333] leading-[1.85] mb-6">
              Not everyone will be accepted. That&apos;s exactly what makes it matter.
            </p>
            <div className="grid grid-cols-2 gap-2 mb-6">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image src="/images/vanguard-stride.jpg" alt="Man walking with briefcase" fill className="object-cover object-center" sizes="25vw" />
              </div>
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image src="/images/vanguard-collab.jpg" alt="Two men collaborating" fill className="object-cover object-center" sizes="25vw" />
              </div>
            </div>
            <div className="border-t border-navywarm pt-5">
              <p className="text-[11px] font-light text-[#aaa] italic leading-[1.7]">
                Applications are confidential. We review every submission personally and contact qualified applicants directly. The standard is non-negotiable.
              </p>
            </div>
          </div>
          <VanguardForm />
        </div>
      </section>

      <CtaBand
        title={<>Excellence Is Not the Goal. <em className="font-display font-normal italic text-white/40">It Is the Baseline.</em></>}
        body="Notable Vanguard is for the men who are already operating at that level — and ready for the world to see it."
        cta="Apply for Vanguard"
        href="#apply"
        navy={true}
      />
    </div>
  );
}
