export type Sex = "male" | "female" | "other";

export interface BabyProfile {
  id: string;
  name: string;
  birthDate: string; // ISO date string
  dueDate?: string; // ISO date string, for adjusted age
  sex?: Sex;
  createdAt: string;
}

export type FeedType = "breast-left" | "breast-right" | "bottle" | "solids";
export type DiaperType = "wet" | "dirty" | "both";

export interface FeedDetails {
  feedType: FeedType;
  amountOz?: number; // for bottle
  durationMinutes?: number; // for breast
  notes?: string;
}

export interface SleepDetails {
  endTime?: string; // ISO string, undefined = still sleeping
  durationMinutes?: number;
}

export interface DiaperDetails {
  diaperType: DiaperType;
}

export interface MedicationDetails {
  name: string;
  dosage?: string;
}

export interface TemperatureDetails {
  value: number;
  unit: "F" | "C";
}

export type TrackerEventType =
  | "feed"
  | "sleep"
  | "diaper"
  | "medication"
  | "temperature"
  | "note";

export interface TrackerEvent {
  id: string;
  babyId: string;
  type: TrackerEventType;
  timestamp: string; // ISO string
  caregiver?: string;
  feed?: FeedDetails;
  sleep?: SleepDetails;
  diaper?: DiaperDetails;
  medication?: MedicationDetails;
  temperature?: TemperatureDetails;
  note?: string;
}

export interface AppSettings {
  temperatureUnit: "F" | "C";
  volumeUnit: "oz" | "ml";
  timeFormat: "12h" | "24h";
}

export interface AppData {
  version: number;
  profile?: BabyProfile;
  events: TrackerEvent[];
  settings: AppSettings;
}

export const DEFAULT_SETTINGS: AppSettings = {
  temperatureUnit: "F",
  volumeUnit: "oz",
  timeFormat: "12h",
};

export const CURRENT_SCHEMA_VERSION = 1;
