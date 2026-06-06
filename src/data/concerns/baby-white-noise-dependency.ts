import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-white-noise-dependency',
  title: 'Is My Baby Dependent on White Noise?',
  category: 'sleep',
  searchTerms: ['baby dependent white noise','white noise machine dependency','baby can\'t sleep without white noise','white noise addiction baby','weaning off white noise','baby needs sound machine sleep','is white noise bad for babies','baby relying on white noise','white noise habit baby','should I use white noise baby'],
  quickAnswer: 'White noise is one of the easiest and most harmless sleep associations. Unlike rocking or feeding to sleep, it does not require your intervention. Research supports its use for improving infant sleep. There is no medical reason to stop if it works for you. To wean, gradually reduce volume over several weeks.',
  byAge: [
    { ageRange: '0-3 months', context: 'White noise mimics womb sounds. Newborns often sleep better with white noise at a moderate volume (50-65 dB). Place the machine across the room, not next to the crib.' },
    { ageRange: '3-12 months', context: 'Continued use is perfectly fine. It masks household sounds and provides a consistent sleep cue. To wean, gradually turn volume down over 1-2 weeks. Many families find it more helpful for themselves than essential for the baby.' },
    { ageRange: '12-24 months', context: 'White noise remains safe and easy. Research at appropriate volumes shows no hearing concerns. If you forget the machine while traveling, your toddler may sleep fine without it or you can use a phone app.' },
    { ageRange: '2-3 years', context: 'Many preschoolers and adults use white noise. There is no developmental deadline to stop. To transition away, decrease volume slightly each night over 2-3 weeks.' },
  ],
  whenNormal: ['Your baby sleeps better with white noise','Your baby can sometimes sleep without it but prefers it','You use moderate volume placed across the room','Your baby sleeps through the noise ending without waking'],
  whenToMention: ['The volume needed seems to be increasing over time','Your baby needs extremely loud white noise to settle','You have concerns about your baby\'s hearing or sound responsiveness'],
  whenToActNow: ['Your baby does not startle or respond to loud sounds','You are using very high volumes to mask labored breathing or snoring'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Sound Machines and Baby Sleep. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/baby/sleep/Pages/default.aspx' },
    { org: 'NIH', citation: 'Spencer JA et al. White noise and sleep induction. Arch Dis Child. 1990;65(1):135-137.', url: 'https://pubmed.ncbi.nlm.nih.gov/2405784/' },
    { org: 'NSF', citation: 'National Sleep Foundation. White Noise for Baby Sleep. SleepFoundation.org, 2024.', url: 'https://www.sleepfoundation.org/noise-and-sleep/white-noise' },
  ],
  relatedConcernSlugs: ['baby-sleep-environment-optimal','baby-sleep-crutch-dependency','baby-sleep-associations'],
};
