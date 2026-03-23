import Link from "next/link";

export default function NotFound() {
  return (
    <div className="bg-ink min-h-[calc(100vh-94px)] flex items-center justify-center px-6 mt-[36px]">
      <div className="text-center">
        <div className="font-display font-black text-white/5 select-none leading-none mb-[-40px]"
          style={{ fontSize: "clamp(120px,20vw,240px)" }}>
          404
        </div>
        <div className="relative z-10">
          <div className="flex items-center justify-center gap-2.5 mb-5">
            <span className="block w-4 h-px bg-crimson" />
            <span className="text-[10px] font-semibold tracking-[4px] uppercase text-crimson">Page Not Found</span>
            <span className="block w-4 h-px bg-crimson" />
          </div>
          <h1 className="font-display font-bold text-white leading-[1.1] mb-4"
            style={{ fontSize: "clamp(28px,4vw,48px)" }}>
            This page doesn&apos;t exist.{" "}
            <em className="font-display font-normal italic text-crimson">Yet.</em>
          </h1>
          <p className="text-[14px] font-light text-[#555] max-w-[380px] mx-auto leading-[1.8] mb-8">
            But your platform could. Let&apos;s build something worth finding.
          </p>
          <Link href="/"
            className="inline-block bg-crimson text-white text-[10px] font-semibold tracking-[2.5px] uppercase px-7 py-3.5 no-underline hover:bg-crimson2 transition-colors duration-200">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
