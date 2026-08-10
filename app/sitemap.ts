import type { MetadataRoute } from "next";

const BASE = "https://gobenotable.com";

const routes: Array<{ path: string; priority: number; changeFrequency: "weekly" | "monthly" }> = [
  { path: "/",           priority: 1.0,  changeFrequency: "weekly" },
  { path: "/essentials", priority: 0.9,  changeFrequency: "monthly" },
  { path: "/quote",      priority: 0.9,  changeFrequency: "monthly" },
  { path: "/amplify",    priority: 0.85, changeFrequency: "monthly" },
  { path: "/results",    priority: 0.8,  changeFrequency: "monthly" },
  { path: "/about",      priority: 0.7,  changeFrequency: "monthly" },
  { path: "/intensive",  priority: 0.7,  changeFrequency: "monthly" },
  { path: "/vanguard",   priority: 0.6,  changeFrequency: "monthly" },
  { path: "/contact",    priority: 0.6,  changeFrequency: "monthly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${BASE}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
