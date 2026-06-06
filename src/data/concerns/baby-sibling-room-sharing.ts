import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'baby-sibling-room-sharing',
  title: 'Siblings Sharing a Room: Sleep Tips',
  category: 'sleep',
  searchTerms: ['siblings sharing room sleep','baby toddler same room','room sharing siblings','sibling room sharing tips','toddler baby sharing bedroom','kids sharing room sleep','sibling room sharing age','when can siblings share room','sharing room baby','brother sister sharing room'],
  quickAnswer: 'Sibling room-sharing can work well with planning. Stagger bedtimes so the younger child falls asleep first, use white noise to mask sounds, and have a plan for when one child wakes the other. Many families share rooms successfully, and some children sleep better with a sibling nearby.',
  byAge: [
    { ageRange: '0-6 months', context: 'Keep a newborn in the parents\' room per AAP guidelines. If space requires sibling sharing from birth, place the baby\'s crib away from the older child and use white noise. Many toddlers sleep through infant night wakings surprisingly well.' },
    { ageRange: '6-12 months', context: 'Put the baby down first since they have an earlier bedtime, then bring the older child in once the baby is asleep. White noise masks sounds between transitions. Respond quickly and quietly if one wakes the other.' },
    { ageRange: '12-24 months', context: 'Two young children sharing can work once both sleep reasonably well. Stagger bedtimes by 15-30 minutes. Most children learn to sleep through sibling sounds within a few weeks.' },
    { ageRange: '2-5 years', context: 'Preschoolers sharing a room may chat and play at bedtime. This is normal and usually settles within 15-20 minutes. Clear rules about quiet time after lights-out help.' },
  ],
  whenNormal: ['Siblings adjust to sharing within 2-3 weeks','One occasionally wakes the other but both resettle','Children chat briefly at bedtime before sleeping','The arrangement works well for your family'],
  whenToMention: ['One child consistently disrupts the other causing chronic tiredness','The age gap makes sharing impractical and one child is severely affected','You cannot get either child to sleep in the shared room'],
  whenToActNow: ['One child has night terrors or sleepwalking that endangers the other','A child has a medical condition requiring separate monitoring'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Healthy Sleep Habits. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/healthy-living/sleep/Pages/default.aspx' },
    { org: 'NSF', citation: 'National Sleep Foundation. Room Sharing for Children. SleepFoundation.org, 2024.', url: 'https://www.sleepfoundation.org/children-and-sleep' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Make Baby\'s Room Safe. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/safety-prevention/at-home/Pages/Make-Babys-Room-Safe.aspx' },
  ],
  relatedConcernSlugs: ['baby-room-sharing-duration','sleep-scheduling-twins'],
};
