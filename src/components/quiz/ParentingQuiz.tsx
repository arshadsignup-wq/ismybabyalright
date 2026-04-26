"use client";

import { useState, useCallback, useEffect } from "react";
import { quizQuestions } from "@/data/quiz/questions";
import { parentingStyles } from "@/data/quiz/styles";
import QuizResults from "./QuizResults";

const STORAGE_KEY = "imba_quiz_results";

type StyleKey = "responsive" | "structured" | "gentle" | "instinctive";

interface QuizResult {
  scores: Record<StyleKey, number>;
  primaryStyle: StyleKey;
  completedAt: string;
}

function calculateResults(
  answers: Record<number, StyleKey>
): QuizResult {
  const scores: Record<StyleKey, number> = {
    responsive: 0,
    structured: 0,
    gentle: 0,
    instinctive: 0,
  };

  for (const style of Object.values(answers)) {
    scores[style]++;
  }

  const primaryStyle = (Object.entries(scores) as [StyleKey, number][]).reduce(
    (best, [style, count]) => (count > best[1] ? [style, count] : best),
    ["responsive", 0] as [StyleKey, number]
  )[0];

  return {
    scores,
    primaryStyle,
    completedAt: new Date().toISOString(),
  };
}

function saveResults(result: QuizResult) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(result));
  } catch {
    // silently fail
  }
}

export default function ParentingQuiz() {
  const [phase, setPhase] = useState<"start" | "quiz" | "results">("start");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, StyleKey>>({});
  const [result, setResult] = useState<QuizResult | null>(null);
  const [fadeIn, setFadeIn] = useState(true);

  // Check for existing results on mount
  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const saved = JSON.parse(raw) as QuizResult;
        if (saved.scores && saved.primaryStyle) {
          setResult(saved);
        }
      }
    } catch {
      // no saved results
    }
  }, []);

  const handleStart = useCallback(() => {
    setAnswers({});
    setCurrentQuestion(0);
    setResult(null);
    setPhase("quiz");
    setFadeIn(true);
  }, []);

  const handleSelectOption = useCallback(
    (style: StyleKey) => {
      const newAnswers = { ...answers, [quizQuestions[currentQuestion].id]: style };
      setAnswers(newAnswers);

      if (currentQuestion < quizQuestions.length - 1) {
        setFadeIn(false);
        setTimeout(() => {
          setCurrentQuestion((q) => q + 1);
          setFadeIn(true);
        }, 200);
      } else {
        // Quiz complete
        const quizResult = calculateResults(newAnswers);
        setResult(quizResult);
        saveResults(quizResult);
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
    setResult(null);
    setPhase("start");
  }, []);

  const handleViewPrevious = useCallback(() => {
    if (result) {
      setPhase("results");
    }
  }, [result]);

  // Start screen
  if (phase === "start") {
    return (
      <div className="mx-auto max-w-lg px-4 py-8 sm:py-12">
        <div className="text-center mb-8">
          <span className="text-5xl mb-4 block" aria-hidden="true">
            🧩
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
            What&apos;s Your Parenting Style?
          </h1>
          <p className="mt-3 text-muted text-base leading-relaxed max-w-md mx-auto">
            15 real-life scenarios. No wrong answers. Just a fun way to discover
            your natural approach to the beautiful chaos of raising a little human.
          </p>
        </div>

        <div className="card p-6 mb-6">
          <h2 className="text-base font-bold text-foreground mb-3">
            How it works
          </h2>
          <ul className="flex flex-col gap-2.5 text-sm text-muted">
            <li className="flex items-start gap-2.5">
              <span
                className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-light text-primary flex items-center justify-center text-xs font-bold mt-0.5"
                aria-hidden="true"
              >
                1
              </span>
              <span>
                Read a scenario every parent has faced (yes, the 2am ones too)
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <span
                className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-light text-primary flex items-center justify-center text-xs font-bold mt-0.5"
                aria-hidden="true"
              >
                2
              </span>
              <span>
                Pick the response that feels most like you - go with your gut
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <span
                className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-light text-primary flex items-center justify-center text-xs font-bold mt-0.5"
                aria-hidden="true"
              >
                3
              </span>
              <span>
                Get your personalized results with strengths, tips, and resources
              </span>
            </li>
          </ul>
        </div>

        <div className="card-alt p-4 mb-6 text-sm text-muted">
          <p className="font-semibold text-foreground mb-1">
            No style is better or worse
          </p>
          <p>
            Every approach has real strengths. This quiz helps you understand
            your instincts so you can lean into what you do well - and grow
            where you want to.
          </p>
        </div>

        {/* Four style previews */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          {(Object.values(parentingStyles)).map((style) => (
            <div
              key={style.id}
              className="rounded-xl border border-card-border bg-card p-3 text-center"
            >
              <span className="text-2xl block mb-1" aria-hidden="true">
                {style.emoji}
              </span>
              <span
                className="text-xs font-bold block"
                style={{ color: style.color }}
              >
                {style.name}
              </span>
            </div>
          ))}
        </div>

        <button
          onClick={handleStart}
          className="w-full bg-primary text-primary-foreground font-bold text-base py-3.5 px-6 rounded-xl hover:bg-primary-hover transition-colors cursor-pointer"
        >
          Start Quiz
        </button>

        {result && (
          <button
            onClick={handleViewPrevious}
            className="w-full mt-3 bg-card border border-card-border text-primary font-semibold text-sm py-3 px-6 rounded-xl hover:bg-primary-light transition-colors cursor-pointer"
          >
            View Previous Results
          </button>
        )}
      </div>
    );
  }

  // Quiz flow
  if (phase === "quiz") {
    const question = quizQuestions[currentQuestion];
    const progress = ((currentQuestion) / quizQuestions.length) * 100;
    const selectedStyle = answers[question.id];

    return (
      <div className="mx-auto max-w-lg px-4 py-6 sm:py-8">
        {/* Progress bar */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold text-muted">
              Question {currentQuestion + 1} of {quizQuestions.length}
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
            aria-valuemax={quizQuestions.length}
            aria-label={`Question ${currentQuestion + 1} of ${quizQuestions.length}`}
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
              {question.scenario}
            </p>
          </div>

          {/* Options */}
          <div className="flex flex-col gap-3">
            {question.options.map((option, index) => {
              const isSelected = selectedStyle === option.style;
              return (
                <button
                  key={index}
                  onClick={() => handleSelectOption(option.style)}
                  className={`text-left p-4 rounded-xl border transition-all duration-150 cursor-pointer ${
                    isSelected
                      ? "border-primary bg-primary-light ring-2 ring-primary/20"
                      : "border-card-border bg-card hover:border-primary/40 hover:bg-primary-light/50"
                  }`}
                >
                  <span className="text-sm leading-relaxed text-foreground">
                    {option.text}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Navigation */}
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
              <polyline points="15 18 9 12 15 6" />
            </svg>
            Back
          </button>
          <span className="text-xs text-muted">
            {Object.keys(answers).length} of {quizQuestions.length} answered
          </span>
        </div>
      </div>
    );
  }

  // Results
  if (phase === "results" && result) {
    return (
      <QuizResults
        result={result}
        onRetake={handleRetake}
      />
    );
  }

  return null;
}
