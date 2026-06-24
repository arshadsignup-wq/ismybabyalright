import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'partner-involvement-baby-care-tips',
  title: 'Getting Your Partner More Involved in Baby Care',
  category: 'behavior',
  searchTerms: [
    'partner not helping with baby',
    'husband not involved baby care',
    'dad not bonding with baby',
    'partner won\'t help with newborn',
    'unequal parenting workload',
    'father involvement baby benefits',
    'how to get partner to help with baby',
    'mental load parenting',
    'invisible labor motherhood',
    'partner not changing diapers',
    'dad feeling left out with baby',
  ],
  quickAnswer:
    'Unequal distribution of baby care is one of the most common sources of relationship strain for new parents. Research shows that father (or non-birthing partner) involvement from birth has significant benefits for child development, the partner relationship, and the mother\'s mental health. Barriers to equal involvement include gatekeeping (the primary caregiver not allowing the partner to develop their own way of caring for the baby), lack of parental leave, cultural expectations, and the partner feeling incompetent. Open communication about expectations, avoiding criticism when the partner does things differently, and creating opportunities for solo bonding time all help.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'The newborn period sets patterns that can last for years. If the birthing parent does everything from the start, it becomes harder to shift responsibilities later. Specific ways partners can be involved: diaper changes (which provide face-to-face bonding time), nighttime support (bringing baby for feeds, burping, resettling), bathing, skin-to-skin contact, wearing the baby in a carrier, and attending pediatric appointments. Avoid "maternal gatekeeping" (correcting your partner\'s method or redoing tasks), as research shows this is the biggest barrier to partner involvement. Let your partner develop their own competence, even if it looks different from yours.',
    },
    {
      ageRange: '3-12 months',
      context:
        'As babies become more interactive, partners who were unsure of what to do with a newborn often find it easier to engage. Encourage regular one-on-one time between your partner and baby without the primary caregiver present. This builds confidence and a unique bond. Discuss the "mental load" explicitly: who tracks doctor appointments, clothing sizes, feeding schedules, supply inventory, and childcare arrangements. Making the invisible labor visible helps distribute it more equitably. If your partner has returned to work, protect time for active involvement during evenings and weekends.',
    },
    {
      ageRange: '12-36 months',
      context:
        'Research consistently shows that involved fathers (or non-birthing partners) contribute to better cognitive, social, and emotional outcomes for children. Active involvement means more than "babysitting" or "helping"; it means being an equal, engaged parent. Discuss division of labor regularly as needs change. Some families find it helpful to divide by task (one partner handles bath and bedtime, the other handles morning routine) rather than having one parent always in charge. If your partner is resistant to involvement despite clear communication, couples counseling can help address underlying issues.',
    },
  ],
  whenNormal: [
    'Both partners are involved in baby care but in different amounts or different ways based on work schedules and feeding arrangements.',
    'There is an initial adjustment period where one partner feels less confident but is improving over time.',
    'You have occasional disagreements about division of labor but can discuss them and adjust.',
  ],
  whenToMention: [
    'The unequal distribution of baby care is causing resentment, exhaustion, or relationship breakdown.',
    'The primary caregiver is showing signs of burnout, depression, or anxiety from carrying the full parenting load.',
    'One partner is completely disengaged from baby care and unwilling to discuss it.',
  ],
  whenToActNow: [
    'The primary caregiver is so exhausted from solo parenting that their ability to safely care for the baby is compromised (falling asleep while feeding, inability to function).',
    'The uninvolved partner\'s disengagement is accompanied by substance use, verbal aggression, or signs of depression.',
    'The primary caregiver is having thoughts of self-harm or harming the baby due to exhaustion and lack of support.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'partner-disagreement-parenting-style',
    'phone-addiction-parent-baby-bonding',
    'parental-decision-fatigue-conflicting-advice',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Fathers\' Roles in the Care and Development of Their Children. Pediatrics, 2016.',
      url: 'https://publications.aap.org/pediatrics/article/138/1/e20161128/52484/Fathers-Roles-in-the-Care-and-Development-of-Their',
    },
    {
      org: 'NIH',
      citation:
        'NIH - Father Involvement and Child Development: A Review. Journal of Marriage and Family, 2019.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/29551577/',
    },
    {
      org: 'Zero to Three',
      citation:
        'Zero to Three. Dad\'s Impact on Baby\'s Development.',
      url: 'https://www.zerotothree.org/resource/dads-impact-on-babys-development/',
    },
  ],
};
