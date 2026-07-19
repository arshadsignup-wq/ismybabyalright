import type { TriageTree, TriageOutcome } from '@/data/triage/types';
import ComparisonTable from '@/components/shared/ComparisonTable';

interface TriageMatrixProps {
  tree: TriageTree;
}

export default function TriageMatrix({ tree }: TriageMatrixProps) {
  const outcomes = Object.values(tree.outcomes);

  // Sort: red first, then yellow, then green
  const levelOrder: Record<string, number> = { red: 0, yellow: 1, green: 2 };
  const sorted = [...outcomes].sort((a, b) => levelOrder[a.level] - levelOrder[b.level]);

  const levelLabels: Record<string, string> = {
    red: 'Emergency / ER',
    yellow: 'Call Doctor',
    green: 'Monitor at Home',
  };

  const rows = sorted.map((outcome) => [
    levelLabels[outcome.level],
    outcome.title,
    outcome.description,
    outcome.actions.join('; '),
  ]);

  return (
    <section aria-label="Decision guide" className="mt-8">
      <h2 className="text-lg font-bold text-foreground mb-4">
        {tree.title} — When to Seek Care Decision Guide
      </h2>
      <ComparisonTable
        caption={`${tree.title} - When to Seek Care Decision Guide`}
        headers={['Urgency', 'Scenario', 'What to Do', 'Key Actions']}
        rows={rows}
        sourceNote="Based on AAP and CDC symptom management guidelines. Always call 911 for life-threatening emergencies."
      />
    </section>
  );
}
