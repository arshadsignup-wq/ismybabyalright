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
  title: 'No Two-Word Phrases at 2 Years',
  description:
    'Is it normal if your 2-year-old is not combining words? Learn when to worry about speech delay, what two-word phrases should sound like, and when to get help. Based on CDC and ASHA guidelines.',
  alternates: {
    canonical: '/milestones/no-two-word-phrases-2yr',
  },
  openGraph: {
    title: 'No Two-Word Phrases at 2 Years | Is My Baby Alright?',
    description:
      'Is it normal if your 2-year-old is not combining words? Learn when to worry and when to get help.',
  },
};

const faqItems = [
  {
    question: 'When should toddlers start combining words?',
    answer:
      'Most toddlers begin combining two words between 18-24 months. The CDC lists using two-word phrases (like "more milk" or "daddy go") as a milestone by 24 months. Not using any two-word combinations by 24 months is a red flag for speech delay.',
  },
  {
    question: 'What counts as a two-word phrase?',
    answer:
      'A two-word phrase is any combination of two different words used together meaningfully, such as "more juice," "daddy up," "big truck," "no bath," or "go bye." Repeated words ("mama mama") or memorized phrases ("thank you") do not count.',
  },
  {
    question: 'How many words should a 2-year-old say?',
    answer:
      'Most 2-year-olds have a vocabulary of 50-200+ words and are beginning to combine them into 2-word phrases. The CDC considers fewer than 50 words and no two-word combinations at 24 months a concern requiring evaluation.',
  },
  {
    question: 'Will my "late talker" catch up on their own?',
    answer:
      'Some late talkers do catch up by age 3, but research shows that about 30-50% of late talkers continue to have language difficulties. There is no reliable way to predict which children will catch up, which is why evaluation and, if indicated, therapy is recommended rather than "wait and see."',
  },
];

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Milestones', url: '/milestones' },
  { name: 'Missed Milestones', url: '/milestones/missed' },
  { name: 'No Two-Word Phrases at 2 Years' },
];

export default function NoTwoWordPhrases2yrPage() {
  return (
    <article className="max-w-3xl mx-auto px-5 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getContentPageSchema({
              name: 'No Two-Word Phrases at 2 Years',
              description:
                'Is it normal if your 2-year-old is not combining words? Learn when to worry about speech delay, what two-word phrases should sound like, and when to get help.',
              path: '/milestones/no-two-word-phrases-2yr',
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
          { label: 'No Two-Word Phrases at 2 Years' },
        ]}
      />

      <h1 className="text-2xl font-bold text-foreground mb-2">
        No Two-Word Phrases at 2 Years
      </h1>
      <p className="text-sm text-muted mb-6">
        A CDC red flag — what it means, what to expect, and how to get help.
      </p>

      <KeyTakeaways
        takeaways={[
          'The CDC lists not using two-word phrases by 24 months as a red flag',
          'Two-word phrases include combinations like "more milk," "daddy go," "big truck"',
          'Most 2-year-olds have 50-200+ words and are combining them into short phrases',
          'About 30-50% of "late talkers" do NOT catch up without intervention',
          'Speech therapy before age 3 produces significantly better outcomes than waiting',
          'A hearing test and speech-language evaluation are the recommended next steps',
        ]}
      />

      <div className="mb-6">
        <MedicalReviewAttribution sources={['CDC', 'AAP', 'ASHA']} reviewDate="July 2026" />
      </div>

      <LastReviewed date="2026-07-18" />

      <section className="rounded-xl border border-[#E8E2D9] bg-white p-5 mt-6 mb-6">
        <h2 className="text-base font-bold text-foreground mb-2">What is normal at 2 years?</h2>
        <div className="text-sm text-muted leading-relaxed space-y-3">
          <p>By 24 months, most toddlers can:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Say 50-200+ words (or more)</li>
            <li>Combine two words into simple phrases (&ldquo;more milk,&rdquo; &ldquo;no bath,&rdquo; &ldquo;daddy go&rdquo;)</li>
            <li>Be understood by familiar adults about 50% of the time</li>
            <li>Follow two-step instructions (&ldquo;Pick up the cup and give it to me&rdquo;)</li>
            <li>Point to pictures in a book when named</li>
            <li>Ask simple questions (&ldquo;What that?&rdquo;)</li>
          </ul>
          <p>
            The CDC&apos;s 2022 milestone checklist includes &ldquo;says at least two words together&rdquo;
            as a 24-month milestone. Not achieving this is an &ldquo;act early&rdquo; warning sign.
          </p>
        </div>
      </section>

      <section className="rounded-xl border-2 border-concern bg-white p-5 mb-6">
        <h2 className="text-base font-bold text-concern mb-2">When to worry</h2>
        <div className="text-sm text-muted leading-relaxed space-y-3">
          <p>
            No two-word phrases at 24 months itself warrants evaluation. Seek evaluation more
            urgently if your child also:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>Has fewer than 50 single words</li>
            <li>Does not understand simple instructions</li>
            <li>Does not imitate words or actions</li>
            <li>Does not point or use gestures to communicate</li>
            <li>Has lost words they previously had</li>
            <li>Shows limited interest in other children</li>
            <li>Does not engage in pretend play</li>
            <li>Is not understood at all by familiar adults</li>
          </ul>
        </div>
      </section>

      <section className="rounded-xl border border-[#E8E2D9] bg-white p-5 mb-6">
        <h2 className="text-base font-bold text-foreground mb-2">Possible causes</h2>
        <div className="text-sm text-muted leading-relaxed space-y-3">
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Late talker profile:</strong> Good comprehension but slow expressive language — some catch up, some do not</li>
            <li><strong>Hearing loss:</strong> Even mild or fluctuating hearing loss can significantly affect language development</li>
            <li><strong>Developmental language disorder (DLD):</strong> A specific difficulty with language learning that persists</li>
            <li><strong>Autism spectrum disorder:</strong> Especially if combined with social communication differences</li>
            <li><strong>Childhood apraxia of speech:</strong> Difficulty planning and coordinating the movements for speech</li>
            <li><strong>Intellectual disability:</strong> Global developmental delay affecting language among other areas</li>
            <li><strong>Chronic ear infections:</strong> Persistent fluid can muffle sound and delay language</li>
            <li><strong>Bilingual environment:</strong> Bilingual children may have slightly fewer words in each language, but total words across both should be similar to monolingual peers</li>
          </ul>
        </div>
      </section>

      <section className="rounded-xl border border-[#E8E2D9] bg-white p-5 mb-6">
        <h2 className="text-base font-bold text-foreground mb-2">What you can do</h2>
        <div className="text-sm text-muted leading-relaxed space-y-3">
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Request a speech-language evaluation</strong> — do not wait to see if your child catches up</li>
            <li><strong>Get a hearing test</strong> — essential for any child with language delay</li>
            <li><strong>Model two-word phrases:</strong> When your child says &ldquo;milk,&rdquo; you say &ldquo;more milk&rdquo; or &ldquo;want milk&rdquo;</li>
            <li><strong>Expand single words:</strong> If they say &ldquo;ball,&rdquo; you say &ldquo;big ball&rdquo; or &ldquo;throw ball&rdquo;</li>
            <li><strong>Narrate daily life:</strong> &ldquo;We&apos;re going up the stairs. Up, up, up!&rdquo;</li>
            <li><strong>Read together daily:</strong> Point to pictures, ask questions, let them fill in words</li>
            <li><strong>Limit screen time:</strong> Replace passive screen time with interactive conversation</li>
            <li><strong>Create communication opportunities:</strong> Instead of anticipating needs, wait for your child to attempt to communicate</li>
            <li><strong>Play together:</strong> Pretend play, building blocks, and interactive games encourage language</li>
          </ul>
        </div>
      </section>

      <section className="rounded-xl border border-[#E8E2D9] bg-white p-5 mb-6">
        <h2 className="text-base font-bold text-foreground mb-2">When to get evaluated</h2>
        <div className="text-sm text-muted leading-relaxed space-y-3">
          <p>
            A 2-year-old with no two-word phrases should be evaluated now. The recommended steps:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Hearing test:</strong> Rule out hearing loss as a contributing factor</li>
            <li><strong>Speech-language evaluation:</strong> Comprehensive assessment of receptive and expressive language</li>
            <li><strong>Developmental screening:</strong> Check for delays in other areas</li>
            <li><strong>Autism screening:</strong> The AAP recommends universal autism screening at 18 and 24 months</li>
          </ul>
          <p>
            For children under 3, contact your state&apos;s early intervention program for a
            free evaluation. For children over 3, contact your local school district&apos;s
            special education department.
          </p>
        </div>
      </section>

      <section className="rounded-xl border border-[#E8E2D9] bg-white p-5 mb-6">
        <h2 className="text-base font-bold text-foreground mb-2">Why &ldquo;wait and see&rdquo; is not recommended</h2>
        <div className="text-sm text-muted leading-relaxed space-y-3">
          <p>
            While some late talkers do catch up, research shows that:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>30-50% of late talkers continue to have language difficulties without intervention</li>
            <li>There is no reliable way to predict which children will catch up spontaneously</li>
            <li>Speech therapy before age 3 is more effective than therapy started later</li>
            <li>Children who enter kindergarten with language delays are at higher risk for reading difficulties</li>
            <li>Evaluation is free and there is no harm in getting assessed</li>
          </ul>
          <p>
            The current evidence-based recommendation from AAP and ASHA is to evaluate and
            intervene early rather than adopt a &ldquo;wait and see&rdquo; approach.
          </p>
        </div>
      </section>

      <section className="rounded-xl border border-primary/30 bg-primary-light p-5 mb-6">
        <h2 className="text-base font-bold text-foreground mb-2">Reassurance</h2>
        <div className="text-sm text-muted leading-relaxed space-y-3">
          <p>
            Many children who start speech therapy around age 2 make excellent progress. The brain
            is highly responsive to language intervention at this age. Children who receive early
            support often catch up to or significantly close the gap with their peers.
          </p>
          <p>
            If your child understands language well, uses gestures, makes eye contact, and is
            socially engaged, these are positive prognostic signs. Getting evaluation and starting
            therapy does not mean something is seriously wrong — it means you are giving your child
            the best possible support.
          </p>
        </div>
      </section>

      <FAQSection items={faqItems} />

      <BottomLine
        summary="No two-word phrases at 2 years is a CDC red flag that requires evaluation — not a 'wait and see' situation. Get a hearing test and speech-language evaluation. About 30-50% of late talkers do not catch up without help, and speech therapy before age 3 produces the best outcomes. Early intervention is free for children under 3."
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
        <Link href="/milestones/no-words-12mo" className="text-sm text-primary font-semibold hover:underline">
          No Words at 12 Months
        </Link>
        <Link href="/resources/early-intervention" className="text-sm text-primary font-semibold hover:underline">
          Early Intervention Guide
        </Link>
      </div>
    </article>
  );
}
