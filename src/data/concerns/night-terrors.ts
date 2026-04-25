import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'night-terrors',
  title: 'Toddler Night Terrors',
  category: 'sleep',
  searchTerms: [
    'toddler night terrors',
    'baby screaming in sleep',
    'night terrors vs nightmares',
    'toddler screaming at night won\'t wake up',
    'child screaming during sleep',
    'what causes night terrors in toddlers',
    'night terrors in 18 month old',
    'toddler wakes up screaming inconsolable',
    'sleep terrors in babies',
    'how to stop night terrors toddler',
  ],
  quickAnswer:
    'Night terrors are a common and harmless sleep phenomenon where your child appears terrified  -  screaming, thrashing, or sitting up  -  but is actually still asleep and will not remember the episode. They are caused by a partial arousal from deep sleep and are not a sign of emotional distress or psychological problems.',
  byAge: [
    {
      ageRange: '0-12 months',
      context:
        'True night terrors are very rare under 12 months. If your baby is screaming inconsolably during the night, it is more likely due to discomfort from gas, reflux, teething, or illness. If the episodes happen repeatedly around the same time each night and your baby seems impossible to console, mention it to your pediatrician.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Night terrors can begin appearing in this age range, though they are still uncommon. They typically occur in the first third of the night, about 1-3 hours after falling asleep. Your child may scream, thrash, appear to stare through you, and resist being held. The best response is to stay nearby and make sure they are safe, but avoid trying to wake them forcefully.',
    },
    {
      ageRange: '2-4 years',
      context:
        'This is the peak age for night terrors. About 1 in 6 children experience at least one episode. They tend to run in families and are more likely when children are overtired, sleeping in a new environment, or coming down with an illness. Most children outgrow them by age 5-6 without any treatment.',
    },
    {
      ageRange: '4+ years',
      context:
        'Night terrors become less frequent with age as the brain matures in its ability to transition between sleep stages. If they are still occurring frequently and disrupting the family, your pediatrician may suggest a technique called scheduled awakenings, where you gently rouse your child about 15 minutes before the typical episode time to reset their sleep cycle.',
    },
  ],
  whenNormal: [
    'The episode occurs in the first few hours after falling asleep and lasts 5-15 minutes',
    'Your child does not remember the episode in the morning',
    'Your child appears confused during the episode and does not seem to recognize you',
    'Episodes happen occasionally, especially when your child has missed naps or had a late bedtime',
    'Your child is otherwise well, happy during the day, and meeting all developmental milestones',
  ],
  whenToMention: [
    'Night terrors occur more than twice a week for several weeks',
    'Episodes last longer than 30 minutes',
    'Your child is also sleepwalking during the episodes or leaving their bed, which raises safety concerns',
    'You notice your child snoring loudly, mouth breathing, or pausing their breathing during sleep, which could suggest obstructive sleep apnea contributing to night terrors',
  ],
  whenToActNow: [
    'Your child has a seizure-like episode with rhythmic jerking, stiffening, or eye rolling that differs from typical thrashing',
    'Your child is difficult to rouse after the episode ends and seems abnormally confused or weak during the day',
    'Episodes begin after a head injury',
  ],
  relatedMilestones: [
    'sleep-consolidation',
    'cognitive-imagination',
    'emotional-regulation',
  ],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Sleep Terrors. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/toddler/Pages/Sleep-Terrors.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Nightmares and Night Terrors in Preschoolers. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/preschool/Pages/Nightmares-and-Night-Terrors.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Sleep and Sleep Disorders: Tips for Better Sleep.',
      url: 'https://www.cdc.gov/sleep/about/tips-for-better-sleep.html',
    },
  ],
};
