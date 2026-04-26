import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import FavoriteButton from "@/components/baby-names/FavoriteButton";
import { allNames, getNameBySlug } from "@/data/baby-names/names";

interface NamePageProps {
  params: Promise<{ slug: string }>;
}

const genderColors: Record<string, { bg: string; text: string; border: string }> = {
  boy: { bg: "#EFF6FF", text: "#38BDF8", border: "#BFDBFE" },
  girl: { bg: "#FDF2F8", text: "#F472B6", border: "#FBCFE8" },
  unisex: { bg: "#F5F3FF", text: "#A78BFA", border: "#DDD6FE" },
};

const genderLabels: Record<string, string> = {
  boy: "Boy",
  girl: "Girl",
  unisex: "Unisex",
};

const popularityColors: Record<string, { bg: string; text: string }> = {
  trending: { bg: "#FEF0EE", text: "#F07167" },
  classic: { bg: "#E0F5F2", text: "#0D9488" },
  unique: { bg: "#F5F3FF", text: "#7C3AED" },
  rising: { bg: "#FEF6EC", text: "#D97706" },
};

const popularityDescriptions: Record<string, string> = {
  trending: "Currently one of the most popular choices for new babies",
  classic: "A timeless name that has been beloved across generations",
  unique: "A distinctive choice that stands out from the crowd",
  rising: "Growing in popularity and increasingly chosen by parents",
};

export async function generateStaticParams() {
  return allNames.map((name) => ({
    slug: name.slug,
  }));
}

export async function generateMetadata({
  params,
}: NamePageProps): Promise<Metadata> {
  const { slug } = await params;
  const name = getNameBySlug(slug);

  if (!name) {
    return { title: "Name Not Found" };
  }

  return {
    title: `${name.name} - Baby Name Meaning, Origin & Popularity`,
    description: `${name.name} is a ${name.gender === "unisex" ? "unisex" : name.gender === "boy" ? "boy's" : "girl's"} name of ${name.origin} origin meaning "${name.meaning}". Learn more about this ${name.popularity} baby name.`,
    alternates: {
      canonical: `/baby-names/${slug}`,
    },
    openGraph: {
      title: `${name.name} - Baby Name Meaning & Origin | Is My Baby Alright?`,
      description: `${name.name} is a ${name.gender === "unisex" ? "unisex" : name.gender === "boy" ? "boy's" : "girl's"} name of ${name.origin} origin meaning "${name.meaning}".`,
    },
  };
}

function getSimilarNames(
  currentSlug: string,
  gender: string,
  tags: string[],
  origin: string,
  limit: number = 6
) {
  const tagSet = new Set(tags);

  const scored = allNames
    .filter((n) => n.slug !== currentSlug)
    .map((n) => {
      let score = 0;
      // Same gender gets a strong boost
      if (n.gender === gender) score += 3;
      // Overlapping tags
      n.tags.forEach((t) => {
        if (tagSet.has(t)) score += 2;
      });
      // Same origin
      if (n.origin === origin) score += 1;
      return { name: n, score };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((item) => item.name);

  return scored;
}

export default async function BabyNameSlugPage({ params }: NamePageProps) {
  const { slug } = await params;
  const name = getNameBySlug(slug);

  if (!name) {
    notFound();
  }

  const gc = genderColors[name.gender];
  const pc = popularityColors[name.popularity];
  const similarNames = getSimilarNames(name.slug, name.gender, name.tags, name.origin);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    name: `${name.name} - Baby Name Meaning and Origin`,
    description: `${name.name} is a ${name.gender} name of ${name.origin} origin meaning "${name.meaning}".`,
    url: `https://ismybabyalright.com/baby-names/${name.slug}`,
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Breadcrumbs
        items={[
          { label: "Baby Names", href: "/baby-names" },
          { label: name.name },
        ]}
      />

      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        {/* Name header */}
        <div className="text-center mb-10">
          {/* Gender badge */}
          <span
            className="inline-flex items-center px-3 py-1 rounded-full text-sm font-bold mb-4"
            style={{
              backgroundColor: gc.bg,
              color: gc.text,
              border: `1.5px solid ${gc.border}`,
            }}
          >
            {genderLabels[name.gender]} Name
          </span>

          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4">
            {name.name}
          </h1>

          <p className="text-xl text-muted leading-relaxed max-w-xl mx-auto">
            {name.meaning}
          </p>

          <div className="mt-6">
            <FavoriteButton slug={name.slug} name={name.name} />
          </div>
        </div>

        {/* Details cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {/* Origin card */}
          <div className="card">
            <div className="flex items-center gap-2 mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={18}
                height={18}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.75}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
              <h2 className="text-sm font-bold uppercase tracking-wider text-muted">
                Origin
              </h2>
            </div>
            <p className="text-lg font-bold text-foreground">{name.origin}</p>
          </div>

          {/* Popularity card */}
          <div className="card">
            <div className="flex items-center gap-2 mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={18}
                height={18}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.75}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary"
                aria-hidden="true"
              >
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                <polyline points="17 6 23 6 23 12" />
              </svg>
              <h2 className="text-sm font-bold uppercase tracking-wider text-muted">
                Popularity
              </h2>
            </div>
            <span
              className="inline-flex items-center px-3 py-1 rounded-full text-sm font-bold"
              style={{
                backgroundColor: pc.bg,
                color: pc.text,
              }}
            >
              {name.popularity.charAt(0).toUpperCase() + name.popularity.slice(1)}
            </span>
            <p className="text-sm text-muted mt-2">
              {popularityDescriptions[name.popularity]}
            </p>
          </div>

          {/* Meaning card */}
          <div className="card sm:col-span-2">
            <div className="flex items-center gap-2 mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={18}
                height={18}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.75}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary"
                aria-hidden="true"
              >
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
              </svg>
              <h2 className="text-sm font-bold uppercase tracking-wider text-muted">
                Meaning
              </h2>
            </div>
            <p className="text-lg text-foreground leading-relaxed">
              The name <strong>{name.name}</strong> means &ldquo;{name.meaning}&rdquo; and comes from the{" "}
              {name.origin} language tradition.
              {name.gender === "unisex"
                ? " It is used for both boys and girls."
                : ` It is traditionally a ${name.gender === "boy" ? "boy's" : "girl's"} name.`}
            </p>
          </div>
        </div>

        {/* Tags */}
        {name.tags.length > 0 && (
          <section className="mb-10">
            <h2 className="text-sm font-bold uppercase tracking-wider text-muted mb-3">
              Name Characteristics
            </h2>
            <div className="flex flex-wrap gap-2">
              {name.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-semibold bg-primary-light text-primary border border-primary/10"
                >
                  {tag.charAt(0).toUpperCase() + tag.slice(1)}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* Similar Names */}
        {similarNames.length > 0 && (
          <section className="mb-10">
            <h2 className="text-lg font-extrabold text-foreground mb-4">
              Similar Names You Might Like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {similarNames.map((sim) => {
                const sgc = genderColors[sim.gender];
                return (
                  <Link
                    key={sim.slug}
                    href={`/baby-names/${sim.slug}`}
                    className="group block bg-white rounded-xl border border-[#E8E2D9] p-4 hover-lift no-underline"
                  >
                    <h3 className="text-base font-extrabold text-foreground group-hover:text-primary transition-colors mb-1">
                      {sim.name}
                    </h3>
                    <p className="text-sm text-muted line-clamp-1 mb-2">
                      {sim.meaning}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      <span
                        className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-bold"
                        style={{
                          backgroundColor: sgc.bg,
                          color: sgc.text,
                          border: `1px solid ${sgc.border}`,
                        }}
                      >
                        {genderLabels[sim.gender]}
                      </span>
                      <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-bold bg-background-alt text-foreground border border-card-border">
                        {sim.origin}
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        )}

        {/* Back link */}
        <div className="text-center pt-4 border-t border-card-border">
          <Link
            href="/baby-names"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-white font-semibold hover:bg-primary-hover transition-colors no-underline"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={16}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            Browse All Names
          </Link>
        </div>
      </div>
    </div>
  );
}
