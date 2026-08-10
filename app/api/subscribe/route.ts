import { NextResponse } from "next/server";
import { subscribeToList } from "@/lib/newsletter";
import { sendEmail, renderEmail, p, statRow, linkList, subhead } from "@/lib/email";
import { activeSocialLinks, directContact, proofStats } from "@/lib/social";
import { screenSubmission, rateLimit, clientIp } from "@/lib/spam";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, firstName, source } = body;

    if (typeof email !== "string" || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      return NextResponse.json({ error: "Enter a valid email address" }, { status: 400 });
    }

    const verdict = screenSubmission({
      honeypot: body.company_website,
      renderedAt: body.rendered_at,
      firstName,
      email,
    });
    if (verdict.isSpam) {
      console.warn("Subscribe: dropped spam —", verdict.reason, email);
      return NextResponse.json({ success: true });
    }
    if (!rateLimit(clientIp(req))) {
      return NextResponse.json({ success: true });
    }

    const result = await subscribeToList({
      email,
      firstName: typeof firstName === "string" ? firstName : null,
      source: typeof source === "string" ? source : null,
    });

    if (result === "failed") {
      return NextResponse.json({ error: "Could not sign you up" }, { status: 500 });
    }

    // Only welcome genuinely new subscribers, so a second signup does not
    // send a duplicate.
    if (result === "subscribed") {
      const reachMe = [
        { label: "Email me", url: `mailto:${directContact.email}`, blurb: directContact.email },
        directContact.textNumber
          ? { label: "Call or text me", url: `tel:+${directContact.textNumber}`, blurb: directContact.textDisplay }
          : null,
        { label: "Book a call", url: directContact.bookingUrl, blurb: "45 minutes, no pitch deck." },
        { label: "All my contact details", url: directContact.cardUrl, blurb: "One card, every way to reach me." },
      ].filter(Boolean) as Array<{ label: string; url: string; blurb: string }>;

      const seeTheWork = [
        { label: "See the one-pagers", url: directContact.onePagersUrl, blurb: "Finished work — the actual documents we build." },
        { label: "What everything costs", url: directContact.collateralUrl, blurb: "Priced by the piece, no call required." },
        ...activeSocialLinks().map(({ label, url, blurb }) => ({ label, url, blurb })),
      ];

      await sendEmail({
        to: email,
        toName: typeof firstName === "string" ? firstName : undefined,
        subject: "Thanks for reaching out — here's more of us",
        html: renderEmail({
          preheader: "We'll be in touch. In the meantime, here's where to look around.",
          eyebrow: "Thanks for Your Interest",
          heading: firstName ? `Good to meet you, ${firstName}.` : "Good to meet you.",
          body:
            p("Thanks for showing your interest — we'll reach out and get back to you personally.") +
            p("In the meantime, if you'd like to get a fuller sense of who we are without committing to anything, here's where to look.") +
            subhead("What we've done") +
            p("Notable builds the qualifications packages, decks, one-pagers, and websites that get founders in the room — then the platform that turns expertise they already had into something that earns. One five-year engagement:") +
            statRow(proofStats) +
            p("Not a strategy deck. Finished assets, in hand, ready to send.") +
            subhead("Take a look around") +
            linkList(seeTheWork) +
            subhead("Or just reach out directly") +
            linkList(reachMe),
          signoff: "You've done the work. Now let your brand prove it.",
        }),
      });
    }

    return NextResponse.json({ success: true, status: result });
  } catch (error) {
    console.error("Subscribe error:", error);
    return NextResponse.json({ error: "Could not sign you up" }, { status: 500 });
  }
}
