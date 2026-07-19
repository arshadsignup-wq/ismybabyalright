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
  title: 'Body Changes After Birth',
  description:
    'What happens to your body after giving birth. Postpartum body changes explained — what is normal, what is temporary, and what to discuss with your doctor. ACOG-based guidance.',
  alternates: { canonical: '/postpartum/body-changes' },
  openGraph: {
    title: 'Body Changes After Birth | Is My Baby Alright?',
    description: 'Understanding postpartum body changes — what is normal, temporary, and when to seek help.',
  },
};

const faqItems = [
  {
    question: 'When does postpartum hair loss stop?',
    answer: 'Postpartum hair shedding (telogen effluvium) typically peaks at 3-4 months postpartum and resolves by 6-12 months. It is caused by dropping estrogen levels after delivery. It is not permanent — your hair is shedding what was retained during pregnancy. See your doctor if loss is severe or has not improved by 12 months.',
  },
  {
    question: 'Will my body ever go back to normal after pregnancy?',
    answer: 'Your body will continue to change over 6-12 months. Some things return to pre-pregnancy state, while others may be permanently different (wider hips, different shoe size, abdominal appearance). "Normal" is a spectrum. Focus on function and health rather than returning to a pre-pregnancy body.',
  },
  {
    question: 'What is diastasis recti and how do I know if I have it?',
    answer: 'Diastasis recti is a separation of the abdominal muscles that occurs during pregnancy. To check: lie on your back, lift your head slightly, and feel above and below your navel. A gap wider than 2 finger-widths may indicate diastasis. A physical therapist can assess and provide targeted exercises. Avoid crunches until evaluated.',
  },
  {
    question: 'Why are my feet bigger after pregnancy?',
    answer: 'Relaxin hormone loosens ligaments throughout pregnancy, including in your feet. Combined with weight gain and fluid retention, this can cause feet to spread. Many people go up half to a full shoe size permanently. The arch may also flatten slightly.',
  },
  {
    question: 'When will my period return after birth?',
    answer: 'If not breastfeeding, your period may return within 6-8 weeks. If exclusively breastfeeding, it may be delayed for months or until weaning. However, you can ovulate before your first period returns, so use contraception if you do not want another pregnancy.',
  },
];

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Postpartum', url: '/postpartum' },
  { name: 'Body Changes' },
];

export default function PostpartumBodyChangesPage() {
  return (
    <article className="max-w-3xl mx-auto px-5 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getContentPageSchema({
          name: 'Body Changes After Birth',
          description: 'What happens to your body after giving birth. Postpartum body changes — what is normal, temporary, and when to see a doctor.',
          path: '/postpartum/body-changes',
          lastModified: '2026-07-01',
          medicalGuidelines: [
            { name: 'ACOG Postpartum Care', url: 'https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2018/05/optimizing-postpartum-care' },
            { name: 'WHO Postnatal Care', url: 'https://www.who.int/publications/i/item/9789240045989' },
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

      <Breadcrumbs items={[
        { label: 'Postpartum', href: '/postpartum' },
        { label: 'Body Changes' },
      ]} />

      <h1 className="text-2xl font-bold text-foreground mb-2">Body Changes After Birth</h1>
      <LastReviewed date="2026-07-01" />
      <MedicalReviewAttribution sources={['ACOG', 'WHO']} />
      <p className="text-sm text-muted mb-6">
        Your body changed dramatically during pregnancy, and it will continue to change after delivery. This guide covers what is normal, what is temporary, and what deserves medical attention.
      </p>

      <KeyTakeaways
        takeaways={[
          'Most postpartum body changes are normal and resolve within 6-12 months',
          'Postpartum hair shedding peaks at 3-4 months and is temporary',
          'Diastasis recti (abdominal separation) affects about 60% of pregnancies — targeted exercises help',
          'Night sweats, breast changes, and skin changes are all hormone-driven and temporary',
          'Pelvic floor issues are common but treatable — do not accept incontinence as permanent',
          'Be patient with your body — it grew a human and deserves time and grace',
        ]}
      />

      <div className="space-y-6">
        <Section title="Breast and chest changes">
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Engorgement:</strong> Breasts become full and painful around day 3-5 as milk comes in (even if not breastfeeding)</li>
            <li><strong>Leaking:</strong> Common in the early weeks, even when not feeding. Breast pads help.</li>
            <li><strong>Size changes:</strong> Breasts may be significantly larger while breastfeeding, then smaller after weaning (sometimes smaller than pre-pregnancy)</li>
            <li><strong>Shape:</strong> May change permanently due to stretching of skin and ligaments, regardless of breastfeeding</li>
            <li><strong>Nipple sensitivity:</strong> May increase or decrease. Breastfeeding-related pain should be evaluated for latch issues.</li>
            <li><strong>Stretch marks:</strong> May fade from red/purple to white/silver over time but do not fully disappear</li>
          </ul>
        </Section>

        <Section title="Abdominal changes">
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Still looking pregnant:</strong> Completely normal. The uterus takes about 6 weeks to return to pre-pregnancy size.</li>
            <li><strong>Diastasis recti:</strong> Abdominal muscle separation affects about 60% of pregnancies. Can cause a bulge or "dome" when engaging core. Physical therapy is the first-line treatment.</li>
            <li><strong>Loose skin:</strong> May tighten over months, but some laxity is often permanent after stretching</li>
            <li><strong>Linea nigra:</strong> The dark vertical line typically fades over several months</li>
            <li><strong>Stretch marks:</strong> Common on abdomen, initially red/purple, fading to silver/white over 6-12 months</li>
            <li><strong>C-section scar:</strong> Initially red and raised, fading and flattening over 12-18 months. Scar massage after full healing can help.</li>
          </ul>
        </Section>

        <Section title="Hair and skin changes">
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Hair shedding:</strong> Telogen effluvium peaks at 3-4 months postpartum. You are losing what you retained during pregnancy. Resolves by 6-12 months.</li>
            <li><strong>Hair texture:</strong> Some people notice changes in curl pattern, thickness, or color. May be temporary or permanent.</li>
            <li><strong>Melasma:</strong> Dark patches on face (mask of pregnancy) gradually fade but may persist, especially with sun exposure. Use sunscreen.</li>
            <li><strong>Acne:</strong> Hormonal fluctuations can trigger breakouts in the postpartum period</li>
            <li><strong>Skin tags:</strong> Common during pregnancy. May fall off on their own or can be removed by a dermatologist.</li>
            <li><strong>Spider veins:</strong> Small broken blood vessels on face or legs. Most improve within a few months.</li>
          </ul>
        </Section>

        <Section title="Pelvic floor and urogenital changes">
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Urinary incontinence:</strong> Stress incontinence (leaking with coughing, sneezing, jumping) affects up to 1 in 3 postpartum people. Kegels and physical therapy help significantly.</li>
            <li><strong>Vaginal dryness:</strong> Hormonal changes (especially with breastfeeding) can cause dryness. Use lubricant. Improves as hormones stabilize.</li>
            <li><strong>Vaginal laxity:</strong> Some stretching is normal after vaginal birth. Pelvic floor exercises can improve tone.</li>
            <li><strong>Hemorrhoids:</strong> Very common from pregnancy and pushing. Usually resolve with time, fiber, and topical treatments.</li>
            <li><strong>Pelvic organ prolapse:</strong> Feeling of heaviness or bulge in vagina. Mild prolapse is common. Physical therapy is first-line treatment. See a specialist for persistent symptoms.</li>
            <li><strong>Pain with intercourse:</strong> Can be due to hormonal changes, scar tissue, or pelvic floor tension. Treatable — talk to your provider.</li>
          </ul>
        </Section>

        <Section title="Hormonal and metabolic changes">
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Night sweats:</strong> Common in the first few weeks as your body sheds excess fluid from pregnancy</li>
            <li><strong>Hot flashes:</strong> Related to estrogen fluctuations, especially if breastfeeding</li>
            <li><strong>Thyroid changes:</strong> Postpartum thyroiditis affects 5-10% of people. Symptoms (fatigue, weight changes, mood) overlap with normal postpartum changes. Testing at 6-week checkup if symptomatic.</li>
            <li><strong>Return of menstruation:</strong> Without breastfeeding: 6-8 weeks. With exclusive breastfeeding: may be delayed months. First periods may be heavier or irregular.</li>
            <li><strong>Metabolism:</strong> May feel slower, especially with sleep deprivation and hormonal changes. Normalizes gradually.</li>
          </ul>
        </Section>

        <Section title="Musculoskeletal changes">
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Joint laxity:</strong> Relaxin hormone effects can persist for months, increasing joint flexibility and injury risk</li>
            <li><strong>Back pain:</strong> Common from carrying baby, breastfeeding posture, and weakened core. Core strengthening helps.</li>
            <li><strong>Wrist pain (de Quervain's):</strong> Tendinitis from lifting and holding baby. Wrist splints and modified lifting technique help.</li>
            <li><strong>Wider hips:</strong> Pelvic joints may remain slightly wider. Some people go up a pant size permanently.</li>
            <li><strong>Bigger feet:</strong> Relaxin can cause permanent arch changes. Half to full size increase is common.</li>
            <li><strong>Carpal tunnel:</strong> Pregnancy-related carpal tunnel usually resolves within a few weeks postpartum</li>
          </ul>
        </Section>

        <Section title="What to discuss with your doctor">
          <ul className="list-disc list-inside space-y-1">
            <li>Urinary incontinence that does not improve with Kegels after 3 months</li>
            <li>Persistent pain during intercourse</li>
            <li>Diastasis recti wider than 2 finger-widths</li>
            <li>Hair loss that seems excessive or has not improved by 12 months</li>
            <li>Symptoms of thyroid disorder (extreme fatigue, weight gain/loss, feeling cold/hot)</li>
            <li>Pelvic heaviness or feeling of something "falling out"</li>
            <li>Scar tissue that is painful, thickened, or restricting movement</li>
          </ul>
        </Section>

        <FAQSection items={faqItems} />
      </div>

      <BottomLine
        summary="Your postpartum body is not broken — it is recovering from an extraordinary event. Most changes are normal and temporary, but some deserve medical attention. Do not suffer in silence with issues like incontinence or pain — effective treatments exist."
        supportiveMessage="There is no timeline for 'bouncing back' and no obligation to look like you did before. Your body grew and delivered a human being. It deserves patience, nourishment, and care — not criticism."
      />

      <div className="mt-6"><EditorialTrustBanner variant="compact" /></div>

      <div className="mt-10 pt-6 border-t border-border flex items-center justify-between">
        <Link href="/postpartum/partner" className="text-sm text-primary font-semibold hover:underline">&larr; Guide for Partners</Link>
        <Link href="/postpartum" className="text-sm text-primary font-semibold hover:underline">Postpartum Guide &rarr;</Link>
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
