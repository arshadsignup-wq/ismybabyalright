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
  title: 'Safe Exercise During Pregnancy',
  description:
    'ACOG-recommended guidelines for safe exercise during pregnancy. Which activities are safe, what to avoid, and how to stay active through each trimester.',
  alternates: { canonical: '/pregnancy/exercise' },
  openGraph: {
    title: 'Safe Exercise During Pregnancy | Is My Baby Alright?',
    description: 'Staying active safely throughout pregnancy based on ACOG guidelines.',
  },
};

const faqItems = [
  {
    question: 'How much exercise is safe during pregnancy?',
    answer: 'ACOG recommends at least 150 minutes of moderate-intensity aerobic activity per week (about 30 minutes on most days). If you were active before pregnancy, you can generally continue your routine with modifications. If you are new to exercise, start slowly and build up gradually.',
  },
  {
    question: 'Can exercise cause miscarriage?',
    answer: 'No. Studies show that moderate exercise does not increase miscarriage risk in normal pregnancies. ACOG encourages physical activity throughout pregnancy for both maternal and fetal health. However, very strenuous exercise or activities with high fall/impact risk should be avoided.',
  },
  {
    question: 'When should I stop exercising during pregnancy?',
    answer: 'Stop and call your provider if you experience vaginal bleeding, fluid leaking, dizziness, chest pain, calf pain or swelling, regular contractions, or decreased fetal movement. Also stop if you feel short of breath before starting or have a headache.',
  },
  {
    question: 'Can I do ab exercises while pregnant?',
    answer: 'Modified core exercises are beneficial for supporting your changing body. Avoid lying flat on your back after the first trimester (supine position can compress the vena cava). Side planks, bird-dogs, and pelvic tilts are safer alternatives to traditional crunches.',
  },
  {
    question: 'Is it safe to run during pregnancy?',
    answer: 'If you were a runner before pregnancy, you can generally continue running with modifications. Reduce intensity as pregnancy progresses. Invest in supportive shoes and a belly band. Listen to your body — walking is equally beneficial if running becomes uncomfortable.',
  },
];

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Pregnancy', url: '/pregnancy' },
  { name: 'Exercise' },
];

export default function PregnancyExercisePage() {
  return (
    <article className="max-w-3xl mx-auto px-5 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getContentPageSchema({
          name: 'Safe Exercise During Pregnancy',
          description: 'ACOG-recommended guidelines for safe exercise during pregnancy including recommended activities and warning signs.',
          path: '/pregnancy/exercise',
          lastModified: '2026-07-01',
          medicalGuidelines: [
            { name: 'ACOG Committee Opinion on Physical Activity and Exercise During Pregnancy', url: 'https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2020/04/physical-activity-and-exercise-during-pregnancy-and-the-postpartum-period' },
            { name: 'WHO Physical Activity Guidelines', url: 'https://www.who.int/publications/i/item/9789240015128' },
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
        { label: 'Pregnancy', href: '/pregnancy' },
        { label: 'Exercise' },
      ]} />

      <h1 className="text-2xl font-bold text-foreground mb-2">Safe Exercise During Pregnancy</h1>
      <LastReviewed date="2026-07-01" />
      <MedicalReviewAttribution sources={['ACOG', 'WHO']} />
      <p className="text-sm text-muted mb-6">
        Exercise during pregnancy is not only safe for most people — it is recommended. ACOG encourages regular physical activity throughout pregnancy for both maternal and fetal health benefits.
      </p>

      <KeyTakeaways
        takeaways={[
          'ACOG recommends 150 minutes of moderate aerobic activity per week during pregnancy',
          'Exercise reduces risk of gestational diabetes, preeclampsia, and cesarean delivery',
          'Safe activities include walking, swimming, stationary cycling, prenatal yoga, and low-impact aerobics',
          'Avoid contact sports, activities with fall risk, hot yoga/hot tubs, and lying flat on your back after the first trimester',
          'Stop exercising and call your provider for vaginal bleeding, dizziness, chest pain, or contractions',
          'Start slowly if you were not active before pregnancy — even 10 minutes of walking is beneficial',
        ]}
      />

      <div className="space-y-6">
        <Section title="Benefits of exercise during pregnancy">
          <p>Research shows regular exercise during pregnancy can:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Reduce risk of gestational diabetes by up to 50%</li>
            <li>Lower risk of preeclampsia</li>
            <li>Reduce risk of cesarean delivery</li>
            <li>Improve mood and reduce anxiety and depression</li>
            <li>Reduce back pain and constipation</li>
            <li>Promote healthy weight gain</li>
            <li>Improve sleep quality</li>
            <li>Shorten labor duration and improve recovery</li>
            <li>Reduce risk of macrosomia (excessively large baby)</li>
          </ul>
        </Section>

        <Section title="Safe exercises during pregnancy">
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Walking:</strong> Accessible, easy to adjust intensity, safe throughout pregnancy</li>
            <li><strong>Swimming/water aerobics:</strong> Low-impact, reduces joint stress, helps with swelling</li>
            <li><strong>Stationary cycling:</strong> Low fall risk, easy to control intensity</li>
            <li><strong>Prenatal yoga:</strong> Improves flexibility, strength, and breathing. Avoid hot yoga.</li>
            <li><strong>Strength training:</strong> Lighter weights, higher reps. Avoid heavy maximal lifts and lying flat on back.</li>
            <li><strong>Pilates (modified):</strong> Strengthens core and pelvic floor. Use prenatal modifications.</li>
            <li><strong>Low-impact aerobics:</strong> Keep one foot on the ground to reduce joint stress</li>
            <li><strong>Elliptical/stair climber:</strong> Low-impact cardio with adjustable intensity</li>
          </ul>
        </Section>

        <Section title="Activities to avoid">
          <div className="rounded-lg border-2 border-orange-200 bg-orange-50 p-4">
            <ul className="list-disc list-inside space-y-1">
              <li className="text-orange-700">Contact sports (soccer, basketball, boxing, martial arts)</li>
              <li className="text-orange-700">Activities with fall risk (downhill skiing, horseback riding, gymnastics)</li>
              <li className="text-orange-700">Scuba diving (pressure changes can harm baby)</li>
              <li className="text-orange-700">Hot yoga or exercising in extreme heat</li>
              <li className="text-orange-700">Lying flat on your back after the first trimester</li>
              <li className="text-orange-700">Activities at high altitude (above 6,000 feet) unless acclimated</li>
              <li className="text-orange-700">Exercises with high risk of abdominal trauma</li>
              <li className="text-orange-700">Heavy lifting with breath-holding (Valsalva maneuver)</li>
            </ul>
          </div>
        </Section>

        <Section title="Exercise by trimester">
          <ul className="list-disc list-inside space-y-2">
            <li><strong>First trimester:</strong> Continue your regular routine with any modifications your provider suggests. Fatigue and nausea may naturally limit intensity. Stay hydrated.</li>
            <li><strong>Second trimester:</strong> Often the most comfortable time to exercise. Modify core exercises, avoid lying flat on back. Watch for balance changes as your center of gravity shifts.</li>
            <li><strong>Third trimester:</strong> Reduce impact and intensity as needed. Swimming is especially comfortable. Pelvic floor exercises are important. Walking remains beneficial up to delivery.</li>
          </ul>
        </Section>

        <Section title="Warning signs to stop exercising">
          <p>Stop immediately and contact your provider if you experience:</p>
          <div className="rounded-lg border-2 border-orange-200 bg-orange-50 p-4 mt-2">
            <ul className="list-disc list-inside space-y-1">
              <li className="text-orange-700">Vaginal bleeding or fluid leaking</li>
              <li className="text-orange-700">Regular or painful contractions</li>
              <li className="text-orange-700">Dizziness or feeling faint</li>
              <li className="text-orange-700">Chest pain or shortness of breath before exertion</li>
              <li className="text-orange-700">Headache that does not resolve</li>
              <li className="text-orange-700">Calf pain or swelling (possible blood clot)</li>
              <li className="text-orange-700">Decreased fetal movement</li>
              <li className="text-orange-700">Muscle weakness affecting balance</li>
            </ul>
          </div>
        </Section>

        <Section title="When exercise may not be recommended">
          <p>Talk to your provider before exercising if you have:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Cervical insufficiency or cerclage</li>
            <li>Placenta previa after 26 weeks</li>
            <li>Preterm labor or ruptured membranes</li>
            <li>Preeclampsia or pregnancy-induced hypertension</li>
            <li>Severe anemia</li>
            <li>Restrictive lung or heart disease</li>
            <li>Multiple pregnancy with risk factors for preterm labor</li>
          </ul>
        </Section>

        <FAQSection items={faqItems} />
      </div>

      <BottomLine
        summary="Exercise during pregnancy is safe and beneficial for most people. The best exercise is one you enjoy and will do consistently. Even short walks count. Listen to your body, stay hydrated, and talk to your provider about what is right for your pregnancy."
        supportiveMessage="There is no perfect exercise routine. Some days you will feel great; other days, a gentle walk is enough. Any movement is better than none, and rest when you need it is just as important."
      />

      <div className="mt-6"><EditorialTrustBanner variant="compact" /></div>

      <div className="mt-10 pt-6 border-t border-border flex items-center justify-between">
        <Link href="/pregnancy/nutrition" className="text-sm text-primary font-semibold hover:underline">&larr; Nutrition</Link>
        <Link href="/pregnancy/complications" className="text-sm text-primary font-semibold hover:underline">Complications &rarr;</Link>
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
