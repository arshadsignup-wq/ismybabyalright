import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'bassinet-vs-crib-safety',
  title: 'Bassinet vs Crib Safety for Babies',
  category: 'sleep',
  searchTerms: [
    'bassinet vs crib safety',
    'when to move baby from bassinet to crib',
    'is bassinet safe for newborn',
    'bassinet weight limit',
    'baby outgrowing bassinet',
    'baby rolling in bassinet',
    'crib safety standards',
    'is my bassinet safe',
    'bassinet mattress safety',
    'portable bassinet safety',
    'pack n play vs crib safety',
    'bedside bassinet safety',
  ],
  quickAnswer:
    'Both bassinets and cribs are safe sleep options for babies when they meet current safety standards (CPSC/ASTM) and are used correctly with a firm, flat mattress and no loose bedding. Bassinets are convenient for the first few months because they are smaller and portable, making room-sharing easier. Most babies transition to a crib between 3-6 months or when they reach the bassinet\'s weight limit, begin rolling, or can push up on hands and knees.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'A bassinet is an ideal choice for this age because it keeps your baby close for nighttime feeds and makes room-sharing easier, which the AAP recommends for at least the first 6 months. Make sure your bassinet has a firm, flat mattress and meets CPSC safety standards. Do not add extra padding, pillows, or bumpers. The same safe sleep rules apply in a bassinet as in a crib: back to sleep, nothing in the sleep space, and no inclined sleepers.',
    },
    {
      ageRange: '3-6 months',
      context:
        'This is typically when babies transition from a bassinet to a crib. Signs that it is time to move include: your baby is approaching the weight limit listed by the manufacturer (usually 15-20 pounds), your baby has started rolling over, your baby seems cramped or is frequently hitting the sides, or your baby can push up on hands and knees. Transition before any of these milestones for safety.',
    },
    {
      ageRange: '6-12 months',
      context:
        'By this age, your baby should be sleeping in a full-size crib or pack-and-play that meets current safety standards. The mattress should be firm and fit snugly with no gaps around the edges. Avoid cribs with drop sides, which are no longer sold new due to safety concerns but may still appear secondhand. Crib slats should be no more than 2 3/8 inches apart. Remove mobiles and hanging toys once your baby can push up on hands and knees.',
    },
  ],
  whenNormal: [
    'Using a bassinet for the first 3-4 months as long as it meets safety standards',
    'Transitioning to a crib when your baby approaches the weight limit or starts rolling',
    'Baby preferring one sleep space over another during the transition period',
    'Using a pack-and-play as a safe alternative to a traditional crib',
    'Some fussiness during the first few nights in a new sleep space',
  ],
  whenToMention: [
    'You are unsure whether your bassinet or crib meets current safety standards',
    'Your baby has outgrown the bassinet but resists sleeping in the crib',
    'You have a secondhand crib and want to verify its safety',
    'You are considering co-sleeping alternatives and want guidance',
  ],
  whenToActNow: [
    'Your baby can roll over or pull up and is still sleeping in a bassinet',
    'You notice any structural damage, loose screws, or instability in the crib or bassinet',
    'Your baby\'s crib or bassinet has been recalled (check cpsc.gov for recall notices)',
    'There are gaps between the mattress and the sides where a baby could become trapped',
  ],
  relatedMilestones: ['1-month', '3-months', '6-months'],
  showSelfReferral: false,
  relatedConcernSlugs: ['sids-risk-factors', 'cosleeping-safety', 'baby-sleeping-face-down', 'baby-rolling-onto-stomach-sleep'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Safe Sleep: Back is Best. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/sleep/Pages/A-Parents-Guide-to-Safe-Sleep.aspx',
    },
    {
      org: 'CPSC',
      citation:
        'U.S. Consumer Product Safety Commission. Safe Sleep for Babies.',
      url: 'https://www.cpsc.gov/SafeSleep',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Sleep-Related Infant Deaths: Updated 2022 Recommendations. Pediatrics.',
      url: 'https://publications.aap.org/pediatrics/article/150/1/e2022057990/188304/Sleep-Related-Infant-Deaths-Updated-2022',
    },
  ],
};
