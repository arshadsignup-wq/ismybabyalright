interface AgeBreakdownProps {
  byAge: { ageRange: string; context: string }[];
}

export default function AgeBreakdown({ byAge }: AgeBreakdownProps) {
  if (byAge.length === 0) return null;

  return (
    <section aria-label="What to expect by age">
      <h2 className="text-xl font-bold text-foreground mb-4 sm:text-2xl">
        What to expect by age
      </h2>

      <div className="space-y-3">
        {byAge.map((entry) => (
          <div
            key={entry.ageRange}
            className="card p-5"
            role="region"
            aria-label={`${entry.ageRange} age range`}
          >
            <div className="flex items-start gap-3">
              {/* Age badge */}
              <span
                className="flex-shrink-0 inline-flex items-center justify-center min-w-[64px] px-3 py-1.5 rounded-full bg-primary-light text-primary text-xs font-bold whitespace-nowrap"
                aria-hidden="true"
              >
                {entry.ageRange}
              </span>

              <p className="text-sm leading-relaxed text-foreground pt-0.5">
                {entry.context}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
