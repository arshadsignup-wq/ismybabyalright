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
  title: 'Postpartum Recovery Guide',
  description:
    'Postpartum recovery guide covering physical healing, emotional wellbeing, and returning to daily life after birth. Evidence-based guidance for new parents.',
  alternates: { canonical: '/postpartum' },
  openGraph: {
    title: 'Postpartum Recovery Guide | Is My Baby Alright?',
    description: 'Physical healing, emotional wellbeing, and returning to daily life after birth.',
  },
};

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Postpartum Recovery Guide' },
];

const faqItems = [
  { question: 'How long does it take to recover from giving birth?', answer: '6-12 months for most physical changes to resolve. C-section recovery takes 6-8 weeks for initial healing.' },
  { question: 'Is postpartum hair loss permanent?', answer: 'No. Shedding peaks at 3-4 months postpartum and resolves by 6-12 months as hormones stabilize.' },
  { question: 'When do baby blues turn into postpartum depression?', answer: 'If symptoms such as persistent sadness, anxiety, or loss of interest last beyond 2 weeks, it may be postpartum depression. PPD is treatable with therapy and/or medication.' },
  { question: 'How do I know if my C-section incision is infected?', answer: 'Signs of infection include redness, swelling, warmth, discharge from the incision, or fever over 100.4\u00B0F (38\u00B0C). Contact your provider if you notice any of these.' },
  { question: 'Is it normal to feel angry after having a baby?', answer: 'Yes. Postpartum rage is a recognized mood disorder related to hormonal changes and sleep deprivation. Talk to your healthcare provider about it.' },
];

export default function PostpartumPage() {
  return (
    <article className="max-w-3xl mx-auto px-5 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getContentPageSchema({
          name: 'Postpartum Recovery Guide',
          description: 'Postpartum recovery guide covering physical healing, emotional wellbeing, and returning to daily life after birth.',
          path: '/postpartum',
          medicalGuidelines: [
            { name: 'ACOG Postpartum Care', url: 'https://www.acog.org/clinical/clinical-guidance' },
            { name: 'AAP Postpartum Guidelines', url: 'https://www.aap.org/en/clinical-guidance/' },
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

      <Breadcrumbs items={[{ label: 'Postpartum Recovery Guide' }]} />

      <h1 className="text-2xl font-bold text-foreground mb-2">Postpartum Recovery Guide</h1>
      <LastReviewed date="2026-07-01" />
      <MedicalReviewAttribution sources={['ACOG', 'AAP']} />
      <p className="text-sm text-muted mb-6">
        Recovery after birth takes time. This guide covers what to expect physically and emotionally, based on ACOG and AAP guidelines. Be patient with yourself — healing is not linear.
      </p>

      <KeyTakeaways
        takeaways={[
          'Full physical recovery after birth takes 6-12 months \u2014 healing is not linear',
          'Baby blues (mood swings, crying) are common and typically resolve within 2 weeks',
          'Postpartum depression is persistent sadness lasting beyond 2 weeks \u2014 it is treatable',
          'Call your doctor for fever over 100.4\u00B0F, heavy bleeding, or thoughts of self-harm',
          'Crisis line: Postpartum Support International 1-800-944-4773',
        ]}
      />

      <div className="space-y-6">
        <Section title="What is the postpartum recovery timeline?">
          <p>Every recovery is different, but here is a general timeline:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>First 24 hours:</strong> Cramping (afterpains), bleeding (lochia), soreness, fatigue. Ice packs and pain relief as prescribed.</li>
            <li><strong>First week:</strong> Lochia transitions from bright red to pink/brown. Engorgement if breastfeeding. Perineal or incision pain peaks.</li>
            <li><strong>Weeks 2-6:</strong> Lochia lightens and decreases. Energy slowly returns. Stitches dissolve. 6-week postpartum checkup.</li>
            <li><strong>Months 2-6:</strong> Core strength gradually returns. Hair shedding (telogen effluvium) peaks around month 3-4. Hormones continue to stabilize.</li>
            <li><strong>6-12 months:</strong> Most physical changes have resolved, though some (diastasis recti, pelvic floor issues) may need longer.</li>
          </ul>

          <ComparisonTable
            caption="Postpartum recovery timeline"
            headers={['Timeframe', 'What to expect', 'When to worry']}
            rows={[
              ['First 24 hours', 'Cramping, bleeding, fatigue', 'Heavy bleeding (1+ pad/hour)'],
              ['First week', 'Lochia red to pink, engorgement', 'Fever over 100.4\u00B0F, foul-smelling discharge'],
              ['Weeks 2-6', 'Lochia lightens, stitches dissolve', 'Incision redness/swelling, persistent sadness'],
              ['Months 2-6', 'Hair shedding peaks, hormones stabilize', 'Severe mood changes'],
              ['6-12 months', 'Most changes resolved', 'Persistent pelvic floor issues'],
            ]}
          />
        </Section>

        <Section title="How long does C-section recovery take?">
          <p>Recovery from a cesarean section typically takes longer since it is major abdominal surgery:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Hospital stay is usually 2-4 days</li>
            <li>Avoid lifting anything heavier than your baby for 6-8 weeks</li>
            <li>Keep the incision clean and dry — watch for signs of infection (redness, swelling, discharge, fever)</li>
            <li>Walking soon after surgery helps prevent blood clots and aids recovery</li>
            <li>Pain medication is normal and expected — take it as prescribed</li>
            <li>Full recovery typically takes 6-8 weeks, sometimes longer</li>
          </ul>
        </Section>

        <Section title="How do I recover my pelvic floor after birth?">
          <ul className="list-disc list-inside space-y-1">
            <li>Pelvic floor weakness is common after both vaginal and cesarean birth</li>
            <li>Symptoms may include urinary leaking, heaviness, or pain during intimacy</li>
            <li>Kegel exercises can help — but doing them incorrectly can worsen symptoms</li>
            <li>A pelvic floor physical therapist can provide personalized guidance</li>
            <li>Most symptoms improve significantly with proper exercises and time</li>
            <li>Persistent symptoms beyond 3-6 months warrant professional evaluation</li>
          </ul>
        </Section>

        <Section title="When does postpartum hair loss stop?">
          <ul className="list-disc list-inside space-y-1">
            <li>Hormonal changes cause increased shedding (telogen effluvium), typically peaking 3-4 months postpartum</li>
            <li>This is not permanent hair loss — your hair is shedding what it retained during pregnancy</li>
            <li>Usually resolves by 6-12 months postpartum</li>
            <li>Maintaining good nutrition and managing stress supports regrowth</li>
            <li>See your doctor if hair loss seems excessive or has not improved by 12 months</li>
          </ul>
        </Section>

        <Section title="What is the difference between baby blues and postpartum depression?">
          <p>Hormonal shifts, sleep deprivation, and the demands of a newborn can affect mental health:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Baby blues</strong> (mood swings, crying, anxiety) are very common and typically resolve within 2 weeks</li>
            <li><strong>Postpartum depression</strong> is persistent sadness, anxiety, or loss of interest lasting beyond 2 weeks — it is treatable</li>
            <li><strong>Postpartum anxiety</strong> includes racing thoughts, excessive worry, difficulty sleeping even when baby sleeps</li>
            <li><strong>Postpartum rage</strong> involves intense anger disproportionate to triggers — more common than people realize</li>
            <li><strong>Intrusive thoughts</strong> (scary unwanted thoughts about harm) are common and do not mean you will act on them</li>
          </ul>

          <ComparisonTable
            caption="Baby blues vs postpartum depression"
            headers={['', 'Baby blues', 'Postpartum depression']}
            rows={[
              ['Duration', 'Resolves within 2 weeks', 'Lasts beyond 2 weeks'],
              ['Severity', 'Mood swings, tearfulness', 'Persistent sadness, loss of interest'],
              ['Function', 'Can still care for baby', 'May struggle with daily tasks'],
              ['Prevalence', 'Up to 80% of new mothers', '10-20% of new mothers'],
              ['Treatment', 'Self-resolves', 'Therapy and/or medication'],
            ]}
          />

          <p className="mt-2 font-semibold text-foreground">
            If you are struggling, you are not failing — you are experiencing a medical condition that responds to treatment.
          </p>
          <div className="flex flex-wrap gap-2 mt-3">
            <Link href="/mental-health" className="inline-block rounded-full border border-[#E8E2D9] px-3 py-1 text-xs text-primary hover:bg-card-alt transition-colors">Mental Health Resources</Link>
            <Link href="/mental-health/check-in" className="inline-block rounded-full border border-[#E8E2D9] px-3 py-1 text-xs text-primary hover:bg-card-alt transition-colors">Am I Okay? Check-in</Link>
          </div>
        </Section>

        <Section title="When should I call my doctor after giving birth?">
          <p>Contact your healthcare provider if you experience:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Fever of 100.4°F (38°C) or higher</li>
            <li>Heavy bleeding (soaking more than one pad per hour)</li>
            <li>Foul-smelling vaginal discharge</li>
            <li>Redness, swelling, or discharge from incision or stitches</li>
            <li>Difficulty breathing or chest pain</li>
            <li>Severe headache that does not improve</li>
            <li>Calf pain, swelling, or redness (possible blood clot)</li>
            <li>Thoughts of harming yourself or your baby</li>
          </ul>
          <p className="mt-2 text-xs">
            In crisis: <a href="tel:1-800-944-4773" className="text-primary font-semibold">Postpartum Support International: 1-800-944-4773</a>
          </p>
        </Section>

        <FAQSection items={faqItems} />
      </div>

      {/* Postpartum guides */}
      <section className="mt-8">
        <h2 className="text-base font-bold text-foreground mb-3">Postpartum guides</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Link href="/postpartum/recovery" className="rounded-xl border border-[#E8E2D9] bg-white p-4 hover:border-primary transition-colors group">
            <p className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">Physical Recovery</p>
            <p className="text-xs text-muted mt-1">Week-by-week recovery timeline for vaginal and C-section birth</p>
          </Link>
          <Link href="/postpartum/warning-signs" className="rounded-xl border border-[#E8E2D9] bg-white p-4 hover:border-primary transition-colors group">
            <p className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">Warning Signs</p>
            <p className="text-xs text-muted mt-1">When to call your doctor after giving birth</p>
          </Link>
          <Link href="/postpartum/mental-health" className="rounded-xl border border-[#E8E2D9] bg-white p-4 hover:border-primary transition-colors group">
            <p className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">Mental Health</p>
            <p className="text-xs text-muted mt-1">PPD, PPA, postpartum psychosis - signs and treatment</p>
          </Link>
          <Link href="/postpartum/partner" className="rounded-xl border border-[#E8E2D9] bg-white p-4 hover:border-primary transition-colors group">
            <p className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">Guide for Partners</p>
            <p className="text-xs text-muted mt-1">How to support recovery, bonding, and mental health</p>
          </Link>
          <Link href="/postpartum/body-changes" className="rounded-xl border border-[#E8E2D9] bg-white p-4 hover:border-primary transition-colors group">
            <p className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">Body Changes</p>
            <p className="text-xs text-muted mt-1">What happens to your body after birth and what is normal</p>
          </Link>
        </div>
      </section>

      <div className="mt-6 flex flex-wrap gap-2">
        <Link href="/resources/guides/postpartum-recovery" className="inline-block rounded-full border border-[#E8E2D9] px-3 py-1 text-xs text-primary hover:bg-card-alt transition-colors">Detailed Recovery Guide</Link>
        <Link href="/resources/guides/postpartum-fitness" className="inline-block rounded-full border border-[#E8E2D9] px-3 py-1 text-xs text-primary hover:bg-card-alt transition-colors">Postpartum Fitness</Link>
        <Link href="/fairness" className="inline-block rounded-full border border-[#E8E2D9] px-3 py-1 text-xs text-primary hover:bg-card-alt transition-colors">Fairness & Workload</Link>
      </div>

      <BottomLine summary="Postpartum recovery takes time — most experts say full recovery takes 6-12 months, not 6 weeks. Be patient with yourself, accept help when offered, and contact your provider if you experience signs of postpartum depression or complications." />

      <div className="mt-6"><EditorialTrustBanner variant="compact" /></div>

      <div className="mt-10 pt-6 border-t border-border flex items-center justify-between">
        <Link href="/pregnancy" className="text-sm text-primary font-semibold hover:underline">&larr; Pregnancy Guide</Link>
        <Link href="/newborn" className="text-sm text-primary font-semibold hover:underline">Newborn Care &rarr;</Link>
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
