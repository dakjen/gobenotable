/**
 * Server-side bounds for the public forms. The browser enforces the same
 * rules for feedback; this is what stops a scripted client from storing a
 * 2MB "message" or an address that is not one.
 */
const EMAIL = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

export const LIMITS = { short: 200, long: 5000 } as const;

export function validEmail(v: unknown): v is string {
  return typeof v === "string" && v.length <= 254 && EMAIL.test(v);
}

/** First field name whose value exceeds its cap, or null when all fit. */
export function tooLong(fields: Record<string, unknown>, longFields: string[] = []): string | null {
  for (const [name, value] of Object.entries(fields)) {
    if (typeof value !== "string") continue;
    const cap = longFields.includes(name) ? LIMITS.long : LIMITS.short;
    if (value.length > cap) return name;
  }
  return null;
}
