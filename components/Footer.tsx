import Link from "next/link";

const pages = [
  { label: "Home",       href: "/" },
  { label: "About",      href: "/about" },
  { label: "Essentials", href: "/essentials" },
  { label: "Amplify",    href: "/amplify" },
  { label: "Vanguard",   href: "/vanguard" },
  { label: "Book a Call",href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-ink border-t border-crimson pt-12 md:pt-16 px-6 md:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-[#161616]">
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
        <p className="text-[10px] font-light text-[#444]">
          © 2026 Notable by DakJen Creative LLC — All Rights Reserved.
        </p>
        <p className="text-[10px] font-light text-[#1a1a1a]">gobenotable.com</p>
      </div>
    </footer>
  );
}
