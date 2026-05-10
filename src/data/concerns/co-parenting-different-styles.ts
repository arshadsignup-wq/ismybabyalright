import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'co-parenting-different-styles',
  title: 'Co-Parenting with Different Styles',
  category: 'behavior',
  searchTerms: [
    'partner disagrees on parenting style',
    'co-parent different discipline approaches',
    'parents arguing about how to raise baby',
    'one parent strict other permissive',
    'husband and wife different parenting styles',
    'inconsistent parenting between parents',
    'divorced co-parenting different rules',
    'how to agree on parenting approach',
  ],
  quickAnswer:
    'It is completely normal for co-parents to have different parenting styles — most couples do. Children can adapt to different approaches from different caregivers as long as the core values are aligned and neither parent is undermining the other. Research shows that ongoing parental conflict about parenting is more harmful to children than having parents with different styles. Finding common ground on key issues (safety, basic discipline, sleep, feeding) while allowing flexibility on details is the healthiest approach.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Newborn care often reveals different parenting instincts. One parent may want to respond to every cry immediately while the other thinks the baby needs to learn to self-soothe. At this age, responding promptly to a newborn\'s cries is recommended by all major pediatric organizations. Focus on shared goals: safe sleep, adequate feeding, and supporting each other through the adjustment period.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Differences in feeding approach (breast vs. bottle, when to start solids) and sleep training may emerge. Discuss these decisions as a team before they become urgent. Having a pediatrician as a neutral resource can help resolve disagreements based on evidence rather than opinion.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As babies become mobile, differing views on safety and supervision may surface. Agree on non-negotiable safety rules (baby-proofing, water safety, car seats) even if you disagree on other things. One parent being more cautious and the other more relaxed is actually common and can balance each other out.',
    },
    {
      ageRange: '12 months+',
      context:
        'Discipline approaches become a major area of potential disagreement during the toddler years. Agree on a few key strategies (time-outs, redirection, consequences) and present a united front on major rules. It is okay for children to learn that different caregivers have slightly different expectations — this is a social skill.',
    },
  ],
  whenNormal: [
    'You and your co-parent have different approaches to some aspects of parenting but agree on fundamental values',
    'You occasionally disagree about the best approach and are able to discuss and compromise',
    'One parent is more relaxed and the other more structured — this provides balance for your child',
    'Your child behaves somewhat differently with each parent — this is normal and shows social flexibility',
  ],
  whenToMention: [
    'Parenting disagreements are causing significant, ongoing conflict that your child may be exposed to',
    'One parent\'s approach crosses into territory that concerns you — such as overly harsh discipline, ignoring safety, or emotional neglect',
    'You are co-parenting after separation and need help establishing consistent expectations across two households',
  ],
  whenToActNow: [
    'One parent\'s behavior toward the child is abusive — physically, emotionally, or through neglect — regardless of the claimed parenting philosophy',
    'Parental conflict has escalated to the point where it is affecting your child\'s emotional wellbeing, and you need professional intervention',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'grandparent-boundary-conflicts',
    'gentle-parenting-when-not-working',
    'sleep-training-guilt-methods',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Co-Parenting Through Separation and Divorce. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/family-life/family-dynamics/Pages/Co-Parenting-Through-Separation-and-Divorce.aspx',
    },
    {
      org: 'NIH',
      citation:
        'Feinberg, M. The Internal Structure and Ecological Context of Coparenting. Parenting: Science and Practice. 2003.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/21980259/',
    },
  ],
};
