import type { MetadataRoute } from "next";
import { allCheckpoints } from "@/data/milestones";
import { allConcerns } from "@/data/concerns";
import { allGuides } from "@/data/guides";

const BASE_URL = "https://ismybabyalright.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE_URL}/milestones`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/checklist`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/concerns`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/tools/growth`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/tools/adjusted-age`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/tools/regression-log`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/resources/mental-health`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/resources/early-intervention`, changeFrequency: "monthly", priority: 0.7 },
  ];

  const milestoneRoutes: MetadataRoute.Sitemap = allCheckpoints.map((cp) => ({
    url: `${BASE_URL}/milestones/${cp.id}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const concernRoutes: MetadataRoute.Sitemap = allConcerns.map((c) => ({
    url: `${BASE_URL}/concerns/${c.slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const guideRoutes: MetadataRoute.Sitemap = allGuides.map((g) => ({
    url: `${BASE_URL}/resources/guides/${g.slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...milestoneRoutes, ...concernRoutes, ...guideRoutes];
}
