import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'nicu-stay-multiples',
  title: 'NICU Stay for Multiples',
  category: 'medical',
  searchTerms: [
    'twins in NICU',
    'multiples NICU stay',
    'premature twins hospital',
    'NICU experience multiples',
    'one twin in NICU other home',
    'bringing twins home from NICU at different times',
    'NICU bonding with multiples',
    'preemie twins development',
    'NICU discharge multiples',
  ],
  quickAnswer:
    'NICU stays are common for multiples, as twins and higher-order multiples are more likely to be born early or at lower birth weights. The NICU experience with multiples brings unique emotional and logistical challenges, including potentially different discharge dates for each baby. Your feelings of stress, guilt, and being pulled in multiple directions are valid and shared by many parents in this situation.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'The NICU period for multiples often involves managing different medical courses for each baby. One twin may be ready for discharge while the other still needs respiratory support or feeding assistance. This is emotionally wrenching but very common. Kangaroo care (skin-to-skin) with each baby, even for short periods, supports bonding and has proven medical benefits including stabilizing heart rate, temperature, and breathing. Ask your NICU team about tandem kangaroo care if both babies are stable enough.',
    },
    {
      ageRange: '3-6 months',
      context:
        'After NICU discharge, the transition home with multiples can feel overwhelming. Your babies may come home on monitors, medications, or special feeding plans. Use their adjusted age (calculated from their due date, not birth date) when tracking developmental milestones  -  this is especially important for premature multiples. It is normal for NICU graduates to need extra follow-up appointments, and each baby may have a different follow-up schedule.',
    },
    {
      ageRange: '6-12 months',
      context:
        'By this point, many former NICU multiples are catching up developmentally, especially when milestones are measured by adjusted age. However, the emotional impact of the NICU experience can linger for parents. NICU-related PTSD and postpartum mood disorders are more common in parents of multiples. If you are still experiencing intrusive thoughts, flashbacks, or intense anxiety about your babies\' health, this is worth discussing with your doctor.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Most premature multiples have significantly narrowed the developmental gap by their first adjusted birthday. Your pediatrician or a developmental specialist may continue to monitor your children at regular intervals, particularly if they were born very preterm (before 32 weeks) or had significant NICU complications. Continue using adjusted age for developmental expectations until your pediatrician advises otherwise, typically around age two.',
    },
  ],
  whenNormal: [
    'Your twins have different NICU courses and are discharged on different days  -  this is very common and does not predict long-term differences',
    'You feel guilt about splitting time between babies in the NICU, or between a baby in the NICU and other children at home',
    'Your babies need to use adjusted age for milestone tracking  -  premature multiples often catch up by age two',
    'You feel anxious, overwhelmed, or emotionally drained during and after the NICU stay  -  these feelings are a normal response to an abnormal situation',
  ],
  whenToMention: [
    'One or both of your babies are not meeting developmental milestones even when using adjusted age',
    'You are experiencing persistent anxiety, flashbacks, or intrusive thoughts related to the NICU experience months after discharge',
    'You are having difficulty bonding with one or both babies after the NICU experience  -  this is more common than people talk about and help is available',
    'One baby seems to be developing much more slowly than the other and the gap is not closing over time',
  ],
  whenToActNow: [
    'Your baby has been recently discharged from the NICU and shows signs of respiratory distress (fast breathing, nostril flaring, retractions, or blue color around the lips)  -  call 911 or return to the emergency department immediately',
    'You are having thoughts of harming yourself or your babies  -  call the Postpartum Support International helpline (1-800-944-4773) or 988 (Suicide and Crisis Lifeline) immediately',
    'Your baby stops breathing, becomes limp, or has a seizure  -  call 911 immediately',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Caring for Premature Babies at Home. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/preemie/Pages/Caring-For-A-Premature-Baby.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Preterm Birth. NICHD.',
      url: 'https://www.nichd.nih.gov/health/topics/preterm',
    },
    {
      org: 'March of Dimes',
      citation:
        'March of Dimes. NICU: Caring for Your Baby in the Newborn Intensive Care Unit.',
      url: 'https://www.marchofdimes.org/find-support/topics/birth/nicu',
    },
  ],
};
