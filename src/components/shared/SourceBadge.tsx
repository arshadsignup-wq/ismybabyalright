interface SourceBadgeProps {
  org: string;
  url?: string;
}

function getBadgeClass(org: string): string {
  switch (org.toUpperCase()) {
    case "CDC":
      return "source-badge source-badge-cdc";
    case "WHO":
      return "source-badge source-badge-who";
    case "AAP":
      return "source-badge source-badge-aap";
    default:
      return "source-badge";
  }
}

export default function SourceBadge({ org, url }: SourceBadgeProps) {
  const className = getBadgeClass(org);
  const label = org.toUpperCase();

  if (url) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={`${className} no-underline hover:opacity-80 transition-opacity`}
        aria-label={`Source: ${label} (opens in new tab)`}
      >
        {label}
      </a>
    );
  }

  return (
    <span className={className} aria-label={`Source: ${label}`}>
      {label}
    </span>
  );
}
