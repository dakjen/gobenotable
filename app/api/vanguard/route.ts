import { NextResponse } from "next/server";
import { getDb } from "@/lib/db";
import { sendEmail, renderEmail, p, detailTable, NOTIFY_EMAIL, NOTIFY_CC } from "@/lib/email";
import { screenSubmission, rateLimit, clientIp } from "@/lib/spam";
import { attributionFromPayload, attributionSummary } from "@/lib/attribution";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, phone, company, industry, workImpact, bringsOthers, linkedin, website } = body;

    if (!firstName || !lastName || !email) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const verdict = screenSubmission({
      honeypot: body.company_website,
      renderedAt: body.rendered_at,
      firstName, lastName, email, message: workImpact,
    });
    if (verdict.isSpam) {
      console.warn("Vanguard: dropped spam —", verdict.reason, email);
      return NextResponse.json({ success: true });
    }
    if (!rateLimit(clientIp(req))) {
      console.warn("Vanguard: rate limited", clientIp(req));
      return NextResponse.json({ success: true });
    }

    const attr = attributionFromPayload(body);
    const sql = getDb();
    await sql`
      INSERT INTO vanguard_applications (first_name, last_name, email, phone, company, industry, work_impact, brings_others, linkedin, website, attr_source, attr_medium, attr_campaign, attr_referrer, attr_landing_page, attr_submitted_from)
      VALUES (${firstName}, ${lastName}, ${email}, ${phone || null}, ${company || null}, ${industry || null}, ${workImpact || null}, ${bringsOthers || null}, ${linkedin || null}, ${website || null}, ${attr.source}, ${attr.medium}, ${attr.campaign}, ${attr.referrer}, ${attr.landingPage}, ${attr.submittedFrom})
    `;

    const fullName = `${firstName} ${lastName}`;

    // Applicant confirmation — Vanguard navy, deliberately restrained.
    // The application is reviewed, so promise a review, not acceptance.
    await sendEmail({
      to: email,
      toName: fullName,
      subject: "Your Vanguard application has been received",
      html: renderEmail({
        brand: "vanguard",
        preheader: "We review every Vanguard application personally.",
        eyebrow: "Application Received",
        heading: `Thank you, ${firstName}.`,
        body: [
          p("Your Notable Vanguard application is in. Every submission is reviewed personally — not screened by a form — and we reach out directly to those who qualify."),
          p("Vanguard is not open enrollment, and not everyone is accepted. That is exactly what makes it mean something. If your work meets the standard, you will hear from us."),
          p("In the meantime, nothing further is needed from you."),
        ].join(""),
        signoff: "He leads. He excels. He brings others with him.",
      }),
    });

    // Internal notification — the full application, ready to act on.
    await sendEmail({
      to: NOTIFY_EMAIL,
      cc: [NOTIFY_CC],
      subject: `Vanguard application — ${fullName}${company ? ` (${company})` : ""}`,
      replyTo: email,
      html: renderEmail({
        brand: "vanguard",
        preheader: `${fullName} applied for Vanguard.`,
        eyebrow: "New Application",
        heading: fullName,
        body:
          detailTable([
            ["Email", email],
            ["Phone", phone],
            ["Company", company],
            ["Industry", industry],
            ["LinkedIn", linkedin],
            ["Website", website],
            ["Work & impact", workImpact],
            ["Brings others with him", bringsOthers],
            ["Found you via", attributionSummary(attr)],
          ]) + p("Reply directly to this email to reach the applicant."),
        cta: { label: "Open Admin Dashboard", url: "https://gobenotable.com/admin" },
      }),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Vanguard application error:", error);
    return NextResponse.json({ error: "Failed to save application" }, { status: 500 });
  }
}
