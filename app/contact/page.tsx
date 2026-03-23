import Image from "next/image";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";

export const metadata = { title: "Book a Discovery Call — Notable" };

const steps = [
  { n: "01", t: "We listen",    b: "Tell us what you've built, what you're working toward, and what's been getting in the way." },
  { n: "02", t: "We assess",    b: "We look at what you're sitting on — the opportunities you may be too close to see." },
  { n: "03", t: "We recommend", b: "You leave with a clear picture of what Notable would build for you and what it would take to get started." },
];

export default function Contact() {
  return (
    <div>
      <PageHero
        eyebrow="Get Started"
        title={<>Book a <em className="font-display font-normal italic text-crimson">Discovery Call</em></>}
        subtitle="In 45 minutes, we'll map out your platform, identify your opportunities, and show you exactly what Notable can build for you. No pressure — just clarity."
      />

      {/* MAIN CONTACT */}
      <section className="bg-bone py-14 md:py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-16 items-start">

          {/* Left */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <span className="block w-4 h-px bg-crimson" />
              <span className="text-[10px] font-semibold tracking-[4px] uppercase text-crimson">What to Expect</span>
            </div>
            <h2 className="font-display font-bold text-ink leading-[1.1] tracking-[-0.5px] mb-0"
              style={{ fontSize: "clamp(28px,3.5vw,44px)" }}>
              Let&apos;s Map Out<br />What You&apos;re{" "}
              <em className="font-display font-normal italic text-crimson">Building.</em>
            </h2>
            <div className="w-8 h-0.5 bg-crimson my-5" />
            <p className="text-[14px] font-light text-[#333] leading-[1.9] mb-10">
              On your discovery call, we&apos;ll spend time understanding your business, your goals, and where you are right now. We&apos;ll tell you exactly what we&apos;d recommend building and why.
            </p>

            {/* Steps */}
            <div className="flex flex-col mb-10">
              {steps.map((s) => (
                <div key={s.n} className="flex gap-5 items-start py-5 border-b border-warm last:border-b-0 first:border-t">
                  <span className="font-display font-normal italic text-warm text-[30px] leading-none w-10 flex-shrink-0 pt-0.5">{s.n}</span>
                  <div>
                    <div className="text-[13px] font-semibold text-ink mb-1">{s.t}</div>
                    <div className="text-[12px] font-light text-[#444] leading-[1.65]">{s.b}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative w-full aspect-[4/3] mb-10 overflow-hidden">
              <Image src="/images/hero-joyful.jpg" alt="Joyful woman founder" fill className="object-cover object-top" sizes="(max-width: 768px) 100vw, 40vw" />
            </div>

            <div className="border-t border-warm pt-5">
              <a href="mailto:admin@gobenotable.com"
                className="block text-[14px] font-light text-ink no-underline hover:text-crimson transition-colors duration-200 mb-2">
                admin@gobenotable.com
              </a>
              <a href="https://gobenotable.com" target="_blank" rel="noopener noreferrer"
                className="block text-[14px] font-light text-ink no-underline hover:text-crimson transition-colors duration-200">
                gobenotable.com
              </a>
            </div>
          </div>

          {/* Right — form */}
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
