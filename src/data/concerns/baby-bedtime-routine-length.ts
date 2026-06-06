import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-bedtime-routine-length',
  title: 'How Long Should the Bedtime Routine Be?',
  category: 'sleep',
  searchTerms: ['bedtime routine length','how long bedtime routine baby','bedtime routine too long','ideal bedtime routine time','short bedtime routine','bedtime routine duration','bedtime routine 30 minutes','quick bedtime routine','how many minutes bedtime routine','optimal bedtime routine length'],
  quickAnswer: 'An ideal bedtime routine for babies and toddlers is 20-30 minutes. Shorter routines may not give enough time to wind down, while routines longer than 45 minutes can become a stalling tactic. Consistency in the routine order matters more than exact length.',
  byAge: [
    { ageRange: '0-3 months', context: 'A brief routine of 5-15 minutes is sufficient. This might include a diaper change, pajamas, a quiet feed, and a song. Newborns tire quickly, so keeping it short prevents overtiredness.' },
    { ageRange: '3-8 months', context: 'A 15-25 minute routine works well. A typical sequence: bath (if included), massage, pajamas, feeding, 1-2 books or songs, and into the crib. Same order every night in a dim, calm environment.' },
    { ageRange: '8-18 months', context: 'Aim for 20-30 minutes. Include calming activities like books and songs. Keep feeding earlier in the routine so your baby does not fall asleep eating. A consistent endpoint signals the routine is done.' },
    { ageRange: '18 months-3 years', context: 'Twenty to thirty minutes remains ideal. Include 2-3 books, teeth brushing, a song, and goodnight. A visual routine chart helps your toddler know what comes next and when it ends. Avoid adding steps in response to stalling.' },
  ],
  whenNormal: ['Your routine is 15-30 minutes and your child settles well afterward','You include 3-5 calm activities in a consistent order','The routine varies slightly on bath vs non-bath nights','Your child occasionally resists but generally cooperates'],
  whenToMention: ['Your routine has crept past 60 minutes and you cannot shorten it','Your child becomes more stimulated rather than calmer during the routine','Despite a consistent routine your child cannot fall asleep for a long time'],
  whenToActNow: ['Your child has extreme distress during the bedtime routine beyond normal resistance','Your child has difficulty breathing or unusual symptoms at bedtime'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'NIH', citation: 'Mindell JA et al. Bedtime routines for young children: a dose-dependent association with sleep outcomes. Sleep. 2015;38(5):717-722.', url: 'https://pubmed.ncbi.nlm.nih.gov/25325476/' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Bedtime Routines for Children. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/healthy-living/sleep/Pages/Bedtime-Routines-for-Children.aspx' },
    { org: 'NSF', citation: 'National Sleep Foundation. Bedtime Routine for Better Sleep. SleepFoundation.org, 2024.', url: 'https://www.sleepfoundation.org/sleep-hygiene/bedtime-routine-for-adults' },
  ],
  relatedConcernSlugs: ['toddler-stalling-bedtime-routine','toddler-bedtime-stalling','baby-inconsistent-bedtime'],
};
