import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'cosleeping-safety',
  title: 'Co-Sleeping Safety - Risks and Guidelines',
  category: 'sleep',
  searchTerms: [
    'cosleeping safety',
    'co-sleeping with baby',
    'is cosleeping safe',
    'bed sharing with baby',
    'safe co-sleeping guidelines',
    'cosleeping and SIDS',
    'baby sleeping in parents bed',
    'bed sharing risks baby',
    'room sharing vs bed sharing',
    'safe sleep 7 cosleeping',
    'cosleeping with newborn',
    'how to cosleep safely',
    'cosleeping benefits and risks',
  ],
  quickAnswer:
    'The AAP recommends room-sharing (baby sleeps on their own surface in the same room) but not bed-sharing for the first year. Bed-sharing increases the risk of SIDS and suffocation, especially in the first 4 months, with premature babies, when parents smoke, drink, or take sedating medications, and on soft surfaces. Many families do end up bed-sharing at some point - if you choose to or find yourself doing so, knowing the risk factors and how to reduce them is important for your baby\'s safety.',
  byAge: [
    {
      ageRange: '0-4 months',
      context:
        'The first 4 months carry the highest risk for bed-sharing-related infant deaths. The safest arrangement is a bassinet or crib next to your bed where you can see, hear, and reach your baby easily without sharing the same sleep surface. If you are breastfeeding and worried about falling asleep during feeds, prepare your bed as if you planned to bed-share: firm mattress, no pillows or blankets near baby, no gap between mattress and headboard. This way, if you doze off, the environment is as safe as possible.',
    },
    {
      ageRange: '4-6 months',
      context:
        'Risk decreases after 4 months but bed-sharing still carries elevated risk compared to a separate sleep surface. Room-sharing continues to be the recommended arrangement. If you bed-share, the "Safe Sleep Seven" guidelines (from a breastfeeding-supportive perspective) suggest that risk is lowest when: the mother is breastfeeding, is a non-smoker, is sober, baby is on their back on a firm mattress with no pillows or blankets near them, and baby is healthy and full-term. The AAP still recommends against bed-sharing at any age in the first year.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As babies become stronger and more mobile, some risks of bed-sharing decrease (they can turn their head and push away from obstructions), but other risks emerge (rolling off the bed, getting trapped between mattress and wall). Continue room-sharing if possible. If you are ready to transition baby to their own room, many families find this easier after 6 months. Ensure the crib meets current safety standards and the room is child-proofed.',
    },
    {
      ageRange: '12-36 months',
      context:
        'After 12 months, SIDS risk is extremely low. Bed-sharing with a toddler is a personal family choice. Many cultures worldwide practice family co-sleeping through toddlerhood and beyond. If your toddler co-sleeps, ensure the bed is safe: firm mattress on the floor or with guardrails, no gaps where your child could become trapped, no heavy blankets or soft pillows near young toddlers. Transitioning to an independent sleep arrangement can happen whenever your family is ready.',
    },
  ],
  whenNormal: [
    'Your baby sleeps in a bassinet or crib in your room for the first 6-12 months (recommended room-sharing)',
    'You sometimes doze briefly during nighttime nursing and want to make your bed safer',
    'Your toddler over 12 months occasionally ends up in your bed after a nightmare or illness',
    'You choose to room-share beyond 12 months because it works for your family',
  ],
  whenToMention: [
    'You are regularly falling asleep unintentionally while feeding your baby in bed and want guidance on safer practices',
    'You want to transition your baby from your bed to a crib but are struggling with the process',
    'You are co-sleeping because your baby refuses all other sleep arrangements and you need help finding alternatives',
  ],
  whenToActNow: [
    'Your baby is sleeping on a couch, recliner, or other soft surface with an adult - move them to a firm flat surface immediately. These are the most dangerous sleep environments.',
    'Anyone who has consumed alcohol, taken sedating medications, or smoked is sleeping in the same bed as the baby',
    'Your baby is found face-down in soft bedding and is not responsive or is having difficulty breathing - call 911',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['sids-risk-factors', 'cosleeping-to-crib-transition', 'baby-only-sleeps-being-held'],
  sources: [
    {
      org: 'AAP',
      citation:
        'Moon RY, et al. Sleep-Related Infant Deaths: Updated 2022 Recommendations. Pediatrics. 2022.',
      url: 'https://publications.aap.org/pediatrics/article/150/1/e2022057990/188304/Sleep-Related-Infant-Deaths-Updated-2022',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. How to Keep Your Sleeping Baby Safe. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/sleep/Pages/A-Parents-Guide-to-Safe-Sleep.aspx',
    },
    {
      org: 'NIH',
      citation:
        'Eunice Kennedy Shriver NICHD. Safe to Sleep Campaign.',
      url: 'https://safetosleep.nichd.nih.gov/',
    },
  ],
};
