import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-bedtime-battles',
  title: 'Toddler Bedtime Battles - Won\'t Go to Sleep',
  category: 'sleep',
  searchTerms: ['toddler bedtime battles','toddler won\'t go to bed','toddler stalling at bedtime','toddler getting out of bed repeatedly','toddler bedtime resistance','toddler screaming at bedtime','toddler afraid to sleep alone','toddler bedtime routine not working','toddler fights bedtime every night','how to get toddler to stay in bed','toddler calling for parents at night','2 year old bedtime struggles'],
  quickAnswer: 'Bedtime battles are among the most common toddler sleep challenges, affecting roughly 20-30% of families with toddlers. Common causes include overtiredness or undertiredness (wrong bedtime), a need for control (very normal at this age), fear of missing out, separation anxiety, bedtime routine that is too long or stimulating, and genuine fears of the dark or being alone. The most effective approach combines a consistent, predictable routine with clear boundaries and empathetic limit-setting.',
  byAge: [
    { ageRange: '12-18 months', context: 'Bedtime resistance at this age is often linked to separation anxiety, which peaks around 12-18 months. Your toddler may cry, cling, and protest being put in the crib. A consistent, calming routine helps - the same activities in the same order every night signals that sleep is coming. Keep the routine 20-30 minutes (bath, pajamas, books, song, goodnight). If your toddler is still in a crib, keep them there - the containment actually helps with boundaries.' },
    { ageRange: '18-24 months', context: 'Toddlers this age are developing strong opinions and a desire for autonomy. Bedtime battles often reflect their need for control. Offer small choices within the routine: "Do you want the blue pajamas or the red ones? Which two books?" This gives them a sense of power without undermining the non-negotiable fact that bedtime is happening. Avoid introducing screens within an hour of bedtime, as blue light suppresses melatonin production.' },
    { ageRange: '2-3 years', context: 'This is peak bedtime stalling age. Classic tactics include "one more book," "I need water," "I have to go potty," "there\'s a monster," and "I\'m scared." Address legitimate needs proactively in the routine (last drink, potty stop, one special request). Then hold the boundary: "We have done everything. It is time to sleep." For fears, validate the feeling ("I understand you feel scared") while maintaining the limit ("You are safe. I am right here."). A night light, comfort object, and a "monster spray" (water in a spray bottle) can help.' },
    { ageRange: '3-4 years', context: 'If your child has moved to a toddler bed, getting out of bed repeatedly is common. Use the "silent return" method - calmly walk them back to bed without conversation or engagement, every single time. It may take 20-50 returns on the first night but typically improves within 3-5 nights of complete consistency. Consider using an okay-to-wake clock so your child has a visual cue for when it is time to sleep and when it is okay to get up.' },
  ],
  whenNormal: ['Your toddler protests bedtime for 5-10 minutes but settles once in bed with a consistent routine','Bedtime resistance increases temporarily during developmental milestones or schedule changes','Your toddler tries one or two stalling tactics but accepts the boundary when you hold it','Bedtime battles happen occasionally but are not a nightly struggle lasting more than 30 minutes'],
  whenToMention: ['Bedtime battles last more than 45 minutes every night despite a consistent routine and appropriate schedule','Your child seems genuinely terrified of bedtime or sleeping alone beyond typical toddler fears','Your child is not falling asleep until very late (after 9-10 PM) and is showing signs of sleep deprivation during the day','You are exhausted and struggling to maintain consistency - getting professional sleep guidance can help'],
  whenToActNow: ['Your child has night terrors, sleep walking, or other parasomnias alongside bedtime resistance','Your child snores loudly or has breathing difficulties during sleep that may be causing resistance','Bedtime battles are causing you to feel angry, overwhelmed, or at risk of responding in ways that scare you - reach out for support'],
  relatedMilestones: ['sleep-consolidation','self-soothing'],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-sleep-training-when-to-start','baby-waking-every-hour','toddler-dropping-nap'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Bedtime Routines for Toddlers. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/toddler/Pages/Bedtime-Trouble.aspx' },
    { org: 'NIH', citation: 'Mindell JA, et al. A Nightly Bedtime Routine: Impact on Sleep in Young Children. Sleep. 2015.', url: 'https://pubmed.ncbi.nlm.nih.gov/25325483/' },
    { org: 'NIH', citation: 'Mindell JA, et al. Behavioral Treatment of Bedtime Problems and Night Wakings. Sleep. 2006.', url: 'https://pubmed.ncbi.nlm.nih.gov/17162993/' },
  ],
};
