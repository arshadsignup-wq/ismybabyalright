export interface Milestone {
  id: string;
  name: string;
  plainDescription: string;
  whatItLooksLike: string;
  typicalRange: {
    earlyMonths: number;
    averageMonths: number;
    lateNormalMonths: number;
    concernThresholdMonths: number;
  };
  whenNormal: string;
  whenToMention: string;
  whenToCallNow: string;
  sources: { org: string; citation: string; url: string }[];
  relatedConcerns: string[];
}

export type MilestoneCategory = 'grossMotor' | 'fineMotor' | 'language' | 'socialEmotional' | 'cognitive';

export interface AgeCheckpoint {
  id: string;
  label: string;
  ageInMonths: number;
  categories: Record<MilestoneCategory, Milestone[]>;
  redFlags: { description: string; action: string }[];
  notes: string;
}
