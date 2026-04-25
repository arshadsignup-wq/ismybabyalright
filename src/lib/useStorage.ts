"use client";

import { useSyncExternalStore, useCallback } from "react";
import {
  subscribe,
  getSnapshot,
  getProfile,
  saveProfile,
  deleteProfile,
  getEvents,
  addEvent,
  updateEvent,
  deleteEvent,
  clearAllEvents,
  deleteEventsByCaregiver,
  renameCaregiver,
  getSettings,
  saveSettings,
  exportData,
  importData,
} from "./storage";
import type {
  AppData,
  BabyProfile,
  TrackerEvent,
  AppSettings,
} from "@/data/tracker/types";

const EMPTY_DATA: AppData = {
  version: 1,
  events: [],
  settings: { temperatureUnit: "F", volumeUnit: "oz", timeFormat: "12h" },
};

function getServerSnapshot(): AppData {
  return EMPTY_DATA;
}

export function useAppData(): AppData {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

export function useProfile() {
  const data = useAppData();

  return {
    profile: data.profile,
    saveProfile: useCallback((p: BabyProfile) => saveProfile(p), []),
    deleteProfile: useCallback(() => deleteProfile(), []),
  };
}

export function useEvents() {
  const data = useAppData();

  return {
    events: data.events,
    addEvent: useCallback((e: TrackerEvent) => addEvent(e), []),
    updateEvent: useCallback(
      (id: string, updates: Partial<TrackerEvent>) => updateEvent(id, updates),
      []
    ),
    deleteEvent: useCallback((id: string) => deleteEvent(id), []),
    clearAllEvents: useCallback(() => clearAllEvents(), []),
    deleteEventsByCaregiver: useCallback(
      (name: string) => deleteEventsByCaregiver(name),
      []
    ),
    renameCaregiver: useCallback(
      (oldName: string, newName: string) => renameCaregiver(oldName, newName),
      []
    ),
  };
}

export function useSettings() {
  const data = useAppData();

  return {
    settings: data.settings,
    saveSettings: useCallback((s: AppSettings) => saveSettings(s), []),
  };
}

export function useDataExport() {
  return {
    exportData: useCallback(() => exportData(), []),
    importData: useCallback(
      (json: string) => importData(json),
      []
    ),
  };
}

export { getProfile, getEvents, getSettings };
