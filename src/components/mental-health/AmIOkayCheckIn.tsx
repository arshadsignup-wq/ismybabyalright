"use client";

import { useState } from "react";
import { checkInQuestions } from "@/data/mental-health/check-in-questions";

export default function AmIOkayCheckIn() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<string, boolean>>({});
  const [done, setDone] = useState(false);

  const question = checkInQuestions[currentIdx];

  function handleAnswer(positive: boolean) {
    setAnswers({ ...answers, [question.id]: positive });
    if (currentIdx < checkInQuestions.length - 1) {
      setCurrentIdx(currentIdx + 1);
    } else {
      setDone(true);
    }
  }

  function handleStartOver() {
    setCurrentIdx(0);
    setAnswers({});
    setDone(false);
  }

  if (done) {
    const concernCount = Object.values(answers).filter((v) => !v).length;

    return (
      <div className="flex flex-col gap-4">
        <div className="card p-5 text-center">
          {concernCount === 0 ? (
            <>
              <p className="text-xl font-bold text-safe mb-2">You seem to be doing okay</p>
              <p className="text-sm text-muted">
                Keep checking in with yourself. Good days and hard days are both normal.
              </p>
            </>
          ) : concernCount <= 2 ? (
            <>
              <p className="text-xl font-bold text-monitor mb-2">Some things could use attention</p>
              <p className="text-sm text-muted">
                A few of your answers suggest you might need more support. That&apos;s okay  - 
                parenting is hard, and asking for help is a strength.
              </p>
            </>
          ) : (
            <>
              <p className="text-xl font-bold text-concern mb-2">You might need some support</p>
              <p className="text-sm text-muted">
                Several of your answers suggest you&apos;re struggling. This doesn&apos;t mean
                you&apos;re a bad parent  -  it means you need help, and help is available.
              </p>
            </>
          )}
        </div>

        {/* Review answers */}
        <div className="flex flex-col gap-2">
          {checkInQuestions.map((q) => {
            const positive = answers[q.id];
            return (
              <div
                key={q.id}
                className={`p-3 rounded-lg text-sm ${
                  positive
                    ? "bg-safe-light border border-safe-border"
                    : "bg-concern-light border border-concern-border"
                }`}
              >
                <p className="font-medium text-foreground mb-1">{q.text}</p>
                <p className={positive ? "text-safe-foreground" : "text-concern-foreground"}>
                  {positive ? q.positiveAnswer : q.concernAnswer}
                </p>
              </div>
            );
          })}
        </div>

        {/* Resources */}
        <div className="card-alt p-4">
          <h4 className="text-sm font-bold text-foreground mb-2">
            Support is always available
          </h4>
          <ul className="text-sm text-foreground flex flex-col gap-1.5">
            <li>
              PSI Warmline:{" "}
              <a href="tel:1-800-944-4773" className="text-primary font-semibold">
                1-800-944-4773
              </a>{" "}
              (call or text)
            </li>
            <li>
              Crisis Text Line: Text{" "}
              <span className="font-semibold">HOME</span> to{" "}
              <span className="font-semibold">741741</span>
            </li>
            <li>
              Suicide & Crisis Lifeline:{" "}
              <a href="tel:988" className="text-primary font-semibold">988</a>
            </li>
          </ul>
        </div>

        <button
          onClick={handleStartOver}
          className="w-full px-4 py-3 rounded-lg border border-border text-foreground font-medium hover:bg-card-alt transition-colors cursor-pointer"
        >
          Start Over
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      {/* Progress */}
      <div className="flex gap-1">
        {checkInQuestions.map((_, i) => (
          <div
            key={i}
            className={`flex-1 h-1.5 rounded-full ${
              i < currentIdx
                ? "bg-primary"
                : i === currentIdx
                  ? "bg-primary/50"
                  : "bg-card-border"
            }`}
          />
        ))}
      </div>

      {/* Question */}
      <div className="card p-5">
        <p className="text-xs text-muted mb-2">
          Question {currentIdx + 1} of {checkInQuestions.length}
        </p>
        <h3 className="text-lg font-bold text-foreground mb-4">
          {question.text}
        </h3>

        <div className="flex gap-3">
          <button
            onClick={() => handleAnswer(true)}
            className="flex-1 px-4 py-3 rounded-lg border-2 border-safe-border bg-safe-light text-safe-foreground font-semibold hover:bg-safe hover:text-white transition-colors cursor-pointer"
          >
            Yes
          </button>
          <button
            onClick={() => handleAnswer(false)}
            className="flex-1 px-4 py-3 rounded-lg border-2 border-concern-border bg-concern-light text-concern-foreground font-semibold hover:bg-concern hover:text-white transition-colors cursor-pointer"
          >
            Not really
          </button>
        </div>
      </div>

      <p className="text-xs text-muted text-center">
        This is not a clinical assessment. It&apos;s a gentle check-in for any parent or caregiver.
      </p>
    </div>
  );
}
