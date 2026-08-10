/**
 * Transactional email via Brevo.
 *
 * Every send is best-effort: a failure here must never fail the form
 * submission that triggered it. Callers get a boolean and the route keeps
 * going — the record is already in the database either way.
 */

const BREVO_ENDPOINT = "https://api.brevo.com/v3/smtp/email";

/** Verified Brevo sender. Must be verified in Brevo or sends are rejected. */
const FROM_EMAIL = process.env.EMAIL_FROM || "admin@gobenotable.com";
const FROM_NAME = "Notable";

/** Where internal notifications land. */
const NOTIFY_EMAIL = process.env.NOTIFY_EMAIL || "admin@gobenotable.com";

/**
 * Copied on every internal notification, so nothing is missed if the
 * gobenotable.com inbox is not being watched. Client-facing confirmations
 * are never CC'd — those stay one-to-one.
 */
const NOTIFY_CC = process.env.NOTIFY_CC || "dakjencreativellc@gmail.com";

type SendArgs = {
  to: string;
  toName?: string;
  subject: string;
  html: string;
  replyTo?: string;
  cc?: string[];
};

export async function sendEmail({ to, toName, subject, html, replyTo, cc }: SendArgs): Promise<boolean> {
  const key = process.env.BREVO_API_KEY;
  if (!key) {
    console.error("sendEmail: BREVO_API_KEY is not set — skipping send to", to);
    return false;
  }

  // Brevo rejects a cc address that duplicates the to address, and an
  // empty cc array, so resolve the list before building the payload.
  const ccList = (cc ?? []).filter((a) => a.toLowerCase() !== to.toLowerCase());

  try {
    const res = await fetch(BREVO_ENDPOINT, {
      method: "POST",
      headers: {
        "api-key": key,
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        sender: { name: FROM_NAME, email: FROM_EMAIL },
        to: [{ email: to, ...(toName ? { name: toName } : {}) }],
        ...(ccList.length ? { cc: ccList.map((email) => ({ email })) } : {}),
        subject,
        htmlContent: html,
        ...(replyTo ? { replyTo: { email: replyTo } } : {}),
      }),
    });

    if (!res.ok) {
      console.error("sendEmail: Brevo rejected send", res.status, await res.text());
      return false;
    }
    return true;
  } catch (error) {
    console.error("sendEmail: request failed", error);
    return false;
  }
}

/* ---------------------------------------------------------------- layout */

const PALETTE = {
  notable: { accent: "#8B1A34", accentDark: "#6E1429", eyebrowOn: "#0F0F0F" },
  vanguard: { accent: "#1E3A6E", accentDark: "#152A50", eyebrowOn: "#0a0f1a" },
};

type Brand = keyof typeof PALETTE;

type LayoutArgs = {
  brand?: Brand;
  preheader: string;
  eyebrow: string;
  heading: string;
  /** Pre-escaped HTML block — paragraphs, lists, detail tables. */
  body: string;
  cta?: { label: string; url: string };
  signoff?: string;
};

/**
 * Table-based layout with inline styles — the only thing that renders
 * reliably across Outlook, Gmail and Apple Mail. No external images, so
 * nothing breaks when a client blocks remote content.
 */
export function renderEmail({
  brand = "notable",
  preheader,
  eyebrow,
  heading,
  body,
  cta,
  signoff,
}: LayoutArgs): string {
  const c = PALETTE[brand];
  const wordmark = brand === "vanguard" ? "Notable&nbsp;Vanguard" : "Notable";

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="color-scheme" content="light">
<title>${escapeHtml(heading)}</title>
</head>
<body style="margin:0;padding:0;background:#F4F1EE;">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;">${escapeHtml(preheader)}</div>

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#F4F1EE;">
    <tr>
      <td align="center" style="padding:32px 16px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;background:#ffffff;">

          <!-- masthead -->
          <tr>
            <td style="background:${c.eyebrowOn};padding:26px 34px;">
              <div style="font-family:Helvetica,Arial,sans-serif;font-size:13px;font-weight:600;letter-spacing:5px;text-transform:uppercase;color:#ffffff;">${wordmark}</div>
              <div style="font-family:Georgia,'Times New Roman',serif;font-style:italic;font-size:12px;color:#8a8a8a;padding-top:5px;">Go Be Notable. We&rsquo;ll Do The Rest.</div>
            </td>
          </tr>
          <tr><td style="height:3px;background:${c.accent};font-size:0;line-height:0;">&nbsp;</td></tr>

          <!-- body -->
          <tr>
            <td style="padding:38px 34px 30px 34px;">
              <div style="font-family:Helvetica,Arial,sans-serif;font-size:10px;font-weight:600;letter-spacing:3.5px;text-transform:uppercase;color:${c.accent};padding-bottom:12px;">${escapeHtml(eyebrow)}</div>
              <h1 style="margin:0 0 18px 0;font-family:Georgia,'Times New Roman',serif;font-weight:700;font-size:28px;line-height:1.2;color:#0F0F0F;">${escapeHtml(heading)}</h1>
              <div style="width:34px;height:2px;background:${c.accent};margin-bottom:22px;font-size:0;line-height:0;">&nbsp;</div>
              ${body}
              ${
                cta
                  ? `<table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin:28px 0 6px 0;">
                       <tr><td style="background:${c.accent};">
                         <a href="${escapeAttr(cta.url)}" style="display:inline-block;padding:15px 30px;font-family:Helvetica,Arial,sans-serif;font-size:10px;font-weight:600;letter-spacing:2.5px;text-transform:uppercase;color:#ffffff;text-decoration:none;">${escapeHtml(cta.label)}</a>
                       </td></tr>
                     </table>`
                  : ""
              }
              ${
                signoff
                  ? `<p style="margin:26px 0 0 0;font-family:Georgia,'Times New Roman',serif;font-style:italic;font-size:15px;line-height:1.7;color:#0F0F0F;">${escapeHtml(signoff)}</p>`
                  : ""
              }
            </td>
          </tr>

          <!-- footer -->
          <tr>
            <td style="background:#0F0F0F;padding:24px 34px;">
              <div style="font-family:Helvetica,Arial,sans-serif;font-size:11px;line-height:1.8;color:#777777;">
                Notable &middot; a brand of DakJen Creative LLC<br>
                <a href="https://gobenotable.com" style="color:#999999;text-decoration:none;">gobenotable.com</a>
              </div>
              <div style="font-family:Georgia,'Times New Roman',serif;font-style:italic;font-size:11px;color:${c.accent === "#1E3A6E" ? "#5a7ab0" : "#7B4F5E"};padding-top:10px;">
                &ldquo;You&rsquo;ve done the work. Now let your brand prove it.&rdquo;
              </div>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

/** Body paragraph in the house style. */
export function p(text: string): string {
  return `<p style="margin:0 0 15px 0;font-family:Helvetica,Arial,sans-serif;font-size:15px;line-height:1.75;color:#333333;">${escapeHtml(text)}</p>`;
}

/** Label/value block — used for the internal notification emails. */
export function detailTable(rows: Array<[string, string | null | undefined]>): string {
  const cells = rows
    .filter(([, v]) => v != null && String(v).trim() !== "")
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding:11px 0;border-bottom:1px solid #E8E3DE;font-family:Helvetica,Arial,sans-serif;font-size:10px;font-weight:600;letter-spacing:2px;text-transform:uppercase;color:#7B4F5E;width:38%;vertical-align:top;">${escapeHtml(label)}</td>
          <td style="padding:11px 0;border-bottom:1px solid #E8E3DE;font-family:Helvetica,Arial,sans-serif;font-size:14px;line-height:1.65;color:#0F0F0F;">${escapeHtml(String(value)).replace(/\n/g, "<br>")}</td>
        </tr>`
    )
    .join("");

  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:6px 0 4px 0;">${cells}</table>`;
}

/** Proof numbers as a bordered row — reads at a glance before any copy does. */
export function statRow(stats: Array<{ figure: string; label: string }>): string {
  const cells = stats
    .map(
      (s) => `
      <td style="padding:0 14px 0 0;vertical-align:top;">
        <div style="font-family:Georgia,'Times New Roman',serif;font-weight:700;font-size:26px;line-height:1;color:#8B1A34;">${escapeHtml(s.figure)}</div>
        <div style="font-family:Helvetica,Arial,sans-serif;font-size:9px;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;color:#7B4F5E;padding-top:5px;">${escapeHtml(s.label)}</div>
      </td>`
    )
    .join("");

  return `<table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin:6px 0 20px 0;border-top:1px solid #E8E3DE;border-bottom:1px solid #E8E3DE;"><tr><td style="padding:18px 0;"><table role="presentation" cellpadding="0" cellspacing="0" border="0"><tr>${cells}</tr></table></td></tr></table>`;
}

/** Labelled links with a line of context each. */
export function linkList(items: Array<{ label: string; url: string; blurb?: string }>): string {
  const rows = items
    .map(
      (i) => `
      <tr>
        <td style="padding:10px 0;border-bottom:1px solid #E8E3DE;">
          <a href="${escapeHtml(i.url)}" style="font-family:Helvetica,Arial,sans-serif;font-size:14px;font-weight:600;color:#8B1A34;text-decoration:none;">${escapeHtml(i.label)} &rarr;</a>
          ${i.blurb ? `<div style="font-family:Helvetica,Arial,sans-serif;font-size:12px;line-height:1.6;color:#666666;padding-top:3px;">${escapeHtml(i.blurb)}</div>` : ""}
        </td>
      </tr>`
    )
    .join("");

  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:4px 0 18px 0;">${rows}</table>`;
}

/** Small section heading inside an email body. */
export function subhead(text: string): string {
  return `<div style="font-family:Helvetica,Arial,sans-serif;font-size:10px;font-weight:600;letter-spacing:2.5px;text-transform:uppercase;color:#0F0F0F;padding:14px 0 8px 0;">${escapeHtml(text)}</div>`;
}

export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function escapeAttr(value: string): string {
  return escapeHtml(value);
}

export { NOTIFY_EMAIL, NOTIFY_CC };
