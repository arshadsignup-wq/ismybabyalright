import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'single-parent-overwhelm',
  title: 'Single Parent Overwhelm',
  category: 'behavior',
  searchTerms: [
    'single parent overwhelmed',
    'single mom struggling',
    'doing it all alone with baby',
    'no help with baby',
    'solo parenting burnout',
    'single parent depression',
    'single dad overwhelmed',
    'no co-parent support',
  ],
  quickAnswer:
    'Single parenting means carrying the full weight of child-rearing — the night wakings, the decisions, the emotional labor, and often the financial burden — with no one to hand the baby to at the end of a hard day. The overwhelm you feel is not a personal failing; it is a structural reality. You are doing the work of two people, and you deserve support, not judgment. Resources exist, and asking for help is one of the bravest things you can do.',
  byAge: [
    {
      ageRange: '0-3 months postpartum',
      context:
        'The newborn period without a partner is relentless. There is no one to take a shift at night, no one to hold the baby while you shower, and no one to share the decision-making with. The isolation can be profound, especially if the circumstances that led to single parenting (separation, loss, abandonment) are themselves sources of grief. If you have any support at all — family, friends, community programs — lean on it now.',
    },
    {
      ageRange: '3-6 months postpartum',
      context:
        'As the initial wave of sympathy and help from others fades, single parents often face the loneliest phase. The weight of being solely responsible for another human being, often while working or managing finances alone, can feel crushing. Establishing routines and connecting with other single parents — online or in person — can reduce the isolation.',
    },
    {
      ageRange: '6-12 months postpartum',
      context:
        'A mobile baby or crawling infant adds safety demands on top of everything else. Single parents cannot look away even briefly. The mental load of managing everything alone — appointments, childcare logistics, feeding, finances, household — is enormous. If you are feeling burnt out, this is a signal that you need more support, not that you are inadequate.',
    },
    {
      ageRange: '12 months+',
      context:
        'Toddlerhood as a single parent brings new challenges — tantrums without backup, discipline decisions made alone, and the weight of being your child\'s only consistent adult. Many single parents find that their mental health improves as routines solidify and their child becomes more communicative, but others find the cumulative toll catches up with them. Professional support can help at any stage.',
    },
  ],
  whenNormal: [
    'Feeling exhausted and overwhelmed as a single parent — you are carrying an objectively heavier load',
    'Wishing you had a partner to share the responsibilities with',
    'Crying from tiredness, stress, or loneliness',
    'Feeling frustrated that others do not understand how hard single parenting is',
  ],
  whenToMention: [
    'You are persistently depressed, anxious, or unable to find any joy in daily life despite loving your child',
    'You feel completely isolated and have no one you can call for help in an emergency',
    'The financial, emotional, and physical demands are affecting your ability to care for your child or yourself',
  ],
  whenToActNow: [
    'You are having thoughts of harming yourself or that your child would be better off without you — call 988 (Suicide and Crisis Lifeline) immediately',
    'You feel you cannot safely care for your child because of your own physical or mental health — call the Postpartum Support International helpline at 1-800-944-4773 or contact your local family services agency',
  ],
  relatedMilestones: [],
  showSelfReferral: true,
  relatedConcernSlugs: [
    'parental-burnout-signs',
    'sleep-deprivation-effects-parent',
    'identity-loss-after-baby',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Single Parenting. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/family-life/family-dynamics/Pages/Single-Parenting.aspx',
    },
    {
      org: 'APA',
      citation:
        'American Psychological Association. Single Parenting and Today\'s Family.',
      url: 'https://www.apa.org/topics/parenting/single-parent',
    },
    {
      org: 'Postpartum Support International',
      citation:
        'Postpartum Support International. Perinatal Mood and Anxiety Disorders.',
      url: 'https://www.postpartum.net/learn-more/',
    },
  ],
};
