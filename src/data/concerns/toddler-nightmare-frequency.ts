import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'toddler-nightmare-frequency',
  title: 'How Often Are Nightmares Normal for Toddlers?',
  category: 'sleep',
  searchTerms: ['toddler frequent nightmares', 'how often nightmares normal toddler', 'toddler bad dreams every night', 'child nightmares frequency', 'toddler waking from scary dream', 'toddler nightmares how many normal', 'recurring nightmares toddler', 'nightly nightmares child', 'toddler screaming from nightmare', 'when are nightmares too frequent'],
  quickAnswer: 'Nightmares are common in children ages 2-6, with a peak around ages 3-4. Occasional nightmares (a few times a month) are a normal part of brain development and emotional processing. Nightmares happening nearly every night or causing significant daytime anxiety warrant attention, as they may be related to stress, scary media, or rarely, an underlying anxiety issue.',
  byAge: [
    { ageRange: '18 months-2 years', context: 'True nightmares are less common at this age because dreams become more vivid as imagination develops. What may look like nightmares might be night terrors (which happen in deep sleep) or simply waking upset from a sleep cycle transition. If your toddler wakes crying, offer comfort and reassurance. They likely cannot describe what scared them at this age.' },
    { ageRange: '2-3 years', context: 'Nightmares begin to increase as imagination blossoms. Your child may wake from a nightmare crying, scared, and seeking comfort. Unlike night terrors, your child will be fully awake and want to be held. Offer comfort, reassure them it was a dream and they are safe, and help them settle back to sleep. Nightmares a few times per month are normal at this age.' },
    { ageRange: '3-5 years', context: 'This is the peak age for nightmares. Your child can now describe what they dreamed about, which can help you identify triggers. Common triggers include scary media (even mild cartoons can seem scary to a toddler), stressful events, overtiredness, and illness. Avoid scary content, maintain a calming bedtime routine, and talk about happy things before sleep. Nightmares 1-2 times per week may still be within normal range.' },
    { ageRange: '5+ years', context: 'Nightmares typically decrease in frequency by this age. If they persist at high frequency, look for stressors in your child\'s life (school, social issues, family changes). Teaching your child to change the ending of a nightmare during the day ("What if the monster turned into a bunny?") is an effective technique called imagery rehearsal that helps reduce nightmare frequency.' },
  ],
  whenNormal: ['Your child has nightmares a few times per month - this is within normal range', 'Nightmares are more frequent during stressful periods and then decrease', 'Your child wakes scared but can be comforted and goes back to sleep', 'Nightmares do not significantly affect your child\'s daytime behavior or willingness to go to bed'],
  whenToMention: ['Nightmares happen nearly every night for more than a few weeks', 'Your child develops significant anxiety about going to sleep due to fear of nightmares', 'Nightmare content seems to relate to a specific traumatic event or frightening experience', 'Nightmares are causing daytime behavioral changes or school refusal'],
  whenToActNow: ['Your child describes nightmares that seem to reference abuse or traumatic experiences you are not aware of', 'Night episodes involve sleepwalking into dangerous situations'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Nightmares and Night Terrors. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/preschool/Pages/Nightmares-and-Night-Terrors.aspx' },
    { org: 'NSF', citation: 'National Sleep Foundation. Nightmares in Children. SleepFoundation.org, 2024.', url: 'https://www.sleepfoundation.org/nightmares/nightmares-in-children' },
    { org: 'NIH', citation: 'Simard V et al. Longitudinal study of bad dreams in preschool-aged children. Child Dev. 2008;79(3):685-701.', url: 'https://pubmed.ncbi.nlm.nih.gov/18489421/' },
  ],
  relatedConcernSlugs: ['toddler-waking-from-nightmares', 'toddler-night-terror-vs-nightmare', 'night-terrors', 'toddler-night-time-fears'],
};
