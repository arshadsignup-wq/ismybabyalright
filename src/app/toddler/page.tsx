import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import KeyTakeaways from '@/components/shared/KeyTakeaways';
import FAQSection from '@/components/shared/FAQSection';
import LastReviewed from '@/components/shared/LastReviewed';
import EditorialTrustBanner from '@/components/shared/EditorialTrustBanner';
import BottomLine from '@/components/shared/BottomLine';
import MedicalReviewAttribution from '@/components/shared/MedicalReviewAttribution';
import { getBreadcrumbSchema, getContentPageSchema, getFAQPageSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Toddler Guide (12-36 Months)',
  description:
    'Toddler development guide from 12 to 36 months. Walking, talking, potty training, tantrums, discipline, independence, and developmental milestones.',
  alternates: { canonical: '/toddler' },
  openGraph: {
    title: 'Toddler Guide (12-36 Months) | Is My Baby Alright?',
    description: 'Walking, talking, potty training, tantrums, discipline, and developmental milestones.',
  },
};

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Toddler Guide' },
];

const sections = [
  {
    title: 'Development', links: [
      { href: '/milestones/12-months', label: '12 Month Milestones' },
      { href: '/milestones/15-months', label: '15 Month Milestones' },
      { href: '/milestones/18-months', label: '18 Month Milestones' },
      { href: '/milestones/24-months', label: '24 Month Milestones' },
      { href: '/milestones/30-months', label: '30 Month Milestones' },
      { href: '/milestones/36-months', label: '36 Month Milestones' },
      { href: '/development/red-flags', label: 'Developmental Red Flags' },
      { href: '/developmental-activities', label: 'Activities by Age' },
    ],
  },
  {
    title: 'Feeding & nutrition', links: [
      { href: '/food', label: 'Food Introduction Guide' },
      { href: '/meal-planner', label: 'Meal Planner' },
      { href: '/feeding/weaning', label: 'Weaning Guide' },
      { href: '/food/allergens', label: 'Allergen Guide' },
    ],
  },
  {
    title: 'Health & safety', links: [
      { href: '/when-to-call-the-doctor', label: 'When to Call the Doctor' },
      { href: '/doctor-visits', label: 'Well-Child Visits' },
      { href: '/vaccines', label: 'Vaccine Schedule' },
      { href: '/tools/medicine-dosage', label: 'Medicine Dosage' },
      { href: '/safety', label: 'Safety Guide' },
      { href: '/first-aid', label: 'First Aid' },
    ],
  },
  {
    title: 'Sleep', links: [
      { href: '/sleep', label: 'Sleep Guide' },
      { href: '/tools/sleep-schedule', label: 'Sleep Schedule' },
    ],
  },
];

const faqItems = [
  { question: 'When do toddlers start talking?', answer: 'First words typically appear around 12 months. By 24 months, most toddlers use 2-word phrases. By 36 months, most speak in short sentences.' },
  { question: 'Is picky eating normal in toddlers?', answer: 'Yes. Neophobia (fear of new foods) is developmentally normal in toddlers. Keep offering a variety of foods without pressure. Most children outgrow it.' },
  { question: 'When should my toddler be potty trained?', answer: 'Most children are ready between 18-36 months. The AAP recommends a child-led approach. There is no rush — starting before a child is ready often takes longer.' },
  { question: 'When should I worry about my toddler\'s development?', answer: 'Talk to your pediatrician if your toddler loses skills they previously had, has no 2-word phrases by 24 months, or is not walking steadily by 18 months.' },
];

export default function ToddlerPage() {
  return (
    <article className="max-w-3xl mx-auto px-5 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getContentPageSchema({
          name: 'Toddler Guide (12-36 Months)',
          description: 'Toddler development guide: walking, talking, potty training, tantrums, discipline, and developmental milestones.',
          path: '/toddler',
          medicalGuidelines: [
            { name: 'AAP Developmental Guidelines', url: 'https://www.aap.org/en/clinical-guidance/' },
            { name: 'CDC Developmental Milestones', url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html' },
          ],
        })) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getFAQPageSchema(faqItems)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getBreadcrumbSchema(breadcrumbItems)) }}
      />

      <Breadcrumbs items={[{ label: 'Toddler Guide' }]} />

      <h1 className="text-2xl font-bold text-foreground mb-2">Toddler Guide (12-36 Months)</h1>
      <LastReviewed date="2026-07-01" />
      <MedicalReviewAttribution sources={['AAP', 'CDC']} />
      <p className="text-sm text-muted mb-6">
        The toddler years are a time of explosive growth in language, independence, and personality. Your child is learning to walk, talk, make choices, and test boundaries — all at once. This hub connects you to every resource you need.
      </p>

      <KeyTakeaways
        takeaways={[
          'Toddlers (12-36 months) are learning to walk, talk, make choices, and test boundaries',
          'Tantrums, picky eating, and saying \u201Cno\u201D are developmentally normal',
          'The AAP recommends developmental screening at 18 and 24 months',
          'Potty training readiness typically appears between 18-36 months',
          'If your toddler loses skills they previously had, talk to your pediatrician',
        ]}
      />

      <div className="space-y-6">
        {/* Highlighted guides */}
        <section>
          <h2 className="text-base font-bold text-foreground mb-3">Toddler essentials</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/potty-training" className="rounded-xl border border-[#E8E2D9] bg-white p-4 hover:border-primary transition-colors group">
              <p className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">Potty Training Guide</p>
              <p className="text-xs text-muted mt-1">Readiness signs, methods, regression, and nighttime training</p>
            </Link>
            <Link href="/discipline" className="rounded-xl border border-[#E8E2D9] bg-white p-4 hover:border-primary transition-colors group">
              <p className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">Positive Discipline</p>
              <p className="text-xs text-muted mt-1">Tantrums, boundaries, and age-appropriate expectations</p>
            </Link>
            <Link href="/toddler/independence" className="rounded-xl border border-[#E8E2D9] bg-white p-4 hover:border-primary transition-colors group">
              <p className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">Fostering Independence</p>
              <p className="text-xs text-muted mt-1">Help your toddler do things on their own safely</p>
            </Link>
            <Link href="/toddler/language-explosion" className="rounded-xl border border-[#E8E2D9] bg-white p-4 hover:border-primary transition-colors group">
              <p className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">Language Explosion</p>
              <p className="text-xs text-muted mt-1">Language development from 18-36 months</p>
            </Link>
            <Link href="/toddler/social-skills" className="rounded-xl border border-[#E8E2D9] bg-white p-4 hover:border-primary transition-colors group">
              <p className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">Social Skills</p>
              <p className="text-xs text-muted mt-1">Sharing, turn-taking, and making friends</p>
            </Link>
            <Link href="/toddler/routine" className="rounded-xl border border-[#E8E2D9] bg-white p-4 hover:border-primary transition-colors group">
              <p className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">Daily Routines</p>
              <p className="text-xs text-muted mt-1">Predictable schedules for happier toddlers</p>
            </Link>
            <Link href="/toddler/transitions" className="rounded-xl border border-[#E8E2D9] bg-white p-4 hover:border-primary transition-colors group">
              <p className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">Managing Transitions</p>
              <p className="text-xs text-muted mt-1">Crib to bed, bottle to cup, and more</p>
            </Link>
            <Link href="/sign-language" className="rounded-xl border border-[#E8E2D9] bg-white p-4 hover:border-primary transition-colors group">
              <p className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">Baby Sign Language</p>
              <p className="text-xs text-muted mt-1">Reduce frustration by helping your toddler communicate</p>
            </Link>
          </div>
        </section>

        {/* Resource sections */}
        {sections.map((section) => (
          <section key={section.title} className="rounded-xl border border-[#E8E2D9] bg-white p-5">
            <h2 className="text-base font-bold text-foreground mb-3">{section.title}</h2>
            <ul className="space-y-2">
              {section.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-primary hover:underline">{link.label}</Link>
                </li>
              ))}
            </ul>
          </section>
        ))}

        <section className="rounded-xl border border-[#E8E2D9] bg-white p-5">
          <h2 className="text-base font-bold text-foreground mb-2">What behavior is normal for toddlers?</h2>
          <div className="text-sm text-muted leading-relaxed space-y-2">
            <p>Toddlers are figuring out the world — and testing everything. These are normal phases, not problems:</p>
            <ul className="list-disc list-inside space-y-1 mt-2">
              <li><strong>Tantrums:</strong> Peak between 18-36 months. A sign of developing emotions, not bad behavior.</li>
              <li><strong>Picky eating:</strong> Neophobia (fear of new foods) is developmentally normal. Keep offering without pressure.</li>
              <li><strong>&ldquo;No!&rdquo; to everything:</strong> Asserting independence. Offer choices within limits.</li>
              <li><strong>Biting and hitting:</strong> Impulse control is still developing. Redirect consistently.</li>
              <li><strong>Sleep resistance:</strong> Testing boundaries at bedtime is common. Consistency helps.</li>
              <li><strong>Regression:</strong> Stress, illness, or big changes can cause temporary skill loss. Usually resolves quickly.</li>
            </ul>
            <p className="mt-2">
              <Link href="/concerns" className="text-primary hover:underline font-semibold">Browse all toddler concerns &rarr;</Link>
            </p>
          </div>
        </section>

        <FAQSection items={faqItems} />
      </div>

      <BottomLine summary="Toddlerhood is a period of rapid growth and exploration. Tantrums, picky eating, and boundary-testing are all developmentally normal. Talk to your pediatrician if you have concerns about your toddler's development or behavior." />

      <div className="mt-6"><EditorialTrustBanner variant="compact" /></div>

      <div className="mt-10 pt-6 border-t border-border flex items-center justify-between">
        <Link href="/development" className="text-sm text-primary font-semibold hover:underline">&larr; Development by Month</Link>
        <Link href="/concerns" className="text-sm text-primary font-semibold hover:underline">All Concerns &rarr;</Link>
      </div>
    </article>
  );
}
