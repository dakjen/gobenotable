import { NextResponse } from "next/server";
import { getDb } from "@/lib/db";
import { sendEmail, renderEmail, p, detailTable, NOTIFY_EMAIL, NOTIFY_CC, escapeHtml } from "@/lib/email";
import { labelForId } from "@/lib/collateral";

export async function POST(req: Request) {
  try {
    const { firstName, lastName, email, phone, company, website, timeline, budget, details, items } = await req.json();

    if (!firstName || !lastName || !email) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }
    if (!Array.isArray(items) || items.length === 0) {
      return NextResponse.json({ error: "Select at least one item" }, { status: 400 });
    }

    // The email is the delivery mechanism; the row is the record. If the
    // insert fails (table not migrated yet, database down) we still want the
    // lead to reach the inbox rather than losing it to a 500.
    try {
      const sql = getDb();
      await sql`
        INSERT INTO quote_requests (first_name, last_name, email, phone, company, website, timeline, budget, details, items)
        VALUES (${firstName}, ${lastName}, ${email}, ${phone || null}, ${company || null}, ${website || null}, ${timeline || null}, ${budget || null}, ${details || null}, ${JSON.stringify(items)})
      `;
    } catch (dbError) {
      console.error("Quote request: insert failed, continuing to email", dbError);
    }

    const fullName = `${firstName} ${lastName}`;
    const labels = (items as string[]).map(labelForId);

    // Reflecting the selection back is the whole value of the confirmation:
    // it proves we captured what they picked before any price is quoted.
    const selectionList = `<ul style="margin:4px 0 18px 0;padding-left:18px;font-family:Helvetica,Arial,sans-serif;font-size:14px;line-height:1.9;color:#0F0F0F;">${labels
      .map((l) => `<li>${escapeHtml(l)}</li>`)
      .join("")}</ul>`;

    await sendEmail({
      to: email,
      toName: fullName,
      subject: "Your Notable quote request",
      html: renderEmail({
        preheader: "An itemized quote is on its way within one business day.",
        eyebrow: "Quote Requested",
        heading: `Thanks, ${firstName}.`,
        body:
          p("We have your request and we're pricing it now. Here's what you asked us to quote:") +
          selectionList +
          p("You'll have an itemized quote within one business day — scope, price, and turnaround for each piece. Prices on the site are starting points; your quote confirms the final scope.") +
          p("If anything above is wrong, just reply to this email and we'll adjust before we send it."),
        signoff: "You've done the work. Now let your brand prove it.",
      }),
    });

    await sendEmail({
      to: NOTIFY_EMAIL,
      cc: [NOTIFY_CC],
      subject: `Quote request — ${fullName}${company ? ` (${company})` : ""} · ${labels.length} item${labels.length === 1 ? "" : "s"}`,
      replyTo: email,
      html: renderEmail({
        preheader: `${fullName} requested a quote for ${labels.length} item(s).`,
        eyebrow: "New Quote Request",
        heading: fullName,
        body:
          selectionList +
          detailTable([
            ["Email", email],
            ["Phone", phone],
            ["Company", company],
            ["Website", website],
            ["Timeline", timeline],
            ["Budget", budget],
            ["Details", details],
          ]) +
          p("Reply directly to this email to send the quote."),
        cta: { label: "Open Admin Dashboard", url: "https://gobenotable.com/admin" },
      }),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Quote request error:", error);
    return NextResponse.json({ error: "Failed to save quote request" }, { status: 500 });
  }
}
