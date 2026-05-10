import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'grandparent-boundary-conflicts',
  title: 'Grandparent Boundary Conflicts',
  category: 'behavior',
  searchTerms: [
    'grandparents not following my parenting rules',
    'grandparents spoiling my child',
    'grandparents ignoring safe sleep guidelines',
    'grandma feeding baby wrong food',
    'in-laws undermining parenting decisions',
    'grandparents giving toddler too much sugar',
    'setting boundaries with grandparents baby',
    'grandparents outdated parenting advice',
  ],
  quickAnswer:
    'Conflict with grandparents about parenting practices is extremely common. Many parenting recommendations have changed significantly in recent decades (sleep position, car seats, feeding guidelines, screen time), and grandparents may rely on outdated practices. Research shows that grandparent involvement is generally beneficial for children, so the goal is finding a workable balance. Focus on non-negotiable safety issues while allowing flexibility on matters of preference.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Safe sleep, feeding practices, and holding techniques are the most critical areas. Grandparents may want to put babies on their stomachs, add cereal to bottles, use bumpers in cribs, or use blankets. These are genuine safety concerns worth a firm boundary. Share AAP guidelines directly and frame them as "the rules have changed" rather than "you did it wrong."',
    },
    {
      ageRange: '3-6 months',
      context:
        'Grandparents may push for early introduction of solids or water before the baby is ready. They may also have outdated ideas about crying, soothing, or spoiling babies. Provide clear, brief explanations backed by your pediatrician\'s recommendations.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As baby starts solids, choking hazards and allergen introduction may be areas of conflict. Grandparents may offer honey (dangerous before 12 months), whole grapes, or other unsafe foods. Prepare a clear list of approved foods and choking hazard rules for any caregiving grandparent.',
    },
    {
      ageRange: '12 months+',
      context:
        'Discipline, screen time, sugar, and supervision are common battlegrounds. Decide which issues are truly important for safety and consistency and which are matters of preference where grandparents can have flexibility. A toddler who eats a cookie at Grandma\'s house is fine; a toddler who is forward-facing in a car seat before meeting the weight and height requirements is a safety issue.',
    },
  ],
  whenNormal: [
    'Grandparents do some things differently than you would but your child is safe and happy in their care',
    'You have had to explain updated safety guidelines and grandparents are receptive, even if initially surprised',
    'There are occasional small boundary crossings that you address calmly',
    'Your child enjoys a somewhat different experience at grandparents\' home and can adapt between households',
  ],
  whenToMention: [
    'Grandparents consistently ignore safety rules you have clearly communicated, such as safe sleep, car seat use, or food restrictions for allergies',
    'The conflict is causing significant stress in your relationship with your partner or your own mental health',
    'You feel unable to leave your child with grandparents due to their unwillingness to follow basic safety guidelines',
  ],
  whenToActNow: [
    'A grandparent\'s actions have put your child in immediate danger — car seat misuse, unsafe sleep environment, giving food that causes an allergic reaction, or leaving your child unsupervised in a dangerous situation',
    'A grandparent\'s behavior toward your child is abusive or neglectful, regardless of their intentions',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'co-parenting-different-styles',
    'nanny-cam-trust-issues',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Grandparents as Caregivers: What You Need to Know. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/family-life/family-dynamics/Pages/Grandparents-as-Caregivers.aspx',
    },
    {
      org: 'NIH',
      citation:
        'Sadruddin, A. et al. How Do Grandparents Influence Child Health and Development? A Systematic Review. Social Science & Medicine. 2019.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/31454731/',
    },
  ],
};
