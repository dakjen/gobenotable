/**
 * The Essentials price sheet — single source of truth.
 *
 * Both the Essentials page and the quote form read from this, so a price
 * change lands in both places at once. Ids are what the quote form submits
 * and what gets stored, so keep them stable even if a label is reworded.
 */

export type CollateralItem = {
  id: string;
  item: string;
  scope: string;
  price: string;
};

export type CollateralGroup = {
  heading: string;
  note: string;
  items: CollateralItem[];
};

export const collateralGroups: CollateralGroup[] = [
  {
    heading: "Short documents",
    note: "1–3 pages",
    items: [
      { id: "one-pager",       item: "One-pager / sell sheet",   scope: "One service or offer",                          price: "$350" },
      { id: "exec-bio",        item: "Executive bio / resume",   scope: "Speaker- and board-ready",                      price: "$350" },
      { id: "service-promo",   item: "Service promo / brochure", scope: "Sells one service, includes 50 printed copies", price: "$450" },
      { id: "line-card",       item: "Line card / service menu", scope: "Everything you offer, at a glance",             price: "$450" },
      { id: "company-profile", item: "Company profile",          scope: "2–3 pages: who you are, what you do, proof",    price: "$650" },
    ],
  },
  {
    heading: "Long documents",
    note: "",
    items: [
      { id: "proposal-template", item: "Branded proposal / SOW template",          scope: "Reusable proposal system",                  price: "$700" },
      { id: "style-guide",       item: "Brand style mini-guide",                   scope: "Colors, type, logo usage",                  price: "$750" },
      { id: "capabilities",      item: "Capabilities / qualifications package",    scope: "Team bios, resume, service menu, branding", price: "$2,000" },
    ],
  },
  {
    heading: "Presentation and pitch",
    note: "",
    items: [
      { id: "deck-template", item: "Branded deck template",         scope: "Reusable master slides",                   price: "$600" },
      { id: "pitch-deck",    item: "Pitch / investor presentation", scope: "10–15 custom slides, built not templated", price: "$1,400" },
    ],
  },
  {
    heading: "Custom quote",
    note: "scoped individually",
    items: [
      { id: "project-profile", item: "Project profile or case study", scope: "Multi-page, data-rich, flagship-grade", price: "Custom" },
    ],
  },
];

/** Standalone intensives — also quotable. */
export const intensives: CollateralItem[] = [
  { id: "linkedin-intensive", item: "LinkedIn Voice Intensive",              scope: "Profile rewrite, content pillars, 2 months of posts", price: "$1,500+" },
  { id: "video-intensive",    item: "Video Content Intensive",               scope: "Strategy, scripts, posting framework",                price: "$2,000+" },
  { id: "social-handbook",    item: "Social Media Handbook & 30-Day Plan",   scope: "Voice guidelines, calendar, templates",               price: "$2,750+" },
];

/** Flat lookup for turning submitted ids back into readable labels. */
export const allQuotableItems: CollateralItem[] = [
  ...collateralGroups.flatMap((g) => g.items),
  ...intensives,
];

export function labelForId(id: string): string {
  const found = allQuotableItems.find((i) => i.id === id);
  return found ? `${found.item} (${found.price})` : id;
}
