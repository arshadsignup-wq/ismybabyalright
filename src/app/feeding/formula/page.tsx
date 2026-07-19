import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import KeyTakeaways from '@/components/shared/KeyTakeaways';
import ComparisonTable from '@/components/shared/ComparisonTable';
import FAQSection from '@/components/shared/FAQSection';
import LastReviewed from '@/components/shared/LastReviewed';
import EditorialTrustBanner from '@/components/shared/EditorialTrustBanner';
import BottomLine from '@/components/shared/BottomLine';
import MedicalReviewAttribution from '@/components/shared/MedicalReviewAttribution';
import { getBreadcrumbSchema, getContentPageSchema, getFAQPageSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Formula Feeding Guide',
  description:
    'Formula feeding guide: types of formula, preparation safety, feeding amounts by age, switching formulas, and combination feeding. Evidence-based guidance from AAP.',
  alternates: { canonical: '/feeding/formula' },
  openGraph: {
    title: 'Formula Feeding Guide | Is My Baby Alright?',
    description: 'Types of formula, preparation safety, feeding amounts by age, and switching formulas.',
  },
};

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Feeding', url: '/feeding' },
  { name: 'Formula Feeding Guide' },
];

const faqItems = [
  { question: 'What is the best formula for newborns?', answer: 'Cow\'s milk-based formula is the first choice for most babies. Ready-to-feed formula is recommended for newborns under 2 months as it does not require mixing.' },
  { question: 'How do I know if my baby\'s formula is not agreeing with them?', answer: 'Signs include persistent vomiting, diarrhea, blood in stool, excessive fussiness, or rash. Give a new formula at least 1 week before deciding if it works.' },
  { question: 'Can I switch formula brands?', answer: 'Yes, switching brands of the same type is usually fine. Switching types (e.g., standard to soy) should be discussed with your pediatrician.' },
  { question: 'How long is prepared formula good for?', answer: 'Refrigerated: up to 24 hours. After a feeding has started: discard any leftover formula in the bottle.' },
  { question: 'Is it okay to combine breast milk and formula?', answer: 'Yes. Any amount of breast milk provides immune benefits. Many families successfully combine breastfeeding and formula feeding.' },
];

export default function FormulaPage() {
  return (
    <article className="max-w-3xl mx-auto px-5 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getContentPageSchema({
          name: 'Formula Feeding Guide',
          description: 'Formula feeding guide: types of formula, preparation safety, feeding amounts by age.',
          path: '/feeding/formula',
          medicalGuidelines: [
            { name: 'AAP Formula Feeding Guidance', url: 'https://www.aap.org/en/clinical-guidance/' },
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

      <Breadcrumbs items={[{ label: 'Feeding', href: '/feeding' }, { label: 'Formula Feeding Guide' }]} />

      <h1 className="text-2xl font-bold text-foreground mb-2">Formula Feeding Guide</h1>
      <LastReviewed date="2026-07-01" />
      <MedicalReviewAttribution sources={['AAP', 'FDA']} />
      <p className="text-sm text-muted mb-6 mt-4">
        Formula provides complete nutrition for babies. Whether you are exclusively formula feeding or supplementing, this guide covers everything you need to know.
      </p>

      <KeyTakeaways
        takeaways={[
          'Formula provides complete nutrition \u2014 fed is best, however that looks for your family',
          'Cow\u2019s milk-based formula is the most common type and suitable for most babies',
          'Never microwave formula \u2014 always follow exact mixing instructions on the label',
          'Prepared formula can be refrigerated for up to 24 hours; discard leftovers from bottles',
          'The AAP recommends transitioning from bottle to cup by 12-18 months',
        ]}
      />

      <div className="space-y-6">
        <Section title="What are the different types of baby formula?">
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Cow&apos;s milk-based:</strong> The most common type. Suitable for most babies. Proteins are modified to be easier to digest.</li>
            <li><strong>Soy-based:</strong> For babies who cannot tolerate cow&apos;s milk protein or for families choosing plant-based options. Not recommended for premature infants.</li>
            <li><strong>Hydrolyzed (hypoallergenic):</strong> Proteins are broken down for easier digestion. For babies with cow&apos;s milk protein allergy or intolerance.</li>
            <li><strong>Amino acid-based:</strong> For severe allergies when hydrolyzed formula is not tolerated. Usually prescribed by a doctor.</li>
            <li><strong>Specialty:</strong> For specific medical conditions (reflux, premature babies). Use only under medical guidance.</li>
          </ul>
          <p className="mt-2">
            <strong>Forms:</strong> Powdered (most affordable, requires mixing), liquid concentrate (mix with equal parts water), ready-to-feed (most convenient, no mixing needed — recommended for newborns under 2 months).
          </p>

          <ComparisonTable
            caption="Formula types compared"
            headers={['Type', 'Best for', 'Notes']}
            rows={[
              ['Cow\u2019s milk-based', 'Most babies', 'Most common, proteins modified for digestion'],
              ['Soy-based', 'CMPA, plant-based families', 'Not for premature infants'],
              ['Hydrolyzed', 'Mild allergies/intolerance', 'Broken-down proteins'],
              ['Amino acid-based', 'Severe allergies', 'Usually prescribed'],
            ]}
          />
        </Section>

        <Section title="How do I safely prepare baby formula?">
          <ul className="list-disc list-inside space-y-1">
            <li>Always wash hands before preparing formula</li>
            <li>Use clean, sterilized bottles and nipples (sterilize daily for babies under 3 months)</li>
            <li>Follow the exact mixing instructions on the label — do not add extra water or powder</li>
            <li>Use water from a safe source. If unsure, use bottled water or boil and cool tap water.</li>
            <li>Test temperature on the inside of your wrist before feeding</li>
            <li>Prepared formula can be refrigerated for up to 24 hours</li>
            <li>Discard any formula left in the bottle after a feeding — bacteria from baby&apos;s mouth grows in leftover milk</li>
            <li>Never microwave formula — it creates hot spots that can burn baby&apos;s mouth</li>
          </ul>
        </Section>

        <Section title="How much formula does my baby need by age?">
          <ComparisonTable
            caption="Formula feeding amounts by age"
            headers={['Age', 'Amount per feeding', 'Feedings per day']}
            rows={[
              ['Newborn', '1-2 oz', 'Every 2-3 hours'],
              ['1 month', '3-4 oz', 'Every 3-4 hours'],
              ['2 months', '4-5 oz', 'Every 3-4 hours'],
              ['4 months', '4-6 oz', 'Every 3-4 hours'],
              ['6 months', '6-8 oz', '4-5 times/day'],
              ['9-12 months', '7-8 oz', '3-4 times/day'],
            ]}
            sourceNote="These are guidelines — your baby may take more or less. Watch for hunger and fullness cues rather than forcing a specific amount."
          />
          <p className="mt-2">
            <Link href="/tools/feeding-amount" className="text-primary hover:underline font-semibold">Feeding amount calculator &rarr;</Link>
          </p>
        </Section>

        <Section title="How do I switch baby formulas?">
          <ul className="list-disc list-inside space-y-1">
            <li>Most babies can switch brands of the same type without issues</li>
            <li>Switching types (e.g., standard to sensitive) should be discussed with your pediatrician</li>
            <li>Give a new formula at least a week before deciding if it works — minor adjustment symptoms (gas, stool changes) are common</li>
            <li>Signs formula may not agree with your baby: persistent vomiting, diarrhea, blood in stool, excessive fussiness, rash</li>
          </ul>
        </Section>

        <Section title="Can I combine breastfeeding and formula?">
          <p>Combining breast milk and formula is common and can work well:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Any amount of breast milk provides immune benefits</li>
            <li>Introduce formula gradually if supplementing — start with one bottle per day</li>
            <li>If maintaining milk supply is a goal, breastfeed or pump before offering formula</li>
            <li>Some babies prefer one over the other — different bottle nipple flows may help</li>
          </ul>
        </Section>

        <FAQSection items={faqItems} />
      </div>

      <div className="mt-8 flex flex-wrap gap-2">
        <Link href="/tools/feeding-amount" className="inline-block rounded-full border border-[#E8E2D9] px-3 py-1 text-xs text-primary hover:bg-card-alt transition-colors">Feeding Amount Calculator</Link>
        <Link href="/food" className="inline-block rounded-full border border-[#E8E2D9] px-3 py-1 text-xs text-primary hover:bg-card-alt transition-colors">Starting Solids</Link>
      </div>

      <BottomLine summary="Formula is a safe, nutritionally complete food for infants. The AAP confirms that modern formulas provide all the nutrients babies need to grow and thrive. Choose a formula your baby tolerates well, follow preparation instructions carefully, and talk to your pediatrician if you have questions." />

      <div className="mt-6"><EditorialTrustBanner variant="compact" /></div>

      <div className="mt-10 pt-6 border-t border-border flex items-center justify-between">
        <Link href="/feeding/breastfeeding" className="text-sm text-primary font-semibold hover:underline">&larr; Breastfeeding Guide</Link>
        <Link href="/feeding/weaning" className="text-sm text-primary font-semibold hover:underline">Weaning Guide &rarr;</Link>
      </div>
    </article>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-xl border border-[#E8E2D9] bg-white p-5">
      <h2 className="text-base font-bold text-foreground mb-2">{title}</h2>
      <div className="text-sm text-muted leading-relaxed space-y-2">{children}</div>
    </section>
  );
}
