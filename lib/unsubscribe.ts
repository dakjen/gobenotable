import { createHmac, timingSafeEqual } from "crypto";

/**
 * One-click unsubscribe links. The token is an HMAC of the address, so the
 * link works without a login and cannot be forged for someone else's address.
 * UNSUBSCRIBE_SECRET is preferred; the Brevo key is a fallback so the link
 * works before that variable exists.
 */
function secret(): string {
  return process.env.UNSUBSCRIBE_SECRET || process.env.BREVO_API_KEY || "notable-dev-secret";
}

export function unsubscribeToken(email: string): string {
  return createHmac("sha256", secret()).update(email.trim().toLowerCase()).digest("hex").slice(0, 32);
}

export function verifyUnsubscribeToken(email: string, token: string): boolean {
  const expected = Buffer.from(unsubscribeToken(email));
  const given = Buffer.from(token || "");
  return expected.length === given.length && timingSafeEqual(expected, given);
}

export function unsubscribeUrl(email: string): string {
  const params = new URLSearchParams({ e: email.trim().toLowerCase(), t: unsubscribeToken(email) });
  return `https://www.gobenotable.com/api/unsubscribe?${params.toString()}`;
}
