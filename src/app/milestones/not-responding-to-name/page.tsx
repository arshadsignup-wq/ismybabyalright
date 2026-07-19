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
  title: 'Baby Not Responding to Name',
  description:
    'Is it normal if your baby does not respond to their name? Learn when babies should respond, when to worry, and what to do. Based on CDC and AAP guidelines.',
  alternates: {
    canonical: '/milestones/not-responding-to-name',
  },
  openGraph: {
    title: 'Baby Not Responding to Name | Is My Baby Alright?',
    description:
      'Is it normal if your baby does not respond to their name? Learn when to worry and what to do.',
  },
};

const faqItems = [
  {
    question: 'When should a baby respond to their name?',
    answer:
      'Most babies begin responding to their name consistently by 7-9 months. The CDC lists responding to own name as a milestone by 9 months. By 12 months, babies should consistently turn and look when their name is called in a normal voice.',
  },
  {
    question: 'Is not responding to name a sign of autism?',
    answer:
      'Not responding to name by 9-12 months is one of the earliest behavioral signs associated with autism spectrum disorder. However, it can also be caused by hearing loss, frequent ear infections, being absorbed in play, or temperament differences. It is an important sign that warrants evaluation, not a diagnosis.',
  },
  {
    question: 'How do I test if my baby responds to their name?',
    answer:
      'Wait until your baby is calm but not deeply focused on something. Stand behind or beside them (so they cannot see you). Call their name in a normal conversational voice. A positive response is turning to look at you within a few seconds. Try 3-5 times across different situations for a fair assessment.',
  },
  {
    question: 'Could my baby just be ignoring me?',
    answer:
      'Babies under 12 months do not intentionally ignore. If your baby occasionally does not respond when deeply engaged in play but consistently responds at other times, this is normal. The concern is when a baby rarely or never responds to their name across different situations, especially when not engaged in an activity.',
  },
];

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Milestones', url: '/milestones' },
  { name: 'Missed Milestones', url: '/milestones/missed' },
  { name: 'Not Responding to Name' },
];

export default function NotRespondingToNamePage() {
  return (
    <article className="max-w-3xl mx-auto px-5 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getContentPageSchema({
              name: 'Baby Not Responding to Name',
              description:
                'Is it normal if your baby does not respond to their name? Learn when babies should respond, when to worry, and what to do.',
              path: '/milestones/not-responding-to-name',
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
          { label: 'Not Responding to Name' },
        ]}
      />

      <h1 className="text-2xl font-bold text-foreground mb-2">
        Baby Not Responding to Their Name
      </h1>
      <p className="text-sm text-muted mb-6">
        When babies should respond, what it means if they do not, and what to do next.
      </p>

      <KeyTakeaways
        takeaways={[
          'Most babies respond to their name consistently by 7-9 months',
          'The CDC lists not responding to name by 9 months as a developmental concern',
          'This is one of the earliest behavioral signs associated with autism — but has other causes too',
          'Hearing loss must be ruled out first with a formal hearing test',
          'A baby who sometimes responds when focused but ignores when engaged is less concerning',
          'Consistent failure to respond across different settings warrants prompt evaluation',
        ]}
      />

      <div className="mb-6">
        <MedicalReviewAttribution sources={['CDC', 'AAP']} reviewDate="July 2026" />
      </div>

      <LastReviewed date="2026-07-18" />

      <section className="rounded-xl border border-[#E8E2D9] bg-white p-5 mt-6 mb-6">
        <h2 className="text-base font-bold text-foreground mb-2">What is normal?</h2>
        <div className="text-sm text-muted leading-relaxed space-y-3">
          <p>Name response develops gradually:</p>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>4-5 months:</strong> Baby may show awareness of familiar voices and sounds</li>
            <li><strong>5-7 months:</strong> Baby begins to recognize their name and may look toward the speaker</li>
            <li><strong>7-9 months:</strong> Baby consistently turns and looks when their name is called</li>
            <li><strong>9-12 months:</strong> Reliable name response, even from across the room</li>
          </ul>
          <p>
            The CDC lists &ldquo;responds to own name&rdquo; as a 9-month milestone. By 9-12 months,
            a baby should reliably turn to look at you when you call their name in a normal voice,
            assuming they are not deeply absorbed in an activity.
          </p>
          <p>
            It is normal for babies to occasionally not respond when deeply focused on an
            interesting toy or activity — this is called &ldquo;focused attention.&rdquo; The concern
            is when a baby rarely or never responds regardless of the situation.
          </p>
        </div>
      </section>

      <section className="rounded-xl border border-[#E8E2D9] bg-white p-5 mb-6">
        <h2 className="text-base font-bold text-foreground mb-2">When to worry</h2>
        <div className="text-sm text-muted leading-relaxed space-y-3">
          <p>Talk to your pediatrician if your baby (9+ months):</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Rarely or never turns when their name is called</li>
            <li>Does not respond even when you are close and speaking clearly</li>
            <li>Does not respond to other sounds (clapping, loud noises)</li>
            <li>Seems to live &ldquo;in their own world&rdquo;</li>
            <li>Previously responded to their name but has stopped</li>
            <li>Also does not make eye contact or share attention</li>
            <li>Does not follow your pointing gesture</li>
            <li>Does not babble or use gestures</li>
          </ul>
          <p>
            The combination of not responding to name, absent pointing/gestures, and limited eye
            contact is particularly concerning and should be evaluated promptly.
          </p>
        </div>
      </section>

      <section className="rounded-xl border border-[#E8E2D9] bg-white p-5 mb-6">
        <h2 className="text-base font-bold text-foreground mb-2">Possible causes</h2>
        <div className="text-sm text-muted leading-relaxed space-y-3">
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Hearing loss:</strong> Must be ruled out first — even partial hearing loss can prevent name response</li>
            <li><strong>Chronic ear infections:</strong> Fluid in the ears can muffle sounds, making name recognition difficult</li>
            <li><strong>Autism spectrum disorder:</strong> Not responding to name is one of the earliest social communication signs</li>
            <li><strong>Focused attention style:</strong> Some babies have intense focus that makes them less responsive to external input (less concerning if they respond at other times)</li>
            <li><strong>Global developmental delay:</strong> Delays across multiple areas may affect social responsiveness</li>
            <li><strong>Excessive screen time:</strong> Some research suggests that high screen exposure may affect responsiveness to social cues</li>
            <li><strong>Noisy environment:</strong> Constant background noise can reduce a baby&apos;s ability to distinguish their name</li>
          </ul>
        </div>
      </section>

      <section className="rounded-xl border border-[#E8E2D9] bg-white p-5 mb-6">
        <h2 className="text-base font-bold text-foreground mb-2">How to test name response at home</h2>
        <div className="text-sm text-muted leading-relaxed space-y-3">
          <p>
            To informally assess whether your baby responds to their name:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>Wait until your baby is calm and awake but not deeply focused on something</li>
            <li>Position yourself where they cannot see you (behind or to the side)</li>
            <li>Call their name once in a normal conversational tone</li>
            <li>Wait 3-5 seconds for a response (turning head, looking toward you)</li>
            <li>If no response, try again after 10-15 seconds</li>
            <li>Try this across several different days and situations</li>
          </ul>
          <p>
            A baby who responds at least 5-7 times out of 10 attempts is likely within normal
            range. A baby who responds fewer than 3 times out of 10 attempts should be evaluated.
          </p>
        </div>
      </section>

      <section className="rounded-xl border border-[#E8E2D9] bg-white p-5 mb-6">
        <h2 className="text-base font-bold text-foreground mb-2">What you can do</h2>
        <div className="text-sm text-muted leading-relaxed space-y-3">
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Get a hearing test:</strong> Essential first step to rule out hearing loss</li>
            <li><strong>Use your baby&apos;s name frequently:</strong> Say their name before making a request or pointing something out</li>
            <li><strong>Get close:</strong> Say their name while at their level and within their visual field</li>
            <li><strong>Reduce background noise:</strong> Turn off TV, music, and other constant noise sources</li>
            <li><strong>Make responding rewarding:</strong> When they do look, smile, engage, and make it worthwhile</li>
            <li><strong>Limit screen time:</strong> Especially passive, non-interactive screen exposure</li>
            <li><strong>Play name games:</strong> Songs that include your baby&apos;s name, peek-a-boo while calling their name</li>
          </ul>
        </div>
      </section>

      <section className="rounded-xl border border-[#E8E2D9] bg-white p-5 mb-6">
        <h2 className="text-base font-bold text-foreground mb-2">When to get evaluated</h2>
        <div className="text-sm text-muted leading-relaxed space-y-3">
          <p>
            If your baby consistently does not respond to their name by 9-12 months, request
            evaluation. Steps may include:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Audiological evaluation:</strong> Comprehensive hearing test (ABR or behavioral audiometry)</li>
            <li><strong>Developmental screening:</strong> Assessment of overall development</li>
            <li><strong>Autism screening:</strong> M-CHAT-R/F or similar tool (typically at 18 months, but can be done earlier)</li>
            <li><strong>Comprehensive developmental evaluation:</strong> If initial screenings suggest concerns</li>
          </ul>
          <p>
            Do not wait until 18 months for autism screening if your baby shows multiple early
            signs (no name response + no pointing + limited eye contact). Request earlier screening
            from your pediatrician.
          </p>
        </div>
      </section>

      <section className="rounded-xl border border-primary/30 bg-primary-light p-5 mb-6">
        <h2 className="text-base font-bold text-foreground mb-2">Reassurance</h2>
        <div className="text-sm text-muted leading-relaxed space-y-3">
          <p>
            Not responding to name does not automatically mean autism or any specific diagnosis.
            Hearing problems, ear infections, and environmental factors can all play a role. Many
            babies who are evaluated for this concern turn out to have a treatable cause or develop
            the skill with minor environmental changes.
          </p>
          <p>
            If your baby makes good eye contact, babbles, uses gestures, and shows social interest
            but sometimes does not respond to their name, the concern is lower. However, getting a
            hearing test is still recommended to rule out any hearing involvement.
          </p>
        </div>
      </section>

      <FAQSection items={faqItems} />

      <BottomLine
        summary="Consistent failure to respond to name by 9-12 months warrants evaluation. Start with a hearing test to rule out hearing loss. If hearing is normal and your baby also shows limited eye contact, absent pointing, or reduced social engagement, request developmental screening. Early identification leads to early intervention, which produces the best outcomes regardless of the cause."
      />

      <div className="mt-6">
        <EditorialTrustBanner variant="compact" />
      </div>

      <div className="mt-10 pt-6 border-t border-border flex flex-wrap gap-4">
        <Link href="/milestones/missed" className="text-sm text-primary font-semibold hover:underline">
          Missed Milestones Hub
        </Link>
        <Link href="/milestones/not-pointing-12mo" className="text-sm text-primary font-semibold hover:underline">
          Not Pointing at 12 Months
        </Link>
        <Link href="/milestones/not-babbling-9mo" className="text-sm text-primary font-semibold hover:underline">
          Not Babbling at 9 Months
        </Link>
        <Link href="/development/red-flags" className="text-sm text-primary font-semibold hover:underline">
          Developmental Red Flags
        </Link>
      </div>
    </article>
  );
}
