import type { HandoffSnapshot } from "@/data/sharing/types";
import CaregiverCardDisplay from "./CaregiverCardDisplay";

interface HandoffViewProps {
  snapshot: HandoffSnapshot;
}

export default function HandoffView({ snapshot }: HandoffViewProps) {
  const generatedDate = new Date(snapshot.generatedAt);
  const timeAgo = Math.round(
    (Date.now() - generatedDate.getTime()) / 60000
  );
  const timeAgoLabel =
    timeAgo < 1
      ? "just now"
      : timeAgo < 60
        ? `${timeAgo}m ago`
        : `${Math.floor(timeAgo / 60)}h ago`;

  return (
    <div className="flex flex-col gap-5">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-xl font-bold text-foreground">
          {snapshot.babyName}  -  Handoff
        </h1>
        <p className="text-sm text-muted mt-1">
          Generated {timeAgoLabel} ({generatedDate.toLocaleString()})
        </p>
      </div>

      {/* Caregiver card */}
      {snapshot.caregiverCard && (
        <CaregiverCardDisplay card={snapshot.caregiverCard} />
      )}

      {/* Recent events */}
      <div className="card p-5">
        <h2 className="text-base font-bold text-foreground mb-3">
          What happened
        </h2>
        {snapshot.events.length > 0 ? (
          <ul className="flex flex-col gap-2">
            {snapshot.events.map((event, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-sm text-foreground py-1.5 border-b border-card-border last:border-0"
              >
                <span className="flex-shrink-0 mt-0.5 w-2 h-2 rounded-full bg-primary" aria-hidden="true" />
                <span>{event.summary}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-muted">No recent events to show.</p>
        )}
      </div>

      {/* Print button */}
      <button
        onClick={() => window.print()}
        className="w-full px-4 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary-hover transition-colors cursor-pointer no-print"
      >
        Print This Page
      </button>

      {/* Privacy notice */}
      <p className="text-xs text-muted text-center leading-relaxed">
        This data was shared via a link. No accounts, no server storage.
        Everything stays between you and the person who shared it.
      </p>
    </div>
  );
}
