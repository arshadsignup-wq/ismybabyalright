import Link from "next/link";

interface EntryPath {
  title: string;
  emoji: string;
  description: string;
  href: string;
  accentColor: string;
  accentBg: string;
  accentBorder: string;
  icon: React.ReactNode;
}

const paths: EntryPath[] = [
  {
    title: "Check by Age",
    emoji: "\ud83d\udcc5",
    description:
      "See what milestones to expect at each age, from 1 month to 3 years.",
    href: "/milestones",
    accentColor: "text-primary",
    accentBg: "bg-primary-light",
    accentBorder: "border-l-primary",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
        <circle cx="12" cy="15" r="2" />
      </svg>
    ),
  },
  {
    title: "I Noticed Something",
    emoji: "\ud83d\udd0d",
    description:
      "Search for a specific concern \u2014 like not crawling, not talking, or not making eye contact.",
    href: "/concerns",
    accentColor: "text-monitor-foreground",
    accentBg: "bg-monitor-light",
    accentBorder: "border-l-monitor",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
        <circle cx="11" cy="11" r="3" />
      </svg>
    ),
  },
  {
    title: "I Need Help",
    emoji: "\u2764\ufe0f",
    description:
      "Find early intervention services, therapists, and support in your area.",
    href: "/resources/early-intervention",
    accentColor: "text-concern-foreground",
    accentBg: "bg-concern-light",
    accentBorder: "border-l-concern",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
  {
    title: "Track Daily",
    emoji: "\u2705",
    description:
      "Log feeds, sleep, diapers, and more \u2014 see patterns and share with your pediatrician.",
    href: "/tracker",
    accentColor: "text-safe-foreground",
    accentBg: "bg-safe-light",
    accentBorder: "border-l-safe",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="8" x2="12" y2="12" />
        <line x1="12" y1="12" x2="16" y2="14" />
      </svg>
    ),
  },
];

export default function EntryPathCards() {
  return (
    <section
      className="px-5 py-10 sm:px-8"
      aria-labelledby="entry-paths-heading"
    >
      <div className="mx-auto max-w-3xl">
        <h2
          id="entry-paths-heading"
          className="mb-6 text-center text-foreground"
        >
          How can we help?
        </h2>

        <div className="grid gap-4 sm:grid-cols-2">
          {paths.map((path) => (
            <Link
              key={path.href}
              href={path.href}
              className={`card group flex items-start gap-4 border-l-4 ${path.accentBorder} no-underline transition-all hover:shadow-md hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-primary`}
            >
              {/* Icon with colored background */}
              <div
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${path.accentBg} ${path.accentColor} transition-colors`}
              >
                {path.icon}
              </div>

              <div className="flex flex-col gap-1">
                <h3 className="text-foreground group-hover:text-primary transition-colors text-base">
                  <span aria-hidden="true">{path.emoji} </span>
                  {path.title}
                </h3>

                <p className="text-sm leading-relaxed text-muted">
                  {path.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
