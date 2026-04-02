import { NextResponse } from "next/server";
import { getDb } from "@/lib/db";

export async function POST(req: Request) {
  try {
    const { firstName, lastName, email, phone, company, tier, preferredDate, website, businessDescription, goals, fileUrls } = await req.json();

    if (!firstName || !lastName || !email || !tier) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const sql = getDb();
    const filesJson = fileUrls && fileUrls.length > 0 ? JSON.stringify(fileUrls) : null;

    await sql`
      INSERT INTO intensive_submissions (first_name, last_name, email, phone, company, tier, preferred_date, website, business_description, goals, file_urls)
      VALUES (${firstName}, ${lastName}, ${email}, ${phone || null}, ${company || null}, ${tier}, ${preferredDate || null}, ${website || null}, ${businessDescription || null}, ${goals || null}, ${filesJson})
    `;

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Intensive submission error:", error);
    return NextResponse.json({ error: "Failed to save submission" }, { status: 500 });
  }
}
