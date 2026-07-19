export type EmergencyCategory = 'medical' | 'injury' | 'ingestion' | 'environmental' | 'preparedness';

export interface EmergencyGuide {
  slug: string;
  title: string;
  category: EmergencyCategory;
  callNineOneOne: boolean;
  description: string;
  immediateActions: string[];
  doNotDo: string[];
  stepByStep: { step: number; title: string; description: string }[];
  whenToCall911: string[];
  whenToCallDoctor: string[];
  whenToGoToER: string[];
  prevention: string[];
  byAge: { ageRange: string; context: string }[];
  relatedEmergencySlugs: string[];
  relatedConcernSlugs: string[];
  sources: { org: string; citation: string; url: string }[];
}
