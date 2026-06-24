import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-swaddle-transition-age',
  title: 'When and How to Stop Swaddling Your Baby',
  category: 'sleep',
  searchTerms: [
    'when to stop swaddling baby',
    'swaddle transition age',
    'baby rolling swaddle danger',
    'how to transition from swaddle',
    'swaddle to sleep sack',
    'baby breaking out of swaddle',
    'swaddle transition tips',
    'when to stop swaddling arms',
    'swaddle age limit',
    'baby fighting swaddle',
    'transition swaddle products',
  ],
  quickAnswer:
    'You should stop swaddling your baby at the first sign of rolling over, which typically occurs around 3-4 months, though some babies roll as early as 2 months. A swaddled baby who rolls to their stomach is at increased risk of suffocation because their arms are restrained. Transition to a wearable blanket (sleep sack) that allows free arm movement. The transition can be done gradually (one arm out, then both) or all at once.',
  byAge: [
    {
      ageRange: '0-2 months',
      context:
        'Swaddling is generally safe and helpful for newborns when done correctly. It mimics the snug feeling of the womb and can reduce the Moro (startle) reflex that wakes babies. Always place swaddled babies on their backs. The swaddle should be snug around the arms and chest but loose around the hips to allow healthy hip development. Watch for early signs of rolling, as some babies roll as early as 2 months. Stop swaddling immediately if your baby shows any attempt to roll.',
    },
    {
      ageRange: '2-4 months',
      context:
        'This is the typical window for transitioning out of the swaddle. Signs it is time to stop include: attempting to roll over, breaking arms out of the swaddle regularly, or increased fussiness in the swaddle. Transition approaches include: going cold turkey to a sleep sack, gradually freeing one arm at a time over several nights, or using transitional products like the Merlin Magic Sleepsuit or Zipadee-Zip. Expect some sleep disruption for 3-7 nights during the transition. The Moro reflex is usually fading by this age, making the transition easier.',
    },
    {
      ageRange: '4-6 months',
      context:
        'If your baby is still swaddled at 4 months and rolling, transition immediately - this is a safety priority. Most babies adjust to sleeping unswaddled within a week. A sleep sack provides warmth and a sense of containment without restricting arm movement. Continue following safe sleep practices: back sleeping on a firm surface with nothing else in the crib. If your baby has a very difficult transition, maintain consistent bedtime routines and try increased white noise, which can help replace the calming effect of the swaddle.',
    },
  ],
  whenNormal: [
    'Your baby takes a few nights to adjust to sleeping without a swaddle - short-term sleep disruption is expected.',
    'Your baby\'s startle reflex causes occasional wake-ups during the transition, but this improves within a week.',
    'Your baby prefers to sleep with arms up or out once unswaddled - this is a common and normal preference.',
  ],
  whenToMention: [
    'Your baby is having extreme difficulty sleeping after the swaddle transition and it has been more than 2 weeks.',
    'You are unsure when your specific baby should stop swaddling based on their development.',
    'Your baby was premature and you want guidance on appropriate swaddle transition timing.',
  ],
  whenToActNow: [
    'Your baby has rolled over while swaddled - stop swaddling immediately and transition to a sleep sack.',
    'Your baby is sleeping face-down while swaddled and unable to lift their head or roll back.',
    'Your baby shows signs of hip dysplasia (clicking hips, uneven leg folds) that may be related to swaddling technique.',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-startle-reflex-moro-persistent', 'baby-safe-sleep-position-back', 'baby-room-temperature-sleep', 'baby-sids-risk-reduction-checklist'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics - Swaddling: Is It Safe? HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/diapers-clothing/Pages/Swaddling-Is-it-Safe.aspx',
    },
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
  ],
};
