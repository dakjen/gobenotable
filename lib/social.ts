/**
 * Where a lukewarm lead can follow along without committing to anything.
 *
 * Used by the email-list welcome email. Entries with an empty url are simply
 * not rendered, so an unfinished channel never ships as a dead link.
 */

export type SocialLink = {
  label: string;
  url: string;
  blurb: string;
};

export const socialLinks: SocialLink[] = [
  {
    label: "Substack",
    url: "https://substack.com/@dakjencreative",
    blurb: "Longer pieces on visibility, positioning, and building a platform that earns.",
  },
  {
    label: "LinkedIn",
    url: "",
    blurb: "Where most of it happens first — and where our clients get found.",
  },
  {
    label: "Instagram",
    url: "",
    blurb: "The work itself: decks, one-pagers, and brands mid-transformation.",
  },
];

export const activeSocialLinks = (): SocialLink[] => socialLinks.filter((l) => l.url.trim() !== "");

/** Direct lines. An empty value is omitted rather than rendered dead. */
export const directContact = {
  email: "admin@gobenotable.com",
  /** Digits only. Enables the call/text links. */
  textNumber: "12026009741",
  textDisplay: "(202) 600-9741",
  bookingUrl: "https://gobenotable.com/contact",
  /** Digital card — every way to reach Dakotah in one place. */
  cardUrl: "https://www.dakjencreative.com/card",
  /** Priced price sheet on the Notable site. */
  collateralUrl: "https://gobenotable.com/essentials",
  /** The one-pager showcase — actual finished work to look at. */
  onePagersUrl: "https://www.dakjencreative.com/onepagers",
};

/** Headline results from the five-year engagement on /results. */
export const proofStats: Array<{ figure: string; label: string }> = [
  { figure: "+237%", label: "Network growth" },
  { figure: "28×", label: "Engagement increase" },
  { figure: "336", label: "Posts published" },
  { figure: "3,898", label: "Connections added" },
];
