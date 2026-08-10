import PageHero from "@/components/PageHero";
import QuoteForm from "@/components/QuoteForm";

export const metadata = { title: "Request a Quote — Notable" };

const steps = [
  { n: "01", t: "Pick your pieces", b: "Tick everything you want priced. One document or the whole kit." },
  { n: "02", t: "We scope it", b: "We look at what you selected and what it's for, then write it up." },
  { n: "03", t: "You get a number", b: "An itemized quote within one business day — scope, price, turnaround." },
];

export default function Quote() {
  return (
    <div>
      <PageHero
        eyebrow="Notable Essentials"
        title={<>Request a <em className="font-display font-normal italic text-crimson">Quote</em></>}
        subtitle="Tell us what you need and we'll price it. No call required, no obligation — select the pieces you want and we'll come back with an itemized quote within one business day."
      />

      <section className="bg-bone py-14 md:py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_1.6fr] gap-12 md:gap-16 items-start">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <span className="block w-4 h-px bg-crimson" />
              <span className="text-[10px] font-semibold tracking-[4px] uppercase text-crimson">How It Works</span>
            </div>
            <h2 className="font-display font-bold text-ink leading-[1.1] tracking-[-0.5px] mb-6" style={{ fontSize: "clamp(26px,3.5vw,40px)" }}>
              Three Steps. <em className="font-display font-normal italic text-crimson">One Number.</em>
            </h2>

            <div className="flex flex-col mb-8">
              {steps.map((s) => (
                <div key={s.n} className="flex gap-4 items-start py-4 border-b border-warm first:border-t">
                  <span className="font-display font-normal italic text-mid text-[26px] leading-none w-8 flex-shrink-0 pt-0.5">{s.n}</span>
                  <div>
                    <div className="text-[13px] font-semibold text-ink mb-1">{s.t}</div>
                    <div className="text-[12px] font-light text-[#444] leading-[1.7]">{s.b}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-white border border-warm p-6">
              <div className="text-[9px] font-semibold tracking-[3px] uppercase text-mauve mb-3">Good to know</div>
              {[
                "All prices shown are starting points",
                "Two rounds of revisions included",
                "35% deposit, 65% on delivery",
                "1–2 weeks for a single item",
              ].map((t) => (
                <div key={t} className="flex gap-2.5 py-2 border-b border-warm last:border-b-0">
                  <span className="text-crimson font-bold flex-shrink-0">—</span>
                  <p className="text-[12px] font-light text-[#444] leading-[1.6]">{t}</p>
                </div>
              ))}
            </div>

            <p className="text-[12px] font-light text-[#666] leading-[1.75] mt-6">
              Would rather talk it through? <a href="/contact" className="text-crimson underline">Book a discovery call</a> instead.
            </p>
          </div>

          <QuoteForm />
        </div>
      </section>
    </div>
  );
}
