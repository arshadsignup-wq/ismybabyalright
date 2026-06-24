import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-stroller-nap-safety',
  title: 'Is It Safe for Baby to Nap in a Stroller?',
  category: 'sleep',
  searchTerms: [
    'baby nap in stroller safe',
    'stroller sleep safety',
    'baby sleeping in stroller',
    'stroller nap suffocation risk',
    'baby car seat stroller sleep',
    'baby chin to chest stroller',
    'stroller recline baby sleep',
    'baby falls asleep in stroller',
    'is stroller nap ok',
    'baby positional asphyxia stroller',
  ],
  quickAnswer:
    'While babies commonly fall asleep in strollers, it is not the safest sleep environment. The main risk is positional asphyxia, where a baby\'s chin drops to their chest in a semi-upright position, restricting their airway. If your baby falls asleep in a stroller, recline the seat fully flat if possible, ensure their head is not slumped forward, and supervise them closely. For planned naps, transfer your baby to a firm, flat sleep surface like a crib or bassinet.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Very young babies have poor head control and are at highest risk for positional asphyxia in strollers and car seats. If your newborn falls asleep in a stroller, fully recline the seat so they are lying flat, or use a bassinet-style stroller attachment designed for newborn sleep. Never leave a young baby sleeping in an upright or semi-reclined stroller position. If using a car seat on a stroller frame, limit time and do not let the baby sleep for extended periods. Always check that their chin is not touching their chest.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Babies are developing better head control but are still at risk for positional asphyxia. When your baby falls asleep in the stroller during a walk, recline the seat as flat as possible. Monitor their head position and breathing. Avoid covering the stroller with a blanket, as this can reduce airflow and increase temperature. Brief supervised stroller naps are common and generally okay, but for longer naps, transferring to a crib or bassinet is ideal.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Older babies have better head and neck control, reducing (but not eliminating) positional asphyxia risk. If your baby regularly naps in the stroller, ensure the harness is properly secured so they cannot slump or slide. Keep the stroller in sight and check on your baby frequently. On hot days, be particularly cautious about overheating in strollers. While occasional stroller naps on the go are a reality of parenting, consistent use of a flat sleep surface for naps supports better sleep habits and safety.',
    },
  ],
  whenNormal: [
    'Your baby falls asleep during a stroller walk and you recline the seat flat and supervise them.',
    'Your older baby occasionally naps in a stroller while you are out, properly harnessed and monitored.',
    'You transfer your baby to a crib or bassinet when you arrive home from a stroller outing.',
  ],
  whenToMention: [
    'Your baby only naps in the stroller and refuses to sleep on a flat surface.',
    'You are unsure how to set up your stroller safely for infant use.',
    'Your baby frequently falls asleep in the car seat attached to the stroller frame.',
  ],
  whenToActNow: [
    'Your baby is slumped over with their chin on their chest in the stroller and is difficult to wake.',
    'Your baby has labored breathing, turns blue, or makes gasping sounds while sleeping in the stroller.',
    'Your baby becomes unresponsive while sleeping in the stroller.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-safe-sleep-position-back', 'baby-swing-sleep-danger', 'baby-sleep-positioner-danger', 'baby-travel-car-seat-long-drive'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics - Sleep-Related Infant Deaths: Updated 2022 Recommendations. Pediatrics, 2022.',
      url: 'https://publications.aap.org/pediatrics/article/150/1/e2022057990/188304/Sleep-Related-Infant-Deaths-Updated-2022',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health - Safe to Sleep Campaign.',
      url: 'https://safetosleep.nichd.nih.gov/',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics - Car Seats: Information for Families. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/safety-prevention/on-the-go/Pages/Car-Safety-Seats-Information-for-Families.aspx',
    },
  ],
};
