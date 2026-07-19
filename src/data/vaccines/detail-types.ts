export interface VaccineDetail {
  slug: string;
  name: string;
  abbreviation: string;
  diseasePrevented: string[];
  howItWorks: string;
  schedule: { dose: number; age: string }[];
  ingredients: string[];
  brands: { name: string; manufacturer: string }[];
  commonSideEffects: string[];
  seriousReactions: string[];
  contraindications: string[];
  effectivenessRate: string;
  commonMyths: { myth: string; fact: string }[];
  faqItems: { question: string; answer: string }[];
  sources: { org: string; citation: string; url: string }[];
}

export interface VaccineDisease {
  slug: string;
  name: string;
  description: string;
  symptoms: string[];
  complications: string[];
  howItSpreads: string;
  whoIsAtRisk: string[];
  vaccineSlug: string;
  historicalContext: string;
  sources: { org: string; citation: string; url: string }[];
}
