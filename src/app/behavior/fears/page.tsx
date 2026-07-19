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
  title: 'Common Childhood Fears by Age: Dark, Monsters & More',
  description:
    'Understanding normal childhood fears at every stage — the dark, monsters, loud noises, animals, and separation. Evidence-based strategies to help children cope without dismissing their feelings.',
  alternates: { canonical: '/behavior/fears' },
};

const faqItems = [
  {
    question: 'Why is my child suddenly afraid of something they were fine with before?',
    answer:
      'New fears often emerge as cognitive abilities develop. As children\'s brains mature, they can imagine dangers they could not conceive of before. A 2-year-old who was fine in the dark may suddenly fear it at 3 because they can now imagine what might be lurking there. This is actually a sign of cognitive growth, not regression.',
  },
  {
    question: 'Should I avoid things my child is afraid of?',
    answer:
      'Complete avoidance reinforces the fear by communicating that the thing truly is dangerous. However, forcing exposure (throwing them in the pool, locking them in the dark) can create trauma. The best approach is gradual, supported exposure: acknowledge the fear, start small, stay with them, and let them set the pace. "I will hold your hand while we look at the dog from far away."',
  },
  {
    question: 'Is it helpful to check under the bed for monsters?',
    answer:
      'This is debated among experts. Some feel that checking validates the existence of monsters. Others (including many child psychologists) believe that at age 2-4, children cannot fully distinguish fantasy from reality, and a brief monster check followed by reassurance can provide comfort. What matters most is your tone: calm, confident, and brief rather than dramatic or prolonged.',
  },
  {
    question: 'When does a childhood fear become a phobia?',
    answer:
      'Normal fears are temporary, manageable with support, and do not significantly interfere with daily life. A phobia is an intense fear that persists beyond what is typical for the age, causes extreme avoidance that interferes with normal activities (refusing school, unable to sleep, will not go outside), and does not improve with standard strategies over 6+ months. Phobias affect about 5% of children and are very treatable.',
  },
  {
    question: 'My child is afraid of the toilet flushing. Is this normal?',
    answer:
      'Very normal, especially for children ages 18 months to 3 years. The loud noise, the visual of things disappearing, and uncertainty about where things go can all be frightening. Do not force them to watch flushing. Let them flush when ready, use a potty seat first, or flush after they leave the bathroom. This fear almost always resolves on its own.',
  },
];

const takeaways = [
  'Fears are a normal, healthy part of cognitive development — they show your child can now imagine potential dangers',
  'Common fears follow a predictable pattern: loud noises (infancy), strangers (8-12 months), dark/monsters (2-4 years)',
  'Never dismiss ("There is nothing to be afraid of"), force exposure, or shame a fearful child',
  'Gradual, supported exposure combined with validation is the most effective approach',
  'Most childhood fears resolve naturally within weeks to months as cognitive skills mature',
];

export default function FearsPage() {
  const contentSchema = getContentPageSchema({
    name: 'Common Childhood Fears by Age: Dark, Monsters & More',
    description:
      'Understanding and addressing normal childhood fears at each developmental stage.',
    path: '/behavior/fears',
    lastModified: '2026-07-01',
  });
  const faqSchema = getFAQPageSchema(faqItems);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Behavior', url: '/behavior' },
    { name: 'Fears' },
  ]);

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contentSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Breadcrumbs items={[{ label: 'Behavior', href: '/behavior' }, { label: 'Fears' }]} />

      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
          Common Childhood Fears by Age: Dark, Monsters & More
        </h1>

        <p className="mt-4 text-base text-muted leading-relaxed">
          Your toddler who fearlessly climbed everything is now terrified of the dark. Your baby who loved baths suddenly screams at the drain. Childhood fears can seem to appear overnight and feel irrational to adults — but they serve an important developmental purpose and follow predictable patterns.
        </p>

        <div className="mt-4">
          <MedicalReviewAttribution sources={['AAP', 'CDC']} />
          <LastReviewed date="2026-07-01" />
        </div>

        <div className="mt-6">
          <KeyTakeaways takeaways={takeaways} />
        </div>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Why fears develop: the developmental purpose
          </h2>
          <p className="text-sm text-muted leading-relaxed">
            Fears are actually a sign of healthy cognitive development. As children&apos;s brains mature, they gain new abilities to perceive and imagine danger — abilities that are ultimately protective. A baby who cannot conceive of falling has no fear of heights; once they understand gravity, healthy caution develops. Similarly, as imagination grows around age 2 to 3, children can now conceive of things that might exist in the dark or under the bed. The problem is that the imagination develops before the rational thinking needed to evaluate whether fears are realistic. This gap creates a period where fears feel very real and very intense.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Common fears by age
          </h2>
          <div className="space-y-4 text-sm text-muted leading-relaxed">
            <div>
              <h3 className="font-semibold text-foreground mb-1">0-6 months</h3>
              <p>
                Startle responses to loud noises, sudden movements, and loss of support (the Moro reflex). These are reflexive, not true fears. Babies may also become distressed by unfamiliar sensory experiences (rough textures, strong tastes). Comfort through holding and gentle voice is the appropriate response.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">6-12 months</h3>
              <p>
                Stranger anxiety and separation anxiety emerge as object permanence develops. Loud or unexpected noises (vacuum, blender, dogs barking) may cause fear. Some babies develop fear of the bath drain or specific toys. These fears reflect growing awareness of the world and attachment to caregivers.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">1-2 years</h3>
              <p>
                Fear of loud machines (vacuum, blender, hand dryers), unfamiliar people, animals, and new situations. Separation anxiety peaks. Some toddlers develop fear of the potty, bath drain, or specific characters. These fears relate to limited understanding of how things work combined with growing awareness of their smallness in the world.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">2-4 years</h3>
              <p>
                This is the peak fear period as imagination blossoms. Common fears: the dark, monsters, ghosts, shadows, thunder and lightning, insects, costumed characters (Santa, mascots), water, animals, and nightmares. Children at this age cannot fully distinguish fantasy from reality — if they can imagine a monster, it might be real to them.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">4-6 years</h3>
              <p>
                Fears become more realistic: injury, illness, death (of self or parents), natural disasters, burglars, getting lost. Children now understand that bad things happen in the real world but overestimate the probability. Fear of the dark may persist. Social fears may emerge (being laughed at, not having friends).
              </p>
            </div>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            How to help your child with fears
          </h2>
          <div className="space-y-3 text-sm text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">Validate without reinforcing.</strong> "I can see you are really scared of that dog. That is a big feeling." Do not dismiss ("There is nothing to be afraid of") or over-validate ("Oh no, is it a scary dog?!"). Aim for calm acknowledgment.
            </p>
            <p>
              <strong className="text-foreground">Stay calm and confident.</strong> Your child reads your reaction. If you seem worried about their fear, they conclude the thing must truly be dangerous. Project calm confidence: "I am right here. You are safe."
            </p>
            <p>
              <strong className="text-foreground">Provide information at their level.</strong> "Thunder is just clouds bumping together. It is loud but it cannot hurt you." Keep explanations simple and reassuring without lengthy lectures that can increase anxiety.
            </p>
            <p>
              <strong className="text-foreground">Use gradual exposure.</strong> For persistent fears, approach the feared thing in small steps with your child in control. Afraid of dogs? First, look at dog pictures. Then watch dogs from across the street. Then be in the same room as a calm dog. Let your child set the pace.
            </p>
            <p>
              <strong className="text-foreground">Give them tools.</strong> A flashlight for dark fears. A "brave spray" (water in a spray bottle) for monsters. A special stuffed animal that "protects" them. A nightlight. These are not silly — they give children a sense of control over their fear.
            </p>
            <p>
              <strong className="text-foreground">Read books about fears.</strong> Stories normalize fear and show characters working through it. Books distance the experience enough for children to process feelings safely.
            </p>
            <p>
              <strong className="text-foreground">Do not force exposure.</strong> Forcing a terrified child to pet a dog, sit on Santa&apos;s lap, or stay alone in the dark can create lasting negative associations and erode trust. Pressure increases fear; patience reduces it.
            </p>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            When fears may need professional support
          </h2>
          <div className="space-y-2 text-sm text-muted leading-relaxed">
            <p>Most childhood fears resolve naturally within weeks to months. Consider talking to your pediatrician if:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>A fear persists without improvement for more than 6 months</li>
              <li>Fear significantly interferes with daily life (refuses school, cannot sleep, avoids normal activities)</li>
              <li>Your child has physical symptoms from anxiety (stomachaches, headaches, vomiting)</li>
              <li>Fears seem excessive for their age (a 5-year-old with intense stranger anxiety)</li>
              <li>Your child develops many fears simultaneously or general anxiety about everything</li>
              <li>A previously resolved fear returns after a traumatic event</li>
            </ul>
            <p className="mt-2">
              Childhood anxiety disorders affect approximately 7% of children and respond very well to cognitive-behavioral therapy, often in just 8 to 12 sessions.
            </p>
          </div>
        </section>

        <div className="mt-10">
          <FAQSection items={faqItems} />
        </div>

        <BottomLine
          summary="Childhood fears are a normal part of cognitive development that follow predictable patterns by age. They emerge as children's brains develop new abilities to perceive and imagine danger. The most effective response combines validation, calm confidence, gradual supported exposure, and patience. Most fears resolve naturally within weeks to months. Never dismiss, force, or shame — instead, help your child build confidence one small step at a time."
          supportiveMessage="When your child is scared, they need you to be their safe base. Your calm presence communicates safety more powerfully than any words. Trust that this fear, like the others before it, will pass with time and support."
        />

        <div className="mt-6">
          <EditorialTrustBanner variant="compact" />
        </div>
      </div>
    </article>
  );
}
