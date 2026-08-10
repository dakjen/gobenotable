import Link from "next/link";
import NewsletterSignup from "@/components/NewsletterSignup";

const pages = [
  { label: "Home",       href: "/" },
  { label: "About",      href: "/about" },
  { label: "Essentials", href: "/essentials" },
  { label: "Amplify",    href: "/amplify" },
  { label: "Results",    href: "/results" },
  { label: "Vanguard",   href: "/vanguard" },
  { label: "Request a Quote", href: "/quote" },
  { label: "Book a Call",href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-ink border-t border-crimson pt-12 md:pt-16 px-6 md:px-16">
      {/* Email list */}
      <div className="max-w-6xl mx-auto pb-12 border-b border-[#161616] grid grid-cols-1 md:grid-cols-[1fr_1.1fr] gap-8 md:gap-14 items-start">
        <div>
          <div className="text-[9px] font-semibold tracking-[3px] uppercase text-crimson mb-3">The Notable List</div>
          <h3 className="font-display font-bold text-white text-[24px] md:text-[28px] leading-[1.15] mb-2">
            Don&apos;t be the best-kept secret on <em className="font-display font-normal italic text-crimson">our</em> list either.
          </h3>
          <p className="text-[12px] font-light text-[#888] leading-[1.75] max-w-[380px]">
            Notes on getting seen — what&apos;s working, what belongs in your materials, and when
            Intensive dates open.
          </p>
        </div>
        <div className="md:pt-8">
          <NewsletterSignup tone="dark" source="footer" />
        </div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 py-12 border-b border-[#161616]">
        {/* Brand */}
        <div>
          <div className="font-sans font-semibold text-[13px] tracking-[5px] uppercase text-white mb-1">
            Notable
          </div>
          <div className="text-[11px] font-light italic text-mauve mb-4">
            Go Be Notable. We&apos;ll Do The Rest.
          </div>
          <p className="text-[11px] font-light text-[#555] leading-relaxed">
            A brand of DakJen Creative LLC<br />
            Serving high-performing women founders,<br />
            executives, and leaders.
          </p>
        </div>

        {/* Pages */}
        <nav>
          <h5 className="text-[9px] font-semibold tracking-[3px] uppercase text-[#444] mb-4">
            Pages
          </h5>
          <ul className="list-none space-y-2">
            {pages.map((p) => (
              <li key={p.href}>
                <Link
                  href={p.href}
                  className="text-[12px] font-light text-[#777] no-underline hover:text-white transition-colors duration-200"
                >
                  {p.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact */}
        <div>
          <h5 className="text-[9px] font-semibold tracking-[3px] uppercase text-[#444] mb-4">
            Contact
          </h5>
          <a
            href="mailto:admin@gobenotable.com"
            className="block text-[12px] font-light text-[#777] no-underline hover:text-white transition-colors duration-200 mb-2"
          >
            admin@gobenotable.com
          </a>
          <a
            href="https://gobenotable.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-[12px] font-light text-[#777] no-underline hover:text-white transition-colors duration-200"
          >
            gobenotable.com
          </a>
          <p className="mt-5 text-[11px] italic text-mauve leading-relaxed">
            &ldquo;You&apos;ve done the work.<br />
            Now let your brand prove it.&rdquo;
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto py-4 flex flex-col md:flex-row justify-between items-center gap-2">
        <p className="text-[10px] font-light text-[#777]">
          © 2026 Notable by DakJen Creative LLC — All Rights Reserved.
        </p>
        <p className="text-[10px] font-light text-[#777]">
          All prices shown are starting points.
        </p>
      </div>
    </footer>
  );
}
