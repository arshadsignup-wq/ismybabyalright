import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'newborn-eye-rolling-during-sleep',
  title: 'Baby\'s Eyes Rolling Back During Sleep',
  category: 'medical',
  searchTerms: ['baby eyes rolling back sleep', 'newborn eyes rolling up', 'baby eyes go back when sleeping', 'newborn eye rolling normal', 'baby eyes white during sleep', 'newborn eyes flutter sleep', 'baby eyes half open sleep', 'eyes rolling back baby', 'newborn REM eye movement', 'baby eyes going back in head sleep'],
  quickAnswer: 'It is completely normal for babies\' eyes to roll back, flutter, or appear to show the whites of their eyes as they fall asleep or during light sleep. This is a normal part of the transition between sleep stages and active (REM) sleep. It is not a sign of seizures when it occurs only during sleep transitions.',
  byAge: [
    { ageRange: '0-1 month', context: 'Newborns spend a large portion of their sleep in active (REM) sleep, during which rapid eye movements are normal. As baby drifts off to sleep, you may see the eyes roll upward or to the side, the eyelids flutter, or the whites of the eyes show through partially open lids. This is completely normal and is part of the normal transition from wakefulness to sleep. Newborns often sleep with their eyelids slightly open, which can be alarming but is also normal. These eye movements during sleep are not seizures. Seizures typically involve other signs: sustained rhythmic movements, stiffening, changes in breathing, or occurring while baby is clearly awake.' },
    { ageRange: '1-3 months', context: 'Eye rolling and fluttering during sleep continues to be normal. As sleep patterns begin to organize, you may notice these movements more during light sleep phases. Baby may also smile, twitch, or make sucking movements during REM sleep. All of these are normal sleep behaviors.' },
    { ageRange: '3-6 months', context: 'Sleep patterns are becoming more organized, with more deep sleep and less REM sleep proportionally. Eye rolling during sleep transitions is still normal but may be less noticeable. Eye movements while baby is awake should be tracking and coordinated by this age.' },
    { ageRange: '6-12 months', context: 'Sleep architecture continues to mature. Occasional eye movements during sleep are still normal. If you notice eye rolling while baby is awake and alert, this should be evaluated.' },
  ],
  whenNormal: ['Eyes rolling back or showing whites as baby falls asleep', 'Rapid eye movements visible under closed or partially open eyelids during sleep', 'Eye fluttering during light sleep or REM sleep', 'Baby sleeps with eyelids slightly open'],
  whenToMention: ['Eye rolling that occurs while baby is awake and alert', 'Episodes of sustained upward eye deviation that seem abnormal', 'You are having difficulty distinguishing sleep eye movements from possible seizures'],
  whenToActNow: ['Eye rolling accompanied by rhythmic body movements, stiffening, or apnea while baby is awake', 'Baby is unresponsive during or after episodes of eye rolling', 'Sustained eye deviation with changes in breathing, color, or consciousness'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Infant Sleep and Development. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/baby/sleep/Pages/default.aspx' },
    { org: 'NIH', citation: 'National Library of Medicine. Normal Infant Sleep Physiology. Sleep Medicine Reviews.', url: 'https://pubmed.ncbi.nlm.nih.gov/' },
  ],
  relatedConcernSlugs: ['newborn-sleep-sounds-noisy', 'newborn-irregular-sleep-patterns', 'jitteriness-vs-seizures'],
};
