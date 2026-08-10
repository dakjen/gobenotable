/**
 * Lead attribution.
 *
 * Vercel Analytics counts visits in aggregate and cannot tell you which of
 * them became a client. This does: every submission carries the channel it
 * came from, the page it landed on, and the page it converted on, stored
 * alongside the lead itself. That is the join that turns "400 people came
 * from LinkedIn" into "three of them bought."
 */

export type Attribution = {
  source: string | null;
  medium: string | null;
  campaign: string | null;
  referrer: string | null;
  landingPage: string | null;
  submittedFrom: string | null;
};

export const EMPTY_ATTRIBUTION: Attribution = {
  source: null,
  medium: null,
  campaign: null,
  referrer: null,
  landingPage: null,
  submittedFrom: null,
};

const STORAGE_KEY = "notable_attribution";

/** Referrer hosts worth naming, so reports read as channels not URLs. */
const KNOWN_SOURCES: Array<[RegExp, string]> = [
  [/(^|\.)linkedin\.com$/i, "linkedin"],
  [/(^|\.)google\./i, "google"],
  [/(^|\.)bing\.com$/i, "bing"],
  [/(^|\.)duckduckgo\.com$/i, "duckduckgo"],
  [/(^|\.)instagram\.com$/i, "instagram"],
  [/(^|\.)facebook\.com$/i, "facebook"],
  [/(^|\.)t\.co$/i, "twitter"],
  [/(^|\.)x\.com$/i, "twitter"],
  [/(^|\.)youtube\.com$/i, "youtube"],
  [/(^|\.)chatgpt\.com$/i, "chatgpt"],
  [/(^|\.)openai\.com$/i, "chatgpt"],
  [/(^|\.)perplexity\.ai$/i, "perplexity"],
  [/(^|\.)claude\.ai$/i, "claude"],
  [/(^|\.)dakjencreative\.com$/i, "djc-parent-site"],
];

function classifyReferrer(referrer: string): string | null {
  if (!referrer) return null;
  try {
    const host = new URL(referrer).hostname;
    if (host === window.location.hostname) return null; // internal navigation
    const match = KNOWN_SOURCES.find(([pattern]) => pattern.test(host));
    return match ? match[1] : host.replace(/^www\./, "");
  } catch {
    return null;
  }
}

/**
 * Captures attribution on first page view and keeps it for the session, so a
 * visitor who lands from LinkedIn, browses four pages and then converts is
 * still credited to LinkedIn rather than to an internal referrer.
 */
export function captureAttribution(): void {
  if (typeof window === "undefined") return;
  try {
    if (sessionStorage.getItem(STORAGE_KEY)) return;

    const params = new URLSearchParams(window.location.search);
    const referrer = document.referrer || "";

    const attribution: Attribution = {
      source: params.get("utm_source") || classifyReferrer(referrer) || "direct",
      medium: params.get("utm_medium"),
      campaign: params.get("utm_campaign"),
      referrer: referrer || null,
      landingPage: window.location.pathname + window.location.search,
      submittedFrom: null,
    };

    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(attribution));
  } catch {
    // Private browsing can block sessionStorage. Attribution is a nice-to-have;
    // never let it interfere with the page.
  }
}

/** Read stored attribution and stamp on the page the visitor converted from. */
export function getAttribution(): Attribution {
  if (typeof window === "undefined") return EMPTY_ATTRIBUTION;
  try {
    const stored = sessionStorage.getItem(STORAGE_KEY);
    const base: Attribution = stored ? { ...EMPTY_ATTRIBUTION, ...JSON.parse(stored) } : { ...EMPTY_ATTRIBUTION, source: "direct" };
    return { ...base, submittedFrom: window.location.pathname };
  } catch {
    return { ...EMPTY_ATTRIBUTION, submittedFrom: window.location.pathname };
  }
}

/** Server-side: pull attribution off a submitted payload, tolerating absence. */
export function attributionFromPayload(payload: unknown): Attribution {
  const a = (payload as { attribution?: Partial<Attribution> })?.attribution;
  if (!a) return EMPTY_ATTRIBUTION;
  const clip = (v: unknown) => (typeof v === "string" && v.trim() ? v.trim().slice(0, 500) : null);
  return {
    source: clip(a.source),
    medium: clip(a.medium),
    campaign: clip(a.campaign),
    referrer: clip(a.referrer),
    landingPage: clip(a.landingPage),
    submittedFrom: clip(a.submittedFrom),
  };
}

/** Readable one-liner for the notification emails. */
export function attributionSummary(a: Attribution): string {
  const parts = [
    a.source && `Source: ${a.source}`,
    a.medium && `Medium: ${a.medium}`,
    a.campaign && `Campaign: ${a.campaign}`,
    a.landingPage && `Landed on: ${a.landingPage}`,
    a.submittedFrom && `Converted on: ${a.submittedFrom}`,
    a.referrer && `Referrer: ${a.referrer}`,
  ].filter(Boolean);
  return parts.length ? parts.join(" · ") : "No attribution captured";
}
