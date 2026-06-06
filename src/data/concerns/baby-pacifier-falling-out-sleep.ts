import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-pacifier-falling-out-sleep',
  title: 'Baby Wakes When Pacifier Falls Out',
  category: 'sleep',
  searchTerms: [
    'pacifier falls out baby wakes up',
    'baby losing pacifier during sleep',
    'pacifier dependency sleep',
    'baby wakes when pacifier drops',
    'replacing pacifier all night',
    'baby can\'t keep pacifier in mouth',
    'pacifier popping out during sleep',
    'when to stop replacing pacifier at night',
    'baby needs pacifier reinserted',
    'pacifier sleep disruption',
  ],
  quickAnswer:
    'If your baby wakes every time the pacifier falls out, you are not alone - this is one of the most common sleep challenges. Most babies learn to reinsert their own pacifier between 7-10 months. Until then, you can scatter multiple pacifiers in the crib, practice hand-to-mouth coordination during the day, or consider weaning from the pacifier at sleep time.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'The AAP recommends pacifier use at sleep time in the first year as it is associated with a reduced risk of SIDS. At this age, it is normal to need to reinsert the pacifier if your baby wakes. Some babies lose the pacifier early in sleep and do not wake, which is perfectly fine - do not reinsert it if your baby is sleeping peacefully without it. If frequent reinsertion is exhausting, know that this phase does improve.',
    },
    {
      ageRange: '4-6 months',
      context:
        'This is often the most challenging age for pacifier dependency because sleep cycles are more defined and your baby wakes more fully between cycles. If the pacifier is gone, they may fully wake and cry. Try putting several pacifiers in the crib so one is always within reach. Some parents attach pacifiers to sleep sacks with pacifier clips designed for safe sleep. You can also practice during the day by guiding your baby\'s hand to the pacifier to build the coordination needed to find it themselves.',
    },
    {
      ageRange: '6-9 months',
      context:
        'Many babies develop the fine motor skills to find and reinsert their own pacifier around 7-8 months. You can help by practicing during playtime - place the pacifier near your baby\'s hand and guide them to pick it up and put it in their mouth. At bedtime, scatter 3-5 pacifiers around the crib. Glow-in-the-dark pacifiers can help your baby find them in a dark room. Once your baby masters this skill, the problem often resolves quickly.',
    },
    {
      ageRange: '9-18 months',
      context:
        'If your baby can find and replace their own pacifier, the sleep disruption should largely resolve. If it persists because your baby is waking and choosing to cry for you rather than looking for the pacifier, consistently guiding them back to find it themselves (rather than popping it in for them) helps reinforce the skill. If you are ready to wean from the pacifier entirely, this can be done gradually or cold turkey, depending on your preference.',
    },
  ],
  whenNormal: [
    'Your baby under 7 months wakes when the pacifier falls out - they have not yet developed the coordination to replace it',
    'You need to reinsert the pacifier 1-3 times per night in a young baby',
    'Your baby can sometimes fall back asleep without the pacifier but sometimes needs it',
    'Your baby over 8 months has learned to find and replace the pacifier independently',
  ],
  whenToMention: [
    'You are reinserting the pacifier 8-10+ times per night and are severely sleep-deprived',
    'Your baby over 10 months still cannot find or replace the pacifier and the disruption is extreme',
    'You want guidance on whether and how to wean from the pacifier',
  ],
  whenToActNow: [
    'Your baby has difficulty breathing, seems to choke, or has pauses in breathing while using the pacifier',
    'Sleep deprivation is making it unsafe for you to care for your baby or drive',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Pacifiers: Satisfying Your Baby\'s Needs. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/crying-colic/Pages/Pacifiers-Satisfying-Your-Babys-Needs.aspx',
    },
    {
      org: 'AAP',
      citation:
        'Moon RY et al. Sleep-Related Infant Deaths: Updated 2022 Recommendations for Reducing Infant Deaths. Pediatrics. 2022;150(1):e2022057990.',
      url: 'https://publications.aap.org/pediatrics/article/150/1/e2022057990/188304/',
    },
    {
      org: 'NSF',
      citation:
        'National Sleep Foundation. Pacifiers and Sleep. SleepFoundation.org, 2024.',
      url: 'https://www.sleepfoundation.org/baby-sleep',
    },
  ],
  relatedConcernSlugs: ['baby-sleep-associations', 'baby-sleep-crutch-dependency', 'frequent-night-wakings'],
};
