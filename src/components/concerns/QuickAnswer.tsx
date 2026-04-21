interface QuickAnswerProps {
  answer: string;
}

export default function QuickAnswer({ answer }: QuickAnswerProps) {
  return (
    <div
      className="rounded-xl bg-primary-light border border-primary/20 px-5 py-6 sm:px-7 sm:py-7"
      role="region"
      aria-label="Quick answer"
    >
      <div className="flex gap-3">
        {/* Reassuring icon */}
        <div className="flex-shrink-0 mt-0.5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-primary"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 16v-4" />
            <path d="M12 8h.01" />
          </svg>
        </div>

        <div>
          <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
            The short answer
          </p>
          <p className="text-base leading-relaxed text-foreground sm:text-lg sm:leading-relaxed">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}
