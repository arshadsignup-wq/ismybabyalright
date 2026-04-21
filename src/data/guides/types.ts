export interface ConditionGuide {
  slug: string;
  title: string;
  subtitle: string;
  whatHappened: string;
  keyFacts: string[];
  whatToExpect: string[];
  whenToWorry: string[];
  actionPlan: string[];
  sources: { org: string; citation: string; url: string }[];
}
