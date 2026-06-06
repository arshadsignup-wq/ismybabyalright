import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-sleep-total-hours-concern',
  title: 'Is My Baby Getting Enough Total Sleep?',
  category: 'sleep',
  searchTerms: ['baby total sleep hours','how much sleep baby need','baby not sleeping enough hours','total sleep by age','baby sleep amount worry','recommended sleep hours baby','sleep hours chart baby','is my baby sleeping enough','baby getting enough sleep','total daily sleep baby'],
  quickAnswer: 'Sleep needs vary significantly between individual babies, but general guidelines are: newborns 14-17 hours, 4-12 months 12-16 hours, 1-2 years 11-14 hours, 3-5 years 10-13 hours. These include naps. If your baby falls an hour or so outside these ranges but is happy, developing well, and functioning well during the day, they are likely getting enough sleep for their needs.',
  byAge: [
    { ageRange: '0-3 months', context: 'Newborns need 14-17 hours of total sleep per 24 hours. This is spread across many short sleep periods. Wide variation is normal - some newborns sleep 11 hours and others 19 hours. Focus on your baby\'s mood and feeding rather than hitting an exact number.' },
    { ageRange: '4-12 months', context: 'Babies need about 12-16 hours including naps. By 6 months, 10-12 hours overnight plus 2-4 hours of daytime naps is typical. If your baby is on the lower end but is happy, alert, and meeting milestones, they may simply need less sleep.' },
    { ageRange: '12-24 months', context: 'Toddlers need about 11-14 hours including one nap. Nighttime sleep of 10-12 hours plus a 1-3 hour nap is typical. Some toddlers thrive on less and others need more.' },
    { ageRange: '2-5 years', context: 'Preschoolers need 10-13 hours. As napping drops off, nighttime sleep should increase. If your child seems well-rested during the day, they are getting enough regardless of the exact number.' },
  ],
  whenNormal: ['Your baby falls within the recommended range for their age','Your baby is slightly outside the range but happy and thriving','Sleep amounts vary slightly from day to day','Your baby seems well-rested and alert during awake periods'],
  whenToMention: ['Your baby consistently sleeps significantly less than recommended and seems chronically overtired','Your baby sleeps much more than expected and seems lethargic','You are tracking sleep obsessively and it is causing you anxiety'],
  whenToActNow: ['Your baby is excessively sleepy, difficult to wake, or seems lethargic','Your baby is not sleeping at all and seems distressed'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Healthy Sleep Habits. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/healthy-living/sleep/Pages/Healthy-Sleep-Habits-How-Many-Hours-Does-Your-Child-Need.aspx' },
    { org: 'NSF', citation: 'National Sleep Foundation. How Much Sleep Do Babies Need? SleepFoundation.org, 2024.', url: 'https://www.sleepfoundation.org/children-and-sleep/how-much-sleep-do-kids-need' },
    { org: 'NIH', citation: 'Hirshkowitz M et al. National Sleep Foundation sleep time duration recommendations. Sleep Health. 2015;1(1):40-43.', url: 'https://pubmed.ncbi.nlm.nih.gov/29073412/' },
  ],
  relatedConcernSlugs: ['baby-not-sleeping-enough','baby-sleeping-too-much-older','ideal-bedtime-by-age'],
};
