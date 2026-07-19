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
  title: 'Health Anxiety About Your Baby',
  description:
    'Managing health anxiety as a new parent. When worry about your baby being sick becomes excessive, how to cope, and when to seek help for yourself.',
  alternates: { canonical: '/mental-health/health-anxiety' },
  openGraph: {
    title: 'Health Anxiety About Your Baby | Is My Baby Alright?',
    description: 'Managing excessive worry about your baby\'s health and recognizing when anxiety needs treatment.',
  },
};

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Mental Health', url: '/mental-health' },
  { name: 'Health Anxiety' },
];

const faqItems = [
  { question: 'Is it normal to constantly worry about my baby being sick?', answer: 'Some worry about your baby\'s health is normal and protective. It becomes health anxiety when it is constant, when reassurance only helps briefly, when you check on your baby excessively (checking breathing dozens of times per night), when you catastrophize every normal symptom, or when it prevents you from functioning normally or enjoying your baby.' },
  { question: 'How do I stop Googling my baby\'s symptoms?', answer: 'Symptom-Googling is a form of reassurance-seeking that actually maintains and worsens anxiety. Strategies include: setting a \"one search\" rule, designating a specific time for health research (not at 3am), using only trusted sources (AAP, CDC), and calling your pediatrician nurse line instead of Google. Recognize the cycle: Google → briefly reassured → new fear → Google again.' },
  { question: 'Is health anxiety about my baby a sign of PPA?', answer: 'Yes, it can be. Health anxiety about your baby — especially when it is excessive, constant, and interferes with daily life — is a common presentation of postpartum anxiety. If you also have trouble sleeping, physical symptoms of anxiety, difficulty enjoying your baby, or other excessive worries, talk to your provider about PPA screening.' },
  { question: 'How do I know when to actually worry about my baby\'s health?', answer: 'Trust your pediatrician\'s guidance on what constitutes an emergency (fever thresholds, breathing changes, lethargy). If your baby is eating, producing wet diapers, responsive, and growing — they are likely fine. Your pediatrician nurse line exists for exactly this purpose: call them instead of Google when you are unsure.' },
  { question: 'Will my anxiety hurt my baby?', answer: 'Your anxiety does not directly harm your baby. However, excessive health anxiety can indirectly affect your baby by making you less present, less able to enjoy interactions, and potentially leading to over-medicalization or unnecessary ER visits. Getting treatment for your anxiety benefits both of you by allowing you to be a more present, relaxed parent.' },
];

export default function HealthAnxietyPage() {
  return (
    <article className="max-w-3xl mx-auto px-5 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getContentPageSchema({
          name: 'Health Anxiety About Your Baby',
          description: 'Understanding and managing health anxiety as a new parent, including when worry becomes excessive and how to find relief.',
          path: '/mental-health/health-anxiety',
          lastModified: '2026-07-01',
          medicalGuidelines: [
            { name: 'Postpartum Support International', url: 'https://www.postpartum.net/' },
            { name: 'NIMH Anxiety Disorders', url: 'https://www.nimh.nih.gov/health/topics/anxiety-disorders' },
            { name: 'AAP Parent Health', url: 'https://www.aap.org/en/patient-care/healthy-active-living-for-families/' },
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

      <Breadcrumbs items={[{ label: 'Mental Health', href: '/mental-health' }, { label: 'Health Anxiety' }]} />

      <h1 className="text-2xl font-bold text-foreground mb-2">Health Anxiety About Your Baby</h1>
      <p className="text-sm text-muted mb-1">When worry about your baby&apos;s health becomes overwhelming</p>
      <LastReviewed date="2026-07-01" />
      <MedicalReviewAttribution sources={['PSI', 'NIMH', 'AAP']} />

      <p className="text-sm text-muted my-6 leading-relaxed">
        If you check your baby&apos;s breathing multiple times a night, if every sneeze sends you spiraling, if you spend hours Googling symptoms that turn out to be nothing, if you live in constant fear that something terrible will happen to your baby — you may be experiencing health anxiety. This is more than being a careful parent. This is your brain stuck in threat-detection mode, and you deserve relief.
      </p>

      <KeyTakeaways
        takeaways={[
          'Some health vigilance is normal for new parents — it becomes health anxiety when it is constant, excessive, and interferes with daily life.',
          'Health anxiety follows a cycle: worry → check/Google → brief relief → new worry → repeat. Breaking this cycle is key to recovery.',
          'Googling symptoms almost always makes health anxiety worse, not better. It provides temporary reassurance followed by new fears.',
          'Health anxiety about your baby is a common presentation of postpartum anxiety (PPA) and is highly treatable with CBT.',
          'Your pediatrician nurse line is a better resource than Google — they can tell you whether something actually needs attention.',
        ]}
      />

      <div className="space-y-6">
        <Section title="What health anxiety looks like in new parents">
          <p>
            Health anxiety (sometimes called illness anxiety) in new parents is the persistent, excessive fear that your baby is or will become seriously ill. It goes beyond typical parental vigilance into territory that causes significant distress and functional impairment.
          </p>
          <p>Common presentations include:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Checking baby&apos;s breathing repeatedly throughout the night (dozens of times)</li>
            <li>Interpreting every normal body function as a sign of illness (normal spit-up becomes pyloric stenosis)</li>
            <li>Extensive Googling that always leads to worst-case-scenario results</li>
            <li>Calling the pediatrician frequently about normal variations</li>
            <li>Difficulty leaving baby with other caregivers due to health fears</li>
            <li>Avoiding activities because of perceived health risks (not going outside, not allowing visitors)</li>
            <li>Physical anxiety symptoms when baby shows any sign of not being &quot;perfect&quot;</li>
            <li>Inability to be reassured — even after a doctor says everything is fine, the worry returns</li>
            <li>Spending hours researching SIDS, rare diseases, or danger signs</li>
          </ul>
        </Section>

        <Section title="The anxiety cycle">
          <p>
            Health anxiety operates in a self-reinforcing cycle:
          </p>
          <ol className="list-decimal list-inside space-y-1 mt-2">
            <li><strong>Trigger:</strong> Baby sneezes, has a rash, makes an unusual sound</li>
            <li><strong>Catastrophic thought:</strong> &quot;What if it is something serious?&quot;</li>
            <li><strong>Anxiety spike:</strong> Racing heart, dread, need to DO something</li>
            <li><strong>Safety behavior:</strong> Google symptoms, check baby, call doctor, seek reassurance</li>
            <li><strong>Brief relief:</strong> Temporary calm after getting reassurance</li>
            <li><strong>New trigger or doubt:</strong> &quot;But what if they missed something?&quot; or a new symptom appears</li>
            <li><strong>Cycle repeats:</strong> Often escalating over time</li>
          </ol>
          <p className="mt-2">
            The safety behaviors (Googling, checking, seeking reassurance) feel like they help, but they actually maintain the cycle by reinforcing the idea that danger is real and constant vigilance is necessary.
          </p>
        </Section>

        <Section title="Why Google makes it worse">
          <p>
            Symptom-searching online is one of the most common manifestations of health anxiety — and one of the most counterproductive:
          </p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Search algorithms surface the most clicked results — often rare, scary conditions</li>
            <li>Medical websites list every possible cause of a symptom, including extremely unlikely ones</li>
            <li>You cannot diagnose your baby by matching symptoms online — context matters</li>
            <li>Each search provides brief relief followed by new fears (&quot;what about THIS condition?&quot;)</li>
            <li>Late-night Googling happens when your cognitive defenses are lowest and anxiety is highest</li>
            <li>The more you search, the more &quot;evidence&quot; you find for your fears (confirmation bias)</li>
          </ul>
          <p className="mt-2 font-semibold">
            Your pediatrician&apos;s nurse line exists specifically for moments when you are not sure whether something needs attention. Use it instead of Google.
          </p>
        </Section>

        <Section title="Normal vs. problematic health vigilance">
          <p>How to distinguish healthy attentiveness from health anxiety:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Normal:</strong> Checking on baby before bed. <strong>Anxiety:</strong> Checking every 15 minutes, unable to sleep even when baby sleeps.</li>
            <li><strong>Normal:</strong> Calling the doctor about a high fever. <strong>Anxiety:</strong> Calling about every normal spit-up or sneeze.</li>
            <li><strong>Normal:</strong> Briefly searching a specific concern. <strong>Anxiety:</strong> Hours-long Google spirals ending in rare disease terror.</li>
            <li><strong>Normal:</strong> Following safe sleep guidelines. <strong>Anxiety:</strong> Buying multiple monitors, unable to sleep regardless.</li>
            <li><strong>Normal:</strong> Feeling reassured after your pediatrician says everything is fine. <strong>Anxiety:</strong> Doubting the doctor, seeking second opinions, or finding new worries.</li>
          </ul>
        </Section>

        <Section title="Coping strategies">
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Limit Google:</strong> One search per concern. Set a timer. After that, call your nurse line or wait for the next appointment.</li>
            <li><strong>Delay checking:</strong> When you feel the urge to check on baby, wait 5 minutes. Gradually increase the delay.</li>
            <li><strong>Challenge catastrophic thoughts:</strong> Ask yourself: &quot;What would I tell a friend who was this worried?&quot; or &quot;What is the actual probability of the worst case?&quot;</li>
            <li><strong>Reduce safety behaviors:</strong> Each time you resist the urge to check/Google/seek reassurance, you weaken the anxiety cycle.</li>
            <li><strong>Name it:</strong> &quot;This is my health anxiety, not reality. My baby is most likely fine.&quot;</li>
            <li><strong>Use your pediatrician wisely:</strong> Schedule a visit to discuss your overall concerns rather than calling for each individual fear.</li>
            <li><strong>Limit nighttime exposure:</strong> Put your phone in another room at night to prevent 3am Google spirals.</li>
          </ul>
        </Section>

        <Section title="When to get professional help">
          <p>Health anxiety is highly treatable. Seek professional support if:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>You cannot enjoy your baby because you are constantly worried about their health</li>
            <li>The anxiety is affecting your sleep, relationships, or daily functioning</li>
            <li>You feel unable to control the worry despite trying</li>
            <li>You are avoiding normal activities due to health fears (not leaving the house, not allowing visitors)</li>
            <li>The checking/Googling/reassurance-seeking feels compulsive</li>
            <li>You recognize this as a pattern but cannot break it on your own</li>
          </ul>
          <p className="mt-2">
            <strong>CBT (Cognitive Behavioral Therapy)</strong> and <strong>ERP (Exposure and Response Prevention)</strong> are both highly effective for health anxiety. A therapist specializing in anxiety can help you break the cycle.
          </p>
        </Section>

        <div className="tier-concern p-4 text-sm rounded-xl">
          <h3 className="font-bold mb-2">If you are in crisis</h3>
          <ul className="flex flex-col gap-1.5">
            <li>PSI Warmline: <a href="tel:1-800-944-4773" className="font-semibold underline">1-800-944-4773</a> (call or text)</li>
            <li>Crisis Text Line: Text <strong>HOME</strong> to <strong>741741</strong></li>
            <li>Suicide &amp; Crisis Lifeline: <a href="tel:988" className="font-semibold underline">988</a></li>
          </ul>
        </div>

        <FAQSection items={faqItems} />
      </div>

      <BottomLine
        summary="Health anxiety about your baby is not you being a good parent — it is your brain stuck in a loop of false alarms. Some vigilance is healthy; constant, uncontrollable fear is not. You deserve to enjoy your baby without being paralyzed by what-ifs. CBT is highly effective for health anxiety, and breaking the Google/check/reassurance cycle is the key to recovery."
        supportiveMessage="Your worry comes from love — but love does not have to feel like fear. You can be an attentive, caring parent without living in constant dread. Help is available, and relief is possible."
      />

      <div className="mt-6">
        <EditorialTrustBanner variant="compact" />
      </div>

      <div className="mt-8 flex flex-wrap gap-2">
        <Link href="/mental-health/anxiety" className="inline-block rounded-full border border-[#E8E2D9] px-3 py-1 text-xs text-primary hover:bg-card-alt transition-colors">Postpartum Anxiety</Link>
        <Link href="/mental-health/milestone-anxiety" className="inline-block rounded-full border border-[#E8E2D9] px-3 py-1 text-xs text-primary hover:bg-card-alt transition-colors">Milestone Anxiety</Link>
        <Link href="/mental-health/when-to-get-help" className="inline-block rounded-full border border-[#E8E2D9] px-3 py-1 text-xs text-primary hover:bg-card-alt transition-colors">When to Get Help</Link>
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
