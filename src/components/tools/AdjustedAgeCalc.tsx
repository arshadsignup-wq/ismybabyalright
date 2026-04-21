"use client";

import { useState } from "react";
import Link from "next/link";
import {
  calculateAdjustedAge,
  type AdjustedAgeResult,
} from "@/lib/adjustedAge";
import { formatAge } from "@/lib/formatAge";

/* -------------------------------------------------------------------------- */
/*  Constants                                                                  */
/* -------------------------------------------------------------------------- */

const MILESTONE_AGES = [1, 2, 4, 6, 9, 12, 15, 18, 24, 30, 36];

function closestMilestoneSlug(months: number): string {
  // Find the closest milestone age that does not exceed the adjusted age
  let closest = MILESTONE_AGES[0];
  for (const m of MILESTONE_AGES) {
    if (m <= months) {
      closest = m;
    }
  }
  return `${closest}-month${closest === 1 ? "" : "s"}`;
}

/* -------------------------------------------------------------------------- */
/*  Component                                                                  */
/* -------------------------------------------------------------------------- */

export default function AdjustedAgeCalc() {
  const [birthDateStr, setBirthDateStr] = useState("");
  const [dueDateStr, setDueDateStr] = useState("");
  const [result, setResult] = useState<AdjustedAgeResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [showShareText, setShowShareText] = useState(false);
  const [copied, setCopied] = useState(false);

  /* ---------------------------------------------------------------------- */
  /*  Calculate                                                              */
  /* ---------------------------------------------------------------------- */

  function handleCalculate() {
    setError(null);
    setResult(null);
    setCopied(false);

    if (!birthDateStr) {
      setError("Please enter your baby's date of birth.");
      return;
    }
    if (!dueDateStr) {
      setError("Please enter the original due date.");
      return;
    }

    const birthDate = new Date(birthDateStr + "T00:00:00");
    const dueDate = new Date(dueDateStr + "T00:00:00");
    const now = new Date();

    if (birthDate > now) {
      setError("Date of birth cannot be in the future.");
      return;
    }

    if (dueDate <= birthDate) {
      setError(
        "Due date should be after the date of birth for premature babies. If your baby was born on or after their due date, adjusted age correction does not apply."
      );
      return;
    }

    const res = calculateAdjustedAge(birthDate, dueDate);
    setResult(res);
  }

  /* ---------------------------------------------------------------------- */
  /*  Share text                                                             */
  /* ---------------------------------------------------------------------- */

  function getShareText(): string {
    if (!result) return "";

    const lines = [
      `Adjusted Age Information`,
      ``,
      `Date of birth: ${birthDateStr}`,
      `Original due date: ${dueDateStr}`,
      `Born ${result.correctionWeeks} weeks early`,
      ``,
      `Chronological age: ${result.displayChronological}`,
      `Adjusted age: ${result.displayAdjusted}`,
      ``,
    ];

    if (result.adjustedAgeExpired) {
      lines.push(
        `Note: Your baby is over 2 years old, so adjusted age correction no longer applies. Developmental milestones are now compared to chronological age.`
      );
    } else {
      lines.push(
        `When looking at developmental milestones, use the adjusted age (${result.displayAdjusted}) rather than the chronological age. This correction is typically used until age 2.`
      );
    }

    return lines.join("\n");
  }

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(getShareText());
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback: select the textarea
    }
  }

  /* ---------------------------------------------------------------------- */
  /*  Render                                                                 */
  /* ---------------------------------------------------------------------- */

  return (
    <section className="card p-5 sm:p-8" aria-label="Adjusted age calculator">
      <h2>Adjusted Age Calculator</h2>
      <p className="text-sm text-muted mb-6 leading-relaxed">
        For babies born prematurely, adjusted (corrected) age helps you use the
        right developmental timeline. Everything is calculated in your browser
        &mdash; no data is stored or sent anywhere.
      </p>

      {/* ---------------------------------------------------------------- */}
      {/*  Inputs                                                           */}
      {/* ---------------------------------------------------------------- */}
      <div className="grid gap-5 sm:grid-cols-2 mb-6">
        <div>
          <label
            htmlFor="adj-dob"
            className="block text-sm font-semibold text-foreground mb-2"
          >
            Date of Birth
          </label>
          <input
            id="adj-dob"
            type="date"
            value={birthDateStr}
            onChange={(e) => setBirthDateStr(e.target.value)}
            max={new Date().toISOString().split("T")[0]}
            className="w-full px-3 py-2.5 min-h-[44px] rounded-lg border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            aria-required="true"
          />
        </div>

        <div>
          <label
            htmlFor="adj-due"
            className="block text-sm font-semibold text-foreground mb-2"
          >
            Original Due Date
          </label>
          <input
            id="adj-due"
            type="date"
            value={dueDateStr}
            onChange={(e) => setDueDateStr(e.target.value)}
            className="w-full px-3 py-2.5 min-h-[44px] rounded-lg border border-border bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            aria-required="true"
          />
        </div>
      </div>

      <button
        type="button"
        onClick={handleCalculate}
        className="px-6 py-2.5 min-h-[44px] rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary-hover transition-colors cursor-pointer mb-6"
        aria-label="Calculate adjusted age"
      >
        Calculate
      </button>

      {/* ---------------------------------------------------------------- */}
      {/*  Error                                                            */}
      {/* ---------------------------------------------------------------- */}
      {error && (
        <div className="tier-concern p-4 mb-6 text-sm" role="alert">
          {error}
        </div>
      )}

      {/* ---------------------------------------------------------------- */}
      {/*  Results                                                          */}
      {/* ---------------------------------------------------------------- */}
      {result && (
        <div className="space-y-6" aria-live="polite">
          {/* Visual correction display */}
          <div className="tier-safe p-5">
            <div className="flex items-center gap-2.5 mb-3">
              <span className="tier-safe-badge">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                Age Correction
              </span>
            </div>

            <p className="text-base font-semibold mb-4">
              Born {result.correctionWeeks} week{result.correctionWeeks !== 1 ? "s" : ""} early &rarr; milestones adjusted by{" "}
              {result.correctionWeeks} week{result.correctionWeeks !== 1 ? "s" : ""}
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="bg-white/60 rounded-lg p-4">
                <p className="text-xs font-semibold text-muted uppercase tracking-wide mb-1">
                  Chronological Age
                </p>
                <p className="text-lg font-bold text-foreground">
                  {result.displayChronological}
                </p>
                <p className="text-xs text-muted mt-1">
                  ({result.chronologicalWeeks} weeks)
                </p>
              </div>

              <div className="bg-white/60 rounded-lg p-4">
                <p className="text-xs font-semibold text-muted uppercase tracking-wide mb-1">
                  Adjusted Age
                </p>
                <p className="text-lg font-bold text-primary">
                  {result.displayAdjusted}
                </p>
                <p className="text-xs text-muted mt-1">
                  ({result.adjustedWeeks} weeks)
                </p>
              </div>
            </div>
          </div>

          {/* Milestone link */}
          {!result.adjustedAgeExpired && result.adjustedMonths >= 0 && (
            <div className="card-alt p-4">
              <p className="text-sm text-foreground mb-2">
                <strong>Use adjusted age for milestones.</strong> Based on your
                baby&apos;s adjusted age of{" "}
                <strong>{result.displayAdjusted}</strong>, here are the relevant
                milestones:
              </p>
              <Link
                href={`/milestones/${closestMilestoneSlug(result.adjustedMonths)}`}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-hover transition-colors min-h-[44px]"
              >
                View milestones for {formatAge(result.adjustedMonths)}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </Link>
            </div>
          )}

          {/* Expiration explanation */}
          <div className="card-alt p-4">
            <h3 className="text-base font-semibold text-foreground mb-2">
              When does adjusted age &ldquo;expire&rdquo;?
            </h3>
            {result.adjustedAgeExpired ? (
              <div className="text-sm text-muted leading-relaxed space-y-2">
                <p>
                  Your baby is over 2 years old. At this point, most
                  developmental experts stop using adjusted age and compare
                  children to their chronological age instead.
                </p>
                <p>
                  By around age 2, most premature babies have &ldquo;caught
                  up&rdquo; developmentally with their full-term peers, though
                  every child is different.
                </p>
              </div>
            ) : (
              <div className="text-sm text-muted leading-relaxed space-y-2">
                <p>
                  Adjusted age correction is typically used until your child
                  reaches <strong className="text-foreground">2 years</strong>{" "}
                  of chronological age (24 months). By that point, the
                  developmental gap between premature and full-term babies
                  usually narrows significantly.
                </p>
                <p>
                  Some specialists may continue using adjusted age for certain
                  assessments until age 3, especially for babies born very
                  prematurely (before 28 weeks). Ask your pediatrician what is
                  right for your child.
                </p>
              </div>
            )}
          </div>

          {/* Share with family */}
          <div className="card-alt p-4">
            <h3 className="text-base font-semibold text-foreground mb-2">
              Share this with family
            </h3>
            <p className="text-sm text-muted leading-relaxed mb-3">
              It can be helpful for grandparents and caregivers to understand
              adjusted age so they know what to expect developmentally.
            </p>

            {showShareText ? (
              <div className="space-y-3">
                <textarea
                  readOnly
                  value={getShareText()}
                  className="w-full h-48 px-3 py-2.5 rounded-lg border border-border bg-card text-foreground text-sm font-mono leading-relaxed resize-none focus:outline-none focus:ring-2 focus:ring-primary"
                  aria-label="Shareable adjusted age summary"
                  onClick={(e) => (e.target as HTMLTextAreaElement).select()}
                />
                <div className="flex gap-3 flex-wrap">
                  <button
                    type="button"
                    onClick={handleCopy}
                    className="px-4 py-2.5 min-h-[44px] rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary-hover transition-colors cursor-pointer"
                    aria-label="Copy summary to clipboard"
                  >
                    {copied ? "Copied!" : "Copy to clipboard"}
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowShareText(false)}
                    className="px-4 py-2.5 min-h-[44px] rounded-lg border border-border bg-card text-foreground text-sm font-medium hover:bg-card-alt transition-colors cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => setShowShareText(true)}
                className="inline-flex items-center gap-2 px-4 py-2.5 min-h-[44px] rounded-lg border border-border bg-card text-sm font-medium text-foreground hover:bg-card-alt transition-colors cursor-pointer"
                aria-label="Show shareable summary"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                  <polyline points="16 6 12 2 8 6" />
                  <line x1="12" y1="2" x2="12" y2="15" />
                </svg>
                Generate shareable summary
              </button>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
