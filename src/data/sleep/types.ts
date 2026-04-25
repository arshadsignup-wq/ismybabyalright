export interface SleepGuidanceEntry {
  ageRange: string;
  minMonths: number;
  maxMonths: number;
  totalSleepHours: string;
  nightSleepHours: string;
  napInfo: string;
  tips: string[];
}

export interface RegressionInfo {
  ageLabel: string;
  ageMonths: number;
  title: string;
  duration: string;
  whyItHappens: string;
  whatToExpect: string[];
  whatToDo: string[];
}
