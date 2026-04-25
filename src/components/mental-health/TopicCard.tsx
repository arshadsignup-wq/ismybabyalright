import type { MentalHealthTopic } from "@/data/mental-health/types";

interface TopicCardProps {
  topic: MentalHealthTopic;
}

export default function TopicCard({ topic }: TopicCardProps) {
  return (
    <details className="card p-0 overflow-hidden">
      <summary className="flex items-center gap-3 px-5 py-4 cursor-pointer min-h-[44px]">
        <span className="text-2xl" aria-hidden="true">{topic.emoji}</span>
        <div className="flex-1">
          <span className="text-sm font-bold text-foreground">{topic.title}</span>
          <p className="text-xs text-muted mt-0.5">{topic.summary}</p>
        </div>
      </summary>

      <div className="px-5 pb-5 border-t border-card-border pt-4">
        {topic.content.map((paragraph, i) => (
          <p key={i} className="text-sm text-foreground leading-relaxed mb-3">
            {paragraph}
          </p>
        ))}

        {/* Normalize message */}
        <div className="tier-safe p-3 mb-4 text-sm">
          {topic.normalizeMessage}
        </div>

        {/* When to seek help */}
        <h4 className="text-xs font-semibold text-concern uppercase tracking-wide mb-2">
          Seek help if:
        </h4>
        <ul className="flex flex-col gap-1.5 mb-4">
          {topic.whenToSeekHelp.map((item, i) => (
            <li key={i} className="text-sm text-foreground flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-concern" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>

        {/* Resources */}
        <h4 className="text-xs font-semibold text-muted uppercase tracking-wide mb-2">
          Resources
        </h4>
        <ul className="flex flex-col gap-1.5">
          {topic.resources.map((resource, i) => (
            <li key={i} className="text-sm text-foreground flex items-start gap-2">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              {resource}
            </li>
          ))}
        </ul>
      </div>
    </details>
  );
}
