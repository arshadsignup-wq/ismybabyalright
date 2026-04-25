export interface LaborEntry {
  caregiver: string;
  feeds: number;
  diapers: number;
  sleepSessions: number; // number of times they put baby to sleep
  totalEvents: number;
}

export interface LaborSummary {
  period: string;
  entries: LaborEntry[];
}
