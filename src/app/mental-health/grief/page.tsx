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
  title: 'Grief & Loss',
  description:
    'Support for parents experiencing grief from miscarriage, stillbirth, infant loss, or NICU trauma. Compassionate, evidence-based guidance for navigating loss.',
  alternates: { canonical: '/mental-health/grief' },
  openGraph: {
    title: 'Grief & Loss | Is My Baby Alright?',
    description: 'Support and resources for parents navigating pregnancy loss, stillbirth, or infant loss.',
  },
};

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Mental Health', url: '/mental-health' },
  { name: 'Grief & Loss' },
];

const faqItems = [
  { question: 'How long does grief after a loss last?', answer: 'There is no timeline for grief. Some people feel acute grief for weeks or months, while for others, waves of grief continue for years — especially around anniversaries, due dates, or milestones. Grief does not have an expiration date, and there is no \"right\" amount of time to grieve. What changes over time is not the love you have for your baby, but your ability to carry that love alongside daily life.' },
  { question: 'Is it normal to feel angry after a miscarriage or loss?', answer: 'Absolutely. Anger is a normal and common part of grief. You may feel angry at your body, at the medical system, at other pregnant people, at the unfairness of it all. These feelings are valid. You do not need to feel guilty about anger — it is a natural response to something deeply unjust.' },
  { question: 'When should I seek professional help for grief?', answer: 'Consider professional support if grief is interfering with your ability to function for extended periods, if you are experiencing suicidal thoughts, if you are unable to care for yourself or other children, if you are using substances to cope, or if you feel stuck or unable to process the loss after several months. Perinatal loss therapists specialize in this specific type of grief.' },
  { question: 'How do I support my partner through this loss?', answer: 'Partners often grieve differently, which can create distance if not understood. Some tips: do not compare grief or assume your partner should process the same way you do; check in regularly without pressure; share your own feelings to model vulnerability; attend therapy together if possible; and recognize that both parents — birthing and non-birthing — experience real grief.' },
  { question: 'Should I try to get pregnant again after a loss?', answer: 'This is deeply personal and there is no universal right answer. Medically, most providers recommend waiting at least one full menstrual cycle after early miscarriage and longer after later losses. Emotionally, you will know when you feel ready — and it is okay to want to try again immediately, to need months or years, or to decide not to try again at all. All choices are valid.' },
  { question: 'How do I handle other people who say insensitive things?', answer: 'People often say hurtful things out of discomfort with grief: \"at least it was early,\" \"you can try again,\" \"it happened for a reason.\" You do not owe anyone grace when they minimize your loss. It is okay to say: \"I appreciate you trying to help, but that does not feel helpful to me.\" You can also limit contact with people who are not supportive.' },
];

export default function GriefPage() {
  return (
    <article className="max-w-3xl mx-auto px-5 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getContentPageSchema({
          name: 'Grief & Loss: Miscarriage, Stillbirth, and Infant Loss',
          description: 'Compassionate support and resources for parents navigating grief from pregnancy loss, stillbirth, or infant loss.',
          path: '/mental-health/grief',
          lastModified: '2026-07-01',
          medicalGuidelines: [
            { name: 'ACOG Early Pregnancy Loss', url: 'https://www.acog.org/clinical/clinical-guidance/practice-bulletin/articles/2018/11/early-pregnancy-loss' },
            { name: 'Postpartum Support International', url: 'https://www.postpartum.net/' },
            { name: 'NIMH Coping with Grief', url: 'https://www.nimh.nih.gov/health/topics/suicide-prevention' },
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

      <Breadcrumbs items={[{ label: 'Mental Health', href: '/mental-health' }, { label: 'Grief & Loss' }]} />

      <h1 className="text-2xl font-bold text-foreground mb-2">Grief &amp; Loss</h1>
      <p className="text-sm text-muted mb-1">Miscarriage, stillbirth, and infant loss</p>
      <LastReviewed date="2026-07-01" />
      <MedicalReviewAttribution sources={['ACOG', 'PSI', 'NIMH']} />

      <p className="text-sm text-muted my-6 leading-relaxed">
        If you have lost a pregnancy or a baby, we are deeply sorry. Your loss is real, your grief is valid, and your baby mattered — no matter how early or how it happened. There is no right way to grieve, and there is no timeline you need to follow. This page is here whenever you need it.
      </p>

      <KeyTakeaways
        takeaways={[
          'Your loss is real and your grief is valid — regardless of gestational age or circumstances.',
          'There is no right way to grieve and no timeline for healing. Grief is not linear.',
          'Miscarriage is extremely common (10-20% of known pregnancies) — this does not make your specific loss any less painful.',
          'Professional support from a perinatal loss therapist can help, especially if grief feels overwhelming or stuck.',
          'You do not have to pretend to be okay. It is okay to not be okay for as long as you need.',
        ]}
      />

      <div className="space-y-6">
        <Section title="Acknowledging your loss">
          <p>
            Whether your loss happened at 5 weeks, 20 weeks, 40 weeks, or after birth — it is a real loss. You lost a baby, a future, and a version of your family that you had already begun to love. Society often minimizes pregnancy and infant loss, but your grief does not need external validation to be real.
          </p>
          <p>Types of loss this page addresses:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Early miscarriage:</strong> Loss before 13 weeks of pregnancy</li>
            <li><strong>Late miscarriage:</strong> Loss between 13-20 weeks</li>
            <li><strong>Stillbirth:</strong> Loss after 20 weeks of pregnancy</li>
            <li><strong>Neonatal death:</strong> Loss within the first 28 days of life</li>
            <li><strong>Infant loss:</strong> Loss within the first year of life</li>
            <li><strong>TFMR:</strong> Termination for medical reasons — a devastating choice that deserves compassion</li>
            <li><strong>Ectopic pregnancy:</strong> Loss of a pregnancy that could not survive</li>
          </ul>
          <p className="mt-2">
            All of these are real losses. All deserve acknowledgment and support.
          </p>
        </Section>

        <Section title="What grief can look like">
          <p>Grief after pregnancy or infant loss can manifest in many ways:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Overwhelming sadness, crying, or numbness</li>
            <li>Anger — at your body, at doctors, at the unfairness of it</li>
            <li>Guilt or self-blame (which is almost always unwarranted)</li>
            <li>Difficulty being around babies or pregnant people</li>
            <li>Jealousy when others announce pregnancies — this does not make you a bad person</li>
            <li>Physical symptoms: empty arms, phantom kicks, milk coming in</li>
            <li>Difficulty concentrating or making decisions</li>
            <li>Anxiety about future pregnancies</li>
            <li>Feeling isolated or misunderstood</li>
            <li>Wanting to talk about it all the time — or not at all</li>
            <li>Relief mixed with guilt (especially after a difficult situation)</li>
          </ul>
          <p className="mt-2">
            All of these responses are normal. There is no wrong way to grieve.
          </p>
        </Section>

        <Section title="The guilt trap">
          <p>
            Many parents experience intense guilt after a loss — wondering what they did wrong, whether they could have prevented it, whether they missed a sign. Please hear this:
          </p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Miscarriage is almost never caused by anything you did or did not do</li>
            <li>Most pregnancy losses are caused by chromosomal abnormalities beyond anyone&apos;s control</li>
            <li>Exercising, working, having sex, eating certain foods, or feeling stressed did not cause your loss</li>
            <li>Even if there was a medical factor involved, you did not choose for this to happen</li>
            <li>Guilt is a common grief response, but it is rarely based in reality</li>
          </ul>
          <p className="mt-2 font-semibold">
            This was not your fault.
          </p>
        </Section>

        <Section title="Navigating grief as partners">
          <p>
            Partners often grieve differently, which can create distance and misunderstanding. The birthing parent may experience physical reminders (hormonal changes, milk, physical recovery) while the non-birthing parent may feel their grief is invisible or minimized.
          </p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Both parents grieve — differently does not mean less</li>
            <li>Communicate openly about what you each need</li>
            <li>Avoid comparing grief or expecting your partner to process the same way</li>
            <li>Consider couples counseling with a perinatal loss specialist</li>
            <li>Be patient with each other — grief can strain even strong relationships</li>
          </ul>
        </Section>

        <Section title="When to seek professional support">
          <p>Consider reaching out to a perinatal loss therapist or counselor if:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>You are having thoughts of harming yourself</li>
            <li>Grief is preventing you from functioning for extended periods</li>
            <li>You are unable to care for yourself or your other children</li>
            <li>You feel stuck — unable to process or move through the grief</li>
            <li>You are using substances to cope</li>
            <li>You want support but do not have anyone in your life who understands</li>
            <li>You are considering a subsequent pregnancy and feel overwhelming anxiety about it</li>
          </ul>
          <p className="mt-2">
            Seeking help is not a sign that you are grieving wrong. It is a sign that you are taking your pain seriously.
          </p>
        </Section>

        <Section title="Resources for pregnancy and infant loss">
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Share Pregnancy &amp; Infant Loss Support:</strong> <a href="https://nationalshare.org/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">nationalshare.org</a></li>
            <li><strong>The Compassionate Friends:</strong> Support after the death of a child — <a href="https://www.compassionatefriends.org/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">compassionatefriends.org</a></li>
            <li><strong>Return to Zero:</strong> Pregnancy and infant loss support — <a href="https://rtzhope.org/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">rtzhope.org</a></li>
            <li><strong>Pregnancy After Loss Support:</strong> For parents navigating pregnancy after a previous loss — <a href="https://www.pregnancyafterloss.org/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">pregnancyafterloss.org</a></li>
            <li><strong>PSI Warmline:</strong> <a href="tel:1-800-944-4773" className="text-primary font-semibold">1-800-944-4773</a></li>
          </ul>
        </Section>

        <div className="tier-concern p-4 text-sm rounded-xl">
          <h3 className="font-bold mb-2">If you are in crisis</h3>
          <ul className="flex flex-col gap-1.5">
            <li>Suicide &amp; Crisis Lifeline: <a href="tel:988" className="font-semibold underline">988</a></li>
            <li>PSI Warmline: <a href="tel:1-800-944-4773" className="font-semibold underline">1-800-944-4773</a> (call or text)</li>
            <li>Crisis Text Line: Text <strong>HOME</strong> to <strong>741741</strong></li>
            <li>If you are in immediate danger, call <strong>911</strong></li>
          </ul>
        </div>

        <FAQSection items={faqItems} />
      </div>

      <BottomLine
        summary="Your baby was real. Your loss is real. Your grief is valid for as long as it lasts. There is no right way to navigate this, and there is no timeline you need to follow. Whether your loss was early or late, expected or sudden, you deserve support, compassion, and space to grieve."
        supportiveMessage="We are sorry for your loss. You did not deserve this, and it was not your fault. Whenever you are ready, support is available — and whenever you need to just sit with the grief, that is okay too."
      />

      <div className="mt-6">
        <EditorialTrustBanner variant="compact" />
      </div>

      <div className="mt-8 flex flex-wrap gap-2">
        <Link href="/mental-health/when-to-get-help" className="inline-block rounded-full border border-[#E8E2D9] px-3 py-1 text-xs text-primary hover:bg-card-alt transition-colors">When to Get Help</Link>
        <Link href="/mental-health/resources" className="inline-block rounded-full border border-[#E8E2D9] px-3 py-1 text-xs text-primary hover:bg-card-alt transition-colors">Resources &amp; Hotlines</Link>
        <Link href="/mental-health/relationship" className="inline-block rounded-full border border-[#E8E2D9] px-3 py-1 text-xs text-primary hover:bg-card-alt transition-colors">Relationship Changes</Link>
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
