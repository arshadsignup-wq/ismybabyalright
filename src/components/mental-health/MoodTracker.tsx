"use client";

import { useState } from "react";
import type { MoodEntry } from "@/data/mental-health/types";

interface MoodTrackerProps {
  onLog: (entry: MoodEntry) => void;
}

const moodEmojis: { score: MoodEntry["score"]; emoji: string; label: string }[] = [
  { score: 1, emoji: "😢", label: "Really struggling" },
  { score: 2, emoji: "😔", label: "Tough day" },
  { score: 3, emoji: "😐", label: "Getting by" },
  { score: 4, emoji: "🙂", label: "Pretty good" },
  { score: 5, emoji: "😊", label: "Great day" },
];

const feelingTags = [
  "Exhausted", "Anxious", "Overwhelmed", "Grateful",
  "Lonely", "Angry", "Content", "Sad",
  "Hopeful", "Frustrated", "Connected", "Touched out",
  "Proud", "Guilty", "Loved", "Numb",
];

export default function MoodTracker({ onLog }: MoodTrackerProps) {
  const [score, setScore] = useState<MoodEntry["score"] | null>(null);
  const [feelings, setFeelings] = useState<string[]>([]);
  const [note, setNote] = useState("");
  const [logged, setLogged] = useState(false);

  function toggleFeeling(feeling: string) {
    setFeelings((prev) =>
      prev.includes(feeling)
        ? prev.filter((f) => f !== feeling)
        : [...prev, feeling]
    );
  }

  function handleLog() {
    if (score === null) return;
    onLog({
      id: Date.now().toString(36),
      date: new Date().toISOString().split("T")[0],
      score,
      feelings,
      note: note.trim() || undefined,
    });
    setLogged(true);
    setTimeout(() => setLogged(false), 3000);
    setScore(null);
    setFeelings([]);
    setNote("");
  }

  if (logged) {
    return (
      <div className="card p-5 text-center">
        <p className="text-lg font-bold text-safe">Logged</p>
        <p className="text-sm text-muted mt-1">Thanks for checking in with yourself.</p>
      </div>
    );
  }

  return (
    <div className="card p-5">
      <h3 className="text-base font-bold text-foreground mb-3">
        How are you feeling today?
      </h3>

      {/* Mood score */}
      <div className="flex justify-between gap-1 mb-4">
        {moodEmojis.map((mood) => (
          <button
            key={mood.score}
            onClick={() => setScore(mood.score)}
            className={`flex-1 flex flex-col items-center gap-1 p-2 rounded-lg border-2 cursor-pointer transition-all min-h-[3.5rem] ${
              score === mood.score
                ? "border-primary bg-primary-light"
                : "border-card-border hover:border-primary/40"
            }`}
            aria-label={mood.label}
          >
            <span className="text-2xl">{mood.emoji}</span>
            <span className="text-[10px] text-muted leading-tight text-center">{mood.label}</span>
          </button>
        ))}
      </div>

      {/* Feeling tags */}
      {score !== null && (
        <>
          <p className="text-sm text-muted mb-2">What words fit? (optional)</p>
          <div className="flex flex-wrap gap-1.5 mb-4">
            {feelingTags.map((tag) => (
              <button
                key={tag}
                onClick={() => toggleFeeling(tag)}
                className={`px-2.5 py-1 rounded-full text-xs font-medium border cursor-pointer transition-all ${
                  feelings.includes(tag)
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-card text-muted border-card-border hover:border-primary"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Anything else on your mind? (optional)"
            rows={2}
            className="w-full px-3 py-2.5 rounded-lg border border-border bg-card text-foreground text-sm placeholder:text-muted-light focus:outline-none focus:ring-2 focus:ring-primary resize-y mb-3"
          />

          <button
            onClick={handleLog}
            className="w-full px-4 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary-hover transition-colors cursor-pointer"
          >
            Log How I Feel
          </button>
        </>
      )}

      <p className="text-xs text-muted mt-3 text-center">
        This stays on your device. No one sees this but you.
      </p>
    </div>
  );
}
