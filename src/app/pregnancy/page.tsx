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
  title: 'Pregnancy Guide & Tools',
  description:
    'Pregnancy resources, calculators, and tools. Due date calculator, contraction timer, kick counter, pregnancy tracker, and trimester guides.',
  alternates: { canonical: '/pregnancy' },
  openGraph: {
    title: 'Pregnancy Guide & Tools | Is My Baby Alright?',
    description:
      'Pregnancy resources, calculators, and tools from conception through delivery.',
  },
};

const tools = [
  { href: '/tools/pregnancy-tracker', label: 'Pregnancy Tracker', description: 'Week-by-week pregnancy tracking with milestones and symptoms' },
  { href: '/tools/due-date', label: 'Due Date Calculator', description: 'Calculate your estimated due date from LMP or conception date' },
  { href: '/tools/ovulation', label: 'Ovulation Calculator', description: 'Find your most fertile days to plan or track conception' },
  { href: '/tools/contraction-timer', label: 'Contraction Timer', description: 'Time contractions to know when to head to the hospital' },
  { href: '/tools/kick-counter', label: 'Kick Counter', description: 'Track fetal movement to monitor your baby\'s wellbeing' },
  { href: '/tools/gender-predictor', label: 'Gender Predictor', description: 'Fun predictions based on various old wives\' tales' },
  { href: '/tools/bmi', label: 'BMI Calculator', description: 'Calculate pre-pregnancy and current BMI for healthy weight gain tracking' },
];

const trimesters = [
  {
    title: 'What happens in the first trimester?',
    subtitle: 'Weeks 1-12',
    highlights: [
      'All major organs begin to form',
      'Heart starts beating around week 6',
      'Morning sickness peaks around weeks 8-10',
      'First prenatal visit typically between weeks 8-12',
      'Nuchal translucency screening at weeks 11-13',
      'Risk of miscarriage decreases significantly after week 12',
    ],
  },
  {
    title: 'What happens in the second trimester?',
    subtitle: 'Weeks 13-26',
    highlights: [
      'Morning sickness typically improves',
      'Anatomy scan (detailed ultrasound) at weeks 18-22',
      'You may begin to feel baby move (quickening) around weeks 16-22',
      'Glucose screening test at weeks 24-28',
      'Baby can hear sounds from outside the womb',
      'Viability milestone around 24 weeks',
    ],
  },
  {
    title: 'What happens in the third trimester?',
    subtitle: 'Weeks 27-40',
    highlights: [
      'Baby gains weight rapidly, building fat stores',
      'Braxton Hicks contractions may begin',
      'Group B strep test at weeks 36-37',
      'Baby moves into head-down position (usually by week 36)',
      'Full term is considered 39-40 weeks',
      'Pack your hospital bag by week 36',
    ],
  },
];

const faqItems = [
  { question: 'When is the first prenatal visit?', answer: 'The first prenatal visit is typically between weeks 8-12 of pregnancy.' },
  { question: 'When can I find out the sex of my baby?', answer: 'The anatomy scan at weeks 18-22 can determine sex. NIPT blood testing can reveal sex as early as 10 weeks.' },
  { question: 'When should I pack my hospital bag?', answer: 'By week 36. This gives you time before full term (39 weeks) in case baby arrives early.' },
  { question: 'What is the difference between Braxton Hicks and real contractions?', answer: 'Braxton Hicks contractions are irregular, usually painless, and stop with rest or position changes. Real contractions are regular, get progressively stronger and closer together, and do not stop with rest.' },
];

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Pregnancy Guide' },
];

export default function PregnancyPage() {
  return (
    <article className="max-w-3xl mx-auto px-5 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getContentPageSchema({
          name: 'Pregnancy Guide & Tools',
          description: 'Evidence-based pregnancy resources, calculators, and trimester guides from conception through delivery.',
          path: '/pregnancy',
          medicalGuidelines: [
            { name: 'ACOG Pregnancy Guidelines', url: 'https://www.acog.org/clinical/clinical-guidance' },
            { name: 'AAP Prenatal Guidance', url: 'https://www.aap.org/en/clinical-guidance/' },
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

      <Breadcrumbs items={[{ label: 'Pregnancy Guide' }]} />

      <h1 className="text-2xl font-bold text-foreground mb-2">
        Pregnancy Guide &amp; Tools
      </h1>
      <LastReviewed date="2026-07-01" />
      <MedicalReviewAttribution sources={['ACOG', 'AAP', 'CDC']} />
      <p className="text-sm text-muted mb-6">
        Evidence-based pregnancy resources to help you track your pregnancy,
        prepare for delivery, and understand what to expect at each stage.
      </p>

      <KeyTakeaways
        takeaways={[
          'A full-term pregnancy is 39-40 weeks, divided into three trimesters',
          'Morning sickness typically peaks at weeks 8-10 and improves in the second trimester',
          'The anatomy scan happens at weeks 18-22',
          'Call your provider immediately for vaginal bleeding, severe headache, or decreased fetal movement',
          'Pack your hospital bag by week 36',
        ]}
      />

      <div className="space-y-6">
        {/* Tools grid */}
        <section>
          <h2 className="text-base font-bold text-foreground mb-3">
            Pregnancy tools &amp; calculators
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {tools.map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="rounded-xl border border-[#E8E2D9] bg-white p-4 hover:border-primary transition-colors group"
              >
                <p className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">
                  {tool.label}
                </p>
                <p className="text-xs text-muted mt-1">{tool.description}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Pregnancy guides */}
        <section>
          <h2 className="text-base font-bold text-foreground mb-3">
            Pregnancy guides
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link href="/pregnancy/labor-signs" className="rounded-xl border border-[#E8E2D9] bg-white p-4 hover:border-primary transition-colors group">
              <p className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">Signs of Labor</p>
              <p className="text-xs text-muted mt-1">How to recognize true labor vs. false alarms</p>
            </Link>
            <Link href="/pregnancy/birth-plan" className="rounded-xl border border-[#E8E2D9] bg-white p-4 hover:border-primary transition-colors group">
              <p className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">Creating a Birth Plan</p>
              <p className="text-xs text-muted mt-1">Flexible framework for communicating your preferences</p>
            </Link>
            <Link href="/pregnancy/prenatal-tests" className="rounded-xl border border-[#E8E2D9] bg-white p-4 hover:border-primary transition-colors group">
              <p className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">Prenatal Tests Guide</p>
              <p className="text-xs text-muted mt-1">Understanding routine screenings and diagnostic tests</p>
            </Link>
            <Link href="/pregnancy/nutrition" className="rounded-xl border border-[#E8E2D9] bg-white p-4 hover:border-primary transition-colors group">
              <p className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">Pregnancy Nutrition</p>
              <p className="text-xs text-muted mt-1">What to eat, what to avoid, and supplements you need</p>
            </Link>
            <Link href="/pregnancy/exercise" className="rounded-xl border border-[#E8E2D9] bg-white p-4 hover:border-primary transition-colors group">
              <p className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">Safe Exercise</p>
              <p className="text-xs text-muted mt-1">Staying active safely throughout pregnancy</p>
            </Link>
            <Link href="/pregnancy/complications" className="rounded-xl border border-[#E8E2D9] bg-white p-4 hover:border-primary transition-colors group">
              <p className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">Warning Signs</p>
              <p className="text-xs text-muted mt-1">Pregnancy complications and when to seek help</p>
            </Link>
          </div>
        </section>

        {/* Trimester overviews */}
        {trimesters.map((tri) => (
          <Section key={tri.title} title={tri.title}>
            <p className="text-xs font-semibold text-primary mb-1">{tri.subtitle}</p>
            <ul className="list-disc list-inside space-y-1">
              {tri.highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
          </Section>
        ))}

        <Section title="When should I call my doctor during pregnancy?">
          <p>Contact your healthcare provider immediately if you experience:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Vaginal bleeding</li>
            <li>Severe abdominal pain or cramping</li>
            <li>Persistent severe headache with vision changes</li>
            <li>Sudden swelling of face, hands, or feet</li>
            <li>Fever above 100.4°F (38°C)</li>
            <li>Decreased fetal movement after 28 weeks</li>
            <li>Leaking fluid from the vagina</li>
            <li>Regular contractions before 37 weeks</li>
          </ul>
        </Section>

        <Section title="Preparing for baby">
          <p>Resources to help you get ready for your new arrival:</p>
          <div className="flex flex-wrap gap-2 mt-2">
            <Link href="/tools/baby-budget" className="inline-block rounded-full border border-[#E8E2D9] px-3 py-1 text-xs text-primary hover:bg-card-alt transition-colors">Baby Budget Planner</Link>
            <Link href="/resources/guides/choosing-a-pediatrician" className="inline-block rounded-full border border-[#E8E2D9] px-3 py-1 text-xs text-primary hover:bg-card-alt transition-colors">Choosing a Pediatrician</Link>
            <Link href="/tools/baby-proofing" className="inline-block rounded-full border border-[#E8E2D9] px-3 py-1 text-xs text-primary hover:bg-card-alt transition-colors">Baby-Proofing Checklist</Link>
            <Link href="/feeding" className="inline-block rounded-full border border-[#E8E2D9] px-3 py-1 text-xs text-primary hover:bg-card-alt transition-colors">Feeding Guide</Link>
            <Link href="/newborn" className="inline-block rounded-full border border-[#E8E2D9] px-3 py-1 text-xs text-primary hover:bg-card-alt transition-colors">Newborn Care Guide</Link>
          </div>
        </Section>

        <FAQSection items={faqItems} />
      </div>

      <BottomLine summary="Pregnancy is a journey with many normal variations. Every trimester brings new changes and new questions. Your OB-GYN or midwife is your best resource for personalized guidance throughout your pregnancy." />

      <div className="mt-6"><EditorialTrustBanner variant="compact" /></div>

      <div className="mt-10 pt-6 border-t border-border flex items-center justify-between">
        <Link href="/" className="text-sm text-primary font-semibold hover:underline">
          Back to Home
        </Link>
        <Link href="/postpartum" className="text-sm text-primary font-semibold hover:underline">
          Postpartum Recovery &rarr;
        </Link>
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
