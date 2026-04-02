import { put } from "@vercel/blob";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { searchParams } = new URL(req.url);
  const filename = searchParams.get("filename");

  if (!filename || !req.body) {
    return NextResponse.json({ error: "Missing file" }, { status: 400 });
  }

  const blob = await put(`intensive/${Date.now()}-${filename}`, req.body, {
    access: "public",
  });

  return NextResponse.json({ url: blob.url });
}
