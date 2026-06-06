import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-swaddle-weaning-difficulty',
  title: 'Baby Having a Hard Time Leaving the Swaddle',
  category: 'sleep',
  searchTerms: ['swaddle weaning difficulty','baby hates arms out','transitioning from swaddle','baby won\'t sleep without swaddle','swaddle transition problems','stop swaddling baby','when to stop swaddling','baby wakes without swaddle','swaddle weaning tips','baby startle reflex swaddle'],
  quickAnswer: 'Transitioning from the swaddle can be challenging, but it must happen once your baby shows signs of rolling (usually around 3-4 months). A gradual approach works best: try one arm out for a few nights, then both arms. Transition products like arms-up sleep sacks can bridge the gap. Most babies adjust within 1-2 weeks.',
  byAge: [
    { ageRange: '2-3 months', context: 'If your baby shows early signs of rolling, begin the transition even if they seem young. Start by swaddling with one arm out for 3-4 nights, then both arms out. The Moro (startle) reflex is still active and may cause some waking. A sleep sack with a snug fit around the torso can provide a similar contained feeling without restricting arms.' },
    { ageRange: '3-4 months', context: 'This is the most common transition age. The startle reflex is beginning to integrate, making the transition easier. Options include cold turkey (straight to a sleep sack), one arm at a time, or a transitional product with arms-up design. Expect a few rough nights. Your baby may startle themselves awake more frequently, but this usually improves within 3-7 nights.' },
    { ageRange: '4-5 months', context: 'If your baby is rolling, stop swaddling immediately for safety. Even if it means a few rough nights, an unswaddled rolling baby is much safer than a swaddled one. At this age, your baby has more self-soothing ability and may discover thumb sucking or face rubbing to replace the swaddle comfort.' },
    { ageRange: '5+ months', context: 'If your baby was still being swaddled at this age, transitioning now is essential. The adjustment may be quicker than you expect since older babies have more developed self-soothing skills. A sleep sack provides warmth and a sense of containment without restricting movement.' },
  ],
  whenNormal: ['Your baby sleeps worse for 3-7 nights after dropping the swaddle','Your baby startles themselves awake more frequently initially','A gradual transition (one arm at a time) takes 1-2 weeks','Your baby discovers their hands and uses them to self-soothe'],
  whenToMention: ['Your baby cannot sleep at all without the swaddle after 2 weeks of consistent effort','Your baby seems to have an unusually strong or persistent startle reflex beyond 5 months','Sleep disruption from the transition is severe and not improving'],
  whenToActNow: ['Your baby is rolling while still being swaddled - stop swaddling immediately','Your baby gets into an unsafe position because their arms are restricted'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Swaddling: Is it Safe? HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/baby/diapers-clothing/Pages/Swaddling-Is-it-Safe.aspx' },
    { org: 'AAP', citation: 'Moon RY et al. Sleep-Related Infant Deaths: Updated 2022 Recommendations. Pediatrics. 2022;150(1):e2022057990.', url: 'https://publications.aap.org/pediatrics/article/150/1/e2022057990/188304/' },
    { org: 'NIH', citation: 'van Sleuwen BE et al. Swaddling: a systematic review. Pediatrics. 2007;120(4):e1097-e1106.', url: 'https://pubmed.ncbi.nlm.nih.gov/17908730/' },
  ],
  relatedConcernSlugs: ['baby-sleep-sack-transition','rolling-in-sleep','baby-rolling-in-crib-stuck'],
};
