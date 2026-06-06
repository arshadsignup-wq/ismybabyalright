import type { ConcernPage } from '@/data/concerns/types';
export const concern: ConcernPage = {
  slug: 'baby-sleep-crying-eyes-closed', title: 'Baby Cries with Eyes Closed During Sleep', category: 'sleep',
  searchTerms: ['baby crying eyes closed sleeping','baby crying while asleep','baby whimpering in sleep','baby fussing asleep','baby cries during sleep not awake','baby crying sleep eyes shut','sleep crying baby','baby moaning crying sleep','baby upset during sleep','baby screaming eyes closed'],
  quickAnswer: 'Crying or whimpering with eyes closed during sleep is very common and is part of normal active (REM) sleep. Babies spend much more time in active sleep than adults, and they may cry, moan, grunt, or make facial expressions without being awake. Wait a few minutes before responding - many babies settle back into quiet sleep on their own.',
  byAge: [
    { ageRange: '0-3 months', context: 'Newborns spend about 50% of sleep in active REM sleep, during which they may cry, grunt, smile, or squirm. These sounds do not mean baby is awake or in distress. Wait 2-5 minutes before responding to see if they settle. Picking them up may actually wake them from sleep they would have continued.' },
    { ageRange: '3-8 months', context: 'Brief crying between sleep cycles is normal. As your baby transitions between light and deep sleep, they may cry briefly with eyes closed. If the cry is brief and baby settles within a few minutes, they are simply cycling between sleep stages.' },
    { ageRange: '8-18 months', context: 'Confusional arousals may look like crying while still asleep. Your baby may sit up, cry, and look distressed but is not fully awake. These resolve on their own and your baby will have no memory. Avoid over-stimulating interventions.' },
    { ageRange: '18-36 months', context: 'Night terrors may appear as intense crying with eyes closed or open but unseeing. These happen in deep sleep and are more common in overtired children. The child is not awake and does not need intervention beyond keeping them safe.' },
  ],
  whenNormal: ['Brief crying lasting 1-5 minutes during sleep transitions','Baby settles back to sleep without intervention','Crying occurs during active REM sleep with movements','Baby has no memory of the episode and is fine when fully awake'],
  whenToMention: ['Crying episodes last more than 15-20 minutes regularly','Baby seems to be in pain during sleep episodes','Episodes happen multiple times per night every night'],
  whenToActNow: ['Baby has rhythmic jerking movements during episodes suggesting possible seizure','Baby stops breathing, turns blue, or seems very distressed upon waking'],
  relatedMilestones: [], showSelfReferral: false,
  sources: [
    { org: 'NSF', citation: 'National Sleep Foundation. Baby Sleep Cycles. SleepFoundation.org, 2024.', url: 'https://www.sleepfoundation.org/baby-sleep' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Sleep Habits. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/baby/sleep/Pages/default.aspx' },
    { org: 'NIH', citation: 'Galland BC et al. Normal sleep patterns in infants and children. Sleep Med Rev. 2012;16(3):213-222.', url: 'https://pubmed.ncbi.nlm.nih.gov/21784676/' },
  ],
  relatedConcernSlugs: ['baby-screaming-in-sleep','confusional-arousals','night-terrors','baby-moaning-in-sleep'],
};
