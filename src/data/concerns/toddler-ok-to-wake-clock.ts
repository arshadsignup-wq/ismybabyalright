import type { ConcernPage } from '@/data/concerns/types';
export const concern: ConcernPage = {
  slug: 'toddler-ok-to-wake-clock', title: 'Using an Ok-to-Wake Clock', category: 'sleep',
  searchTerms: ['ok to wake clock','toddler wake clock','toddler alarm clock','sleep training clock toddler','green light clock toddler','when to use ok to wake clock','ok to wake clock age','toddler stay in bed clock','child wake up clock','toddler ready to wake light'],
  quickAnswer: 'An ok-to-wake clock is a tool that signals when it is an acceptable time to get out of bed, usually by changing color or turning on a light. Most children can begin using one around age 2-2.5. Start by setting it to their current natural wake time and gradually push it later by 5-10 minutes every few days. Pair with positive reinforcement.',
  byAge: [
    { ageRange: '18-24 months', context: 'Most toddlers are not developmentally ready for a wake clock until closer to 2. You can introduce the concept by showing them the clock during the day and explaining "when it turns green, you can come out." Keep expectations low initially.' },
    { ageRange: '2-3 years', context: 'This is the ideal starting age. Set the clock to 5-10 minutes after your child currently wakes, so they experience early success. Praise them enthusiastically when they wait. Gradually push the time later. Use a simple sticker chart. Be realistic - start with achievable goals.' },
    { ageRange: '3-4 years', context: 'The clock becomes very effective. Your child can fully understand the concept and experience pride in waiting. If they wake before the light, teach them to play quietly with books or stuffed animals until the signal.' },
    { ageRange: '4-5 years', context: 'Most children have mastered the wake clock. You can set it to a time that works for your family. Some children no longer need it as they develop their own understanding of appropriate wake times.' },
  ],
  whenNormal: ['Your toddler takes 1-3 weeks to learn the system','There are occasional failures especially on exciting mornings','Your child sometimes wakes before the clock but stays in bed quietly','Gradual improvement over weeks'],
  whenToMention: ['Your child cannot grasp the concept after 4+ weeks of consistent use','Your child is waking extremely early and you cannot identify the cause','You need help with broader sleep schedule issues'],
  whenToActNow: ['Your child is distressed or anxious about the clock system','The clock is creating more bedtime conflict rather than solving wake time issues'],
  relatedMilestones: [], showSelfReferral: false,
  sources: [
    { org: 'NSF', citation: 'National Sleep Foundation. Toddler Sleep Tips. SleepFoundation.org, 2024.', url: 'https://www.sleepfoundation.org/children-and-sleep' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Setting Limits for Children. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/family-life/family-dynamics/communication-discipline/Pages/default.aspx' },
    { org: 'Zero to Three', citation: 'Zero to Three. Sleep and Your Toddler.', url: 'https://www.zerotothree.org/resource/toddlers-and-sleep/' },
  ],
  relatedConcernSlugs: ['toddler-early-riser-solutions','early-morning-waking','baby-waking-at-5am','toddler-getting-out-of-bed-repeatedly'],
};
