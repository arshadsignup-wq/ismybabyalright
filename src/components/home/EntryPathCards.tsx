import Link from "next/link";

const paths = [
  {
    title: "Check Milestones",
    description: "See what to expect at each age, from 1 month to 3 years.",
    href: "/milestones",
    bg: "#38BDF8",
    bgHover: "#0EA5E9",
    shadow: "rgba(56,189,248,0.35)",
    icon: (
      <svg width="40" height="40" viewBox="0 0 48 48" fill="none">
        <path d="M24 4l5.5 11.2 12.3 1.8-8.9 8.7 2.1 12.3L24 31.7 12.9 38l2.1-12.3-8.9-8.7 12.3-1.8z" fill="white" />
      </svg>
    ),
  },
  {
    title: "I Have a Concern",
    description: "Search for something specific  -  not crawling, feeding issues, rash.",
    href: "/concerns",
    bg: "#F07167",
    bgHover: "#E85D52",
    shadow: "rgba(240,113,103,0.35)",
    icon: (
      <svg width="40" height="40" viewBox="0 0 48 48" fill="none">
        <circle cx="20" cy="20" r="14" stroke="white" strokeWidth="3" fill="none" />
        <line x1="30" y1="30" x2="42" y2="42" stroke="white" strokeWidth="3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Track Daily",
    description: "Log feeds, sleep, diapers  -  see patterns and share with your doctor.",
    href: "/tracker",
    bg: "#34D399",
    bgHover: "#22C55E",
    shadow: "rgba(52,211,153,0.35)",
    icon: (
      <svg width="40" height="40" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="18" stroke="white" strokeWidth="3" fill="none" />
        <line x1="24" y1="14" x2="24" y2="24" stroke="white" strokeWidth="3" strokeLinecap="round" />
        <line x1="24" y1="24" x2="33" y2="28" stroke="white" strokeWidth="3" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function EntryPathCards() {
  return (
    <section aria-labelledby="entry-paths-heading">
      <h2
        id="entry-paths-heading"
        className="mb-2 text-center text-2xl font-extrabold tracking-tight sm:text-3xl"
      >
        How can we help?
      </h2>
      <p className="mx-auto mb-8 max-w-md text-center text-muted">
        Pick a starting point  -  you can always explore more later.
      </p>

      <div className="grid gap-4 sm:grid-cols-3 sm:gap-5">
        {paths.map((path) => (
          <Link
            key={path.href}
            href={path.href}
            className="group relative flex flex-col items-center gap-4 rounded-[1.5rem] p-7 text-center no-underline transition-all duration-300 hover:-translate-y-2 sm:p-8"
            style={{
              backgroundColor: path.bg,
              boxShadow: `0 8px 24px ${path.shadow}`,
            }}
          >
            {/* Icon */}
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 transition-transform duration-300 group-hover:scale-110">
              {path.icon}
            </div>

            <h3 className="text-xl font-extrabold text-white">
              {path.title}
            </h3>

            <p className="text-sm leading-relaxed text-white/85">
              {path.description}
            </p>

            {/* Arrow */}
            <span className="mt-auto inline-flex items-center gap-1.5 rounded-full bg-white/20 px-4 py-2 text-sm font-bold text-white opacity-70 transition-all duration-300 group-hover:opacity-100">
              Get started
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
              </svg>
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
