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
  title: 'Toddler Has No Words at 18 Months',
  description:
    'A toddler with no words at 18 months should be evaluated. Learn what causes speech delay at 18 months, when to worry, and how to get help. Based on CDC, AAP, and ASHA guidelines.',
  alternates: {
    canonical: '/milestones/no-words-18mo',
  },
  openGraph: {
    title: 'Toddler Has No Words at 18 Months | Is My Baby Alright?',
    description:
      'A toddler with no words at 18 months should be evaluated. Learn what causes speech delay and how to get help.',
  },
};

const faqItems = [
  {
    question: 'How many words should an 18-month-old say?',
    answer:
      'The CDC milestone checklist expects at least 6 words by 18 months, with some children saying 10-25 words. The CDC considers having fewer than 6 words at 18 months an "act early" sign. Having zero words at 18 months requires prompt evaluation.',
  },
  {
    question: 'Is my toddler a "late talker" or is something wrong?',
    answer:
      'A "late talker" is a child who has delayed expressive language but normal comprehension, hearing, and social skills. About 50-70% of late talkers catch up by age 3. However, no words at 18 months goes beyond typical "late talking" and warrants evaluation to determine the cause and whether intervention is needed.',
  },
  {
    question: 'Should I get a hearing test for my 18-month-old with no words?',
    answer:
      'Yes. A hearing test (audiological evaluation) should be the first step whenever there are speech concerns. Even mild or fluctuating hearing loss from chronic ear infections can significantly delay speech. This test is painless and can be done at any age.',
  },
  {
    question: 'Will my child need speech therapy?',
    answer:
      'Many children with no words at 18 months benefit from speech-language therapy. A speech-language pathologist can assess your child\'s communication skills and recommend therapy if appropriate. Early speech therapy (before age 2) produces the best outcomes for language delays.',
  },
];

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Milestones', url: '/milestones' },
  { name: 'Missed Milestones', url: '/milestones/missed' },
  { name: 'No Words at 18 Months' },
];

export default function NoWords18moPage() {
  return (
    <article className="max-w-3xl mx-auto px-5 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getContentPageSchema({
              name: 'Toddler Has No Words at 18 Months',
              description:
                'A toddler with no words at 18 months should be evaluated. Learn what causes speech delay at 18 months, when to worry, and how to get help.',
              path: '/milestones/no-words-18mo',
              lastModified: '2026-07-18',
              medicalGuidelines: [
                { name: 'CDC Learn the Signs. Act Early.', url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html' },
                { name: 'ASHA Speech-Language Milestones', url: 'https://www.asha.org/public/speech/development/' },
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
          { label: 'No Words at 18 Months' },
        ]}
      />

      <h1 className="text-2xl font-bold text-foreground mb-2">
        Toddler Has No Words at 18 Months
      </h1>
      <p className="text-sm text-muted mb-6">
        This is a CDC red flag — here is what to do, what it might mean, and how to get help.
      </p>

      <KeyTakeaways
        takeaways={[
          'The CDC expects at least 6 words by 18 months; no words at all is a clear red flag',
          'A hearing test should be the first step for any child with no words at 18 months',
          'Possible causes include hearing loss, autism, developmental language disorder, or apraxia of speech',
          'Good comprehension and gestures are positive prognostic signs — but evaluation is still needed',
          'Early speech therapy (before age 2) produces significantly better outcomes',
          'Contact your state\'s early intervention program for a free evaluation — no referral needed',
        ]}
      />

      <div className="mb-6">
        <MedicalReviewAttribution sources={['CDC', 'AAP', 'ASHA']} reviewDate="July 2026" />
      </div>

      <LastReviewed date="2026-07-18" />

      <section className="rounded-xl border border-[#E8E2D9] bg-white p-5 mt-6 mb-6">
        <h2 className="text-base font-bold text-foreground mb-2">What is normal at 18 months?</h2>
        <div className="text-sm text-muted leading-relaxed space-y-3">
          <p>By 18 months, most toddlers can:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Say at least 6-10 recognizable words</li>
            <li>Attempt to say new words they hear</li>
            <li>Point to several body parts when asked</li>
            <li>Follow simple one-step directions (&ldquo;Give me the cup&rdquo;)</li>
            <li>Point to things they want or find interesting</li>
            <li>Use gestures like nodding, shaking head, waving</li>
          </ul>
          <p>
            The CDC&apos;s 2022 milestone checklist identifies fewer than 6 words at 18 months as
            an &ldquo;act early&rdquo; warning sign. Having zero words at 18 months is a more
            significant concern that requires prompt evaluation.
          </p>
        </div>
      </section>

      <section className="rounded-xl border-2 border-concern bg-white p-5 mb-6">
        <h2 className="text-base font-bold text-concern mb-2">When to worry</h2>
        <div className="text-sm text-muted leading-relaxed space-y-3">
          <p>
            No words at 18 months itself warrants evaluation. Seek evaluation more urgently if your
            toddler also:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>Does not point to things or use gestures</li>
            <li>Does not seem to understand what you say</li>
            <li>Does not respond to their name consistently</li>
            <li>Does not make eye contact or share attention with you</li>
            <li>Has lost words or sounds they previously had</li>
            <li>Does not imitate actions or sounds</li>
            <li>Shows limited interest in other people</li>
          </ul>
          <p>
            These additional signs may indicate a broader developmental concern such as autism
            spectrum disorder and should be evaluated promptly.
          </p>
        </div>
      </section>

      <section className="rounded-xl border border-[#E8E2D9] bg-white p-5 mb-6">
        <h2 className="text-base font-bold text-foreground mb-2">Possible causes</h2>
        <div className="text-sm text-muted leading-relaxed space-y-3">
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Hearing loss:</strong> Even mild loss can prevent speech development; always test hearing first</li>
            <li><strong>Chronic ear infections (otitis media):</strong> Fluctuating hearing from fluid buildup delays speech</li>
            <li><strong>Autism spectrum disorder:</strong> Usually accompanied by differences in social communication and behavior</li>
            <li><strong>Childhood apraxia of speech:</strong> The brain has difficulty planning the motor movements for speech</li>
            <li><strong>Developmental language disorder:</strong> Difficulty learning language despite normal hearing and intelligence</li>
            <li><strong>Intellectual disability:</strong> Global developmental delay affecting all areas</li>
            <li><strong>Selective mutism (rare at this age):</strong> Speaking in some settings but not others</li>
            <li><strong>Environmental factors:</strong> Severe neglect or minimal language exposure (rare)</li>
          </ul>
        </div>
      </section>

      <section className="rounded-xl border border-[#E8E2D9] bg-white p-5 mb-6">
        <h2 className="text-base font-bold text-foreground mb-2">What you can do now</h2>
        <div className="text-sm text-muted leading-relaxed space-y-3">
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Schedule a hearing test</strong> — this is the essential first step</li>
            <li><strong>Contact early intervention</strong> — request a speech-language evaluation</li>
            <li><strong>Talk to your pediatrician</strong> — discuss your concerns and request screening</li>
            <li>Continue talking, reading, and singing to your child throughout the day</li>
            <li>Narrate daily activities in simple, clear language</li>
            <li>Respond to all communication attempts (gestures, sounds, eye gaze)</li>
            <li>Reduce background noise during interaction time</li>
            <li>Follow your child&apos;s lead in play and comment on what they are doing</li>
            <li>Avoid pressuring your child to talk — create opportunities, not demands</li>
          </ul>
        </div>
      </section>

      <section className="rounded-xl border border-[#E8E2D9] bg-white p-5 mb-6">
        <h2 className="text-base font-bold text-foreground mb-2">What the evaluation involves</h2>
        <div className="text-sm text-muted leading-relaxed space-y-3">
          <p>A comprehensive evaluation for an 18-month-old with no words typically includes:</p>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Audiological evaluation:</strong> Testing hearing across different frequencies</li>
            <li><strong>Speech-language assessment:</strong> Evaluating both receptive (understanding) and expressive (speaking) language</li>
            <li><strong>Developmental screening:</strong> Assessing all areas of development (motor, cognitive, social)</li>
            <li><strong>Autism screening:</strong> M-CHAT-R/F or similar tool to screen for autism</li>
            <li><strong>Oral-motor exam:</strong> Checking the structures used for speech (tongue, palate, lips)</li>
          </ul>
          <p>
            This evaluation is available free through your state&apos;s early intervention program
            for children under 3.
          </p>
        </div>
      </section>

      <section className="rounded-xl border border-primary/30 bg-primary-light p-5 mb-6">
        <h2 className="text-base font-bold text-foreground mb-2">Reassurance</h2>
        <div className="text-sm text-muted leading-relaxed space-y-3">
          <p>
            While no words at 18 months is a serious concern that needs evaluation, many children
            who start speech therapy at this age make excellent progress. The brain is remarkably
            plastic at this age, and early intervention takes advantage of this window.
          </p>
          <p>
            If your child understands what you say, uses gestures, makes eye contact, and is
            socially engaged, these are positive signs. Many children with isolated expressive
            language delays respond well to therapy and catch up to peers.
          </p>
        </div>
      </section>

      <FAQSection items={faqItems} />

      <BottomLine
        summary="No words at 18 months is a CDC red flag that requires prompt evaluation. Start with a hearing test, then get a speech-language evaluation through your pediatrician or early intervention program. Early therapy (before age 2) produces the best outcomes. Good comprehension and gestures are positive signs, but evaluation is still essential to identify the cause and start appropriate support."
      />

      <div className="mt-6">
        <EditorialTrustBanner variant="compact" />
      </div>

      <div className="mt-10 pt-6 border-t border-border flex flex-wrap gap-4">
        <Link href="/milestones/missed" className="text-sm text-primary font-semibold hover:underline">
          Missed Milestones Hub
        </Link>
        <Link href="/milestones/no-words-12mo" className="text-sm text-primary font-semibold hover:underline">
          No Words at 12 Months
        </Link>
        <Link href="/milestones/no-two-word-phrases-2yr" className="text-sm text-primary font-semibold hover:underline">
          No Two-Word Phrases at 2 Years
        </Link>
        <Link href="/milestones/not-responding-to-name" className="text-sm text-primary font-semibold hover:underline">
          Not Responding to Name
        </Link>
      </div>
    </article>
  );
}
