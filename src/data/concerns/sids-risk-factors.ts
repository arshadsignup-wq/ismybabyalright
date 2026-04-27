import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'sids-risk-factors',
  title: 'SIDS Risk Factors and Safe Sleep',
  category: 'medical',
  searchTerms: [
    'SIDS risk factors',
    'sudden infant death syndrome',
    'safe sleep for babies',
    'SIDS prevention',
    'ABCs of safe sleep',
    'baby sleep safety',
    'reduce SIDS risk',
    'when does SIDS risk decrease',
    'crib safety for newborn',
    'is co-sleeping safe',
    'baby sleeping on back',
    'SIDS age range',
    'how to prevent crib death',
    'SIDS and pacifiers',
  ],
  quickAnswer:
    'SIDS is the unexplained death of a baby under 1 year old during sleep. While the exact cause remains unknown, the risk can be significantly reduced by following safe sleep practices: always place your baby on their back, on a firm flat surface, with no loose bedding, pillows, bumpers, or toys. The ABCs of safe sleep are Alone, on their Back, in a Crib. Room-sharing without bed-sharing for at least the first 6 months reduces SIDS risk by up to 50 percent.',
  byAge: [
    {
      ageRange: '0-1 month',
      context:
        'Place your newborn on their back for every sleep, including naps. Use a firm, flat mattress in a safety-approved crib, bassinet, or play yard with nothing else in the sleep space. No blankets, pillows, crib bumpers, stuffed animals, or sleep positioners. Dress your baby in a sleep sack or wearable blanket rather than loose covers. Room-sharing (but not bed-sharing) is recommended for at least the first 6 months. Having your baby\'s sleep space in your room makes nighttime feeding easier and has been shown to reduce SIDS risk significantly.',
    },
    {
      ageRange: '1-4 months',
      context:
        'This is the period of highest SIDS risk. Most SIDS deaths occur between 1 and 4 months of age. Maintain a safe sleep environment for every sleep. Offer a pacifier at nap time and bedtime - research shows pacifier use is associated with reduced SIDS risk, even if it falls out after your baby falls asleep. Avoid overheating - signs include sweating, damp hair, flushed cheeks, or a chest that feels hot. Dress your baby in one layer more than what an adult would find comfortable.',
    },
    {
      ageRange: '4-6 months',
      context:
        'SIDS risk begins declining after 4 months but remains present. Some babies start rolling during this period. If your baby rolls from back to tummy on their own during sleep, you do not need to reposition them, as long as you always place them on their back initially and the sleep space is free of hazards. Stop swaddling once your baby shows signs of rolling. Transition to a sleep sack with arms free.',
    },
    {
      ageRange: '6-12 months',
      context:
        'While most SIDS cases occur before 6 months, it can still happen up to 12 months. Continue safe sleep guidelines throughout the first year. By this age babies roll freely and may choose their own sleep position. As long as you place your baby on their back at the start of sleep and the crib is clear, you do not need to worry if they roll. Do not introduce pillows, blankets, or stuffed animals before 12 months.',
    },
    {
      ageRange: '12-36 months',
      context:
        'After the first birthday, SIDS risk drops dramatically. You can introduce a thin blanket and small firm pillow after 12 months if desired. Continue to avoid large suffocation hazards. If transitioning to a toddler bed, ensure the bedroom is child-proofed. Risk factors for sleep-related deaths in toddlers include entrapment between the mattress and wall, strangulation from cords, and falls.',
    },
  ],
  whenNormal: [
    'Your baby occasionally turns their head to one side while sleeping on their back',
    'Your baby who can roll independently prefers sleeping on their stomach after being placed on their back',
    'Your baby startles or makes brief grunting sounds during sleep - these are normal infant sleep behaviors',
    'You feel anxious about SIDS even though you are following all safe sleep recommendations - this worry is completely normal for parents',
  ],
  whenToMention: [
    'You have questions about transitioning out of a swaddle or which sleep sack to use',
    'Your baby has a sibling or close family member who died of SIDS, as there may be a slightly increased risk',
    'Your baby was born premature or at low birth weight, which are additional risk factors',
  ],
  whenToActNow: [
    'You find your baby unresponsive, not breathing, or limp during sleep - call 911 immediately and begin infant CPR if trained',
    'Your baby has had an apparent life-threatening event where they stopped breathing, turned blue or pale, or became limp - seek emergency evaluation',
  ],
  relatedMilestones: [
    'gross-motor-rolling',
  ],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-sleeping-face-down', 'cosleeping-safety', 'baby-rolling-onto-stomach-sleep'],
  sources: [
    {
      org: 'AAP',
      citation:
        'Moon RY, et al. Sleep-Related Infant Deaths: Updated 2022 Recommendations. Pediatrics. 2022;150(1):e2022057990.',
      url: 'https://publications.aap.org/pediatrics/article/150/1/e2022057990/188304/Sleep-Related-Infant-Deaths-Updated-2022',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. How to Keep Your Sleeping Baby Safe. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/sleep/Pages/A-Parents-Guide-to-Safe-Sleep.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. About SUID and SIDS.',
      url: 'https://www.cdc.gov/sids/about/index.html',
    },
    {
      org: 'NIH',
      citation:
        'Eunice Kennedy Shriver NICHD. Safe to Sleep Campaign.',
      url: 'https://safetosleep.nichd.nih.gov/',
    },
  ],
};
