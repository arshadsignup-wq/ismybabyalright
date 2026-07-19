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
  title: 'Baby Not Pointing at 12 Months',
  description:
    'Is it normal if your baby is not pointing at 12 months? Learn why pointing matters, when to worry, and what to do. Based on CDC and AAP developmental guidelines.',
  alternates: {
    canonical: '/milestones/not-pointing-12mo',
  },
  openGraph: {
    title: 'Baby Not Pointing at 12 Months | Is My Baby Alright?',
    description:
      'Is it normal if your baby is not pointing at 12 months? Learn why pointing matters and when to worry.',
  },
};

const faqItems = [
  {
    question: 'Why is pointing an important milestone?',
    answer:
      'Pointing is one of the earliest forms of intentional communication. It shows that a baby can share attention with another person (joint attention), which is a foundational social-communication skill. Pointing develops before spoken language and predicts later language development.',
  },
  {
    question: 'When do babies start pointing?',
    answer:
      'Most babies begin pointing between 9-12 months. The CDC lists pointing to ask for something or show interest as a 12-month milestone. By 14-16 months, most babies point regularly to share interest, request items, and direct attention.',
  },
  {
    question: 'Is not pointing a sign of autism?',
    answer:
      'Absent pointing by 12 months is one of the early signs that may be associated with autism spectrum disorder, but it is not diagnostic on its own. Many factors can delay pointing. However, absent pointing combined with absent other gestures (waving, showing), reduced eye contact, and limited response to name warrants autism screening.',
  },
  {
    question: 'What is the difference between pointing to request and pointing to share?',
    answer:
      'Pointing to request (proto-imperative pointing) means the child points to get something they want. Pointing to share interest (proto-declarative pointing) means pointing to show something to another person without wanting it. Proto-declarative pointing typically develops slightly later and is more closely associated with social communication.',
  },
];

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Milestones', url: '/milestones' },
  { name: 'Missed Milestones', url: '/milestones/missed' },
  { name: 'Not Pointing at 12 Months' },
];

export default function NotPointing12moPage() {
  return (
    <article className="max-w-3xl mx-auto px-5 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getContentPageSchema({
              name: 'Baby Not Pointing at 12 Months',
              description:
                'Is it normal if your baby is not pointing at 12 months? Learn why pointing matters, when to worry, and what to do.',
              path: '/milestones/not-pointing-12mo',
              lastModified: '2026-07-18',
              medicalGuidelines: [
                { name: 'CDC Learn the Signs. Act Early.', url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html' },
                { name: 'AAP Autism Screening Guidelines', url: 'https://www.aap.org/en/clinical-guidance/' },
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
          { label: 'Not Pointing at 12 Months' },
        ]}
      />

      <h1 className="text-2xl font-bold text-foreground mb-2">
        Baby Not Pointing at 12 Months
      </h1>
      <p className="text-sm text-muted mb-6">
        Why pointing matters, what it tells us about communication, and when to seek evaluation.
      </p>

      <KeyTakeaways
        takeaways={[
          'Pointing is a key early communication milestone that typically develops by 9-12 months',
          'The CDC lists not pointing at things of interest by 12 months as a developmental concern',
          'Pointing shows "joint attention" — the ability to share focus with another person',
          'Absent pointing is one early sign associated with autism, but is not diagnostic alone',
          'Other gestures (waving, reaching, showing) also indicate communication development',
          'If your baby has no gestures at all by 12 months, talk to your pediatrician',
        ]}
      />

      <div className="mb-6">
        <MedicalReviewAttribution sources={['CDC', 'AAP']} reviewDate="July 2026" />
      </div>

      <LastReviewed date="2026-07-18" />

      <section className="rounded-xl border border-[#E8E2D9] bg-white p-5 mt-6 mb-6">
        <h2 className="text-base font-bold text-foreground mb-2">What is normal?</h2>
        <div className="text-sm text-muted leading-relaxed space-y-3">
          <p>Gesture development follows a predictable pattern:</p>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>6-8 months:</strong> Reaching toward objects, lifting arms to be picked up</li>
            <li><strong>8-10 months:</strong> Waving, clapping, showing objects to caregivers</li>
            <li><strong>9-12 months:</strong> Pointing to request things (proto-imperative)</li>
            <li><strong>12-14 months:</strong> Pointing to share interest (proto-declarative)</li>
            <li><strong>12-16 months:</strong> Regular use of pointing and other gestures</li>
          </ul>
          <p>
            The CDC&apos;s 2022 milestone checklist includes &ldquo;points to ask for something or
            to get help&rdquo; as a 12-month milestone. By 18 months, children should be pointing
            to show you something interesting.
          </p>
        </div>
      </section>

      <section className="rounded-xl border border-[#E8E2D9] bg-white p-5 mb-6">
        <h2 className="text-base font-bold text-foreground mb-2">Why pointing matters</h2>
        <div className="text-sm text-muted leading-relaxed space-y-3">
          <p>
            Pointing is more than a simple motor skill — it represents a major cognitive and social
            leap. When a baby points, they are:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>Communicating intentionally (they want to direct your attention)</li>
            <li>Demonstrating joint attention (sharing focus between an object and a person)</li>
            <li>Showing awareness that other people have attention that can be directed</li>
            <li>Building the foundation for language (pointing predicts vocabulary growth)</li>
          </ul>
          <p>
            Research shows that the frequency of pointing at 12 months is one of the strongest
            predictors of vocabulary size at 24 months.
          </p>
        </div>
      </section>

      <section className="rounded-xl border border-[#E8E2D9] bg-white p-5 mb-6">
        <h2 className="text-base font-bold text-foreground mb-2">When to worry</h2>
        <div className="text-sm text-muted leading-relaxed space-y-3">
          <p>Talk to your pediatrician if your 12-month-old:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Does not point at all (neither to request nor to share interest)</li>
            <li>Does not use other gestures (waving, showing, reaching with purpose)</li>
            <li>Does not follow your point (does not look where you point)</li>
            <li>Does not make eye contact during interactions</li>
            <li>Does not seem interested in sharing experiences with you</li>
            <li>Does not respond to their name</li>
            <li>Has lost gestures or social behaviors they previously had</li>
          </ul>
          <p>
            The combination of absent pointing, absent other gestures, and reduced social
            engagement is more concerning than absent pointing alone.
          </p>
        </div>
      </section>

      <section className="rounded-xl border border-[#E8E2D9] bg-white p-5 mb-6">
        <h2 className="text-base font-bold text-foreground mb-2">Possible causes</h2>
        <div className="text-sm text-muted leading-relaxed space-y-3">
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Normal variation:</strong> Some babies point slightly later (by 14-15 months) and are otherwise developing typically</li>
            <li><strong>Limited modeling:</strong> Babies learn to point partly by watching others point — more pointing from caregivers encourages the skill</li>
            <li><strong>Autism spectrum disorder:</strong> Absent pointing is one early sign, particularly when combined with other social communication differences</li>
            <li><strong>Developmental delay:</strong> Global delays can affect gesture development along with other skills</li>
            <li><strong>Hearing loss:</strong> Babies who cannot hear may be less motivated to direct others&apos; attention to sounds/objects</li>
            <li><strong>Motor delays:</strong> If fine motor skills are delayed, the physical act of pointing may be affected</li>
          </ul>
        </div>
      </section>

      <section className="rounded-xl border border-[#E8E2D9] bg-white p-5 mb-6">
        <h2 className="text-base font-bold text-foreground mb-2">What you can do</h2>
        <div className="text-sm text-muted leading-relaxed space-y-3">
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Point frequently:</strong> Point to things throughout the day and label them (&ldquo;Look! A dog!&rdquo;)</li>
            <li><strong>Follow your baby&apos;s gaze:</strong> When they look at something, point to it and name it</li>
            <li><strong>Respond to reaching:</strong> When your baby reaches for something, label it and treat it as communication</li>
            <li><strong>Play &ldquo;Where is it?&rdquo; games:</strong> Point to pictures in books and ask &ldquo;Where is the cat?&rdquo;</li>
            <li><strong>Create pointing opportunities:</strong> Offer choices between two objects</li>
            <li><strong>Gently guide:</strong> Take your baby&apos;s hand and help them point while labeling the object</li>
            <li><strong>Make it fun:</strong> Point at exciting things (birds, dogs, trucks) with enthusiasm</li>
          </ul>
        </div>
      </section>

      <section className="rounded-xl border border-[#E8E2D9] bg-white p-5 mb-6">
        <h2 className="text-base font-bold text-foreground mb-2">When to get evaluated</h2>
        <div className="text-sm text-muted leading-relaxed space-y-3">
          <p>
            If your baby is not pointing by 12 months and also shows other concerning signs
            (no gestures, no eye contact, not responding to name), request evaluation promptly.
            Your pediatrician may:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>Conduct autism screening (M-CHAT-R/F at 18 months, but can screen earlier if concerns exist)</li>
            <li>Assess overall communication and social development</li>
            <li>Refer to speech-language pathology for a communication evaluation</li>
            <li>Refer to early intervention for comprehensive developmental assessment</li>
            <li>Order a hearing test to rule out hearing loss</li>
          </ul>
          <p>
            If your baby is not pointing but IS using other gestures and making good eye contact,
            the concern is lower — but monitoring is still recommended.
          </p>
        </div>
      </section>

      <section className="rounded-xl border border-primary/30 bg-primary-light p-5 mb-6">
        <h2 className="text-base font-bold text-foreground mb-2">Reassurance</h2>
        <div className="text-sm text-muted leading-relaxed space-y-3">
          <p>
            Not all babies who are late to point have autism or a developmental problem. Some
            children develop pointing by 13-15 months and continue on a completely typical
            trajectory. The key is looking at the whole picture — not just one skill in isolation.
          </p>
          <p>
            If your baby is making eye contact, responding to their name, using other gestures
            (waving, showing objects), and seems socially connected, these are all positive signs.
            Continue encouraging pointing through modeling and interaction, and discuss any concerns
            with your pediatrician at your next visit.
          </p>
        </div>
      </section>

      <FAQSection items={faqItems} />

      <BottomLine
        summary="Pointing by 12 months is an important social-communication milestone. If your baby is not pointing and also lacks other gestures, eye contact, or name response, seek evaluation promptly — these may be early signs that benefit from intervention. If pointing is the only absent skill and your baby is otherwise socially engaged, monitor closely and discuss with your pediatrician."
      />

      <div className="mt-6">
        <EditorialTrustBanner variant="compact" />
      </div>

      <div className="mt-10 pt-6 border-t border-border flex flex-wrap gap-4">
        <Link href="/milestones/missed" className="text-sm text-primary font-semibold hover:underline">
          Missed Milestones Hub
        </Link>
        <Link href="/milestones/not-responding-to-name" className="text-sm text-primary font-semibold hover:underline">
          Not Responding to Name
        </Link>
        <Link href="/milestones/no-words-12mo" className="text-sm text-primary font-semibold hover:underline">
          No Words at 12 Months
        </Link>
      </div>
    </article>
  );
}
