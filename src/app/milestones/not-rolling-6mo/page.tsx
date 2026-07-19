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
  title: 'Baby Not Rolling at 6 Months',
  description:
    'Is it normal if your baby is not rolling over at 6 months? Learn when to worry, possible causes, and what to do next. Based on CDC and AAP developmental guidelines.',
  alternates: {
    canonical: '/milestones/not-rolling-6mo',
  },
  openGraph: {
    title: 'Baby Not Rolling at 6 Months | Is My Baby Alright?',
    description:
      'Is it normal if your baby is not rolling over at 6 months? Learn when to worry and what to do next.',
  },
};

const faqItems = [
  {
    question: 'When do most babies start rolling over?',
    answer:
      'Most babies roll from tummy to back between 4-5 months and from back to tummy by 5-6 months. The CDC lists rolling in both directions as a milestone by 6 months.',
  },
  {
    question: 'Should I worry if my 6-month-old is not rolling?',
    answer:
      'Not rolling at all by 6 months is listed as a CDC red flag that warrants a conversation with your pediatrician. However, some babies who get limited tummy time may be slightly delayed but catch up quickly once given more practice opportunities.',
  },
  {
    question: 'Can too much time in a bouncer delay rolling?',
    answer:
      'Yes. Excessive time in bouncers, swings, and containers limits the floor time babies need to develop rolling skills. The AAP recommends supervised tummy time starting from day one and increasing daily floor time as the baby grows.',
  },
  {
    question: 'Does my baby need physical therapy for not rolling?',
    answer:
      'Not necessarily. Your pediatrician will assess whether there are underlying concerns (like low muscle tone or asymmetry) that would benefit from physical therapy, or whether increased tummy time and practice opportunities are sufficient.',
  },
];

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Milestones', url: '/milestones' },
  { name: 'Missed Milestones', url: '/milestones/missed' },
  { name: 'Not Rolling at 6 Months' },
];

export default function NotRolling6moPage() {
  return (
    <article className="max-w-3xl mx-auto px-5 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getContentPageSchema({
              name: 'Baby Not Rolling at 6 Months',
              description:
                'Is it normal if your baby is not rolling over at 6 months? Learn when to worry, possible causes, and what to do next.',
              path: '/milestones/not-rolling-6mo',
              lastModified: '2026-07-18',
              medicalGuidelines: [
                { name: 'CDC Learn the Signs. Act Early.', url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html' },
                { name: 'AAP Motor Development Guidelines', url: 'https://www.aap.org/en/clinical-guidance/' },
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
          { label: 'Not Rolling at 6 Months' },
        ]}
      />

      <h1 className="text-2xl font-bold text-foreground mb-2">
        Baby Not Rolling Over at 6 Months
      </h1>
      <p className="text-sm text-muted mb-6">
        What&apos;s normal, when to worry, and what you can do to help.
      </p>

      <KeyTakeaways
        takeaways={[
          'Most babies roll tummy-to-back by 4-5 months and back-to-tummy by 5-6 months',
          'The CDC lists not rolling in either direction by 6 months as a developmental concern',
          'Limited tummy time and excessive container use are common modifiable causes',
          'Low muscle tone, torticollis, or asymmetry may also delay rolling',
          'Talk to your pediatrician if your baby is not rolling at all by 6 months',
          'Most babies who are late rollers catch up with increased floor time and practice',
        ]}
      />

      <div className="mb-6">
        <MedicalReviewAttribution sources={['CDC', 'AAP']} reviewDate="July 2026" />
      </div>

      <LastReviewed date="2026-07-18" />

      <section className="rounded-xl border border-[#E8E2D9] bg-white p-5 mt-6 mb-6">
        <h2 className="text-base font-bold text-foreground mb-2">What is normal?</h2>
        <div className="text-sm text-muted leading-relaxed space-y-3">
          <p>
            Rolling is one of the first major gross motor milestones. According to the CDC&apos;s
            2022 milestone checklist, most babies:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>Roll from tummy to back by 4-5 months</li>
            <li>Roll from back to tummy by 5-6 months</li>
            <li>Roll in both directions by 6 months</li>
          </ul>
          <p>
            Some babies roll early (as young as 3 months), while others take until closer to 7 months.
            However, the CDC considers not rolling in either direction by 6 months a sign that
            warrants discussion with your pediatrician.
          </p>
        </div>
      </section>

      <section className="rounded-xl border border-[#E8E2D9] bg-white p-5 mb-6">
        <h2 className="text-base font-bold text-foreground mb-2">When to worry</h2>
        <div className="text-sm text-muted leading-relaxed space-y-3">
          <p>Talk to your pediatrician if your 6-month-old:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Has not rolled in either direction (tummy to back or back to tummy)</li>
            <li>Seems very stiff with tight muscles, or very floppy like a rag doll</li>
            <li>Always rolls or turns to only one side</li>
            <li>Cannot hold their head steady when pulled to sitting</li>
            <li>Does not push up on arms during tummy time</li>
          </ul>
          <p>
            These signs suggest there may be an underlying issue — such as low muscle tone, torticollis,
            or a neurological concern — that could benefit from evaluation.
          </p>
        </div>
      </section>

      <section className="rounded-xl border border-[#E8E2D9] bg-white p-5 mb-6">
        <h2 className="text-base font-bold text-foreground mb-2">Possible causes</h2>
        <div className="text-sm text-muted leading-relaxed space-y-3">
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Limited tummy time:</strong> Babies need supervised floor time to build the core and upper body strength needed for rolling</li>
            <li><strong>Excessive container time:</strong> Too much time in swings, bouncers, and car seats limits opportunities to practice</li>
            <li><strong>Low muscle tone (hypotonia):</strong> Babies with low tone may need extra support to develop rolling skills</li>
            <li><strong>Torticollis:</strong> Tightness in neck muscles can make rolling to one side difficult</li>
            <li><strong>Prematurity:</strong> Premature babies should be assessed using adjusted age</li>
            <li><strong>Larger body size:</strong> Heavier babies sometimes take slightly longer to roll</li>
            <li><strong>Temperament:</strong> Some cautious babies prefer stability and are reluctant to initiate rolling</li>
          </ul>
        </div>
      </section>

      <section className="rounded-xl border border-[#E8E2D9] bg-white p-5 mb-6">
        <h2 className="text-base font-bold text-foreground mb-2">What you can do</h2>
        <div className="text-sm text-muted leading-relaxed space-y-3">
          <ul className="list-disc list-inside space-y-1">
            <li>Increase supervised tummy time to at least 30-60 minutes total per day (in shorter sessions)</li>
            <li>Minimize time in containers (swings, bouncers, car seats when not traveling)</li>
            <li>Place toys slightly to the side during tummy time to encourage reaching and weight-shifting</li>
            <li>Gently guide your baby through the rolling motion so they feel the movement</li>
            <li>Try placing your baby on their side with a rolled towel for support — this halfway position can help them learn the movement</li>
            <li>Make tummy time enjoyable by getting down at their level and engaging face-to-face</li>
          </ul>
        </div>
      </section>

      <section className="rounded-xl border border-[#E8E2D9] bg-white p-5 mb-6">
        <h2 className="text-base font-bold text-foreground mb-2">When to get evaluated</h2>
        <div className="text-sm text-muted leading-relaxed space-y-3">
          <p>
            If your baby is not rolling at all by 6 months, schedule a visit with your pediatrician.
            They may:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>Assess muscle tone and strength</li>
            <li>Check for torticollis or asymmetry</li>
            <li>Evaluate overall developmental progress</li>
            <li>Refer to physical therapy if needed</li>
            <li>Refer to early intervention for a comprehensive evaluation</li>
          </ul>
          <p>
            You can also contact your state&apos;s early intervention program directly — no referral is needed.
          </p>
        </div>
      </section>

      <section className="rounded-xl border border-primary/30 bg-primary-light p-5 mb-6">
        <h2 className="text-base font-bold text-foreground mb-2">Reassurance</h2>
        <div className="text-sm text-muted leading-relaxed space-y-3">
          <p>
            Many babies who are not rolling at 6 months catch up within a few weeks once given
            more floor time and practice opportunities. Rolling is a skill that requires core strength,
            coordination, and confidence — all of which improve with practice.
          </p>
          <p>
            If there is an underlying issue like low tone or torticollis, physical therapy is
            highly effective and most babies respond well to early intervention.
          </p>
        </div>
      </section>

      <FAQSection items={faqItems} />

      <BottomLine
        summary="Not rolling at 6 months is a CDC-listed concern that warrants a conversation with your pediatrician. In many cases, increased tummy time and floor play is all that's needed. If there's an underlying issue like low muscle tone or torticollis, early physical therapy is highly effective."
      />

      <div className="mt-6">
        <EditorialTrustBanner variant="compact" />
      </div>

      <div className="mt-10 pt-6 border-t border-border flex flex-wrap gap-4">
        <Link href="/milestones/missed" className="text-sm text-primary font-semibold hover:underline">
          Missed Milestones Hub
        </Link>
        <Link href="/milestones/not-sitting-9mo" className="text-sm text-primary font-semibold hover:underline">
          Not Sitting at 9 Months
        </Link>
        <Link href="/development/red-flags" className="text-sm text-primary font-semibold hover:underline">
          Developmental Red Flags
        </Link>
      </div>
    </article>
  );
}
