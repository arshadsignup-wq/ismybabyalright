import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import ComparisonTable from '@/components/shared/ComparisonTable';
import KeyTakeaways from '@/components/shared/KeyTakeaways';
import FAQSection from '@/components/shared/FAQSection';
import EditorialTrustBanner from '@/components/shared/EditorialTrustBanner';
import LastReviewed from '@/components/shared/LastReviewed';
import MedicalReviewAttribution from "@/components/shared/MedicalReviewAttribution";
import BottomLine from '@/components/shared/BottomLine';
import { getBreadcrumbSchema, getContentPageSchema, getFAQPageSchema } from '@/lib/seo';
import { CAR_SEAT_STAGES } from '@/data/car-seat/data';

export const metadata: Metadata = {
  title: 'Rear-Facing vs Forward-Facing Car Seats: AAP Safety Guidelines',
  description:
    'Compare rear-facing and forward-facing car seats. Learn AAP guidelines for when to switch, crash protection differences, weight and height limits, and state laws.',
  alternates: { canonical: '/safety/rear-facing-vs-forward-facing' },
  openGraph: {
    title: 'Rear-Facing vs Forward-Facing Car Seats: AAP Safety Guidelines | Is My Baby Alright?',
    description:
      'Compare rear-facing and forward-facing car seats. Learn AAP guidelines for when to switch, crash protection differences, weight and height limits, and state laws.',
  },
};

const faqItems = [
  {
    question: 'When should I switch my child from rear-facing to forward-facing?',
    answer:
      'The AAP recommends keeping your child rear-facing as long as possible, until they exceed the maximum height or weight limit of their rear-facing car seat. Many convertible seats allow rear-facing up to 40-50 lbs. Do not switch to forward-facing based on age alone — always go by the seat\'s limits.',
  },
  {
    question: 'My child\'s legs are cramped rear-facing. Is that dangerous?',
    answer:
      'No. Children are flexible, and sitting with bent or crossed legs is comfortable and safe. In a crash, leg injuries are extremely rare in rear-facing seats. In contrast, forward-facing children are far more likely to experience head, neck, and spinal cord injuries. Bent legs are not a reason to switch to forward-facing.',
  },
  {
    question: 'Can I use a convertible seat from birth instead of an infant carrier?',
    answer:
      'Yes. Many convertible seats are rated for newborns starting at 4-5 lbs. They can be used rear-facing from birth and then converted to forward-facing when the child outgrows the rear-facing limits. The trade-off is that convertible seats do not have a detachable carrier, so you cannot easily move a sleeping baby.',
  },
];

const breadcrumbSchemaItems = [
  { name: 'Home', url: '/' },
  { name: 'Safety', url: '/safety' },
  { name: 'Rear-Facing vs Forward-Facing' },
];

export default function RearFacingVsForwardFacingPage() {
  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getContentPageSchema({
              name: 'Rear-Facing vs Forward-Facing Car Seats: AAP Safety Guidelines',
              description:
                'Compare rear-facing and forward-facing car seats. Learn AAP guidelines for when to switch, crash protection differences, weight and height limits, and state laws.',
              path: '/safety/rear-facing-vs-forward-facing',
              lastModified: '2026-07-01',
              medicalGuidelines: [
                { name: 'AAP Car Seat Safety Guidelines', url: 'https://www.aap.org/en/clinical-guidance/' },
                { name: 'NHTSA Car Seat Recommendations', url: 'https://www.nhtsa.gov/equipment/car-seats-and-booster-seats' },
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

      <Breadcrumbs items={[{ label: 'Safety', href: '/safety' }, { label: 'Rear-Facing vs Forward-Facing' }]} />

      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        <h1 className="text-2xl font-bold text-foreground mb-2">
          Rear-Facing vs Forward-Facing Car Seats: AAP Safety Guidelines
        </h1>

        <p className="text-sm text-muted leading-relaxed mb-4">
          Rear-facing and forward-facing car seats provide different levels of crash protection for children
          at different ages. The AAP strongly recommends keeping children rear-facing as long as possible,
          ideally until they outgrow the height or weight limit of their rear-facing seat.
        </p>

        <MedicalReviewAttribution sources={['AAP', 'NHTSA']} />
        <LastReviewed date="2026-07-01" />

        <div className="mt-6">
          <KeyTakeaways
            takeaways={[
              'Rear-facing car seats are the safest option for young children — they distribute crash force across the entire back, neck, and spine.',
              'The AAP recommends keeping children rear-facing as long as possible, until they exceed the height or weight limit of their rear-facing seat.',
              'Children should be at least 2 years old before switching to forward-facing, and only if they have outgrown the rear-facing limits.',
              'Both rear-facing and forward-facing seats should use a 5-point harness for maximum protection.',
            ]}
          />
        </div>

        <ComparisonTable
          caption="Rear-facing vs forward-facing car seat comparison"
          headers={['Factor', 'Rear-Facing', 'Forward-Facing']}
          rows={[
            [
              'Crash Protection',
              'Distributes force across the entire back, neck, and spine',
              'Restrains via harness, more force on the neck',
            ],
            [
              'AAP Minimum Age',
              'Birth',
              'At least 2 years',
            ],
            [
              'Weight Limit',
              'Up to 40-50 lbs depending on seat',
              '20-65 lbs',
            ],
            [
              'Height Limit',
              'Varies by seat, typically 30-49 in',
              'Up to 49 in',
            ],
            [
              'State Laws',
              'Required until at least age 2 in most states',
              'Varies by state',
            ],
            [
              'When to Switch',
              'When child exceeds RF weight or height limit',
              'When child exceeds FF weight or height limit',
            ],
            [
              'Harness',
              '5-point harness',
              '5-point harness',
            ],
          ]}
          sourceNote="Sources: AAP, NHTSA, Safe Kids Worldwide"
        />

        <div className="prose prose-sm max-w-none space-y-6 mt-8">
          <section>
            <h2 className="text-base font-bold text-foreground mb-2">
              Why is rear-facing safer? The crash physics
            </h2>
            <div className="text-sm text-muted leading-relaxed space-y-3">
              <p>
                In a frontal crash — the most common and most deadly type — a rear-facing seat cradles the
                child and spreads the crash force across the entire torso, back, and head. The seat itself
                absorbs the impact, rather than the child&apos;s body.
              </p>
              <p>
                In a forward-facing seat, the harness restrains the child, but the head — which is
                proportionally much heavier in young children — is thrown forward. This creates enormous
                force on the neck and spinal cord. A toddler&apos;s spine is not fully ossified (hardened)
                until around age 3-6, making it especially vulnerable to stretching injuries.
              </p>
              <p>
                Research shows that rear-facing seats reduce the risk of serious injury by up to 5 times
                compared to forward-facing seats for children under 2.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-base font-bold text-foreground mb-2">
              When to transition from rear-facing to forward-facing
            </h2>
            <div className="text-sm text-muted leading-relaxed space-y-3">
              <p>
                The transition should be based on your car seat&apos;s weight and height limits — not on
                your child&apos;s age alone. Check your specific seat&apos;s manual for the maximum
                rear-facing weight and height. When your child exceeds <strong>either</strong> limit,
                it is time to switch.
              </p>
              <p>
                Signs it may be time to transition:
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li>The top of your child&apos;s head is within 1 inch of the top of the seat shell</li>
                <li>Your child exceeds the seat&apos;s rear-facing weight limit</li>
                <li>Your child exceeds the seat&apos;s rear-facing height limit</li>
              </ul>
              <p>
                When you do switch to forward-facing, always use the top tether strap. The top tether
                reduces forward head movement by 4-6 inches in a crash and is one of the most overlooked
                safety features.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-base font-bold text-foreground mb-2">
              All car seat stages at a glance
            </h2>
            <div className="text-sm text-muted leading-relaxed mb-3">
              <p>
                Car seat safety extends beyond the rear-facing vs forward-facing question. Here is every
                stage your child will go through:
              </p>
            </div>
            <ComparisonTable
              caption="Car seat stages from birth through seat belt"
              headers={['Stage', 'Age Range', 'Weight Range', 'Direction']}
              rows={CAR_SEAT_STAGES.map((stage) => [
                stage.name,
                stage.ageRange,
                stage.weightRange,
                stage.direction,
              ])}
              sourceNote="Source: AAP, NHTSA. Always check your specific seat's manual for exact limits."
            />
            <p className="text-sm text-muted mt-3">
              <Link href="/tools/car-seat" className="text-primary hover:underline font-semibold">
                Use the car seat guide tool to find the right seat for your child &rarr;
              </Link>
            </p>
          </section>
        </div>

        <div className="mt-8">
          <FAQSection items={faqItems} />
        </div>

        <BottomLine
          summary="Keep your child rear-facing as long as possible — it is the single most effective way to protect them in a crash. Do not rush the switch to forward-facing. When you do transition, always use the 5-point harness and top tether strap. Check your specific seat's weight and height limits rather than going by age alone."
        />

        <div className="mt-6">
          <EditorialTrustBanner variant="compact" />
        </div>
      </div>
    </article>
  );
}
