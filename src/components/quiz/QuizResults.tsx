"use client";

import { useState } from "react";
import Link from "next/link";
import { parentingStyles } from "@/data/quiz/styles";
import { quizQuestions } from "@/data/quiz/questions";

type StyleKey = "responsive" | "structured" | "gentle" | "instinctive";

interface QuizResult {
  scores: Record<StyleKey, number>;
  primaryStyle: StyleKey;
  completedAt: string;
}

const styleOrder: StyleKey[] = [
  "responsive",
  "structured",
  "gentle",
  "instinctive",
];

export default function QuizResults({
  result,
  onRetake,
}: {
  result: QuizResult;
  onRetake: () => void;
}) {
  const [copied, setCopied] = useState(false);
  const primary = parentingStyles[result.primaryStyle];
  const totalQuestions = quizQuestions.length;

  // Calculate percentages
  const percentages = styleOrder.reduce((acc, key) => {
    acc[key] = Math.round((result.scores[key] / totalQuestions) * 100);
    return acc;
  }, {} as Record<StyleKey, number>);

  // Ensure percentages add up to 100
  const percentTotal = Object.values(percentages).reduce((a, b) => a + b, 0);
  if (percentTotal !== 100) {
    // Add the remainder to the primary style
    percentages[result.primaryStyle] += 100 - percentTotal;
  }

  // Sort styles by score descending for the breakdown
  const sortedStyles = [...styleOrder].sort(
    (a, b) => result.scores[b] - result.scores[a]
  );

  const handleShare = async () => {
    const sortedForShare = [...styleOrder].sort(
      (a, b) => result.scores[b] - result.scores[a]
    );
    const breakdown = sortedForShare
      .map((key) => `${percentages[key]}% ${key}`)
      .join(", ");

    const text = `My parenting style: ${primary.name} (${primary.id.charAt(0).toUpperCase() + primary.id.slice(1)}) - I scored ${breakdown}. Take the quiz at ismybabyalright.com/quiz/parenting-style`;

    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback for older browsers
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="mx-auto max-w-lg px-4 py-6 sm:py-10 animate-fade-in-up">
      {/* Primary result hero */}
      <div
        className="rounded-2xl p-6 sm:p-8 text-center mb-6"
        style={{
          backgroundColor: primary.color + "12",
          border: `2px solid ${primary.color}30`,
        }}
      >
        <span className="text-5xl sm:text-6xl block mb-3" aria-hidden="true">
          {primary.emoji}
        </span>
        <p className="text-xs font-semibold uppercase tracking-wider text-muted mb-1">
          Your parenting style
        </p>
        <h1
          className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2"
          style={{ color: primary.color }}
        >
          {primary.name}
        </h1>
        <p className="text-base text-foreground font-medium leading-relaxed">
          {primary.tagline}
        </p>
      </div>

      {/* Score breakdown */}
      <div className="card p-5 mb-6">
        <h2 className="text-sm font-bold text-foreground mb-4">
          Your Style Breakdown
        </h2>
        <div className="flex flex-col gap-3.5">
          {sortedStyles.map((key) => {
            const style = parentingStyles[key];
            const pct = percentages[key];
            const isPrimary = key === result.primaryStyle;
            return (
              <div key={key}>
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-2">
                    <span className="text-base" aria-hidden="true">
                      {style.emoji}
                    </span>
                    <span
                      className={`text-sm ${
                        isPrimary ? "font-bold" : "font-medium"
                      }`}
                      style={{ color: isPrimary ? style.color : undefined }}
                    >
                      {style.name}
                    </span>
                  </div>
                  <span
                    className={`text-sm tabular-nums ${
                      isPrimary ? "font-bold" : "font-medium text-muted"
                    }`}
                    style={{ color: isPrimary ? style.color : undefined }}
                  >
                    {pct}%
                  </span>
                </div>
                <div className="h-3 bg-background-alt rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-700 ease-out"
                    style={{
                      width: `${pct}%`,
                      backgroundColor: style.color,
                      opacity: isPrimary ? 1 : 0.6,
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        <p className="text-xs text-muted mt-4 leading-relaxed">
          Most parents are a blend of styles - and that blend can shift depending
          on the situation, your energy level, and your child&apos;s age. There are
          no wrong results here.
        </p>
      </div>

      {/* Description */}
      <div className="card p-5 mb-6">
        <h2 className="text-sm font-bold text-foreground mb-2">
          About Your Style
        </h2>
        <p className="text-sm text-muted leading-relaxed">
          {primary.description}
        </p>
      </div>

      {/* Strengths */}
      <div
        className="rounded-2xl p-5 mb-6"
        style={{
          backgroundColor: primary.color + "0A",
          border: `1px solid ${primary.color}20`,
        }}
      >
        <h2 className="text-sm font-bold text-foreground mb-3 flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke={primary.color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
          Your Strengths
        </h2>
        <ul className="flex flex-col gap-2">
          {primary.strengths.map((strength, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke={primary.color}
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="flex-shrink-0 mt-0.5"
                aria-hidden="true"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span className="text-foreground leading-relaxed">{strength}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Watch-fors */}
      <div className="card p-5 mb-6">
        <h2 className="text-sm font-bold text-foreground mb-3 flex items-center gap-2">
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
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
            <circle cx="12" cy="12" r="3" />
          </svg>
          Things to Watch For
        </h2>
        <ul className="flex flex-col gap-2">
          {primary.watchFors.map((item, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#64748B"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="flex-shrink-0 mt-0.5"
                aria-hidden="true"
              >
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
              <span className="text-muted leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Tips */}
      <div
        className="rounded-2xl p-5 mb-6"
        style={{
          backgroundColor: "#FFFBEB",
          border: "1px solid #FDE68A",
        }}
      >
        <h2 className="text-sm font-bold text-foreground mb-3 flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#D97706"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <line x1="9" y1="18" x2="15" y2="18" />
            <line x1="10" y1="22" x2="14" y2="22" />
            <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14" />
          </svg>
          Tips for You
        </h2>
        <ul className="flex flex-col gap-2.5">
          {primary.tips.map((tip, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm">
              <span
                className="flex-shrink-0 w-5 h-5 rounded-full bg-sunny text-white flex items-center justify-center text-xs font-bold mt-0.5"
                aria-hidden="true"
              >
                {i + 1}
              </span>
              <span className="text-foreground leading-relaxed">{tip}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Related resources */}
      <div className="card p-5 mb-6">
        <h2 className="text-sm font-bold text-foreground mb-3">
          Resources for You
        </h2>
        <div className="grid grid-cols-2 gap-2.5">
          {primary.relatedLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-primary-light text-primary text-sm font-semibold hover:bg-primary hover:text-primary-foreground transition-colors no-underline"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
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
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Share and retake buttons */}
      <div className="flex flex-col gap-3 mb-8">
        <button
          onClick={handleShare}
          className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold text-sm py-3.5 px-6 rounded-xl hover:bg-primary-hover transition-colors cursor-pointer"
        >
          {copied ? (
            <>
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
                <polyline points="20 6 9 17 4 12" />
              </svg>
              Copied to clipboard!
            </>
          ) : (
            <>
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
                <circle cx="18" cy="5" r="3" />
                <circle cx="6" cy="12" r="3" />
                <circle cx="18" cy="19" r="3" />
                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
              </svg>
              Share Results
            </>
          )}
        </button>

        <button
          onClick={onRetake}
          className="w-full bg-card border border-card-border text-foreground font-semibold text-sm py-3 px-6 rounded-xl hover:bg-primary-light hover:text-primary transition-colors cursor-pointer"
        >
          Retake Quiz
        </button>
      </div>

      {/* Disclaimer */}
      <p className="text-xs text-muted text-center leading-relaxed px-4 mb-4">
        This quiz is for fun and self-reflection only. It is not a clinical
        assessment. Every family is unique, and the best parenting style is the
        one that works for you and your child. If you have concerns about your
        child&apos;s development, talk to your pediatrician.
      </p>
    </div>
  );
}
