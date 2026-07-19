import type { Metadata } from 'next';
import Breadcrumbs from '@/components/layout/Breadcrumbs';
import KeyTakeaways from '@/components/shared/KeyTakeaways';
import FAQSection from '@/components/shared/FAQSection';
import EditorialTrustBanner from '@/components/shared/EditorialTrustBanner';
import LastReviewed from '@/components/shared/LastReviewed';
import MedicalReviewAttribution from '@/components/shared/MedicalReviewAttribution';
import BottomLine from '@/components/shared/BottomLine';
import { getBreadcrumbSchema, getContentPageSchema, getFAQPageSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Age-Appropriate Discipline: Evidence-Based Methods',
  description:
    'Evidence-based discipline strategies by age from the AAP. Covers positive discipline, setting limits, natural consequences, and why spanking is not recommended. Practical methods for real families.',
  alternates: { canonical: '/behavior/discipline' },
};

const faqItems = [
  {
    question: 'At what age should discipline start?',
    answer:
      'Gentle guidance begins in infancy through environmental management (baby-proofing, distraction, routine). Intentional limit-setting becomes appropriate around 12 months when children begin testing boundaries. The approach should match the child\'s developmental stage — a 1-year-old needs redirection, not explanations or consequences.',
  },
  {
    question: 'Does the AAP recommend time-outs?',
    answer:
      'The AAP considers time-outs (also called "time away" or "calm-down time") an acceptable strategy for children ages 2 and older when used correctly. Effective time-outs are brief (1 minute per year of age), calm, used consistently for specific behaviors, and followed by reconnection. They should not be scary, isolated, or used as the primary strategy.',
  },
  {
    question: 'Is positive discipline the same as permissive parenting?',
    answer:
      'No. Positive discipline involves firm, consistent limits — it is not permissive. The difference is HOW limits are enforced. Positive discipline uses natural consequences, redirection, and teaching rather than punishment, yelling, or spanking. Children still hear "no" and experience boundaries. The goal is to teach self-discipline, not to avoid all discomfort.',
  },
  {
    question: 'Why does the AAP recommend against spanking?',
    answer:
      'The AAP issued a policy statement in 2018 recommending against spanking based on decades of research showing it increases aggression, antisocial behavior, and mental health problems in children while not being more effective than other discipline methods. Spanking also damages the parent-child relationship and models that physical force solves problems.',
  },
  {
    question: 'My partner and I disagree on discipline. What should we do?',
    answer:
      'Consistency between caregivers is extremely important. Discuss your approaches privately (not in front of your child), try to understand each other\'s upbringing and values, and agree on a few core rules and consequences you both commit to. If you cannot agree, consider a family counseling session to develop a shared plan.',
  },
];

const takeaways = [
  'Discipline means "to teach" — the goal is teaching self-regulation, not inflicting punishment',
  'The AAP recommends against all forms of physical punishment including spanking',
  'Effective discipline matches the child\'s developmental stage — what works at 3 does not work at 1',
  'Consistency across caregivers is the single strongest predictor of discipline effectiveness',
  'Connection must come before correction — children learn best from people they feel safe with',
];

export default function DisciplinePage() {
  const contentSchema = getContentPageSchema({
    name: 'Age-Appropriate Discipline: Evidence-Based Methods',
    description:
      'Evidence-based discipline strategies by developmental stage from the AAP.',
    path: '/behavior/discipline',
    lastModified: '2026-07-01',
  });
  const faqSchema = getFAQPageSchema(faqItems);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Behavior', url: '/behavior' },
    { name: 'Discipline' },
  ]);

  return (
    <article>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contentSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Breadcrumbs items={[{ label: 'Behavior', href: '/behavior' }, { label: 'Discipline' }]} />

      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        <h1 className="text-2xl font-bold text-foreground sm:text-3xl">
          Age-Appropriate Discipline: Evidence-Based Methods
        </h1>

        <p className="mt-4 text-base text-muted leading-relaxed">
          Discipline is one of the most debated topics in parenting. The word itself comes from the Latin "disciplina" meaning teaching and learning — not punishment. Modern research is clear: the most effective discipline strategies teach children self-regulation and problem-solving, rather than simply suppressing behavior through fear. Here is what the evidence says works at each age.
        </p>

        <div className="mt-4">
          <MedicalReviewAttribution sources={['AAP', 'CDC']} />
          <LastReviewed date="2026-07-01" />
        </div>

        <div className="mt-6">
          <KeyTakeaways takeaways={takeaways} />
        </div>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Core principles of effective discipline
          </h2>
          <div className="space-y-3 text-sm text-muted leading-relaxed">
            <p>
              <strong className="text-foreground">Relationship first.</strong> Children are motivated to cooperate with adults they feel connected to. The parent-child relationship is the foundation of all discipline. Time spent playing, listening, and connecting is not separate from discipline — it IS discipline prevention.
            </p>
            <p>
              <strong className="text-foreground">Clear, consistent limits.</strong> Children need to know what is expected. Rules should be few, clearly stated, and enforced consistently by all caregivers. Inconsistency (sometimes enforcing, sometimes not) increases testing behavior.
            </p>
            <p>
              <strong className="text-foreground">Natural and logical consequences.</strong> The consequence should relate to the behavior. If you throw food, the meal ends. If you hit with a toy, the toy goes away. This teaches cause and effect naturally.
            </p>
            <p>
              <strong className="text-foreground">Teaching, not just stopping.</strong> After addressing the behavior, teach what TO do instead. "We do not hit" is incomplete without "You can say &apos;I am mad&apos; or stomp your feet."
            </p>
            <p>
              <strong className="text-foreground">Realistic expectations.</strong> A toddler cannot sit still for an hour. A 2-year-old cannot share consistently. Expecting age-inappropriate behavior leads to frustration for everyone. Know what your child is developmentally capable of.
            </p>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            Discipline strategies by age
          </h2>
          <div className="space-y-4 text-sm text-muted leading-relaxed">
            <div>
              <h3 className="font-semibold text-foreground mb-1">0-12 months: prevention and redirection</h3>
              <p>
                Babies cannot misbehave — they are exploring and learning. Discipline at this age means baby-proofing the environment, redirecting attention, establishing routines, and modeling gentle behavior. When a baby pulls hair or grabs glasses, calmly remove their hand and say "Gentle" while demonstrating. No punishment is appropriate at this age.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">12-24 months: limits with empathy</h3>
              <p>
                Toddlers begin testing limits intentionally. Use simple, consistent rules ("We sit to eat," "Gentle with the cat"). Follow through immediately and every time. Use distraction and redirection as primary tools. Remove the child from the situation when needed. Keep verbal corrections brief — one or two words. Expect to repeat yourself dozens of times; this is normal, not defiance.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">2-3 years: choices and consequences</h3>
              <p>
                Offer limited choices ("Do you want to put on shoes or jacket first?"). Use natural consequences when safe (refused to wear a coat? they feel cold briefly). Use brief time-aways (1-2 minutes) for specific behaviors like hitting. Give warnings before transitions. Name feelings and teach alternatives. Follow through consistently — empty threats undermine all discipline.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-1">3-5 years: reasoning and problem-solving</h3>
              <p>
                Children can now understand simple explanations ("We do not run in the parking lot because cars cannot see small people"). Involve them in problem-solving ("Both of you want the red truck. What could we do?"). Use when-then statements ("When you finish cleaning up, then we can go outside"). Logical consequences become more effective. Allow them to experience disappointment and frustration with your support.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            What the AAP says about spanking
          </h2>
          <p className="text-sm text-muted leading-relaxed">
            In 2018, the AAP issued its strongest statement yet against physical punishment, including spanking. Their policy statement, based on analysis of 20 years of research, concluded that spanking is no more effective than other discipline methods in the short term, increases aggressive behavior in children, is associated with negative outcomes including mental health problems, damages the parent-child relationship, and tends to escalate over time as children habituate. The AAP recommends that parents use positive discipline strategies instead. This is not about judging parents who were spanked as children — it is about applying what decades of research have taught us about child development and effective teaching.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground mb-3">
            When you lose your temper
          </h2>
          <p className="text-sm text-muted leading-relaxed">
            Every parent yells, loses patience, or handles a situation poorly sometimes. This does not make you a bad parent. What matters is what you do next. Repair the relationship: apologize genuinely ("I yelled and that was not okay. I was frustrated, but that is not how I want to talk to you. I am sorry."). This models accountability, emotional regulation, and healthy relationships. If you find yourself regularly losing control, reach out for support — a therapist, parenting group, or even calling a friend. You deserve help too.
          </p>
        </section>

        <div className="mt-10">
          <FAQSection items={faqItems} />
        </div>

        <BottomLine
          summary="Effective discipline teaches children self-regulation and problem-solving rather than simply suppressing behavior. Match your approach to your child's developmental stage, maintain consistent limits enforced with empathy, use natural consequences, and prioritize the parent-child relationship as your foundation. The AAP recommends against physical punishment and supports positive discipline strategies that teach rather than punish."
          supportiveMessage="No parent disciplines perfectly all the time. What matters is your overall pattern and your willingness to repair when things go wrong. The fact that you are thinking carefully about how to guide your child shows deep love and intention."
        />

        <div className="mt-6">
          <EditorialTrustBanner variant="compact" />
        </div>
      </div>
    </article>
  );
}
