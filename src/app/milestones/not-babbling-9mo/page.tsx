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
  title: 'Baby Not Babbling at 9 Months',
  description:
    'Is it normal if your baby is not babbling at 9 months? Learn what babbling should sound like, when to worry, and what to do. Based on CDC, AAP, and ASHA guidelines.',
  alternates: {
    canonical: '/milestones/not-babbling-9mo',
  },
  openGraph: {
    title: 'Baby Not Babbling at 9 Months | Is My Baby Alright?',
    description:
      'Is it normal if your baby is not babbling at 9 months? Learn when to worry and what to do.',
  },
};

const faqItems = [
  {
    question: 'When do babies start babbling?',
    answer:
      'Most babies begin babbling (combining consonants and vowels like "bababa" or "mamama") between 6-8 months. The CDC lists babbling as an expected milestone by 9 months. If your baby is only making vowel sounds (cooing) at 9 months but no consonant sounds, this warrants evaluation.',
  },
  {
    question: 'What does babbling sound like?',
    answer:
      'Babbling involves combining consonant and vowel sounds — like "ba," "da," "ma," "ga." Early babbling is repetitive (canonical babbling: "bababa," "mamama"). Later babbling becomes more varied ("badaga," "mamida") and takes on the rhythm and intonation of real speech.',
  },
  {
    question: 'Is cooing the same as babbling?',
    answer:
      'No. Cooing involves only vowel sounds ("ahhh," "ohhh," "eee") and typically develops by 2-4 months. Babbling involves consonant-vowel combinations ("ba," "da," "ma") and typically develops by 6-8 months. A baby still only cooing at 9 months has a concerning delay.',
  },
  {
    question: 'Can hearing loss cause absent babbling?',
    answer:
      'Yes. Hearing loss is one of the most common causes of absent or delayed babbling. Babies need to hear speech sounds to learn to reproduce them. Even babies born deaf typically coo, but they do not progress to consonant babbling without hearing aids or cochlear implants. A hearing test is essential for any baby not babbling by 9 months.',
  },
];

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Milestones', url: '/milestones' },
  { name: 'Missed Milestones', url: '/milestones/missed' },
  { name: 'Not Babbling at 9 Months' },
];

export default function NotBabbling9moPage() {
  return (
    <article className="max-w-3xl mx-auto px-5 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getContentPageSchema({
              name: 'Baby Not Babbling at 9 Months',
              description:
                'Is it normal if your baby is not babbling at 9 months? Learn what babbling should sound like, when to worry, and what to do.',
              path: '/milestones/not-babbling-9mo',
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
          { label: 'Not Babbling at 9 Months' },
        ]}
      />

      <h1 className="text-2xl font-bold text-foreground mb-2">
        Baby Not Babbling at 9 Months
      </h1>
      <p className="text-sm text-muted mb-6">
        What babbling should sound like, why it matters, and what to do if it is absent.
      </p>

      <KeyTakeaways
        takeaways={[
          'Babbling (consonant-vowel combinations like "bababa") should be present by 6-8 months',
          'The CDC lists not babbling by 9 months as a developmental red flag',
          'Hearing loss is the most important treatable cause of absent babbling — get a hearing test',
          'Babbling is different from cooing — it requires consonant sounds, not just vowels',
          'Absent babbling at 9 months predicts later language delay and warrants prompt evaluation',
          'Early intervention with speech therapy can improve outcomes significantly',
        ]}
      />

      <div className="mb-6">
        <MedicalReviewAttribution sources={['CDC', 'AAP', 'ASHA']} reviewDate="July 2026" />
      </div>

      <LastReviewed date="2026-07-18" />

      <section className="rounded-xl border border-[#E8E2D9] bg-white p-5 mt-6 mb-6">
        <h2 className="text-base font-bold text-foreground mb-2">What is normal?</h2>
        <div className="text-sm text-muted leading-relaxed space-y-3">
          <p>Pre-speech vocalization develops in stages:</p>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>0-2 months:</strong> Reflexive sounds, crying</li>
            <li><strong>2-4 months:</strong> Cooing — vowel sounds (&ldquo;ahh,&rdquo; &ldquo;ohh&rdquo;)</li>
            <li><strong>4-6 months:</strong> Vocal play — squealing, growling, raspberries</li>
            <li><strong>6-8 months:</strong> Canonical babbling begins (&ldquo;bababa,&rdquo; &ldquo;mamama,&rdquo; &ldquo;dadada&rdquo;)</li>
            <li><strong>8-10 months:</strong> Variegated babbling (&ldquo;badagama&rdquo;) with speech-like intonation</li>
            <li><strong>10-12 months:</strong> Jargon (babbling that sounds like sentences) and first words</li>
          </ul>
          <p>
            The CDC&apos;s milestone checklist includes babbling (&ldquo;mama,&rdquo; &ldquo;baba,&rdquo;
            &ldquo;dada&rdquo;) as a milestone by 9 months. Absence of canonical babbling by 9 months
            is a significant concern.
          </p>
        </div>
      </section>

      <section className="rounded-xl border-2 border-concern bg-white p-5 mb-6">
        <h2 className="text-base font-bold text-concern mb-2">When to worry</h2>
        <div className="text-sm text-muted leading-relaxed space-y-3">
          <p>Talk to your pediatrician promptly if your 9-month-old:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Makes only vowel sounds (cooing) but no consonant sounds</li>
            <li>Is very quiet overall — rarely vocalizes</li>
            <li>Does not seem to respond to sounds or voice</li>
            <li>Does not turn toward sounds</li>
            <li>Had babbling but lost it (regression)</li>
            <li>Does not respond to their name</li>
            <li>Does not make eye contact during vocal interactions</li>
          </ul>
          <p>
            Absent babbling at 9 months is one of the strongest early predictors of later
            language delay and warrants prompt hearing evaluation.
          </p>
        </div>
      </section>

      <section className="rounded-xl border border-[#E8E2D9] bg-white p-5 mb-6">
        <h2 className="text-base font-bold text-foreground mb-2">Possible causes</h2>
        <div className="text-sm text-muted leading-relaxed space-y-3">
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Hearing loss:</strong> The most critical cause to rule out; babies must hear consonant sounds to reproduce them</li>
            <li><strong>Chronic ear infections:</strong> Fluctuating hearing from fluid can delay babbling onset</li>
            <li><strong>Oral-motor difficulties:</strong> Structural issues (tongue tie, cleft palate) or motor planning difficulties</li>
            <li><strong>Autism spectrum disorder:</strong> Some babies with autism have reduced or absent babbling</li>
            <li><strong>Prematurity:</strong> Use adjusted age — a premature baby may babble later than chronological age suggests</li>
            <li><strong>Global developmental delay:</strong> Delays across multiple areas may affect vocalization</li>
            <li><strong>Neurological conditions:</strong> Rarely, absent babbling may relate to neurological differences</li>
            <li><strong>Limited vocal stimulation:</strong> In rare cases of severe neglect (very unlikely if you are reading this)</li>
          </ul>
        </div>
      </section>

      <section className="rounded-xl border border-[#E8E2D9] bg-white p-5 mb-6">
        <h2 className="text-base font-bold text-foreground mb-2">What you can do</h2>
        <div className="text-sm text-muted leading-relaxed space-y-3">
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Get a hearing test:</strong> This is the essential first step — request an audiological evaluation</li>
            <li><strong>Talk to your baby:</strong> Narrate daily activities, emphasizing consonant sounds</li>
            <li><strong>Babble back:</strong> When your baby makes any sound, imitate it and expand on it</li>
            <li><strong>Face-to-face interaction:</strong> Let your baby see your mouth moving when you talk</li>
            <li><strong>Reduce background noise:</strong> TV and constant noise can mask the speech sounds babies need to hear</li>
            <li><strong>Sing songs:</strong> Repetitive songs with clear consonants help babies learn sound patterns</li>
            <li><strong>Take turns:</strong> Make a sound, then pause and wait — give your baby the opportunity to &ldquo;respond&rdquo;</li>
            <li><strong>Play with sounds:</strong> Blow raspberries, make &ldquo;b-b-b&rdquo; sounds during play</li>
          </ul>
        </div>
      </section>

      <section className="rounded-xl border border-[#E8E2D9] bg-white p-5 mb-6">
        <h2 className="text-base font-bold text-foreground mb-2">When to get evaluated</h2>
        <div className="text-sm text-muted leading-relaxed space-y-3">
          <p>
            A baby not babbling by 9 months should be evaluated. Do not wait to see if babbling
            develops on its own — early identification of hearing loss and other causes leads
            to significantly better outcomes.
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Step 1:</strong> Hearing test (audiological evaluation) — this can be done at any age</li>
            <li><strong>Step 2:</strong> Speech-language evaluation — assessing pre-speech skills and communication</li>
            <li><strong>Step 3:</strong> Developmental screening — to check overall development</li>
          </ul>
          <p>
            Contact your pediatrician or your state&apos;s early intervention program directly.
            No referral is needed for early intervention.
          </p>
        </div>
      </section>

      <section className="rounded-xl border border-primary/30 bg-primary-light p-5 mb-6">
        <h2 className="text-base font-bold text-foreground mb-2">Reassurance</h2>
        <div className="text-sm text-muted leading-relaxed space-y-3">
          <p>
            While absent babbling at 9 months is a significant concern that needs evaluation,
            many causes are treatable. If hearing loss is identified and addressed early (with
            hearing aids or tubes for ear infections), babies often make rapid progress in
            vocalization.
          </p>
          <p>
            The fact that you have noticed the absence of babbling and are seeking information
            is important — early identification is the first step toward early intervention,
            which produces the best outcomes.
          </p>
        </div>
      </section>

      <FAQSection items={faqItems} />

      <BottomLine
        summary="Not babbling by 9 months is a CDC red flag that requires prompt evaluation. The most important first step is a hearing test — hearing loss is the most common treatable cause. Contact your pediatrician to request an audiological evaluation. If hearing is normal, a speech-language evaluation can identify other causes and start targeted intervention."
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
        <Link href="/milestones/not-responding-to-name" className="text-sm text-primary font-semibold hover:underline">
          Not Responding to Name
        </Link>
      </div>
    </article>
  );
}
