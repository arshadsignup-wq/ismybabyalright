import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-sleep-training-not-working',
  title: 'Sleep Training Is Not Working',
  category: 'sleep',
  searchTerms: ['sleep training not working','sleep training failure','baby still crying after sleep training','sleep training no improvement','why isn\'t sleep training working','sleep training failed','baby resisting sleep training','sleep training weeks no progress','baby won\'t stop crying sleep training','sleep training plateau'],
  quickAnswer: 'If sleep training is not working after 7-10 consistent nights, common reasons include inconsistency in approach, incorrect timing (wrong wake windows or bedtime), an underlying issue like illness or reflux, choosing a method that does not suit your baby\'s temperament, or the baby not being developmentally ready. Troubleshooting these factors usually identifies the problem.',
  byAge: [
    { ageRange: '4-6 months', context: 'At this age, sleep training failure is often due to timing issues: bedtime is too early or too late, wake windows are off, or the baby is overtired or undertired when put down. Check that bedtime falls during a natural sleepy window. Ensure your baby is healthy and not in a regression. If one method is not working after 7 nights, it is okay to pause and try a different approach.' },
    { ageRange: '6-9 months', context: 'Common reasons for failure at this age include: lingering sleep associations (nursing or rocking still happening at some sleep times), inconsistency (different approaches used by different caregivers), environmental issues (room not dark enough, noise disruptions), and emerging separation anxiety. Address each factor systematically.' },
    { ageRange: '9-12 months', context: 'Separation anxiety peaks around 8-10 months and can make sleep training harder. If your baby was doing well and then regressed, wait for the anxiety peak to pass (usually 2-3 weeks) and restart. Also check for teething, ear infections, or illness that could be causing discomfort.' },
    { ageRange: '12-24 months', context: 'Toddlers can be more resistant because habits are deeply ingrained and they can protest more effectively. Ensure everyone in the household is on the same page with the plan. Split nights (long awake periods in the night) suggest the schedule needs adjusting. If you have tried multiple methods consistently, consider consulting a pediatric sleep consultant for personalized guidance.' },
  ],
  whenNormal: ['The first 3-4 nights are rough and improvement comes gradually','There are occasional regression nights even after initial success','One method does not work but another does - babies have different temperaments','Sleep training works for bedtime first and night wakings improve after'],
  whenToMention: ['Multiple methods have failed after consistent implementation of each for 7+ nights','You suspect an underlying medical issue like reflux, allergies, or ear infections','You are struggling emotionally and need support'],
  whenToActNow: ['Severe sleep deprivation is affecting your ability to safely care for your baby','Your baby seems to be in pain during sleep training attempts'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'NIH', citation: 'Mindell JA et al. Behavioral treatment of bedtime problems and night wakings. Sleep. 2006;29(10):1263-1276.', url: 'https://pubmed.ncbi.nlm.nih.gov/17068979/' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Sleep Tips for Infants. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/baby/sleep/Pages/default.aspx' },
    { org: 'NSF', citation: 'National Sleep Foundation. When Sleep Training Doesn\'t Work. SleepFoundation.org, 2024.', url: 'https://www.sleepfoundation.org/baby-sleep' },
  ],
  relatedConcernSlugs: ['baby-sleep-training-methods-comparison','baby-sleep-training-regression-after','baby-cry-it-out-safety','baby-ferber-method-concerns'],
};
