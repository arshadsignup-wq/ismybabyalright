import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import SourceBadge from "@/components/shared/SourceBadge";
import PrintButton from "@/components/shared/PrintButton";
import { allGuides, getGuideBySlug } from "@/data/guides";

interface GuidePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return allGuides.map((guide) => ({
    slug: guide.slug,
  }));
}

export async function generateMetadata({
  params,
}: GuidePageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);

  if (!guide) {
    return { title: "Guide Not Found" };
  }

  return {
    title: guide.title,
    description: guide.subtitle,
  };
}

export default async function GuideSlugPage({ params }: GuidePageProps) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);

  if (!guide) {
    notFound();
  }

  return (
    <div>
      <Breadcrumbs
        items={[
          { label: "Resources", href: "/resources/mental-health" },
          { label: "Guides", href: "/resources/guides" },
          { label: guide.title },
        ]}
      />

      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        <div className="flex items-start justify-between gap-4 mb-2">
          <h1>{guide.title}</h1>
          <PrintButton />
        </div>
        <p className="text-lg text-muted mb-8">{guide.subtitle}</p>

        {/* What Happened */}
        <section className="mb-8" aria-labelledby="what-happened-heading">
          <h2 id="what-happened-heading">What Happened</h2>
          <div className="card p-6">
            <p className="text-sm text-muted leading-relaxed">
              {guide.whatHappened}
            </p>
          </div>
        </section>

        {/* Key Facts */}
        <section className="mb-8" aria-labelledby="key-facts-heading">
          <h2 id="key-facts-heading">Key Facts</h2>
          <ul className="flex flex-col gap-3" role="list">
            {guide.keyFacts.map((fact, index) => (
              <li
                key={index}
                className="card-alt p-4 flex items-start gap-3"
              >
                <span
                  className="flex-shrink-0 mt-0.5 w-6 h-6 rounded-full bg-primary-light text-primary text-xs font-bold flex items-center justify-center"
                  aria-hidden="true"
                >
                  {index + 1}
                </span>
                <span className="text-sm text-foreground leading-relaxed">
                  {fact}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* What to Expect */}
        <section className="mb-8" aria-labelledby="what-to-expect-heading">
          <h2 id="what-to-expect-heading">What to Expect</h2>
          <div className="card p-6">
            <ul className="flex flex-col gap-3" role="list">
              {guide.whatToExpect.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2.5 text-sm leading-relaxed"
                >
                  <span
                    className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary"
                    aria-hidden="true"
                  />
                  <span className="text-muted">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* When to Worry */}
        <section className="mb-8" aria-labelledby="when-to-worry-heading">
          <h2 id="when-to-worry-heading" className="text-concern">
            When to Worry
          </h2>
          <div className="tier-concern p-6">
            <ul className="flex flex-col gap-3" role="list">
              {guide.whenToWorry.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2.5 text-sm leading-relaxed"
                >
                  <span
                    className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-concern"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Action Plan */}
        <section className="mb-8" aria-labelledby="action-plan-heading">
          <h2 id="action-plan-heading">Your Action Plan</h2>
          <ol className="flex flex-col gap-3" role="list">
            {guide.actionPlan.map((step, index) => (
              <li
                key={index}
                className="card p-4 flex items-start gap-3"
              >
                <span
                  className="flex-shrink-0 w-7 h-7 rounded-full bg-safe-light text-safe-foreground text-sm font-bold flex items-center justify-center border border-safe-border"
                  aria-hidden="true"
                >
                  {index + 1}
                </span>
                <span className="text-sm text-foreground leading-relaxed">
                  {step}
                </span>
              </li>
            ))}
          </ol>
        </section>

        {/* Sources */}
        {guide.sources.length > 0 && (
          <section className="mt-10" aria-labelledby="guide-sources-heading">
            <h3
              id="guide-sources-heading"
              className="text-sm font-semibold text-muted mb-3"
            >
              Sources
            </h3>
            <div className="flex flex-col gap-3">
              {guide.sources.map((source, index) => (
                <div key={index} className="flex items-start gap-3">
                  <SourceBadge org={source.org} url={source.url} />
                  <p className="text-xs text-muted leading-relaxed">
                    {source.citation}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
