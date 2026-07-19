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
  title: 'Paternal Postnatal Depression',
  description:
    'Paternal postnatal depression affects 1 in 10 new fathers. Learn the signs, understand why it happens, and find support. Dads deserve help too.',
  alternates: { canonical: '/mental-health/dads' },
  openGraph: {
    title: 'Paternal Postnatal Depression | Is My Baby Alright?',
    description: 'Depression in new fathers: signs, causes, and how to get help. You are not alone.',
  },
};

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Mental Health', url: '/mental-health' },
  { name: 'Paternal Depression' },
];

const faqItems = [
  { question: 'Can dads really get postpartum depression?', answer: 'Yes. Research consistently shows that approximately 1 in 10 new fathers experience depression in the first year after their child is born. Some studies suggest rates may be even higher — up to 25% when their partner also has PPD. This is a real, recognized condition with biological and psychosocial causes, not a lack of toughness or commitment.' },
  { question: 'What causes depression in new fathers?', answer: 'Paternal postnatal depression has multiple causes: sleep deprivation, hormonal changes (testosterone drops in new fathers), role transition stress, relationship changes, feeling displaced or unneeded, financial pressure, loss of freedom and identity, and concern for a struggling partner. It can also be triggered by the father\'s own childhood experiences.' },
  { question: 'How is paternal depression different from maternal PPD?', answer: 'While there is significant overlap, paternal depression more commonly presents as irritability, anger, withdrawal, risk-taking behavior, overworking, and substance use — rather than sadness or crying. Fathers are also less likely to be screened and less likely to seek help due to stigma around men\'s mental health.' },
  { question: 'When should a dad seek help?', answer: 'If symptoms persist for more than 2 weeks, interfere with daily functioning, affect your relationship with your baby or partner, or involve thoughts of self-harm — seek help. You can talk to your own doctor, call the PSI Warmline (1-800-944-4773), or find a therapist through the PSI provider directory. You deserve support just as much as the birthing parent.' },
  { question: 'How can I support my partner if I think he has paternal PPD?', answer: 'Approach with compassion rather than criticism. Express concern without judgment: \"I have noticed you seem different lately. How are you feeling?\" Normalize seeking help. Avoid phrases like \"man up\" or \"other dads manage fine.\" Encourage him to talk to his doctor. Remind him that getting help is an act of love for your family.' },
];

export default function DadsPage() {
  return (
    <article className="max-w-3xl mx-auto px-5 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getContentPageSchema({
          name: 'Paternal Postnatal Depression: Signs, Causes, and Support',
          description: 'Understanding paternal postnatal depression in new fathers, including signs, causes, and how to find support.',
          path: '/mental-health/dads',
          lastModified: '2026-07-01',
          medicalGuidelines: [
            { name: 'Postpartum Support International', url: 'https://www.postpartum.net/' },
            { name: 'NIMH Depression in Men', url: 'https://www.nimh.nih.gov/health/topics/depression' },
            { name: 'AAP Fathers and Perinatal Health', url: 'https://www.aap.org/en/clinical-guidance/' },
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

      <Breadcrumbs items={[{ label: 'Mental Health', href: '/mental-health' }, { label: 'Paternal Depression' }]} />

      <h1 className="text-2xl font-bold text-foreground mb-2">Paternal Postnatal Depression</h1>
      <p className="text-sm text-muted mb-1">Dads struggle too — and deserve support</p>
      <LastReviewed date="2026-07-01" />
      <MedicalReviewAttribution sources={['PSI', 'NIMH', 'AAP']} />

      <p className="text-sm text-muted my-6 leading-relaxed">
        If you are a dad or non-birthing partner who is struggling — feeling disconnected, overwhelmed, angry, or not like yourself since your baby arrived — you are not alone, and what you are experiencing is real. Paternal postnatal depression is a recognized condition that affects roughly 1 in 10 new fathers. It is not about being weak, uncommitted, or a bad dad. It is a medical reality that responds to treatment.
      </p>

      <KeyTakeaways
        takeaways={[
          'Approximately 1 in 10 new fathers experience postnatal depression — rates increase to 1 in 4 when their partner also has PPD.',
          'Paternal depression often looks different: irritability, anger, withdrawal, overworking, or substance use — rather than crying or visible sadness.',
          'Biological factors are real: testosterone levels drop in new fathers, and sleep deprivation impairs mood regulation regardless of gender.',
          'Men are significantly less likely to be screened for or to seek help for postnatal depression due to stigma.',
          'Treatment works: therapy, medication, support groups, and lifestyle changes are all effective for paternal PPD.',
        ]}
      />

      <div className="space-y-6">
        <Section title="What is paternal postnatal depression?">
          <p>
            Paternal postnatal depression (PPND) is a mood disorder that affects fathers and non-birthing partners in the perinatal period (from pregnancy through the first year postpartum). It involves persistent changes in mood, behavior, and functioning that go beyond normal adjustment to new parenthood.
          </p>
          <p>
            Despite affecting roughly 10% of new fathers, PPND remains significantly under-recognized and under-treated. Most research, screening tools, and resources have historically focused on maternal depression — leaving many fathers to struggle in silence.
          </p>
        </Section>

        <Section title="Signs of paternal depression">
          <p>Depression in men often presents differently than the stereotypical image of depression. Watch for:</p>
          <h3 className="font-semibold mt-3 mb-1">Common presentations</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Irritability, frustration, or anger (often the primary symptom)</li>
            <li>Withdrawal from family — spending more time at work, on the phone, or alone</li>
            <li>Loss of interest in the baby or difficulty bonding</li>
            <li>Increased alcohol use or risk-taking behaviors</li>
            <li>Overworking as an escape</li>
            <li>Physical symptoms: headaches, digestive issues, chronic pain</li>
            <li>Feeling inadequate or useless as a parent</li>
            <li>Conflict with partner — increased arguments or emotional withdrawal</li>
            <li>Fatigue or changes in sleep beyond what the baby causes</li>
            <li>Feeling trapped or wanting to escape</li>
          </ul>
          <h3 className="font-semibold mt-3 mb-1">Less obvious signs</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Going through the motions without feeling present</li>
            <li>Loss of motivation for things you used to enjoy</li>
            <li>Difficulty concentrating at work</li>
            <li>Feeling like you do not matter or that your family would be better off without you</li>
            <li>Cynicism or emotional numbness</li>
          </ul>
        </Section>

        <Section title="Why it happens">
          <p>PPND has real, identifiable causes — it is not about being weak:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Hormonal changes:</strong> Testosterone levels drop significantly in new fathers, while cortisol and estrogen can increase. These shifts affect mood regulation.</li>
            <li><strong>Sleep deprivation:</strong> Chronic sleep loss impairs emotional regulation regardless of gender.</li>
            <li><strong>Role transition:</strong> Becoming a father is a massive identity shift that many men are not prepared for or supported through.</li>
            <li><strong>Relationship changes:</strong> Feeling displaced, less important to your partner, or like a third wheel.</li>
            <li><strong>Financial pressure:</strong> The weight of increased financial responsibility and potential loss of income.</li>
            <li><strong>Partner&apos;s PPD:</strong> When your partner is struggling, it significantly increases your own risk.</li>
            <li><strong>Childhood experiences:</strong> Your own father&apos;s absence, abuse, or emotional unavailability can resurface when you become a parent.</li>
            <li><strong>Lack of preparation:</strong> Society often focuses prenatal education on the birthing parent, leaving partners feeling unprepared.</li>
          </ul>
        </Section>

        <Section title="Why dads do not seek help">
          <p>Multiple barriers prevent fathers from getting support:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Societal expectation to be &quot;strong&quot; and stoic</li>
            <li>Belief that their struggles are less valid than the birthing parent&apos;s</li>
            <li>Lack of screening — most postnatal appointments focus on the mother and baby</li>
            <li>Not recognizing irritability, withdrawal, or anger as depression</li>
            <li>Feeling like they should just &quot;push through it&quot;</li>
            <li>Fewer visible role models for men seeking mental health support</li>
          </ul>
          <p className="mt-2 font-semibold">
            Every single one of these barriers can be overcome. You deserve help just as much as anyone else.
          </p>
        </Section>

        <Section title="Getting help">
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Talk to your doctor:</strong> Your GP can screen you and discuss options including therapy and medication</li>
            <li><strong>PSI Warmline:</strong> <a href="tel:1-800-944-4773" className="text-primary font-semibold">1-800-944-4773</a> — serves all parents including dads</li>
            <li><strong>PSI online support groups for dads:</strong> Free, weekly groups specifically for fathers</li>
            <li><strong>Therapy:</strong> Look for a therapist experienced with perinatal mental health or men&apos;s mental health</li>
            <li><strong>Medication:</strong> SSRIs and other antidepressants are effective for paternal depression</li>
            <li><strong>Peer support:</strong> Connecting with other dads who have experienced this reduces isolation and shame</li>
          </ul>
        </Section>

        <Section title="For partners: how to help">
          <p>If you think your partner (the father/non-birthing parent) is struggling:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Approach with compassion, not criticism or frustration</li>
            <li>Express concern without judgment: &quot;I have noticed you seem different. How are you feeling?&quot;</li>
            <li>Avoid minimizing: do not say &quot;at least you did not have to go through the birth&quot;</li>
            <li>Normalize help-seeking: &quot;A lot of dads go through this. Getting help is smart and brave.&quot;</li>
            <li>Share this page or PSI resources</li>
            <li>Encourage a doctor&apos;s appointment — offer to make the call or go together</li>
            <li>Remember: you cannot fix this for them, but you can create space for them to get help</li>
          </ul>
        </Section>

        <div className="tier-concern p-4 text-sm rounded-xl">
          <h3 className="font-bold mb-2">If you are in crisis</h3>
          <ul className="flex flex-col gap-1.5">
            <li>PSI Warmline: <a href="tel:1-800-944-4773" className="font-semibold underline">1-800-944-4773</a> (call or text)</li>
            <li>Suicide &amp; Crisis Lifeline: <a href="tel:988" className="font-semibold underline">988</a></li>
            <li>Crisis Text Line: Text <strong>HOME</strong> to <strong>741741</strong></li>
            <li>Veterans Crisis Line: dial 988, press 1</li>
          </ul>
        </div>

        <FAQSection items={faqItems} />
      </div>

      <BottomLine
        summary="Paternal postnatal depression is real, common, and treatable. Struggling does not make you a bad dad — it makes you a human being going through one of life's biggest transitions without adequate support. You deserve help, and getting it is one of the best things you can do for yourself, your partner, and your baby."
        supportiveMessage="If you are reading this and recognizing yourself, that awareness is the first step. You are not weak. You are not failing. You are dealing with something real and difficult — and help is available."
      />

      <div className="mt-6">
        <EditorialTrustBanner variant="compact" />
      </div>

      <div className="mt-8 flex flex-wrap gap-2">
        <Link href="/mental-health/ppd" className="inline-block rounded-full border border-[#E8E2D9] px-3 py-1 text-xs text-primary hover:bg-card-alt transition-colors">Postpartum Depression</Link>
        <Link href="/mental-health/relationship" className="inline-block rounded-full border border-[#E8E2D9] px-3 py-1 text-xs text-primary hover:bg-card-alt transition-colors">Relationship Changes</Link>
        <Link href="/mental-health/resources" className="inline-block rounded-full border border-[#E8E2D9] px-3 py-1 text-xs text-primary hover:bg-card-alt transition-colors">Resources &amp; Hotlines</Link>
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
