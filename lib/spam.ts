/**
 * Spam screening for the public forms.
 *
 * Every submission in the database before 2026-08-10 was bot traffic: random
 * character-string names and dot-variant Gmail addresses, one bot walking
 * every form on the site. Once the forms started sending email, each of those
 * became an outbound message to a junk address, which is how a sending domain
 * loses its reputation. Screening happens before anything is stored or sent.
 *
 * The checks are deliberately cheap and invisible to real visitors — no
 * captcha, no extra click. Anything that scores as spam gets a normal-looking
 * success response so the bot has no signal to adapt to.
 */

export type SpamCheckInput = {
  /** Hidden field no human can see. Anything in it is a bot. */
  honeypot?: unknown;
  /** Epoch ms the form was rendered, round-tripped through a hidden field. */
  renderedAt?: unknown;
  firstName?: unknown;
  lastName?: unknown;
  email?: unknown;
  message?: unknown;
};

/** A human cannot read the page and complete a form in under three seconds. */
const MIN_FILL_MS = 3000;

/** Names with no vowels, or long unbroken consonant runs, are generated. */
function looksGenerated(name: string): boolean {
  const clean = name.trim();
  if (clean.length < 2) return false;
  if (!/[aeiou]/i.test(clean) && clean.length >= 5) return true;
  if (/[bcdfghjklmnpqrstvwxz]{5,}/i.test(clean)) return true;
  // Mixed-case noise like "kAYowXAmwqDWOQSmvDh"
  if (clean.length >= 12 && /[a-z][A-Z]/.test(clean) && /[A-Z][a-z]/.test(clean)) {
    const switches = (clean.match(/[a-z][A-Z]|[A-Z][a-z]/g) || []).length;
    if (switches >= 4) return true;
  }
  return false;
}

/**
 * Gmail ignores dots, so "a.b.c.d.e@gmail.com" is one mailbox wearing many
 * disguises — the signature of the traffic already in this database.
 */
function isDotStuffedGmail(email: string): boolean {
  const [local, domain] = email.toLowerCase().split("@");
  if (!domain || !/^(gmail|googlemail)\.com$/.test(domain)) return false;
  const dots = (local.match(/\./g) || []).length;
  return dots >= 3;
}

const LINK_PATTERN = /(https?:\/\/|\[url=|<a\s+href)/i;

export type SpamVerdict = { isSpam: boolean; reason: string | null };

export function screenSubmission(input: SpamCheckInput): SpamVerdict {
  const { honeypot, renderedAt, firstName, lastName, email, message } = input;

  if (typeof honeypot === "string" && honeypot.trim() !== "") {
    return { isSpam: true, reason: "honeypot filled" };
  }

  const rendered = Number(renderedAt);
  if (Number.isFinite(rendered) && rendered > 0) {
    const elapsed = Date.now() - rendered;
    if (elapsed < MIN_FILL_MS) return { isSpam: true, reason: `submitted in ${elapsed}ms` };
  }

  const first = typeof firstName === "string" ? firstName : "";
  const last = typeof lastName === "string" ? lastName : "";
  if (looksGenerated(first) || looksGenerated(last)) {
    return { isSpam: true, reason: "generated-looking name" };
  }

  const addr = typeof email === "string" ? email : "";
  if (isDotStuffedGmail(addr)) {
    return { isSpam: true, reason: "dot-stuffed gmail address" };
  }

  if (typeof message === "string" && (message.match(LINK_PATTERN) || []).length > 0 && message.length < 400) {
    const linkCount = (message.match(/https?:\/\//gi) || []).length;
    if (linkCount >= 2) return { isSpam: true, reason: "link-stuffed message" };
  }

  return { isSpam: false, reason: null };
}

/**
 * Per-IP rate limit. In-memory, so it resets on cold start and is per-instance
 * — enough to stop a bot hammering one lambda, not a substitute for a real
 * limiter if volume ever justifies one.
 */
const hits = new Map<string, number[]>();
const WINDOW_MS = 60 * 60 * 1000;
const MAX_PER_WINDOW = 5;

export function rateLimit(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  if (recent.length >= MAX_PER_WINDOW) {
    hits.set(ip, recent);
    return false;
  }
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear(); // crude ceiling on memory growth
  return true;
}

export function clientIp(req: Request): string {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown"
  );
}
