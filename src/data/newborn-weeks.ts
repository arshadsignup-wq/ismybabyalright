export interface NewbornWeek {
  week: number;
  slug: string;
  title: string;
  description: string;
  physicalDevelopment: string[];
  feedingGuidance: string[];
  sleepGuidance: string[];
  whatToExpect: string[];
  commonConcerns: string[];
  whenToCallDoctor: string[];
  parentTips: string[];
}

export const newbornWeeks: NewbornWeek[] = Array.from({ length: 12 }, (_, i) => ({
  week: i + 1,
  slug: `week-${i + 1}`,
  title: `Newborn Week ${i + 1}: What to Expect`,
  description: `Your baby at ${i + 1} week${i > 0 ? 's' : ''} old — development, feeding, sleep, and what's normal.`,
  physicalDevelopment: [],
  feedingGuidance: [],
  sleepGuidance: [],
  whatToExpect: [],
  commonConcerns: [],
  whenToCallDoctor: [],
  parentTips: [],
}));
