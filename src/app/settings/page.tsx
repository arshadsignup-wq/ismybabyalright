"use client";

import { useState } from "react";
import Link from "next/link";
import { useProfile, useEvents, useSettings, useDataExport } from "@/lib/useStorage";
import type { AppSettings } from "@/data/tracker/types";
import BabyProfileForm from "@/components/tracker/BabyProfileForm";

export default function SettingsPage() {
  const { profile, saveProfile, deleteProfile } = useProfile();
  const { events, clearAllEvents, deleteEventsByCaregiver, renameCaregiver } = useEvents();
  const { settings, saveSettings } = useSettings();
  const { exportData, importData } = useDataExport();
  const [editingProfile, setEditingProfile] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [showClearEventsConfirm, setShowClearEventsConfirm] = useState(false);
  const [renamingCaregiver, setRenamingCaregiver] = useState<string | null>(null);
  const [renameValue, setRenameValue] = useState("");
  const [importStatus, setImportStatus] = useState<string | null>(null);

  // Compute unique caregivers with event counts
  const caregiverCounts = events.reduce<Record<string, number>>((acc, e) => {
    const name = e.caregiver || "Unknown";
    acc[name] = (acc[name] || 0) + 1;
    return acc;
  }, {});

  function handleSettingChange(key: keyof AppSettings, value: string) {
    saveSettings({ ...settings, [key]: value });
  }

  function handleExport() {
    const json = exportData();
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `ismybabyalright-backup-${new Date().toISOString().split("T")[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }

  function handleImport() {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".json";
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = () => {
        const result = importData(reader.result as string);
        setImportStatus(
          result.success
            ? "Data imported successfully!"
            : `Import failed: ${result.error}`
        );
        setTimeout(() => setImportStatus(null), 4000);
      };
      reader.readAsText(file);
    };
    input.click();
  }

  function handleDeleteAll() {
    deleteProfile();
    setShowDeleteConfirm(false);
  }

  return (
    <div className="mx-auto max-w-lg px-4 py-6 sm:py-8 flex flex-col gap-6">
      <div className="flex items-center gap-3">
        <Link
          href="/tracker"
          className="flex items-center justify-center w-10 h-10 rounded-lg text-muted hover:bg-card-alt transition-colors"
          aria-label="Back to tracker"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </Link>
        <h1 className="text-xl font-bold text-foreground">Settings</h1>
      </div>

      {/* Baby Profile */}
      <section className="card p-5">
        <h2 className="text-base font-bold text-foreground mb-3">Baby Profile</h2>
        {profile && !editingProfile ? (
          <div>
            <dl className="flex flex-col gap-2 text-sm">
              <div className="flex justify-between">
                <dt className="text-muted">Name</dt>
                <dd className="font-medium text-foreground">{profile.name}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted">Date of birth</dt>
                <dd className="font-medium text-foreground">{profile.birthDate}</dd>
              </div>
              {profile.dueDate && (
                <div className="flex justify-between">
                  <dt className="text-muted">Due date</dt>
                  <dd className="font-medium text-foreground">{profile.dueDate}</dd>
                </div>
              )}
              {profile.sex && (
                <div className="flex justify-between">
                  <dt className="text-muted">Sex</dt>
                  <dd className="font-medium text-foreground capitalize">{profile.sex}</dd>
                </div>
              )}
            </dl>
            <button
              onClick={() => setEditingProfile(true)}
              className="mt-4 w-full px-4 py-2.5 rounded-lg border border-border text-foreground font-medium hover:bg-card-alt transition-colors cursor-pointer"
            >
              Edit Profile
            </button>
          </div>
        ) : profile && editingProfile ? (
          <BabyProfileForm
            initial={profile}
            onSave={(p) => {
              saveProfile(p);
              setEditingProfile(false);
            }}
            onCancel={() => setEditingProfile(false)}
          />
        ) : (
          <p className="text-sm text-muted">
            No profile set up yet.{" "}
            <Link href="/tracker" className="text-primary font-medium">
              Set one up
            </Link>
          </p>
        )}
      </section>

      {/* Preferences */}
      <section className="card p-5">
        <h2 className="text-base font-bold text-foreground mb-3">Preferences</h2>
        <div className="flex flex-col gap-4">
          <div>
            <label htmlFor="temp-unit" className="block text-sm font-medium text-muted mb-1">
              Temperature unit
            </label>
            <select
              id="temp-unit"
              value={settings.temperatureUnit}
              onChange={(e) => handleSettingChange("temperatureUnit", e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="F">Fahrenheit</option>
              <option value="C">Celsius</option>
            </select>
          </div>

          <div>
            <label htmlFor="volume-unit" className="block text-sm font-medium text-muted mb-1">
              Volume unit
            </label>
            <select
              id="volume-unit"
              value={settings.volumeUnit}
              onChange={(e) => handleSettingChange("volumeUnit", e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="oz">Ounces (oz)</option>
              <option value="ml">Milliliters (ml)</option>
            </select>
          </div>

          <div>
            <label htmlFor="time-format" className="block text-sm font-medium text-muted mb-1">
              Time format
            </label>
            <select
              id="time-format"
              value={settings.timeFormat}
              onChange={(e) => handleSettingChange("timeFormat", e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="12h">12-hour (2:30 PM)</option>
              <option value="24h">24-hour (14:30)</option>
            </select>
          </div>
        </div>
      </section>

      {/* Data Management */}
      <section className="card p-5">
        <h2 className="text-base font-bold text-foreground mb-3">Your Data</h2>
        <p className="text-sm text-muted mb-4">
          All data stays on this device. Export a backup to keep it safe.
        </p>
        <div className="flex flex-col gap-3">
          <button
            onClick={handleExport}
            className="w-full px-4 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary-hover transition-colors cursor-pointer"
          >
            Export Data (JSON)
          </button>
          <button
            onClick={handleImport}
            className="w-full px-4 py-2.5 rounded-lg border border-border text-foreground font-medium hover:bg-card-alt transition-colors cursor-pointer"
          >
            Import Data
          </button>
          {importStatus && (
            <p className={`text-sm font-medium ${importStatus.includes("success") ? "text-safe" : "text-concern"}`}>
              {importStatus}
            </p>
          )}
        </div>
      </section>

      {/* Manage Data  -  caregiver-level controls */}
      {events.length > 0 && (
        <section className="card p-5">
          <h2 className="text-base font-bold text-foreground mb-1">Manage Events</h2>
          <p className="text-sm text-muted mb-4">
            {events.length} event{events.length !== 1 ? "s" : ""} recorded.
          </p>

          {/* Caregiver list */}
          {Object.keys(caregiverCounts).length > 0 && (
            <div className="flex flex-col gap-2 mb-4">
              <p className="text-xs font-semibold text-muted uppercase tracking-wide">By caregiver</p>
              {Object.entries(caregiverCounts)
                .sort(([, a], [, b]) => b - a)
                .map(([name, count]) => (
                  <div key={name} className="flex items-center justify-between gap-2 rounded-lg border border-border p-3">
                    {renamingCaregiver === name ? (
                      <form
                        className="flex items-center gap-2 flex-1"
                        onSubmit={(e) => {
                          e.preventDefault();
                          if (renameValue.trim() && renameValue.trim() !== name) {
                            renameCaregiver(name, renameValue.trim());
                          }
                          setRenamingCaregiver(null);
                          setRenameValue("");
                        }}
                      >
                        <input
                          type="text"
                          value={renameValue}
                          onChange={(e) => setRenameValue(e.target.value)}
                          className="flex-1 px-2 py-1 rounded border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                          autoFocus
                        />
                        <button type="submit" className="text-xs font-bold text-primary cursor-pointer">Save</button>
                        <button
                          type="button"
                          onClick={() => { setRenamingCaregiver(null); setRenameValue(""); }}
                          className="text-xs font-bold text-muted cursor-pointer"
                        >
                          Cancel
                        </button>
                      </form>
                    ) : (
                      <>
                        <div className="min-w-0">
                          <p className="text-sm font-medium text-foreground truncate">{name}</p>
                          <p className="text-xs text-muted">{count} event{count !== 1 ? "s" : ""}</p>
                        </div>
                        <div className="flex items-center gap-2 shrink-0">
                          <button
                            onClick={() => { setRenamingCaregiver(name); setRenameValue(name); }}
                            className="text-xs font-bold text-primary hover:text-primary-hover transition-colors cursor-pointer"
                            title="Rename caregiver"
                          >
                            Rename
                          </button>
                          <button
                            onClick={() => { if (confirm(`Delete all ${count} events by ${name}?`)) deleteEventsByCaregiver(name); }}
                            className="text-xs font-bold text-concern hover:text-concern/80 transition-colors cursor-pointer"
                            title="Delete this caregiver's events"
                          >
                            Delete
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                ))}
            </div>
          )}

          {/* Clear all events */}
          {showClearEventsConfirm ? (
            <div className="rounded-lg border border-monitor-border bg-monitor-light p-4">
              <p className="text-sm text-foreground mb-3">
                This will delete all {events.length} events but keep your baby&apos;s profile. This cannot be undone.
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => setShowClearEventsConfirm(false)}
                  className="flex-1 px-4 py-2.5 rounded-lg border border-border text-foreground font-medium hover:bg-card-alt transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  onClick={() => { clearAllEvents(); setShowClearEventsConfirm(false); }}
                  className="flex-1 px-4 py-2.5 rounded-lg bg-monitor text-white font-medium hover:bg-monitor/90 transition-colors cursor-pointer"
                >
                  Clear All Events
                </button>
              </div>
            </div>
          ) : (
            <button
              onClick={() => setShowClearEventsConfirm(true)}
              className="w-full px-4 py-2.5 rounded-lg border border-monitor-border text-monitor font-medium hover:bg-monitor-light transition-colors cursor-pointer"
            >
              Clear All Events (Keep Profile)
            </button>
          )}
        </section>
      )}

      {/* Danger zone */}
      {profile && (
        <section className="card p-5 border-concern-border">
          <h2 className="text-base font-bold text-concern mb-3">Delete All Data</h2>
          {showDeleteConfirm ? (
            <div>
              <p className="text-sm text-foreground mb-3">
                This will permanently delete your profile and all tracked events from this device. This cannot be undone.
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => setShowDeleteConfirm(false)}
                  className="flex-1 px-4 py-2.5 rounded-lg border border-border text-foreground font-medium hover:bg-card-alt transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  onClick={handleDeleteAll}
                  className="flex-1 px-4 py-2.5 rounded-lg bg-concern text-white font-medium hover:bg-concern/90 transition-colors cursor-pointer"
                >
                  Delete Everything
                </button>
              </div>
            </div>
          ) : (
            <button
              onClick={() => setShowDeleteConfirm(true)}
              className="w-full px-4 py-2.5 rounded-lg border border-concern-border text-concern font-medium hover:bg-concern-light transition-colors cursor-pointer"
            >
              Delete All Data
            </button>
          )}
        </section>
      )}

      {/* Privacy note */}
      <p className="text-xs text-muted text-center leading-relaxed pb-4">
        All data stays on your device. Nothing is sent to any server.
        We have no accounts, no analytics, no tracking.
      </p>
    </div>
  );
}
