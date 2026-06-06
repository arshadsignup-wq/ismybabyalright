import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'toddler-coming-to-parents-bed',
  title: 'Toddler Comes to Parents\' Bed Every Night',
  category: 'sleep',
  searchTerms: [
    'toddler coming to parents bed',
    'child sneaks into parents bed',
    'toddler crawling into bed with parents',
    'toddler won\'t stay in own bed all night',
    'child comes to our bed every night',
    'toddler midnight bed visit',
    'how to stop toddler coming into bed',
    'toddler sleeps in parents bed',
    'toddler waking coming to parents room',
    'child wants to sleep with parents',
  ],
  quickAnswer:
    'Many toddlers go through a phase of coming to their parents\' bed at night, often between ages 2 and 4. This is driven by comfort-seeking, nighttime fears, habit, or simply preferring closeness. Whether you accommodate or redirect depends entirely on what works for your family - there is no single right answer.',
  byAge: [
    { ageRange: '18 months-2 years', context: 'At this age, midnight visits are often driven by genuine need for comfort - separation anxiety, night fears, or missing you. If you want to redirect them, keep it calm and quiet: walk them back, offer brief comfort, and leave. If their presence does not disrupt sleep and you are comfortable, that is a valid choice too.' },
    { ageRange: '2-3 years', context: 'This is the peak age for bed-visiting. Common triggers include nightmares, darkness fears, and the comfort of being near you. If you want to change the pattern, be consistent: walk them back every time. Some families compromise with a sleeping bag on the parents\' floor as a "landing pad." An ok-to-wake clock helps establish expectations.' },
    { ageRange: '3-4 years', context: 'Your child can understand rules and rewards at this age. A sticker chart for staying in their own bed, addressing underlying fears, and a "bed pass" system (one pass per night to visit your room, encouraging them to save it) can all help. Many children stop on their own as they outgrow nighttime fears.' },
    { ageRange: '4-5 years', context: 'If nighttime visits persist and you want them to stop, focus on the underlying cause. Is your child afraid? Address the fear. Is it habit? Consistent redirection works. Is it loneliness? A sibling room-share or comfort object may help. Occasional visits are perfectly normal at this age.' },
  ],
  whenNormal: [
    'Your toddler occasionally comes to your bed, especially during illness or stressful times',
    'Nighttime visits coincide with new fears, separation anxiety, or major life changes',
    'Your child can be walked back and goes back to sleep with minimal fuss',
    'The behavior decreases over time as your child matures',
  ],
  whenToMention: [
    'Your child is extremely anxious about sleeping alone with significant distress',
    'Disrupted sleep is causing behavioral or health problems for your child or exhaustion for you',
    'Frequent nightmares or night terrors are driving the visits',
  ],
  whenToActNow: [
    'Your child is sleepwalking and seems disoriented or confused',
    'Extreme nighttime anxiety is accompanied by daytime anxiety, regression, or other concerning emotional changes',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Sleep Tips for Children. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/healthy-living/sleep/Pages/default.aspx' },
    { org: 'NSF', citation: 'National Sleep Foundation. Children and Sleep. SleepFoundation.org, 2024.', url: 'https://www.sleepfoundation.org/children-and-sleep' },
    { org: 'Zero to Three', citation: 'Zero to Three. Toddlers and Sleep.', url: 'https://www.zerotothree.org/resource/toddlers-and-sleep/' },
  ],
  relatedConcernSlugs: ['toddler-getting-out-of-bed-repeatedly', 'toddler-night-time-fears', 'toddler-bed-sharing-breaking-habit'],
};
