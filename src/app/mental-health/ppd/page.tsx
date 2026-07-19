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
  title: 'Postpartum Depression (PPD)',
  description:
    'Learn about postpartum depression signs, risk factors, treatment options, and recovery. Evidence-based information from ACOG, PSI, and NIMH for new parents.',
  alternates: { canonical: '/mental-health/ppd' },
  openGraph: {
    title: 'Postpartum Depression (PPD) | Is My Baby Alright?',
    description: 'Signs, treatment, and recovery from postpartum depression. You are not alone.',
  },
};

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Mental Health', url: '/mental-health' },
  { name: 'Postpartum Depression' },
];

const faqItems = [
  { question: 'How common is postpartum depression?', answer: 'PPD affects approximately 1 in 7 new mothers (about 15%) according to ACOG. Some studies suggest rates may be even higher when accounting for undiagnosed cases. It also affects approximately 1 in 10 new fathers. PPD does not discriminate by age, income, race, or number of previous children.' },
  { question: 'When does postpartum depression start?', answer: 'PPD can begin anytime during pregnancy or within the first year after birth. Most commonly it develops within the first few weeks to months postpartum, but it can appear later. Some parents notice symptoms gradually worsening rather than appearing suddenly.' },
  { question: 'Can I take antidepressants while breastfeeding?', answer: 'Yes. Several antidepressants, including certain SSRIs like sertraline (Zoloft), have been extensively studied and are considered compatible with breastfeeding by ACOG and the AAP. The benefits of treating depression typically outweigh the minimal risks. Discuss options with your prescribing doctor.' },
  { question: 'Will postpartum depression go away on its own?', answer: 'Unlike baby blues, PPD typically does not resolve without treatment. Without intervention, symptoms can last months or even years and may worsen over time. The good news is that with appropriate treatment (therapy, medication, or both), most people see significant improvement within weeks to months.' },
  { question: 'Does having PPD mean I will hurt my baby?', answer: 'No. Having postpartum depression does not mean you will harm your baby. Many parents with PPD experience guilt and fear about not bonding or being a good parent, but these feelings are symptoms of the illness, not predictions of behavior. If you are having specific intrusive thoughts about harm, tell your provider — this is more common than people think and is very treatable.' },
  { question: 'Can PPD happen with a second or third baby?', answer: 'Yes. PPD can occur with any pregnancy, even if you did not experience it before. Having PPD with a previous pregnancy does increase risk for subsequent pregnancies, but it is not inevitable. Talk to your provider about a prevention plan if you have a history of PPD.' },
];

export default function PPDPage() {
  return (
    <article className="max-w-3xl mx-auto px-5 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getContentPageSchema({
          name: 'Postpartum Depression (PPD): Signs, Treatment, and Recovery',
          description: 'Comprehensive guide to postpartum depression including signs, risk factors, treatment options, and recovery timeline for new parents.',
          path: '/mental-health/ppd',
          lastModified: '2026-07-01',
          medicalGuidelines: [
            { name: 'ACOG Screening for Perinatal Depression', url: 'https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2018/11/screening-for-perinatal-depression' },
            { name: 'NIMH Perinatal Depression', url: 'https://www.nimh.nih.gov/health/publications/perinatal-depression' },
            { name: 'Postpartum Support International', url: 'https://www.postpartum.net/' },
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

      <Breadcrumbs items={[{ label: 'Mental Health', href: '/mental-health' }, { label: 'Postpartum Depression' }]} />

      <h1 className="text-2xl font-bold text-foreground mb-2">Postpartum Depression (PPD)</h1>
      <p className="text-sm text-muted mb-1">Signs, treatment, and recovery</p>
      <LastReviewed date="2026-07-01" />
      <MedicalReviewAttribution sources={['ACOG', 'NIMH', 'PSI']} />

      <p className="text-sm text-muted my-6 leading-relaxed">
        Postpartum depression is a serious but treatable medical condition that affects approximately 1 in 7 new mothers and 1 in 10 new fathers. It is not a character flaw, not a sign of weakness, and not something you caused. If you are reading this page wondering whether what you are feeling is normal, that awareness alone shows you are paying attention to your own wellbeing.
      </p>

      <KeyTakeaways
        takeaways={[
          'PPD is a medical condition, not a personal failing — it is caused by a combination of hormonal changes, genetics, sleep deprivation, and life stressors.',
          'PPD is different from baby blues: baby blues resolve within 2 weeks, while PPD persists and often worsens without treatment.',
          'Effective treatments include therapy (especially CBT and interpersonal therapy), medication (SSRIs safe during breastfeeding), and support groups.',
          'Most parents who receive treatment for PPD see significant improvement within 3-6 months.',
          'PPD can affect anyone — birthing and non-birthing parents, first-time and experienced parents alike.',
        ]}
      />

      <div className="space-y-6">
        <Section title="What is postpartum depression?">
          <p>
            Postpartum depression (PPD) is a mood disorder that can affect parents after the birth of a child. It involves persistent feelings of sadness, anxiety, emptiness, or hopelessness that interfere with daily functioning and the ability to care for yourself and your baby.
          </p>
          <p>
            According to ACOG, PPD is one of the most common complications of pregnancy and the postpartum period. It is a clinical condition with biological underpinnings — not a reflection of how much you love your baby or how capable you are as a parent.
          </p>
        </Section>

        <Section title="Signs and symptoms of PPD">
          <p>PPD symptoms can vary in intensity and may develop gradually. Common signs include:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Persistent sadness, emptiness, or hopelessness lasting more than 2 weeks</li>
            <li>Loss of interest or pleasure in activities you used to enjoy</li>
            <li>Difficulty bonding with your baby or feeling emotionally numb</li>
            <li>Intense irritability, anger, or rage disproportionate to the situation</li>
            <li>Changes in appetite (eating much more or much less than usual)</li>
            <li>Sleep disturbances beyond what is explained by your baby&apos;s schedule</li>
            <li>Overwhelming fatigue or loss of energy, even after rest</li>
            <li>Feelings of worthlessness, shame, or excessive guilt</li>
            <li>Difficulty concentrating, making decisions, or thinking clearly</li>
            <li>Withdrawing from partner, family, or friends</li>
            <li>Scary or intrusive thoughts about harm to yourself or your baby</li>
            <li>Physical symptoms like headaches, stomach problems, or muscle pain</li>
          </ul>
          <p className="mt-3 font-semibold">
            You do not need to have all of these symptoms for your experience to be real and deserving of support.
          </p>
        </Section>

        <Section title="PPD vs. baby blues">
          <p>It is important to distinguish between baby blues and PPD:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Baby blues</strong> affect up to 80% of new mothers, involve mood swings and tearfulness, and resolve within about 2 weeks after birth.</li>
            <li><strong>PPD</strong> is more intense, lasts longer than 2 weeks, and typically requires treatment to resolve.</li>
          </ul>
          <p className="mt-2">
            If you are past the 2-week mark and still struggling, or if your symptoms are worsening rather than improving, talk to your healthcare provider. There is no minimum severity threshold for deserving help.
          </p>
        </Section>

        <Section title="Risk factors">
          <p>Anyone can develop PPD, but certain factors may increase risk:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Personal or family history of depression or anxiety</li>
            <li>Previous episode of PPD</li>
            <li>History of premenstrual dysphoric disorder (PMDD)</li>
            <li>Complications during pregnancy or delivery</li>
            <li>Lack of social support</li>
            <li>Relationship difficulties</li>
            <li>Financial stress</li>
            <li>Sleep deprivation</li>
            <li>Having a baby in the NICU</li>
            <li>History of infertility or pregnancy loss</li>
            <li>Unplanned or unwanted pregnancy</li>
            <li>Stressful life events during pregnancy or postpartum</li>
          </ul>
          <p className="mt-2">
            Having risk factors does not mean you will develop PPD, and many people develop PPD without identifiable risk factors. It is not your fault.
          </p>
        </Section>

        <Section title="Treatment options">
          <p>PPD is highly treatable. Treatment approaches include:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Psychotherapy:</strong> Cognitive behavioral therapy (CBT) and interpersonal therapy (IPT) are both evidence-based treatments for PPD. Therapy helps you develop coping strategies and process difficult emotions.</li>
            <li><strong>Medication:</strong> SSRIs such as sertraline (Zoloft) are commonly prescribed and have been studied extensively in breastfeeding parents. Other medications may also be appropriate depending on your situation.</li>
            <li><strong>Brexanolone (Zulresso):</strong> An FDA-approved IV infusion specifically for PPD, available for severe cases in clinical settings.</li>
            <li><strong>Zuranolone (Zurzuvae):</strong> An FDA-approved oral medication specifically for PPD, taken for 14 days.</li>
            <li><strong>Support groups:</strong> Peer support through organizations like Postpartum Support International can reduce isolation and provide practical coping strategies.</li>
            <li><strong>Lifestyle supports:</strong> Regular physical activity, adequate nutrition, sleep when possible, and reducing isolation all support recovery alongside clinical treatment.</li>
          </ul>
          <p className="mt-2">
            Many parents benefit from a combination of therapy and medication. Your treatment plan should be individualized — there is no single right approach.
          </p>
        </Section>

        <Section title="Recovery timeline">
          <p>Recovery from PPD is real and achievable, though it is rarely linear:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Most people begin to notice improvement within 2-4 weeks of starting treatment</li>
            <li>Significant improvement is typically seen within 3-6 months of consistent treatment</li>
            <li>Full recovery is common, though some people benefit from ongoing maintenance treatment</li>
            <li>Recovery may involve setbacks — bad days do not mean treatment is failing</li>
          </ul>
          <p className="mt-2">
            Healing takes time. Be patient with yourself. Every step forward counts, even if progress feels slow.
          </p>
        </Section>

        <Section title="How to get help">
          <ul className="list-disc list-inside space-y-1">
            <li>Talk to your OB/GYN, midwife, or primary care doctor</li>
            <li>Call the PSI Warmline: <a href="tel:1-800-944-4773" className="text-primary font-semibold">1-800-944-4773</a> (call or text)</li>
            <li>Ask your pediatrician — they screen for parental PPD too</li>
            <li>Contact your insurance for a list of covered therapists</li>
            <li>PSI offers free online support groups: <a href="https://www.postpartum.net/get-help/psi-online-support-meetings/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">postpartum.net</a></li>
          </ul>
        </Section>

        <div className="tier-concern p-4 text-sm rounded-xl">
          <h3 className="font-bold mb-2">If you are in crisis</h3>
          <ul className="flex flex-col gap-1.5">
            <li>PSI Warmline: <a href="tel:1-800-944-4773" className="font-semibold underline">1-800-944-4773</a> (call or text)</li>
            <li>Crisis Text Line: Text <strong>HOME</strong> to <strong>741741</strong></li>
            <li>Suicide &amp; Crisis Lifeline: <a href="tel:988" className="font-semibold underline">988</a></li>
            <li>If you or your baby are in immediate danger, call <strong>911</strong></li>
          </ul>
        </div>

        <FAQSection items={faqItems} />
      </div>

      <BottomLine
        summary="Postpartum depression is a medical condition, not a personal failing. It is common, it is treatable, and recovery is real. Whether you are weeks or months into your experience, it is never too late to reach out for help. You deserve to feel like yourself again."
        supportiveMessage="What you are going through is not your fault. Asking for help is not a sign of weakness — it is an act of courage and love for both yourself and your baby."
      />

      <div className="mt-6">
        <EditorialTrustBanner variant="compact" />
      </div>

      <div className="mt-8 flex flex-wrap gap-2">
        <Link href="/mental-health/anxiety" className="inline-block rounded-full border border-[#E8E2D9] px-3 py-1 text-xs text-primary hover:bg-card-alt transition-colors">Postpartum Anxiety</Link>
        <Link href="/mental-health/when-to-get-help" className="inline-block rounded-full border border-[#E8E2D9] px-3 py-1 text-xs text-primary hover:bg-card-alt transition-colors">When to Get Help</Link>
        <Link href="/mental-health/resources" className="inline-block rounded-full border border-[#E8E2D9] px-3 py-1 text-xs text-primary hover:bg-card-alt transition-colors">Resources &amp; Hotlines</Link>
        <Link href="/mental-health/dads" className="inline-block rounded-full border border-[#E8E2D9] px-3 py-1 text-xs text-primary hover:bg-card-alt transition-colors">Paternal PPD</Link>
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
