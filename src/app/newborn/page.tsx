import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import MedicalReviewAttribution from '@/components/shared/MedicalReviewAttribution';
import KeyTakeaways from '@/components/shared/KeyTakeaways';
import ComparisonTable from '@/components/shared/ComparisonTable';
import FAQSection from '@/components/shared/FAQSection';
import LastReviewed from '@/components/shared/LastReviewed';
import EditorialTrustBanner from '@/components/shared/EditorialTrustBanner';
import BottomLine from '@/components/shared/BottomLine';
import { getBreadcrumbSchema, getContentPageSchema, getFAQPageSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Newborn Care Guide',
  description:
    'Everything you need to know about caring for your newborn. First week home, feeding, sleep, umbilical cord care, newborn screening, and when to call the doctor.',
  alternates: { canonical: '/newborn' },
  openGraph: {
    title: 'Newborn Care Guide | Is My Baby Alright?',
    description: 'Caring for your newborn: first week home, feeding, sleep, umbilical cord care, and more.',
  },
};

const faqItems = [
  { question: 'Is it normal for my newborn to lose weight after birth?', answer: 'Yes. Weight loss of 7-10% in the first few days is normal. Babies should regain birth weight by 10-14 days.' },
  { question: 'How often should a newborn eat?', answer: 'Breastfed: 8-12 times per day. Formula-fed: 6-8 times per day. Feed on demand, watching for hunger cues.' },
  { question: 'When does the umbilical cord stump fall off?', answer: 'Naturally within 1-3 weeks. Keep it clean and dry. Do not pull it off.' },
  { question: 'Is my newborn\'s cone-shaped head normal?', answer: 'Yes. Molding from the birth canal resolves within a few days.' },
  { question: 'What temperature is a fever in a newborn?', answer: '100.4\u00B0F (38\u00B0C) rectal. In a baby under 3 months, always call your pediatrician immediately.' },
];

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Newborn Care Guide' },
];

export default function NewbornPage() {
  return (
    <article className="max-w-3xl mx-auto px-5 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getContentPageSchema({
          name: 'Newborn Care Guide',
          description: 'Everything you need to know about caring for your newborn in the first weeks of life.',
          path: '/newborn',
          medicalGuidelines: [
            { name: 'AAP Newborn Care Guidelines', url: 'https://www.aap.org/en/clinical-guidance/' },
            { name: 'WHO Newborn Health', url: 'https://www.who.int/health-topics/newborn-health' },
            { name: 'CDC Infant Health', url: 'https://www.cdc.gov/ncbddd/actearly/milestones/index.html' },
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

      <Breadcrumbs items={[{ label: 'Newborn Care Guide' }]} />

      <h1 className="text-2xl font-bold text-foreground mb-2">Newborn Care Guide</h1>
      <p className="text-sm text-muted mb-6">
        The first weeks with your baby are both wonderful and overwhelming. This guide covers the essentials based on AAP and WHO guidelines.
      </p>

      <KeyTakeaways
        takeaways={[
          'Most newborns sleep 16-17 hours per day in short stretches and eat 8-12 times per day',
          'Weight loss of 7-10% in the first days is normal; birth weight should be regained by 10-14 days',
          'Call your doctor immediately if your newborn has a temperature of 100.4\u00B0F (38\u00B0C) or higher',
          'The umbilical cord stump falls off naturally within 1-3 weeks \u2014 keep it clean and dry',
          'Skin-to-skin contact helps regulate temperature, heart rate, and breathing',
        ]}
      />

      <div className="mb-6">
        <MedicalReviewAttribution sources={['AAP', 'WHO', 'CDC']} />
      </div>

      <LastReviewed date="2026-07-01" />

      <div className="space-y-6">
        <Section title="What should I expect during baby's first week home?">
          <p>Your newborn is adjusting to life outside the womb. Here is what to expect:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Your baby will sleep 16-17 hours per day in short stretches</li>
            <li>Expect 8-12 feedings per day (breastfed) or 6-8 feedings (formula-fed)</li>
            <li>Wet and dirty diapers increase each day — by day 5, expect 6+ wet diapers per day</li>
            <li>Weight loss of 7-10% in the first few days is normal; birth weight should be regained by 10-14 days</li>
            <li>Skin-to-skin contact helps regulate temperature, heart rate, and breathing</li>
            <li>It is normal to feel overwhelmed — accept help and rest when baby rests</li>
          </ul>

          <ComparisonTable
            caption="Newborn feeding amounts by day"
            headers={['Day', 'Breastfed', 'Formula-fed', 'Wet diapers expected']}
            rows={[
              ['Day 1', 'Colostrum, 8-12 feeds', '1-2 oz per feed', '1+'],
              ['Day 2', 'Colostrum, 8-12 feeds', '1-2 oz per feed', '2+'],
              ['Day 3', 'Transitional milk arriving', '1-2 oz per feed', '3+'],
              ['Day 4', 'Mature milk coming in', '2-3 oz per feed', '4+'],
              ['Day 5+', '8-12 feeds, mature milk', '2-3 oz per feed', '6+'],
            ]}
            sourceNote="Source: AAP newborn feeding guidelines"
          />
        </Section>

        <Section title="What reflexes do newborns have?">
          <p>Your baby is born with several automatic reflexes that gradually disappear as the brain matures:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Rooting:</strong> Turns toward anything touching the cheek, searching for a nipple</li>
            <li><strong>Sucking:</strong> Sucks anything placed in the mouth</li>
            <li><strong>Moro (startle):</strong> Throws arms out when startled by noise or sudden movement</li>
            <li><strong>Palmar grasp:</strong> Grips your finger tightly when placed in palm</li>
            <li><strong>Stepping:</strong> Makes walking motions when held upright with feet touching a surface</li>
            <li><strong>Babinski:</strong> Toes fan out when the sole of the foot is stroked</li>
          </ul>
        </Section>

        <Section title="How do I care for my newborn's umbilical cord?">
          <ul className="list-disc list-inside space-y-1">
            <li>The cord stump dries and falls off naturally within 1-3 weeks</li>
            <li>Keep the area clean and dry — fold the diaper below the stump</li>
            <li>Do not pull the stump off, even if it looks loose</li>
            <li>Sponge baths only until the stump falls off</li>
            <li>Call your doctor if: redness or swelling around the base, foul-smelling discharge, or bleeding that does not stop with gentle pressure</li>
          </ul>
        </Section>

        <Section title="What tests does my newborn get at the hospital?">
          <p>Before leaving the hospital, your baby will undergo several important screenings:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Blood spot test (heel prick):</strong> Screens for 30+ rare but treatable conditions including PKU, sickle cell disease, and hypothyroidism</li>
            <li><strong>Hearing screening:</strong> Tests both ears for hearing loss — early detection is critical for language development</li>
            <li><strong>Pulse oximetry:</strong> Measures oxygen levels to screen for critical congenital heart defects</li>
            <li><strong>Bilirubin check:</strong> Screens for jaundice levels before discharge</li>
          </ul>
        </Section>

        <Section title="How often should I bathe my newborn?">
          <ul className="list-disc list-inside space-y-1">
            <li>Sponge baths until the cord stump falls off and the area heals</li>
            <li>2-3 baths per week is sufficient — daily baths can dry out skin</li>
            <li>Use warm (not hot) water — test with your elbow or wrist</li>
            <li>Never leave your baby unattended in or near water, even for a second</li>
            <li>Use fragrance-free, gentle soap sparingly</li>
            <li>Pat dry gently and apply fragrance-free moisturizer if skin is dry</li>
          </ul>
        </Section>

        <Section title="What does a normal newborn look like?">
          <p>Many normal newborn features can look concerning. These are typically harmless:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Molding:</strong> Cone-shaped or asymmetric head from the birth canal — resolves within days</li>
            <li><strong>Milia:</strong> Tiny white bumps on nose and cheeks — resolve on their own</li>
            <li><strong>Newborn acne:</strong> Small red bumps appearing at 2-4 weeks — clears without treatment</li>
            <li><strong>Peeling skin:</strong> Especially common in overdue babies — normal shedding</li>
            <li><strong>Lanugo:</strong> Fine body hair, especially on back and shoulders — falls out naturally</li>
            <li><strong>Stork bites:</strong> Pink flat birthmarks on eyelids, nose, or back of neck — most fade by age 2</li>
          </ul>
        </Section>

        <Section title="When should I call the doctor for my newborn?">
          <p>In the first month, call your pediatrician if your baby:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Has a rectal temperature of 100.4°F (38°C) or higher</li>
            <li>Seems unusually sleepy or difficult to wake for feedings</li>
            <li>Refuses to feed or is not producing enough wet diapers</li>
            <li>Has yellow or green discharge from the umbilical cord</li>
            <li>Develops jaundice (yellow skin or eyes) after leaving the hospital</li>
            <li>Has difficulty breathing, grunting, or flaring nostrils</li>
            <li>Cries inconsolably for more than 3 hours</li>
          </ul>
          <p className="mt-2">
            <Link href="/when-to-call-the-doctor" className="text-primary hover:underline font-semibold">Complete guide: when to call the doctor &rarr;</Link>
          </p>
        </Section>

        <FAQSection items={faqItems} />
      </div>

      <section className="mt-8 rounded-xl border border-[#E8E2D9] bg-white p-5">
        <h2 className="text-base font-bold text-foreground mb-3">Week-by-Week Newborn Guide</h2>
        <p className="text-sm text-muted mb-4">Track your baby&apos;s development week by week during the newborn period:</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {Array.from({ length: 12 }, (_, i) => (
            <Link
              key={i}
              href={`/newborn/week-${i + 1}`}
              className="rounded-lg border border-[#E8E2D9] px-3 py-2 text-sm text-primary hover:bg-card-alt transition-colors text-center"
            >
              Week {i + 1}
            </Link>
          ))}
        </div>
      </section>

      <div className="mt-6 flex flex-wrap gap-2">
        <Link href="/ages/0-1mo" className="inline-block rounded-full border border-[#E8E2D9] px-3 py-1 text-xs text-primary hover:bg-card-alt transition-colors">0-1 Month Guide</Link>
        <Link href="/development/month-1" className="inline-block rounded-full border border-[#E8E2D9] px-3 py-1 text-xs text-primary hover:bg-card-alt transition-colors">1 Month Development</Link>
        <Link href="/milestones/1-month" className="inline-block rounded-full border border-[#E8E2D9] px-3 py-1 text-xs text-primary hover:bg-card-alt transition-colors">1 Month Milestones</Link>
        <Link href="/feeding" className="inline-block rounded-full border border-[#E8E2D9] px-3 py-1 text-xs text-primary hover:bg-card-alt transition-colors">Feeding Guide</Link>
        <Link href="/sleep" className="inline-block rounded-full border border-[#E8E2D9] px-3 py-1 text-xs text-primary hover:bg-card-alt transition-colors">Sleep Guide</Link>
        <Link href="/skin-guide" className="inline-block rounded-full border border-[#E8E2D9] px-3 py-1 text-xs text-primary hover:bg-card-alt transition-colors">Skin Guide</Link>
        <Link href="/poop-guide" className="inline-block rounded-full border border-[#E8E2D9] px-3 py-1 text-xs text-primary hover:bg-card-alt transition-colors">Poop Guide</Link>
        <Link href="/vaccines" className="inline-block rounded-full border border-[#E8E2D9] px-3 py-1 text-xs text-primary hover:bg-card-alt transition-colors">Vaccine Schedule</Link>
        <Link href="/checklists/nicu-discharge" className="inline-block rounded-full border border-[#E8E2D9] px-3 py-1 text-xs text-primary hover:bg-card-alt transition-colors">NICU Discharge</Link>
      </div>

      <BottomLine summary="The newborn period is intense but temporary. Most newborn behaviors that worry parents — like frequent feeding, irregular sleep, and unusual-looking skin — are completely normal. Trust your instincts, and call your pediatrician whenever something doesn't feel right." />

      <div className="mt-6"><EditorialTrustBanner variant="compact" /></div>

      <div className="mt-10 pt-6 border-t border-border flex items-center justify-between">
        <Link href="/pregnancy" className="text-sm text-primary font-semibold hover:underline">&larr; Pregnancy Guide</Link>
        <Link href="/development/month-1" className="text-sm text-primary font-semibold hover:underline">1 Month Development &rarr;</Link>
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
