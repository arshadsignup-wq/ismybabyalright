"use client";

import { useState } from "react";
import type { TrackerEvent } from "@/data/tracker/types";
import type { CaregiverCard } from "@/data/sharing/types";
import { buildHandoffSnapshot, buildShareUrl } from "@/lib/sharing";
import CaregiverCardEditor from "./CaregiverCardEditor";

interface ShareSetupProps {
  babyName: string;
  birthDate: string;
  events: TrackerEvent[];
}

export default function ShareSetup({
  babyName,
  birthDate,
  events,
}: ShareSetupProps) {
  const [caregiverCard, setCaregiverCard] = useState<CaregiverCard | undefined>();
  const [editingCard, setEditingCard] = useState(false);
  const [shareUrl, setShareUrl] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [hoursBack, setHoursBack] = useState(12);

  function generateLink() {
    const snapshot = buildHandoffSnapshot(babyName, events, caregiverCard, hoursBack);
    const url = buildShareUrl(snapshot);
    setShareUrl(url);
    setCopied(false);
  }

  async function copyToClipboard() {
    if (!shareUrl) return;
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      // Fallback for older browsers
      const input = document.createElement("input");
      input.value = shareUrl;
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      document.body.removeChild(input);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  }

  return (
    <div className="flex flex-col gap-5">
      {/* Caregiver card section */}
      <section className="card p-5">
        <h2 className="text-base font-bold text-foreground mb-2">
          Caregiver Card
        </h2>
        <p className="text-sm text-muted mb-4">
          Include allergies, medications, and emergency contacts so your
          caregiver has everything they need.
        </p>

        {caregiverCard && !editingCard ? (
          <div>
            <div className="text-sm text-foreground mb-3">
              {caregiverCard.allergies.length > 0 && (
                <p>Allergies: {caregiverCard.allergies.join(", ")}</p>
              )}
              {caregiverCard.medications.length > 0 && (
                <p>Medications: {caregiverCard.medications.join(", ")}</p>
              )}
              {caregiverCard.pediatrician && (
                <p>Pediatrician: {caregiverCard.pediatrician.name}</p>
              )}
              <p>{caregiverCard.emergencyContacts.length} emergency contact(s)</p>
            </div>
            <button
              onClick={() => setEditingCard(true)}
              className="text-sm text-primary font-medium hover:underline cursor-pointer min-h-[44px] flex items-center"
            >
              Edit card
            </button>
          </div>
        ) : editingCard || !caregiverCard ? (
          <CaregiverCardEditor
            initial={caregiverCard}
            babyName={babyName}
            birthDate={birthDate}
            onSave={(card) => {
              setCaregiverCard(card);
              setEditingCard(false);
              setShareUrl(null);
            }}
            onCancel={caregiverCard ? () => setEditingCard(false) : undefined}
          />
        ) : null}
      </section>

      {/* Share settings */}
      <section className="card p-5">
        <h2 className="text-base font-bold text-foreground mb-2">
          Share Handoff
        </h2>
        <p className="text-sm text-muted mb-4">
          Generate a link with recent activity. No app download needed  - 
          anyone with the link can view it.
        </p>

        <div className="mb-4">
          <label htmlFor="hours-back" className="block text-sm font-medium text-muted mb-1">
            Include events from the last
          </label>
          <select
            id="hours-back"
            value={hoursBack}
            onChange={(e) => {
              setHoursBack(parseInt(e.target.value));
              setShareUrl(null);
            }}
            className="w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value={4}>4 hours</option>
            <option value={8}>8 hours</option>
            <option value={12}>12 hours</option>
            <option value={24}>24 hours</option>
          </select>
        </div>

        <button
          onClick={generateLink}
          className="w-full px-4 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary-hover transition-colors cursor-pointer"
        >
          {shareUrl ? "Regenerate Link" : "Generate Share Link"}
        </button>

        {/* Share URL */}
        {shareUrl && (
          <div className="mt-4">
            <div className="flex gap-2">
              <input
                type="text"
                readOnly
                value={shareUrl}
                className="flex-1 px-3 py-2.5 rounded-lg border border-border bg-card-alt text-sm text-foreground truncate focus:outline-none"
                onClick={(e) => (e.target as HTMLInputElement).select()}
              />
              <button
                onClick={copyToClipboard}
                className="px-4 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary-hover transition-colors cursor-pointer flex-shrink-0"
              >
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>
            <p className="text-xs text-muted mt-2">
              All data is encoded in the link itself. Nothing is stored on any
              server.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}
