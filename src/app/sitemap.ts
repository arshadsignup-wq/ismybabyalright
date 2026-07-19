import type { MetadataRoute } from "next";
import { allCheckpoints } from "@/data/milestones";
import { allConcerns } from "@/data/concerns";
import { allGuides } from "@/data/guides";
import { allChecklists } from "@/data/checklists/checklists";
import { allTriageTrees } from "@/data/triage";
import { allNames } from "@/data/baby-names/names";
import { monthlyDevelopment } from "@/data/development-months";
import { allIllnesses, allIllnessComparisons } from "@/data/illnesses";
import { allEmergencyGuides } from "@/data/emergency";
import { allSymptomGuides } from "@/data/symptoms";
import { allVaccineDetails, allVaccineDiseases } from "@/data/vaccines/details";
import { newbornWeeks } from "@/data/newborn-weeks";
import { postpartumWeeks } from "@/data/postpartum-weeks";
import { pregnancyWeeks, trimesterGuides } from "@/data/pregnancy-weeks";

const BASE_URL = "https://www.ismybabyalright.com";

export async function generateSitemaps() {
  return [
    { id: 0 }, // static + tools + milestones + triage + guides + checklists + age-advice
    { id: 1 }, // concerns
    { id: 2 }, // baby names
    { id: 3 }, // illnesses
    { id: 4 }, // emergency guides
    { id: 5 }, // symptoms
    { id: 6 }, // vaccine details
  ];
}

export default function sitemap({ id }: { id: number }): MetadataRoute.Sitemap {
  const now = new Date().toISOString().split("T")[0];

  if (id === 1) {
    // Concerns sitemap
    return allConcerns.map((c) => ({
      url: `${BASE_URL}/concerns/${c.slug}`,
      lastModified: "2026-06-05",
      changeFrequency: "monthly",
      priority: 0.8,
    }));
  }

  if (id === 2) {
    // Baby names sitemap
    return allNames.map((n) => ({
      url: `${BASE_URL}/baby-names/${n.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    }));
  }

  if (id === 3) {
    // Illnesses sitemap
    const illnessRoutes: MetadataRoute.Sitemap = allIllnesses.map((illness) => ({
      url: `${BASE_URL}/illnesses/${illness.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    }));
    const comparisonRoutes: MetadataRoute.Sitemap = allIllnessComparisons.map((c) => ({
      url: `${BASE_URL}/illnesses/comparison/${c.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    }));
    return [...illnessRoutes, ...comparisonRoutes];
  }

  if (id === 4) {
    // Emergency guides sitemap
    return allEmergencyGuides.map((guide) => ({
      url: `${BASE_URL}/emergency/${guide.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    }));
  }

  if (id === 5) {
    // Symptoms sitemap
    return allSymptomGuides.map((symptom) => ({
      url: `${BASE_URL}/symptoms/${symptom.bodySystem}/${symptom.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    }));
  }

  if (id === 6) {
    // Vaccine details sitemap
    const vaccineRoutes: MetadataRoute.Sitemap = allVaccineDetails.map((v) => ({
      url: `${BASE_URL}/vaccines/${v.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    }));
    const diseaseRoutes: MetadataRoute.Sitemap = allVaccineDiseases.map((d) => ({
      url: `${BASE_URL}/vaccines/diseases/${d.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    }));
    return [...vaccineRoutes, ...diseaseRoutes];
  }

  // id === 0: Static pages + tools + milestones + triage + guides + checklists + age-advice
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE_URL}/milestones`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/checklist`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/concerns`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/tools/growth`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/tools/adjusted-age`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/tools/regression-log`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/resources/mental-health`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/resources/early-intervention`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/tools`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/triage`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/vaccines`, changeFrequency: "monthly", priority: 0.7 },
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
    { url: `${BASE_URL}/editorial-policy`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE_URL}/medical-review`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE_URL}/terms`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/contact`, changeFrequency: "yearly", priority: 0.4 },
    { url: `${BASE_URL}/age-advice`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/baby-names`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/disclaimer`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/emergency-info`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/meal-planner`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/privacy`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/quiz/parenting-style`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/sources`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE_URL}/tools/weight-for-length`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/tools/medicine-dosage`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/tools/sleep-schedule`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/tools/feeding-amount`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/first-aid`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/tools/height-predictor`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/quiz/potty-training`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/tools/diaper-size`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/tools/car-seat`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/tools/childcare-cost`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/resources/guides`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/tools/due-date`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/tools/ovulation`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/tools/contraction-timer`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/tools/eye-color`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/tools/gender-predictor`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/tools/bmi`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/tools/wonder-weeks`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/tools/breast-milk-storage`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/tools/screen-time`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/tools/baby-proofing`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/tools/kick-counter`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/tools/pumping-schedule`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/tools/name-generator`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/tools/pregnancy-tracker`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/tools/baby-budget`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/tools/emergency-contacts`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/product-safety`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/sign-language`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/developmental-activities`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/conditions`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/symptoms`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/when-to-call-the-doctor`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/glossary`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/development`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/development/red-flags`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/pregnancy`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/safety`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/newborn`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/postpartum`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/feeding/breastfeeding`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/feeding/formula`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/feeding/weaning`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/toddler`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/potty-training`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/discipline`, changeFrequency: "monthly", priority: 0.7 },
    // Comparison guides
    { url: `${BASE_URL}/feeding/breastfeeding-vs-formula`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/tools/tylenol-vs-motrin`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/sleep/crib-vs-bassinet`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/feeding/purees-vs-baby-led-weaning`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/safety/rear-facing-vs-forward-facing`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/concerns/eczema-vs-baby-acne`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/food/cow-milk-vs-formula`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    // New hub pages
    { url: `${BASE_URL}/emergency`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/illnesses`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/growth`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/behavior`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/ages`, changeFrequency: "monthly", priority: 0.8 },
    // Sleep sub-pages
    { url: `${BASE_URL}/sleep/sleep-training`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/sleep/safe-sleep`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/sleep/regressions`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/sleep/naps`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/sleep/night-waking`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/sleep/bedtime-resistance`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/sleep/sleep-associations`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/sleep/night-terrors`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/sleep/sleep-environment`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/sleep/newborn-0-3mo`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/sleep/3-6mo`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/sleep/6-12mo`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/sleep/toddler-12-24mo`, changeFrequency: "monthly", priority: 0.7 },
    // Feeding sub-pages
    { url: `${BASE_URL}/feeding/solid-foods`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/feeding/bottle-feeding`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/feeding/pumping`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/feeding/food-allergies`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/feeding/schedule-by-age`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/feeding/food-refusal`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/feeding/reflux-feeding`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/feeding/premature-feeding`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/feeding/newborn`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/feeding/4-6mo`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/feeding/6-9mo`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/feeding/9-12mo`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/feeding/12-18mo`, changeFrequency: "monthly", priority: 0.7 },
    // Development sub-pages
    { url: `${BASE_URL}/development/gross-motor`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/development/fine-motor`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/development/speech-language`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/development/cognitive`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/development/social-emotional`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/development/sensory`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/development/delays`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/development/screening`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/development/early-intervention`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/development/therapy-types`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/development/autism-signs`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/development/speech-delay`, changeFrequency: "monthly", priority: 0.8 },
    // Growth sub-pages
    { url: `${BASE_URL}/growth/charts`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/growth/percentiles`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/growth/weight`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/growth/height`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/growth/head-circumference`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/growth/failure-to-thrive`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/growth/premature`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/growth/newborn-weight-loss`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/growth/who-vs-cdc`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/growth/breastfed-vs-formula`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/growth/slow-weight-gain`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/growth/crossing-percentiles`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/growth/nutrition`, changeFrequency: "monthly", priority: 0.7 },
    // Behavior sub-pages
    { url: `${BASE_URL}/behavior/tantrums`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/behavior/biting`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/behavior/hitting`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/behavior/separation-anxiety`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/behavior/screen-time`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/behavior/discipline`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/behavior/sharing`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/behavior/new-sibling`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/behavior/potty-training`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/behavior/emotional-regulation`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/behavior/fears`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/behavior/picky-eating`, changeFrequency: "monthly", priority: 0.7 },
    // Safety sub-pages
    { url: `${BASE_URL}/safety/kitchen`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/safety/bathroom`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/safety/nursery`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/safety/water`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/safety/car-seat`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/safety/choking-prevention`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/safety/poison-prevention`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/safety/fall-prevention`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/safety/burns`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/safety/outdoor`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/safety/pet-safety`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/safety/travel`, changeFrequency: "monthly", priority: 0.7 },
    // Milestone sub-pages
    { url: `${BASE_URL}/milestones/missed`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/milestones/not-rolling-6mo`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/milestones/not-sitting-9mo`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/milestones/not-crawling-12mo`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/milestones/not-walking-15mo`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/milestones/not-walking-18mo`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/milestones/no-words-12mo`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/milestones/no-words-18mo`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/milestones/not-pointing-12mo`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/milestones/not-babbling-9mo`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/milestones/no-two-word-phrases-2yr`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/milestones/not-responding-to-name`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/milestones/early-vs-late-walkers`, changeFrequency: "monthly", priority: 0.7 },
    // Vaccine sub-pages
    { url: `${BASE_URL}/vaccines/safety`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/vaccines/schedule`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/vaccines/side-effects`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/vaccines/questions`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/vaccines/myths`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/vaccines/how-vaccines-work`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/vaccines/after-vaccination`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/vaccines/delayed-schedule`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/vaccines/premature`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/vaccines/travel`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/vaccines/diseases`, changeFrequency: "monthly", priority: 0.8 },
    // Pregnancy sub-pages
    { url: `${BASE_URL}/pregnancy/labor-signs`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/pregnancy/birth-plan`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/pregnancy/prenatal-tests`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/pregnancy/nutrition`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/pregnancy/exercise`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/pregnancy/complications`, changeFrequency: "monthly", priority: 0.8 },
    // Postpartum sub-pages
    { url: `${BASE_URL}/postpartum/recovery`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/postpartum/warning-signs`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/postpartum/mental-health`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/postpartum/partner`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/postpartum/body-changes`, changeFrequency: "monthly", priority: 0.7 },
    // Mental health sub-pages
    { url: `${BASE_URL}/mental-health/ppd`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/mental-health/anxiety`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/mental-health/rage`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/mental-health/burnout`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/mental-health/grief`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/mental-health/self-care`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/mental-health/when-to-get-help`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/mental-health/resources`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/mental-health/dads`, changeFrequency: "monthly", priority: 0.7 },
    // Potty training sub-pages
    { url: `${BASE_URL}/potty-training/readiness`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/potty-training/methods`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/potty-training/regression`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/potty-training/nighttime`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/potty-training/poop-withholding`, changeFrequency: "monthly", priority: 0.7 },
    // Toddler sub-pages
    { url: `${BASE_URL}/toddler/independence`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/toddler/language-explosion`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/toddler/social-skills`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/toddler/routine`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/toddler/transitions`, changeFrequency: "monthly", priority: 0.7 },
    // Age-group pages
    { url: `${BASE_URL}/ages/0-1mo`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/ages/1-3mo`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/ages/3-6mo`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/ages/6-9mo`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/ages/9-12mo`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/ages/12-18mo`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/ages/18-24mo`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/ages/2-3yr`, changeFrequency: "monthly", priority: 0.7 },
    // Symptom body-system hubs
    { url: `${BASE_URL}/symptoms/head`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/symptoms/eyes`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/symptoms/ears`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/symptoms/nose`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/symptoms/mouth-throat`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/symptoms/chest-breathing`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/symptoms/abdomen`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/symptoms/skin`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/symptoms/limbs-joints`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/symptoms/genitourinary`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/symptoms/fever-general`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/symptoms/neurological`, changeFrequency: "monthly", priority: 0.7 },
  ];

  const milestoneRoutes: MetadataRoute.Sitemap = allCheckpoints.map((cp) => ({
    url: `${BASE_URL}/milestones/${cp.id}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const guideRoutes: MetadataRoute.Sitemap = allGuides.map((g) => ({
    url: `${BASE_URL}/resources/guides/${g.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const checklistRoutes: MetadataRoute.Sitemap = allChecklists.map((cl) => ({
    url: `${BASE_URL}/checklists/${cl.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const triageRoutes: MetadataRoute.Sitemap = allTriageTrees.map((t) => ({
    url: `${BASE_URL}/triage/${t.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const ageAdviceRoutes: MetadataRoute.Sitemap = Array.from({ length: 37 }, (_, i) => ({
    url: `${BASE_URL}/age-advice/${i}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const developmentMonthRoutes: MetadataRoute.Sitemap = monthlyDevelopment.map((m) => ({
    url: `${BASE_URL}/development/${m.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const newbornWeekRoutes: MetadataRoute.Sitemap = newbornWeeks.map((w) => ({
    url: `${BASE_URL}/newborn/week-${w.week}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const postpartumWeekRoutes: MetadataRoute.Sitemap = postpartumWeeks.map((w) => ({
    url: `${BASE_URL}/postpartum/week-${w.week}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const pregnancyWeekRoutes: MetadataRoute.Sitemap = pregnancyWeeks.map((w) => ({
    url: `${BASE_URL}/pregnancy/week-${w.week}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const trimesterRoutes: MetadataRoute.Sitemap = trimesterGuides.map((t) => ({
    url: `${BASE_URL}/pregnancy/${t.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const allRoutes = [
    ...staticRoutes,
    ...milestoneRoutes,
    ...guideRoutes,
    ...checklistRoutes,
    ...triageRoutes,
    ...ageAdviceRoutes,
    ...developmentMonthRoutes,
    ...newbornWeekRoutes,
    ...postpartumWeekRoutes,
    ...pregnancyWeekRoutes,
    ...trimesterRoutes,
  ];

  return allRoutes.map((route) => ({
    ...route,
    lastModified: route.lastModified || now,
  }));
}
