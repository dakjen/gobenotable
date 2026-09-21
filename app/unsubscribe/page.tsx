import Link from "next/link";

export const metadata = { title: "Unsubscribed — Notable", robots: { index: false } };

const copy = {
  done: { h: "You're off the list.", b: "No more emails from the Notable list. If you ever want back in, the footer of any page will take you." },
  invalid: { h: "That link didn't work.", b: "The unsubscribe link looks incomplete. Email admin@gobenotable.com and we'll remove you by hand." },
  failed: { h: "Something went wrong.", b: "We couldn't reach the mailing list just now. Email admin@gobenotable.com and we'll remove you by hand." },
};

export default function Unsubscribe({ searchParams }: { searchParams: { status?: string } }) {
  const c = copy[(searchParams.status as keyof typeof copy) || "done"] || copy.done;
  return (
    <div className="bg-ink min-h-[calc(100vh-94px)] flex items-center justify-center px-6 mt-[36px]">
      <div className="text-center max-w-[460px]">
        <div className="flex items-center justify-center gap-2.5 mb-5">
          <span className="block w-4 h-px bg-crimson" />
          <span className="text-[10px] font-semibold tracking-[4px] uppercase text-crimson">Email List</span>
          <span className="block w-4 h-px bg-crimson" />
        </div>
        <h1 className="font-display font-bold text-white leading-[1.1] mb-4" style={{ fontSize: "clamp(28px,4vw,44px)" }}>{c.h}</h1>
        <p className="text-[14px] font-light text-[#aaa] leading-[1.8] mb-8">{c.b}</p>
        <Link href="/" className="inline-block bg-crimson text-white text-[10px] font-semibold tracking-[2.5px] uppercase px-7 py-3.5 no-underline hover:bg-crimson2 transition-colors duration-200">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
