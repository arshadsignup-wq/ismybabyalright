import type { TriageTree, TriageOutcome } from '@/data/triage/types';

interface StaticTriageSummaryProps {
  tree: TriageTree;
}

export default function StaticTriageSummary({ tree }: StaticTriageSummaryProps) {
  const outcomes = Object.values(tree.outcomes);

  const red = outcomes.filter((o) => o.level === 'red');
  const yellow = outcomes.filter((o) => o.level === 'yellow');
  const green = outcomes.filter((o) => o.level === 'green');

  return (
    <section aria-label="Quick reference guide" className="mt-8">
      <h2 className="text-lg font-bold text-foreground mb-4">Quick Reference Guide</h2>

      {red.length > 0 && (
        <OutcomeGroup
          title="Call 911 / Go to ER"
          outcomes={red}
          className="tier-concern p-5 mb-4"
        />
      )}

      {yellow.length > 0 && (
        <OutcomeGroup
          title="Call Your Pediatrician"
          outcomes={yellow}
          className="tier-caution p-5 mb-4"
        />
      )}

      {green.length > 0 && (
        <OutcomeGroup
          title="Monitor at Home"
          outcomes={green}
          className="tier-safe p-5 mb-4"
        />
      )}
    </section>
  );
}

function OutcomeGroup({
  title,
  outcomes,
  className,
}: {
  title: string;
  outcomes: TriageOutcome[];
  className: string;
}) {
  return (
    <div className={className}>
      <h3 className="text-sm font-bold text-foreground mb-3">{title}</h3>
      <ul className="space-y-3">
        {outcomes.map((outcome) => (
          <li key={outcome.id}>
            <p className="text-sm font-semibold text-foreground">
              {outcome.title}
            </p>
            <p className="text-sm text-muted leading-relaxed mt-0.5">
              {outcome.description}
            </p>
            {outcome.actions.length > 0 && (
              <ul className="mt-1 space-y-0.5">
                {outcome.actions.map((action, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-xs text-muted leading-relaxed"
                  >
                    <span
                      className="flex-shrink-0 mt-1.5 w-1 h-1 rounded-full bg-current"
                      aria-hidden="true"
                    />
                    <span>{action}</span>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
