import type { MetadataRoute } from "next";

/**
 * AI crawlers are named explicitly rather than relying on the wildcard.
 * Several of them (OAI-SearchBot, PerplexityBot, ClaudeBot) are what put a
 * site into assistant answers, and some operators only honour a rule that
 * names them. /admin and /api are kept out of every index.
 */
const AI_AGENTS = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-User",
  "Claude-SearchBot",
  "anthropic-ai",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot",
  "Applebot-Extended",
  "Bingbot",
  "meta-externalagent",
  "Amazonbot",
  "DuckAssistBot",
  "cohere-ai",
  "YouBot",
];

export default function robots(): MetadataRoute.Robots {
  const disallow = ["/admin", "/api/"];

  return {
    rules: [
      { userAgent: "*", allow: "/", disallow },
      ...AI_AGENTS.map((userAgent) => ({ userAgent, allow: "/", disallow })),
    ],
    sitemap: "https://gobenotable.com/sitemap.xml",
    host: "https://gobenotable.com",
  };
}
