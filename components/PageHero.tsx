interface PageHeroProps {
  eyebrow: string;
  title: React.ReactNode;
  subtitle: string;
  dark?: boolean;
}

export default function PageHero({ eyebrow, title, subtitle, dark = true }: PageHeroProps) {
  return (
    <div className={`${dark ? "bg-ink" : "bg-bone"} px-6 md:px-16 pt-[calc(36px+clamp(60px,8vw,100px))] pb-[clamp(50px,7vw,90px)] border-b border-crimson relative overflow-hidden`}>
      <div className="grain absolute inset-0 pointer-events-none" />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex items-center gap-3 mb-5">
          <span className="block w-4 h-px bg-crimson" />
          <span className="text-[10px] font-semibold tracking-[4px] uppercase text-crimson">{eyebrow}</span>
        </div>
        <h1 className="font-display font-black leading-[1.02] tracking-[-1px] mb-4"
          style={{ fontSize: "clamp(40px,6.5vw,76px)", color: dark ? "#fff" : "#0F0F0F" }}>
          {title}
        </h1>
        <p className="text-[15px] font-light leading-[1.8] max-w-[580px]"
          style={{ color: dark ? "#666" : "#555" }}>
          {subtitle}
        </p>
      </div>
    </div>
  );
}
