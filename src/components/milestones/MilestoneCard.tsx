import type { Milestone } from "@/data/milestones";
import SourceBadge from "@/components/shared/SourceBadge";
import Link from "next/link";
import RangeBar from "./RangeBar";

interface MilestoneCardProps {
  milestone: Milestone;
}

export default function MilestoneCard({ milestone }: MilestoneCardProps) {
  return (
    <article className="card flex flex-col gap-4" aria-labelledby={`milestone-${milestone.id}`}>
      {/* Name and sources */}
      <div className="flex flex-col gap-2">
        <h3 id={`milestone-${milestone.id}`} className="text-foreground">
          {milestone.name}
        </h3>

        {milestone.sources.length > 0 && (
          <div className="flex flex-wrap gap-1.5" aria-label="Sources">
            {milestone.sources.map((source) => (
              <SourceBadge
                key={`${source.org}-${source.url}`}
                org={source.org}
                url={source.url}
              />
            ))}
          </div>
        )}
      </div>

      {/* Plain description */}
      <p className="text-sm leading-relaxed text-foreground">
        {milestone.plainDescription}
      </p>

      {/* What it looks like */}
      <div className="rounded-lg bg-card-alt px-4 py-3">
        <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-muted">
          What it looks like
        </p>
        <p className="text-sm leading-relaxed text-foreground">
          {milestone.whatItLooksLike}
        </p>
      </div>

      {/* Range bar */}
      <RangeBar typicalRange={milestone.typicalRange} />

      {/* Expandable "When to worry" section */}
      <details className="group">
        <summary className="flex min-h-[44px] cursor-pointer list-none items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-foreground hover:bg-card-alt transition-colors [&::-webkit-details-marker]:hidden">
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
            className="flex-shrink-0 transition-transform duration-200 group-open:rotate-90"
            aria-hidden="true"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
          When should I worry?
        </summary>

        <div className="mt-2 flex flex-col gap-3 pl-2">
          {/* Green: Normal */}
          <div className="tier-safe p-4" role="region" aria-label="This is normal">
            <p className="mb-1 flex items-center gap-2 text-xs font-bold uppercase tracking-wide">
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
              This is normal
            </p>
            <p className="text-sm leading-relaxed">{milestone.whenNormal}</p>
          </div>

          {/* Yellow: Mention at next visit */}
          <div className="tier-monitor p-4" role="region" aria-label="Mention at next visit">
            <p className="mb-1 flex items-center gap-2 text-xs font-bold uppercase tracking-wide">
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
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
              Mention at next visit
            </p>
            <p className="text-sm leading-relaxed">{milestone.whenToMention}</p>
          </div>

          {/* Red: Call your doctor */}
          <div className="tier-concern p-4" role="region" aria-label="Call your doctor">
            <p className="mb-1 flex items-center gap-2 text-xs font-bold uppercase tracking-wide">
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
                <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                <line x1="12" y1="9" x2="12" y2="13" />
                <line x1="12" y1="17" x2="12.01" y2="17" />
              </svg>
              Call your doctor
            </p>
            <p className="text-sm leading-relaxed">{milestone.whenToCallNow}</p>
          </div>
        </div>
      </details>

      {/* Related concerns */}
      {milestone.relatedConcerns.length > 0 && (
        <div className="flex flex-wrap gap-2 border-t border-card-border pt-3">
          <span className="text-xs font-semibold uppercase tracking-wide text-muted">
            Related:
          </span>
          {milestone.relatedConcerns.map((concern) => (
            <Link
              key={concern}
              href={`/concerns/${concern}`}
              className="inline-flex items-center rounded-full bg-card-alt px-3 py-1 text-xs font-medium text-muted no-underline hover:bg-primary-light hover:text-primary transition-colors"
            >
              {concern.replace(/-/g, " ")}
            </Link>
          ))}
        </div>
      )}
    </article>
  );
}
