import PageHero from "@/components/PageHero";

export type LegalSection = { heading: string; body: React.ReactNode[] };

/** Shared shell for the privacy and terms pages so they read like the rest of the site. */
export default function LegalPage({
  eyebrow, title, subtitle, updated, sections,
}: { eyebrow: string; title: React.ReactNode; subtitle: string; updated: string; sections: LegalSection[] }) {
  return (
    <div>
      <PageHero eyebrow={eyebrow} title={title} subtitle={subtitle} />
      <section className="bg-white py-14 md:py-20 px-6 md:px-16">
        <div className="max-w-3xl mx-auto">
          <p className="text-[10px] font-semibold tracking-[3px] uppercase text-mauve mb-10">Last updated {updated}</p>
          {sections.map((s) => (
            <div key={s.heading} className="mb-10">
              <h2 className="font-display font-bold text-ink text-[22px] md:text-[26px] leading-[1.2] mb-3">{s.heading}</h2>
              <div className="w-5 h-[1.5px] bg-crimson mb-4" />
              {s.body.map((b, i) => (
                <p key={i} className="text-[14px] font-light text-[#333] leading-[1.9] mb-3">{b}</p>
              ))}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
