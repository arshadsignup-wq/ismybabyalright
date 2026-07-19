import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import KeyTakeaways from '@/components/shared/KeyTakeaways';
import FAQSection from '@/components/shared/FAQSection';
import LastReviewed from '@/components/shared/LastReviewed';
import EditorialTrustBanner from '@/components/shared/EditorialTrustBanner';
import BottomLine from '@/components/shared/BottomLine';
import MedicalReviewAttribution from '@/components/shared/MedicalReviewAttribution';
import { getBreadcrumbSchema, getContentPageSchema, getFAQPageSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Toddler Language Explosion (18-36mo)',
  description:
    'Language development milestones from 18-36 months. Vocabulary explosion, first sentences, when to worry about speech delays, and how to encourage language growth.',
  alternates: { canonical: '/toddler/language-explosion' },
  openGraph: {
    title: 'Toddler Language Explosion | Is My Baby Alright?',
    description: 'Vocabulary growth, first sentences, and when to seek help for speech delays.',
  },
};

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Toddler Guide', url: '/toddler' },
  { name: 'Language Explosion' },
];

const faqItems = [
  { question: 'How many words should my 18-month-old say?', answer: 'The CDC milestone for 18 months is at least 10 words (beyond mama/dada). Many children have 20-50 words by 18 months. However, comprehension (understanding) is more important than production at this age.' },
  { question: 'When should my toddler start putting words together?', answer: 'Most children begin combining two words ("more milk," "daddy go") by 20-24 months. The CDC milestone is 2-word phrases by 24 months. If your child is not combining words by 24 months, talk to your pediatrician.' },
  { question: 'Is it normal for a 2-year-old to be hard to understand?', answer: 'Yes. At age 2, strangers typically understand about 50% of what a child says. By age 3, this rises to about 75%. By age 4, most speech should be intelligible to unfamiliar listeners.' },
  { question: 'Does screen time affect language development?', answer: 'Research consistently shows that passive screen time (TV, videos) does not support language development and may delay it. Interactive conversation with caregivers is what builds language. The AAP recommends no screen time before 18 months (except video calls).' },
  { question: 'My toddler stutters. Should I be worried?', answer: 'Developmental stuttering (disfluency) is common between ages 2-5 as language outpaces speech motor skills. It usually resolves on its own. See a speech-language pathologist if stuttering lasts more than 6 months, worsens, or causes frustration.' },
];

export default function LanguageExplosionPage() {
  return (
    <article className="max-w-3xl mx-auto px-5 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getContentPageSchema({
          name: 'Toddler Language Explosion (18-36 Months)',
          description: 'Language development milestones from 18-36 months and how to support vocabulary growth.',
          path: '/toddler/language-explosion',
          lastModified: '2026-07-01',
          medicalGuidelines: [
            { name: 'AAP Developmental Guidelines', url: 'https://www.aap.org/en/clinical-guidance/' },
            { name: 'CDC Developmental Milestones', url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html' },
            { name: 'ASHA Speech-Language Milestones', url: 'https://www.asha.org/' },
          ],
        })) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getFAQPageSchema(faqItems)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getBreadcrumbSchema(breadcrumbItems)) }}
      />

      <Breadcrumbs items={[{ label: 'Toddler Guide', href: '/toddler' }, { label: 'Language Explosion' }]} />

      <h1 className="text-2xl font-bold text-foreground mb-2">The Toddler Language Explosion (18-36 Months)</h1>
      <LastReviewed date="2026-07-01" />
      <MedicalReviewAttribution sources={['AAP', 'CDC', 'ASHA']} />
      <p className="text-sm text-muted mb-6">
        Between 18 and 36 months, your child&apos;s vocabulary may grow from 50 words to over 1,000. They will go from single words to short sentences, start asking questions, and begin expressing complex ideas. This guide covers what to expect, how to help, and when to seek evaluation.
      </p>

      <KeyTakeaways
        takeaways={[
          'Vocabulary typically grows from ~50 words at 18 months to 1,000+ by age 3',
          'Two-word combinations should appear by 24 months (CDC milestone)',
          'Comprehension develops faster than speech \u2014 toddlers understand more than they can say',
          'Talking TO your child (not screen time) is the primary driver of language growth',
          'Early intervention for speech delays is more effective the earlier it starts',
        ]}
      />

      <div className="space-y-6">
        <Section title="Language milestones by age">
          <h3 className="font-semibold mb-1">18 months:</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Says at least 10 words (CDC milestone)</li>
            <li>Points to body parts when asked</li>
            <li>Follows simple one-step directions</li>
            <li>Tries to say 3 or more words besides mama/dada</li>
            <li>Points to show you something interesting</li>
          </ul>
          <h3 className="font-semibold mt-3 mb-1">24 months:</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Says at least 50 words (many children have 200-300)</li>
            <li>Puts 2 words together (&ldquo;more milk,&rdquo; &ldquo;daddy go,&rdquo; &ldquo;big truck&rdquo;)</li>
            <li>Points to things in a book when named</li>
            <li>Follows 2-step instructions (&ldquo;Get the ball and bring it to me&rdquo;)</li>
            <li>Knows at least 2 body parts</li>
            <li>Uses words more than gestures to communicate</li>
          </ul>
          <h3 className="font-semibold mt-3 mb-1">30 months:</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Says about 450+ words</li>
            <li>Uses 2-3 word phrases regularly</li>
            <li>Asks simple questions (&ldquo;What&apos;s that?&rdquo;)</li>
            <li>Uses pronouns (I, me, you) sometimes</li>
            <li>Names items in pictures</li>
          </ul>
          <h3 className="font-semibold mt-3 mb-1">36 months:</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Says 1,000+ words</li>
            <li>Speaks in 3-4 word sentences</li>
            <li>Strangers can understand about 75% of speech</li>
            <li>Asks &ldquo;why?&rdquo; and &ldquo;what?&rdquo; questions</li>
            <li>Can tell you their name and age</li>
            <li>Has simple conversations</li>
            <li>Uses plurals and past tense (with errors)</li>
          </ul>
        </Section>

        <Section title="What drives the language explosion?">
          <p>Several developmental changes converge to produce rapid language growth:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Brain development:</strong> Neural pathways for language processing mature rapidly between 18-36 months</li>
            <li><strong>Vocabulary threshold:</strong> Once children have ~50 words, they develop &ldquo;fast mapping&rdquo; — learning new words after just 1-2 exposures</li>
            <li><strong>Social motivation:</strong> The desire to communicate drives practice and effort</li>
            <li><strong>Cognitive growth:</strong> Symbolic thinking allows words to represent absent objects and abstract concepts</li>
            <li><strong>Memory capacity:</strong> Working memory expands, allowing longer utterances</li>
          </ul>
        </Section>

        <Section title="How to support language development">
          <h3 className="font-semibold mb-1">Evidence-based strategies:</h3>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Talk throughout the day:</strong> Narrate what you are doing, seeing, and feeling</li>
            <li><strong>Read daily:</strong> Interactive reading (asking questions, pointing, discussing) is most effective</li>
            <li><strong>Expand their utterances:</strong> Child says &ldquo;dog run&rdquo; — you say &ldquo;Yes! The brown dog is running fast!&rdquo;</li>
            <li><strong>Wait and listen:</strong> Give your child 5-10 seconds to respond before jumping in</li>
            <li><strong>Follow their lead:</strong> Talk about what they are interested in, not what you want to discuss</li>
            <li><strong>Use parentese:</strong> Slightly exaggerated speech with clear pronunciation (not baby talk)</li>
            <li><strong>Sing songs and nursery rhymes:</strong> Repetition and rhythm support language patterns</li>
            <li><strong>Limit screen time:</strong> Screens do not teach language — human interaction does</li>
          </ul>
          <h3 className="font-semibold mt-3 mb-1">What NOT to do:</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Do not correct pronunciation directly (&ldquo;No, it is not wabbit, it is rabbit&rdquo;)</li>
            <li>Do not force your child to say words or perform language on command</li>
            <li>Do not finish their sentences when they are trying to communicate</li>
            <li>Avoid quizzing (&ldquo;What is this? What color is this?&rdquo;) as the primary interaction style</li>
          </ul>
        </Section>

        <Section title="Bilingual language development">
          <ul className="list-disc list-inside space-y-1">
            <li>Bilingual children may have a smaller vocabulary in each language but a similar total vocabulary</li>
            <li>Code-switching (mixing languages) is normal and a sign of language skill, not confusion</li>
            <li>Bilingual children may hit milestones slightly later in each language — this is normal</li>
            <li>The benefits of bilingualism (cognitive flexibility, cultural connection) outweigh temporary delays</li>
            <li>Use whatever language comes naturally to each caregiver — consistency per person matters</li>
          </ul>
        </Section>

        <Section title="When to be concerned">
          <p>Talk to your pediatrician or request a speech-language evaluation if your child:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Has fewer than 10 words by 18 months</li>
            <li>Is not combining 2 words by 24 months</li>
            <li>Does not seem to understand simple instructions</li>
            <li>Loses words or skills they previously had (at any age)</li>
            <li>Is not using words to communicate by 16 months</li>
            <li>Does not point or gesture by 12 months</li>
            <li>Is extremely difficult to understand at age 3 (less than 50% intelligible to strangers)</li>
          </ul>
          <p className="mt-2">
            Early intervention is free in most states for children under 3 (through Early Intervention programs) and is most effective the earlier it begins. You do not need a formal diagnosis to request an evaluation.
          </p>
        </Section>

        <Section title="Late talkers vs. language disorders">
          <p>About 15-20% of toddlers are &ldquo;late talkers&rdquo; — children who speak fewer words than expected but have normal comprehension and no other developmental concerns. Of these:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>About 50-70% catch up on their own by age 3-4 (&ldquo;late bloomers&rdquo;)</li>
            <li>About 30-50% continue to have language difficulties</li>
            <li>You cannot reliably predict which group a child will fall into without evaluation</li>
            <li>Early evaluation and monitoring is always worthwhile — it never hurts to check</li>
          </ul>
        </Section>

        <FAQSection items={faqItems} />
      </div>

      <BottomLine summary="The language explosion between 18-36 months is one of the most remarkable developmental achievements. Your child will go from single words to sentences, from naming to questioning, from simple requests to storytelling. The best thing you can do is talk, read, and listen. If you have any concern about your child's language development, request an evaluation — early intervention makes a significant difference." />

      <div className="mt-6"><EditorialTrustBanner variant="compact" /></div>

      <div className="mt-10 pt-6 border-t border-border flex items-center justify-between">
        <Link href="/toddler/independence" className="text-sm text-primary font-semibold hover:underline">&larr; Independence</Link>
        <Link href="/toddler/social-skills" className="text-sm text-primary font-semibold hover:underline">Social Skills &rarr;</Link>
      </div>
    </article>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-xl border border-[#E8E2D9] bg-white p-5">
      <h2 className="text-base font-bold text-foreground mb-2">{title}</h2>
      <div className="text-sm text-muted leading-relaxed space-y-2">{children}</div>
    </section>
  );
}
