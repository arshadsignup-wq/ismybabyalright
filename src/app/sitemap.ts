import type { MetadataRoute } from "next";
import { allCheckpoints } from "@/data/milestones";
import { allConcerns } from "@/data/concerns";
import { allGuides } from "@/data/guides";
import { allChecklists } from "@/data/checklists/checklists";
import { allTriageTrees } from "@/data/triage";
import { allNames } from "@/data/baby-names/names";

const BASE_URL = "https://www.ismybabyalright.com";

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
    { url: `${BASE_URL}/tracker`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/tracker/feeding`, changeFrequency: "weekly", priority: 0.6 },
    { url: `${BASE_URL}/tracker/sleep`, changeFrequency: "weekly", priority: 0.6 },
    { url: `${BASE_URL}/settings`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE_URL}/sharing`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/triage`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/vaccines`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/tracker/health`, changeFrequency: "weekly", priority: 0.6 },
    { url: `${BASE_URL}/food`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/food/allergens`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/mental-health`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/mental-health/check-in`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/mental-health/partner`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/fairness`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/checklists`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/sleep`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/feeding`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/tummy-time`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/teething`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/poop-guide`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/doctor-visits`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/growth-spurts`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/skin-guide`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/about`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE_URL}/age-advice`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/baby-names`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/disclaimer`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/emergency-info`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/meal-planner`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/privacy`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/quiz/parenting-style`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/sources`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE_URL}/tools/weight-for-length`, changeFrequency: "monthly", priority: 0.7 },
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

  const checklistRoutes: MetadataRoute.Sitemap = allChecklists.map((cl) => ({
    url: `${BASE_URL}/checklists/${cl.slug}`,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const triageRoutes: MetadataRoute.Sitemap = allTriageTrees.map((t) => ({
    url: `${BASE_URL}/triage/${t.slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const babyNameRoutes: MetadataRoute.Sitemap = allNames.map((n) => ({
    url: `${BASE_URL}/baby-names/${n.slug}`,
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  const ageAdviceRoutes: MetadataRoute.Sitemap = Array.from({ length: 37 }, (_, i) => ({
    url: `${BASE_URL}/age-advice/${i}`,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...milestoneRoutes, ...concernRoutes, ...guideRoutes, ...checklistRoutes, ...triageRoutes, ...babyNameRoutes, ...ageAdviceRoutes];
}
