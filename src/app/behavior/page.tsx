import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import KeyTakeaways from '@/components/shared/KeyTakeaways';
import EditorialTrustBanner from '@/components/shared/EditorialTrustBanner';
import MedicalReviewAttribution from '@/components/shared/MedicalReviewAttribution';
import LastReviewed from '@/components/shared/LastReviewed';
import { getCollectionPageSchema, getBreadcrumbSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Baby & Toddler Behavior Guide',
  description: 'Understanding baby and toddler behavior — tantrums, aggression, sleep issues, discipline approaches, emotional development, and social skills by age.',
  alternates: { canonical: '/behavior' },
};

const sections = [
  { label: 'Behavior by Age', description: 'What\'s normal at each stage', href: '/behavior/by-age' },
  { label: 'Tantrums & Meltdowns', description: 'Understanding, preventing, and responding', href: '/behavior/tantrums' },
  { label: 'Discipline Approaches', description: 'Evidence-based discipline strategies', href: '/behavior/discipline' },
  { label: 'Aggression', description: 'Hitting, biting, throwing — what to do', href: '/behavior/aggression' },
  { label: 'Social Skills', description: 'Sharing, playing, making friends', href: '/behavior/social-skills' },
  { label: 'Emotional Development', description: 'Feelings, regulation, and big emotions', href: '/behavior/emotions' },
  { label: 'Screen Time', description: 'Guidelines, effects, and management', href: '/behavior/screen-time' },
  { label: 'Siblings', description: 'Rivalry, regression, and adjustment', href: '/behavior/siblings' },
];

export default function BehaviorHubPage() {
  const schema = getCollectionPageSchema({
    name: 'Baby & Toddler Behavior Guide',
    description: 'Understanding baby and toddler behavior.',
    path: '/behavior',
  });
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Behavior' },
  ]);

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Breadcrumbs items={[{ label: 'Behavior' }]} />

      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        <h1>Baby & Toddler Behavior Guide</h1>

        <div className="mt-2 mb-2">
          <MedicalReviewAttribution sources={['AAP', 'CDC']} />
        </div>
        <div className="mb-4">
          <LastReviewed date="2026-07-01" />
        </div>

        <KeyTakeaways takeaways={[
          'Most challenging behaviors are developmentally normal — they are not a sign of bad parenting',
          'Behavior is communication — children act out when they lack the skills to express needs',
          'Consistency across caregivers is the single most important factor in behavior management',
          'Punishment teaches what NOT to do; positive discipline teaches what TO do instead',
        ]} />

        <section className="mt-8">
          <h2 className="text-lg font-bold mb-4">Behavior Topics</h2>
          <div className="space-y-3">
            {sections.map((section) => (
              <Link
                key={section.href}
                href={section.href}
                className="block rounded-xl border border-[#E8E2D9] bg-white p-4 hover:border-primary/40 transition-colors"
              >
                <span className="font-semibold text-sm text-foreground">{section.label}</span>
                <p className="text-xs text-muted mt-0.5">{section.description}</p>
              </Link>
            ))}
          </div>
        </section>

        <div className="mt-8">
          <EditorialTrustBanner variant="full" />
        </div>
      </div>
    </article>
  );
}
