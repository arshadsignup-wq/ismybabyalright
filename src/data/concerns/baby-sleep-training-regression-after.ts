import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-sleep-training-regression-after',
  title: 'Sleep Regression After Sleep Training',
  category: 'sleep',
  searchTerms: ['regression after sleep training','baby sleep got worse after training','sleep training didn\'t stick','baby sleeping worse again after sleep training','sleep training regression','sleep training backsliding','baby waking again after sleep training','sleep training wore off','baby regressed after sleep training','lost sleep training progress'],
  quickAnswer: 'Regression after successful sleep training is very common and does not mean it failed. Illness, teething, travel, developmental milestones, and schedule changes can all temporarily disrupt sleep even in a well-trained baby. The good news is that "re-training" after a regression is typically much faster, often just 1-3 nights of consistency.',
  byAge: [
    { ageRange: '4-8 months', context: 'Common triggers for regression at this age include the 4-month sleep architecture change, teething, illness, or developmental leaps like rolling and sitting. During illness or teething, provide comfort as needed - you can return to your sleep training approach once your baby is well. Brief regressions are normal and do not erase previous progress.' },
    { ageRange: '8-12 months', context: 'The 8-10 month separation anxiety peak frequently causes regression in sleep-trained babies. Your baby may suddenly need more reassurance at bedtime. Other triggers include travel, starting daycare, or learning to stand/cruise. Return to your method consistently once the trigger has passed. Most babies bounce back within 2-3 nights of consistent response.' },
    { ageRange: '12-18 months', context: 'The 12-month and 18-month regressions, nap transitions, and illness can all cause setbacks. The key is to avoid creating new sleep associations during the regression that you will then need to undo. Brief comfort during illness is fine, but once your child is well, return to your established approach promptly.' },
    { ageRange: '18-24 months', context: 'Toddler regressions are often triggered by language explosions, potty training, new siblings, moving to a new bed, or big life changes. Be compassionate during the adjustment but return to consistent boundaries as soon as possible. The longer new habits persist, the harder they are to undo.' },
  ],
  whenNormal: ['Brief regressions lasting a few days to 2 weeks after illness, travel, or milestones','Your baby responds quickly (1-3 nights) when you return to consistent sleep training methods','Regressions coincide with obvious triggers','Overall sleep trajectory continues to improve even with occasional setbacks'],
  whenToMention: ['Regression persists more than 2-3 weeks despite consistent return to your method','Sleep quality has significantly and permanently declined after a regression','You suspect an underlying issue like ear infection or reflux is causing the regression'],
  whenToActNow: ['Your baby has signs of illness accompanying the regression that need medical attention','Sleep deprivation from the regression is affecting your ability to function safely'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'NIH', citation: 'Mindell JA et al. Behavioral treatment of bedtime problems and night wakings. Sleep. 2006;29(10):1263-1276.', url: 'https://pubmed.ncbi.nlm.nih.gov/17068979/' },
    { org: 'NSF', citation: 'National Sleep Foundation. Sleep Regressions in Babies. SleepFoundation.org, 2024.', url: 'https://www.sleepfoundation.org/baby-sleep/sleep-regression' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Sleeping Through the Night. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/baby/sleep/Pages/Sleeping-Through-the-Night.aspx' },
  ],
  relatedConcernSlugs: ['baby-sleep-training-not-working','sleep-regression-4-months','sleep-regression-8-months','sleep-regression-12-months'],
};
