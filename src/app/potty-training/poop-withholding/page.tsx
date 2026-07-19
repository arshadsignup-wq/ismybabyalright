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
  title: 'Poop Withholding During Potty Training',
  description:
    'Why toddlers withhold poop during potty training, how it leads to constipation, and evidence-based strategies to help. When to see your pediatrician.',
  alternates: { canonical: '/potty-training/poop-withholding' },
  openGraph: {
    title: 'Poop Withholding During Potty Training | Is My Baby Alright?',
    description: 'Why children withhold poop, how to break the cycle, and when to see a doctor.',
  },
};

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Potty Training', url: '/potty-training' },
  { name: 'Poop Withholding' },
];

const faqItems = [
  { question: 'Why does my child hold their poop?', answer: 'The most common reasons are: a painful bowel movement that made them afraid, anxiety about pooping on the toilet, a need for control during potty training, or constipation that created a fear cycle.' },
  { question: 'How long can a toddler safely hold poop?', answer: 'While children can go 2-3 days without a bowel movement, withholding beyond that increases the risk of constipation, hard stools, and pain. If your child has not pooped in 3+ days and is uncomfortable, contact your pediatrician.' },
  { question: 'Should I give my child a diaper to poop if they refuse the toilet?', answer: 'Yes, temporarily. It is more important that your child poops regularly than where they poop. Withholding is medically riskier than pooping in a diaper. Once stools are soft and regular, you can gradually work on toilet pooping.' },
  { question: 'Can stool withholding cause encopresis?', answer: 'Yes. Chronic withholding can lead to encopresis (involuntary soiling) because the rectum stretches and loses sensation. The child literally cannot feel when stool leaks. This requires medical treatment.' },
  { question: 'What foods help prevent constipation during potty training?', answer: 'High-fiber foods like pears, prunes, berries, whole grains, beans, and broccoli. Adequate water intake is equally important. Limit constipating foods like bananas, rice, cheese, and processed white bread.' },
];

export default function PoopWithholdingPage() {
  return (
    <article className="max-w-3xl mx-auto px-5 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getContentPageSchema({
          name: 'Poop Withholding During Potty Training',
          description: 'Why toddlers withhold poop during potty training and how to help them through it.',
          path: '/potty-training/poop-withholding',
          lastModified: '2026-07-01',
          medicalGuidelines: [
            { name: 'AAP Toilet Training Guidelines', url: 'https://www.aap.org/en/clinical-guidance/' },
            { name: 'NASPGHAN Constipation Guidelines', url: 'https://www.naspghan.org/' },
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

      <Breadcrumbs items={[{ label: 'Potty Training', href: '/potty-training' }, { label: 'Poop Withholding' }]} />

      <h1 className="text-2xl font-bold text-foreground mb-2">Poop Withholding During Potty Training</h1>
      <LastReviewed date="2026-07-01" />
      <MedicalReviewAttribution sources={['AAP']} />
      <p className="text-sm text-muted mb-6">
        Stool withholding is one of the most common and frustrating potty training challenges. Up to 22% of toddlers withhold poop at some point during training. It often creates a painful cycle: withholding leads to hard stool, which leads to pain, which leads to more withholding.
      </p>

      <KeyTakeaways
        takeaways={[
          'Up to 22% of toddlers withhold stool during potty training',
          'The withholding-constipation-pain cycle must be broken with soft stools first',
          'It is better for a child to poop in a diaper than to withhold entirely',
          'Medical intervention (stool softeners) is often needed to break the cycle',
          'Never force a child to sit on the toilet for pooping \u2014 this increases fear',
        ]}
      />

      <div className="space-y-6">
        <Section title="Understanding the withholding cycle">
          <p>Poop withholding typically follows this pattern:</p>
          <ol className="list-decimal list-inside space-y-1 mt-2">
            <li>The child has a painful or frightening bowel movement (hard stool, unfamiliar toilet, or pressure from an adult)</li>
            <li>They associate pooping with pain or fear and begin to hold it</li>
            <li>Holding causes stool to accumulate and harden in the colon</li>
            <li>When they finally go, it hurts more, confirming their fear</li>
            <li>The cycle intensifies: more withholding, harder stools, more pain</li>
          </ol>
          <p className="mt-2">
            Breaking this cycle requires making stools soft (so pooping does not hurt) before addressing where the child poops.
          </p>
        </Section>

        <Section title="Why children withhold poop specifically">
          <p>Poop withholding is more common than urine withholding because:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Children can physically control bowel muscles more easily than bladder muscles</li>
            <li>Pooping requires relaxation — the opposite of what an anxious child does</li>
            <li>Many children feel vulnerable or exposed sitting on the toilet for a bowel movement</li>
            <li>Some children prefer the familiar sensation of pooping in a diaper (standing, squatting)</li>
            <li>The sensation of poop leaving the body can be frightening for some toddlers (&ldquo;a part of me is falling out&rdquo;)</li>
          </ul>
        </Section>

        <Section title="Step-by-step approach to resolve withholding">
          <h3 className="font-semibold mb-1">Step 1: Make stools soft (most important)</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Talk to your pediatrician about a stool softener (such as Miralax/PEG 3350) — this is often the first-line treatment</li>
            <li>Increase fiber: prunes, pears, berries, whole grains, beans, broccoli</li>
            <li>Ensure adequate water intake throughout the day</li>
            <li>Reduce constipating foods: excessive dairy, bananas, white bread, processed foods</li>
            <li>Goal: soft, painless bowel movements every 1-2 days</li>
          </ul>

          <h3 className="font-semibold mt-3 mb-1">Step 2: Remove pressure around pooping</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>If your child will only poop in a diaper, let them — for now</li>
            <li>Stop all pressure, comments, and negotiations about where they poop</li>
            <li>Do not ask &ldquo;Do you need to poop?&rdquo; repeatedly</li>
            <li>Do not make the child sit on the toilet and wait for a bowel movement</li>
            <li>Communicate that it is okay to poop however they need to right now</li>
          </ul>

          <h3 className="font-semibold mt-3 mb-1">Step 3: Gradually transition (only after stools are soft and regular)</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>If pooping in a diaper in the bathroom, transition to pooping in a diaper while sitting on the toilet (lid down)</li>
            <li>Then diaper on, sitting on toilet (lid up)</li>
            <li>Then diaper loosened/open while sitting on toilet</li>
            <li>Then no diaper, with a foot stool for stability</li>
            <li>Each step may take days to weeks — let the child set the pace</li>
          </ul>
        </Section>

        <Section title="The importance of positioning">
          <p>Proper sitting position makes pooping easier:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Feet supported:</strong> Always use a stool so feet are flat (not dangling). This relaxes the pelvic floor.</li>
            <li><strong>Knees above hips:</strong> A squatting position opens the anorectal angle, making it easier to pass stool.</li>
            <li><strong>Lean slightly forward:</strong> This activates the abdominal muscles that assist in bowel movements.</li>
            <li><strong>Stable and secure:</strong> The child should not feel like they might fall in — use a potty seat with handles or a child-sized potty.</li>
          </ul>
        </Section>

        <Section title="What NOT to do">
          <ul className="list-disc list-inside space-y-1">
            <li>Never force a child to sit on the toilet when they are resisting</li>
            <li>Do not use suppositories or enemas without medical guidance</li>
            <li>Avoid shaming language (&ldquo;big kids poop on the toilet&rdquo; said disapprovingly)</li>
            <li>Do not restrict diapers if your child truly will not poop without one — withholding is medically worse</li>
            <li>Never punish accidents or withholding</li>
            <li>Do not ignore the problem hoping it resolves on its own — chronic withholding worsens over time</li>
          </ul>
        </Section>

        <Section title="When to see your pediatrician">
          <p>Contact your child&apos;s doctor if:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Your child has not had a bowel movement in 3+ days</li>
            <li>There is blood in the stool or visible anal fissures</li>
            <li>Your child has abdominal pain or distension</li>
            <li>You notice stool leaking into underwear (possible encopresis)</li>
            <li>Dietary changes alone are not producing soft, regular stools</li>
            <li>Withholding has been going on for more than 2 weeks</li>
            <li>Your child is in visible pain or distress when trying to poop</li>
          </ul>
        </Section>

        <FAQSection items={faqItems} />
      </div>

      <BottomLine summary="Poop withholding is common, treatable, and not your fault or your child's fault. The key is breaking the pain-fear cycle by ensuring soft stools first (often with medical help), then gradually building toilet comfort without pressure. It is always better for a child to poop in a diaper than to withhold. Talk to your pediatrician early — the longer withholding continues, the harder the cycle is to break." />

      <div className="mt-6"><EditorialTrustBanner variant="compact" /></div>

      <div className="mt-10 pt-6 border-t border-border flex items-center justify-between">
        <Link href="/potty-training/nighttime" className="text-sm text-primary font-semibold hover:underline">&larr; Nighttime Training</Link>
        <Link href="/potty-training/boys-vs-girls" className="text-sm text-primary font-semibold hover:underline">Boys vs. Girls &rarr;</Link>
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
