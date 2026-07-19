import type { Metadata } from 'next';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import KeyTakeaways from '@/components/shared/KeyTakeaways';
import FAQSection from '@/components/shared/FAQSection';
import EditorialTrustBanner from '@/components/shared/EditorialTrustBanner';
import LastReviewed from '@/components/shared/LastReviewed';
import MedicalReviewAttribution from '@/components/shared/MedicalReviewAttribution';
import BottomLine from '@/components/shared/BottomLine';
import { getBreadcrumbSchema, getContentPageSchema, getFAQPageSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'WHO vs CDC Growth Charts Explained',
  description:
    'Compare WHO and CDC growth charts: which one to use, key differences in methodology and populations, how percentiles differ, and why it matters for your baby.',
  alternates: { canonical: '/growth/who-vs-cdc' },
};

const faqItems = [
  {
    question: 'Why does the U.S. use two different growth chart systems?',
    answer:
      'The CDC recommended in 2010 that clinicians use WHO growth standards for children aged 0 to 24 months and CDC growth reference charts for children aged 2 to 20 years. The WHO charts are preferred for infants because they represent how children should grow under optimal conditions (primarily breastfed), while the CDC charts are better suited for the diverse growth patterns of older children in the U.S. population.',
  },
  {
    question: 'Will my baby be at a different percentile on WHO vs CDC charts?',
    answer:
      'Possibly. The most significant difference is that the WHO charts show higher weight-for-age percentiles in the first 6 months (because breastfed babies gain rapidly early on) but lower percentiles from 6 to 24 months. This means a breastfed baby who appears to be "falling off" on CDC charts may actually be growing normally on WHO charts. The differences in length percentiles are smaller.',
  },
  {
    question: 'My pediatrician uses CDC charts for my infant. Should I ask them to switch?',
    answer:
      'The CDC officially recommends using WHO charts for children under 2. If your pediatrician is using CDC charts for your infant, it may be worth asking about it. However, many electronic health record systems have been updated to default to the appropriate chart by age. The most important thing is that the same chart system is used consistently across visits to track trends accurately.',
  },
  {
    question: 'Do the charts matter if my baby is formula-fed?',
    answer:
      'Yes, the WHO charts are recommended for all babies under 2, regardless of feeding method. Even though the WHO standards were developed from breastfed populations, they represent the biological norm for how infants should grow. Formula-fed babies may show slightly different patterns (faster weight gain from 3 to 12 months), which is useful clinical information best captured against the WHO standard.',
  },
  {
    question: 'What happens when my child transitions from WHO to CDC charts at age 2?',
    answer:
      'There may be a small shift in percentile when transitioning from WHO to CDC charts at age 2. This is expected because the charts are based on different populations and methods. Additionally, the measurement method changes from recumbent length to standing height, which can affect the number by 0.7 to 1 cm. Your pediatrician accounts for these transitions and will note if any shift is outside the expected range.',
  },
];

const takeaways = [
  'WHO charts are a growth standard (how children should grow); CDC charts are a growth reference (how they actually grew)',
  'The CDC recommends WHO charts for ages 0 to 24 months and CDC charts for ages 2 to 20 years',
  'WHO charts are based on healthy, breastfed babies from 6 countries under optimal conditions',
  'CDC charts are based on U.S. national survey data from the 1960s through 1990s (mixed feeding)',
  'Using WHO charts for infants reduces false diagnosis of growth faltering in breastfed babies',
];

export default function WhoVsCdcPage() {
  const contentSchema = getContentPageSchema({
    name: 'WHO vs CDC Growth Charts: Key Differences',
    description:
      'Comparison of WHO and CDC growth charts, when to use each, methodology differences, and practical implications.',
    path: '/growth/who-vs-cdc',
    lastModified: '2026-07-01',
    medicalGuidelines: [
      { name: 'WHO Child Growth Standards', url: 'https://www.who.int/tools/child-growth-standards' },
      { name: 'CDC Growth Charts', url: 'https://www.cdc.gov/growthcharts/' },
      { name: 'CDC Recommendations for WHO Charts', url: 'https://www.cdc.gov/growthcharts/who_charts.htm' },
    ],
  });

  const faqSchema = getFAQPageSchema(faqItems);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Growth', url: '/growth' },
    { name: 'WHO vs CDC Charts' },
  ]);

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contentSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Breadcrumbs items={[{ label: 'Growth', href: '/growth' }, { label: 'WHO vs CDC Charts' }]} />

      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
          WHO vs CDC Growth Charts: What&apos;s the Difference?
        </h1>

        <p className="mt-4 text-base text-muted leading-relaxed">
          Two growth chart systems exist in the United States, and each serves a different purpose.
          Understanding the differences between WHO and CDC charts helps you interpret your baby&apos;s
          growth measurements accurately and know which chart your pediatrician should be using.
        </p>

        <div className="mt-4">
          <MedicalReviewAttribution sources={['WHO', 'CDC']} />
          <LastReviewed date="2026-07-01" />
        </div>

        <div className="mt-6">
          <KeyTakeaways takeaways={takeaways} />
        </div>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            WHO Growth Standards (ages 0 to 24 months)
          </h2>
          <div className="space-y-3 text-sm text-muted leading-relaxed">
            <p>
              The WHO Multicentre Growth Reference Study (MGRS) collected data from 1997 to 2003 across six
              countries: Brazil, Ghana, India, Norway, Oman, and the United States. The study enrolled
              approximately 8,500 healthy, breastfed children whose mothers did not smoke and who lived in
              environments that did not constrain growth.
            </p>
            <p>
              Key characteristics of WHO growth standards:
            </p>
            <ul className="mt-2 space-y-2">
              <li className="flex items-start gap-2.5">
                <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
                <span>Describe how children <strong className="text-foreground">should</strong> grow under optimal conditions (a prescriptive standard)</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
                <span>Based on breastfed infants with appropriate complementary feeding introduced at 6 months</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
                <span>Multi-ethnic population from 6 countries</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
                <span>Breastfeeding established as the biological norm for infant growth</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
                <span>Cover weight-for-age, length-for-age, weight-for-length, head circumference-for-age, and BMI-for-age</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            CDC Growth Reference Charts (ages 2 to 20 years)
          </h2>
          <div className="space-y-3 text-sm text-muted leading-relaxed">
            <p>
              The CDC growth charts (revised in 2000) are based on U.S. national survey data primarily from
              the National Health and Nutrition Examination Surveys (NHANES) conducted between the 1960s and
              1990s. They represent a reference of how American children actually grew during that period.
            </p>
            <p>
              Key characteristics of CDC growth references:
            </p>
            <ul className="mt-2 space-y-2">
              <li className="flex items-start gap-2.5">
                <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
                <span>Describe how children <strong className="text-foreground">did</strong> grow in a specific population (a descriptive reference)</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
                <span>Based on a mix of breastfed and formula-fed infants (predominantly formula-fed)</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
                <span>U.S. population only</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
                <span>Include the 3rd and 97th percentiles (WHO charts include the 2nd and 98th)</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
                <span>Cover weight-for-age, stature-for-age, weight-for-stature, BMI-for-age, and head circumference-for-age</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Practical differences in percentiles
          </h2>
          <p className="text-sm text-muted leading-relaxed">
            The charts differ most notably in weight-for-age during infancy:
          </p>
          <ul className="mt-3 space-y-2 text-sm text-muted leading-relaxed">
            <li className="flex items-start gap-2.5">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong className="text-foreground">0 to 6 months:</strong> WHO charts show higher weight percentiles (breastfed babies gain rapidly early)</span>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="flex-shrink-0 mt-1.5 w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
              <span><strong className="text-foreground">6 to 24 months:</strong> WHO charts show lower weight percentiles (breastfed babies gain more slowly later)</span>
            </li>
          </ul>
          <p className="text-sm text-muted leading-relaxed mt-3">
            This means that using CDC charts for infants may falsely suggest that a breastfed baby is
            &ldquo;falling off their curve&rdquo; after 6 months when they are actually growing normally. Conversely,
            CDC charts may underestimate early rapid weight gain. This is the primary reason the CDC recommends
            using WHO charts for the under-2 population.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Which chart should your pediatrician use?
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-muted border-collapse">
              <thead>
                <tr className="border-b border-[#E8E2D9]">
                  <th className="text-left py-2 pr-4 font-semibold text-foreground">Age</th>
                  <th className="text-left py-2 pr-4 font-semibold text-foreground">Recommended Chart</th>
                  <th className="text-left py-2 font-semibold text-foreground">Reason</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#E8E2D9]">
                  <td className="py-2 pr-4">0 to 24 months</td>
                  <td className="py-2 pr-4">WHO Growth Standards</td>
                  <td className="py-2">Represents optimal growth; appropriate for all feeding methods</td>
                </tr>
                <tr className="border-b border-[#E8E2D9]">
                  <td className="py-2 pr-4">2 to 20 years</td>
                  <td className="py-2 pr-4">CDC Growth References</td>
                  <td className="py-2">Better represents diverse U.S. population of older children</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">Premature (NICU)</td>
                  <td className="py-2 pr-4">Fenton/Intergrowth-21st</td>
                  <td className="py-2">Specialized charts for preterm growth assessment</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Why this matters for your baby
          </h2>
          <p className="text-sm text-muted leading-relaxed">
            Using the wrong chart can lead to unnecessary concern or missed problems. A breastfed baby
            plotted on CDC charts may appear to have slowing growth between 6 and 12 months when they are
            actually growing appropriately for their feeding method. This could lead to unnecessary
            supplementation, formula introduction, or early introduction of solids. Conversely, rapid weight
            gain in a formula-fed infant plotted against WHO charts provides useful information about potential
            overfeeding. The right chart, used consistently, gives the most accurate picture of your baby&apos;s
            growth trajectory.
          </p>
        </section>

        <div className="mt-10">
          <FAQSection items={faqItems} />
        </div>

        <BottomLine summary="WHO growth standards should be used for children under 2 years, and CDC growth references for ages 2 to 20. The key difference is that WHO charts show how babies should grow (a standard) while CDC charts show how they did grow (a reference). Using the right chart at the right age ensures your baby's growth is accurately assessed." />

        <div className="mt-6">
          <EditorialTrustBanner variant="compact" />
        </div>
      </div>
    </article>
  );
}
