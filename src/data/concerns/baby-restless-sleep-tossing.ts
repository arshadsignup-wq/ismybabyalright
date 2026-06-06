import type { ConcernPage } from '@/data/concerns/types';
export const concern: ConcernPage = {
  slug: 'baby-restless-sleep-tossing', title: 'Baby Is Restless and Tossing All Night', category: 'sleep',
  searchTerms: ['baby restless sleep','baby tossing turning all night','baby moving around crib','baby restless sleeper','baby thrashing in sleep','baby rolling around crib all night','baby cant get comfortable sleep','baby fidgeting in sleep','restless baby at night','baby squirming sleep'],
  quickAnswer: 'Some degree of restless sleep is normal, especially as babies learn to roll and move. Babies cycle through light and deep sleep, and movement during light sleep phases is common. However, consistently very restless sleep with frequent arousals may be related to discomfort, sleep environment, or rarely, sleep-disordered breathing.',
  byAge: [
    { ageRange: '0-4 months', context: 'Newborns are naturally restless sleepers with grunting, squirming, and brief movements. This is called active sleep (REM) and makes up about 50% of their sleep. It does not mean they are uncomfortable.' },
    { ageRange: '4-8 months', context: 'As babies learn to roll and move, they may move extensively during sleep. This is often worse during developmental leaps. Ensure the sleep space is safe with no loose items.' },
    { ageRange: '8-18 months', context: 'Movement during sleep is normal. Babies may end up in every corner of the crib. If restlessness is accompanied by snoring, mouth breathing, or sweating, mention it to your pediatrician.' },
    { ageRange: '18-36 months', context: 'Some children are naturally active sleepers. If your toddler seems restless but wakes refreshed, it is likely their normal pattern. Persistent restlessness with daytime sleepiness may warrant evaluation.' },
  ],
  whenNormal: ['Baby moves around the crib but stays asleep','Restlessness during light sleep phases with periods of still deep sleep','Baby wakes refreshed despite apparent restlessness','Movement increases during developmental milestones'],
  whenToMention: ['Baby is restless all night and wakes frequently seeming uncomfortable','Restless sleep is accompanied by snoring or mouth breathing','Baby seems tired during the day despite sleeping adequate hours'],
  whenToActNow: ['Baby has pauses in breathing during restless sleep','Baby has rhythmic jerking movements that could indicate seizure activity'],
  relatedMilestones: [], showSelfReferral: false,
  sources: [
    { org: 'NSF', citation: 'National Sleep Foundation. Baby Sleep Patterns. SleepFoundation.org, 2024.', url: 'https://www.sleepfoundation.org/baby-sleep' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Sleep Habits. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/healthy-living/sleep/Pages/default.aspx' },
    { org: 'NIH', citation: 'Galland BC et al. Normal sleep patterns in infants and children. Sleep Med Rev. 2012;16(3):213-222.', url: 'https://pubmed.ncbi.nlm.nih.gov/21784676/' },
  ],
  relatedConcernSlugs: ['rolling-in-sleep','snoring-in-babies-toddlers','baby-sweating-during-sleep'],
};
