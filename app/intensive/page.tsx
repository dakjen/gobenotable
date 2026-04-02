import PageHero from "@/components/PageHero";
import IntensiveForm from "@/components/IntensiveForm";

export const metadata = { title: "Book Your 24-Hour Brand Intensive — Notable" };

export default function Intensive() {
  return (
    <div>
      <PageHero
        eyebrow="Limited Availability · 2 Per Month"
        title={<>The 24-Hour <em className="font-display font-normal italic text-crimson">Brand Intensive</em></>}
        subtitle="Give us 24 hours. Walk away with your brand. Fill out the form below to reserve your date."
      />

      <section className="bg-bone py-14 md:py-20 px-6 md:px-16">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="block w-4 h-px bg-crimson" />
            <span className="text-[10px] font-semibold tracking-[4px] uppercase text-crimson">Reserve Your Date</span>
          </div>
          <h2 className="font-display font-bold text-ink leading-[1.1] tracking-[-0.5px] mb-3"
            style={{ fontSize: "clamp(24px,3vw,36px)" }}>
            Tell Us About You &amp; Your{" "}
            <em className="font-display font-normal italic text-crimson">Business.</em>
          </h2>
          <p className="text-[13px] font-light text-[#444] leading-[1.85] mb-8">
            Once we receive your submission, we&apos;ll confirm availability for your preferred date and send over the deposit details to lock it in.
          </p>
          <IntensiveForm />
        </div>
      </section>
    </div>
  );
}
