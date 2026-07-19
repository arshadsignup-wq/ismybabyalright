import type { Metadata } from 'next';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import ComparisonTable from '@/components/shared/ComparisonTable';
import KeyTakeaways from '@/components/shared/KeyTakeaways';
import FAQSection from '@/components/shared/FAQSection';
import EditorialTrustBanner from '@/components/shared/EditorialTrustBanner';
import LastReviewed from '@/components/shared/LastReviewed';
import MedicalReviewAttribution from "@/components/shared/MedicalReviewAttribution";
import BottomLine from '@/components/shared/BottomLine';
import { getBreadcrumbSchema, getContentPageSchema, getFAQPageSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Baby Eczema vs Baby Acne: How to Tell the Difference',
  description:
    'Learn how to tell baby eczema from baby acne. Compare appearance, location, timing, causes, treatment, and when to see a doctor.',
  alternates: { canonical: '/concerns/eczema-vs-baby-acne' },
  openGraph: {
    title: 'Baby Eczema vs Baby Acne: How to Tell the Difference | Is My Baby Alright?',
    description:
      'Learn how to tell baby eczema from baby acne. Compare appearance, location, timing, causes, treatment, and when to see a doctor.',
  },
};

const faqItems = [
  {
    question: 'Can my baby have both eczema and baby acne at the same time?',
    answer:
      'Yes. It is possible for a baby to have both conditions simultaneously. Baby acne typically appears on the face in the first few weeks of life, while eczema can develop on the cheeks and body after 3 months. If you are unsure what you are seeing, your pediatrician can help distinguish between them.',
  },
  {
    question: 'Does baby eczema go away on its own?',
    answer:
      'Many children outgrow eczema by school age, but it can persist into adulthood for some. Eczema tends to flare and remit over time. Consistent moisturizing, avoiding known triggers, and following your doctor\'s treatment plan can help manage flare-ups and reduce severity over time.',
  },
  {
    question: 'Can dairy in my diet cause my breastfed baby\'s eczema or acne?',
    answer:
      'Baby acne is caused by maternal hormones and developing oil glands — it is not related to diet. For eczema, a small percentage of breastfed babies may react to cow\'s milk protein in the mother\'s diet, but this is not common. Do not eliminate foods from your diet without discussing it with your pediatrician first.',
  },
];

const breadcrumbSchemaItems = [
  { name: 'Home', url: '/' },
  { name: 'Concerns', url: '/concerns' },
  { name: 'Eczema vs Baby Acne' },
];

export default function EczemaVsBabyAcnePage() {
  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getContentPageSchema({
              name: 'Baby Eczema vs Baby Acne: How to Tell the Difference',
              description:
                'Learn how to tell baby eczema from baby acne. Compare appearance, location, timing, causes, treatment, and when to see a doctor.',
              path: '/concerns/eczema-vs-baby-acne',
              lastModified: '2026-07-01',
              medicalGuidelines: [
                { name: 'AAP Eczema Guidelines', url: 'https://www.aap.org/en/clinical-guidance/' },
                { name: 'National Eczema Association', url: 'https://nationaleczema.org/' },
              ],
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getFAQPageSchema(faqItems)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getBreadcrumbSchema(breadcrumbSchemaItems)) }}
      />

      <Breadcrumbs items={[{ label: 'Concerns', href: '/concerns' }, { label: 'Eczema vs Baby Acne' }]} />

      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        <h1 className="text-2xl font-bold text-foreground mb-2">
          Baby Eczema vs Baby Acne: How to Tell the Difference
        </h1>

        <p className="text-sm text-muted leading-relaxed mb-4">
          Baby eczema and baby acne are two of the most common skin conditions in infants, and they
          can look similar. This guide compares their appearance, location, timing, causes, and
          treatments to help you identify what your baby has.
        </p>

        <MedicalReviewAttribution sources={['AAP', 'AAD']} />
        <LastReviewed date="2026-07-01" />

        <div className="mt-6">
          <KeyTakeaways
            takeaways={[
              'Baby eczema causes dry, red, rough, scaly patches that are often very itchy — it typically appears after 3 months of age.',
              'Baby acne looks like small red or white pimples on the face and usually resolves on its own within weeks to months without treatment.',
              'Location is a key difference: eczema appears on cheeks, arms, legs, and skin folds, while baby acne is limited to the face.',
              'See your doctor if the rash is spreading, looks infected, disrupts sleep, or does not improve with basic care.',
            ]}
          />
        </div>

        <ComparisonTable
          caption="Baby eczema vs baby acne comparison"
          headers={['Factor', 'Baby Eczema', 'Baby Acne']}
          rows={[
            [
              'Appearance',
              'Dry, red, rough, scaly patches',
              'Small red or white bumps, pimple-like',
            ],
            [
              'Location',
              'Cheeks, arms, legs, behind ears, skin folds',
              'Face — cheeks, nose, forehead, chin',
            ],
            [
              'Onset',
              'Usually after 3 months',
              '2-4 weeks old, sometimes at birth',
            ],
            [
              'Duration',
              'Chronic, flares and remits',
              'Resolves on its own within weeks to months',
            ],
            [
              'Itchy',
              'Yes, often very itchy',
              'Not itchy',
            ],
            [
              'Cause',
              'Genetic, immune-related, triggered by irritants',
              'Maternal hormones, developing oil glands',
            ],
            [
              'Treatment',
              'Moisturize, avoid triggers, prescription creams if needed',
              'Gentle cleansing, no treatment usually needed',
            ],
            [
              'See Doctor',
              'If spreading, infected, disrupting sleep',
              'If worsening after 3 months, or looks different from typical acne',
            ],
          ]}
          sourceNote="Sources: AAP, National Eczema Association"
        />

        <div className="prose prose-sm max-w-none space-y-6 mt-8">
          <section>
            <h2 className="text-base font-bold text-foreground mb-2">
              How to identify baby eczema
            </h2>
            <div className="text-sm text-muted leading-relaxed space-y-3">
              <p>
                Baby eczema (atopic dermatitis) typically appears as dry, red, rough patches on the
                skin. In infants, it most commonly shows up on the cheeks, forehead, and scalp, then
                may spread to the arms, legs, and trunk. The patches can look scaly or crusty and may
                weep or crack.
              </p>
              <p>
                The hallmark of eczema is <strong>itching</strong>. You may notice your baby
                scratching, rubbing their face against bedding, or being fussy and having trouble
                sleeping. Scratching can lead to broken skin and secondary infection.
              </p>
              <p>
                Common triggers include dry air, harsh soaps, fragrances, rough fabrics, heat and
                sweating, saliva (drool rash can overlap with eczema), and sometimes certain foods.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-base font-bold text-foreground mb-2">
              How to identify baby acne
            </h2>
            <div className="text-sm text-muted leading-relaxed space-y-3">
              <p>
                Baby acne (neonatal acne) appears as small red or white bumps on the face — typically
                the cheeks, nose, forehead, and chin. It looks similar to teenage acne but occurs in
                newborns, usually between 2-4 weeks of age.
              </p>
              <p>
                Unlike eczema, baby acne is <strong>not itchy</strong> and does not cause discomfort.
                It is caused by maternal hormones that are still circulating in the baby&apos;s system
                after birth, combined with immature oil glands.
              </p>
              <p>
                Baby acne resolves on its own, usually within a few weeks to months. No special
                treatment is needed — avoid scrubbing, applying lotions, or using acne products
                designed for adults or teens.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-base font-bold text-foreground mb-2">
              Skincare tips for both conditions
            </h2>
            <div className="text-sm text-muted leading-relaxed space-y-3">
              <p>
                Whether your baby has eczema, acne, or you are not sure which, these gentle skincare
                practices help:
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>Use a fragrance-free, gentle cleanser — avoid soaps with dyes or perfumes</li>
                <li>Bathe in lukewarm (not hot) water for no more than 5-10 minutes</li>
                <li>Pat skin dry gently — do not rub</li>
                <li>For eczema: apply a thick, fragrance-free moisturizer immediately after bathing while skin is still damp</li>
                <li>For acne: avoid applying oils, lotions, or adult acne products to the affected area</li>
                <li>Dress baby in soft, breathable fabrics — avoid wool and rough textures</li>
                <li>Keep baby&apos;s nails short to reduce scratching damage</li>
              </ul>
            </div>
          </section>
        </div>

        <div className="mt-8">
          <FAQSection items={faqItems} />
        </div>

        <BottomLine
          summary="Both baby eczema and baby acne are common and manageable. Baby acne is harmless and resolves on its own. Eczema requires ongoing management with moisturizing and trigger avoidance, but most children improve significantly over time. If you are unsure which condition your baby has, or if the skin looks infected, is spreading rapidly, or is disrupting your baby's sleep, talk to your pediatrician."
        />

        <div className="mt-6">
          <EditorialTrustBanner variant="compact" />
        </div>
      </div>
    </article>
  );
}
