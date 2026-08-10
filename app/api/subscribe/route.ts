import { NextResponse } from "next/server";
import { subscribeToList } from "@/lib/newsletter";
import { sendEmail, renderEmail, p } from "@/lib/email";
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
      await sendEmail({
        to: email,
        toName: typeof firstName === "string" ? firstName : undefined,
        subject: "You're on the list",
        html: renderEmail({
          preheader: "Notes on getting seen — and first word on new openings.",
          eyebrow: "Welcome",
          heading: firstName ? `Glad you're here, ${firstName}.` : "Glad you're here.",
          body: [
            p("You're on the Notable list. Expect occasional notes on getting seen — what's actually working on LinkedIn, what belongs in a capabilities package, and how founders turn expertise they already have into something that earns."),
            p("You'll also get first word when 24-Hour Brand Intensive dates open. We only take two a month, and they go to this list first."),
            p("No noise. Unsubscribe any time from the link at the bottom of any email."),
          ].join(""),
          cta: { label: "See What We Build", url: "https://gobenotable.com/essentials" },
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
