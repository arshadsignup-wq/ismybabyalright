"use client";

import { useState, useCallback, useEffect } from "react";
import {
  POTTY_QUESTIONS,
  POTTY_RESULTS,
  getReadinessLevel,
  type ReadinessLevel,
} from "@/data/quiz/potty-training";

const STORAGE_KEY = "imba_potty_quiz";

interface SavedResult {
  totalPoints: number;
  level: ReadinessLevel;
  completedAt: string;
}

export default function PottyTrainingQuiz() {
  const [phase, setPhase] = useState<"start" | "quiz" | "results">("start");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [savedResult, setSavedResult] = useState<SavedResult | null>(null);
  const [fadeIn, setFadeIn] = useState(true);

  // Load saved results
  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const saved = JSON.parse(raw) as SavedResult;
        if (saved.level) setSavedResult(saved);
      }
    } catch {
      // no saved results
    }
  }, []);

  const handleStart = useCallback(() => {
    setAnswers({});
    setCurrentQuestion(0);
    setPhase("quiz");
    setFadeIn(true);
  }, []);

  const handleSelect = useCallback(
    (points: number) => {
      const qId = POTTY_QUESTIONS[currentQuestion].id;
      const newAnswers = { ...answers, [qId]: points };
      setAnswers(newAnswers);

      if (currentQuestion < POTTY_QUESTIONS.length - 1) {
        setFadeIn(false);
        setTimeout(() => {
          setCurrentQuestion((q) => q + 1);
          setFadeIn(true);
        }, 200);
      } else {
        const total = Object.values(newAnswers).reduce((a, b) => a + b, 0);
        const level = getReadinessLevel(total);
        const result: SavedResult = {
          totalPoints: total,
          level,
          completedAt: new Date().toISOString(),
        };
        setSavedResult(result);
        try {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(result));
        } catch {
          // silently fail
        }
        setPhase("results");
      }
    },
    [answers, currentQuestion]
  );

  const handleBack = useCallback(() => {
    if (currentQuestion > 0) {
      setFadeIn(false);
      setTimeout(() => {
        setCurrentQuestion((q) => q - 1);
        setFadeIn(true);
      }, 200);
    }
  }, [currentQuestion]);

  const handleRetake = useCallback(() => {
    setAnswers({});
    setCurrentQuestion(0);
    setPhase("start");
  }, []);

  // Start screen
  if (phase === "start") {
    return (
      <div className="mx-auto max-w-lg px-4 py-8 sm:py-12">
        <div className="text-center mb-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
            Potty Training Readiness Quiz
          </h1>
          <p className="mt-3 text-muted text-base leading-relaxed max-w-md mx-auto">
            Answer 10 quick questions to find out if your toddler is showing
            signs of being ready for potty training.
          </p>
        </div>

        <div className="card p-6 mb-6">
          <h2 className="text-base font-bold text-foreground mb-3">
            How it works
          </h2>
          <ul className="flex flex-col gap-2.5 text-sm text-muted">
            <li className="flex items-start gap-2.5">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-light text-primary flex items-center justify-center text-xs font-bold mt-0.5" aria-hidden="true">1</span>
              <span>Answer 10 questions about your child&apos;s current abilities</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-light text-primary flex items-center justify-center text-xs font-bold mt-0.5" aria-hidden="true">2</span>
              <span>Pick the answer that best matches your child right now</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-light text-primary flex items-center justify-center text-xs font-bold mt-0.5" aria-hidden="true">3</span>
              <span>Get a readiness assessment with personalized tips</span>
            </li>
          </ul>
        </div>

        <div className="card-alt p-4 mb-6 text-sm text-muted">
          <p className="font-semibold text-foreground mb-1">
            Every child develops at their own pace
          </p>
          <p>
            Most children show readiness between 18 and 30 months. Some aren&apos;t
            ready until 3 or later — and that&apos;s completely normal.
          </p>
        </div>

        <button
          onClick={handleStart}
          className="w-full bg-primary text-primary-foreground font-bold text-base py-3.5 px-6 rounded-xl hover:bg-primary-hover transition-colors cursor-pointer"
        >
          Start Quiz
        </button>

        {savedResult && (
          <button
            onClick={() => setPhase("results")}
            className="w-full mt-3 bg-card border border-card-border text-primary font-semibold text-sm py-3 px-6 rounded-xl hover:bg-primary-light transition-colors cursor-pointer"
          >
            View Previous Results
          </button>
        )}
      </div>
    );
  }

  // Quiz
  if (phase === "quiz") {
    const question = POTTY_QUESTIONS[currentQuestion];
    const progress = (currentQuestion / POTTY_QUESTIONS.length) * 100;

    return (
      <div className="mx-auto max-w-lg px-4 py-6 sm:py-8">
        {/* Progress */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-muted">
              Question {currentQuestion + 1} of {POTTY_QUESTIONS.length}
            </span>
            <span className="text-xs font-semibold text-muted">
              {Math.round(progress)}%
            </span>
          </div>
          <div
            className="h-2 bg-card-border rounded-full overflow-hidden"
            role="progressbar"
            aria-valuenow={currentQuestion + 1}
            aria-valuemin={1}
            aria-valuemax={POTTY_QUESTIONS.length}
          >
            <div
              className="h-full bg-primary rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question */}
        <div
          className={`transition-opacity duration-200 ${
            fadeIn ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="card p-5 mb-5">
            <p className="text-base font-bold text-foreground leading-relaxed">
              {question.question}
            </p>
          </div>

          <div className="flex flex-col gap-3">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleSelect(option.points)}
                className="text-left p-4 rounded-xl border border-card-border bg-card hover:border-primary/40 hover:bg-primary-light/50 transition-all duration-150 cursor-pointer"
              >
                <span className="text-sm leading-relaxed text-foreground">
                  {option.text}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Nav */}
        <div className="mt-6 flex items-center justify-between">
          <button
            onClick={handleBack}
            disabled={currentQuestion === 0}
            className={`flex items-center gap-1.5 text-sm font-semibold px-4 py-2.5 rounded-xl transition-colors cursor-pointer ${
              currentQuestion === 0
                ? "text-muted/40 cursor-not-allowed"
                : "text-primary hover:bg-primary-light"
            }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <polyline points="15 18 9 12 15 6" />
            </svg>
            Back
          </button>
          <span className="text-xs text-muted">
            {Object.keys(answers).length} of {POTTY_QUESTIONS.length} answered
          </span>
        </div>
      </div>
    );
  }

  // Results
  if (phase === "results" && savedResult) {
    const resultData = POTTY_RESULTS[savedResult.level];
    const maxPoints = POTTY_QUESTIONS.length * 3;

    return (
      <div className="mx-auto max-w-lg px-4 py-8 sm:py-12">
        <div className="text-center mb-6">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-foreground">
            Your Results
          </h1>
        </div>

        {/* Score */}
        <div
          className="rounded-2xl border-2 p-6 text-center mb-6"
          style={{ borderColor: resultData.color + "40", backgroundColor: resultData.color + "10" }}
        >
          <h2
            className="text-xl font-extrabold mb-2"
            style={{ color: resultData.color }}
          >
            {resultData.title}
          </h2>
          <p className="text-sm text-muted mb-3">
            Score: {savedResult.totalPoints} / {maxPoints}
          </p>
          <p className="text-sm text-foreground leading-relaxed">
            {resultData.description}
          </p>
        </div>

        {/* Tips */}
        <div className="card p-5 mb-6">
          <h3 className="text-base font-bold text-foreground mb-3">
            What to do next
          </h3>
          <ul className="space-y-2">
            {resultData.tips.map((tip, i) => (
              <li key={i} className="flex gap-2 text-sm text-muted">
                <span className="mt-0.5 shrink-0 text-primary" aria-hidden="true">&#x2022;</span>
                {tip}
              </li>
            ))}
          </ul>
        </div>

        {/* Actions */}
        <div className="flex flex-col gap-3">
          <button
            onClick={handleRetake}
            className="w-full bg-primary text-primary-foreground font-bold text-base py-3.5 px-6 rounded-xl hover:bg-primary-hover transition-colors cursor-pointer"
          >
            Retake Quiz
          </button>
        </div>

        {/* Sources */}
        <div className="text-xs text-muted mt-8">
          <p className="font-semibold mb-1">Sources</p>
          <ul className="space-y-0.5">
            <li>
              <a
                href="https://www.healthychildren.org/English/ages-stages/toddler/toilet-training/Pages/default.aspx"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-primary"
              >
                AAP — Toilet Training
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }

  return null;
}
