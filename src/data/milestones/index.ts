import { checkpoint as month1 } from './1-month';
import { checkpoint as months2 } from './2-months';
import { checkpoint as months4 } from './4-months';
import { checkpoint as months6 } from './6-months';
import { checkpoint as months9 } from './9-months';
import { checkpoint as months12 } from './12-months';
import { checkpoint as months15 } from './15-months';
import { checkpoint as months18 } from './18-months';
import { checkpoint as months24 } from './24-months';
import { checkpoint as months30 } from './30-months';
import { checkpoint as months36 } from './36-months';
import type { AgeCheckpoint } from './types';

export const allCheckpoints: AgeCheckpoint[] = [
  month1, months2, months4, months6, months9, months12,
  months15, months18, months24, months30, months36,
];

export function getCheckpointById(id: string): AgeCheckpoint | undefined {
  return allCheckpoints.find(c => c.id === id);
}

export function getCheckpointByAge(months: number): AgeCheckpoint | undefined {
  return allCheckpoints.find(c => c.ageInMonths === months);
}

export { type AgeCheckpoint, type Milestone, type MilestoneCategory } from './types';
