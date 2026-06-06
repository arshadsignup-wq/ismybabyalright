import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'toddler-needing-parent-present-sleep',
  title: 'Toddler Can Only Sleep with a Parent Present',
  category: 'sleep',
  searchTerms: ['toddler needs parent to fall asleep', 'toddler can\'t sleep alone', 'toddler needs parent in room', 'child won\'t fall asleep without parent', 'toddler needs someone to lie with them', 'toddler sleep independence', 'laying with toddler until asleep', 'toddler cries if parent leaves room', 'child needs parent present bedtime', 'how to stop lying with toddler to sleep'],
  quickAnswer: 'Many toddlers need a parent present to fall asleep, and this is more common than most parents realize. If it works for your family, there is nothing wrong with it. If you want to encourage more independence, a gradual withdrawal approach - slowly reducing your presence over days or weeks - is gentle and effective for most children.',
  byAge: [
    { ageRange: '12-18 months', context: 'At this age, needing a parent present is developmentally normal. Your toddler is experiencing separation anxiety and has strong attachment needs. If you want to begin encouraging independence, start by sitting next to the crib rather than holding or rocking your baby. Over several nights, gradually move your chair further from the crib toward the door.' },
    { ageRange: '18 months-2.5 years', context: 'Many toddlers this age need a parent nearby to feel safe enough to fall asleep. This is especially common during peaks of separation anxiety or after transitions like starting daycare or welcoming a sibling. If you are ready to make a change, the gradual retreat method works well: sit by the bed, then at the midpoint of the room, then by the door, then just outside. Move to the next position every 2-3 nights.' },
    { ageRange: '2.5-3.5 years', context: 'Your child may understand that you will come back but still strongly prefer your presence. You can begin leaving the room for brief periods ("I am going to check on something and I will be right back") and gradually extend the time. Many children respond well to an audio monitor they can see, knowing they can hear you. A comfort object or recording of your voice can also bridge the gap.' },
    { ageRange: '3.5-5 years', context: 'If your child still needs you present, discuss the plan during the day when they are calm. Acknowledge their feelings, create a special bedtime ritual that signals safety, and use rewards for nights they fall asleep alone. Some children benefit from a gradual approach while others do better with a clear, kind boundary. Choose the approach that matches your child\'s temperament.' },
  ],
  whenNormal: ['Your toddler prefers having a parent nearby at bedtime - this reflects healthy attachment', 'The need for your presence increases during stressful periods, illness, or transitions', 'Your child can fall asleep alone sometimes (at daycare, with grandparents) but prefers you at home', 'Gradual progress is made over weeks when you work on independence'],
  whenToMention: ['Your child has extreme panic when you try to leave, beyond typical protest crying', 'The pattern is causing significant sleep deprivation or stress for you or your partner', 'Your child cannot fall asleep at daycare, with other caregivers, or in any situation without you'],
  whenToActNow: ['Your child has severe separation anxiety with physical symptoms like vomiting or shaking', 'You are falling asleep in unsafe conditions while waiting for your child to fall asleep'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Sleeping Through the Night. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/baby/sleep/Pages/Sleeping-Through-the-Night.aspx' },
    { org: 'Zero to Three', citation: 'Zero to Three. Helping Your Toddler Fall Asleep.', url: 'https://www.zerotothree.org/resource/toddlers-and-sleep/' },
    { org: 'NSF', citation: 'National Sleep Foundation. Toddler Sleep. SleepFoundation.org, 2024.', url: 'https://www.sleepfoundation.org/children-and-sleep' },
  ],
  relatedConcernSlugs: ['separation-anxiety-bedtime', 'toddler-bed-sharing-breaking-habit', 'baby-cosleeping-to-own-room'],
};
