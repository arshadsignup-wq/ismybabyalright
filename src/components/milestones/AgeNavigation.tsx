import Link from "next/link";
import { allCheckpoints } from "@/data/milestones";

interface AgeNavigationProps {
  currentId: string;
}

export default function AgeNavigation({ currentId }: AgeNavigationProps) {
  const currentIndex = allCheckpoints.findIndex((cp) => cp.id === currentId);

  // If the ID is not found in the checkpoint list, render nothing
  if (currentIndex === -1) return null;

  const prev = currentIndex > 0 ? allCheckpoints[currentIndex - 1] : null;
  const next =
    currentIndex < allCheckpoints.length - 1
      ? allCheckpoints[currentIndex + 1]
      : null;

  return (
    <nav
      className="flex items-stretch gap-3"
      aria-label="Navigate between age checkpoints"
    >
      {/* Previous */}
      {prev ? (
        <Link
          href={`/milestones/${prev.id}`}
          className="card group flex flex-1 items-center gap-3 no-underline transition-shadow hover:shadow-md"
          aria-label={`Previous: ${prev.label}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="flex-shrink-0 text-muted group-hover:text-primary transition-colors"
            aria-hidden="true"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
          <div className="flex flex-col">
            <span className="text-xs font-medium uppercase tracking-wide text-muted">
              Previous
            </span>
            <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
              {prev.label}
            </span>
          </div>
        </Link>
      ) : (
        <div className="flex-1" aria-hidden="true" />
      )}

      {/* Next */}
      {next ? (
        <Link
          href={`/milestones/${next.id}`}
          className="card group flex flex-1 items-center justify-end gap-3 no-underline transition-shadow hover:shadow-md"
          aria-label={`Next: ${next.label}`}
        >
          <div className="flex flex-col items-end">
            <span className="text-xs font-medium uppercase tracking-wide text-muted">
              Next
            </span>
            <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
              {next.label}
            </span>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="flex-shrink-0 text-muted group-hover:text-primary transition-colors"
            aria-hidden="true"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </Link>
      ) : (
        <div className="flex-1" aria-hidden="true" />
      )}
    </nav>
  );
}
