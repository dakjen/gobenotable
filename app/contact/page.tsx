import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";

export const metadata = { title: "Book a Discovery Call — Notable" };

const allServices = [
  { name: "Ready 2 Roll",           what: "7-pg qual package, deck template, 1-pg website",                          time: "2–3 weeks",  price: "$1,000" },
  { name: "Get Loud",               what: "8–12 pg qual package, deck template, 2–4 pg website + maintenance",        time: "3–4 weeks",  price: "$1,750" },
  { name: "Marquis",                what: "Full qual package, full deck, 2–4 pg premium website, 1 yr maintenance",   time: "4 weeks",    price: "$3,000" },
  { name: "+ Updates & More",       what: "Qual updates, deck changes, website updates",                               time: "1 week",     price: "$150/service" },
  { name: "LinkedIn Voice Intensive",what: "Profile rewrite, voice strategy, 2 months of posts, content calendar",   time: "2–3 weeks",  price: "From $1,500" },
  { name: "Notable Amplify",        what: "Platform assessment, revenue stream buildout, deliverables + launch package", time: "6–8 weeks", price: "From $8,000" },
  { name: "Amplify+ Ongoing",       what: "Monthly content, strategy sessions, brand management, partner coordination", time: "Ongoing",   price: "$3,000–$5,000/mo" },
];

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
      <section className="bg-bone py-20 md:py-28 px-6 md:px-16">
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
            <p className="text-[14px] font-light text-[#555] leading-[1.9] mb-10">
              On your discovery call, we&apos;ll spend time understanding your business, your goals, and where you are right now. We&apos;ll tell you exactly what we&apos;d recommend building and why.
            </p>

            {/* Steps */}
            <div className="flex flex-col mb-10">
              {steps.map((s) => (
                <div key={s.n} className="flex gap-5 items-start py-5 border-b border-warm last:border-b-0 first:border-t">
                  <span className="font-display font-normal italic text-warm text-[30px] leading-none w-10 flex-shrink-0 pt-0.5">{s.n}</span>
                  <div>
                    <div className="text-[13px] font-semibold text-ink mb-1">{s.t}</div>
                    <div className="text-[12px] font-light text-[#666] leading-[1.65]">{s.b}</div>
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

      {/* SERVICES REFERENCE */}
      <section className="bg-white py-16 md:py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="block w-4 h-px bg-crimson" />
            <span className="text-[10px] font-semibold tracking-[4px] uppercase text-crimson">Quick Reference</span>
          </div>
          <h2 className="font-display font-bold text-ink leading-[1.1] tracking-[-0.5px] mb-8"
            style={{ fontSize: "clamp(28px,3.5vw,44px)" }}>
            Notable <em className="font-display font-normal italic text-crimson">at a Glance</em>
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-[13px] font-light">
              <thead>
                <tr className="border-b-[1.5px] border-crimson">
                  {["Service", "What You Get", "Timeline", "Price"].map((h) => (
                    <th key={h} className="text-left py-3 px-4 text-[10px] font-semibold tracking-[2.5px] uppercase text-mauve">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {allServices.map((row, i) => (
                  <tr key={row.name} className={`border-b border-warm ${i % 2 === 1 ? "bg-bone" : ""}`}>
                    <td className="py-4 px-4 font-semibold text-ink whitespace-nowrap">{row.name}</td>
                    <td className="py-4 px-4 text-[#555]">{row.what}</td>
                    <td className="py-4 px-4 text-[#555] whitespace-nowrap">{row.time}</td>
                    <td className="py-4 px-4 font-bold text-crimson whitespace-nowrap">{row.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
