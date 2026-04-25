"use client";

import { useState } from "react";
import Link from "next/link";
import type { MoodEntry } from "@/data/mental-health/types";
import { mentalHealthTopics } from "@/data/mental-health/topics";
import MoodTracker from "@/components/mental-health/MoodTracker";
import TopicCard from "@/components/mental-health/TopicCard";

const MOOD_STORAGE_KEY = "imba_moods";

function saveMoodEntry(entry: MoodEntry) {
  if (typeof window === "undefined") return;
  try {
    const raw = localStorage.getItem(MOOD_STORAGE_KEY);
    const moods: MoodEntry[] = raw ? JSON.parse(raw) : [];
    moods.push(entry);
    localStorage.setItem(MOOD_STORAGE_KEY, JSON.stringify(moods));
  } catch {
    // silently fail
  }
}

export default function MentalHealthPage() {
  const [, setTick] = useState(0);

  function handleMoodLog(entry: MoodEntry) {
    saveMoodEntry(entry);
    setTick((t) => t + 1);
  }

  return (
    <div className="mx-auto max-w-lg px-4 py-6 sm:py-8 flex flex-col gap-6">
      <div className="text-center">
        <h1 className="text-xl font-bold text-foreground">
          Your Mental Health Matters
        </h1>
        <p className="text-sm text-muted mt-2 leading-relaxed">
          For every parent and caregiver  -  birthing and non-birthing alike.
          This is a judgment-free zone.
        </p>
      </div>

      {/* Quick links */}
      <div className="grid grid-cols-2 gap-3">
        <Link
          href="/mental-health/check-in"
          className="card p-4 flex flex-col items-center gap-2 hover:border-primary transition-colors no-underline min-h-[5rem]"
        >
          <span className="text-2xl" aria-hidden="true">🤔</span>
          <span className="text-sm font-semibold text-primary">Am I Okay?</span>
        </Link>
        <Link
          href="/mental-health/partner"
          className="card p-4 flex flex-col items-center gap-2 hover:border-primary transition-colors no-underline min-h-[5rem]"
        >
          <span className="text-2xl" aria-hidden="true">🤝</span>
          <span className="text-sm font-semibold text-primary">Partner Support</span>
        </Link>
      </div>

      {/* Mood tracker */}
      <section>
        <MoodTracker onLog={handleMoodLog} />
      </section>

      {/* EPDS link */}
      <Link
        href="/resources/mental-health"
        className="card p-4 flex items-center gap-3 hover:border-primary transition-colors no-underline"
      >
        <span className="text-2xl" aria-hidden="true">📋</span>
        <div>
          <span className="text-sm font-bold text-foreground">EPDS Screening Tool</span>
          <p className="text-xs text-muted">Edinburgh Postpartum Depression Scale  -  clinical self-assessment</p>
        </div>
      </Link>

      {/* Topics */}
      <section>
        <h2 className="text-base font-bold text-foreground mb-3">
          Is this normal?
        </h2>
        <div className="flex flex-col gap-2">
          {mentalHealthTopics.map((topic) => (
            <TopicCard key={topic.slug} topic={topic} />
          ))}
        </div>
      </section>

      {/* Crisis resources */}
      <div className="tier-concern p-4 text-sm">
        <h3 className="font-bold mb-2">If you&apos;re in crisis</h3>
        <ul className="flex flex-col gap-1.5">
          <li>
            PSI Warmline:{" "}
            <a href="tel:1-800-944-4773" className="font-semibold underline">
              1-800-944-4773
            </a>{" "}
            (call or text)
          </li>
          <li>
            Crisis Text Line: Text <strong>HOME</strong> to <strong>741741</strong>
          </li>
          <li>
            Suicide & Crisis Lifeline:{" "}
            <a href="tel:988" className="font-semibold underline">988</a>
          </li>
          <li>
            If you or your baby are in immediate danger, call <strong>911</strong>
          </li>
        </ul>
      </div>
    </div>
  );
}
