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
  title: 'When to Seek Professional Help',
  description:
    'Signs that it is time to seek professional mental health support as a parent. How to find a therapist, what to expect, and how to take the first step.',
  alternates: { canonical: '/mental-health/when-to-get-help' },
  openGraph: {
    title: 'When to Seek Professional Help | Is My Baby Alright?',
    description: 'How to know when to seek professional mental health support and how to find help.',
  },
};

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Mental Health', url: '/mental-health' },
  { name: 'When to Get Help' },
];

const faqItems = [
  { question: 'How do I know if I need professional help or if this is just normal parenting stress?', answer: 'Normal parenting stress is manageable — you feel tired but functional, overwhelmed at times but able to cope. Seek help if: symptoms persist for more than 2 weeks, you cannot function in daily life, you are unable to enjoy anything, you are having thoughts of self-harm or harming your baby, your relationships are severely impacted, or you feel like you are drowning with no relief. When in doubt, reach out — there is no minimum threshold.' },
  { question: 'What type of therapist should I look for?', answer: 'Look for a therapist who specializes in perinatal mental health, postpartum mood disorders, or maternal mental health. Credentials to look for include: licensed clinical social worker (LCSW), licensed professional counselor (LPC), psychologist (PhD/PsyD), or psychiatrist (MD) with perinatal specialization. PSI maintains a provider directory at postpartum.net.' },
  { question: 'Can I get help if I cannot afford therapy?', answer: 'Yes. Options include: community mental health centers (sliding scale fees), Open Path Collective (affordable therapy sessions), PSI free online support groups, crisis text line (free, 24/7), insurance-covered telehealth, and some therapists offer reduced rates for postpartum parents. Your pediatrician or OB may also know of local free resources.' },
  { question: 'What should I expect at my first therapy appointment?', answer: 'Your first session is typically an intake assessment. The therapist will ask about your symptoms, history, family situation, and goals. You will not be expected to solve everything in one session. It is okay to cry, to not know what to say, or to feel nervous. A good therapist will create a safe, non-judgmental space. If you do not click with the first therapist, it is okay to try someone else.' },
  { question: 'Should I tell my partner I am seeking help?', answer: 'Ideally, yes — having your partner aware and supportive of your treatment helps. However, if you feel unsafe disclosing this or if your partner is dismissive of mental health, you can absolutely seek help without telling them first. Your mental health is your right, and you do not need permission to get support.' },
];

export default function WhenToGetHelpPage() {
  return (
    <article className="max-w-3xl mx-auto px-5 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getContentPageSchema({
          name: 'When to Seek Professional Help for Your Mental Health',
          description: 'Guide to recognizing when parenting stress requires professional support, how to find a therapist, and what to expect.',
          path: '/mental-health/when-to-get-help',
          lastModified: '2026-07-01',
          medicalGuidelines: [
            { name: 'ACOG Perinatal Mental Health', url: 'https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2018/11/screening-for-perinatal-depression' },
            { name: 'Postpartum Support International', url: 'https://www.postpartum.net/' },
            { name: 'NIMH Mental Health Services', url: 'https://www.nimh.nih.gov/health/find-help' },
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

      <Breadcrumbs items={[{ label: 'Mental Health', href: '/mental-health' }, { label: 'When to Get Help' }]} />

      <h1 className="text-2xl font-bold text-foreground mb-2">When to Seek Professional Help</h1>
      <p className="text-sm text-muted mb-1">You do not need to reach a breaking point to deserve support</p>
      <LastReviewed date="2026-07-01" />
      <MedicalReviewAttribution sources={['ACOG', 'PSI', 'NIMH']} />

      <p className="text-sm text-muted my-6 leading-relaxed">
        If you are wondering whether you need help, that question itself is worth paying attention to. You do not need to be in crisis to benefit from professional support. You do not need to earn the right to therapy by suffering enough. If something feels off — if parenting feels harder than it should, if you do not feel like yourself, if you are just surviving rather than living — that is enough reason to reach out.
      </p>

      <KeyTakeaways
        takeaways={[
          'You do not need to reach a breaking point to seek help. Feeling like something is off is reason enough.',
          'Warning signs include: persistent symptoms beyond 2 weeks, inability to function, thoughts of self-harm, complete loss of joy, and feeling disconnected from your baby.',
          'Multiple paths exist: therapy, medication, support groups, crisis lines, and your existing healthcare providers.',
          'PSI maintains a free provider directory of perinatal mental health specialists at postpartum.net.',
          'Seeking help is an act of strength that benefits both you and your child.',
        ]}
      />

      <div className="space-y-6">
        <Section title="Signs it is time to seek help">
          <p>Consider reaching out to a professional if you are experiencing any of the following:</p>
          <h3 className="font-semibold mt-3 mb-1">Emotional signs</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Persistent sadness, emptiness, or hopelessness lasting more than 2 weeks</li>
            <li>Anxiety that feels uncontrollable and interferes with daily life</li>
            <li>Rage or irritability that feels disproportionate and frequent</li>
            <li>Numbness or emotional disconnection from your baby</li>
            <li>Intrusive thoughts that cause significant distress</li>
            <li>Feeling like everyone would be better off without you</li>
            <li>Complete loss of interest or pleasure in anything</li>
          </ul>
          <h3 className="font-semibold mt-3 mb-1">Functional signs</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Inability to sleep even when baby sleeps</li>
            <li>Not eating or unable to stop eating</li>
            <li>Unable to care for yourself or your baby</li>
            <li>Cannot concentrate enough to complete basic tasks</li>
            <li>Withdrawing from everyone around you</li>
            <li>Missing appointments, forgetting important things, unable to make decisions</li>
          </ul>
          <h3 className="font-semibold mt-3 mb-1">Urgent signs (seek help today)</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Thoughts of harming yourself</li>
            <li>Thoughts of harming your baby</li>
            <li>Hearing or seeing things others cannot</li>
            <li>Feeling disconnected from reality</li>
            <li>Unable to stop crying or unable to function at all</li>
          </ul>
        </Section>

        <Section title="Who to call first">
          <p>You have multiple entry points for getting help:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Your OB/GYN or midwife:</strong> They screen for perinatal mood disorders and can prescribe medication or refer you to therapy</li>
            <li><strong>Your primary care doctor:</strong> Can prescribe medication and refer you to specialists</li>
            <li><strong>Your baby&apos;s pediatrician:</strong> Many pediatric offices now screen parents for PPD at well-child visits</li>
            <li><strong>PSI Warmline:</strong> <a href="tel:1-800-944-4773" className="text-primary font-semibold">1-800-944-4773</a> — trained volunteers can help you find local resources</li>
            <li><strong>Your insurance company:</strong> Call the member services number for a list of covered therapists</li>
            <li><strong>PSI Provider Directory:</strong> <a href="https://www.postpartum.net/get-help/provider-directory/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">postpartum.net provider directory</a></li>
          </ul>
        </Section>

        <Section title="Types of professional support">
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Therapy/Counseling:</strong> Individual therapy with a perinatal mental health specialist. CBT and interpersonal therapy have strong evidence for perinatal mood disorders.</li>
            <li><strong>Psychiatry:</strong> A psychiatrist (MD) can evaluate whether medication might help and prescribe it. They specialize in medication management.</li>
            <li><strong>Support groups:</strong> PSI offers free online support groups led by trained facilitators. Being with others who understand reduces isolation.</li>
            <li><strong>Couples therapy:</strong> When relationship strain is a significant factor. Look for Gottman-trained or EFT therapists.</li>
            <li><strong>Medication:</strong> SSRIs, SNRIs, and newer medications like zuranolone are available. Many are compatible with breastfeeding.</li>
            <li><strong>Intensive outpatient programs (IOP):</strong> For more severe symptoms that need more than weekly therapy but less than inpatient care.</li>
          </ul>
        </Section>

        <Section title="How to find a therapist">
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Step 1:</strong> Check the PSI provider directory or Psychology Today (filter for &quot;postpartum&quot; or &quot;perinatal&quot;)</li>
            <li><strong>Step 2:</strong> Call your insurance for covered providers, or ask about out-of-network benefits</li>
            <li><strong>Step 3:</strong> Look for specialization in perinatal mood disorders, maternal mental health, or postpartum issues</li>
            <li><strong>Step 4:</strong> Many therapists offer free 15-minute consultations — use this to gauge fit</li>
            <li><strong>Step 5:</strong> If the first therapist is not the right fit, try another. Finding the right match matters.</li>
          </ul>
          <p className="mt-2">
            Telehealth has made therapy more accessible — you can attend sessions during nap time from home. This is especially helpful for parents who have difficulty arranging childcare.
          </p>
        </Section>

        <Section title="Overcoming barriers to getting help">
          <ul className="list-disc list-inside space-y-1">
            <li><strong>&quot;I do not have time&quot;:</strong> Telehealth sessions can be as short as 30 minutes and done from home during nap time</li>
            <li><strong>&quot;I cannot afford it&quot;:</strong> Sliding scale, community mental health centers, Open Path Collective ($30-$80/session), PSI free groups</li>
            <li><strong>&quot;It is not bad enough&quot;:</strong> You do not need to earn the right to help. Early intervention prevents worsening.</li>
            <li><strong>&quot;I should be able to handle this&quot;:</strong> Perinatal mood disorders are medical conditions. You would not refuse treatment for a broken bone.</li>
            <li><strong>&quot;What if they judge me?&quot;:</strong> Perinatal specialists hear these feelings every day. They will not judge you — they will help you.</li>
            <li><strong>&quot;What if they take my baby away?&quot;:</strong> Seeking help is viewed as responsible, protective behavior — not as evidence of unfitness. Providers want to help you, not separate you from your baby.</li>
          </ul>
        </Section>

        <Section title="What to say when you call">
          <p>If you do not know how to start, here are some scripts:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>&quot;I am a new parent and I am struggling with my mental health. Do you have experience with postpartum mood disorders?&quot;</li>
            <li>&quot;I have been feeling anxious/sad/angry since having my baby and I think I need support.&quot;</li>
            <li>&quot;My baby is X months old and I do not feel like myself. I would like to talk to someone.&quot;</li>
            <li>&quot;I am not sure if what I am experiencing is normal. Can I schedule an appointment to talk about it?&quot;</li>
          </ul>
          <p className="mt-2">You do not need to have a diagnosis or even fully understand what you are feeling. Just reaching out is enough.</p>
        </Section>

        <div className="tier-concern p-4 text-sm rounded-xl">
          <h3 className="font-bold mb-2">If you need help right now</h3>
          <ul className="flex flex-col gap-1.5">
            <li>PSI Warmline: <a href="tel:1-800-944-4773" className="font-semibold underline">1-800-944-4773</a> (call or text, English &amp; Spanish)</li>
            <li>Crisis Text Line: Text <strong>HOME</strong> to <strong>741741</strong></li>
            <li>Suicide &amp; Crisis Lifeline: <a href="tel:988" className="font-semibold underline">988</a></li>
            <li>If you or your baby are in immediate danger, call <strong>911</strong></li>
          </ul>
        </div>

        <FAQSection items={faqItems} />
      </div>

      <BottomLine
        summary="You do not need to hit rock bottom to deserve professional support. If something feels off, if parenting is harder than it should be, if you are not feeling like yourself — that is enough reason to reach out. Help is available, effective, and confidential. The hardest part is often making the first call."
        supportiveMessage="Making the decision to seek help is one of the bravest and most loving things you can do for yourself and your family. You are not weak for needing support — you are strong for recognizing it."
      />

      <div className="mt-6">
        <EditorialTrustBanner variant="compact" />
      </div>

      <div className="mt-8 flex flex-wrap gap-2">
        <Link href="/mental-health/resources" className="inline-block rounded-full border border-[#E8E2D9] px-3 py-1 text-xs text-primary hover:bg-card-alt transition-colors">Resources &amp; Hotlines</Link>
        <Link href="/mental-health/ppd" className="inline-block rounded-full border border-[#E8E2D9] px-3 py-1 text-xs text-primary hover:bg-card-alt transition-colors">Postpartum Depression</Link>
        <Link href="/mental-health/anxiety" className="inline-block rounded-full border border-[#E8E2D9] px-3 py-1 text-xs text-primary hover:bg-card-alt transition-colors">Postpartum Anxiety</Link>
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
