export interface MoodEntry {
  id: string;
  date: string; // ISO date
  score: 1 | 2 | 3 | 4 | 5;
  feelings: string[];
  caregiver?: string;
  note?: string;
}

export interface MentalHealthTopic {
  slug: string;
  title: string;
  emoji: string;
  summary: string;
  content: string[];
  normalizeMessage: string;
  whenToSeekHelp: string[];
  resources: string[];
}

export interface CheckInQuestion {
  id: string;
  text: string;
  positiveAnswer: string;
  concernAnswer: string;
}
