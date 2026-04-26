import type { Metadata } from "next";
import Link from "next/link";
import { allConcerns } from "@/data/concerns";

export const metadata: Metadata = {
  title: "Sources & References - ismybabyalright",
  description:
    "All medical sources and references used across ismybabyalright, including CDC, WHO, AAP, and NIH guidelines.",
};

interface SourceEntry {
  org: string;
  citation: string;
  url: string;
}

function getGroupedSources() {
  const seen = new Set<string>();
  const grouped: Record<string, SourceEntry[]> = {};

  for (const concern of allConcerns) {
    for (const source of concern.sources) {
      const key = `${source.org}|${source.url}`;
      if (seen.has(key)) continue;
      seen.add(key);

      if (!grouped[source.org]) {
        grouped[source.org] = [];
      }
      grouped[source.org].push(source);
    }
  }

  // Sort each group alphabetically by citation
  for (const org of Object.keys(grouped)) {
    grouped[org].sort((a, b) => a.citation.localeCompare(b.citation));
  }

  // Sort orgs: AAP, CDC, WHO, NIH first, then alphabetical
  const priority = ["AAP", "CDC", "WHO", "NIH"];
  const sortedOrgs = Object.keys(grouped).sort((a, b) => {
    const ai = priority.indexOf(a);
    const bi = priority.indexOf(b);
    if (ai !== -1 && bi !== -1) return ai - bi;
    if (ai !== -1) return -1;
    if (bi !== -1) return 1;
    return a.localeCompare(b);
  });

  return { grouped, sortedOrgs };
}

const orgDescriptions: Record<string, string> = {
  AAP: "American Academy of Pediatrics - The leading authority on children's health in the United States.",
  CDC: "Centers for Disease Control and Prevention - Federal agency protecting public health.",
  WHO: "World Health Organization - International public health authority.",
  NIH: "National Institutes of Health - The nation's medical research agency.",
};

export default function SourcesPage() {
  const { grouped, sortedOrgs } = getGroupedSources();
  const totalSources = Object.values(grouped).reduce(
    (sum, arr) => sum + arr.length,
    0
  );

  return (
    <main className="max-w-3xl mx-auto px-5 py-10">
      <h1 className="text-2xl font-bold text-foreground mb-2">
        Sources & References
      </h1>
      <p className="text-sm text-muted leading-relaxed mb-2">
        Every piece of guidance on ismybabyalright is backed by evidence-based
        sources from trusted medical organizations. Below are all{" "}
        {totalSources} unique references used across our {allConcerns.length}{" "}
        concern pages.
      </p>
      <p className="text-xs text-muted-light mb-8">
        This site provides general information only and is not a substitute for
        professional medical advice. Always consult your pediatrician.
      </p>

      {sortedOrgs.map((org) => (
        <section key={org} className="mb-8">
          <h2 className="text-lg font-bold text-foreground mb-1">{org}</h2>
          {orgDescriptions[org] && (
            <p className="text-xs text-muted mb-3">{orgDescriptions[org]}</p>
          )}
          <ul className="space-y-2">
            {grouped[org].map((source, i) => (
              <li
                key={i}
                className="rounded-lg border border-[#E8E2D9] bg-white p-3"
              >
                <p className="text-sm text-foreground leading-relaxed">
                  {source.citation}
                </p>
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-primary hover:underline break-all"
                >
                  {source.url}
                </a>
              </li>
            ))}
          </ul>
        </section>
      ))}

      <div className="mt-10 pt-6 border-t border-border">
        <Link
          href="/"
          className="text-sm text-primary font-semibold hover:underline"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
