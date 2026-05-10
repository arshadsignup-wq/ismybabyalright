import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'secondary-infertility-emotional-impact',
  title: 'Secondary Infertility Emotional Impact',
  category: 'behavior',
  searchTerms: [
    'secondary infertility',
    'cannot get pregnant with second baby',
    'trying for another baby not working',
    'infertility after first baby',
    'grief wanting another child',
    'secondary infertility depression',
    'jealous of pregnant friends second baby',
    'should I be grateful for one child',
  ],
  quickAnswer:
    'Secondary infertility — difficulty conceiving or carrying a pregnancy after previously having a child — is more common than many people realize, affecting roughly 11% of couples. The grief is uniquely complicated because others often minimize it ("at least you have one"). Your desire for another child and the pain of not being able to conceive are both completely valid. Having one child does not disqualify you from grieving the family you envisioned.',
  byAge: [
    {
      ageRange: 'Early trying phase',
      context:
        'When you first start trying for another baby and it does not happen as quickly as expected (or as it did the first time), confusion and concern set in. You may assume something is wrong with you or wonder if you waited too long. The uncertainty itself is stressful, and the month-to-month cycle of hope and disappointment takes a cumulative toll on mental health.',
    },
    {
      ageRange: '6-12 months of trying',
      context:
        'After months of unsuccessful attempts, anxiety and grief often intensify. You may start medical evaluation, which adds its own stress — appointments, tests, and the vulnerability of discussing your fertility. Meanwhile, pregnancy announcements from friends can feel devastating, and the pressure to appear grateful for the child you have can prevent you from expressing your real pain.',
    },
    {
      ageRange: 'During fertility treatment',
      context:
        'If you pursue fertility treatment while parenting, the logistical and emotional demands are enormous. Balancing appointments, medication side effects, financial costs, and the emotional roller coaster of treatment cycles — all while caring for a child — is exhausting. The secrecy many couples maintain adds to the isolation. You are carrying more than most people around you realize.',
    },
    {
      ageRange: 'Considering closure',
      context:
        'Whether you decide to stop trying, pursue other paths to parenthood, or are told further treatment is unlikely to succeed, the grief of closing that chapter is profound. You may mourn the sibling your child will not have, the family size you imagined, or the pregnancy and newborn experience you wanted again. This grief deserves space and support, not dismissal.',
    },
  ],
  whenNormal: [
    'Feeling disappointed and sad each month that conception does not occur',
    'Finding pregnancy announcements from others painful while you are struggling',
    'Questioning whether to pursue treatment and feeling torn about next steps',
    'Grieving the family you imagined even while loving the child you have',
  ],
  whenToMention: [
    'Grief or anxiety about secondary infertility is consuming your daily life and affecting your relationship with your existing child or partner',
    'You are experiencing symptoms of depression — hopelessness, loss of interest, persistent sadness — that last more than two weeks',
    'Fertility treatment is causing significant emotional distress and you feel you have no support',
  ],
  whenToActNow: [
    'You are having thoughts of harming yourself or ending your life due to the grief and hopelessness of infertility — call 988 (Suicide and Crisis Lifeline) immediately',
    'Your mental health crisis is affecting your ability to care for your existing child — call the Postpartum Support International helpline at 1-800-944-4773 or contact your healthcare provider',
  ],
  relatedMilestones: [],
  showSelfReferral: true,
  relatedConcernSlugs: [
    'pregnancy-loss-grief-support',
    'parenting-anxiety-constant-worry',
    'identity-loss-after-baby',
  ],
  sources: [
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Secondary Infertility. National Library of Medicine.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK576409/',
    },
    {
      org: 'APA',
      citation:
        'American Psychological Association. The Psychological Impact of Infertility.',
      url: 'https://www.apa.org/topics/infertility-reproductive',
    },
    {
      org: 'WHO',
      citation:
        'World Health Organization. Infertility.',
      url: 'https://www.who.int/news-room/fact-sheets/detail/infertility',
    },
  ],
};
