export interface PostpartumWeek {
  week: number;
  slug: string;
  title: string;
  description: string;
  physicalRecovery: string[];
  emotionalChanges: string[];
  babyMilestones: string[];
  selfCare: string[];
  whenToCallDoctor: string[];
  partnerTips: string[];
}

export const postpartumWeeks: PostpartumWeek[] = Array.from({ length: 12 }, (_, i) => ({
  week: i + 1,
  slug: `week-${i + 1}`,
  title: `Postpartum Week ${i + 1}: Recovery & Adjustment`,
  description: `Postpartum week ${i + 1} — physical recovery, emotional changes, and what's normal.`,
  physicalRecovery: [],
  emotionalChanges: [],
  babyMilestones: [],
  selfCare: [],
  whenToCallDoctor: [],
  partnerTips: [],
}));
