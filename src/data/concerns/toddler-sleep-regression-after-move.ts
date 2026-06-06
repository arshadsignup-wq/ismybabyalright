import type { ConcernPage } from '@/data/concerns/types';
export const concern: ConcernPage = {
  slug: 'toddler-sleep-regression-after-move', title: 'Sleep Regression After Moving House', category: 'sleep',
  searchTerms: ['sleep regression after move','toddler sleep problems new house','baby won\'t sleep after moving','child sleep disruption new home','toddler sleep regression moving','new house sleep issues toddler','baby sleep new environment','moving affecting toddler sleep','child afraid new room','baby adjustment new house sleep'],
  quickAnswer: 'Moving to a new home is a major change that commonly disrupts toddler sleep for 1-4 weeks. Your child is adjusting to unfamiliar surroundings, sounds, and smells. Maintaining your exact bedtime routine, setting up the sleep space as similarly as possible, and providing extra comfort help most children adjust.',
  byAge: [
    { ageRange: '6-12 months', context: 'Babies may take 1-2 weeks to adjust. Set up the nursery first if possible so it is ready on day one. Use familiar sheets, sleep sack, and white noise. Spend time in the room during the day so it feels safe.' },
    { ageRange: '12-24 months', context: 'Toddlers may be unsettled by the unfamiliar environment. Extra comfort at bedtime, familiar objects, and maintaining your exact routine help. Some regression is expected and usually resolves within 2-3 weeks.' },
    { ageRange: '2-3 years', context: 'Talk about the move beforehand. Let your child explore their new room during the day. Maintain bedtime routine exactly. Some children benefit from having input on room setup. A nightlight helps if the new room feels unfamiliar.' },
    { ageRange: '3-5 years', context: 'Older children can understand and discuss the change. Acknowledge their feelings. Read books about moving. Sleep usually normalizes within 2-4 weeks. If anxiety persists, address specific fears about the new home.' },
  ],
  whenNormal: ['Sleep is disrupted for 1-4 weeks after the move','Your child is clingier at bedtime and wants extra reassurance','Night wakings increase temporarily','Sleep gradually returns to normal with consistent routine'],
  whenToMention: ['Sleep disruption persists more than 4-6 weeks after the move','Your child has developed significant anxiety about the new home','Behavioral changes extend well beyond sleep into daytime functioning'],
  whenToActNow: ['Your child shows signs of severe anxiety or depression after the move','Extreme sleep disruption is affecting your child\'s health or your ability to function'],
  relatedMilestones: [], showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Moving with Children. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/family-life/family-dynamics/Pages/default.aspx' },
    { org: 'Zero to Three', citation: 'Zero to Three. Coping with Change.', url: 'https://www.zerotothree.org/resource/coping-with-change/' },
    { org: 'NSF', citation: 'National Sleep Foundation. Sleep and Stress in Children. SleepFoundation.org, 2024.', url: 'https://www.sleepfoundation.org/children-and-sleep' },
  ],
  relatedConcernSlugs: ['toddler-regression-behavior-general','toddler-night-time-fears','separation-anxiety-bedtime'],
};
