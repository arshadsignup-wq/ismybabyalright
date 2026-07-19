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
  title: 'Postpartum Guide for Partners',
  description:
    'How to support your partner after birth. Practical guidance on recovery support, recognizing postpartum depression, newborn care, and taking care of yourself as a new parent.',
  alternates: { canonical: '/postpartum/partner' },
  openGraph: {
    title: 'Postpartum Guide for Partners | Is My Baby Alright?',
    description: 'How to support recovery, bonding, and mental health as a partner of a new parent.',
  },
};

const faqItems = [
  {
    question: 'How can I help my partner with postpartum recovery?',
    answer: 'The most impactful things: take over household tasks without being asked, handle night feedings (or bring baby for breastfeeding and do diaper changes), protect their sleep, manage visitors, bring food and water, and listen without trying to fix everything. Ask "what would help most right now?" instead of "let me know if you need anything."',
  },
  {
    question: 'How do I know if my partner has postpartum depression?',
    answer: 'Watch for: withdrawal from you and baby, persistent sadness or crying beyond 2 weeks, loss of interest in activities, excessive guilt, not eating or overeating, inability to sleep even when baby sleeps, or expressing hopelessness. If you are worried, gently express concern and offer to help them connect with their provider.',
  },
  {
    question: 'Can partners get postpartum depression?',
    answer: 'Yes. Research shows 8-10% of new fathers/partners develop depression in the first year. Risk factors include a partner with PPD, sleep deprivation, financial stress, and previous mental health history. You deserve support too — talk to your own doctor if you are struggling.',
  },
  {
    question: 'When can we resume intimacy after birth?',
    answer: 'Most providers recommend waiting at least 4-6 weeks for physical healing. However, emotional readiness varies widely. Do not pressure — follow your partner\'s lead. When you do resume, go slowly, use lubrication (hormonal changes cause dryness), and communicate openly. Intimacy can take many forms beyond intercourse.',
  },
  {
    question: 'How can I bond with my newborn?',
    answer: 'Skin-to-skin contact, talking and singing to baby, diaper changes, bathing baby, babywearing, bottle feeding (if applicable), reading aloud, gentle massage, and taking baby for walks. Bonding is built through consistent caregiving — it does not require a special moment.',
  },
];

const breadcrumbItems = [
  { name: 'Home', url: '/' },
  { name: 'Postpartum', url: '/postpartum' },
  { name: 'Guide for Partners' },
];

export default function PostpartumPartnerPage() {
  return (
    <article className="max-w-3xl mx-auto px-5 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getContentPageSchema({
          name: 'Postpartum Guide for Partners',
          description: 'How to support your partner after birth, recognize postpartum depression, bond with your newborn, and take care of yourself.',
          path: '/postpartum/partner',
          lastModified: '2026-07-01',
          medicalGuidelines: [
            { name: 'AAP Supporting Parents During Postpartum', url: 'https://www.aap.org/en/clinical-guidance/' },
            { name: 'ACOG Postpartum Care', url: 'https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2018/05/optimizing-postpartum-care' },
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
        { label: 'Postpartum', href: '/postpartum' },
        { label: 'Guide for Partners' },
      ]} />

      <h1 className="text-2xl font-bold text-foreground mb-2">Postpartum Guide for Partners</h1>
      <LastReviewed date="2026-07-01" />
      <MedicalReviewAttribution sources={['AAP', 'ACOG']} />
      <p className="text-sm text-muted mb-6">
        Your role in the postpartum period matters enormously. This guide covers how to support physical recovery, watch for warning signs, bond with your baby, and take care of your own mental health.
      </p>

      <KeyTakeaways
        takeaways={[
          'The most helpful thing is proactive action — do not wait to be asked',
          'Learn the warning signs of postpartum depression so you can help your partner seek care early',
          'Partners can get postpartum depression too (8-10%) — monitor your own mental health',
          'Bonding with your baby happens through consistent caregiving, not one special moment',
          'Protect your partner\'s sleep — sleep deprivation worsens postpartum mood disorders',
          'Equal partnership in baby care starts from day one',
        ]}
      />

      <div className="space-y-6">
        <Section title="Supporting physical recovery">
          <p>Your partner's body is healing from a major physical event. Here is how to help:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>First week:</strong> Bring food, water, and medication to them. Handle all household tasks. Manage visitors. Help them get to the bathroom if needed.</li>
            <li><strong>Night support:</strong> Handle diaper changes and bottle prep. For breastfeeding, bring baby to partner, then handle burping and settling.</li>
            <li><strong>Meals:</strong> Cook, order delivery, or coordinate meal trains. Keep snacks and water within arm's reach.</li>
            <li><strong>Household:</strong> Laundry, dishes, groceries, pet care — do it all without being asked.</li>
            <li><strong>Appointments:</strong> Drive to postpartum checkups. Take notes. Help them remember questions.</li>
            <li><strong>Older children:</strong> Take the lead on their routines, school, and activities.</li>
          </ul>
          <p className="mt-2"><strong>Pro tip:</strong> Say "I am going to do X" instead of "Let me know if you need anything." Specific action is better than vague offers.</p>
        </Section>

        <Section title="Recognizing postpartum depression and anxiety">
          <p>You may notice changes before your partner does. Watch for:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Persistent sadness, crying, or flatness lasting beyond 2 weeks</li>
            <li>Withdrawal from you, the baby, or friends</li>
            <li>Excessive worry or inability to relax</li>
            <li>Not sleeping even when baby is asleep</li>
            <li>Expressing guilt, worthlessness, or that baby would be better off without them</li>
            <li>Irritability or rage out of proportion to triggers</li>
            <li>Loss of appetite or not taking care of themselves</li>
            <li>Mentions of scary or intrusive thoughts</li>
          </ul>
          <p className="mt-2"><strong>How to bring it up:</strong> &quot;I have noticed you seem really struggling and I am worried about you. I think talking to your doctor could help. I will make the appointment and come with you if you want.&quot;</p>
        </Section>

        <Section title="Bonding with your baby">
          <p>Bonding is not instant for everyone — and that is normal. It builds through caregiving:</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Skin-to-skin:</strong> Place baby on your bare chest. Calms baby and releases bonding hormones in you too.</li>
            <li><strong>Be a primary caregiver:</strong> Do not just "help" — own entire routines (baths, bedtime, morning wake-ups).</li>
            <li><strong>Talk and sing:</strong> Babies learn to recognize your voice. Narrate what you are doing.</li>
            <li><strong>Babywearing:</strong> A carrier lets you be close while having your hands free.</li>
            <li><strong>Feeding:</strong> If bottle-feeding or pumping, take full feeding shifts.</li>
            <li><strong>Diaper changes:</strong> These are bonding moments — talk, make eye contact, be gentle.</li>
          </ul>
          <p className="mt-2">If bonding feels slow, do not panic. Keep showing up. It will come.</p>
        </Section>

        <Section title="Taking care of yourself">
          <p>You cannot pour from an empty cup. Your mental health matters too.</p>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li><strong>Sleep:</strong> Take shifts so both parents get at least one 4-hour stretch. Sleep deprivation is the biggest risk factor for mood problems.</li>
            <li><strong>Social connection:</strong> Do not isolate. Stay in touch with friends. Consider a new-parent group.</li>
            <li><strong>Exercise:</strong> Even a 20-minute walk helps mood and energy.</li>
            <li><strong>Talk about it:</strong> It is normal to feel overwhelmed, uncertain, or even resentful. Naming feelings helps.</li>
            <li><strong>Screen yourself:</strong> 8-10% of new fathers/partners develop depression. If you are struggling for more than 2 weeks, talk to your doctor.</li>
            <li><strong>Relationship:</strong> Accept that your relationship will change temporarily. Prioritize teamwork over romance for now.</li>
          </ul>
        </Section>

        <Section title="Equal partnership from day one">
          <ul className="list-disc list-inside space-y-1">
            <li>Learn everything your partner learns — diapering, feeding, soothing, bathing</li>
            <li>Do not gatekeep: there is no "right" way. Let each parent develop their own style.</li>
            <li>Track appointments, milestones, and supplies — do not make your partner the project manager</li>
            <li>Share the mental load: research daycare, schedule pediatrician visits, buy supplies</li>
            <li>Take the baby alone so your partner can have uninterrupted rest or time to themselves</li>
            <li>If one partner is breastfeeding, the other handles everything else during feeding times</li>
          </ul>
        </Section>

        <Section title="When to seek emergency help">
          <div className="rounded-lg border-2 border-red-200 bg-red-50 p-4">
            <p className="font-semibold text-red-800 mb-2">Call 911 or take your partner to the ER if they:</p>
            <ul className="list-disc list-inside space-y-1">
              <li className="text-red-700">Express thoughts of harming themselves or the baby</li>
              <li className="text-red-700">Seem confused, disoriented, or are seeing/hearing things</li>
              <li className="text-red-700">Have not slept at all for multiple days</li>
              <li className="text-red-700">Are behaving in a bizarre or uncharacteristic way</li>
              <li className="text-red-700">Are experiencing a physical emergency (heavy bleeding, seizures, chest pain)</li>
            </ul>
            <p className="mt-2 text-sm text-red-800">
              <strong>PSI Helpline:</strong> 1-800-944-4773 | <strong>988 Lifeline:</strong> Call or text 988
            </p>
          </div>
        </Section>

        <FAQSection items={faqItems} />
      </div>

      <BottomLine
        summary="Being a good partner in the postpartum period means taking action without being asked, watching for warning signs you are in a position to notice, bonding with your baby through caregiving, and not neglecting your own mental health. You are a parent now, not a helper."
        supportiveMessage="The transition to parenthood is hard for everyone involved. Give yourself grace. Ask for help. And remember — showing up consistently matters more than being perfect."
      />

      <div className="mt-6"><EditorialTrustBanner variant="compact" /></div>

      <div className="mt-10 pt-6 border-t border-border flex items-center justify-between">
        <Link href="/postpartum/mental-health" className="text-sm text-primary font-semibold hover:underline">&larr; Mental Health</Link>
        <Link href="/postpartum/body-changes" className="text-sm text-primary font-semibold hover:underline">Body Changes &rarr;</Link>
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
