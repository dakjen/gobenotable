import { NextResponse } from "next/server";
import { getDb } from "@/lib/db";
import { sendEmail, renderEmail, p, detailTable, NOTIFY_EMAIL, NOTIFY_CC } from "@/lib/email";
import { screenSubmission, rateLimit, clientIp } from "@/lib/spam";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, phone, company, tier, preferredDate, website, businessDescription, goals, fileUrls } = body;

    if (!firstName || !lastName || !email || !tier) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const verdict = screenSubmission({
      honeypot: body.company_website,
      renderedAt: body.rendered_at,
      firstName, lastName, email, message: businessDescription,
    });
    if (verdict.isSpam) {
      console.warn("Intensive: dropped spam —", verdict.reason, email);
      return NextResponse.json({ success: true });
    }
    if (!rateLimit(clientIp(req))) {
      console.warn("Intensive: rate limited", clientIp(req));
      return NextResponse.json({ success: true });
    }

    const sql = getDb();
    const filesJson = fileUrls && fileUrls.length > 0 ? JSON.stringify(fileUrls) : null;

    await sql`
      INSERT INTO intensive_submissions (first_name, last_name, email, phone, company, tier, preferred_date, website, business_description, goals, file_urls)
      VALUES (${firstName}, ${lastName}, ${email}, ${phone || null}, ${company || null}, ${tier}, ${preferredDate || null}, ${website || null}, ${businessDescription || null}, ${goals || null}, ${filesJson})
    `;

    const fullName = `${firstName} ${lastName}`;
    const fileCount = Array.isArray(fileUrls) ? fileUrls.length : 0;

    await sendEmail({
      to: email,
      toName: fullName,
      subject: "Your 24-Hour Brand Intensive request is in",
      html: renderEmail({
        preheader: "We'll confirm your date and send the deposit link.",
        eyebrow: "Intensive Requested",
        heading: `You're on the list, ${firstName}.`,
        body: [
          p(`We have your request for the ${tier}. We only take two intensives a month, so the next step is confirming your date — we'll come back to you within one business day with availability and the deposit link.`),
          p("A 50% deposit reserves your day. Once it's booked, we'll send a short kickoff agenda so we can use the full hour well."),
          p("Then it's simple: a one-hour kickoff, twenty-four hours of build, and you walk away with everything ready to use."),
        ].join(""),
        signoff: "Give us 24 hours. Walk away with your brand.",
      }),
    });

    await sendEmail({
      to: NOTIFY_EMAIL,
      cc: [NOTIFY_CC],
      subject: `Intensive booking — ${fullName} (${tier})`,
      replyTo: email,
      html: renderEmail({
        preheader: `${fullName} requested a 24-Hour Brand Intensive.`,
        eyebrow: "New Intensive Request",
        heading: fullName,
        body:
          detailTable([
            ["Tier", tier],
            ["Preferred date", preferredDate],
            ["Email", email],
            ["Phone", phone],
            ["Company", company],
            ["Website", website],
            ["Business", businessDescription],
            ["Goals", goals],
            ["Files uploaded", fileCount > 0 ? `${fileCount} file${fileCount === 1 ? "" : "s"}` : null],
          ]) +
          (fileCount > 0
            ? `<ul style="margin:4px 0 14px 0;padding-left:18px;font-family:Helvetica,Arial,sans-serif;font-size:13px;line-height:1.8;color:#333333;">${(fileUrls as string[])
                .map((u) => `<li><a href="${u}" style="color:#8B1A34;">${u.split("/").pop()}</a></li>`)
                .join("")}</ul>`
            : "") +
          p("Reply directly to this email to reach them."),
        cta: { label: "Open Admin Dashboard", url: "https://gobenotable.com/admin" },
      }),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Intensive submission error:", error);
    return NextResponse.json({ error: "Failed to save submission" }, { status: 500 });
  }
}
