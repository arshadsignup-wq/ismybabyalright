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
  title: 'Toddler Social Development',
  description:
    'Toddler social skills development: parallel play, sharing, turn-taking, empathy, and making friends. What to expect from 12-36 months and how to support social growth.',
  alternates: { canonical: '/toddler/social-skills' },
  openGraph: {
    title: 'Toddler Social Development | Is My Baby Alright?',
    description: 'What to expect for social skills from 12-36 months and how to help.',
  },
};

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Toddler Guide', url: '/toddler' },
  { name: 'Social Skills' },
];

const faqItems = [
  { question: 'When do toddlers start playing with other children?', answer: 'True cooperative play (playing together with a shared goal) does not typically begin until age 3-4. Before that, toddlers engage in parallel play (playing near each other) and associative play (interacting but without coordination). This is completely normal.' },
  { question: 'Is it normal for my toddler to not want to share?', answer: 'Yes. Understanding ownership and the concept that shared items will be returned is cognitively complex. True sharing develops between ages 3-4. Before that, turn-taking with adult support is a more realistic expectation.' },
  { question: 'My toddler bites other children. Is this normal?', answer: 'Biting is common in toddlers (especially 12-24 months) who lack the language to express frustration, excitement, or territorial feelings. It is not a sign of aggression or bad parenting. Consistent redirection and teaching alternative communication typically resolves it.' },
  { question: 'Should I worry if my toddler prefers to play alone?', answer: 'Parallel play (near but not with other children) is developmentally normal until about age 3. However, if your child shows no interest in other people at all, avoids eye contact, or does not respond to their name, discuss this with your pediatrician.' },
  { question: 'How do I help my toddler who is shy around other children?', answer: 'Respect their temperament. Stay close for security, arrive early to new situations so they can warm up, do not force interaction, and model social behavior. Most shy toddlers become more social with time and gentle exposure.' },
];

export default function ToddlerSocialSkillsPage() {
  return (
    <article className="max-w-3xl mx-auto px-5 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getContentPageSchema({
          name: 'Toddler Social Development',
          description: 'Toddler social skills: parallel play, sharing, turn-taking, empathy, and making friends.',
          path: '/toddler/social-skills',
          lastModified: '2026-07-01',
          medicalGuidelines: [
            { name: 'AAP Developmental Guidelines', url: 'https://www.aap.org/en/clinical-guidance/' },
            { name: 'CDC Developmental Milestones', url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html' },
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

      <Breadcrumbs items={[{ label: 'Toddler Guide', href: '/toddler' }, { label: 'Social Skills' }]} />

      <h1 className="text-2xl font-bold text-foreground mb-2">Toddler Social Development</h1>
      <LastReviewed date="2026-07-01" />
      <MedicalReviewAttribution sources={['AAP', 'CDC']} />
      <p className="text-sm text-muted mb-6">
        Toddlers are just beginning to understand that other people have feelings, desires, and perspectives different from their own. Social skills develop gradually from 12 to 36 months, moving from solitary play through parallel play to the earliest forms of friendship.
      </p>

      <KeyTakeaways
        takeaways={[
          'Parallel play (playing near but not with others) is normal and healthy until age 3',
          'True sharing requires cognitive skills most toddlers have not yet developed',
          'Biting, hitting, and grabbing are communication attempts, not aggression',
          'Empathy begins emerging around 18-24 months but is inconsistent until age 4-5',
          'Social skills are learned through practice, modeling, and gentle guidance \u2014 not punishment',
        ]}
      />

      <div className="space-y-6">
        <Section title="Stages of social play development">
          <h3 className="font-semibold mb-1">Solitary play (12-18 months):</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Plays alone, even when other children are present</li>
            <li>May watch other children with interest but does not join in</li>
            <li>This is completely normal and healthy for this age</li>
          </ul>
          <h3 className="font-semibold mt-3 mb-1">Parallel play (18-30 months):</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Plays alongside other children with similar toys</li>
            <li>Aware of other children but not coordinating with them</li>
            <li>May imitate what another child is doing</li>
            <li>This is the dominant play style throughout toddlerhood</li>
          </ul>
          <h3 className="font-semibold mt-3 mb-1">Associative play (30-36 months):</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Begins interacting with other children during play</li>
            <li>May share materials or talk about what they are doing</li>
            <li>No organized rules or shared goals yet</li>
            <li>Earliest form of &ldquo;playing together&rdquo;</li>
          </ul>
          <h3 className="font-semibold mt-3 mb-1">Cooperative play (3-4+ years):</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>True collaborative play with shared goals and roles</li>
            <li>Pretend play with assigned characters</li>
            <li>Taking turns within a game structure</li>
            <li>This develops AFTER the toddler years for most children</li>
          </ul>
        </Section>

        <Section title="Social milestones to expect">
          <h3 className="font-semibold mb-1">12-18 months:</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Shows objects to others to share interest (joint attention)</li>
            <li>Waves bye-bye</li>
            <li>Plays simple interactive games (peek-a-boo, pat-a-cake)</li>
            <li>May show affection to familiar people</li>
          </ul>
          <h3 className="font-semibold mt-3 mb-1">18-24 months:</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Shows interest in other children (watches, approaches)</li>
            <li>May offer a toy to another child (not true sharing but a social gesture)</li>
            <li>Begins to show concern when someone is upset (early empathy)</li>
            <li>Engages in simple pretend play</li>
            <li>Says &ldquo;mine&rdquo; frequently (developing sense of ownership)</li>
          </ul>
          <h3 className="font-semibold mt-3 mb-1">24-36 months:</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Can take turns with adult guidance</li>
            <li>Shows awareness of others&apos; feelings (&ldquo;Baby crying&rdquo;)</li>
            <li>Plays alongside peers with increasing interaction</li>
            <li>May have preferred playmates</li>
            <li>Begins simple pretend play with others</li>
            <li>Can follow simple social rules with reminders</li>
          </ul>
        </Section>

        <Section title="Why sharing is so hard for toddlers">
          <p>True sharing requires cognitive abilities most toddlers have not developed:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Theory of mind:</strong> Understanding that others have different desires (develops around age 4)</li>
            <li><strong>Temporal understanding:</strong> Believing the toy will come back (abstract time concept)</li>
            <li><strong>Impulse control:</strong> Overriding the urge to keep something desirable (prefrontal cortex still developing)</li>
            <li><strong>Sense of ownership:</strong> Toddlers are still establishing what is &ldquo;mine&rdquo; — they need to own before they can share</li>
          </ul>
          <h3 className="font-semibold mt-3 mb-1">More realistic approach:</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Practice turn-taking with a timer instead of forced sharing</li>
            <li>Allow &ldquo;special toys&rdquo; that do not need to be shared (put them away before playdates)</li>
            <li>Model sharing yourself (&ldquo;I am going to share my snack with you&rdquo;)</li>
            <li>Praise natural sharing when it occurs (&ldquo;That was kind — you gave your friend a block&rdquo;)</li>
            <li>Do not force a child to give up a toy they are actively using</li>
          </ul>
        </Section>

        <Section title="Handling hitting, biting, and grabbing">
          <p>These behaviors are communication attempts, not aggression. Toddlers hit and bite because they:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Lack the language to express frustration, anger, or excitement</li>
            <li>Have not developed impulse control (this takes until age 5-7)</li>
            <li>Are overwhelmed by sensory input or emotions</li>
            <li>Are experimenting with cause and effect</li>
          </ul>
          <h3 className="font-semibold mt-3 mb-1">How to respond:</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Intervene immediately but calmly: &ldquo;I cannot let you hit. Hitting hurts.&rdquo;</li>
            <li>Comfort the hurt child first (this also models empathy)</li>
            <li>Give language for the emotion: &ldquo;You were angry because he took your toy.&rdquo;</li>
            <li>Teach an alternative: &ldquo;You can say &lsquo;my turn&rsquo; or come get me for help.&rdquo;</li>
            <li>Remove the child from the situation if they cannot stop</li>
            <li>Be consistent — the same response every time helps the lesson stick</li>
          </ul>
        </Section>

        <Section title="Supporting social development">
          <ul className="list-disc list-inside space-y-1">
            <li>Provide regular opportunities for peer interaction (playgroups, park, library story time)</li>
            <li>Keep groups small (1-2 other children is plenty for toddlers)</li>
            <li>Supervise closely and intervene early to prevent escalation</li>
            <li>Model social language: greetings, please/thank you, asking to join</li>
            <li>Read books about friendships and feelings</li>
            <li>Name emotions in everyday situations (&ldquo;That boy looks happy!&rdquo;)</li>
            <li>Do not force reluctant children into social situations — stay close and let them warm up</li>
            <li>Praise specific social behaviors: &ldquo;You waited for your turn. That was patient.&rdquo;</li>
          </ul>
        </Section>

        <Section title="When to be concerned">
          <p>Talk to your pediatrician if your toddler:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Shows no interest in other people (children or adults) by 18 months</li>
            <li>Does not engage in joint attention (sharing interest by pointing or showing)</li>
            <li>Avoids eye contact consistently</li>
            <li>Does not respond to their name by 12 months</li>
            <li>Does not imitate actions or sounds</li>
            <li>Shows no pretend play by 24 months</li>
            <li>Has extreme distress in social situations that does not improve with exposure</li>
          </ul>
          <p className="mt-2">
            These may be signs of autism spectrum disorder or other developmental differences. Early evaluation and intervention lead to better outcomes.
          </p>
        </Section>

        <FAQSection items={faqItems} />
      </div>

      <BottomLine summary="Toddler social skills develop gradually from solitary play to the earliest forms of friendship. Parallel play is normal and healthy throughout toddlerhood. Forced sharing, punishment for hitting, and pushing reluctant children into social situations are counterproductive. Instead, model, narrate, and gently guide. If your child shows no interest in others or avoids social engagement entirely, consult your pediatrician." />

      <div className="mt-6"><EditorialTrustBanner variant="compact" /></div>

      <div className="mt-10 pt-6 border-t border-border flex items-center justify-between">
        <Link href="/toddler/language-explosion" className="text-sm text-primary font-semibold hover:underline">&larr; Language Explosion</Link>
        <Link href="/toddler/routine" className="text-sm text-primary font-semibold hover:underline">Daily Routines &rarr;</Link>
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
