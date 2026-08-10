/**
 * Brevo contact list management.
 *
 * List 3 is "Notable — Email List". Override with BREVO_LIST_ID if the list is
 * ever rebuilt, so a changed id does not need a code deploy.
 */

const LIST_ID = Number(process.env.BREVO_LIST_ID || 3);

type SubscribeArgs = {
  email: string;
  firstName?: string | null;
  lastName?: string | null;
  /** Where the signup came from, so list growth can be attributed. */
  source?: string | null;
};

export type SubscribeResult = "subscribed" | "already" | "failed";

/**
 * Adds or updates a contact on the list. updateEnabled means an existing
 * contact is re-added rather than erroring, which is what we want — someone
 * signing up twice should not see a failure.
 */
export async function subscribeToList({ email, firstName, lastName, source }: SubscribeArgs): Promise<SubscribeResult> {
  const key = process.env.BREVO_API_KEY;
  if (!key) {
    console.error("subscribeToList: BREVO_API_KEY is not set");
    return "failed";
  }

  try {
    const res = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "api-key": key,
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        email,
        listIds: [LIST_ID],
        updateEnabled: true,
        attributes: {
          ...(firstName ? { FIRSTNAME: firstName } : {}),
          ...(lastName ? { LASTNAME: lastName } : {}),
          ...(source ? { SOURCE: source } : {}),
        },
      }),
    });

    if (res.ok) return "subscribed";

    // Brevo returns 400 duplicate_parameter when the contact already exists
    // and updateEnabled could not apply. Treat that as success, not an error.
    const text = await res.text();
    if (res.status === 400 && text.includes("duplicate_parameter")) return "already";

    console.error("subscribeToList: Brevo rejected", res.status, text);
    return "failed";
  } catch (error) {
    console.error("subscribeToList: request failed", error);
    return "failed";
  }
}
