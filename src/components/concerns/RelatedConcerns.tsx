import Link from 'next/link';
import type { ConcernCategory, ConcernPage } from '@/data/concerns/types';
import { allConcerns } from '@/data/concerns';

const categoryColors: Record<ConcernCategory, string> = {
  physical: '#38BDF8',
  communication: '#A78BFA',
  feeding: '#F4A261',
  sleep: '#818CF8',
  skin: '#F472B6',
  digestive: '#34D399',
  behavior: '#FBBF24',
  medical: '#F07167',
};

const categoryLabels: Record<ConcernCategory, string> = {
  physical: 'Physical',
  communication: 'Speech',
  feeding: 'Feeding',
  sleep: 'Sleep',
  skin: 'Skin',
  digestive: 'Digestive',
  behavior: 'Behavior',
  medical: 'Medical',
};

export default function RelatedConcerns({
  currentSlug,
  category,
  curatedSlugs,
}: {
  currentSlug: string;
  category: ConcernCategory;
  curatedSlugs?: string[];
}) {
  // Curated cross-category links first, then same-category auto-fill
  const curated = (curatedSlugs ?? [])
    .map((s) => allConcerns.find((c) => c.slug === s))
    .filter((c): c is ConcernPage => !!c && c.slug !== currentSlug);

  const sameCategory = allConcerns
    .filter(
      (c) =>
        c.category === category &&
        c.slug !== currentSlug &&
        !curated.some((cur) => cur.slug === c.slug)
    );

  const related = [...curated, ...sameCategory].slice(0, 6);

  if (related.length === 0) return null;

  const color = categoryColors[category];

  return (
    <section className="mt-12" aria-labelledby="related-concerns-heading">
      <h3
        id="related-concerns-heading"
        className="text-lg font-bold text-foreground mb-4"
      >
        Related {categoryLabels[category]} Concerns
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {related.map((c) => (
          <Link
            key={c.slug}
            href={`/concerns/${c.slug}`}
            className="group flex gap-3 items-start rounded-xl border border-[#E8E2D9] bg-white p-4 no-underline transition-all hover:shadow-md hover:-translate-y-0.5"
          >
            <div
              className="mt-0.5 h-2 w-2 shrink-0 rounded-full"
              style={{ backgroundColor: color }}
            />
            <div className="min-w-0">
              <p className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">
                {c.title}
              </p>
              <p className="text-xs text-muted line-clamp-2 mt-1">
                {c.quickAnswer}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
