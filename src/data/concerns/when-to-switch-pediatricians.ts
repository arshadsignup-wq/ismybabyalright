import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'when-to-switch-pediatricians',
  title: 'When to Switch Pediatricians',
  category: 'medical',
  searchTerms: [
    'when to switch pediatricians',
    'should I change my baby doctor',
    'signs of a bad pediatrician',
    'how to switch pediatricians',
    'transferring pediatric medical records',
    'unhappy with pediatrician',
    'pediatrician red flags',
    'changing doctors for baby',
    'switching pediatricians mid year',
    'how to find a new pediatrician',
  ],
  quickAnswer:
    'Switching pediatricians is a normal part of ensuring your child receives the best care, and you should never feel guilty about making a change. Common valid reasons include: your concerns are consistently dismissed, the practice\'s philosophy conflicts with evidence-based medicine, communication is poor, logistical issues (moved, insurance changes), or you simply don\'t feel heard. According to the AAP, the parent-pediatrician relationship should be a partnership built on trust and open communication. Red flags include a provider who discourages questions, does not follow AAP screening guidelines, pressures you into decisions without explanation, or makes you feel judged. To switch, you can simply call a new practice, schedule a visit, and sign a records release form — you do not need your current pediatrician\'s permission.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'The newborn period is when the parent-pediatrician relationship is tested most intensely. If you feel dismissed about feeding concerns, postpartum mental health, or your baby\'s symptoms during these critical early visits, it is appropriate to seek a new provider quickly. Newborns need frequent monitoring, so don\'t delay switching out of guilt. Your baby\'s medical records can be transferred electronically in most cases.',
    },
    {
      ageRange: '3-12 months',
      context:
        'By this stage, you have a clearer picture of the practice. Evaluate whether your pediatrician listens to your concerns, explains their reasoning, stays current on guidelines, and provides timely follow-up. If you are consistently leaving appointments feeling unheard, anxious, or confused, those are signs the relationship isn\'t working. A good pediatrician should welcome your questions and never make you feel like a burden for calling.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Developmental concerns become more prominent in the toddler years. If your pediatrician dismisses your concerns about speech, behavior, or development with "they\'ll grow out of it" without proper screening, or if they resist referrals to specialists when you request them, consider switching. Early intervention for developmental delays has the best outcomes, and a pediatrician should support appropriate evaluation rather than delay it.',
    },
    {
      ageRange: 'Any age',
      context:
        'Logistical reasons for switching are equally valid: you\'ve moved, changed insurance, the office is too far away, appointment availability is poor, or the after-hours support is inadequate. You can also switch simply because the personality fit isn\'t right. Your child benefits from a parent who is comfortable with and confident in their pediatrician.',
    },
  ],
  whenNormal: [
    'Feeling uncertain whether your reasons for switching are "good enough" — any reason that affects your comfort or your child\'s care is valid',
    'Occasional disagreements with your pediatrician on minor issues — no relationship is perfect',
    'Needing to switch due to insurance or location changes',
    'Your pediatrician retiring, moving, or leaving the practice',
  ],
  whenToMention: [
    'You have concerns about the care your child is receiving but want to give your current pediatrician a chance to address them first',
    'You disagree with your pediatrician\'s approach to a specific issue and want to discuss it openly',
    'You want a second opinion on a diagnosis or treatment plan',
  ],
  whenToActNow: [
    'Your pediatrician recommends against standard-of-care treatments or vaccinations without evidence-based alternatives',
    'You believe your child has a condition that is being ignored despite repeated requests for evaluation',
    'Your pediatrician has been dismissive of concerns that turned out to be medically significant',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'pediatrician-disagreement-concerns',
    'baby-second-opinion-pediatric',
    'choosing-a-pediatrician',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Is It Time to Find a New Pediatrician? HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/family-life/health-management/Pages/Is-It-Time-to-Find-a-New-Pediatrician.aspx',
    },
    {
      org: 'AAP',
      citation:
        'HealthyChildren.org. Health Insurance and Managing Your Child\'s Health Care.',
      url: 'https://www.healthychildren.org/English/family-life/health-management/Pages/How-to-Switch-Doctors.aspx',
    },
    {
      org: 'AAFP',
      citation:
        'American Academy of Family Physicians. Choosing a Doctor: Finding the Right One for You.',
      url: 'https://familydoctor.org/tips-for-choosing-a-doctor/',
    },
  ],
};
