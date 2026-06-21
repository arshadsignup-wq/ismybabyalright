import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'purple-crying-period-coping',
  title: 'The Period of PURPLE Crying: Understanding and Coping',
  category: 'behavior',
  searchTerms: [
    'PURPLE crying baby',
    'period of purple crying',
    'baby cries for hours every evening',
    'inconsolable baby evening',
    'why does baby cry so much',
    'newborn crying peak age',
    'PURPLE crying how long does it last',
    'baby crying nothing works',
    'shaken baby syndrome prevention',
    'normal crying amount for newborn',
  ],
  quickAnswer:
    'The Period of PURPLE Crying is a research-based framework developed by Dr. Ronald Barr at the National Center on Shaken Baby Syndrome to help parents understand the normal pattern of increased crying in the first months of life. PURPLE is an acronym: Peak of crying (peaks around 2 months), Unexpected (comes and goes without reason), Resists soothing (may not stop no matter what you do), Pain-like face (looks like pain even when not in pain), Long-lasting (can cry 5+ hours per day), and Evening (clustering in late afternoon/evening). Studies show that all healthy babies go through this phase, which typically begins around 2 weeks, peaks at 6-8 weeks, and resolves by 3-5 months. During the peak, a normal baby may cry up to 2-3 hours per day, with some crying up to 5 hours. Understanding that this is normal development — not something you are causing or failing to fix — is protective against parental frustration and the risk of shaken baby syndrome.',
  byAge: [
    {
      ageRange: '0-2 weeks',
      context:
        'Crying begins to increase from birth. Newborns cry an average of 1-2 hours per day in the first two weeks. This is the beginning of the PURPLE crying curve. During this period, most crying is related to identifiable needs (hunger, wet diaper, need for closeness). Crying that is soothed by meeting a need is reassuring. The unpredictable, unsoothable crying typically begins around 2-3 weeks.',
    },
    {
      ageRange: '2-8 weeks',
      context:
        'This is the peak of PURPLE crying. Average crying reaches 2-3 hours per day, and some healthy babies cry significantly more. The hallmark is that the crying may be completely unsoothable — you have fed, changed, rocked, and done everything right, and the baby is still crying. This is not a reflection of your parenting. Coping strategies: take turns with a partner, put the baby down safely in the crib and step away for 5-10 minutes if you feel overwhelmed, use noise-canceling headphones while holding baby, and remind yourself this is temporary.',
    },
    {
      ageRange: '2-3 months',
      context:
        'Crying begins to decrease from the 2-month peak. Many parents notice a gradual reduction in evening fussiness. Some babies transition out of this phase quickly while others taper over several weeks. If your baby\'s crying has not decreased at all by 3 months, or has increased, discuss it with your pediatrician — prolonged inconsolable crying beyond this period may warrant evaluation for conditions like reflux, milk protein allergy, or, rarely, other medical causes.',
    },
    {
      ageRange: '3-5 months',
      context:
        'By 3-5 months, most babies have moved through the PURPLE crying period. Total daily crying typically decreases to under 1 hour. Your baby is more socially responsive, better at self-soothing, and their nervous system has matured. If you are still experiencing intense crying periods, bring this up at your next well-child visit. For parents who went through a severe PURPLE crying period, it is normal to feel residual anxiety or even PTSD-like symptoms — reaching out to a therapist or support group is appropriate.',
    },
  ],
  whenNormal: [
    'Your baby crying for 2-3 hours per day during the first 2-3 months, especially in the evening',
    'Nothing you do seems to stop the crying — this is the "R" in PURPLE (resists soothing)',
    'Crying that starts and stops for no apparent reason',
    'Your baby looking like they are in pain but your pediatrician has found no medical cause',
    'Feeling frustrated, helpless, or even angry during prolonged crying — these are normal human responses',
  ],
  whenToMention: [
    'Crying that continues beyond 3-4 months without improvement',
    'Your baby cries more during or after feedings specifically (may indicate reflux or allergy)',
    'You are feeling unable to cope with the crying and worry about your emotional state',
    'Your baby has other symptoms alongside the crying: fever, vomiting, bloody stools, or poor weight gain',
  ],
  whenToActNow: [
    'You feel you might harm your baby or shake them — put the baby down safely in the crib and call the Childhelp National Hotline (1-800-422-4453) or 988 immediately',
    'Your baby\'s cry sounds markedly different than usual (high-pitched, weak, or absent) — this may indicate illness',
    'Your baby is inconsolable AND has a fever over 100.4°F (38°C) under 3 months, a bulging fontanelle, or is not feeding',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'colic',
    'baby-excessive-crying-no-reason',
    'newborn-fussy-evening-witching-hour',
  ],
  sources: [
    {
      org: 'NCSBS',
      citation:
        'National Center on Shaken Baby Syndrome. The Period of PURPLE Crying.',
      url: 'https://www.purplecrying.info/',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Coping with Colic. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/crying-colic/Pages/Coping-with-Colic.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Infant Colic: Recognition and Treatment. American Family Physician.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/26280141/',
    },
  ],
};
