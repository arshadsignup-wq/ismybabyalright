import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'sleep-training-guilt-methods',
  title: 'Sleep Training Guilt and Methods',
  category: 'behavior',
  searchTerms: [
    'is sleep training harmful to babies',
    'cry it out method safe',
    'sleep training guilt',
    'Ferber method safe for baby',
    'does sleep training cause attachment issues',
    'gentle sleep training methods',
    'is it okay to let baby cry to sleep',
    'sleep training age when to start',
    'sleep training emotional damage',
  ],
  quickAnswer:
    'Multiple large-scale studies have found no evidence that sleep training causes long-term emotional, behavioral, or attachment harm to children. Both graduated extinction (Ferber) and bedtime fading methods have been shown to be effective and safe. Parental guilt about sleep training is extremely common but is not supported by the research evidence. The AAP acknowledges that various sleep training approaches can be appropriate starting around 4-6 months of age.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Sleep training is not recommended for babies under 4 months. Newborns need to eat frequently and have immature circadian rhythms. Responding to all cries and feeding on demand is appropriate. Focus on safe sleep practices and building healthy sleep associations (dark room, white noise, consistent routine).',
    },
    {
      ageRange: '3-6 months',
      context:
        'Most pediatricians consider 4-6 months an appropriate age to begin sleep training if desired. By this age, most babies are developmentally capable of sleeping longer stretches without feeding. Methods range from gradual (chair method, pick-up-put-down) to more direct (Ferber, full extinction). Choose a method that aligns with your comfort level.',
    },
    {
      ageRange: '6-12 months',
      context:
        'This is a common time for sleep training as sleep regressions and night wakings may prompt parents to seek solutions. All evidence-based sleep training methods are safe for this age group. Consistency is the most important factor for success, regardless of which method you choose.',
    },
    {
      ageRange: '12 months+',
      context:
        'Toddlers can still benefit from sleep training, though they may be more resistant due to stronger habits and the ability to stand up, call for parents, and climb out of cribs. Strategies may need to be adapted for toddler-specific challenges. A consistent bedtime routine and clear expectations are essential.',
    },
  ],
  whenNormal: [
    'You feel guilty during sleep training but notice your baby is sleeping better and seems well-rested and happy during the day',
    'Your baby cries during the learning period but is increasingly settling more quickly over several nights',
    'You have chosen a method that feels right for your family, even if others disagree with your approach',
    'Sleep training takes 3-7 nights to see significant improvement with consistency',
  ],
  whenToMention: [
    'You have been consistently sleep training for more than 2 weeks without improvement — there may be an underlying issue such as reflux, ear infection, or sleep apnea',
    'Your guilt about sleep training is so severe that it is affecting your mental health or your ability to be consistent with any approach',
    'Your baby is over 6 months old and cannot sleep for any stretch longer than 1-2 hours, even with sleep training attempts',
  ],
  whenToActNow: [
    'Your baby suddenly stops sleeping after previously sleeping well, has a fever, or seems to be in pain — this suggests a medical issue, not a training problem',
    'You are so sleep-deprived that you are at risk of falling asleep while holding or feeding your baby, or your functioning during the day is dangerously impaired',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'attachment-parenting-burnout',
    'gentle-parenting-when-not-working',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'Mindell, J. et al. Behavioral Treatment of Bedtime Problems and Night Wakings in Infants and Young Children. Sleep. 2006.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/17118100/',
    },
    {
      org: 'NIH',
      citation:
        'Hiscock, H. et al. Long-term Mother and Child Mental Health Effects of a Population-Based Infant Sleep Intervention. Pediatrics. 2008.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/18829802/',
    },
  ],
};
