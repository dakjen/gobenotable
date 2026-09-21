import { NextResponse } from "next/server";
import { verifyUnsubscribeToken } from "@/lib/unsubscribe";
import { removeFromList } from "@/lib/newsletter";

/**
 * GET is what a person clicks; POST is what mail clients send for
 * List-Unsubscribe-Post. Both remove the address from the Brevo list.
 */
async function handle(req: Request) {
  const url = new URL(req.url);
  const email = (url.searchParams.get("e") || "").trim().toLowerCase();
  const token = url.searchParams.get("t") || "";
  const done = new URL("/unsubscribe", url.origin);

  if (!email || !verifyUnsubscribeToken(email, token)) {
    done.searchParams.set("status", "invalid");
    return NextResponse.redirect(done, 303);
  }

  const ok = await removeFromList(email);
  done.searchParams.set("status", ok ? "done" : "failed");
  return NextResponse.redirect(done, 303);
}

export const GET = handle;
export const POST = handle;
