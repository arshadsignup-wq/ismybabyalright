interface RedFlagListProps {
  redFlags: { description: string; action: string }[];
}

export default function RedFlagList({ redFlags }: RedFlagListProps) {
  if (redFlags.length === 0) return null;

  return (
    <section aria-labelledby="red-flags-heading" className="flex flex-col gap-4">
      <div className="flex items-center gap-2.5">
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
          className="flex-shrink-0 text-concern"
          aria-hidden="true"
        >
          <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
          <line x1="12" y1="9" x2="12" y2="13" />
          <line x1="12" y1="17" x2="12.01" y2="17" />
        </svg>
        <h2 id="red-flags-heading" className="text-foreground">
          Red flags to watch for
        </h2>
      </div>

      <p className="text-sm leading-relaxed text-muted">
        If you notice any of the following, contact your pediatrician. These
        signs do not necessarily mean something is wrong, but they are worth
        discussing with a professional.
      </p>

      <ul className="flex flex-col gap-3" role="list">
        {redFlags.map((flag, index) => (
          <li key={index}>
            <div
              className="tier-concern p-4 flex flex-col gap-2"
              role="region"
              aria-label={`Red flag: ${flag.description}`}
            >
              {/* Description */}
              <div className="flex items-start gap-2.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mt-0.5 flex-shrink-0 text-concern"
                  aria-hidden="true"
                >
                  <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                  <line x1="12" y1="9" x2="12" y2="13" />
                  <line x1="12" y1="17" x2="12.01" y2="17" />
                </svg>
                <p className="text-sm font-semibold leading-relaxed">
                  {flag.description}
                </p>
              </div>

              {/* Recommended action */}
              <div className="ml-[1.625rem] rounded-md bg-concern-light/50 px-3 py-2">
                <p className="text-xs font-semibold uppercase tracking-wide text-concern mb-1">
                  What to do
                </p>
                <p className="text-sm leading-relaxed text-concern-foreground">
                  {flag.action}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
