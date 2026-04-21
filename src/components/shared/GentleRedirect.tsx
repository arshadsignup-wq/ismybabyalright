import Link from "next/link";

export default function GentleRedirect() {
  return (
    <aside
      className="mt-10 rounded-xl bg-primary-light border border-card-border px-5 py-6 sm:px-6"
      aria-label="Mental health support"
    >
      <div className="flex gap-3">
        {/* Heart icon */}
        <div className="flex-shrink-0 mt-0.5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-primary"
            aria-hidden="true"
          >
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
          </svg>
        </div>

        <div>
          <p className="text-base font-medium text-foreground mb-1.5">
            Feeling overwhelmed? That&apos;s completely normal.
          </p>
          <p className="text-sm text-muted leading-relaxed mb-3">
            Worrying about your child&apos;s development is one of the most
            common experiences for new parents. You&apos;re not alone, and
            asking questions means you&apos;re doing a great job.
          </p>
          <div className="flex flex-col gap-2">
            <Link
              href="/resources/mental-health"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-hover transition-colors min-h-[44px]"
            >
              Mental health resources for parents
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
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </Link>
            <p className="text-sm text-muted">
              <span className="font-medium text-foreground">
                PSI Warmline:
              </span>{" "}
              <a
                href="tel:1-800-944-4773"
                className="font-semibold text-primary underline"
              >
                1-800-944-4773
              </a>{" "}
              <span className="text-muted-light">(call or text)</span>
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}
