import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import KeyTakeaways from '@/components/shared/KeyTakeaways';
import FAQSection from '@/components/shared/FAQSection';
import LastReviewed from '@/components/shared/LastReviewed';
import EditorialTrustBanner from '@/components/shared/EditorialTrustBanner';
import BottomLine from '@/components/shared/BottomLine';
import MedicalReviewAttribution from '@/components/shared/MedicalReviewAttribution';
import { getBreadcrumbSchema, getContentPageSchema, getFAQPageSchema, getHowToSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Weaning Guide',
  description:
    'How and when to wean your baby from breast or bottle. Night weaning, toddler weaning, emotional support, and managing the transition.',
  alternates: { canonical: '/feeding/weaning' },
  openGraph: {
    title: 'Weaning Guide | Is My Baby Alright?',
    description: 'How and when to wean from breast or bottle. Gradual approaches for every stage.',
  },
};

const faqItems = [
  { question: 'What is the best age to wean?', answer: 'There is no single best age. The WHO recommends breastfeeding for 2 years. The AAP recommends at least 12 months, then as long as mutually desired.' },
  { question: 'How long does weaning take?', answer: 'Gradual weaning typically takes 2-6 weeks. Abrupt weaning is not recommended as it can cause engorgement, blocked ducts, and emotional distress.' },
  { question: 'Can I night-wean but keep daytime nursing?', answer: 'Yes. Night weaning and daytime weaning are separate processes. Many families night-wean first while continuing daytime breastfeeding.' },
  { question: 'Will weaning affect my bond with my baby?', answer: 'No. Your bond with your child does not depend on breastfeeding. Bonding continues through closeness, play, responsiveness, and all forms of caregiving.' },
];

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Feeding', url: '/feeding' },
  { name: 'Weaning Guide' },
];

const howToSteps = [
  { name: 'Identify the least-interested feeding', text: 'Observe which feeding your baby is least interested in — this is usually the easiest one to drop first.' },
  { name: 'Replace with a cup or snack', text: 'Replace the dropped feed with a cup of milk (whole cow\'s milk after 12 months) or an age-appropriate snack.' },
  { name: 'Wait several days', text: 'Wait several days before dropping the next feed to allow your body and baby to adjust gradually.' },
  { name: 'Express for comfort only', text: 'Express just enough milk for comfort if you feel full. Pumping fully will maintain supply rather than reduce it.' },
  { name: 'Continue until final feeds remain', text: 'Continue the process until only bedtime and/or morning feeds remain — these are usually the last to go.' },
  { name: 'Drop the final feed when ready', text: 'Drop the final feed when both you and your baby are ready. There is no rush for this last step.' },
];

export default function WeaningPage() {
  return (
    <article className="max-w-3xl mx-auto px-5 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getContentPageSchema({
          name: 'Weaning Guide',
          description: 'How and when to wean your baby from breast or bottle. Night weaning, toddler weaning, and managing the transition.',
          path: '/feeding/weaning',
          medicalGuidelines: [
            { name: 'AAP Breastfeeding Guidelines', url: 'https://www.aap.org/en/clinical-guidance/' },
            { name: 'WHO Breastfeeding Recommendations', url: 'https://www.who.int/health-topics/breastfeeding' },
          ],
        })) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getFAQPageSchema(faqItems)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            getHowToSchema(
              'How to Wean from Breastfeeding',
              'A gradual, step-by-step approach to weaning your baby from breastfeeding based on AAP and WHO guidance.',
              howToSteps
            )
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getBreadcrumbSchema(breadcrumbItems)) }}
      />

      <Breadcrumbs items={[{ label: 'Feeding', href: '/feeding' }, { label: 'Weaning Guide' }]} />

      <h1 className="text-2xl font-bold text-foreground mb-2">Weaning Guide</h1>
      <LastReviewed date="2026-07-01" />
      <MedicalReviewAttribution sources={['AAP', 'WHO']} />
      <p className="text-sm text-muted mb-6 mt-4">
        Weaning is a gradual process, not a single event. Whether you are weaning from breast, bottle, or night feeds, a slow transition is easier on both you and your baby.
      </p>

      <KeyTakeaways
        takeaways={[
          'Weaning is a gradual process, not a single event \u2014 there is no single right time',
          'The WHO recommends breastfeeding for 2 years; the AAP recommends at least 12 months',
          'Drop one feeding at a time, waiting several days between each',
          'Grief and sadness during weaning are normal due to hormonal shifts',
          'The AAP recommends transitioning from bottle to cup by 12-18 months',
        ]}
      />

      <div className="space-y-6">
        <Section title="When should I start weaning my baby?">
          <p>There is no single right time. The WHO recommends breastfeeding for 2 years or beyond. The AAP recommends at least 12 months, then as long as mutually desired. Consider weaning when:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Your baby is eating a variety of solid foods and drinking from a cup</li>
            <li>You or your baby are ready to transition</li>
            <li>A medical reason requires it (rare)</li>
          </ul>
          <p className="mt-2">
            Baby-led weaning (letting the child gradually lose interest) and mother-led weaning (parent initiates the process) are both valid approaches.
          </p>
        </Section>

        <Section title="How do I wean my baby from breastfeeding?">
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Go gradually:</strong> Drop one feeding at a time, waiting several days between each. Start with the feeding baby is least interested in.</li>
            <li><strong>Offer alternatives:</strong> Replace dropped feeds with a cup of milk (whole cow&apos;s milk after 12 months) or a snack.</li>
            <li><strong>Manage engorgement:</strong> Express just enough milk for comfort — pumping fully will maintain supply.</li>
            <li><strong>Bedtime feeds are usually last:</strong> Most families drop the bedtime or morning feed last as these are the most comforting.</li>
            <li><strong>Watch for mastitis:</strong> Weaning too quickly can cause blocked ducts or mastitis. Slow and steady is safer.</li>
            <li><strong>Expect emotions:</strong> Hormonal changes during weaning can cause mood swings, sadness, or irritability. This is normal.</li>
          </ul>
        </Section>

        <Section title="How do I stop night feedings?">
          <ul className="list-disc list-inside space-y-1">
            <li>Most babies are physiologically capable of sleeping through the night without feeding by 6-9 months (consult your pediatrician)</li>
            <li><strong>Gradual reduction:</strong> Slowly decrease the duration of night feeds or the amount offered</li>
            <li><strong>Offer comfort without feeding:</strong> Patting, shushing, offering a pacifier instead</li>
            <li><strong>Ensure adequate daytime calories:</strong> Make sure baby is getting enough nutrition during the day before dropping night feeds</li>
            <li><strong>Be consistent:</strong> Choose an approach and stick with it for at least a week before adjusting</li>
            <li>If baby is under 6 months, discuss night weaning with your pediatrician first</li>
          </ul>
        </Section>

        <Section title="When and how should I wean from the bottle?">
          <p>The AAP recommends transitioning from bottle to cup by 12-18 months to support dental health:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Start offering a cup with meals at 6 months</li>
            <li>Drop one bottle at a time, starting with the midday bottle</li>
            <li>The bedtime bottle is usually the last to go</li>
            <li>Do not put the child to bed with a bottle — it can cause tooth decay</li>
            <li>Transition to whole milk in a cup at 12 months</li>
            <li>Open cups and straw cups are better for oral development than sippy cups</li>
          </ul>
        </Section>

        <Section title="How do I wean a toddler who can ask to nurse?">
          <p>Weaning a toddler who can ask to nurse involves different strategies:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Don&apos;t offer, don&apos;t refuse:</strong> Let the child initiate but do not offer proactively</li>
            <li><strong>Distraction and substitution:</strong> Offer a snack, activity, or cuddle when they ask</li>
            <li><strong>Shorten sessions:</strong> Set a timer or use a song to signal when the feed ends</li>
            <li><strong>Change routines:</strong> If nursing is associated with a specific chair or time, change the routine</li>
            <li><strong>Talk about it:</strong> Toddlers understand more than we think — simple explanations can help</li>
          </ul>
        </Section>

        <Section title="Is it normal to feel sad about weaning?">
          <ul className="list-disc list-inside space-y-1">
            <li>Grief, sadness, or guilt are common — even when weaning is your choice</li>
            <li>Hormonal shifts (especially a drop in oxytocin and prolactin) can affect mood</li>
            <li>Your bond with your child does not depend on breastfeeding</li>
            <li>If you feel persistent sadness or anxiety after weaning, talk to your healthcare provider</li>
          </ul>
        </Section>

        <FAQSection items={faqItems} />
      </div>

      <div className="mt-8 flex flex-wrap gap-2">
        <Link href="/food" className="inline-block rounded-full border border-[#E8E2D9] px-3 py-1 text-xs text-primary hover:bg-card-alt transition-colors">Food Introduction Guide</Link>
        <Link href="/sleep" className="inline-block rounded-full border border-[#E8E2D9] px-3 py-1 text-xs text-primary hover:bg-card-alt transition-colors">Sleep Guide</Link>
      </div>

      <BottomLine summary="Weaning is a gradual process, not a single event. Whether you're weaning from breast, bottle, or both, go at a pace that works for you and your child. There is no single right time to wean — the AAP recommends breastfeeding for at least 12 months, and the WHO recommends continuing to 2 years or beyond." />

      <div className="mt-6"><EditorialTrustBanner variant="compact" /></div>

      <div className="mt-10 pt-6 border-t border-border flex items-center justify-between">
        <Link href="/feeding/formula" className="text-sm text-primary font-semibold hover:underline">&larr; Formula Feeding</Link>
        <Link href="/food" className="text-sm text-primary font-semibold hover:underline">Starting Solids &rarr;</Link>
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
