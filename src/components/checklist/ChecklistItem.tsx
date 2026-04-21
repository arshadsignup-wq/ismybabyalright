"use client";

import type { Milestone } from "@/data/milestones";

interface ChecklistItemProps {
  milestone: Milestone;
  value: string | null;
  onChange: (value: string) => void;
}

const options = [
  {
    label: "Yes",
    value: "yes",
    selectedBg: "bg-safe-light",
    selectedBorder: "border-safe-border",
    selectedText: "text-safe-foreground",
    ringColor: "peer-focus-visible:ring-safe",
    dotColor: "bg-safe",
  },
  {
    label: "Sometimes",
    value: "sometimes",
    selectedBg: "bg-monitor-light",
    selectedBorder: "border-monitor-border",
    selectedText: "text-monitor-foreground",
    ringColor: "peer-focus-visible:ring-monitor",
    dotColor: "bg-monitor",
  },
  {
    label: "Not Yet",
    value: "not-yet",
    selectedBg: "bg-concern-light",
    selectedBorder: "border-concern-border",
    selectedText: "text-concern-foreground",
    ringColor: "peer-focus-visible:ring-concern",
    dotColor: "bg-concern",
  },
  {
    label: "Not Sure",
    value: "not-sure",
    selectedBg: "bg-background-alt",
    selectedBorder: "border-border",
    selectedText: "text-muted",
    ringColor: "peer-focus-visible:ring-primary",
    dotColor: "bg-muted",
  },
] as const;

export default function ChecklistItem({
  milestone,
  value,
  onChange,
}: ChecklistItemProps) {
  const groupName = `milestone-${milestone.id}`;

  return (
    <fieldset
      className="card p-5 sm:p-6"
      role="group"
      aria-labelledby={`label-${milestone.id}`}
    >
      <legend className="sr-only">{milestone.name}</legend>

      {/* Milestone info */}
      <div className="mb-4">
        <p
          id={`label-${milestone.id}`}
          className="text-base font-semibold text-foreground leading-snug"
        >
          {milestone.name}
        </p>
        <p className="mt-1.5 text-sm text-muted leading-relaxed">
          {milestone.plainDescription}
        </p>
      </div>

      {/* Response options */}
      <div
        className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3"
        role="radiogroup"
        aria-labelledby={`label-${milestone.id}`}
      >
        {options.map((option) => {
          const isSelected = value === option.value;

          return (
            <label
              key={option.value}
              className={`
                relative flex items-center justify-center gap-2
                min-h-[44px] px-3 py-2.5
                rounded-lg border-2 cursor-pointer
                text-sm font-medium text-center
                transition-all duration-150 select-none
                ${
                  isSelected
                    ? `${option.selectedBg} ${option.selectedBorder} ${option.selectedText}`
                    : "bg-card border-card-border text-muted hover:border-border hover:bg-card-alt"
                }
              `}
            >
              <input
                type="radio"
                name={groupName}
                value={option.value}
                checked={isSelected}
                onChange={() => onChange(option.value)}
                className="peer sr-only"
                aria-label={`${option.label} for ${milestone.name}`}
              />

              {/* Focus ring */}
              <span
                className={`
                  pointer-events-none absolute inset-0 rounded-lg
                  peer-focus-visible:ring-2 peer-focus-visible:ring-offset-2
                  ${option.ringColor}
                `}
                aria-hidden="true"
              />

              {/* Selection indicator dot */}
              <span
                className={`
                  flex-shrink-0 w-2 h-2 rounded-full transition-colors
                  ${isSelected ? option.dotColor : "bg-transparent"}
                `}
                aria-hidden="true"
              />

              {option.label}
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}
