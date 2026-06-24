import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-co-sleeper-bassinet-safety',
  title: 'Are Co-Sleeper Bassinets and Bedside Sleepers Safe?',
  category: 'sleep',
  searchTerms: [
    'co sleeper bassinet safe',
    'bedside sleeper safety',
    'in bed co sleeper safe',
    'bassinet vs co sleeper',
    'bedside bassinet SIDS risk',
    'co sleeping safely',
    'arms reach co sleeper',
    'baby sidecar sleeper safe',
    'CPSC co sleeper regulations',
    'best bedside sleeper baby',
    'room sharing bassinet',
  ],
  quickAnswer:
    'Bedside sleepers (bassinets that attach to the side of an adult bed) can be safe when they meet CPSC standards and are used correctly. The AAP recommends room-sharing (not bed-sharing) for the first 6-12 months, making a bedside bassinet a convenient option. In-bed co-sleepers (inserts placed on the adult mattress) are not recommended by the AAP due to suffocation risks. Any sleep surface for a baby should be firm, flat, and free of soft bedding.',
  byAge: [
    {
      ageRange: '0-4 months',
      context:
        'This is the highest-risk period for sleep-related infant deaths. The AAP recommends your baby sleep on a firm, flat surface in a safety-approved crib, bassinet, or play yard. Bedside bassinets that meet CPSC standards (ASTM F2906 for bassinets) and attach securely to the adult bed can be a safe and convenient option for nighttime feeding. Ensure there are no gaps between the bassinet and your mattress where the baby could become trapped. Never place pillows, blankets, stuffed animals, or bumper pads in the bassinet.',
    },
    {
      ageRange: '4-6 months',
      context:
        'As your baby begins to roll, you may need to transition from a bassinet to a crib, as many bassinets and bedside sleepers have weight limits of 15-20 pounds and are not designed for rolling babies. Check the manufacturer\'s weight and developmental guidelines. A rolling baby in a small bassinet may press against the sides, creating a suffocation risk. Continue room-sharing with the baby in their own sleep space.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Most babies have outgrown bassinets by this age and should be in a full-size crib. The AAP recommends continuing room-sharing (but not bed-sharing) ideally through 12 months or at minimum through 6 months. A crib in the parents\' room achieves this goal safely. If transitioning to a separate nursery, ensure the crib meets current safety standards and the room has a working baby monitor. Continue following safe sleep practices: alone, on their back, in a clear crib.',
    },
  ],
  whenNormal: [
    'Your baby sleeps in a CPSC-approved bedside bassinet on a firm, flat surface with no loose bedding.',
    'You use a bedside sleeper to facilitate nighttime breastfeeding and return your baby to their own sleep space after feeding.',
    'Your baby is room-sharing with you in their own separate sleep space.',
  ],
  whenToMention: [
    'You are unsure whether your specific co-sleeper or bassinet meets current safety standards.',
    'Your baby has outgrown the weight or developmental limit of their bassinet and you need transition guidance.',
    'You are struggling with exhaustion and considering bed-sharing - discuss safer alternatives with your pediatrician.',
  ],
  whenToActNow: [
    'Your baby was found face-down or with their face pressed against the side of a co-sleeper or bassinet.',
    'You find a gap between the bedside sleeper and your mattress where your baby could become wedged.',
    'Your baby has stopped breathing, turned blue, or is unresponsive in any sleep environment - call 911 and begin CPR.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'baby-crib-bumper-danger',
    'baby-crib-mattress-firmness',
    'baby-sleeping-face-down',
    'baby-car-seat-sleep-danger',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Sleep-Related Infant Deaths: Updated 2022 Recommendations for Reducing Infant Deaths in the Sleep Environment. Pediatrics, 2022.',
      url: 'https://publications.aap.org/pediatrics/article/150/1/e2022057990/188304',
    },
    {
      org: 'NIH',
      citation:
        'Consumer Product Safety Commission. Safe Sleep for Babies.',
      url: 'https://www.cpsc.gov/SafeSleep',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Safe Sleep for Babies.',
      url: 'https://www.cdc.gov/sids/about/index.html',
    },
  ],
};
