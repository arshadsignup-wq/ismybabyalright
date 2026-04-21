import Link from "next/link";

interface EntryPath {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
}

const paths: EntryPath[] = [
  {
    title: "Check by Age",
    description:
      "See what milestones to expect at each age, from 1 month to 3 years.",
    href: "/milestones",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
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
    description:
      "Search for a specific concern — like not crawling, not talking, or not making eye contact.",
    href: "/concerns",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
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
    description:
      "Find early intervention services, therapists, and support in your area.",
    href: "/resources/early-intervention",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
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

        <div className="grid gap-4 sm:grid-cols-3">
          {paths.map((path) => (
            <Link
              key={path.href}
              href={path.href}
              className="card group flex flex-col items-start gap-3 no-underline transition-shadow hover:shadow-md focus-visible:ring-2 focus-visible:ring-primary"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-light text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                {path.icon}
              </div>

              <h3 className="text-foreground group-hover:text-primary transition-colors">
                {path.title}
              </h3>

              <p className="text-sm leading-relaxed text-muted">
                {path.description}
              </p>

              <span
                className="mt-auto inline-flex items-center gap-1 text-sm font-medium text-primary"
                aria-hidden="true"
              >
                Learn more
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
