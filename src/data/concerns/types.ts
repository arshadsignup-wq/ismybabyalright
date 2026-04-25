export type ConcernCategory = 'physical' | 'communication' | 'feeding' | 'sleep' | 'skin' | 'digestive' | 'behavior' | 'medical';

export interface ConcernPage {
  slug: string;
  title: string;
  category: ConcernCategory;
  searchTerms: string[];
  quickAnswer: string;
  byAge: { ageRange: string; context: string }[];
  whenNormal: string[];
  whenToMention: string[];
  whenToActNow: string[];
  relatedMilestones: string[];
  showSelfReferral: boolean;
  relatedConcernSlugs?: string[];
  sources: { org: string; citation: string; url: string }[];
}
