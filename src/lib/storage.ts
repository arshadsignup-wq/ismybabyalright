import {
  type AppData,
  type BabyProfile,
  type TrackerEvent,
  type AppSettings,
  DEFAULT_SETTINGS,
  CURRENT_SCHEMA_VERSION,
} from "@/data/tracker/types";

const STORAGE_KEY = "imba_data";

function getDefaultData(): AppData {
  return {
    version: CURRENT_SCHEMA_VERSION,
    events: [],
    settings: { ...DEFAULT_SETTINGS },
  };
}

/** Read the full app data from localStorage */
export function loadData(): AppData {
  if (typeof window === "undefined") return getDefaultData();
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return getDefaultData();
    const data = JSON.parse(raw) as AppData;
    return migrate(data);
  } catch {
    return getDefaultData();
  }
}

/** Write the full app data to localStorage */
export function saveData(data: AppData): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  notifyListeners();
}

/** Migrate data from older schema versions */
function migrate(data: AppData): AppData {
  // Currently at v1  -  future migrations go here
  if (!data.version) {
    data.version = CURRENT_SCHEMA_VERSION;
  }
  if (!data.settings) {
    data.settings = { ...DEFAULT_SETTINGS };
  }
  if (!data.events) {
    data.events = [];
  }
  return data;
}

// --- Profile ---

export function getProfile(): BabyProfile | undefined {
  return loadData().profile;
}

export function saveProfile(profile: BabyProfile): void {
  const data = loadData();
  data.profile = profile;
  saveData(data);
}

export function deleteProfile(): void {
  const data = loadData();
  delete data.profile;
  data.events = [];
  saveData(data);
}

// --- Events ---

export function getEvents(): TrackerEvent[] {
  return loadData().events;
}

export function addEvent(event: TrackerEvent): void {
  const data = loadData();
  data.events.push(event);
  saveData(data);
}

export function updateEvent(
  id: string,
  updates: Partial<TrackerEvent>
): void {
  const data = loadData();
  const idx = data.events.findIndex((e) => e.id === id);
  if (idx !== -1) {
    data.events[idx] = { ...data.events[idx], ...updates };
    saveData(data);
  }
}

export function deleteEvent(id: string): void {
  const data = loadData();
  data.events = data.events.filter((e) => e.id !== id);
  saveData(data);
}

// --- Settings ---

export function getSettings(): AppSettings {
  return loadData().settings;
}

export function saveSettings(settings: AppSettings): void {
  const data = loadData();
  data.settings = settings;
  saveData(data);
}

// --- Granular Data Management ---

export function clearAllEvents(): void {
  const data = loadData();
  data.events = [];
  saveData(data);
}

export function deleteEventsByCaregiver(name: string): void {
  const data = loadData();
  data.events = data.events.filter(
    (e) => (e.caregiver ?? "").toLowerCase() !== name.toLowerCase()
  );
  saveData(data);
}

export function renameCaregiver(oldName: string, newName: string): void {
  const data = loadData();
  data.events = data.events.map((e) =>
    (e.caregiver ?? "").toLowerCase() === oldName.toLowerCase()
      ? { ...e, caregiver: newName }
      : e
  );
  saveData(data);
}

// --- Export / Import ---

export function exportData(): string {
  return JSON.stringify(loadData(), null, 2);
}

export function importData(json: string): { success: boolean; error?: string } {
  try {
    const data = JSON.parse(json) as AppData;
    if (!data.version || !Array.isArray(data.events)) {
      return { success: false, error: "Invalid data format" };
    }
    saveData(migrate(data));
    return { success: true };
  } catch {
    return { success: false, error: "Invalid JSON" };
  }
}

// --- Subscription for useSyncExternalStore ---

type Listener = () => void;
const listeners = new Set<Listener>();

export function subscribe(listener: Listener): () => void {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

/** Cached snapshot  -  only replaced when notifyListeners is called */
let cachedSnapshot: AppData | null = null;

function notifyListeners(): void {
  cachedSnapshot = loadData();
  listeners.forEach((l) => l());
}

/** Get a snapshot for useSyncExternalStore  -  must return same reference if data hasn't changed */
export function getSnapshot(): AppData {
  if (cachedSnapshot === null) {
    cachedSnapshot = loadData();
  }
  return cachedSnapshot;
}
