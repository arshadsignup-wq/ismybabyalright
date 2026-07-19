export interface PregnancyWeek {
  week: number;
  slug: string;
  trimester: 1 | 2 | 3;
  title: string;
  description: string;
  babySize: string;
  babyDevelopment: string[];
  motherChanges: string[];
  symptoms: string[];
  tips: string[];
  whenToCallDoctor: string[];
}

export const pregnancyWeeks: PregnancyWeek[] = [4, 6, 8, 10, 12, 16, 20, 24, 28, 32, 36, 37, 38, 39, 40, 41].map((week) => ({
  week,
  slug: `week-${week}`,
  trimester: week <= 12 ? 1 : week <= 27 ? 2 : 3,
  title: `Pregnancy Week ${week}: Baby Development & What to Expect`,
  description: `Week ${week} of pregnancy — your baby's development, your body changes, symptoms, and tips.`,
  babySize: '',
  babyDevelopment: [],
  motherChanges: [],
  symptoms: [],
  tips: [],
  whenToCallDoctor: [],
}));

export interface TrimesterGuide {
  slug: string;
  trimester: 1 | 2 | 3;
  title: string;
  description: string;
  weekRange: string;
  overview: string;
  babyDevelopment: string[];
  motherChanges: string[];
  commonSymptoms: string[];
  screeningsAndTests: string[];
  whenToCallDoctor: string[];
  tips: string[];
}

export const trimesterGuides: TrimesterGuide[] = [
  {
    slug: 'first-trimester',
    trimester: 1,
    title: 'First Trimester: Weeks 1-12',
    description: 'Everything you need to know about the first trimester of pregnancy.',
    weekRange: '1-12',
    overview: 'The first trimester spans weeks 1 through 12 and is a critical period of early development.',
    babyDevelopment: [],
    motherChanges: [],
    commonSymptoms: [],
    screeningsAndTests: [],
    whenToCallDoctor: [],
    tips: [],
  },
  {
    slug: 'second-trimester',
    trimester: 2,
    title: 'Second Trimester: Weeks 13-27',
    description: 'Everything you need to know about the second trimester of pregnancy.',
    weekRange: '13-27',
    overview: 'The second trimester spans weeks 13 through 27 and is often called the "golden trimester."',
    babyDevelopment: [],
    motherChanges: [],
    commonSymptoms: [],
    screeningsAndTests: [],
    whenToCallDoctor: [],
    tips: [],
  },
  {
    slug: 'third-trimester',
    trimester: 3,
    title: 'Third Trimester: Weeks 28-40+',
    description: 'Everything you need to know about the third trimester of pregnancy.',
    weekRange: '28-40+',
    overview: 'The third trimester spans weeks 28 through birth and is when your baby grows rapidly.',
    babyDevelopment: [],
    motherChanges: [],
    commonSymptoms: [],
    screeningsAndTests: [],
    whenToCallDoctor: [],
    tips: [],
  },
];
