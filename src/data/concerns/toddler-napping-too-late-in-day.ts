import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-napping-too-late-in-day',
  title: 'Toddler Napping Too Late and Affecting Bedtime',
  category: 'sleep',
  searchTerms: ['toddler late nap', 'toddler nap too late', 'toddler nap affecting bedtime', 'toddler won\'t sleep at night after nap', 'toddler nap schedule', 'when to stop toddler nap', 'toddler nap time', 'toddler nap too long', 'toddler fighting bedtime after nap', 'toddler afternoon nap late'],
  quickAnswer: 'A late afternoon nap can push back bedtime, causing a frustrating cycle for families. Generally, you want at least 4-5 hours between the end of a nap and bedtime. If your toddler naps until 4 or 5 PM, they may not be tired until 9 or 10 PM. Solutions include gradually shifting the nap earlier, capping the nap length, or (for toddlers over 3) transitioning away from naps entirely. Every child is different - some toddlers need naps until age 4-5, while others are ready to drop them by age 2.5-3.',
  byAge: [
    { ageRange: '0-12 months', context: 'Babies under 1 year need multiple naps throughout the day and have less rigid schedules. Late naps are not typically a concern at this age because babies need more total sleep and their sleep patterns are still developing. By 6-9 months, most babies are on a 2-nap schedule (morning and afternoon). Try to keep the last nap from extending past 4-5 PM. If your baby takes a very late nap, you may need to push bedtime slightly later.' },
    { ageRange: '1-3 years', context: 'Most toddlers transition from 2 naps to 1 nap between 12-18 months, with the single nap ideally starting around 12:30-1 PM and lasting 1.5-2.5 hours. If the nap starts too late or runs too long, bedtime becomes a battle. Strategies: wake your toddler from a nap by 3-3:30 PM even if they resist, cap naps at 2 hours, ensure morning activities and outdoor time promote an earlier nap, consider moving to quiet rest time instead of a nap if your child is 3+ and consistently fighting bedtime. Signs your toddler may be ready to drop naps: consistently taking 30+ minutes to fall asleep at bedtime after napping, or not seeming tired at nap time.' },
  ],
  whenNormal: ['Your toddler occasionally naps late and has a later bedtime as a result', 'Adjusting nap timing during schedule changes (travel, weekends)', 'A toddler between 2.5-4 years who is in the process of transitioning away from naps'],
  whenToMention: ['Your toddler consistently cannot fall asleep before 9-10 PM despite efforts to adjust the nap', 'You are unsure whether your child still needs a nap', 'Late napping is causing family stress or daycare scheduling conflicts', 'Your child is overtired and cranky but refuses to nap at a reasonable time'],
  whenToActNow: ['Sleep disruption is severe and persistent, affecting your child\'s daytime behavior and development', 'Your child snores loudly and seems excessively sleepy during the day regardless of nap timing (possible sleep apnea)'],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['sleep-regression', 'baby-fighting-sleep', 'baby-sleep-regression-24-months', 'toddler-waking-too-early'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Healthy Sleep Habits. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/healthy-living/sleep/Pages/Healthy-Sleep-Habits-How-Many-Hours-Does-Your-Child-Need.aspx' },
    { org: 'NIH', citation: 'National Sleep Foundation. Children and Sleep.', url: 'https://pubmed.ncbi.nlm.nih.gov/' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Napping. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/healthy-living/sleep/Pages/Napping.aspx' },
  ],
};
