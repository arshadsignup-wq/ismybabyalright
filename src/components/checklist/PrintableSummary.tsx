import type { Milestone, MilestoneCategory } from "@/data/milestones";

interface PrintableSummaryProps {
  milestones: Milestone[];
  responses: Record<string, string>;
  ageLabel: string;
  adjustedAge?: string;
}

const categoryLabels: Record<MilestoneCategory, string> = {
  grossMotor: "Gross Motor",
  fineMotor: "Fine Motor",
  language: "Language",
  socialEmotional: "Social & Emotional",
  cognitive: "Cognitive",
};

const responseLabels: Record<string, string> = {
  yes: "Yes",
  sometimes: "Sometimes",
  "not-yet": "Not Yet",
  "not-sure": "Not Sure",
};

/**
 * Group milestones by their category for organized print output.
 * Since Milestone does not carry its own category, we accept the flat list
 * and group by response type instead — which is more useful on paper.
 */
function groupByResponse(
  milestones: Milestone[],
  responses: Record<string, string>,
): { label: string; items: { milestone: Milestone; response: string }[] }[] {
  const groups: Record<string, { milestone: Milestone; response: string }[]> = {
    yes: [],
    sometimes: [],
    "not-sure": [],
    "not-yet": [],
  };

  for (const milestone of milestones) {
    const response = responses[milestone.id];
    if (response && groups[response]) {
      groups[response].push({ milestone, response });
    }
  }

  return [
    { label: "On Track (Yes)", items: groups["yes"] },
    { label: "Developing (Sometimes)", items: groups["sometimes"] },
    { label: "Not Sure", items: groups["not-sure"] },
    { label: "May Need Discussion (Not Yet)", items: groups["not-yet"] },
  ].filter((g) => g.items.length > 0);
}

export default function PrintableSummary({
  milestones,
  responses,
  ageLabel,
  adjustedAge,
}: PrintableSummaryProps) {
  const today = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const grouped = groupByResponse(milestones, responses);

  const totalAnswered = milestones.filter((m) => responses[m.id]).length;
  const yesCount = milestones.filter((m) => responses[m.id] === "yes").length;
  const notYetCount = milestones.filter(
    (m) => responses[m.id] === "not-yet",
  ).length;

  return (
    <div className="hidden print:block" aria-label="Printable checklist summary">
      {/* Print header */}
      <div className="mb-6 pb-4 border-b-2 border-foreground">
        <h1 className="text-2xl font-bold mb-1">
          Developmental Milestone Checklist
        </h1>
        <p className="text-sm text-muted">ismybabyalright.com</p>
      </div>

      {/* Summary info */}
      <div className="mb-6 grid grid-cols-2 gap-x-8 gap-y-1 text-sm">
        <p>
          <strong>Date:</strong> {today}
        </p>
        <p>
          <strong>Age:</strong> {ageLabel}
        </p>
        {adjustedAge && (
          <p>
            <strong>Adjusted Age:</strong> {adjustedAge}
          </p>
        )}
        <p>
          <strong>Milestones Checked:</strong> {totalAnswered}
        </p>
        <p>
          <strong>On Track:</strong> {yesCount} of {totalAnswered}
        </p>
        {notYetCount > 0 && (
          <p>
            <strong>May Need Discussion:</strong> {notYetCount} of{" "}
            {totalAnswered}
          </p>
        )}
      </div>

      {/* Results by response group */}
      <div className="space-y-5">
        {grouped.map((group) => (
          <div key={group.label}>
            <h2 className="text-base font-bold mb-2 pb-1 border-b border-border">
              {group.label} ({group.items.length})
            </h2>
            <ul className="space-y-1.5">
              {group.items.map(({ milestone }) => (
                <li key={milestone.id} className="text-sm leading-relaxed">
                  <span className="font-medium">{milestone.name}</span>
                  <span className="text-muted">
                    {" "}
                    &mdash; {milestone.plainDescription}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Sources */}
      <div className="mt-8 pt-4 border-t border-border">
        <h2 className="text-sm font-bold mb-2">Sources</h2>
        <ul className="text-xs text-muted space-y-0.5">
          <li>
            CDC &mdash; &ldquo;Learn the Signs. Act Early.&rdquo; Milestone
            Checklists (cdc.gov/ncbddd/actearly)
          </li>
          <li>
            WHO &mdash; Motor Development Study: Windows of Achievement for
            Gross Motor Milestones
          </li>
          <li>
            AAP &mdash; American Academy of Pediatrics Developmental
            Surveillance Guidelines
          </li>
        </ul>
      </div>

      {/* Disclaimer */}
      <div className="mt-6 pt-4 border-t-2 border-foreground">
        <p className="text-xs leading-relaxed">
          <strong>Disclaimer:</strong> This is a developmental screening tool,
          not a diagnosis. It is based on published guidelines from the CDC, WHO,
          and AAP. This checklist does not replace professional medical advice.
          Always consult your pediatrician or healthcare provider if you have
          concerns about your child&apos;s development. No data from this
          checklist is stored or transmitted.
        </p>
      </div>
    </div>
  );
}
