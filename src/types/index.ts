// Shared types for the ismybabyalright project

export interface Source {
  org: string;
  citation: string;
  url: string;
}

export type { Milestone, MilestoneCategory, AgeCheckpoint } from '@/data/milestones/types';
export type { ConcernPage } from '@/data/concerns/types';
export type { GrowthDataPoint, GrowthData } from '@/data/growth/types';
export type { ConditionGuide } from '@/data/guides/types';
