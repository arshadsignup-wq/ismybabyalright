import type { ConcernPage } from '@/data/concerns/types';
export const concern: ConcernPage = {
  slug: 'baby-crying-when-waking-up', title: 'Baby Wakes Up Crying', category: 'behavior',
  searchTerms: ['baby wakes up crying','baby cries when waking','baby screaming after nap','baby upset waking up','toddler wakes up crying','baby cries immediately on waking','baby not happy after sleep','baby grumpy after nap','baby hysterical waking up','baby distressed after sleep'],
  quickAnswer: 'Waking up crying is common in babies and toddlers. In young babies, it usually signals hunger or discomfort. In older babies and toddlers, it often means they woke from a deep sleep stage, are still tired (nap was too short), or are experiencing sleep inertia - the groggy, disoriented feeling that occurs when waking from deep sleep.',
  byAge: [
    { ageRange: '0-6 months', context: 'Young babies commonly cry upon waking because they are hungry, have a wet diaper, or transitioned out of a sleep cycle and cannot resettle. If baby wakes crying after a short nap, they may still be tired. Give them a few minutes to see if they resettle before intervening.' },
    { ageRange: '6-12 months', context: 'Waking happy vs. crying often depends on which sleep stage your baby wakes from. Waking from deep sleep can cause grogginess and crying. If baby consistently wakes crying, check if naps are long enough and wake windows are appropriate.' },
    { ageRange: '12-24 months', context: 'Toddlers who wake from naps crying are often still tired or woke from deep sleep. Give them a few minutes of quiet comfort before expecting them to be ready for activity. Some toddlers need 10-15 minutes to fully wake up.' },
    { ageRange: '2-5 years', context: 'Waking from naps or nighttime sleep crying can be related to nightmares, confusional arousals, or simply being woken during deep sleep. If your child wakes confused, crying, and inconsolable for 5-15 minutes, this may be a confusional arousal and they are not fully awake.' },
  ],
  whenNormal: ['Baby wakes crying occasionally - not every time','Crying resolves quickly with feeding, comfort, or a few minutes to fully wake','Baby is happy and content once fully awake','Waking crying after a short nap - baby was likely still tired'],
  whenToMention: ['Baby wakes screaming inconsolably from every sleep period','Waking crying is accompanied by pain behaviors like pulling at ears or arching','Your baby never wakes happy and always seems distressed upon waking'],
  whenToActNow: ['Baby wakes with a high-pitched or unusual cry that could indicate pain','Baby wakes inconsolable with signs of illness like fever or vomiting'],
  relatedMilestones: [], showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Sleep Habits. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/baby/sleep/Pages/default.aspx' },
    { org: 'NSF', citation: 'National Sleep Foundation. Baby Sleep Cycles. SleepFoundation.org, 2024.', url: 'https://www.sleepfoundation.org/baby-sleep' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Crying and Your Baby. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/baby/crying-colic/Pages/default.aspx' },
  ],
  relatedConcernSlugs: ['confusional-arousals','baby-screaming-in-sleep','short-naps','overtired-baby-signs'],
};
