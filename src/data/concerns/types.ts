export interface ConcernPage {
  slug: string;
  title: string;
  searchTerms: string[];
  quickAnswer: string;
  byAge: { ageRange: string; context: string }[];
  whenNormal: string[];
  whenToMention: string[];
  whenToActNow: string[];
  relatedMilestones: string[];
  showSelfReferral: boolean;
  sources: { org: string; citation: string; url: string }[];
}
