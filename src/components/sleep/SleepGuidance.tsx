import type { SleepGuidanceEntry } from "@/data/sleep/types";

interface SleepGuidanceProps {
  guidance: SleepGuidanceEntry;
}

export default function SleepGuidance({ guidance }: SleepGuidanceProps) {
  return (
    <div className="card p-5">
      <h3 className="text-base font-bold text-foreground mb-3">
        {guidance.ageRange}
      </h3>

      <div className="grid grid-cols-3 gap-3 mb-4">
        <div className="text-center">
          <p className="text-lg font-bold text-primary">{guidance.totalSleepHours}</p>
          <p className="text-xs text-muted">Total sleep</p>
        </div>
        <div className="text-center">
          <p className="text-lg font-bold text-primary">{guidance.nightSleepHours}</p>
          <p className="text-xs text-muted">Night</p>
        </div>
        <div className="text-center">
          <p className="text-lg font-bold text-primary">{guidance.napInfo}</p>
          <p className="text-xs text-muted">Naps</p>
        </div>
      </div>

      <h4 className="text-xs font-semibold text-muted uppercase tracking-wide mb-2">
        Tips for this age
      </h4>
      <ul className="flex flex-col gap-1.5">
        {guidance.tips.map((tip, i) => (
          <li key={i} className="text-sm text-foreground flex items-start gap-2">
            <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
            {tip}
          </li>
        ))}
      </ul>
    </div>
  );
}
