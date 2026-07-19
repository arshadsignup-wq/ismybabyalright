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
  title: 'Mental Health Resources & Hotlines',
  description:
    'Mental health resources, crisis hotlines, support organizations, and therapy directories for new parents. Free and low-cost options available.',
  alternates: { canonical: '/mental-health/resources' },
  openGraph: {
    title: 'Mental Health Resources & Hotlines | Is My Baby Alright?',
    description: 'Crisis hotlines, support groups, and therapy resources for new parents.',
  },
};

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Mental Health', url: '/mental-health' },
  { name: 'Resources & Hotlines' },
];

const faqItems = [
  { question: 'Are these hotlines really confidential?', answer: 'Yes. Crisis hotlines and warmlines are confidential. Counselors will not contact your family, employer, or anyone else without your permission. The only exception is if there is an immediate, imminent risk of death — and even then, the goal is always to connect you with help, not to punish you.' },
  { question: 'What is the difference between a warmline and a hotline?', answer: 'A hotline is for crisis situations — immediate danger to yourself or others. A warmline (like the PSI Warmline) is for support before you reach crisis level. You can call a warmline when you are struggling, need someone to talk to, or want help finding resources. You do not need to be in crisis to use a warmline.' },
  { question: 'Can I text instead of calling?', answer: 'Yes. Many services offer text-based support: PSI Warmline (text 1-800-944-4773), Crisis Text Line (text HOME to 741741), and the 988 Lifeline (text 988). Text-based support can be easier if you are anxious about phone calls, near your baby, or in a situation where calling is not possible.' },
  { question: 'What if I call and I do not know what to say?', answer: 'That is completely okay. You can simply say: \"I am a new parent and I am not doing well\" or \"I need help.\" Counselors and volunteers are trained to guide the conversation. You do not need to have your thoughts organized or know exactly what is wrong. They are there to help you figure it out.' },
  { question: 'Are there resources specifically for dads and non-birthing partners?', answer: 'Yes. Postpartum Support International has specific resources and support groups for fathers and non-birthing partners. The PSI Warmline serves all parents. Additionally, organizations like Postpartum Dads and the Movember Foundation provide father-specific mental health resources.' },
];

export default function ResourcesPage() {
  return (
    <article className="max-w-3xl mx-auto px-5 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getContentPageSchema({
          name: 'Mental Health Resources & Hotlines for Parents',
          description: 'Comprehensive list of mental health resources, crisis hotlines, support organizations, and therapy directories for new parents.',
          path: '/mental-health/resources',
          lastModified: '2026-07-01',
          medicalGuidelines: [
            { name: 'Postpartum Support International', url: 'https://www.postpartum.net/' },
            { name: 'NIMH Find Help', url: 'https://www.nimh.nih.gov/health/find-help' },
            { name: 'SAMHSA National Helpline', url: 'https://www.samhsa.gov/find-help/national-helpline' },
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

      <Breadcrumbs items={[{ label: 'Mental Health', href: '/mental-health' }, { label: 'Resources & Hotlines' }]} />

      <h1 className="text-2xl font-bold text-foreground mb-2">Mental Health Resources &amp; Hotlines</h1>
      <p className="text-sm text-muted mb-1">Help is available — you do not have to do this alone</p>
      <LastReviewed date="2026-07-01" />
      <MedicalReviewAttribution sources={['PSI', 'NIMH', 'SAMHSA']} />

      <p className="text-sm text-muted my-6 leading-relaxed">
        Whether you need someone to talk to right now, want to find a therapist, or are looking for peer support from other parents who understand — resources exist. Many are free, confidential, and available 24/7. You deserve support at every stage of struggle, not just in crisis.
      </p>

      <KeyTakeaways
        takeaways={[
          'PSI Warmline (1-800-944-4773) is available for all parents — you do not need to be in crisis to call.',
          'Text-based support is available if calling feels too hard: text HOME to 741741 or text 988.',
          'Free online support groups for perinatal mood disorders are available through PSI.',
          'You do not need insurance to access many of these resources — several are completely free.',
          'Resources exist specifically for dads, LGBTQ+ parents, parents of color, and military families.',
        ]}
      />

      <div className="space-y-6">
        <div className="tier-concern p-5 text-sm rounded-xl">
          <h2 className="text-base font-bold mb-3">Crisis resources (24/7)</h2>
          <p className="mb-3">If you are in immediate danger or having thoughts of harming yourself or your baby:</p>
          <ul className="flex flex-col gap-2">
            <li className="flex flex-col gap-0.5">
              <span className="font-bold">Suicide &amp; Crisis Lifeline</span>
              <span>Call or text <a href="tel:988" className="font-semibold underline">988</a></span>
            </li>
            <li className="flex flex-col gap-0.5">
              <span className="font-bold">PSI HelpLine</span>
              <span>Call or text <a href="tel:1-800-944-4773" className="font-semibold underline">1-800-944-4773</a> (English &amp; Spanish)</span>
            </li>
            <li className="flex flex-col gap-0.5">
              <span className="font-bold">Crisis Text Line</span>
              <span>Text <strong>HOME</strong> to <strong>741741</strong></span>
            </li>
            <li className="flex flex-col gap-0.5">
              <span className="font-bold">Emergency</span>
              <span>Call <strong>911</strong> if you or your baby are in immediate danger</span>
            </li>
          </ul>
        </div>

        <Section title="Support organizations">
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Postpartum Support International (PSI)</strong><br />
              <span className="text-xs">Warmline, online support groups, provider directory, education</span><br />
              <a href="https://www.postpartum.net/" className="text-primary hover:underline text-xs" target="_blank" rel="noopener noreferrer">postpartum.net</a>
            </li>
            <li>
              <strong>National Alliance on Mental Illness (NAMI)</strong><br />
              <span className="text-xs">Support groups, education, helpline: 1-800-950-NAMI</span><br />
              <a href="https://www.nami.org/" className="text-primary hover:underline text-xs" target="_blank" rel="noopener noreferrer">nami.org</a>
            </li>
            <li>
              <strong>SAMHSA National Helpline</strong><br />
              <span className="text-xs">Free referrals, 24/7: 1-800-662-4357</span><br />
              <a href="https://www.samhsa.gov/find-help/national-helpline" className="text-primary hover:underline text-xs" target="_blank" rel="noopener noreferrer">samhsa.gov</a>
            </li>
            <li>
              <strong>2020 Mom</strong><br />
              <span className="text-xs">Advocacy and resources for maternal mental health</span><br />
              <a href="https://www.2020mom.org/" className="text-primary hover:underline text-xs" target="_blank" rel="noopener noreferrer">2020mom.org</a>
            </li>
            <li>
              <strong>Motherhood Center</strong><br />
              <span className="text-xs">Day programs and intensive outpatient for perinatal mood disorders</span><br />
              <a href="https://www.themotherhoodcenter.com/" className="text-primary hover:underline text-xs" target="_blank" rel="noopener noreferrer">themotherhoodcenter.com</a>
            </li>
          </ul>
        </Section>

        <Section title="Finding a therapist">
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>PSI Provider Directory</strong><br />
              <span className="text-xs">Perinatal mental health specialists</span><br />
              <a href="https://www.postpartum.net/get-help/provider-directory/" className="text-primary hover:underline text-xs" target="_blank" rel="noopener noreferrer">PSI Provider Directory</a>
            </li>
            <li>
              <strong>Psychology Today Directory</strong><br />
              <span className="text-xs">Filter by specialty, insurance, and location</span><br />
              <a href="https://www.psychologytoday.com/us/therapists" className="text-primary hover:underline text-xs" target="_blank" rel="noopener noreferrer">psychologytoday.com</a>
            </li>
            <li>
              <strong>Open Path Collective</strong><br />
              <span className="text-xs">Affordable therapy: $30-$80/session for those who qualify</span><br />
              <a href="https://openpathcollective.org/" className="text-primary hover:underline text-xs" target="_blank" rel="noopener noreferrer">openpathcollective.org</a>
            </li>
            <li>
              <strong>Inclusive Therapists</strong><br />
              <span className="text-xs">Directory of therapists committed to anti-oppressive practice</span><br />
              <a href="https://www.inclusivetherapists.com/" className="text-primary hover:underline text-xs" target="_blank" rel="noopener noreferrer">inclusivetherapists.com</a>
            </li>
          </ul>
        </Section>

        <Section title="Free and low-cost options">
          <ul className="list-disc list-inside space-y-1">
            <li><strong>PSI Online Support Groups:</strong> Free, weekly, led by trained facilitators — options for moms, dads, loss, anxiety, and more</li>
            <li><strong>Community Mental Health Centers:</strong> Offer sliding-scale therapy based on income</li>
            <li><strong>University Training Clinics:</strong> Advanced graduate students supervised by licensed professionals — often low-cost</li>
            <li><strong>Federally Qualified Health Centers:</strong> Offer mental health services on a sliding scale</li>
            <li><strong>Your employer&apos;s EAP:</strong> Many Employee Assistance Programs offer 3-8 free therapy sessions</li>
            <li><strong>Telehealth platforms:</strong> Some offer reduced rates for postpartum parents</li>
          </ul>
        </Section>

        <Section title="Specialized resources">
          <h3 className="font-semibold mt-1 mb-1">For dads and non-birthing partners</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>PSI resources for dads and partners</li>
            <li>Postpartum Dads (postpartumdads.org)</li>
            <li>Boot Camp for New Dads (bootcampfornewdads.org)</li>
          </ul>
          <h3 className="font-semibold mt-3 mb-1">For pregnancy and infant loss</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Share Pregnancy &amp; Infant Loss Support (nationalshare.org)</li>
            <li>The Compassionate Friends (compassionatefriends.org)</li>
            <li>Return to Zero (rtzhope.org)</li>
          </ul>
          <h3 className="font-semibold mt-3 mb-1">For LGBTQ+ parents</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Family Equality (familyequality.org)</li>
            <li>LGBTQ+ Parenting Network</li>
            <li>Trevor Project (for LGBTQ+ youth/young parents): 1-866-488-7386</li>
          </ul>
          <h3 className="font-semibold mt-3 mb-1">For military families</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Military OneSource: 1-800-342-9647 (free counseling for service members and families)</li>
            <li>Veterans Crisis Line: dial 988, press 1</li>
          </ul>
        </Section>

        <Section title="Books and apps">
          <h3 className="font-semibold mt-1 mb-1">Recommended reading</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>&quot;Good Moms Have Scary Thoughts&quot; by Karen Kleiman</li>
            <li>&quot;This Isn&apos;t What I Expected&quot; by Karen Kleiman &amp; Valerie Raskin</li>
            <li>&quot;The Postpartum Husband&quot; by Karen Kleiman</li>
            <li>&quot;Daring to Rest&quot; by Karen Brody</li>
          </ul>
          <h3 className="font-semibold mt-3 mb-1">Mental health apps</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Calm or Headspace (meditation and sleep)</li>
            <li>Mom&apos;s Mental Health Matters (PSI app)</li>
            <li>Woebot (CBT-based chatbot)</li>
          </ul>
        </Section>

        <FAQSection items={faqItems} />
      </div>

      <BottomLine
        summary="Help exists in many forms — crisis lines, warmlines, therapy, support groups, free resources, and specialized services for every type of parent. You do not need to be in crisis to reach out, and you do not need to figure out which resource is right before you call. Just taking the first step is enough."
        supportiveMessage="Reaching out is not a sign of weakness — it is the strongest thing you can do for yourself and your family. Every single resource on this page exists because other parents have struggled too. You are not alone."
      />

      <div className="mt-6">
        <EditorialTrustBanner variant="compact" />
      </div>

      <div className="mt-8 flex flex-wrap gap-2">
        <Link href="/mental-health/when-to-get-help" className="inline-block rounded-full border border-[#E8E2D9] px-3 py-1 text-xs text-primary hover:bg-card-alt transition-colors">When to Get Help</Link>
        <Link href="/mental-health/ppd" className="inline-block rounded-full border border-[#E8E2D9] px-3 py-1 text-xs text-primary hover:bg-card-alt transition-colors">Postpartum Depression</Link>
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
