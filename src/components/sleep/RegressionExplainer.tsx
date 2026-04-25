import type { RegressionInfo } from "@/data/sleep/types";

interface RegressionExplainerProps {
  regression: RegressionInfo;
  isRelevant?: boolean;
}

export default function RegressionExplainer({
  regression,
  isRelevant,
}: RegressionExplainerProps) {
  return (
    <details
      className={`card p-0 overflow-hidden ${isRelevant ? "border-monitor-border" : ""}`}
      open={isRelevant}
    >
      <summary className="flex items-center justify-between px-5 py-4 cursor-pointer min-h-[44px]">
        <div>
          <span className="text-sm font-bold text-foreground">{regression.title}</span>
          {isRelevant && (
            <span className="ml-2 text-xs font-semibold text-monitor px-2 py-0.5 rounded-full bg-monitor-light border border-monitor-border">
              Around now
            </span>
          )}
        </div>
        <span className="text-xs text-muted">{regression.duration}</span>
      </summary>

      <div className="px-5 pb-5 border-t border-card-border pt-4">
        <p className="text-sm text-foreground leading-relaxed mb-3">
          {regression.whyItHappens}
        </p>

        <h4 className="text-xs font-semibold text-muted uppercase tracking-wide mb-2">
          What to expect
        </h4>
        <ul className="flex flex-col gap-1.5 mb-3">
          {regression.whatToExpect.map((item, i) => (
            <li key={i} className="text-sm text-foreground flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-monitor" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>

        <h4 className="text-xs font-semibold text-muted uppercase tracking-wide mb-2">
          What to do
        </h4>
        <ul className="flex flex-col gap-1.5">
          {regression.whatToDo.map((item, i) => (
            <li key={i} className="text-sm text-foreground flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-safe" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </details>
  );
}
