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
  title: 'Baby Not Sitting at 9 Months',
  description:
    'Is it normal if your baby cannot sit independently at 9 months? Learn when to worry, possible causes, and what to do. Based on CDC and AAP guidelines.',
  alternates: {
    canonical: '/milestones/not-sitting-9mo',
  },
  openGraph: {
    title: 'Baby Not Sitting at 9 Months | Is My Baby Alright?',
    description:
      'Is it normal if your baby cannot sit independently at 9 months? Learn when to worry and what to do.',
  },
};

const faqItems = [
  {
    question: 'When do most babies sit independently?',
    answer:
      'Most babies sit with support by 6 months and sit independently (without using hands for balance) by 7-9 months. The CDC lists sitting without support as a milestone by 9 months.',
  },
  {
    question: 'What is the difference between sitting with support and sitting independently?',
    answer:
      'Sitting with support means the baby can sit upright when propped or using their hands on the floor for balance. Sitting independently means the baby can sit upright with hands free to play, maintaining balance without any assistance.',
  },
  {
    question: 'Can a baby skip sitting and go straight to standing?',
    answer:
      'This is uncommon. Sitting requires core strength that is foundational for later skills. A baby who pulls to stand but cannot sit independently should be evaluated, as this may suggest atypical movement patterns.',
  },
  {
    question: 'Does not sitting at 9 months mean cerebral palsy?',
    answer:
      'Not sitting alone does not mean your baby has cerebral palsy. Many causes of delayed sitting are benign, including low muscle tone, limited practice, or prematurity. However, persistent inability to sit combined with abnormal muscle tone should be evaluated by your pediatrician.',
  },
];

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Milestones', url: '/milestones' },
  { name: 'Missed Milestones', url: '/milestones/missed' },
  { name: 'Not Sitting at 9 Months' },
];

export default function NotSitting9moPage() {
  return (
    <article className="max-w-3xl mx-auto px-5 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getContentPageSchema({
              name: 'Baby Not Sitting at 9 Months',
              description:
                'Is it normal if your baby cannot sit independently at 9 months? Learn when to worry, possible causes, and what to do.',
              path: '/milestones/not-sitting-9mo',
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
          { label: 'Not Sitting at 9 Months' },
        ]}
      />

      <h1 className="text-2xl font-bold text-foreground mb-2">
        Baby Not Sitting at 9 Months
      </h1>
      <p className="text-sm text-muted mb-6">
        What&apos;s normal, when to worry, and how to support your baby&apos;s development.
      </p>

      <KeyTakeaways
        takeaways={[
          'Most babies sit independently (hands-free) by 7-9 months',
          'The CDC lists not sitting without support by 9 months as a concern',
          'Common modifiable causes include limited floor time and excessive container use',
          'Low muscle tone, prematurity, and neurological conditions can also delay sitting',
          'A baby not sitting at 9 months should be evaluated by their pediatrician',
          'Physical therapy is highly effective for most babies with sitting delays',
        ]}
      />

      <div className="mb-6">
        <MedicalReviewAttribution sources={['CDC', 'AAP']} reviewDate="July 2026" />
      </div>

      <LastReviewed date="2026-07-18" />

      <section className="rounded-xl border border-[#E8E2D9] bg-white p-5 mt-6 mb-6">
        <h2 className="text-base font-bold text-foreground mb-2">What is normal?</h2>
        <div className="text-sm text-muted leading-relaxed space-y-3">
          <p>Independent sitting develops in stages:</p>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>5-6 months:</strong> Sits with support (tripod sitting — using hands on the floor for balance)</li>
            <li><strong>6-7 months:</strong> Sits with minimal support, may topple occasionally</li>
            <li><strong>7-9 months:</strong> Sits independently with hands free to play</li>
            <li><strong>9 months:</strong> Sits confidently and can pivot/turn while sitting</li>
          </ul>
          <p>
            The CDC&apos;s 2022 milestone checklist includes &ldquo;sits without support&rdquo; as a
            milestone by 9 months. Not being able to sit without support by this age is considered
            a concern.
          </p>
        </div>
      </section>

      <section className="rounded-xl border border-[#E8E2D9] bg-white p-5 mb-6">
        <h2 className="text-base font-bold text-foreground mb-2">When to worry</h2>
        <div className="text-sm text-muted leading-relaxed space-y-3">
          <p>Talk to your pediatrician if your 9-month-old:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Cannot sit at all, even with support</li>
            <li>Sits only with hands propped on the floor (tripod sitting) and cannot free their hands</li>
            <li>Falls over frequently and cannot catch themselves</li>
            <li>Seems very stiff or very floppy when held</li>
            <li>Shows a strong preference for leaning to one side</li>
            <li>Has not rolled over and is not bearing weight on legs</li>
            <li>Has lost sitting ability they previously had</li>
          </ul>
        </div>
      </section>

      <section className="rounded-xl border border-[#E8E2D9] bg-white p-5 mb-6">
        <h2 className="text-base font-bold text-foreground mb-2">Possible causes</h2>
        <div className="text-sm text-muted leading-relaxed space-y-3">
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Low muscle tone (hypotonia):</strong> The most common reason for delayed sitting; babies with low tone need more time to develop core strength</li>
            <li><strong>Limited floor time:</strong> Babies who spend excessive time in containers miss opportunities to practice balance</li>
            <li><strong>Prematurity:</strong> Use adjusted age — a baby born 2 months early may sit independently by 9-11 months chronological age</li>
            <li><strong>Large head size:</strong> A proportionally larger head can make balance more challenging</li>
            <li><strong>Neurological conditions:</strong> Including cerebral palsy, though this is typically accompanied by other signs</li>
            <li><strong>Genetic conditions:</strong> Some genetic syndromes include low muscle tone as a feature</li>
          </ul>
        </div>
      </section>

      <section className="rounded-xl border border-[#E8E2D9] bg-white p-5 mb-6">
        <h2 className="text-base font-bold text-foreground mb-2">What you can do</h2>
        <div className="text-sm text-muted leading-relaxed space-y-3">
          <ul className="list-disc list-inside space-y-1">
            <li>Provide plenty of supervised floor time daily</li>
            <li>Practice supported sitting with your baby between your legs or propped with a nursing pillow</li>
            <li>Place engaging toys at sitting-height to motivate upright play</li>
            <li>Minimize time in bouncers, swings, and other containers</li>
            <li>Encourage reaching for toys while supported sitting to build balance reactions</li>
            <li>Allow your baby to experience brief moments of unsupported sitting with you close by for safety</li>
          </ul>
        </div>
      </section>

      <section className="rounded-xl border border-[#E8E2D9] bg-white p-5 mb-6">
        <h2 className="text-base font-bold text-foreground mb-2">When to get evaluated</h2>
        <div className="text-sm text-muted leading-relaxed space-y-3">
          <p>
            If your baby cannot sit independently by 9 months, schedule an appointment with your
            pediatrician. They will likely:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>Assess muscle tone (too high or too low)</li>
            <li>Evaluate core strength and trunk control</li>
            <li>Check overall developmental progress across all areas</li>
            <li>Review birth history and risk factors</li>
            <li>Refer to physical therapy or early intervention if indicated</li>
          </ul>
          <p>
            You can also self-refer to your state&apos;s early intervention program for a free
            developmental evaluation — no doctor&apos;s referral required.
          </p>
        </div>
      </section>

      <section className="rounded-xl border border-primary/30 bg-primary-light p-5 mb-6">
        <h2 className="text-base font-bold text-foreground mb-2">Reassurance</h2>
        <div className="text-sm text-muted leading-relaxed space-y-3">
          <p>
            Many babies who are late sitters simply need more floor time and practice opportunities.
            Low muscle tone — the most common cause of delayed sitting — often improves significantly
            with physical therapy and targeted exercises.
          </p>
          <p>
            The fact that you are aware of the milestone and seeking information means you are
            already advocating for your child. Early evaluation and intervention, when needed,
            lead to the best outcomes.
          </p>
        </div>
      </section>

      <FAQSection items={faqItems} />

      <BottomLine
        summary="A baby not sitting independently by 9 months should be evaluated by their pediatrician. While many cases are resolved with more floor time and practice, some babies benefit from physical therapy. Low muscle tone is the most common cause and responds well to intervention. Contact your pediatrician or early intervention program for evaluation."
      />

      <div className="mt-6">
        <EditorialTrustBanner variant="compact" />
      </div>

      <div className="mt-10 pt-6 border-t border-border flex flex-wrap gap-4">
        <Link href="/milestones/missed" className="text-sm text-primary font-semibold hover:underline">
          Missed Milestones Hub
        </Link>
        <Link href="/milestones/not-rolling-6mo" className="text-sm text-primary font-semibold hover:underline">
          Not Rolling at 6 Months
        </Link>
        <Link href="/milestones/not-crawling-12mo" className="text-sm text-primary font-semibold hover:underline">
          Not Crawling at 12 Months
        </Link>
      </div>
    </article>
  );
}
