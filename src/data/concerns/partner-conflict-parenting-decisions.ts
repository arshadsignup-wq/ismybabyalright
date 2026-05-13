import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'partner-conflict-parenting-decisions',
  title: 'Partner Conflict About Parenting Decisions',
  category: 'behavior',
  searchTerms: [
    'disagreeing with partner about parenting',
    'partner conflict baby decisions',
    'fighting about sleep training',
    'arguing about how to raise baby',
    'partner and I disagree on discipline',
    'co-parenting disagreements',
    'different parenting styles conflict',
    'relationship stress after baby',
    'partner not helping with baby',
  ],
  quickAnswer:
    'Disagreements about parenting are among the most common sources of relationship stress after having a baby. Different upbringings, values, and expectations mean that partners often approach feeding, sleep, discipline, and daily routines differently. These conflicts are normal and do not mean your relationship is broken  -  but they do need to be addressed with respect and communication.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'The newborn period often surfaces fundamental differences in parenting philosophies for the first time. Conflicts commonly arise around feeding methods, sleep arrangements, how much to hold the baby, and division of nighttime duties. Sleep deprivation amplifies every disagreement. Try to address conflicts during calmer moments rather than in the middle of the night, and focus on finding compromises rather than winning arguments. Your baby needs two parents who support each other more than they need any single "right" approach.',
    },
    {
      ageRange: '3-6 months',
      context:
        'As routines develop, disagreements may center on sleep training methods, returning to work, childcare choices, or how to handle unsolicited advice from extended family. One partner may feel the other is too anxious or too relaxed. It helps to identify which decisions are truly important to each person and where there is room for flexibility. Researching decisions together  -  using reputable sources like the AAP  -  can help move conversations from opinion-based arguments to evidence-informed discussions.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Feeding approaches (purees versus baby-led weaning), baby-proofing, screen time, and emerging discipline questions often trigger conflict. Partners may also disagree about social activities, grandparent boundaries, and milestone expectations. The division of household labor and childcare frequently becomes a major source of resentment by this stage. Regular check-ins about how both partners are feeling  -  not just about logistics  -  can help prevent resentment from building.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddler discipline is one of the biggest areas of parenting conflict. Partners may have very different views on how to handle tantrums, set limits, and respond to defiant behavior  -  often rooted in how they were parented themselves. Consistency between caregivers matters for toddlers, so finding common ground on basic approaches is important. This does not mean you must agree on everything, but having aligned strategies on the biggest issues helps your child feel secure.',
    },
  ],
  whenNormal: [
    'You and your partner occasionally disagree about parenting approaches but can discuss differences respectfully and reach compromises',
    'You feel frustrated when your partner does things differently than you would  -  different does not necessarily mean wrong',
    'Your relationship feels more strained since having a baby  -  this is the most common time for relationship satisfaction to temporarily decrease',
    'You sometimes feel like you are doing more than your fair share  -  openly discussing expectations and workload is healthy',
  ],
  whenToMention: [
    'Parenting disagreements have become frequent, intense, or are leading to ongoing resentment that is affecting your relationship',
    'You and your partner are unable to reach compromises and your child is receiving inconsistent messages that seem to confuse or distress them',
    'One partner feels completely excluded from parenting decisions or feels their input is not valued',
    'The conflict is affecting your mental health, your partner\'s mental health, or the overall atmosphere in your home',
  ],
  whenToActNow: [
    'Conflicts have escalated to verbal abuse, threats, intimidation, or physical aggression  -  contact the National Domestic Violence Hotline (1-800-799-7233) for support and safety planning',
    'You feel unsafe in your home or are worried about your child\'s safety due to your partner\'s behavior  -  seek help immediately',
    'Either partner is experiencing a mental health crisis including suicidal thoughts  -  call 988 (Suicide and Crisis Lifeline)',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Co-Parenting Through Separation and Divorce: Communication and Conflict Resolution. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/family-life/family-dynamics/Pages/Co-Parenting-Communication-Tips.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. The Transition to Parenthood: Marital Conflict and Withdrawal and Their Implications for Child Emotional Regulation. Couple and Family Psychology, 2012.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/25598851/',
    },
    {
      org: 'Zero to Three',
      citation:
        'Zero to Three. How to Support Your Partner Relationship After Having a Baby.',
      url: 'https://www.zerotothree.org/resource/how-to-support-your-relationship-after-having-a-baby/',
    },
  ],
};
