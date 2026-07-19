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
  title: 'Separation Anxiety in Babies & Toddlers by Age',
  description:
    'Understand separation anxiety at every stage — when it starts, why it peaks, and evidence-based strategies to help your baby or toddler cope with goodbyes. Based on AAP and child development research.',
  alternates: { canonical: '/behavior/separation-anxiety' },
};

const faqItems = [
  {
    question: 'When does separation anxiety start?',
    answer:
      'Separation anxiety typically begins around 6 to 8 months of age, when babies develop object permanence — the understanding that people and things still exist when out of sight. It peaks between 10 and 18 months and usually improves significantly by age 2 to 3, though brief flare-ups can occur during transitions.',
  },
  {
    question: 'Is it bad to sneak away from my baby?',
    answer:
      'Child development experts recommend against sneaking away. While it avoids an immediate crying scene, it can increase your child\'s anxiety long-term because they learn that you might disappear at any moment without warning. Instead, create a brief, consistent goodbye ritual. The short-term tears at departure are healthier than chronic vigilance.',
  },
  {
    question: 'My 3-year-old suddenly has separation anxiety again. Is this normal?',
    answer:
      'Yes, flare-ups are common after periods of stress or change — starting preschool, a new sibling, moving, illness, or changes in routine. This regression is temporary. Respond with the same strategies: validate feelings, maintain routines, and be consistent with goodbyes. It typically resolves within 2 to 4 weeks.',
  },
  {
    question: 'How long should I let my child cry at daycare drop-off?',
    answer:
      'Most children stop crying within 5 to 10 minutes of parent departure, according to daycare research. Ask your provider to text you when your child calms down. If your child is still crying 30+ minutes after drop-off consistently after 3 to 4 weeks of attendance, talk to your pediatrician about additional support strategies.',
  },
  {
    question: 'What is the difference between separation anxiety and separation anxiety disorder?',
    answer:
      'Normal separation anxiety is developmentally expected, peaks before age 2, and resolves as the child matures. Separation anxiety disorder (SAD) is diagnosed when the anxiety is excessive for the child\'s developmental stage, lasts 4+ weeks, and significantly interferes with daily functioning (refuses school, cannot sleep alone, physical symptoms). SAD affects about 4% of children and is treatable.',
  },
];

const takeaways = [
  'Separation anxiety is a sign of healthy attachment — it means your child has bonded with you',
  'It typically begins around 6-8 months and peaks between 10-18 months',
  'Short, consistent goodbye routines are more effective than prolonged departures or sneaking away',
  'Most children calm within 5-10 minutes of parent departure, even if drop-off is tearful',
  'Flare-ups during transitions (new sibling, preschool, illness) are normal and temporary',
];

export default function SeparationAnxietyPage() {
  const contentSchema = getContentPageSchema({
    name: 'Separation Anxiety in Babies & Toddlers by Age',
    description:
      'Understanding separation anxiety at every developmental stage with evidence-based coping strategies.',
    path: '/behavior/separation-anxiety',
    lastModified: '2026-07-01',
  });
  const faqSchema = getFAQPageSchema(faqItems);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Behavior', url: '/behavior' },
    { name: 'Separation Anxiety' },
  ]);

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contentSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Breadcrumbs items={[{ label: 'Behavior', href: '/behavior' }, { label: 'Separation Anxiety' }]} />

      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
          Separation Anxiety in Babies & Toddlers by Age
        </h1>

        <p className="mt-4 text-base text-muted leading-relaxed">
          Your baby who once went happily to anyone is now clinging to you and crying the moment you leave the room. This is separation anxiety — and it is actually a sign that your child has formed a healthy, secure attachment to you. Here is what to expect at each age and how to help.
        </p>

        <div className="mt-4">
          <MedicalReviewAttribution sources={['AAP', 'Zero to Three']} />
          <LastReviewed date="2026-07-01" />
        </div>

        <div className="mt-6">
          <KeyTakeaways takeaways={takeaways} />
        </div>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Why separation anxiety happens
          </h2>
          <p className="text-sm text-muted leading-relaxed">
            Separation anxiety develops when babies gain object permanence — the cognitive ability to understand that things (and people) still exist when out of sight. Before this milestone (around 6 months), a baby who cannot see you essentially forgets you exist. After object permanence develops, they know you are somewhere else — but lack the cognitive maturity to understand that you will come back. This creates genuine distress, not manipulation. The brain regions responsible for understanding time and predicting the future are still years away from maturity.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Separation anxiety by age
          </h2>
          <div className="space-y-4 text-sm text-muted leading-relaxed">
            <div>
              <h3 className="font-semibold text-foreground mb-1">6-8 months: the beginning</h3>
              <p>
                Object permanence emerges. Your baby may cry when you leave the room, protest being held by unfamiliar people, and want to be with you constantly. This is the start of "stranger anxiety" as well. They are not being difficult — they are showing cognitive growth.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">8-12 months: intensifying</h3>
              <p>
                Separation anxiety intensifies as attachment deepens. Babies may crawl after you, cry when put down, wake more at night seeking reassurance, and protest daycare or babysitter transitions. Bedtime may become more difficult as they do not want you to leave.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">12-18 months: the peak</h3>
              <p>
                This is typically the most intense period. Toddlers may have dramatic meltdowns at drop-off, shadow you constantly at home, and protest any separation with great distress. They understand you are leaving but cannot comprehend when you will return. Their sense of time is essentially nonexistent.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">18 months - 2 years: gradually improving</h3>
              <p>
                Language development helps. Children begin to understand "I will come back after nap" and can hold you in mind more easily. Routines and predictability become powerful tools. Drop-offs may still be tearful but recovery time shortens significantly.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">2-3 years: emerging independence</h3>
              <p>
                Most children show major improvement. They can understand time concepts ("after lunch"), tolerate longer separations, and use transitional objects (a lovey, a photo of you) for comfort. Some regression is normal during big transitions.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">3-5 years: occasional flare-ups</h3>
              <p>
                Starting preschool, a new sibling, moving, or parental stress can trigger temporary regression. These episodes are usually brief (1-3 weeks) and respond well to reassurance and routine. If anxiety persists and interferes with daily life for more than a month, consult your pediatrician.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Strategies that help
          </h2>
          <div className="space-y-3 text-sm text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">Create a goodbye ritual.</strong> Keep it short (under 30 seconds), consistent, and positive. Examples: two kisses and a wave, a special handshake, or "I love you, I will be back after snack time." Repeat the same ritual every time so it becomes predictable.
            </p>
            <p>
              <strong className="text-foreground">Never sneak away.</strong> While it avoids immediate tears, sneaking away teaches your child that you might disappear without warning at any moment, which increases vigilance and anxiety over time.
            </p>
            <p>
              <strong className="text-foreground">Practice short separations.</strong> Leave for 5 minutes while another trusted adult is present. Return and show your child that you always come back. Gradually increase the duration.
            </p>
            <p>
              <strong className="text-foreground">Use transitional objects.</strong> A stuffed animal, a blanket with your scent, a family photo, or a "kiss button" (a kiss drawn on their hand) can provide comfort in your absence.
            </p>
            <p>
              <strong className="text-foreground">Validate feelings without lingering.</strong> Say "I know you are sad. It is hard to say goodbye. I will be back after lunch." Then leave confidently. Prolonged hovering or returning multiple times extends the distress.
            </p>
            <p>
              <strong className="text-foreground">Build trust by always returning.</strong> Always say goodbye and always come back when you said you would. This builds the foundational trust that reduces anxiety over time.
            </p>
            <p>
              <strong className="text-foreground">Prepare for transitions.</strong> Before starting daycare or preschool, visit together. Read books about separations. Talk about what will happen: "First breakfast, then car, then school, then I come back."
            </p>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            When separation anxiety may need professional support
          </h2>
          <div className="space-y-2 text-sm text-muted leading-relaxed">
            <p>Normal separation anxiety is temporary and manageable. Talk to your pediatrician if:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Anxiety is excessive for your child&apos;s age and development</li>
              <li>Your child has physical symptoms (stomachaches, headaches, vomiting) before separations</li>
              <li>Anxiety persists without improvement for more than 4 to 6 weeks</li>
              <li>Your child cannot sleep without you present (past the age when this is expected)</li>
              <li>Anxiety is significantly interfering with school attendance or family functioning</li>
              <li>Your child has nightmares specifically about separation or something happening to you</li>
            </ul>
            <p className="mt-2">
              Separation anxiety disorder affects approximately 4% of children and is very treatable with cognitive-behavioral approaches.
            </p>
          </div>
        </section>

        <div className="mt-10">
          <FAQSection items={faqItems} />
        </div>

        <BottomLine
          summary="Separation anxiety is a healthy, expected phase of development that signals your child has formed a secure bond with you. It peaks between 10 and 18 months and gradually improves as language and cognitive skills develop. Short, consistent goodbye routines, practiced trust, and transitional objects are your most effective tools. Your child is not manipulating you — they genuinely need time to learn that separations are safe and temporary."
          supportiveMessage="Hearing your child cry at drop-off is gut-wrenching. Know that the vast majority of children calm within minutes, and your consistent, confident goodbyes are teaching them that the world is safe even when you are not right there."
        />

        <div className="mt-6">
          <EditorialTrustBanner variant="compact" />
        </div>
      </div>
    </article>
  );
}
