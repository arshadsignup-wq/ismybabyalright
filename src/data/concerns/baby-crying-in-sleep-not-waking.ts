import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-crying-in-sleep-not-waking',
  title: 'My Baby Cries in Their Sleep Without Waking Up',
  category: 'sleep',
  searchTerms: [
    'baby crying in sleep not waking',
    'baby whimpering in sleep',
    'baby moaning in sleep',
    'newborn crying while asleep',
    'baby sleep crying normal',
    'baby screams in sleep then stops',
    'baby fussing in sleep',
    'sleep crying baby meaning',
    'baby cry out in sleep',
    'baby restless sleep noises',
  ],
  quickAnswer:
    'Babies commonly cry, whimper, moan, or fuss during sleep without fully waking, and this is usually completely normal. Babies spend more time in active (REM) sleep than adults, and during these phases they may make sounds, move their limbs, grimace, or cry briefly before settling back into deeper sleep. Intervening too quickly can actually wake a baby who would have settled on their own. Wait a moment to see if they resettle before picking them up.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Newborns spend up to 50% of their sleep in active REM sleep, during which they may twitch, smile, frown, suck, and cry without being awake. These sleep sounds and movements are a normal part of brain development. Before rushing to pick up your baby when you hear them cry in their sleep, pause for 30-60 seconds to see if they settle. Many parents discover that their baby was never truly awake. However, if the crying escalates and your baby opens their eyes and appears distressed, they may need feeding, a diaper change, or comfort.',
    },
    {
      ageRange: '3-12 months',
      context:
        'Sleep crying continues to be common in this age range, particularly during sleep transitions between cycles. Many babies cry briefly between sleep cycles (every 45-60 minutes) as they partially wake before entering the next cycle. This is a normal part of learning to connect sleep cycles. If you wait a few minutes, many babies will resettle themselves. Teething, illness, and developmental leaps can temporarily increase nighttime fussiness and sleep crying.',
    },
    {
      ageRange: '12-36 months',
      context:
        'Toddlers may cry, talk, or even scream during sleep. This can be related to dreams, night terrors (confusional arousals), or processing the day\'s events. Night terrors, which are different from nightmares, typically involve screaming or crying while still asleep and the child does not remember the episode. They are most common between 18 months and 6 years. During a night terror, the best approach is to ensure your child is safe but not try to wake them, as this can prolong the episode.',
    },
  ],
  whenNormal: [
    'Your baby whimpers, moans, or cries briefly during sleep but settles within a few minutes without intervention.',
    'Your baby makes active sleep sounds - grunting, sighing, squeaking - while their eyes remain closed.',
    'Your baby cries between sleep cycles but goes back to sleep on their own.',
    'These episodes are brief (a few seconds to a few minutes) and do not happen continuously throughout the night.',
  ],
  whenToMention: [
    'Your baby cries extensively during sleep most nights and seems exhausted during the day.',
    'Sleep crying is accompanied by unusual movements such as body stiffening, rhythmic jerking, or breath-holding.',
    'Your toddler has frequent, intense night terror episodes that are disruptive to the family.',
  ],
  whenToActNow: [
    'Your baby has episodes of rigid body posturing, rhythmic jerking, or color changes during sleep crying - these could indicate seizure activity.',
    'Your baby is making choking or gasping sounds during sleep.',
    'Your baby stops breathing for more than 20 seconds during sleep or has pauses in breathing that are accompanied by color change.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'baby-screaming-in-sleep',
    'night-terrors',
    'confusional-arousals',
    'baby-catnapping-only-20-minutes',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Understanding Baby\'s Sleep Patterns. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/sleep/Pages/Understanding-Sleep-Patterns.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Infant Sleep and Development. Sleep Medicine Reviews, 2020.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/32109832/',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Night Terrors and Nightmares. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/toddler/Pages/Nightmares-and-Night-Terrors.aspx',
    },
  ],
};
