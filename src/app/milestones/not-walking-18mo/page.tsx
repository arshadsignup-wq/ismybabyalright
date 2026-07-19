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
  title: 'Toddler Not Walking at 18 Months',
  description:
    'A toddler not walking at 18 months should be evaluated. Learn what causes late walking, what your pediatrician will check, and what to expect. Based on CDC and AAP guidelines.',
  alternates: {
    canonical: '/milestones/not-walking-18mo',
  },
  openGraph: {
    title: 'Toddler Not Walking at 18 Months | Is My Baby Alright?',
    description:
      'A toddler not walking at 18 months should be evaluated. Learn what causes late walking and what to expect.',
  },
};

const faqItems = [
  {
    question: 'Is it normal for a toddler not to walk at 18 months?',
    answer:
      'While a small percentage of typically developing children walk after 18 months, the CDC lists not walking by 18 months as a red flag that requires evaluation. Most children walk by 14-15 months, and 18 months is the upper limit of the typical range.',
  },
  {
    question: 'What will the pediatrician check if my 18-month-old is not walking?',
    answer:
      'Your pediatrician will assess muscle tone, reflexes, strength, joint flexibility, and coordination. They may also check for hip dysplasia, neurological signs, and overall developmental progress. Blood tests or imaging may be ordered in some cases.',
  },
  {
    question: 'Can physical therapy help a late walker?',
    answer:
      'Yes. Physical therapy is very effective for helping late walkers. A pediatric physical therapist can identify specific areas of weakness or difficulty and provide targeted exercises. Many children begin walking within weeks to months of starting PT.',
  },
  {
    question: 'Does not walking at 18 months mean my child has cerebral palsy?',
    answer:
      'Not walking at 18 months alone does not mean cerebral palsy. Many causes of late walking are benign (low tone, cautious temperament, family pattern). However, delayed walking combined with abnormal muscle tone, reflexes, or asymmetry should be evaluated for neurological conditions.',
  },
];

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Milestones', url: '/milestones' },
  { name: 'Missed Milestones', url: '/milestones/missed' },
  { name: 'Not Walking at 18 Months' },
];

export default function NotWalking18moPage() {
  return (
    <article className="max-w-3xl mx-auto px-5 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getContentPageSchema({
              name: 'Toddler Not Walking at 18 Months',
              description:
                'A toddler not walking at 18 months should be evaluated. Learn what causes late walking, what your pediatrician will check, and what to expect.',
              path: '/milestones/not-walking-18mo',
              lastModified: '2026-07-18',
              medicalGuidelines: [
                { name: 'CDC Learn the Signs. Act Early.', url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html' },
                { name: 'AAP Developmental Surveillance', url: 'https://publications.aap.org/pediatrics/article/145/1/e20193449/36971' },
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
          { label: 'Not Walking at 18 Months' },
        ]}
      />

      <h1 className="text-2xl font-bold text-foreground mb-2">
        Toddler Not Walking at 18 Months
      </h1>
      <p className="text-sm text-muted mb-6">
        This is a CDC-listed red flag — here is what to do and what to expect.
      </p>

      <KeyTakeaways
        takeaways={[
          'Not walking by 18 months is a CDC red flag that warrants evaluation',
          'Most children walk by 14-15 months; 18 months is the upper limit of normal',
          'Common causes include low muscle tone, joint laxity, and familial late walking',
          'Your pediatrician will assess muscle tone, reflexes, strength, and overall development',
          'Physical therapy is highly effective for most late walkers',
          'Early intervention services are free and available without a doctor\'s referral',
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
            The typical range for independent walking is 9-18 months, with most children walking
            by 14-15 months. According to the CDC&apos;s 2022 milestone checklist:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>First steps typically occur between 9-15 months</li>
            <li>Walking well (steady, coordinated) typically develops by 14-18 months</li>
            <li>18 months is considered the upper limit of the normal range</li>
            <li>Not walking by 18 months is an &ldquo;act early&rdquo; warning sign</li>
          </ul>
          <p>
            While a small percentage of typically developing children walk after 18 months,
            this warrants evaluation to rule out underlying causes.
          </p>
        </div>
      </section>

      <section className="rounded-xl border-2 border-concern bg-white p-5 mb-6">
        <h2 className="text-base font-bold text-concern mb-2">When to worry</h2>
        <div className="text-sm text-muted leading-relaxed space-y-3">
          <p>
            Not walking at 18 months itself is a concern that should be evaluated. Seek
            evaluation more urgently if your toddler also:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>Cannot pull to stand or cruise along furniture</li>
            <li>Has very stiff legs or walks only on tiptoes (when supported)</li>
            <li>Seems very floppy or has poor head control for age</li>
            <li>Shows asymmetry — one side clearly weaker than the other</li>
            <li>Has delays in other areas (language, social, fine motor)</li>
            <li>Has lost motor skills they previously had</li>
            <li>Cannot sit independently or has poor balance</li>
          </ul>
        </div>
      </section>

      <section className="rounded-xl border border-[#E8E2D9] bg-white p-5 mb-6">
        <h2 className="text-base font-bold text-foreground mb-2">Possible causes</h2>
        <div className="text-sm text-muted leading-relaxed space-y-3">
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Low muscle tone (hypotonia):</strong> The most common identifiable cause of late walking</li>
            <li><strong>Joint hypermobility:</strong> Very flexible joints make balance more challenging</li>
            <li><strong>Familial pattern:</strong> Late walking can run in families (benign familial late walking)</li>
            <li><strong>Prematurity:</strong> Use adjusted age — a baby born 3 months early may walk by 21 months chronological age and still be on track</li>
            <li><strong>Cerebral palsy:</strong> Usually accompanied by abnormal tone, reflexes, or asymmetry</li>
            <li><strong>Muscular dystrophy:</strong> Progressive muscle weakness; rare but important to consider</li>
            <li><strong>Hip dysplasia:</strong> Undiagnosed hip problems can delay walking</li>
            <li><strong>Vitamin D deficiency/rickets:</strong> Can cause bone and muscle weakness</li>
            <li><strong>Cautious temperament:</strong> Some children are physically capable but choose not to let go</li>
          </ul>
        </div>
      </section>

      <section className="rounded-xl border border-[#E8E2D9] bg-white p-5 mb-6">
        <h2 className="text-base font-bold text-foreground mb-2">What you can do</h2>
        <div className="text-sm text-muted leading-relaxed space-y-3">
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Schedule a pediatrician appointment</strong> — not walking at 18 months warrants professional evaluation</li>
            <li>Request referral to a pediatric physical therapist</li>
            <li>Contact your state&apos;s early intervention program for a free evaluation</li>
            <li>Provide safe spaces for standing and cruising practice</li>
            <li>Use push toys (not seated walkers) to encourage stepping</li>
            <li>Let your child walk barefoot on varied surfaces</li>
            <li>Avoid carrying your child when they can practice standing and cruising</li>
            <li>Celebrate attempts — even standing alone for a few seconds is progress</li>
          </ul>
        </div>
      </section>

      <section className="rounded-xl border border-[#E8E2D9] bg-white p-5 mb-6">
        <h2 className="text-base font-bold text-foreground mb-2">What the evaluation involves</h2>
        <div className="text-sm text-muted leading-relaxed space-y-3">
          <p>Your pediatrician or specialist will likely:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Assess muscle tone (hyper- or hypotonia)</li>
            <li>Check reflexes and neurological signs</li>
            <li>Evaluate hip joints for stability and range of motion</li>
            <li>Assess overall strength and coordination</li>
            <li>Review complete developmental history</li>
            <li>Screen for other developmental delays</li>
            <li>Possibly order blood work (CK levels, vitamin D, thyroid function)</li>
            <li>Possibly order imaging (hip X-ray or brain MRI in select cases)</li>
          </ul>
          <p>
            In many cases, the evaluation reveals benign causes (low tone, hypermobility, or
            cautious temperament) that respond well to physical therapy.
          </p>
        </div>
      </section>

      <section className="rounded-xl border border-primary/30 bg-primary-light p-5 mb-6">
        <h2 className="text-base font-bold text-foreground mb-2">Reassurance</h2>
        <div className="text-sm text-muted leading-relaxed space-y-3">
          <p>
            While not walking at 18 months requires evaluation, the outcome is often reassuring.
            Many children who are late walkers have benign causes (particularly low muscle tone
            or familial late walking) that resolve with physical therapy or time.
          </p>
          <p>
            The purpose of evaluation is not to label your child but to identify whether support
            is needed and to access it early. If physical therapy is recommended, most children
            make rapid progress once targeted support begins.
          </p>
        </div>
      </section>

      <FAQSection items={faqItems} />

      <BottomLine
        summary="Not walking at 18 months is a CDC-listed red flag that requires professional evaluation. Schedule an appointment with your pediatrician. Many causes are benign and respond well to physical therapy. Early intervention services are free in every state. The purpose of evaluation is to identify whether support is needed — not to cause alarm."
      />

      <div className="mt-6">
        <EditorialTrustBanner variant="compact" />
      </div>

      <div className="mt-10 pt-6 border-t border-border flex flex-wrap gap-4">
        <Link href="/milestones/missed" className="text-sm text-primary font-semibold hover:underline">
          Missed Milestones Hub
        </Link>
        <Link href="/milestones/not-walking-15mo" className="text-sm text-primary font-semibold hover:underline">
          Not Walking at 15 Months
        </Link>
        <Link href="/milestones/early-vs-late-walkers" className="text-sm text-primary font-semibold hover:underline">
          Early vs Late Walkers
        </Link>
        <Link href="/resources/early-intervention" className="text-sm text-primary font-semibold hover:underline">
          Early Intervention Guide
        </Link>
      </div>
    </article>
  );
}
