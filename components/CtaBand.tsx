import Link from "next/link";

interface CtaBandProps {
  title: React.ReactNode;
  body: string;
  cta: string;
  href?: string;
  navy?: boolean;
}

export default function CtaBand({ title, body, cta, href = "/contact", navy = false }: CtaBandProps) {
  const bg = navy ? "bg-navy" : "bg-crimson";
  const btnBg = "bg-white";
  const btnText = navy ? "text-navy" : "text-crimson";

  return (
    <div className={`${bg} py-14 md:py-20 px-6 text-center relative overflow-hidden`}>
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="font-display font-black italic text-white opacity-[0.03] whitespace-nowrap"
          style={{ fontSize: "clamp(100px,18vw,200px)", letterSpacing: "-6px" }}>
          Notable
        </span>
      </div>
      <h2 className="font-display font-bold text-white leading-[1.1] mb-4 relative z-10"
        style={{ fontSize: "clamp(28px,4vw,48px)" }}>
        {title}
      </h2>
      <p className="text-[14px] font-light text-white/55 max-w-[420px] mx-auto mb-9 leading-[1.8] relative z-10">
        {body}
      </p>
      <Link href={href}
        className={`relative z-10 inline-block ${btnBg} ${btnText} text-[10px] font-semibold tracking-[2.5px] uppercase px-8 py-4 no-underline hover:bg-bone transition-colors duration-200`}>
        {cta}
      </Link>
    </div>
  );
}
