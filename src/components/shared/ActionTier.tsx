interface ActionTierProps {
  tier: "green" | "yellow" | "red";
  title: string;
  items: string[];
}

const tierConfig = {
  green: {
    containerClass: "tier-safe",
    badgeClass: "tier-safe-badge",
    defaultTitle: "On Track",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <polyline points="20 6 9 17 4 12" />
      </svg>
    ),
    bulletColor: "text-safe",
  },
  yellow: {
    containerClass: "tier-monitor",
    badgeClass: "tier-monitor-badge",
    defaultTitle: "Worth Monitoring",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="16" x2="12.01" y2="16" />
      </svg>
    ),
    bulletColor: "text-monitor",
  },
  red: {
    containerClass: "tier-concern",
    badgeClass: "tier-concern-badge",
    defaultTitle: "Talk to Your Doctor",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
        <line x1="12" y1="9" x2="12" y2="13" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
    bulletColor: "text-concern",
  },
} as const;

export default function ActionTier({ tier, title, items }: ActionTierProps) {
  const config = tierConfig[tier];

  return (
    <div className={`${config.containerClass} p-5`} role="region" aria-label={title}>
      {/* Header with badge */}
      <div className="flex items-center gap-2.5 mb-3">
        <span className={config.badgeClass}>
          {config.icon}
          {title}
        </span>
      </div>

      {/* Items list */}
      {items.length > 0 && (
        <ul className="flex flex-col gap-2" role="list">
          {items.map((item, index) => (
            <li key={index} className="flex items-start gap-2.5 text-sm leading-relaxed">
              <span
                className={`flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full ${
                  tier === "green"
                    ? "bg-safe"
                    : tier === "yellow"
                      ? "bg-monitor"
                      : "bg-concern"
                }`}
                aria-hidden="true"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
