import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import KeyTakeaways from '@/components/shared/KeyTakeaways';
import ComparisonTable from '@/components/shared/ComparisonTable';
import FAQSection from '@/components/shared/FAQSection';
import LastReviewed from '@/components/shared/LastReviewed';
import EditorialTrustBanner from '@/components/shared/EditorialTrustBanner';
import BottomLine from '@/components/shared/BottomLine';
import MedicalReviewAttribution from '@/components/shared/MedicalReviewAttribution';
import { getBreadcrumbSchema, getContentPageSchema, getFAQPageSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Positive Discipline Guide',
  description:
    'Age-appropriate discipline for babies and toddlers. Managing tantrums, setting boundaries, and building cooperation without punishment. Based on AAP guidance.',
  alternates: { canonical: '/discipline' },
  openGraph: {
    title: 'Positive Discipline Guide | Is My Baby Alright?',
    description: 'Managing tantrums, setting boundaries, and building cooperation. Age-appropriate strategies.',
  },
};

const faqItems = [
  { question: 'Is it normal for toddlers to hit and bite?', answer: 'Yes, hitting and biting are normal behaviors at 12-36 months. They are not signs of aggression. Toddlers lack impulse control and are still learning to express emotions.' },
  { question: 'At what age do tantrums stop?', answer: 'Tantrums peak between 18-36 months and are significantly fewer by age 4 as children develop better language and emotional regulation skills.' },
  { question: 'Does the AAP recommend time-outs?', answer: 'The AAP supports brief removal (30-60 seconds) from the situation for toddlers under 3. Extended isolation or punitive time-outs are not recommended.' },
  { question: 'Does spanking work?', answer: 'No. The AAP strongly advises against spanking. Research consistently shows it is ineffective as a discipline strategy and is associated with increased aggression and behavioral problems.' },
];

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Positive Discipline Guide' },
];

export default function DisciplinePage() {
  return (
    <article className="max-w-3xl mx-auto px-5 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getContentPageSchema({
          name: 'Positive Discipline Guide',
          description: 'Age-appropriate discipline for babies and toddlers. Managing tantrums, setting boundaries, and building cooperation.',
          path: '/discipline',
          medicalGuidelines: [
            { name: 'AAP Discipline Guidelines', url: 'https://www.aap.org/en/clinical-guidance/' },
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

      <Breadcrumbs items={[{ label: 'Positive Discipline Guide' }]} />

      <h1 className="text-2xl font-bold text-foreground mb-2">Positive Discipline Guide</h1>
      <LastReviewed date="2026-07-01" />
      <MedicalReviewAttribution sources={['AAP', 'CDC']} />
      <p className="text-sm text-muted mb-6">
        Discipline means teaching, not punishing. Young children are learning how the world works — their challenging behaviors are developmentally normal, not defiant. The AAP recommends positive discipline strategies at every age.
      </p>

      <KeyTakeaways
        takeaways={[
          'Discipline means teaching, not punishing \u2014 challenging behaviors are developmentally normal',
          'The AAP strongly advises against spanking and recommends positive discipline at every age',
          'Tantrums peak between 18-36 months and typically last 1-3 minutes',
          'Offer limited choices, use positive language, and be consistent',
          'Impulse control does not fully develop until the mid-20s',
        ]}
      />

      <div className="space-y-6">
        <Section title="What behavior is normal at each age?">
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Under 12 months:</strong> Babies cannot misbehave. Redirect and baby-proof. They are exploring, not testing you.</li>
            <li><strong>12-18 months:</strong> Beginning to test boundaries but cannot yet understand rules. Use distraction and redirection.</li>
            <li><strong>18-24 months:</strong> Understanding &ldquo;no&rdquo; but impulse control is still very limited. Keep rules simple and consistent.</li>
            <li><strong>24-36 months:</strong> Developing self-control but still easily overwhelmed by emotions. Tantrums are normal. Begin offering limited choices.</li>
          </ul>
          <p className="mt-2">
            Impulse control does not fully develop until the mid-20s. Expecting a toddler to &ldquo;know better&rdquo; sets both of you up for frustration.
          </p>
        </Section>

        <Section title="How do I handle toddler tantrums?">
          <p>Tantrums typically peak between 18-36 months and are a normal part of development:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Stay calm.</strong> Your regulation helps your child learn to regulate.</li>
            <li><strong>Ensure safety.</strong> Move them away from anything dangerous.</li>
            <li><strong>Acknowledge the feeling:</strong> &ldquo;You are frustrated because you wanted the toy.&rdquo;</li>
            <li><strong>Do not give in to the demand</strong> that caused the tantrum — this teaches that tantrums work.</li>
            <li><strong>Wait it out.</strong> Most tantrums last 1-3 minutes. Offer comfort after.</li>
            <li><strong>Prevent when possible:</strong> Hunger, tiredness, overstimulation, and transitions are common triggers.</li>
          </ul>
        </Section>

        <Section title="What are effective discipline strategies for toddlers?">
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Offer limited choices:</strong> &ldquo;Do you want the red cup or the blue cup?&rdquo; Giving control reduces power struggles.</li>
            <li><strong>Give warnings before transitions:</strong> &ldquo;We are leaving the park in 5 minutes.&rdquo;</li>
            <li><strong>Use positive language:</strong> &ldquo;Walk, please&rdquo; instead of &ldquo;Don&apos;t run.&rdquo;</li>
            <li><strong>Praise specific behavior:</strong> &ldquo;Thank you for putting the toy back&rdquo; instead of &ldquo;Good job.&rdquo;</li>
            <li><strong>Be consistent:</strong> The same behavior should get the same response every time.</li>
            <li><strong>Model the behavior you want:</strong> Children learn more from what you do than what you say.</li>
            <li><strong>Natural consequences:</strong> If they throw food, the meal is done. Connect the consequence to the behavior.</li>
          </ul>

          <ComparisonTable
            caption="Discipline approaches compared"
            headers={['Approach', 'Example', 'AAP recommendation']}
            rows={[
              ['Positive reinforcement', '"Thank you for putting the toy back"', 'Recommended'],
              ['Natural consequences', 'Threw food? Meal is done', 'Recommended'],
              ['Redirection', 'Offer alternative activity', 'Recommended'],
              ['Brief time-out', '30-60 seconds removal', 'Acceptable under 3'],
              ['Spanking', 'Physical punishment', 'Strongly discouraged'],
              ['Yelling', 'Harsh verbal discipline', 'Discouraged'],
            ]}
          />
        </Section>

        <Section title="Why does my toddler bite and hit, and how do I stop it?">
          <ul className="list-disc list-inside space-y-1">
            <li>This is normal at 12-36 months — it is not a sign of aggression or a bad child</li>
            <li>Respond immediately but calmly: &ldquo;I can not let you hit. Hitting hurts.&rdquo;</li>
            <li>Remove the child from the situation briefly</li>
            <li>Help them express the underlying emotion: &ldquo;You were angry. You can stomp your feet instead.&rdquo;</li>
            <li>Avoid biting or hitting back &ldquo;to show how it feels&rdquo; — this teaches the opposite of what you want</li>
            <li>Supervise closely during play with other children</li>
          </ul>
        </Section>

        <Section title="What discipline methods does the AAP say to avoid?">
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Spanking:</strong> The AAP strongly recommends against spanking. Research consistently shows it is ineffective and harmful.</li>
            <li><strong>Yelling:</strong> Harsh verbal discipline has similar negative effects to physical punishment.</li>
            <li><strong>Shaming:</strong> Calling a child &ldquo;bad&rdquo; damages self-esteem without teaching the desired behavior.</li>
            <li><strong>Long time-outs:</strong> For toddlers under 3, brief removal (30-60 seconds) is more effective than extended isolation.</li>
          </ul>
        </Section>

        <Section title="When should I talk to my pediatrician about behavior?">
          <p>Talk to your pediatrician if:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Tantrums consistently last longer than 15 minutes</li>
            <li>Your child hurts themselves during tantrums</li>
            <li>Aggressive behavior is escalating despite consistent strategies</li>
            <li>You find yourself frequently losing your temper</li>
            <li>Your child&apos;s behavior seems significantly different from peers</li>
          </ul>
        </Section>

        <FAQSection items={faqItems} />
      </div>

      <div className="mt-8 flex flex-wrap gap-2">
        <Link href="/toddler" className="inline-block rounded-full border border-[#E8E2D9] px-3 py-1 text-xs text-primary hover:bg-card-alt transition-colors">Toddler Guide</Link>
        <Link href="/mental-health" className="inline-block rounded-full border border-[#E8E2D9] px-3 py-1 text-xs text-primary hover:bg-card-alt transition-colors">Parental Mental Health</Link>
      </div>

      <BottomLine summary="Positive discipline focuses on teaching, not punishment. The AAP recommends against spanking and verbal abuse. Setting consistent boundaries, redirecting behavior, and modeling the behavior you want to see are the most effective approaches for young children." />

      <div className="mt-6"><EditorialTrustBanner variant="compact" /></div>

      <div className="mt-10 pt-6 border-t border-border">
        <Link href="/toddler" className="text-sm text-primary font-semibold hover:underline">&larr; Toddler Guide</Link>
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
