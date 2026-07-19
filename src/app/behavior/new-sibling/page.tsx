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
  title: 'Preparing Your Child for a New Sibling: Complete Guide',
  description:
    'How to prepare your baby or toddler for a new sibling, manage regression, handle jealousy, and build sibling bonds. Evidence-based strategies for before, during, and after the new arrival.',
  alternates: { canonical: '/behavior/new-sibling' },
};

const faqItems = [
  {
    question: 'When should I tell my toddler about the new baby?',
    answer:
      'For children under 2, wait until the pregnancy is visibly obvious (late second trimester) — their sense of time is too limited for earlier announcements to be meaningful. For 2-3 year olds, tell them after the first trimester in simple terms. For 3-5 year olds, you can tell them earlier and involve them in preparations. Use concrete references: "The baby will come when the flowers bloom."',
  },
  {
    question: 'My toddler is regressing since the new baby arrived. Is this normal?',
    answer:
      'Very normal. Regression (wanting a bottle again, wetting pants after being potty trained, baby talk, clinginess) is one of the most common responses to a new sibling. It typically lasts 2 to 8 weeks. Respond with patience rather than frustration — your child is expressing a need for reassurance that they still matter. Avoid saying "You are a big kid now" as this adds pressure.',
  },
  {
    question: 'How do I handle aggression toward the new baby?',
    answer:
      'Never leave your toddler alone with the newborn, even briefly. If they hit or push the baby, calmly remove them and say "I will not let you hurt the baby. Gentle touches only." Then help them touch gently: "You can stroke the baby\'s foot like this." Understand that aggression comes from big feelings they cannot articulate. Give them extra one-on-one time and validate their emotions.',
  },
  {
    question: 'Should I give my older child a gift from the baby?',
    answer:
      'This is a popular strategy that can help with the initial meeting. A small gift "from" the new baby can create a positive first association. However, it is not necessary and should not be overdone. More important than gifts is ensuring your older child has one-on-one time with each parent regularly after the baby arrives.',
  },
  {
    question: 'How long does it take for siblings to bond?',
    answer:
      'Sibling bonding is a gradual process that unfolds over months and years, not days. Many older siblings show little interest in a newborn (who does not do much). Interaction typically increases around 3-4 months when the baby starts smiling and responding. True reciprocal play may not begin until the younger child is 8-12 months old. Do not force bonding — let it develop naturally.',
  },
];

const takeaways = [
  'Regression (baby talk, accidents, clinginess) after a new sibling arrives is normal and temporary',
  'One-on-one time with each parent is the single most protective factor for your older child',
  'Never leave a toddler unsupervised with a newborn, even for a moment',
  'Avoid pressure to be a "big kid" — your older child is still little and has the right to struggle',
  'Sibling bonds develop over months and years, not the first few days',
];

export default function NewSiblingPage() {
  const contentSchema = getContentPageSchema({
    name: 'Preparing Your Child for a New Sibling: Complete Guide',
    description:
      'Evidence-based strategies for preparing children for a new sibling and managing the transition.',
    path: '/behavior/new-sibling',
    lastModified: '2026-07-01',
  });
  const faqSchema = getFAQPageSchema(faqItems);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Behavior', url: '/behavior' },
    { name: 'New Sibling' },
  ]);

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contentSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Breadcrumbs items={[{ label: 'Behavior', href: '/behavior' }, { label: 'New Sibling' }]} />

      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
          Preparing Your Child for a New Sibling: Complete Guide
        </h1>

        <p className="mt-4 text-base text-muted leading-relaxed">
          Bringing home a new baby is one of the biggest transitions in family life — and your older child feels it deeply. Whether they are 12 months or 5 years old, the arrival of a sibling means their world is fundamentally changing. Here is how to prepare, what to expect, and how to help everyone adjust.
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
            Before the baby arrives: preparation by age
          </h2>
          <div className="space-y-4 text-sm text-muted leading-relaxed">
            <div>
              <h3 className="font-semibold text-foreground mb-1">Under 2 years</h3>
              <p>
                Children this age have very limited comprehension of future events. Keep preparation minimal and concrete: read simple books with baby pictures, let them see and touch your belly as it grows, practice gentle touch on dolls or stuffed animals, and maintain their routine as much as possible. Make any major changes (new room, new bed, starting daycare) well before the due date so they are not associated with the baby&apos;s arrival.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">2-3 years</h3>
              <p>
                Toddlers understand more but still think concretely. Tell them about the baby in the late second or early third trimester. Use simple language: "A baby is growing in Mommy&apos;s tummy. When the baby is ready, it will come out and live with us." Show them baby photos of themselves. Let them help prepare by picking out a toy for the baby. Practice what they will do when the baby needs attention ("You can play with blocks while I feed the baby").
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">3-5 years</h3>
              <p>
                Older children can understand more and be more involved. Explain what babies are like (they cry a lot, they cannot play yet, they sleep a lot). Visit friends with babies. Include them in preparations (decorating the nursery, choosing names). Set realistic expectations: "The baby will not be able to play with you right away. First it needs to grow bigger." Discuss plans for when you go to the hospital and reassure them about who will take care of them.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            The first meeting and early days
          </h2>
          <div className="space-y-3 text-sm text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">The hospital visit or homecoming.</strong> If possible, have someone else hold the baby when your older child first arrives so your arms are free for them. Let them approach the baby at their own pace — some children are curious immediately, others are cautious or uninterested. All reactions are normal.
            </p>
            <p>
              <strong className="text-foreground">Do not force interaction.</strong> "Come see your brother!" with too much enthusiasm can feel pressuring. Let your older child set the pace. Some children ignore the baby for days — this is okay and not a bad sign.
            </p>
            <p>
              <strong className="text-foreground">Maintain routines fiercely.</strong> In the chaos of a newborn, your older child&apos;s routine is their anchor. Bedtime, meals, favorite activities — protect these as much as possible. Predictability is reassurance.
            </p>
            <p>
              <strong className="text-foreground">Accept help with the baby, not the older child.</strong> When visitors offer help, ask them to hold the baby while YOU spend time with your older child. This communicates that the older child&apos;s relationship with you has not been replaced.
            </p>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Common reactions and how to respond
          </h2>
          <div className="space-y-3 text-sm text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">Regression.</strong> Wanting a bottle, wetting pants, baby talk, thumb-sucking, increased clinginess. This is a plea for reassurance, not manipulation. Respond with patience: "Would you like me to hold you like a baby? I can do that." Meeting the need helps it pass faster than fighting it.
            </p>
            <p>
              <strong className="text-foreground">Aggression toward the baby.</strong> Poking, hitting, squeezing too hard. Never leave them unsupervised together. Respond calmly: "I will not let you hurt the baby. Gentle touches." Model gentle touch. Provide outlets for big feelings: playdough to squeeze, a pillow to hit, active outdoor play.
            </p>
            <p>
              <strong className="text-foreground">Ignoring the baby completely.</strong> Some children pretend the baby does not exist. This is a coping strategy and is perfectly fine. They will engage when they are ready.
            </p>
            <p>
              <strong className="text-foreground">Anger at parents.</strong> "I hate the baby," "Put it back," or anger directed at you. These statements express pain and should be validated, not punished: "You wish things could go back to how they were. That makes sense. I still love you just as much."
            </p>
            <p>
              <strong className="text-foreground">Excessive helpfulness.</strong> Some children cope by becoming overly helpful — trying to earn their place. While sweet, make sure they know their worth is not tied to being useful. "You do not have to help with the baby. I love you just for being you."
            </p>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Building the sibling relationship long-term
          </h2>
          <div className="space-y-3 text-sm text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">Prioritize one-on-one time.</strong> Even 15 minutes of undivided attention daily (no phone, no baby) makes a significant difference. Let your older child choose the activity. This is the most protective factor.
            </p>
            <p>
              <strong className="text-foreground">Narrate the baby&apos;s positive responses.</strong> "Look, she is smiling at you! She loves watching you play." This helps the older child see the baby as a fan and future playmate.
            </p>
            <p>
              <strong className="text-foreground">Avoid comparison.</strong> "The baby sleeps through the night — why cannot you?" or "Be quiet like your sister." Comparison breeds resentment between siblings.
            </p>
            <p>
              <strong className="text-foreground">Do not force a role.</strong> "You are the big sibling" can feel like pressure. Your child is still little. They did not choose this role. Let them define their relationship with the baby naturally.
            </p>
            <p>
              <strong className="text-foreground">Allow ambivalence.</strong> It is okay for your child to love the baby sometimes and resent them other times. Adults feel ambivalent about major life changes too. Create space for all feelings.
            </p>
          </div>
        </section>

        <div className="mt-10">
          <FAQSection items={faqItems} />
        </div>

        <BottomLine
          summary="The transition to siblinghood is one of the biggest changes in your child's young life. Regression, jealousy, and aggression are all normal responses that typically resolve within weeks to months. Maintain routines, protect one-on-one time, validate all feelings (even the ugly ones), and never leave a toddler unsupervised with a newborn. Sibling bonds grow gradually — focus on safety and your older child's emotional needs rather than forcing an instant connection."
          supportiveMessage="Parenting two children while sleep-deprived and healing is incredibly hard. If you feel pulled in too many directions, that is because you literally are. Accept help, lower your standards for housework, and know that this intense adjustment period is temporary."
        />

        <div className="mt-6">
          <EditorialTrustBanner variant="compact" />
        </div>
      </div>
    </article>
  );
}
