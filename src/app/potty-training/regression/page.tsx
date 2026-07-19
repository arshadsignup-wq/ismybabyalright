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
  title: 'Potty Training Regression',
  description:
    'Why potty-trained children start having accidents again. Common causes of potty training regression, how to respond, and when to talk to your pediatrician.',
  alternates: { canonical: '/potty-training/regression' },
  openGraph: {
    title: 'Potty Training Regression | Is My Baby Alright?',
    description: 'Common causes of regression, how to respond, and when to seek help.',
  },
};

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Potty Training', url: '/potty-training' },
  { name: 'Regression' },
];

const faqItems = [
  { question: 'Is potty training regression normal?', answer: 'Yes. Studies show that up to 80% of children experience at least one episode of regression during training. It is a normal part of development, not a sign of failure.' },
  { question: 'How long does potty training regression last?', answer: 'Most regression episodes resolve within 2-4 weeks when handled with patience and consistency. If it persists beyond 4-6 weeks, talk to your pediatrician.' },
  { question: 'Should I go back to diapers during regression?', answer: 'The AAP suggests avoiding going back to full-time diapers if possible, as this can confuse the child. Pull-ups for outings or naps are reasonable, but try to maintain underwear during the day at home.' },
  { question: 'Can constipation cause potty training regression?', answer: 'Yes. Constipation is one of the most common medical causes of regression. Hard or painful bowel movements can make children afraid to use the toilet. Talk to your pediatrician if you suspect constipation.' },
  { question: 'My child was trained for months and suddenly regressed. Why?', answer: 'Even children trained for months can regress during stress (new sibling, move, school change), illness, or developmental leaps. The brain is prioritizing other growth areas temporarily.' },
];

export default function PottyTrainingRegressionPage() {
  return (
    <article className="max-w-3xl mx-auto px-5 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getContentPageSchema({
          name: 'Potty Training Regression',
          description: 'Why potty-trained children start having accidents again and how to respond.',
          path: '/potty-training/regression',
          lastModified: '2026-07-01',
          medicalGuidelines: [
            { name: 'AAP Toilet Training Guidelines', url: 'https://www.aap.org/en/clinical-guidance/' },
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

      <Breadcrumbs items={[{ label: 'Potty Training', href: '/potty-training' }, { label: 'Regression' }]} />

      <h1 className="text-2xl font-bold text-foreground mb-2">Potty Training Regression</h1>
      <LastReviewed date="2026-07-01" />
      <MedicalReviewAttribution sources={['AAP']} />
      <p className="text-sm text-muted mb-6">
        Your child was doing great with potty training — and now they are having accidents again. This is called regression, and it is one of the most common challenges parents face. The good news: it is almost always temporary and manageable.
      </p>

      <KeyTakeaways
        takeaways={[
          'Regression affects up to 80% of children during potty training',
          'Common triggers include stress, illness, new siblings, and life changes',
          'Most regression resolves within 2-4 weeks with patience and consistency',
          'Punishment makes regression worse \u2014 respond with calm reassurance',
          'See your pediatrician if regression lasts more than 4-6 weeks or is accompanied by pain',
        ]}
      />

      <div className="space-y-6">
        <Section title="What is potty training regression?">
          <p>Regression is when a child who was previously using the toilet consistently begins having accidents again. It can involve:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Daytime wetting after weeks or months of dryness</li>
            <li>Refusing to sit on the potty after previously being willing</li>
            <li>Pooping in pants or pull-ups instead of the toilet</li>
            <li>Nighttime wetting after a period of dry nights</li>
            <li>Asking for diapers after wearing underwear successfully</li>
          </ul>
          <p className="mt-2">
            Regression is different from never having been fully trained. If your child was consistently dry for at least 2 weeks and then begins having accidents, that is regression.
          </p>
        </Section>

        <Section title="Common causes of regression">
          <h3 className="font-semibold mb-1">Emotional/environmental triggers:</h3>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>New sibling:</strong> The most common trigger. Children may regress to get attention or because they see the baby in diapers.</li>
            <li><strong>Starting daycare or preschool:</strong> New environment, new routines, and social pressure can overwhelm coping capacity.</li>
            <li><strong>Moving to a new home:</strong> Loss of familiar bathroom, routine disruption.</li>
            <li><strong>Family stress:</strong> Parental conflict, divorce, loss of a family member.</li>
            <li><strong>Being too busy:</strong> Children engrossed in play may ignore urges until it is too late.</li>
          </ul>
          <h3 className="font-semibold mt-3 mb-1">Physical/medical causes:</h3>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Constipation:</strong> Hard stools cause pain, leading to withholding and overflow accidents.</li>
            <li><strong>Urinary tract infection (UTI):</strong> Causes urgency, frequency, and painful urination.</li>
            <li><strong>Illness:</strong> Any illness can temporarily reduce bladder/bowel control.</li>
            <li><strong>Developmental leap:</strong> The brain prioritizes new skills (language, motor) over established ones temporarily.</li>
          </ul>
        </Section>

        <Section title="How to respond to regression">
          <h3 className="font-semibold mb-1">Do:</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Stay calm and matter-of-fact when accidents happen</li>
            <li>Return to basics: more frequent reminders, scheduled potty sits</li>
            <li>Acknowledge feelings (&ldquo;It seems hard to remember the potty right now. That&apos;s okay.&rdquo;)</li>
            <li>Increase positive attention for successful toilet use</li>
            <li>Address the underlying stressor if possible (extra connection time, talking about the new sibling)</li>
            <li>Ensure the child is not constipated (adequate fiber, water, activity)</li>
            <li>Keep the routine consistent across all caregivers</li>
          </ul>
          <h3 className="font-semibold mt-3 mb-1">Do not:</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Punish, shame, or express frustration about accidents</li>
            <li>Compare your child to siblings or peers</li>
            <li>Force your child to sit on the potty against their will</li>
            <li>Remove privileges as a consequence of accidents</li>
            <li>Make your child clean up accidents as punishment (they can help in a low-key way)</li>
          </ul>
        </Section>

        <Section title="Timeline for recovery">
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Mild regression (occasional accidents):</strong> Often resolves within 1-2 weeks with gentle reminders</li>
            <li><strong>Moderate regression (daily accidents):</strong> Usually resolves within 2-4 weeks of consistent handling</li>
            <li><strong>Severe regression (complete return to diapers):</strong> May take 4-8 weeks; consider consulting pediatrician</li>
          </ul>
          <p className="mt-2">
            If you are not seeing improvement after 4 weeks of consistent, patient management, it is time to check in with your pediatrician to rule out medical causes.
          </p>
        </Section>

        <Section title="When to see your pediatrician">
          <p>Contact your child&apos;s doctor if:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Regression lasts longer than 4-6 weeks despite consistent handling</li>
            <li>Your child complains of pain during urination or bowel movements</li>
            <li>You notice blood in urine or stool</li>
            <li>Your child is also losing other skills (speech, motor, social)</li>
            <li>Regression occurs in a child over age 5 who was fully trained</li>
            <li>Your child seems genuinely distressed (not just resistant)</li>
          </ul>
        </Section>

        <Section title="Preventing future regression">
          <ul className="list-disc list-inside space-y-1">
            <li>Prepare your child for upcoming changes (talk about the new sibling, visit the new house)</li>
            <li>Maintain potty routines during travel and transitions</li>
            <li>Keep high-fiber foods in the regular diet to prevent constipation</li>
            <li>Ensure adequate hydration throughout the day</li>
            <li>Build in extra connection time during stressful periods</li>
            <li>Continue positive reinforcement even after training is &ldquo;complete&rdquo;</li>
          </ul>
        </Section>

        <FAQSection items={faqItems} />
      </div>

      <BottomLine summary="Potty training regression is extremely common and almost always temporary. The most important response is patience and consistency. Go back to basics without punishment. Most children return to their previous level within a few weeks. See your pediatrician if regression persists, is accompanied by pain, or if your child is losing other developmental skills." />

      <div className="mt-6"><EditorialTrustBanner variant="compact" /></div>

      <div className="mt-10 pt-6 border-t border-border flex items-center justify-between">
        <Link href="/potty-training/methods" className="text-sm text-primary font-semibold hover:underline">&larr; Methods</Link>
        <Link href="/potty-training/nighttime" className="text-sm text-primary font-semibold hover:underline">Nighttime Training &rarr;</Link>
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
