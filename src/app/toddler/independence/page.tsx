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
  title: 'Fostering Toddler Independence',
  description:
    'How to support your toddler\'s growing need for independence safely. Age-appropriate autonomy, practical skills, and managing the "I do it myself" phase.',
  alternates: { canonical: '/toddler/independence' },
  openGraph: {
    title: 'Fostering Toddler Independence | Is My Baby Alright?',
    description: 'Support your toddler\'s need for autonomy with age-appropriate opportunities.',
  },
};

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Toddler Guide', url: '/toddler' },
  { name: 'Independence' },
];

const faqItems = [
  { question: 'Is it normal for my toddler to want to do everything themselves?', answer: 'Yes. The drive for autonomy is one of the strongest developmental forces in toddlerhood (ages 18-36 months). Erik Erikson identified this stage as "autonomy vs. shame and doubt" — it is how children develop confidence and self-efficacy.' },
  { question: 'How do I balance safety with independence?', answer: 'Create environments where independent exploration is safe (child-proofed spaces), offer choices within limits, and supervise without hovering. The goal is maximum safe autonomy, not zero risk.' },
  { question: 'My toddler gets frustrated when they cannot do something. What should I do?', answer: 'Acknowledge the frustration ("You are working hard on that!"), offer minimal assistance ("Can I hold this part while you do that part?"), and resist the urge to take over. Frustration tolerance is a skill that develops with practice.' },
  { question: 'At what age should toddlers dress themselves?', answer: 'Most toddlers can remove simple clothing by 18-24 months and put on some items (like pull-on pants or a hat) by 24-30 months. Full independent dressing typically develops by age 4-5.' },
  { question: 'Is my toddler being defiant or independent?', answer: 'Usually independent. "No" and "I do it" are expressions of growing autonomy, not defiance. True defiance involves understanding a rule and deliberately breaking it — most toddlers are still learning rules, not breaking them intentionally.' },
];

export default function ToddlerIndependencePage() {
  return (
    <article className="max-w-3xl mx-auto px-5 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getContentPageSchema({
          name: 'Fostering Toddler Independence',
          description: 'How to support your toddler\'s growing need for independence safely and appropriately.',
          path: '/toddler/independence',
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

      <Breadcrumbs items={[{ label: 'Toddler Guide', href: '/toddler' }, { label: 'Independence' }]} />

      <h1 className="text-2xl font-bold text-foreground mb-2">Fostering Toddler Independence</h1>
      <LastReviewed date="2026-07-01" />
      <MedicalReviewAttribution sources={['AAP', 'CDC']} />
      <p className="text-sm text-muted mb-6">
        &ldquo;I do it myself!&rdquo; is one of the defining phrases of toddlerhood. Your child&apos;s drive for independence is not stubbornness — it is a critical developmental need. Supporting autonomy builds confidence, problem-solving skills, and emotional resilience.
      </p>

      <KeyTakeaways
        takeaways={[
          'The drive for autonomy peaks between 18-36 months and is developmentally essential',
          'Offering choices within limits satisfies the need for control without chaos',
          'Allow extra time for toddlers to attempt tasks independently',
          'Frustration during attempts is normal and builds resilience',
          'Scaffold (help partially) rather than take over when your child struggles',
        ]}
      />

      <div className="space-y-6">
        <Section title="Why independence matters developmentally">
          <p>According to developmental psychology, toddlers are in the &ldquo;autonomy vs. shame and doubt&rdquo; stage. Successfully navigating this stage builds:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Self-efficacy:</strong> &ldquo;I can do things&rdquo; — the foundation of confidence</li>
            <li><strong>Problem-solving skills:</strong> Figuring out how to put on a shoe develops cognitive flexibility</li>
            <li><strong>Frustration tolerance:</strong> Learning to persist when something is hard</li>
            <li><strong>Intrinsic motivation:</strong> The satisfaction of accomplishment drives continued effort</li>
            <li><strong>Self-regulation:</strong> Making choices and experiencing consequences builds emotional control</li>
          </ul>
          <p className="mt-2">
            Children whose autonomy is consistently overridden may develop doubt in their abilities or become passive — waiting for adults to do things for them.
          </p>
        </Section>

        <Section title="Age-appropriate independence opportunities">
          <h3 className="font-semibold mb-1">12-18 months:</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Self-feeding with fingers and beginning to use a spoon</li>
            <li>Drinking from an open cup (with spills)</li>
            <li>Pulling off socks, shoes, and hats</li>
            <li>Putting toys in a bin when asked</li>
            <li>Choosing between two options (this book or that book)</li>
          </ul>
          <h3 className="font-semibold mt-3 mb-1">18-24 months:</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Undressing themselves (pulling off pants, taking off jacket)</li>
            <li>Helping with simple chores (putting napkins on the table, wiping spills)</li>
            <li>Choosing clothes from 2-3 options</li>
            <li>Washing hands with supervision</li>
            <li>Carrying small items (their cup, a bag)</li>
            <li>Turning book pages independently</li>
          </ul>
          <h3 className="font-semibold mt-3 mb-1">24-36 months:</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Putting on some clothing items (pull-on pants, slip-on shoes)</li>
            <li>Brushing teeth (with parent follow-up)</li>
            <li>Pouring from a small pitcher</li>
            <li>Simple food preparation (spreading, stirring, tearing lettuce)</li>
            <li>Choosing activities and play materials</li>
            <li>Helping set the table</li>
            <li>Watering plants</li>
            <li>Putting on their own coat with the &ldquo;flip&rdquo; method</li>
          </ul>
        </Section>

        <Section title="The power of offering choices">
          <p>Choices give toddlers a sense of control without giving up parental boundaries:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Two options are ideal:</strong> &ldquo;Red shirt or blue shirt?&rdquo; (not &ldquo;What do you want to wear?&rdquo;)</li>
            <li><strong>Both options should be acceptable to you:</strong> Only offer choices you can live with</li>
            <li><strong>Avoid open-ended choices:</strong> Too many options overwhelm toddlers</li>
            <li><strong>Use choices to prevent power struggles:</strong> &ldquo;Do you want to walk to the car or hop like a bunny?&rdquo;</li>
            <li><strong>Honor the choice:</strong> If you offer it, follow through — this builds trust</li>
          </ul>
        </Section>

        <Section title="How to scaffold instead of taking over">
          <p>When your toddler struggles, resist the urge to do it for them. Instead:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Wait:</strong> Give them 10-15 seconds before intervening (it feels longer than it is)</li>
            <li><strong>Narrate:</strong> &ldquo;You are trying to get your shoe on. The opening goes at the top.&rdquo;</li>
            <li><strong>Offer minimal help:</strong> &ldquo;Can I hold the shoe open while you push your foot in?&rdquo;</li>
            <li><strong>Break it down:</strong> Do one part, let them do the next part</li>
            <li><strong>Celebrate effort:</strong> &ldquo;You worked so hard on that!&rdquo; (not just results)</li>
          </ul>
        </Section>

        <Section title="Managing the time factor">
          <p>Independence takes time. Toddlers are slow. Here is how to make it work:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Build extra time into routines (if shoes take 5 minutes, start 5 minutes earlier)</li>
            <li>Choose your battles: let them do it themselves when time allows, help when it does not</li>
            <li>Use transitional language: &ldquo;In the morning we have time for you to dress yourself. Right now we are in a hurry, so I will help.&rdquo;</li>
            <li>Prepare the night before: lay out clothes, pack bags, set up breakfast items within reach</li>
          </ul>
        </Section>

        <Section title="When independence becomes unsafe">
          <p>Some boundaries are non-negotiable. Independence does not mean unlimited freedom:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Car seat, street safety, and water safety rules are not optional</li>
            <li>Redirect rather than simply say no: &ldquo;You cannot climb the bookshelf, but you can climb this.&rdquo;</li>
            <li>Explain briefly: &ldquo;I cannot let you do that because it is not safe.&rdquo;</li>
            <li>Offer an alternative way to be independent in the moment</li>
            <li>Accept the tantrum that may follow — holding a boundary is not the same as limiting independence</li>
          </ul>
        </Section>

        <FAQSection items={faqItems} />
      </div>

      <BottomLine summary="Your toddler's fierce desire to 'do it myself' is not defiance — it is healthy development. Support autonomy by offering choices, allowing extra time, scaffolding rather than taking over, and creating safe environments for exploration. The payoff is a confident, capable child who believes in their own abilities." />

      <div className="mt-6"><EditorialTrustBanner variant="compact" /></div>

      <div className="mt-10 pt-6 border-t border-border flex items-center justify-between">
        <Link href="/toddler" className="text-sm text-primary font-semibold hover:underline">&larr; Toddler Guide</Link>
        <Link href="/toddler/language-explosion" className="text-sm text-primary font-semibold hover:underline">Language Explosion &rarr;</Link>
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
