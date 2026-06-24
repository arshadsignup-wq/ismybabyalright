import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'cosleeping-family-bed-safety-risk',
  title: 'Co-Sleeping and Family Bed: Safety Risks',
  category: 'sleep',
  searchTerms: [
    'co-sleeping safety',
    'family bed baby',
    'bed sharing danger',
    'is co-sleeping safe',
    'baby sleeping in parents bed',
    'bed sharing SIDS risk',
    'safe co-sleeping',
    'cosleeping suffocation risk',
    'co-sleeping guidelines',
    'bed sharing vs room sharing',
    'family bed safety baby',
  ],
  quickAnswer:
    'The AAP recommends room-sharing (baby in their own sleep space in the parents\' room) but advises against bed-sharing (baby sleeping in the same bed as parents) due to increased risks of SIDS, suffocation, and entrapment. Bed-sharing risks are highest for babies under 4 months, premature babies, and when combined with soft bedding, alcohol, smoking, or sedating medications. If you choose to bed-share, understanding the specific risk factors can help you make the safest possible choice.',
  byAge: [
    {
      ageRange: '0-4 months',
      context:
        'This is the highest-risk period for sleep-related infant deaths. The AAP strongly recommends that babies sleep on a firm, flat surface in their own crib, bassinet, or play yard in the parents\' room. Bed-sharing during this period carries the highest risk, especially for babies born premature or low birth weight. If you fall asleep while feeding in bed (which happens to many exhausted parents), having a firm mattress, no pillows or blankets near the baby, and no other children or pets in the bed reduces risk.',
    },
    {
      ageRange: '4-12 months',
      context:
        'While risk decreases somewhat after 4 months, the AAP continues to recommend separate sleep surfaces throughout the first year. Risk factors that make bed-sharing particularly dangerous at any age include: a parent who smokes, has consumed alcohol or sedating medications, or is extremely fatigued; soft mattresses, pillows, or heavy bedding near the baby; and sleeping on a couch or armchair with a baby. Room-sharing without bed-sharing is associated with a reduced SIDS risk of up to 50%.',
    },
    {
      ageRange: '12-36 months',
      context:
        'After the first year, the risk of SIDS decreases significantly, but suffocation risks from bedding, pillows, and entrapment between a mattress and wall or headboard remain. Many families transition to co-sleeping at this age for practical reasons. If you choose a family bed for your toddler, ensure the mattress is firm and on the floor or in a frame without gaps, remove heavy blankets and extra pillows, and ensure the child cannot fall off the bed. Transition to independent sleep when the family is ready.',
    },
  ],
  whenNormal: [
    'Your baby sleeps in their own crib or bassinet in your room for the first 6-12 months (room-sharing without bed-sharing).',
    'Your toddler over 12 months occasionally sleeps in your bed on a firm mattress without suffocation hazards.',
    'You sometimes fall asleep while nursing but wake up and return the baby to their own sleep space.',
  ],
  whenToMention: [
    'You are regularly falling asleep with your baby in bed unintentionally and want to discuss safer strategies.',
    'You are bed-sharing and want guidance on reducing risks.',
    'You are struggling to get your baby to sleep in their own space and need support.',
  ],
  whenToActNow: [
    'You or your partner has consumed alcohol or sedating medication and the baby is in the bed -- move the baby to their own safe sleep space immediately.',
    'Your baby is sleeping on a couch, recliner, or waterbed, which carry significantly higher suffocation risk than a firm bed.',
    'Your baby is sleeping with soft bedding, pillows, stuffed animals, or bumpers that pose suffocation and entrapment risks.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-sleeping-face-down', 'baby-only-sleeps-being-held', 'sids-anxiety-parental'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Sleep-Related Infant Deaths: Updated 2022 Recommendations for Reducing Infant Deaths. Pediatrics, 2022.',
      url: 'https://publications.aap.org/pediatrics/article/150/1/e2022057990/188304/Sleep-Related-Infant-Deaths-Updated-2022',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Safe Sleep for Babies. CDC.',
      url: 'https://www.cdc.gov/sids/Parents-Caregivers.htm',
    },
    {
      org: 'NIH',
      citation:
        'National Institute of Child Health and Human Development. Safe to Sleep Campaign.',
      url: 'https://safetosleep.nichd.nih.gov/',
    },
  ],
};
