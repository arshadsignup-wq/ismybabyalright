import type { ConcernPage } from '@/data/concerns/types';
export const concern: ConcernPage = {
  slug: 'baby-sleeping-too-much-older', title: 'Is My Older Baby Sleeping Too Much?', category: 'sleep',
  searchTerms: ['baby sleeping too much','older baby excessive sleep','baby sleeping all day','baby hard to wake','baby oversleeping','baby too much sleep','baby sleeping more than usual','baby lethargic sleeping','toddler sleeping too much','baby suddenly sleeping more'],
  quickAnswer: 'While babies need a lot of sleep, a sudden increase in sleep or difficulty waking can sometimes signal illness, growth spurt, or recovery from sleep debt. If your baby over 4 months is consistently sleeping more than 16-17 hours per day and seems lethargic when awake, mention it to your pediatrician.',
  byAge: [
    { ageRange: '0-3 months', context: 'Newborns sleep a lot (14-17 hours) and this is normal. The only concern is if your baby is not waking to feed or is not gaining weight. Your pediatrician may advise waking to feed every 2-3 hours until birth weight is regained.' },
    { ageRange: '4-8 months', context: 'If your baby suddenly sleeps much more than usual, it may be a growth spurt (lasts 2-3 days), recovering from sleep debt, or the beginning of an illness. Growth spurts resolve quickly. If excessive sleep persists more than a few days without obvious cause, check with your pediatrician.' },
    { ageRange: '8-18 months', context: 'Excessive sleep at this age may be related to illness, a developmental leap, or catching up after disrupted sleep. If your baby is hard to wake, seems groggy when awake, or is not interested in feeding or playing, consult your pediatrician.' },
    { ageRange: '18-36 months', context: 'If your toddler suddenly needs significantly more sleep and seems lethargic, this warrants attention. Common causes include fighting an illness, iron deficiency, or poor-quality sleep due to snoring or sleep apnea.' },
  ],
  whenNormal: ['Baby sleeps more for 2-3 days during a growth spurt','Extra sleep follows a period of poor sleep or illness','Baby is happy and alert when awake despite sleeping more','Extra sleep resolves on its own within a few days'],
  whenToMention: ['Baby consistently sleeps significantly more than age-appropriate amounts','Baby is difficult to wake and seems groggy','Excessive sleep persists more than a few days without obvious cause','Baby is not interested in feeding or playing when awake'],
  whenToActNow: ['Baby is very difficult to wake, seems limp or unresponsive','Excessive sleepiness with fever, poor feeding, or signs of dehydration','Baby has sudden change in consciousness or alertness'],
  relatedMilestones: [], showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Healthy Sleep Habits. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/healthy-living/sleep/Pages/Healthy-Sleep-Habits-How-Many-Hours-Does-Your-Child-Need.aspx' },
    { org: 'NSF', citation: 'National Sleep Foundation. How Much Sleep Do Babies Need? SleepFoundation.org, 2024.', url: 'https://www.sleepfoundation.org/children-and-sleep/how-much-sleep-do-kids-need' },
    { org: 'NIH', citation: 'Hirshkowitz M et al. National Sleep Foundation sleep time duration recommendations. Sleep Health. 2015;1(1):40-43.', url: 'https://pubmed.ncbi.nlm.nih.gov/29073412/' },
  ],
  relatedConcernSlugs: ['baby-sleep-total-hours-concern','baby-not-sleeping-enough','daytime-sleepiness-normal'],
};
