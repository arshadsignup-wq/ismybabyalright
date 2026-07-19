import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import KeyTakeaways from '@/components/shared/KeyTakeaways';
import FAQSection from '@/components/shared/FAQSection';
import BottomLine from '@/components/shared/BottomLine';
import EditorialTrustBanner from '@/components/shared/EditorialTrustBanner';
import MedicalReviewAttribution from '@/components/shared/MedicalReviewAttribution';
import LastReviewed from '@/components/shared/LastReviewed';
import { getBreadcrumbSchema, getContentPageSchema, getFAQPageSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Baby Not Walking at 15 Months',
  description:
    'Is it normal if your baby is not walking at 15 months? Learn the normal range for first steps, when to worry, and what to do. Based on CDC and AAP guidelines.',
  alternates: {
    canonical: '/milestones/not-walking-15mo',
  },
  openGraph: {
    title: 'Baby Not Walking at 15 Months | Is My Baby Alright?',
    description:
      'Is it normal if your baby is not walking at 15 months? Learn the normal range and when to worry.',
  },
};

const faqItems = [
  {
    question: 'When do most babies start walking?',
    answer:
      'Most babies take their first independent steps between 9-12 months and walk well by 14-15 months. The normal range extends to 18 months. Not walking at 15 months is still within normal variation, though it warrants monitoring.',
  },
  {
    question: 'Is 15 months too late to start walking?',
    answer:
      'No. Fifteen months is still within the normal range for starting to walk. The CDC considers not walking by 18 months a concern that requires evaluation. A 15-month-old who is cruising and pulling up is likely to walk soon.',
  },
  {
    question: 'Does cruising count as walking?',
    answer:
      'Cruising (walking while holding onto furniture) is the developmental step immediately before independent walking. A baby who is cruising well at 15 months is showing appropriate progression and will likely walk independently soon.',
  },
  {
    question: 'Do late walkers have other developmental problems?',
    answer:
      'Not necessarily. Many late walkers are completely typical in all other areas of development. However, if walking delay is accompanied by delays in other areas (language, social, fine motor), a comprehensive evaluation is recommended.',
  },
];

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Milestones', url: '/milestones' },
  { name: 'Missed Milestones', url: '/milestones/missed' },
  { name: 'Not Walking at 15 Months' },
];

export default function NotWalking15moPage() {
  return (
    <article className="max-w-3xl mx-auto px-5 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getContentPageSchema({
              name: 'Baby Not Walking at 15 Months',
              description:
                'Is it normal if your baby is not walking at 15 months? Learn the normal range for first steps, when to worry, and what to do.',
              path: '/milestones/not-walking-15mo',
              lastModified: '2026-07-18',
              medicalGuidelines: [
                { name: 'CDC Learn the Signs. Act Early.', url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html' },
                { name: 'AAP Bright Futures Guidelines', url: 'https://www.aap.org/en/practice-management/bright-futures/' },
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getBreadcrumbSchema(breadcrumbItems)) }}
      />

      <Breadcrumbs
        items={[
          { label: 'Milestones', href: '/milestones' },
          { label: 'Missed Milestones', href: '/milestones/missed' },
          { label: 'Not Walking at 15 Months' },
        ]}
      />

      <h1 className="text-2xl font-bold text-foreground mb-2">
        Baby Not Walking at 15 Months
      </h1>
      <p className="text-sm text-muted mb-6">
        Still within normal range — but here is what to watch for.
      </p>

      <KeyTakeaways
        takeaways={[
          'The normal range for independent walking extends from 9 to 18 months',
          'Not walking at 15 months is within normal variation if the child is cruising or pulling up',
          'The CDC considers not walking by 18 months a red flag requiring evaluation',
          'A child who is progressing (pulling up, cruising, standing alone) is likely to walk soon',
          'Late walkers who are otherwise developing normally rarely have underlying problems',
          'Talk to your pediatrician if your child is not pulling up or cruising by 12-13 months',
        ]}
      />

      <div className="mb-6">
        <MedicalReviewAttribution sources={['CDC', 'AAP']} reviewDate="July 2026" />
      </div>

      <LastReviewed date="2026-07-18" />

      <section className="rounded-xl border border-[#E8E2D9] bg-white p-5 mt-6 mb-6">
        <h2 className="text-base font-bold text-foreground mb-2">What is normal?</h2>
        <div className="text-sm text-muted leading-relaxed space-y-3">
          <p>Walking develops through predictable stages:</p>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>8-10 months:</strong> Pulling to stand</li>
            <li><strong>9-12 months:</strong> Cruising along furniture</li>
            <li><strong>9-12 months:</strong> Standing alone briefly</li>
            <li><strong>9-15 months:</strong> First independent steps</li>
            <li><strong>12-18 months:</strong> Walking well independently</li>
          </ul>
          <p>
            The CDC&apos;s 2022 milestone checklist lists &ldquo;takes a few steps on their own&rdquo;
            as a milestone by 12 months, and &ldquo;walks without holding on to anything&rdquo; by 18
            months. The broad range reflects the significant normal variation in walking onset.
          </p>
          <p>
            At 15 months, your baby is still within the normal range. Many healthy, typically
            developing children do not walk until 14-16 months.
          </p>
        </div>
      </section>

      <section className="rounded-xl border border-[#E8E2D9] bg-white p-5 mb-6">
        <h2 className="text-base font-bold text-foreground mb-2">When to worry</h2>
        <div className="text-sm text-muted leading-relaxed space-y-3">
          <p>Talk to your pediatrician if your 15-month-old:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Is not pulling to stand at all</li>
            <li>Cannot cruise along furniture</li>
            <li>Cannot stand when holding your hands</li>
            <li>Has very stiff legs or walks only on tiptoes</li>
            <li>Shows significant asymmetry (strongly favoring one side)</li>
            <li>Has lost motor skills they previously had</li>
            <li>Has delays in other developmental areas (language, social, cognitive)</li>
          </ul>
          <p>
            If your child IS pulling up, cruising, or taking a few steps with hands held, they are
            progressing and likely to walk independently within the next few weeks to months.
          </p>
        </div>
      </section>

      <section className="rounded-xl border border-[#E8E2D9] bg-white p-5 mb-6">
        <h2 className="text-base font-bold text-foreground mb-2">Possible causes of late walking</h2>
        <div className="text-sm text-muted leading-relaxed space-y-3">
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Normal variation:</strong> The most common reason — many healthy children simply walk later</li>
            <li><strong>Temperament:</strong> Cautious children may take longer to let go and take independent steps</li>
            <li><strong>Efficient crawling:</strong> Babies who are fast crawlers may be less motivated to walk</li>
            <li><strong>Prematurity:</strong> Use adjusted age until age 2</li>
            <li><strong>Family history:</strong> Late walking often runs in families</li>
            <li><strong>Low muscle tone:</strong> Mild hypotonia can delay walking onset</li>
            <li><strong>Joint laxity:</strong> Very flexible joints can make balance more challenging</li>
            <li><strong>Larger body size:</strong> Heavier children may walk slightly later</li>
          </ul>
        </div>
      </section>

      <section className="rounded-xl border border-[#E8E2D9] bg-white p-5 mb-6">
        <h2 className="text-base font-bold text-foreground mb-2">What you can do</h2>
        <div className="text-sm text-muted leading-relaxed space-y-3">
          <ul className="list-disc list-inside space-y-1">
            <li>Provide safe, open spaces for your child to practice standing and cruising</li>
            <li>Offer push toys (not walkers with seats) that your child can hold while stepping</li>
            <li>Hold your child&apos;s hands and walk together</li>
            <li>Place motivating objects (toys, snacks) on low furniture to encourage cruising</li>
            <li>Let your child stand barefoot on varied surfaces to build balance and sensory feedback</li>
            <li>Avoid baby walkers — the AAP recommends against them for safety and developmental reasons</li>
            <li>Celebrate every attempt, even if your baby sits back down after one step</li>
          </ul>
        </div>
      </section>

      <section className="rounded-xl border border-[#E8E2D9] bg-white p-5 mb-6">
        <h2 className="text-base font-bold text-foreground mb-2">When to get evaluated</h2>
        <div className="text-sm text-muted leading-relaxed space-y-3">
          <p>
            While 15 months is still within the normal range, you should schedule an evaluation if:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>Your child is not pulling to stand or cruising at all</li>
            <li>You notice stiffness, limpness, or asymmetry in leg movement</li>
            <li>There are delays in other developmental areas</li>
            <li>Your child was premature and is not walking by 15 months adjusted age</li>
          </ul>
          <p>
            If your child turns 18 months without walking independently, evaluation is recommended
            regardless of other factors. Contact your pediatrician or your state&apos;s early
            intervention program.
          </p>
        </div>
      </section>

      <section className="rounded-xl border border-primary/30 bg-primary-light p-5 mb-6">
        <h2 className="text-base font-bold text-foreground mb-2">Reassurance</h2>
        <div className="text-sm text-muted leading-relaxed space-y-3">
          <p>
            Most babies who are not walking at 15 months will walk within the next few weeks to
            months without any intervention needed. Research shows that the age of walking onset
            (within the normal range) does not predict later athletic ability, intelligence, or
            developmental outcomes.
          </p>
          <p>
            If your baby is pulling up, cruising, and standing alone briefly, they are building
            the strength, balance, and confidence needed for independent steps. It is often just
            a matter of time.
          </p>
        </div>
      </section>

      <FAQSection items={faqItems} />

      <BottomLine
        summary="Not walking at 15 months is still within the normal range (9-18 months). If your child is pulling up and cruising, they are progressing and will likely walk soon. Talk to your pediatrician if your child is not pulling up at all, shows asymmetry or stiffness, or has delays in other areas. The CDC recommends evaluation if walking has not started by 18 months."
      />

      <div className="mt-6">
        <EditorialTrustBanner variant="compact" />
      </div>

      <div className="mt-10 pt-6 border-t border-border flex flex-wrap gap-4">
        <Link href="/milestones/missed" className="text-sm text-primary font-semibold hover:underline">
          Missed Milestones Hub
        </Link>
        <Link href="/milestones/not-walking-18mo" className="text-sm text-primary font-semibold hover:underline">
          Not Walking at 18 Months
        </Link>
        <Link href="/milestones/early-vs-late-walkers" className="text-sm text-primary font-semibold hover:underline">
          Early vs Late Walkers
        </Link>
      </div>
    </article>
  );
}
