export type IllnessType = 'viral' | 'bacterial' | 'fungal' | 'parasitic' | 'chronic' | 'autoimmune' | 'allergic';
export type IllnessCategory = 'respiratory' | 'gastrointestinal' | 'skin' | 'neurological' | 'ear-nose-throat' | 'urinary' | 'systemic' | 'chronic';

export interface IllnessGuide {
  slug: string;
  title: string;
  medicalName: string;
  type: IllnessType;
  category: IllnessCategory;
  description: string;
  howItSpreads: string;
  incubationPeriod: string;
  contagiousPeriod: string;
  symptoms: { symptom: string; frequency: 'always' | 'common' | 'sometimes' | 'rare' }[];
  byAge: { ageRange: string; presentation: string; risk: string }[];
  diagnosis: string;
  treatment: { approach: string; details: string }[];
  homeRemedies: string[];
  whenToWorry: string[];
  whenToCallDoctor: string[];
  whenToGoToER: string[];
  complications: string[];
  prevention: string[];
  vaccineAvailable: boolean;
  expectedDuration: string;
  returnToSchoolCriteria: string;
  relatedIllnessSlugs: string[];
  relatedConcernSlugs: string[];
  sources: { org: string; citation: string; url: string }[];
}

export interface IllnessComparison {
  slug: string;
  title: string;
  description: string;
  conditionA: { name: string; illnessSlug?: string };
  conditionB: { name: string; illnessSlug?: string };
  comparisonPoints: { category: string; conditionA: string; conditionB: string }[];
  keyDifferences: string[];
  whenToWorry: string[];
  sources: { org: string; citation: string; url: string }[];
}
