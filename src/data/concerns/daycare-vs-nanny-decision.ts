import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'daycare-vs-nanny-decision',
  title: 'Daycare vs. Nanny: Making the Right Childcare Decision',
  category: 'behavior',
  searchTerms: [
    'daycare vs nanny',
    'nanny or daycare better',
    'childcare options baby',
    'nanny vs daycare pros cons',
    'which is better nanny or daycare',
    'home care vs daycare baby',
    'childcare decision baby',
    'nanny share vs daycare',
    'in-home childcare vs center',
    'best childcare for infant',
  ],
  quickAnswer:
    'Both quality daycare and nanny care can support healthy child development. The best choice depends on your family\'s needs, budget, values, and your child\'s temperament. Daycare centers offer socialization, structured learning, and are regulated for safety. Nannies provide individualized attention, schedule flexibility, and can care for sick children. Research shows that childcare quality (warmth, responsiveness, stability) matters far more than the type of setting.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Very young infants often benefit from the lower ratios possible with a nanny or small home daycare. The AAP recommends a caregiver-to-infant ratio of no more than 1:3 for babies under 12 months. A consistent, responsive caregiver is especially important at this age to support attachment. If choosing a daycare center, look for low ratios, consistent room assignments (the same caregiver each day), and caregivers who hold babies during feeds. Cost may be a significant factor, as nanny care is typically more expensive than daycare.',
    },
    {
      ageRange: '6-18 months',
      context:
        'As babies become more mobile and curious, they benefit from safe exploration spaces that both settings can provide. Nannies can offer more flexible schedules and one-on-one attention, while daycare centers provide age-appropriate activities and early socialization. Consider practical factors: sick-day policies (centers often exclude sick children, while nannies can usually care for mildly ill children), backup care options, and your commute. Separation anxiety at this age is normal regardless of setting.',
    },
    {
      ageRange: '18-36 months',
      context:
        'Toddlers increasingly benefit from peer interaction, making group settings more appealing from a developmental standpoint. Daycare centers offer structured activities, early learning curricula, and socialization opportunities that are harder to replicate at home. However, a nanny who arranges playdates and outings can provide similar experiences. At this age, consider your child\'s temperament: some toddlers thrive in busy group settings, while others do better with quieter, smaller group environments.',
    },
  ],
  whenNormal: [
    'You are weighing multiple factors and feeling uncertain -- this is a big decision and ambivalence is completely normal.',
    'Your child adjusts well to their childcare arrangement and is developing on track.',
    'You revisit your childcare decision as your family\'s needs and your child\'s development change over time.',
  ],
  whenToMention: [
    'Your child seems persistently unhappy or distressed in their current childcare arrangement beyond a normal adjustment period.',
    'You have concerns about the quality of care, safety practices, or your child\'s development in their current setting.',
    'You need guidance on what to look for in quality childcare regardless of the setting.',
  ],
  whenToActNow: [
    'You observe signs of abuse, neglect, or unsafe practices in any childcare setting.',
    'Your nanny or daycare center is not following safe sleep practices for your infant.',
    'Your child has had a serious injury or repeated concerning incidents at their childcare setting.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['daycare-readiness-age-signs', 'attachment-concerns', 'dad-bonding-with-newborn-difficulty'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Finding Quality Child Care. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/family-life/work-and-child-care/Pages/Finding-Quality-Child-Care-What-You-Should-Know.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institute of Child Health and Human Development. NICHD Study of Early Child Care and Youth Development.',
      url: 'https://www.nichd.nih.gov/research/supported/seccyd',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Caring for Your Baby and Young Child: Birth to Age 5. AAP.',
      url: 'https://www.healthychildren.org/English/family-life/work-and-child-care/Pages/default.aspx',
    },
  ],
};
