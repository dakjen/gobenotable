import { NextResponse } from "next/server";
import { getDb } from "@/lib/db";
import { sendEmail, renderEmail, p, detailTable, NOTIFY_EMAIL } from "@/lib/email";

export async function POST(req: Request) {
  try {
    const { firstName, lastName, email, phone, company, industry, workImpact, bringsOthers, linkedin, website } = await req.json();

    if (!firstName || !lastName || !email) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const sql = getDb();
    await sql`
      INSERT INTO vanguard_applications (first_name, last_name, email, phone, company, industry, work_impact, brings_others, linkedin, website)
      VALUES (${firstName}, ${lastName}, ${email}, ${phone || null}, ${company || null}, ${industry || null}, ${workImpact || null}, ${bringsOthers || null}, ${linkedin || null}, ${website || null})
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
