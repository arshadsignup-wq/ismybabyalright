import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'toddler-night-terror-vs-nightmare',
  title: 'Night Terrors vs. Nightmares: How to Tell Them Apart',
  category: 'sleep',
  searchTerms: ['night terror vs nightmare', 'difference between night terror and nightmare', 'toddler screaming asleep', 'child inconsolable at night', 'night terror or bad dream', 'toddler thrashing in sleep screaming', 'how to tell night terror from nightmare', 'child doesn\'t remember waking at night', 'toddler eyes open but asleep screaming', 'sleep terror toddler'],
  quickAnswer: 'Night terrors and nightmares are very different events. Nightmares happen during REM sleep (second half of the night), your child wakes up fully and can be comforted. Night terrors happen during deep non-REM sleep (first third of the night), your child appears awake but is actually asleep and cannot be comforted. Night terrors look scarier to parents but are harmless - your child will not remember them.',
  byAge: [
    { ageRange: '12-24 months', context: 'Night terrors can begin as early as 18 months but are uncommon before age 2. They typically happen 1-3 hours after falling asleep and may involve screaming, thrashing, sitting up, or appearing terrified with eyes open. The key difference from nightmares: your child is not actually awake and will push you away if you try to comfort them. The best response is to keep them safe, stay nearby, and wait for it to pass (usually 5-20 minutes). They will have no memory of it.' },
    { ageRange: '2-4 years', context: 'Both nightmares and night terrors peak during this period. To tell them apart: Nightmares happen in the second half of the night, your child wakes up scared and wants comfort, and may describe the dream. Night terrors happen in the first few hours of sleep, your child seems awake but is unresponsive to you, may thrash or scream inconsolably, and then suddenly falls back into quiet sleep with no memory. Overtiredness is the top trigger for night terrors.' },
    { ageRange: '4-6 years', context: 'Nightmares remain common but night terrors begin to decrease for most children. If night terrors are frequent (several times per week), the most effective prevention is ensuring your child is getting enough total sleep, as sleep deprivation is the primary trigger. Some parents find that briefly waking their child 15-30 minutes before the typical terror time (called scheduled awakening) can prevent episodes.' },
    { ageRange: '6+ years', context: 'Night terrors typically resolve by age 6-7. Nightmares may persist but should be infrequent. If your child continues to have frequent night terrors beyond age 6, or if they occur along with sleepwalking, mention this to your pediatrician to discuss whether further evaluation is needed.' },
  ],
  whenNormal: ['Your child has occasional nightmares that respond to comfort', 'Night terrors happen once or twice a month and your child has no memory the next day', 'Night terrors occur during periods of overtiredness or schedule disruption', 'Both nightmares and night terrors are in the expected age range (2-6 years)'],
  whenToMention: ['Night terrors happen several times per week', 'Night terrors last longer than 30 minutes', 'You are unsure whether your child is having night terrors, nightmares, or seizures', 'Night terrors are accompanied by sleepwalking into dangerous areas'],
  whenToActNow: ['During an episode, your child has rhythmic jerking movements, stiffening, or lip smacking that could indicate a seizure', 'Your child is injuring themselves during night terror episodes'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Nightmares and Night Terrors. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/preschool/Pages/Nightmares-and-Night-Terrors.aspx' },
    { org: 'NSF', citation: 'National Sleep Foundation. Night Terrors. SleepFoundation.org, 2024.', url: 'https://www.sleepfoundation.org/parasomnias/night-terrors' },
    { org: 'NIH', citation: 'Petit D et al. Dyssomnias and parasomnias in early childhood. Pediatrics. 2007;119(5):e1016-e1025.', url: 'https://pubmed.ncbi.nlm.nih.gov/17438080/' },
  ],
  relatedConcernSlugs: ['night-terrors', 'toddler-waking-from-nightmares', 'toddler-nightmare-frequency', 'confusional-arousals'],
};
