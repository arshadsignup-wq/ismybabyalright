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
  title: 'Baby Has No Words at 12 Months',
  description:
    'Is it normal if your baby has no words at 12 months? Learn when to worry about speech delay, what counts as a first word, and what to do. Based on CDC and AAP guidelines.',
  alternates: {
    canonical: '/milestones/no-words-12mo',
  },
  openGraph: {
    title: 'Baby Has No Words at 12 Months | Is My Baby Alright?',
    description:
      'Is it normal if your baby has no words at 12 months? Learn when to worry about speech delay and what to do.',
  },
};

const faqItems = [
  {
    question: 'When do babies say their first word?',
    answer:
      'Most babies say their first recognizable word (like "mama" or "dada" with meaning) between 10-14 months. The CDC lists saying 1-2 words by 12 months as a milestone. However, there is significant normal variation.',
  },
  {
    question: 'What counts as a "word" for a baby?',
    answer:
      'A word is any consistent sound or sound combination that your baby uses with clear intent and meaning. It does not need to be pronounced perfectly. "Ba" for bottle, "da" for daddy, or "nana" for banana all count as words if used consistently and intentionally.',
  },
  {
    question: 'Is babbling the same as talking?',
    answer:
      'Babbling (strings of consonant-vowel sounds like "bababa" or "mamama") is a precursor to talking but is not the same as using words. Words require consistent, intentional use to refer to something specific. Babbling typically develops by 6-9 months, with words following by 10-14 months.',
  },
  {
    question: 'Can bilingual babies be late talkers?',
    answer:
      'Bilingual babies sometimes start speaking slightly later because they are processing two language systems, but they should not be significantly delayed. They should still be babbling, using gestures, and attempting to communicate. Total word count across both languages should be similar to monolingual peers.',
  },
];

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Milestones', url: '/milestones' },
  { name: 'Missed Milestones', url: '/milestones/missed' },
  { name: 'No Words at 12 Months' },
];

export default function NoWords12moPage() {
  return (
    <article className="max-w-3xl mx-auto px-5 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getContentPageSchema({
              name: 'Baby Has No Words at 12 Months',
              description:
                'Is it normal if your baby has no words at 12 months? Learn when to worry about speech delay, what counts as a first word, and what to do.',
              path: '/milestones/no-words-12mo',
              lastModified: '2026-07-18',
              medicalGuidelines: [
                { name: 'CDC Learn the Signs. Act Early.', url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html' },
                { name: 'ASHA Speech-Language Milestones', url: 'https://www.asha.org/public/speech/development/' },
                { name: 'AAP Clinical Guidelines', url: 'https://www.aap.org/en/clinical-guidance/' },
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
          { label: 'No Words at 12 Months' },
        ]}
      />

      <h1 className="text-2xl font-bold text-foreground mb-2">
        Baby Has No Words at 12 Months
      </h1>
      <p className="text-sm text-muted mb-6">
        What counts as a word, when to worry, and what to do next.
      </p>

      <KeyTakeaways
        takeaways={[
          'Most babies say 1-2 meaningful words by 12 months (e.g., "mama," "dada," "hi")',
          'A "word" is any consistent sound used intentionally — it does not need perfect pronunciation',
          'The CDC lists no words by 12 months as a milestone to watch; evaluation is recommended by 15 months if still no words',
          'Gestures (pointing, waving, reaching) are early communication and are a positive sign',
          'Hearing problems are the most important treatable cause of speech delay',
          'Early speech therapy can significantly improve outcomes for late talkers',
        ]}
      />

      <div className="mb-6">
        <MedicalReviewAttribution sources={['CDC', 'AAP', 'ASHA']} reviewDate="July 2026" />
      </div>

      <LastReviewed date="2026-07-18" />

      <section className="rounded-xl border border-[#E8E2D9] bg-white p-5 mt-6 mb-6">
        <h2 className="text-base font-bold text-foreground mb-2">What is normal?</h2>
        <div className="text-sm text-muted leading-relaxed space-y-3">
          <p>Language develops in predictable stages:</p>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>2-4 months:</strong> Cooing, vowel sounds</li>
            <li><strong>4-6 months:</strong> Babbling begins (consonant-vowel combinations)</li>
            <li><strong>6-9 months:</strong> Varied babbling ("bababa," "mamama," "dadada")</li>
            <li><strong>9-12 months:</strong> Jargon (babbling with sentence-like intonation), first words emerging</li>
            <li><strong>12 months:</strong> 1-2 meaningful words used consistently</li>
          </ul>
          <p>
            The CDC&apos;s 2022 milestones list &ldquo;says one or two words&rdquo; by 12 months.
            However, some typically developing children do not produce their first clear word until
            13-14 months. What matters more at 12 months is whether your baby is:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>Babbling with varied sounds</li>
            <li>Using gestures (pointing, waving, reaching)</li>
            <li>Understanding words and simple instructions</li>
            <li>Responding to their name</li>
          </ul>
        </div>
      </section>

      <section className="rounded-xl border border-[#E8E2D9] bg-white p-5 mb-6">
        <h2 className="text-base font-bold text-foreground mb-2">When to worry</h2>
        <div className="text-sm text-muted leading-relaxed space-y-3">
          <p>Talk to your pediatrician if your 12-month-old:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Is not babbling at all (no consonant sounds like "ba," "da," "ma")</li>
            <li>Does not respond to their name</li>
            <li>Does not understand simple words like "no" or "bye-bye"</li>
            <li>Does not point or use other gestures to communicate</li>
            <li>Does not seem to hear or respond to sounds</li>
            <li>Has lost babbling or words they previously had</li>
            <li>Shows no interest in communicating with others</li>
          </ul>
          <p>
            The absence of babbling and gestures at 12 months is more concerning than the absence
            of clear words alone.
          </p>
        </div>
      </section>

      <section className="rounded-xl border border-[#E8E2D9] bg-white p-5 mb-6">
        <h2 className="text-base font-bold text-foreground mb-2">Possible causes</h2>
        <div className="text-sm text-muted leading-relaxed space-y-3">
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Normal variation:</strong> Some typically developing children are simply late talkers who catch up by age 2</li>
            <li><strong>Hearing loss:</strong> Even mild hearing loss can significantly affect speech development; this is the most important treatable cause</li>
            <li><strong>Chronic ear infections:</strong> Fluid in the ears can muffle sound and delay speech</li>
            <li><strong>Oral-motor issues:</strong> Tongue tie or other structural issues can affect sound production</li>
            <li><strong>Prematurity:</strong> Use adjusted age for milestone assessment</li>
            <li><strong>Limited language exposure:</strong> Babies need rich verbal interaction to develop speech</li>
            <li><strong>Autism spectrum disorder:</strong> Usually accompanied by social communication differences and repetitive behaviors</li>
            <li><strong>Developmental language disorder:</strong> A specific difficulty with language that may become apparent over time</li>
          </ul>
        </div>
      </section>

      <section className="rounded-xl border border-[#E8E2D9] bg-white p-5 mb-6">
        <h2 className="text-base font-bold text-foreground mb-2">What you can do</h2>
        <div className="text-sm text-muted leading-relaxed space-y-3">
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Talk to your baby constantly:</strong> Narrate what you are doing, what they are looking at, and what is happening around them</li>
            <li><strong>Read together daily:</strong> Point to pictures and name objects</li>
            <li><strong>Respond to all communication attempts:</strong> Even babbling, gestures, and eye gaze deserve a response</li>
            <li><strong>Reduce background noise:</strong> Turn off TV and radio during interaction time</li>
            <li><strong>Use simple, clear language:</strong> Short sentences with emphasis on key words</li>
            <li><strong>Wait and listen:</strong> Give your baby time to respond — do not fill all the silence</li>
            <li><strong>Sing songs and nursery rhymes:</strong> Repetitive songs help babies learn language patterns</li>
            <li><strong>Limit screen time:</strong> The AAP recommends no screen time before 18 months (except video calls)</li>
          </ul>
        </div>
      </section>

      <section className="rounded-xl border border-[#E8E2D9] bg-white p-5 mb-6">
        <h2 className="text-base font-bold text-foreground mb-2">When to get evaluated</h2>
        <div className="text-sm text-muted leading-relaxed space-y-3">
          <p>Consider evaluation if your baby has no words by 12 months, especially if:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>They are not babbling</li>
            <li>They do not respond to their name or understand simple words</li>
            <li>They are not using gestures (pointing, waving)</li>
            <li>There is a family history of speech/language delay or autism</li>
          </ul>
          <p>The evaluation may include:</p>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Hearing test:</strong> This should be the first step for any speech concern</li>
            <li><strong>Speech-language evaluation:</strong> Assesses both understanding (receptive) and expression (expressive)</li>
            <li><strong>Developmental screening:</strong> Looks at overall development across all domains</li>
          </ul>
          <p>
            You can request a hearing test and speech evaluation through your pediatrician, or
            contact your state&apos;s early intervention program directly.
          </p>
        </div>
      </section>

      <section className="rounded-xl border border-primary/30 bg-primary-light p-5 mb-6">
        <h2 className="text-base font-bold text-foreground mb-2">Reassurance</h2>
        <div className="text-sm text-muted leading-relaxed space-y-3">
          <p>
            Many babies who have no clear words at 12 months begin speaking within the next few
            months. If your baby is babbling, using gestures, understanding words, and responding
            to their name, these are all positive signs that language is developing.
          </p>
          <p>
            &ldquo;Late talkers&rdquo; who have good comprehension and use gestures often catch up
            by age 2 without intervention. However, getting a hearing test and speech evaluation
            is still recommended to rule out treatable causes and access support if needed.
          </p>
        </div>
      </section>

      <FAQSection items={faqItems} />

      <BottomLine
        summary="No words at 12 months warrants attention, especially if your baby is also not babbling or using gestures. The most important first step is a hearing test. If your baby is babbling, pointing, and understanding words, they may simply be a late talker who catches up soon. If there are no words by 15 months, request a speech-language evaluation through your pediatrician or early intervention program."
      />

      <div className="mt-6">
        <EditorialTrustBanner variant="compact" />
      </div>

      <div className="mt-10 pt-6 border-t border-border flex flex-wrap gap-4">
        <Link href="/milestones/missed" className="text-sm text-primary font-semibold hover:underline">
          Missed Milestones Hub
        </Link>
        <Link href="/milestones/no-words-18mo" className="text-sm text-primary font-semibold hover:underline">
          No Words at 18 Months
        </Link>
        <Link href="/milestones/not-babbling-9mo" className="text-sm text-primary font-semibold hover:underline">
          Not Babbling at 9 Months
        </Link>
        <Link href="/milestones/not-pointing-12mo" className="text-sm text-primary font-semibold hover:underline">
          Not Pointing at 12 Months
        </Link>
      </div>
    </article>
  );
}
