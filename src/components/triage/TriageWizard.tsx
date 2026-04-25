"use client";

import { useState } from "react";
import type { TriageTree } from "@/data/triage/types";
import TriageResult from "./TriageResult";

interface TriageWizardProps {
  tree: TriageTree;
}

export default function TriageWizard({ tree }: TriageWizardProps) {
  const [currentNodeId, setCurrentNodeId] = useState(tree.startNodeId);
  const [history, setHistory] = useState<string[]>([]);

  const node = tree.nodes[currentNodeId];
  const outcome = tree.outcomes[currentNodeId];

  function handleOption(nextNodeId: string) {
    setHistory([...history, currentNodeId]);
    setCurrentNodeId(nextNodeId);
  }

  function handleBack() {
    if (history.length === 0) return;
    const prev = history[history.length - 1];
    setHistory(history.slice(0, -1));
    setCurrentNodeId(prev);
  }

  function handleStartOver() {
    setCurrentNodeId(tree.startNodeId);
    setHistory([]);
  }

  // Show outcome
  if (outcome) {
    return (
      <div className="flex flex-col gap-4">
        <TriageResult outcome={outcome} />
        <button
          onClick={handleStartOver}
          className="w-full px-4 py-3 rounded-lg border border-border text-foreground font-medium hover:bg-card-alt transition-colors cursor-pointer"
        >
          Start Over
        </button>
      </div>
    );
  }

  // Show question
  if (!node) {
    return (
      <div className="card p-5 text-center">
        <p className="text-concern font-medium">Something went wrong.</p>
        <button
          onClick={handleStartOver}
          className="mt-3 text-primary font-medium hover:underline cursor-pointer min-h-[44px]"
        >
          Start Over
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      {/* Progress / back */}
      {history.length > 0 && (
        <button
          onClick={handleBack}
          className="self-start flex items-center gap-1 text-sm text-muted hover:text-foreground transition-colors cursor-pointer min-h-[44px]"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="15 18 9 12 15 6" />
          </svg>
          Back
        </button>
      )}

      {/* Question */}
      <div className="card p-5">
        <h3 className="text-lg font-bold text-foreground mb-1">
          {node.question}
        </h3>
        {node.helpText && (
          <p className="text-sm text-muted mb-4 leading-relaxed">
            {node.helpText}
          </p>
        )}

        <div className="flex flex-col gap-2 mt-3">
          {node.options.map((option, i) => (
            <button
              key={i}
              onClick={() => handleOption(option.nextNodeId)}
              className="w-full text-left px-4 py-3 rounded-lg border-2 border-card-border bg-card text-foreground font-medium hover:border-primary hover:bg-primary-light transition-all cursor-pointer min-h-[44px] active:scale-[0.98]"
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      {/* Disclaimer */}
      <p className="text-xs text-muted text-center leading-relaxed">
        This is not medical advice. When in doubt, always call your pediatrician.
      </p>
    </div>
  );
}
