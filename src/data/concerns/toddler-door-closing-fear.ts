import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'toddler-door-closing-fear',
  title: 'Toddler Wants the Door Open at Bedtime',
  category: 'sleep',
  searchTerms: ['toddler afraid of closed door', 'toddler wants door open bedtime', 'toddler cries when door closes', 'child needs door open to sleep', 'toddler scared of closed door', 'bedroom door open or closed toddler', 'toddler door anxiety', 'child won\'t sleep with door shut', 'toddler freaks out closed door', 'should toddler sleep with door open'],
  quickAnswer: 'Wanting the door open is very common in toddlers ages 2-4 and usually reflects a need for connection rather than a genuine phobia. Leaving the door open a crack or using a baby gate with the door open is a reasonable compromise. This is not a battle worth fighting in most cases, as the need typically diminishes as your child gains confidence.',
  byAge: [
    { ageRange: '18 months-2 years', context: 'At this age, door anxiety often relates to separation anxiety. Your toddler wants to know you are still there and accessible. Leaving the door slightly ajar and using a dim hallway light can provide reassurance. A baby gate at the doorway keeps them safe while maintaining the open-door feeling.' },
    { ageRange: '2-3 years', context: 'This is when door fears peak. Your child may associate a closed door with being alone, trapped, or cut off from you. Validate their feeling ("I know you like the door open") and offer a compromise: the door stays open a specific amount. Some families use a door wedge to keep it at the agreed position. Avoid using closing the door as a consequence for getting out of bed, as this can worsen the fear.' },
    { ageRange: '3-4 years', context: 'Your child can now articulate why they want the door open. Listen to their concerns and address them. If noise from the rest of the house is keeping them awake, try white noise. If they need to see the hallway light, that is a simple accommodation. Many children outgrow this naturally by age 4-5 as nighttime confidence grows.' },
    { ageRange: '4-5 years', context: 'If the door fear persists, it is usually mild and easily accommodated. Some children transition to simply wanting the door cracked rather than wide open. If the fear is intensifying rather than diminishing, or if it is part of a broader pattern of anxiety, mention it to your pediatrician.' },
  ],
  whenNormal: ['Your toddler prefers the door open but can eventually fall asleep with it partially closed', 'The preference emerged around age 2-3 and is mild to moderate in intensity', 'Your child is fine with the door closed during the day but prefers it open at night', 'Leaving the door open resolves the issue without further protest'],
  whenToMention: ['The door fear is extreme and your child becomes hysterical if the door moves even slightly', 'Door anxiety is part of a broader pattern of fears and anxieties affecting daily life', 'The fear is getting worse over time rather than improving'],
  whenToActNow: ['Your child has panic attacks or physical symptoms of extreme anxiety around the closed door', 'The fear extends to being in any enclosed space and may suggest claustrophobia'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Fears and Phobias in Children. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/emotional-problems/Pages/Fears-and-Phobias.aspx' },
    { org: 'Zero to Three', citation: 'Zero to Three. Common Toddler Fears.', url: 'https://www.zerotothree.org/resource/common-toddler-fears/' },
    { org: 'NSF', citation: 'National Sleep Foundation. Children and Sleep. SleepFoundation.org, 2024.', url: 'https://www.sleepfoundation.org/children-and-sleep' },
  ],
  relatedConcernSlugs: ['toddler-night-time-fears', 'toddler-dark-room-fear', 'toddler-monster-under-bed-fear'],
};
