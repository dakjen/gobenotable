import { NextResponse } from "next/server";
import { getDb } from "@/lib/db";

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

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Vanguard application error:", error);
    return NextResponse.json({ error: "Failed to save application" }, { status: 500 });
  }
}
