import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'night-waking-frequency-by-age-normal',
  title: 'Night Waking by Age: How Often Is Normal?',
  category: 'sleep',
  searchTerms: [
    'how many times should baby wake at night',
    'normal night wakings by age',
    'baby waking every 2 hours normal',
    'how often do babies wake at night',
    'is 4 night wakings normal at 8 months',
    'baby still waking at night 12 months',
    'normal wake ups baby age chart',
    'baby night waking frequency',
    'when do babies sleep through the night',
    'baby waking more at night than expected',
  ],
  quickAnswer:
    'Night waking is biologically normal for infants and toddlers, yet it remains one of the most stressful aspects of parenting. Research published in Pediatrics shows that "sleeping through the night" (defined as 5+ consecutive hours) is achieved by about 57% of 6-month-olds and only 72% of 12-month-olds, meaning nearly 1 in 3 one-year-olds still wakes at night. General benchmarks: newborns wake every 2-3 hours (stomach capacity requires frequent feeds), 3-6 month-olds may have 1-3 night wakings, 6-12 month-olds typically have 0-2 wakings, and toddlers may have 0-1 wakings. However, these are averages, and there is wide normal variation. A 2018 study in Pediatrics found that 27% of 6-month-olds and 13% of 12-month-olds did not sleep 6 consecutive hours, with no negative effects on development or maternal mood compared to those who did. Night waking does not mean your baby has a "sleep problem" or that you have done something wrong.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Newborns lack a consolidated circadian rhythm and need to eat every 2-3 hours (breastfed) or 3-4 hours (formula-fed). Waking 3-5 times per night is typical and necessary for caloric intake and growth. Around 6-8 weeks, some babies begin having one longer sleep stretch (3-5 hours), usually in the first part of the night. This is normal and does not need to be forced. Never withhold nighttime feeds from a young infant to "train" them to sleep longer, because they need the calories.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Night wakings typically decrease to 1-3 per night. Many babies develop a longer first stretch of 4-6 hours. The 4-month sleep regression is a normal developmental shift where sleep architecture matures, often temporarily increasing night wakings. After 4 months, some pediatricians consider sleep training methods appropriate if parents desire. However, 1-2 night feeds at this age are still biologically expected, and the AAP does not recommend night-weaning before 6 months for most babies.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Most babies are physiologically capable of sleeping longer stretches but many continue to wake 1-2 times. Common causes include: teething, developmental milestones (sitting, crawling, standing), separation anxiety (peaks 8-10 months), illness, and habitual wake-ups. If your baby wakes twice at 8 months but is growing well and happy during the day, this is within the normal range. Research shows no developmental advantage to early consolidated sleep. Your baby is not falling behind because they still wake at night.',
    },
    {
      ageRange: '12-24 months',
      context:
        'About 85-90% of toddlers sleep through most nights by 12-18 months, but occasional wakings remain normal. New teeth (molars at 13-19 months), illness, nightmares, and schedule changes (dropping naps, travel) can all cause temporary regressions. If your toddler was sleeping through the night and begins waking again, this is almost always a phase lasting 1-3 weeks. Toddlers who never slept through the night are still developmentally normal; sleep consolidation timing is largely temperament-driven and not a reflection of parenting quality.',
    },
  ],
  whenNormal: [
    'Newborn waking every 2-3 hours for feeds',
    'A 6-month-old still waking 1-2 times per night',
    'A 12-month-old waking once per night, especially during teething or illness',
    'Sleep patterns that are inconsistent (one good night followed by a rough one)',
    'Your baby\'s pattern not matching a friend\'s baby of the same age, since individual variation is wide',
  ],
  whenToMention: [
    'Your baby\'s night wakings have suddenly and significantly increased (from 1 to 5+) without obvious cause',
    'Your baby seems in pain during night wakings (crying intensely, pulling at ears, or arching)',
    'Night wakings are accompanied by snoring, gasping, or paused breathing that may indicate sleep apnea',
    'You are so sleep-deprived that you feel unsafe driving or caring for your baby, so discuss your own health with your provider',
  ],
  whenToActNow: [
    'Your baby has long pauses in breathing (more than 10-15 seconds) during sleep, followed by gasping, which requires evaluation for obstructive sleep apnea',
    'Your baby is difficult to wake from sleep, unusually limp, or unresponsive: this is a medical emergency',
    'Night wakings are accompanied by persistent fever, vomiting, or refusal to feed, which suggest illness needing evaluation',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'baby-restless-sleep-tossing',
    'excessive-night-feeding',
    'sleep-regression-4-months',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Sleep: What Every Parent Needs to Know. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/sleep/Pages/default.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Mother-Infant Sleep and Nighttime Feeding. Pediatrics, 142(6).',
      url: 'https://pubmed.ncbi.nlm.nih.gov/30420471/',
    },
    {
      org: 'NSF',
      citation:
        'National Sleep Foundation. How Much Sleep Do Babies and Kids Need?',
      url: 'https://www.sleepfoundation.org/children-and-sleep/how-much-sleep-do-kids-need',
    },
  ],
};
