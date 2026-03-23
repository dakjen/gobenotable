"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { label: "About",      href: "/about" },
  { label: "Essentials", href: "/essentials" },
  { label: "Amplify",    href: "/amplify" },
  { label: "Vanguard",   href: "/vanguard" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-ink border-b border-crimson">
      <div className="h-[58px] flex items-center justify-between px-6 md:px-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 no-underline" onClick={() => setOpen(false)}>
          <div className="flex gap-[3px] items-end">
            <div className="w-[6px] h-[13px] rounded-t-sm bg-[#3a3a3a] relative before:content-[''] before:absolute before:-top-[7px] before:left-0 before:right-0 before:mx-auto before:w-[4px] before:h-[4px] before:rounded-full before:bg-[#3a3a3a]" />
            <div className="w-[6px] h-[19px] rounded-t-sm bg-crimson relative before:content-[''] before:absolute before:-top-[7px] before:left-0 before:right-0 before:mx-auto before:w-[4px] before:h-[4px] before:rounded-full before:bg-crimson" />
            <div className="w-[6px] h-[13px] rounded-t-sm bg-[#3a3a3a] relative before:content-[''] before:absolute before:-top-[7px] before:left-0 before:right-0 before:mx-auto before:w-[4px] before:h-[4px] before:rounded-full before:bg-[#3a3a3a]" />
          </div>
          <span className="font-sans font-semibold text-[13px] tracking-[5px] uppercase text-white">
            Notable
          </span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8 list-none">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`text-[10px] font-medium tracking-[2px] uppercase no-underline transition-colors duration-200 ${
                  pathname === l.href ? "text-white" : "text-[#666] hover:text-white"
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/contact"
              className="text-[10px] font-semibold tracking-[2px] uppercase text-white bg-crimson px-5 py-2.5 no-underline hover:bg-crimson2 transition-colors duration-200"
            >
              Book a Call
            </Link>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2 bg-transparent border-none cursor-pointer"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-[1.5px] bg-white transition-all duration-200 ${open ? "rotate-45 translate-y-[6.5px]" : ""}`} />
          <span className={`block w-5 h-[1.5px] bg-white transition-all duration-200 ${open ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-[1.5px] bg-white transition-all duration-200 ${open ? "-rotate-45 -translate-y-[6.5px]" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-ink border-t border-[#1a1a1a] px-6 pb-6 pt-4 flex flex-col gap-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`text-[11px] font-medium tracking-[2px] uppercase no-underline transition-colors duration-200 py-1 ${
                pathname === l.href ? "text-white" : "text-[#666] hover:text-white"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="text-[10px] font-semibold tracking-[2px] uppercase text-white bg-crimson px-5 py-2.5 no-underline hover:bg-crimson2 transition-colors duration-200 text-center mt-2"
          >
            Book a Call
          </Link>
        </div>
      )}
    </nav>
  );
}
