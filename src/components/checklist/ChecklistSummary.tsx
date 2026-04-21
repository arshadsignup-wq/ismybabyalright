"use client";

import type { Milestone } from "@/data/milestones";
import SelfReferralBox from "@/components/shared/SelfReferralBox";
import PrintButton from "@/components/shared/PrintButton";

interface ChecklistSummaryProps {
  milestones: Milestone[];
  responses: Record<string, string>;
  ageLabel: string;
  adjustedAge?: string;
}

interface GroupedResult {
  label: string;
  description: string;
  milestones: Milestone[];
  tierClass: string;
  badgeClass: string;
  dotClass: string;
}

function groupByResponse(
  milestones: Milestone[],
  responses: Record<string, string>,
): { onTrack: Milestone[]; developing: Milestone[]; mayNeedDiscussion: Milestone[] } {
  const onTrack: Milestone[] = [];
  const developing: Milestone[] = [];
  const mayNeedDiscussion: Milestone[] = [];

  for (const milestone of milestones) {
    const response = responses[milestone.id];
    if (response === "yes") {
      onTrack.push(milestone);
    } else if (response === "sometimes" || response === "not-sure") {
      developing.push(milestone);
    } else if (response === "not-yet") {
      mayNeedDiscussion.push(milestone);
    }
  }

  return { onTrack, developing, mayNeedDiscussion };
}

export default function ChecklistSummary({
  milestones,
  responses,
  ageLabel,
  adjustedAge,
}: ChecklistSummaryProps) {
  const { onTrack, developing, mayNeedDiscussion } = groupByResponse(
    milestones,
    responses,
  );

  const totalAnswered = onTrack.length + developing.length + mayNeedDiscussion.length;
  const hasNotYetItems = mayNeedDiscussion.length > 0;

  const groups: GroupedResult[] = [
    {
      label: "On Track",
      description: `${onTrack.length} of ${totalAnswered} milestones`,
      milestones: onTrack,
      tierClass: "tier-safe",
      badgeClass: "tier-safe-badge",
      dotClass: "bg-safe",
    },
    {
      label: "Developing",
      description: `${developing.length} of ${totalAnswered} milestones`,
      milestones: developing,
      tierClass: "tier-monitor",
      badgeClass: "tier-monitor-badge",
      dotClass: "bg-monitor",
    },
    {
      label: "May Need Discussion",
      description: `${mayNeedDiscussion.length} of ${totalAnswered} milestones`,
      milestones: mayNeedDiscussion,
      tierClass: "tier-concern",
      badgeClass: "tier-concern-badge",
      dotClass: "bg-concern",
    },
  ];

  return (
    <section aria-label="Checklist summary" className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-bold text-foreground sm:text-2xl">
            Your Summary
          </h2>
          <p className="text-sm text-muted mt-1">
            {ageLabel} checklist
            {adjustedAge && (
              <span className="ml-1">
                (adjusted age: {adjustedAge})
              </span>
            )}
          </p>
        </div>
        <PrintButton />
      </div>

      {/* Reassuring note */}
      <div className="card bg-primary-light border-l-4 border-l-primary p-4 sm:p-5">
        <p className="text-sm leading-relaxed text-foreground">
          <strong>Remember:</strong> This checklist is a screening tool, not a
          diagnosis. Every baby develops at their own pace, and there is a wide
          range of what is considered normal. &ldquo;Not Yet&rdquo; does not mean
          something is wrong &mdash; it simply means this could be worth
          discussing with your pediatrician at your next visit.
        </p>
      </div>

      {/* Grouped results */}
      <div className="space-y-4">
        {groups.map((group) => (
          <div
            key={group.label}
            className={`${group.tierClass} p-5`}
            role="region"
            aria-label={`${group.label}: ${group.description}`}
          >
            <div className="flex items-center justify-between mb-3">
              <span className={group.badgeClass}>{group.label}</span>
              <span className="text-sm font-medium">
                {group.milestones.length}
              </span>
            </div>

            {group.milestones.length > 0 ? (
              <ul className="flex flex-col gap-2" role="list">
                {group.milestones.map((milestone) => (
                  <li
                    key={milestone.id}
                    className="flex items-start gap-2.5 text-sm leading-relaxed"
                  >
                    <span
                      className={`flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full ${group.dotClass}`}
                      aria-hidden="true"
                    />
                    <span>{milestone.name}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm italic opacity-70">
                No milestones in this category.
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Not-Yet warm messaging */}
      {hasNotYetItems && (
        <div className="space-y-4">
          <div className="card p-5">
            <h3 className="text-base font-semibold text-foreground mb-2">
              What &ldquo;Not Yet&rdquo; means
            </h3>
            <p className="text-sm text-muted leading-relaxed mb-3">
              Answering &ldquo;Not Yet&rdquo; for a milestone does not
              necessarily indicate a problem. Babies develop on their own unique
              timeline, and many children who are &ldquo;late&rdquo; in one area
              catch up on their own. However, it can be helpful to mention these
              items to your pediatrician so they can track your baby&apos;s
              progress over time.
            </p>
            <p className="text-sm text-muted leading-relaxed">
              If you feel concerned, trust your instincts. No question is too
              small to bring up with your doctor. You know your baby best.
            </p>
          </div>

          <SelfReferralBox showPhone />
        </div>
      )}

      {/* Disclaimer */}
      <p className="text-xs text-muted-light leading-relaxed text-center px-4">
        This is a developmental screening tool, not a medical diagnosis.
        Information is based on CDC, WHO, and AAP guidelines. Always consult
        your pediatrician with concerns about your child&apos;s development.
      </p>
    </section>
  );
}
