import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import { getBreadcrumbSchema } from '@/lib/seo';
import EditorialTrustBanner from '@/components/shared/EditorialTrustBanner';
import LastReviewed from '@/components/shared/LastReviewed';
import BottomLine from '@/components/shared/BottomLine';
import { glossaryTerms } from '@/data/glossary';

export const metadata: Metadata = {
  title: 'Baby Health Glossary',
  description:
    'Plain-language definitions of baby health and development terms. From adjusted age to wonder weeks, understand the medical terminology parents encounter.',
  alternates: {
    canonical: '/glossary',
  },
  openGraph: {
    title: 'Baby Health Glossary | Is My Baby Alright?',
    description:
      'Plain-language definitions of baby health and development terms parents encounter.',
  },
};

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Baby Health Glossary' },
];

function getDefinedTermSetSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'DefinedTermSet',
    name: 'Baby Health Glossary',
    description:
      'Plain-language definitions of medical and developmental terms parents encounter.',
    url: 'https://www.ismybabyalright.com/glossary',
    hasDefinedTerm: glossaryTerms.map((t) => ({
      '@type': 'DefinedTerm',
      name: t.term,
      description: t.definition,
      url: `https://www.ismybabyalright.com/glossary#${t.slug}`,
    })),
  };
}

export default function GlossaryPage() {
  const letters = new Map<string, typeof glossaryTerms>();
  for (const term of glossaryTerms) {
    const letter = term.term[0].toUpperCase();
    if (!letters.has(letter)) letters.set(letter, []);
    letters.get(letter)!.push(term);
  }
  const sortedLetters = [...letters.entries()].sort(([a], [b]) =>
    a.localeCompare(b)
  );
  const activeLetters = new Set(sortedLetters.map(([l]) => l));
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  return (
    <main className="max-w-3xl mx-auto px-5 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getDefinedTermSetSchema()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getBreadcrumbSchema(breadcrumbItems)) }}
      />

      <Breadcrumbs items={[{ label: 'Baby Health Glossary' }]} />

      <h1 className="text-2xl font-bold text-foreground mb-2">
        Baby Health Glossary
      </h1>
      <p className="text-sm text-muted mb-3">
        Plain-language definitions of medical and developmental terms parents
        encounter. Each definition links to related guides and tools on this
        site.
      </p>
      <div className="mb-6">
        <LastReviewed date="2026-07-01" />
      </div>

      {/* Letter navigation */}
      <nav
        aria-label="Glossary letter navigation"
        className="flex flex-wrap gap-1 mb-8"
      >
        {alphabet.map((letter) =>
          activeLetters.has(letter) ? (
            <a
              key={letter}
              href={`#letter-${letter}`}
              className="w-8 h-8 flex items-center justify-center rounded text-xs font-bold text-primary hover:bg-card-alt transition-colors"
            >
              {letter}
            </a>
          ) : (
            <span
              key={letter}
              className="w-8 h-8 flex items-center justify-center rounded text-xs text-muted-light"
            >
              {letter}
            </span>
          )
        )}
      </nav>

      <div className="space-y-8">
        {sortedLetters.map(([letter, terms]) => (
          <section key={letter} id={`letter-${letter}`}>
            <h2 className="text-lg font-bold text-foreground mb-3 border-b border-border pb-1">
              {letter}
            </h2>
            <dl className="space-y-4">
              {terms.map((t) => (
                <div
                  key={t.slug}
                  id={t.slug}
                  role="group"
                  className="rounded-xl border border-[#E8E2D9] bg-white p-4"
                >
                  <dt className="text-sm font-bold text-foreground">
                    {t.term}
                  </dt>
                  <dd className="text-sm text-muted leading-relaxed mt-1">
                    {t.definition}
                  </dd>
                  {t.relatedLinks && t.relatedLinks.length > 0 && (
                    <dd className="mt-2 flex flex-wrap gap-2">
                      {t.relatedLinks.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="inline-block rounded-full border border-[#E8E2D9] px-3 py-1 text-xs text-primary hover:bg-card-alt transition-colors"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </dd>
                  )}
                </div>
              ))}
            </dl>
          </section>
        ))}
      </div>

      <BottomLine summary="Medical terminology can feel overwhelming, especially for new parents. This glossary provides plain-language definitions for the terms you're most likely to encounter at pediatrician visits, in parenting resources, and on this site. If your doctor uses a term you don't understand, ask them to explain — they want you to feel informed." />

      <div className="mt-6">
        <EditorialTrustBanner variant="compact" />
      </div>

      <div className="mt-10 pt-6 border-t border-border flex items-center justify-between">
        <Link
          href="/"
          className="text-sm text-primary font-semibold hover:underline"
        >
          Back to Home
        </Link>
        <Link
          href="/conditions"
          className="text-sm text-primary font-semibold hover:underline"
        >
          Conditions A-Z
        </Link>
      </div>
    </main>
  );
}
