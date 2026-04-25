"use client";

import { useState, useRef, useEffect } from "react";
import { epdsQuestions, epdsScoring } from "@/data/epds/questions";
import PrintButton from "@/components/shared/PrintButton";

/* -------------------------------------------------------------------------- */
/*  Types                                                                      */
/* -------------------------------------------------------------------------- */

type ScoreTier = "low" | "moderate" | "high";

interface ScoringResult {
  total: number;
  tier: ScoreTier;
  message: string;
  q10Score: number; // Question 10 (self-harm) warrants special attention
}

/* -------------------------------------------------------------------------- */
/*  Helpers                                                                    */
/* -------------------------------------------------------------------------- */

function getScoreTier(total: number): ScoringResult {
  const q10Score = 0; // placeholder, filled at call site

  if (total <= epdsScoring.low.max) {
    return { total, tier: "low", message: epdsScoring.low.message, q10Score };
  }

  if (total >= epdsScoring.moderate.min && total <= epdsScoring.moderate.max) {
    return {
      total,
      tier: "moderate",
      message: epdsScoring.moderate.message,
      q10Score,
    };
  }

  return { total, tier: "high", message: epdsScoring.high.message, q10Score };
}

/* -------------------------------------------------------------------------- */
/*  Component                                                                  */
/* -------------------------------------------------------------------------- */

export default function EPDSScreener() {
  const totalQuestions = epdsQuestions.length;

  // answers[questionId] = selected option index (0-3)
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [result, setResult] = useState<ScoringResult | null>(null);
  const [showResults, setShowResults] = useState(false);

  const resultRef = useRef<HTMLDivElement>(null);

  const answeredCount = Object.keys(answers).length;
  const allAnswered = answeredCount === totalQuestions;
  const progressPercent = Math.round((answeredCount / totalQuestions) * 100);

  /* ---------------------------------------------------------------------- */
  /*  Select an answer                                                       */
  /* ---------------------------------------------------------------------- */

  function selectAnswer(questionId: number, optionIndex: number) {
    setAnswers((prev) => ({ ...prev, [questionId]: optionIndex }));
  }

  /* ---------------------------------------------------------------------- */
  /*  Calculate score                                                        */
  /* ---------------------------------------------------------------------- */

  function handleScore() {
    if (!allAnswered) return;

    let total = 0;
    for (const q of epdsQuestions) {
      const selectedIdx = answers[q.id];
      if (selectedIdx !== undefined) {
        total += q.options[selectedIdx].score;
      }
    }
    const q10Idx = answers[10];
    const q10Score = q10Idx !== undefined
      ? epdsQuestions[9].options[q10Idx].score
      : 0;
    const scoring = getScoreTier(total);
    scoring.q10Score = q10Score;

    setResult(scoring);
    setShowResults(true);
  }

  // Scroll to results when shown
  useEffect(() => {
    if (showResults && resultRef.current) {
      resultRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [showResults]);

  /* ---------------------------------------------------------------------- */
  /*  Reset                                                                  */
  /* ---------------------------------------------------------------------- */

  function handleReset() {
    setAnswers({});
    setResult(null);
    setShowResults(false);
  }

  /* ---------------------------------------------------------------------- */
  /*  Render                                                                 */
  /* ---------------------------------------------------------------------- */

  return (
    <section className="card p-5 sm:p-8" aria-label="Edinburgh Postnatal Depression Scale screener">
      <h2>Perinatal Mood Screener (EPDS)</h2>

      {/* ---------------------------------------------------------------- */}
      {/*  Disclaimer                                                       */}
      {/* ---------------------------------------------------------------- */}
      <div className="card-alt p-4 mb-6 border-l-4 border-l-primary">
        <p className="text-sm text-foreground font-semibold mb-1">
          This is not a diagnosis.
        </p>
        <p className="text-sm text-muted leading-relaxed">
          This is a validated screening questionnaire (EPDS, Cox et al., 1987)
          used to help start a conversation with your healthcare provider. A
          high score does not mean you have depression, and a low score does
          not mean everything is fine. Only a qualified professional can provide
          a diagnosis.
        </p>
      </div>

      {/* ---------------------------------------------------------------- */}
      {/*  Crisis Resources  -  Always Visible                                */}
      {/* ---------------------------------------------------------------- */}
      <CrisisResources />

      {/* ---------------------------------------------------------------- */}
      {/*  Progress Indicator                                               */}
      {/* ---------------------------------------------------------------- */}
      {!showResults && (
        <div className="mb-6">
          <div className="flex items-center justify-between text-sm mb-2">
            <span className="text-muted">
              {answeredCount} of {totalQuestions} answered
            </span>
            <span className="font-semibold text-foreground">
              {progressPercent}%
            </span>
          </div>
          <div
            className="w-full h-2 rounded-full bg-card-alt overflow-hidden"
            role="progressbar"
            aria-valuenow={progressPercent}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label="Questionnaire progress"
          >
            <div
              className="h-full rounded-full bg-primary transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      )}

      {/* ---------------------------------------------------------------- */}
      {/*  Questions                                                        */}
      {/* ---------------------------------------------------------------- */}
      {!showResults && (
        <div className="space-y-6 mb-6">
          <p className="text-sm text-muted leading-relaxed">
            In the past 7 days, not just today...
          </p>

          {epdsQuestions.map((q) => (
            <fieldset
              key={q.id}
              className="card-alt p-4 rounded-lg"
              aria-required="true"
            >
              <legend className="text-sm font-semibold text-foreground mb-3">
                {q.id}. {q.question}
              </legend>

              <div className="flex flex-col gap-1" role="radiogroup">
                {q.options.map((option, idx) => {
                  const inputId = `epds-q${q.id}-o${idx}`;
                  const isSelected = answers[q.id] === idx;

                  return (
                    <label
                      key={idx}
                      htmlFor={inputId}
                      className={`flex items-center gap-3 px-3 py-2.5 min-h-[44px] rounded-lg text-sm cursor-pointer transition-colors ${
                        isSelected
                          ? "bg-primary-light text-foreground font-medium"
                          : "hover:bg-card text-foreground"
                      }`}
                    >
                      <input
                        id={inputId}
                        type="radio"
                        name={`epds-q${q.id}`}
                        value={idx}
                        checked={isSelected}
                        onChange={() => selectAnswer(q.id, idx)}
                        className="w-5 h-5 min-w-[20px] min-h-[20px] accent-primary cursor-pointer"
                      />
                      <span>{option.label}</span>
                    </label>
                  );
                })}
              </div>
            </fieldset>
          ))}

          {/* Score button */}
          <button
            type="button"
            onClick={handleScore}
            disabled={!allAnswered}
            className={`px-6 py-2.5 min-h-[44px] rounded-lg text-sm font-semibold transition-colors cursor-pointer ${
              allAnswered
                ? "bg-primary text-primary-foreground hover:bg-primary-hover"
                : "bg-card-alt text-muted cursor-not-allowed"
            }`}
            aria-label="Calculate EPDS score"
            aria-disabled={!allAnswered}
          >
            {allAnswered
              ? "See Results"
              : `Answer ${totalQuestions - answeredCount} more question${totalQuestions - answeredCount !== 1 ? "s" : ""}`}
          </button>
        </div>
      )}

      {/* ---------------------------------------------------------------- */}
      {/*  Results                                                          */}
      {/* ---------------------------------------------------------------- */}
      {showResults && result && (
        <div ref={resultRef} className="space-y-6" aria-live="polite">
          {/* Score summary */}
          <div
            className={
              result.tier === "low"
                ? "tier-safe p-5"
                : result.tier === "moderate"
                  ? "tier-monitor p-5"
                  : "tier-concern p-5"
            }
            role="region"
            aria-label="EPDS score result"
          >
            <div className="flex items-center gap-2.5 mb-3">
              <span
                className={
                  result.tier === "low"
                    ? "tier-safe-badge"
                    : result.tier === "moderate"
                      ? "tier-monitor-badge"
                      : "tier-concern-badge"
                }
              >
                Score: {result.total} / 30
              </span>
            </div>

            <p className="text-sm leading-relaxed mb-3">{result.message}</p>

            {/* Question 10 flag */}
            {result.q10Score > 0 && (
              <div className="bg-white/70 rounded-lg p-4 mt-3 border border-concern-border">
                <p className="text-sm font-semibold text-concern mb-1">
                  Important: You answered question 10 about thoughts of
                  self-harm.
                </p>
                <p className="text-sm leading-relaxed">
                  Any score above 0 on this question is something to discuss
                  with your healthcare provider right away. You are not alone,
                  and help is available. Please reach out to one of the
                  resources below.
                </p>
              </div>
            )}
          </div>

          {/* Gentle messaging */}
          <div className="card-alt p-4">
            <p className="text-sm text-foreground font-semibold mb-2">
              What this score means
            </p>
            <div className="text-sm text-muted leading-relaxed space-y-2">
              {result.tier === "low" && (
                <>
                  <p>
                    Your responses suggest you are managing well. Continue to
                    take care of yourself, and remember that it is always okay
                    to ask for help even when things seem fine.
                  </p>
                  <p>
                    If how you are feeling changes, consider retaking this
                    screener or reaching out to your healthcare provider.
                  </p>
                </>
              )}
              {result.tier === "moderate" && (
                <>
                  <p>
                    Your responses suggest you may be going through a difficult
                    time. This is more common than you might think, and it does
                    not mean you are failing as a parent.
                  </p>
                  <p>
                    Consider sharing these results with your healthcare provider
                    at your next visit. You can print this page to bring with
                    you.
                  </p>
                </>
              )}
              {result.tier === "high" && (
                <>
                  <p>
                    Your responses suggest you may benefit from additional
                    support. Perinatal mood disorders are one of the most common
                    complications of pregnancy and postpartum &mdash; and they
                    are very treatable.
                  </p>
                  <p>
                    <strong className="text-foreground">
                      Please reach out to your healthcare provider soon.
                    </strong>{" "}
                    You can print this page to share with them. You deserve help,
                    and you do not have to feel this way.
                  </p>
                </>
              )}
            </div>
          </div>

          {/* Disclaimer reiteration */}
          <div className="card-alt p-4 border-l-4 border-l-primary">
            <p className="text-sm text-foreground font-semibold">
              This is a conversation starter, not a diagnosis.
            </p>
            <p className="text-sm text-muted leading-relaxed mt-1">
              The EPDS is a screening tool validated for research and clinical
              use. Only a qualified healthcare professional can diagnose
              perinatal mood and anxiety disorders.
            </p>
          </div>

          {/* Crisis resources again after results */}
          <CrisisResources />

          {/* Actions */}
          <div className="flex flex-wrap gap-3">
            <PrintButton />
            <button
              type="button"
              onClick={handleReset}
              className="px-4 py-2.5 min-h-[44px] rounded-lg border border-border bg-card text-foreground text-sm font-medium hover:bg-card-alt transition-colors cursor-pointer"
              aria-label="Retake the screener"
            >
              Retake
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Crisis Resources Sub-component                                             */
/* -------------------------------------------------------------------------- */

function CrisisResources() {
  return (
    <aside
      className="bg-primary-light border border-card-border rounded-xl px-5 py-4 mb-6"
      aria-label="Crisis resources"
    >
      <p className="text-sm font-semibold text-foreground mb-3">
        Help is available right now
      </p>
      <ul className="flex flex-col gap-3 text-sm" role="list">
        <li className="flex items-start gap-2.5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="flex-shrink-0 mt-0.5 text-primary"
            aria-hidden="true"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          <div>
            <span className="font-semibold text-foreground">
              PSI Warmline:{" "}
            </span>
            <a
              href="tel:1-800-944-4773"
              className="font-semibold text-primary underline"
            >
              1-800-944-4773
            </a>
            <span className="text-muted"> (call or text, English/Spanish)</span>
          </div>
        </li>
        <li className="flex items-start gap-2.5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="flex-shrink-0 mt-0.5 text-primary"
            aria-hidden="true"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
          <div>
            <span className="font-semibold text-foreground">
              Crisis Text Line:{" "}
            </span>
            <span className="text-foreground">
              text <strong>HOME</strong> to{" "}
              <a
                href="sms:741741&body=HOME"
                className="font-semibold text-primary underline"
              >
                741741
              </a>
            </span>
          </div>
        </li>
        <li className="flex items-start gap-2.5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="flex-shrink-0 mt-0.5 text-primary"
            aria-hidden="true"
          >
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
          </svg>
          <div>
            <span className="font-semibold text-foreground">
              988 Suicide &amp; Crisis Lifeline:{" "}
            </span>
            <a
              href="tel:988"
              className="font-semibold text-primary underline"
            >
              988
            </a>
            <span className="text-muted"> (call or text, 24/7)</span>
          </div>
        </li>
      </ul>
    </aside>
  );
}
