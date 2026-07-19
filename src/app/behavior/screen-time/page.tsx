import type { Metadata } from 'next';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import KeyTakeaways from '@/components/shared/KeyTakeaways';
import FAQSection from '@/components/shared/FAQSection';
import EditorialTrustBanner from '@/components/shared/EditorialTrustBanner';
import LastReviewed from '@/components/shared/LastReviewed';
import MedicalReviewAttribution from '@/components/shared/MedicalReviewAttribution';
import BottomLine from '@/components/shared/BottomLine';
import { getBreadcrumbSchema, getContentPageSchema, getFAQPageSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Screen Time Guidelines for Babies & Toddlers by Age',
  description:
    'AAP and WHO screen time recommendations by age. Covers effects on development, how to set limits, what counts as quality content, and managing screens in a digital world.',
  alternates: { canonical: '/behavior/screen-time' },
};

const faqItems = [
  {
    question: 'Does any screen time harm my baby?',
    answer:
      'The AAP recommends avoiding screen media (other than video chatting) for children under 18 months. Brief, occasional exposure is unlikely to cause harm, but regular screen use in infancy is associated with delayed language development and reduced parent-child interaction. The concern is not one episode of TV but patterns of use that replace interaction and play.',
  },
  {
    question: 'Does video chatting count as screen time?',
    answer:
      'The AAP considers video chatting with family or friends an exception to screen time limits for children under 18 months. Research shows that babies as young as 12 months can learn from live video interactions because they involve real-time social engagement. Video chat with grandparents or deployed parents is beneficial, not harmful.',
  },
  {
    question: 'Is educational screen time okay for toddlers?',
    answer:
      'For children 18-24 months, high-quality educational programming (like Sesame Street) watched with a parent who interacts and reinforces content can have modest learning benefits. However, children under 3 learn significantly more from real-world interactions than screens. The key is co-viewing — watching together and talking about what you see.',
  },
  {
    question: 'How do I handle screen time at restaurants or on airplanes?',
    answer:
      'Using screens during travel or in situations where you need your child calm is reasonable and not harmful when it is occasional rather than the default. Bring alternative activities first (books, stickers, snacks), but do not guilt yourself about using a tablet on a long flight. Context matters more than rigid rules.',
  },
  {
    question: 'My toddler has a meltdown when I turn screens off. What should I do?',
    answer:
      'This is very common. Screens are designed to be engaging, and transitions are hard for toddlers regardless. Give a 5-minute and 1-minute warning before turning off. Use a timer they can see. Have a planned activity ready for after screens. Be consistent with limits even through protests. Over time, the meltdowns will decrease as the routine becomes expected.',
  },
];

const takeaways = [
  'AAP recommends no screen time (except video chat) for children under 18 months',
  'Ages 18-24 months: only high-quality content, watched together with a parent',
  'Ages 2-5: limit to 1 hour per day of high-quality programming',
  'Co-viewing (watching together and discussing) dramatically increases any learning benefit',
  'The biggest concern is what screens replace: conversation, play, sleep, and physical activity',
];

export default function ScreenTimePage() {
  const contentSchema = getContentPageSchema({
    name: 'Screen Time Guidelines for Babies & Toddlers by Age',
    description:
      'Evidence-based screen time recommendations from AAP and WHO with practical guidance for families.',
    path: '/behavior/screen-time',
    lastModified: '2026-07-01',
  });
  const faqSchema = getFAQPageSchema(faqItems);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Behavior', url: '/behavior' },
    { name: 'Screen Time' },
  ]);

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contentSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Breadcrumbs items={[{ label: 'Behavior', href: '/behavior' }, { label: 'Screen Time' }]} />

      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
          Screen Time Guidelines for Babies & Toddlers by Age
        </h1>

        <p className="mt-4 text-base text-muted leading-relaxed">
          Screens are everywhere, and navigating recommendations can feel impossible — especially when you are exhausted and screens buy you 20 minutes of peace. Here is what the research actually shows, the official guidelines by age, and practical approaches for real-life families.
        </p>

        <div className="mt-4">
          <MedicalReviewAttribution sources={['AAP', 'WHO']} />
          <LastReviewed date="2026-07-01" />
        </div>

        <div className="mt-6">
          <KeyTakeaways takeaways={takeaways} />
        </div>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Official recommendations by age
          </h2>
          <div className="space-y-4 text-sm text-muted leading-relaxed">
            <div>
              <h3 className="font-semibold text-foreground mb-1">Under 18 months</h3>
              <p>
                The AAP recommends avoiding screen media other than video chatting. The WHO recommends no sedentary screen time at all for infants under 1 year. At this age, babies learn primarily through face-to-face interaction, touch, movement, and exploration. Research shows that infants under 18 months cannot effectively learn from screens — a phenomenon called the "video deficit effect." They need real-world interaction to develop language and social skills.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">18-24 months</h3>
              <p>
                If you choose to introduce screens, the AAP recommends only high-quality programming (designed for this age group by child development experts) and that parents watch together to help children understand what they are seeing. Co-viewing — pausing to ask questions, relating content to real life, and repeating new words — transforms passive viewing into interactive learning.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">2-5 years</h3>
              <p>
                Limit screen time to 1 hour per day of high-quality programming. Continue co-viewing when possible. The WHO recommends no more than 1 hour of sedentary screen time, with less being better. At this age, children can learn from well-designed educational content (Sesame Street, Daniel Tiger, Bluey) but still learn more from real-world play and interaction.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            What the research actually shows
          </h2>
          <div className="space-y-3 text-sm text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">Language development.</strong> Multiple studies show that background TV reduces the quantity and quality of parent-child conversation. For every hour of screen time, children hear fewer words directed at them. Heavy screen use before age 2 is associated with language delays, though causation is difficult to establish.
            </p>
            <p>
              <strong className="text-foreground">Sleep.</strong> Screen use in the hour before bedtime is consistently associated with shorter sleep duration, longer time to fall asleep, and more night waking. The blue light from screens suppresses melatonin, and stimulating content keeps the brain activated.
            </p>
            <p>
              <strong className="text-foreground">Attention.</strong> Fast-paced programming (rapid scene changes, bright flashing) has been linked to attention difficulties in some studies, though the evidence is mixed. Slow-paced, narrative-driven shows do not carry the same risk.
            </p>
            <p>
              <strong className="text-foreground">Physical activity.</strong> Screen time displaces active play. Children who spend more time with screens get less physical activity, which affects motor development, weight, and overall health.
            </p>
            <p>
              <strong className="text-foreground">Context matters most.</strong> The strongest research suggests that the primary concern is what screens replace (conversation, play, sleep, physical activity) rather than screens being inherently toxic. A child in a language-rich, play-filled environment who watches 30 minutes of Sesame Street is in a very different situation than a child who has screens as their primary entertainment for hours daily.
            </p>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Practical strategies for managing screens
          </h2>
          <div className="space-y-3 text-sm text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">Create a family media plan.</strong> The AAP offers a free tool at HealthyChildren.org. Decide together where, when, and how much screen time is appropriate for your family. Having a plan prevents in-the-moment negotiations.
            </p>
            <p>
              <strong className="text-foreground">Establish screen-free zones and times.</strong> Bedrooms, mealtimes, and the hour before bed are the most impactful screen-free boundaries. These protect sleep, family connection, and eating habits.
            </p>
            <p>
              <strong className="text-foreground">Use timers and warnings.</strong> Give 5-minute and 1-minute warnings before screen time ends. Use a visible timer. Have a planned transition activity ready ("After the show, we are going outside").
            </p>
            <p>
              <strong className="text-foreground">Choose quality over quantity.</strong> When your child does watch, choose slow-paced, narrative-driven, educational content. Programs designed with child development experts (Sesame Street, Daniel Tiger, Bluey) are significantly better than random YouTube videos or fast-paced cartoons.
            </p>
            <p>
              <strong className="text-foreground">Co-view when possible.</strong> Watch together, ask questions, relate content to your child&apos;s life, and repeat vocabulary. This makes screen time interactive and dramatically increases learning potential.
            </p>
            <p>
              <strong className="text-foreground">Model the behavior you want.</strong> Children notice when parents are on their phones. Your own screen habits matter both as modeling and because phone use reduces your availability and responsiveness.
            </p>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            A note about guilt and reality
          </h2>
          <p className="text-sm text-muted leading-relaxed">
            If your child has watched more screen time than guidelines recommend, that is okay. Guidelines represent ideals. Real life includes sick days, exhausted parents, winter afternoons, and work-from-home meetings. The occasional extra show will not harm your child. What matters is the overall pattern — prioritizing play, conversation, outdoor time, and sleep as the foundation of their day, with screens as one small part rather than the primary activity. If you are reading this article and thinking about your child&apos;s screen habits, you are already an engaged, thoughtful parent.
          </p>
        </section>

        <div className="mt-10">
          <FAQSection items={faqItems} />
        </div>

        <BottomLine
          summary="The AAP recommends no screens (except video chat) under 18 months, co-viewed educational content for 18-24 months, and no more than 1 hour of quality programming for ages 2-5. The biggest concern is not screens themselves but what they replace: conversation, play, physical activity, and sleep. Focus on creating a media-balanced life rather than achieving perfection."
          supportiveMessage="Using a screen so you can shower, cook dinner, or simply take a break does not make you a bad parent. Guidelines are goals, not rules. Do your best, and give yourself grace on hard days."
        />

        <div className="mt-6">
          <EditorialTrustBanner variant="compact" />
        </div>
      </div>
    </article>
  );
}
