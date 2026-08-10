import { NextResponse } from "next/server";
import { getDb } from "@/lib/db";
import { sendEmail, renderEmail, p, detailTable, NOTIFY_EMAIL, NOTIFY_CC } from "@/lib/email";
import { screenSubmission, rateLimit, clientIp } from "@/lib/spam";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, phone, service, message } = body;

    if (!firstName || !lastName || !email) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Screened before anything is stored or emailed. Bots get a success
    // response so they have nothing to adapt to.
    const verdict = screenSubmission({
      honeypot: body.company_website,
      renderedAt: body.rendered_at,
      firstName, lastName, email, message,
    });
    if (verdict.isSpam) {
      console.warn("Contact: dropped spam —", verdict.reason, email);
      return NextResponse.json({ success: true });
    }
    if (!rateLimit(clientIp(req))) {
      console.warn("Contact: rate limited", clientIp(req));
      return NextResponse.json({ success: true });
    }

    const sql = getDb();
    await sql`
      INSERT INTO contact_submissions (first_name, last_name, email, phone, service, message)
      VALUES (${firstName}, ${lastName}, ${email}, ${phone || null}, ${service || null}, ${message || null})
    `;

    const fullName = `${firstName} ${lastName}`;

    await sendEmail({
      to: email,
      toName: fullName,
      subject: "We've got your note — let's get your call booked",
      html: renderEmail({
        preheader: "Notable will be in touch within one business day.",
        eyebrow: "Message Received",
        heading: `Thanks, ${firstName}.`,
        body: [
          p("Your note landed with us, and we'll be in touch within one business day to get your discovery call on the calendar."),
          p("The call runs about 45 minutes. We'll talk through where your brand is now, where you want it, and exactly what it would take to close that gap — no pitch deck, no pressure."),
          p("If it helps, have a look at what we build and what it costs before we talk. Everything is priced by the piece, starting at $350."),
        ].join(""),
        cta: { label: "See What We Build", url: "https://gobenotable.com/essentials" },
        signoff: "You've done the work. Now let your brand prove it.",
      }),
    });

    await sendEmail({
      to: NOTIFY_EMAIL,
      cc: [NOTIFY_CC],
      subject: `New inquiry — ${fullName}${service ? ` (${service})` : ""}`,
      replyTo: email,
      html: renderEmail({
        preheader: `${fullName} submitted the contact form.`,
        eyebrow: "New Inquiry",
        heading: fullName,
        body:
          detailTable([
            ["Email", email],
            ["Phone", phone],
            ["Interested in", service],
            ["Message", message],
          ]) + p("Reply directly to this email to reach them."),
        cta: { label: "Open Admin Dashboard", url: "https://gobenotable.com/admin" },
      }),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact submission error:", error);
    return NextResponse.json({ error: "Failed to save submission" }, { status: 500 });
  }
}
