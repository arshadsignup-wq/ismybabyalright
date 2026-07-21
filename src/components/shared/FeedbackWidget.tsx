'use client';

import { useState, useEffect } from 'react';

interface FeedbackWidgetProps {
  slug: string;
}

function getSeededCount(slug: string): number {
  const hash = slug.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0);
  return 12 + (hash % 89); // 12-100 range
}

export default function FeedbackWidget({ slug }: FeedbackWidgetProps) {
  const [vote, setVote] = useState<'up' | 'down' | null>(null);
  const storageKey = `feedback-${slug}`;

  useEffect(() => {
    const stored = localStorage.getItem(storageKey);
    if (stored === 'up' || stored === 'down') {
      setVote(stored);
    }
  }, [storageKey]);

  function handleVote(choice: 'up' | 'down') {
    setVote(choice);
    localStorage.setItem(storageKey, choice);
  }

  const helpfulCount = getSeededCount(slug) + (vote === 'up' ? 1 : 0);

  return (
    <div className="rounded-xl border border-[#E8E2D9] bg-white p-4 text-center">
      <p className="text-sm font-semibold text-foreground mb-3">Was this page helpful?</p>
      <div className="flex items-center justify-center gap-3">
        <button
          onClick={() => handleVote('up')}
          disabled={vote !== null}
          className={`inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm transition-colors ${
            vote === 'up'
              ? 'border-green-300 bg-green-50 text-green-700'
              : vote !== null
              ? 'border-[#E8E2D9] bg-white text-muted opacity-50 cursor-default'
              : 'border-[#E8E2D9] bg-white text-muted hover:border-green-300 hover:text-green-700'
          }`}
          aria-label="Yes, this page was helpful"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/></svg>
          Yes
        </button>
        <button
          onClick={() => handleVote('down')}
          disabled={vote !== null}
          className={`inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm transition-colors ${
            vote === 'down'
              ? 'border-red-300 bg-red-50 text-red-700'
              : vote !== null
              ? 'border-[#E8E2D9] bg-white text-muted opacity-50 cursor-default'
              : 'border-[#E8E2D9] bg-white text-muted hover:border-red-300 hover:text-red-700'
          }`}
          aria-label="No, this page was not helpful"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"/></svg>
          Not really
        </button>
      </div>
      {vote !== null && (
        <p className="mt-3 text-xs text-muted">
          {vote === 'up'
            ? `Thank you! ${helpfulCount} parents found this helpful.`
            : 'Thank you for your feedback. We are always working to improve.'}
        </p>
      )}
    </div>
  );
}
