import type { Milestone } from "@/data/milestones";

interface RangeBarProps {
  typicalRange: Milestone["typicalRange"];
}

/**
 * Visual horizontal bar showing the typical age range for a milestone.
 *
 * Layout: [early -------- average -------- late normal -------- concern]
 * Colors: green (on track) -> yellow (monitor) -> red (concern)
 *
 * This is a server component -- no client JS required.
 */
export default function RangeBar({ typicalRange }: RangeBarProps) {
  const { earlyMonths, averageMonths, lateNormalMonths, concernThresholdMonths } =
    typicalRange;

  // Calculate total span for percentage widths
  const totalSpan = concernThresholdMonths - earlyMonths;

  // Avoid division by zero for milestones present from birth
  if (totalSpan <= 0) {
    return null;
  }

  // Widths as percentages of the total span
  const greenWidth =
    ((lateNormalMonths - earlyMonths) / totalSpan) * 100;
  const yellowWidth =
    ((concernThresholdMonths - lateNormalMonths) / totalSpan) * 100;

  // Position of the average marker as a percentage
  const averagePosition =
    ((averageMonths - earlyMonths) / totalSpan) * 100;

  function formatMonth(m: number): string {
    if (m < 1) return "birth";
    if (m === 1) return "1 mo";
    if (m < 24) return `${m} mo`;
    const years = Math.floor(m / 12);
    const remainder = m % 12;
    if (remainder === 0) return `${years} yr`;
    return `${years} yr ${remainder} mo`;
  }

  return (
    <div
      className="flex flex-col gap-1.5"
      role="figure"
      aria-label={`Typical range: ${formatMonth(earlyMonths)} to ${formatMonth(concernThresholdMonths)}. Average at ${formatMonth(averageMonths)}.`}
    >
      <p className="text-xs font-semibold uppercase tracking-wide text-muted">
        Typical range
      </p>

      {/* Bar container */}
      <div className="relative h-5 w-full overflow-hidden rounded-full bg-card-alt">
        {/* Green section: early -> late normal */}
        <div
          className="absolute left-0 top-0 h-full rounded-l-full bg-safe-border"
          style={{ width: `${greenWidth}%` }}
          aria-hidden="true"
        />

        {/* Yellow section: late normal -> concern threshold */}
        <div
          className="absolute top-0 h-full bg-monitor-border"
          style={{ left: `${greenWidth}%`, width: `${yellowWidth}%` }}
          aria-hidden="true"
        />

        {/* Red end marker */}
        <div
          className="absolute right-0 top-0 h-full w-1 rounded-r-full bg-concern"
          aria-hidden="true"
        />

        {/* Average marker */}
        {averagePosition > 0 && averagePosition < 100 && (
          <div
            className="absolute top-0 h-full w-0.5 bg-foreground/60"
            style={{ left: `${averagePosition}%` }}
            aria-hidden="true"
          />
        )}
      </div>

      {/* Labels */}
      <div className="flex items-center justify-between text-[0.6875rem] leading-tight text-muted">
        <span aria-label={`Early: ${formatMonth(earlyMonths)}`}>
          {formatMonth(earlyMonths)}
        </span>

        <span
          className="text-foreground font-medium"
          aria-label={`Average: ${formatMonth(averageMonths)}`}
        >
          avg {formatMonth(averageMonths)}
        </span>

        <span aria-label={`Late normal: ${formatMonth(lateNormalMonths)}`}>
          {formatMonth(lateNormalMonths)}
        </span>

        <span
          className="text-concern font-medium"
          aria-label={`Concern threshold: ${formatMonth(concernThresholdMonths)}`}
        >
          {formatMonth(concernThresholdMonths)}
        </span>
      </div>
    </div>
  );
}
