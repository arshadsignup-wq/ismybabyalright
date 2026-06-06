import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'toddler-bed-sharing-breaking-habit',
  title: 'How to Stop Bed Sharing with Your Toddler',
  category: 'sleep',
  searchTerms: [
    'stop bed sharing toddler',
    'ending co-sleeping toddler',
    'toddler own bed transition',
    'breaking bed sharing habit',
    'how to stop co-sleeping',
    'toddler won\'t sleep alone',
    'moving toddler to own bed',
    'co-sleeping to independent sleep',
    'weaning from co-sleeping',
    'toddler bed sharing too old',
  ],
  quickAnswer:
    'Transitioning from bed sharing to independent sleep is a process that takes patience. There is no universal "right" age to stop, but when you are ready, a gradual approach works best. Start by establishing a positive bedtime routine in your child\'s own space, then gradually reduce your presence over 1-3 weeks. Expect some resistance, but with consistency and reassurance, most toddlers adjust.',
  byAge: [
    { ageRange: '12-18 months', context: 'If you want to end bed sharing at this age, a gradual approach works well. Start by having your baby fall asleep in their crib with you nearby (sitting by the crib, patting). Once they are comfortable falling asleep in the crib, night wakings can be addressed by offering comfort in the crib rather than bringing your baby to your bed. This process may take 2-4 weeks.' },
    { ageRange: '18 months-2.5 years', context: 'Toddlers can be more resistant to this change because they are aware of what they want and can protest more vigorously. Make their sleep space appealing - let them choose special bedding, place a photo of the family by their bed, and maintain a warm bedtime routine. You can start with naps in their own space first. A gradual retreat method (sitting by the bed, then by the door, then outside the door) gives your toddler time to adjust.' },
    { ageRange: '2.5-3.5 years', context: 'At this age, you can involve your child in the process. Talk about it during the day, read books about sleeping in their own bed, and create excitement about their "big kid" space. A sticker chart rewarding nights in their own bed can be motivating. Expect some setbacks during illness or stressful periods. Be firm but compassionate - validate their feelings while maintaining the boundary.' },
    { ageRange: '3.5-5 years', context: 'Older children can understand the reasoning behind the change. Discuss it openly, acknowledge their feelings, and offer compromises like leaving the door open or having a special nightlight. Some families do well with a "camping out" transition where the child sleeps on a mat in the parents\' room initially, then moves to their own room. Most children adjust within 2-3 weeks with consistency.' },
  ],
  whenNormal: [
    'Your toddler protests the change initially - resistance is expected and does not mean you should stop',
    'There are setbacks during illness, travel, or stressful periods',
    'Your child does well for a few nights and then has a rough night - progress is not linear',
    'The full transition takes 2-4 weeks with some children needing longer',
  ],
  whenToMention: [
    'Your child has extreme anxiety about sleeping alone that seems beyond normal adjustment',
    'The transition is causing significant behavioral changes during the day',
    'You have been trying for over a month with consistent effort and see no improvement',
  ],
  whenToActNow: [
    'Your child\'s anxiety about sleeping alone involves physical symptoms like vomiting, shaking, or hyperventilating',
    'You are concerned your child\'s extreme reaction to separation might indicate an anxiety disorder',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. How to Keep Your Sleeping Baby Safe. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/baby/sleep/Pages/A-Parents-Guide-to-Safe-Sleep.aspx' },
    { org: 'NSF', citation: 'National Sleep Foundation. Co-Sleeping with Your Baby. SleepFoundation.org, 2024.', url: 'https://www.sleepfoundation.org/co-sleeping' },
    { org: 'Zero to Three', citation: 'Zero to Three. Helping Your Toddler Sleep Alone.', url: 'https://www.zerotothree.org/resource/toddlers-and-sleep/' },
  ],
  relatedConcernSlugs: ['cosleeping-to-crib-transition', 'toddler-coming-to-parents-bed', 'toddler-needing-parent-present-sleep'],
};
