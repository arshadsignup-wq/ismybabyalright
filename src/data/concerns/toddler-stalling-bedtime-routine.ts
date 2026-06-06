import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'toddler-stalling-bedtime-routine',
  title: 'Toddler Extends Bedtime Routine Endlessly',
  category: 'sleep',
  searchTerms: ['toddler stalling bedtime routine', 'bedtime routine too long toddler', 'toddler one more story', 'toddler extending bedtime', 'bedtime routine drags on', 'toddler wants more at bedtime', 'toddler bedtime routine taking forever', 'how long should bedtime routine be toddler', 'toddler prolonging bedtime', 'endless bedtime routine'],
  quickAnswer: 'Toddlers are masters of stretching the bedtime routine with "one more book," "one more hug," "I need water." This is normal limit-testing behavior. The key is setting clear, predictable boundaries within the routine: decide what is included, communicate it clearly, and stick to it warmly but firmly. A routine of 20-30 minutes is ideal for most toddlers.',
  byAge: [
    { ageRange: '18 months-2 years', context: 'At this age, stalling is usually less sophisticated - your toddler may simply refuse to get in bed or cry for you to come back. Keep the routine short and consistent: bath (if included), pajamas, 1-2 books, a song, goodnight. Use the same order every night so your child knows what to expect and what comes last.' },
    { ageRange: '2-3 years', context: 'This is when stalling becomes an art form. Your child discovers that asking for water, needing the bathroom, wanting another story, or requesting a different stuffed animal all buy more time. Address common needs preemptively in the routine (last drink, bathroom, choosing a lovey) and then hold the boundary. A visual routine chart can help your child see what comes next and know when the routine is done.' },
    { ageRange: '3-4 years', context: 'Stalling may involve negotiation and creative excuses. Your child might claim they are hungry, scared, or that something hurts. Acknowledge their feelings briefly but do not add new steps to the routine. Offering two choices within the boundary helps ("Do you want the blue book or the green book?") without extending the routine. Consistency is more important than any single strategy.' },
    { ageRange: '4-5 years', context: 'Older children can participate in designing the routine, which gives them ownership. Let them choose the order of steps within reason. A timer or "routine is done" signal (like turning off a specific lamp) can help define the endpoint clearly. If your child is genuinely not tired at bedtime, the schedule may need adjusting rather than the routine.' },
  ],
  whenNormal: ['Your toddler asks for one more of everything at bedtime - this is universal toddler behavior', 'Stalling is worst when your child is overtired, understimulated during the day, or going through a developmental phase', 'Your child eventually falls asleep within a reasonable time after the routine ends', 'Stalling decreases when you hold boundaries consistently'],
  whenToMention: ['Bedtime routines regularly exceed 60-90 minutes and you cannot establish boundaries', 'Your child has extreme anxiety at the end of the routine that seems beyond normal resistance', 'Stalling is accompanied by significant sleep onset delay where your child cannot fall asleep for over an hour after the routine'],
  whenToActNow: ['Your child has physical symptoms of anxiety at bedtime like vomiting or shaking', 'You are so frustrated by the nightly battles that you worry about your reactions'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Bedtime Routines for Children. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/healthy-living/sleep/Pages/Bedtime-Routines-for-Children.aspx' },
    { org: 'NSF', citation: 'National Sleep Foundation. Bedtime Routine for Toddlers. SleepFoundation.org, 2024.', url: 'https://www.sleepfoundation.org/children-and-sleep/bedtime-routine' },
    { org: 'NIH', citation: 'Mindell JA et al. Bedtime routines for young children: a dose-dependent association with sleep outcomes. Sleep. 2015;38(5):717-722.', url: 'https://pubmed.ncbi.nlm.nih.gov/25325476/' },
  ],
  relatedConcernSlugs: ['toddler-bedtime-stalling', 'toddler-bedtime-battles', 'baby-bedtime-routine-length'],
};
