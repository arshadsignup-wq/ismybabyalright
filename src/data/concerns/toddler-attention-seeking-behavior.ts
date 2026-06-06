import type { ConcernPage } from '@/data/concerns/types';
export const concern: ConcernPage = {
  slug: 'toddler-attention-seeking-behavior', title: 'Toddler Attention-Seeking Behavior', category: 'behavior',
  searchTerms: ['toddler attention seeking','toddler always wants attention','toddler demands constant attention','toddler clingy wants attention','toddler acts out for attention','toddler negative attention seeking','toddler misbehaves for attention','toddler cant play alone','toddler needs constant entertainment','toddler craves attention'],
  quickAnswer: 'What we call "attention-seeking behavior" is actually "connection-seeking behavior." Young children are biologically wired to seek closeness with their caregivers - it is a survival instinct, not manipulation. When a child acts out to get attention, they are communicating a genuine need for connection. The solution is not to ignore the need but to fill it proactively so the child does not need to resort to negative behaviors.',
  byAge: [
    { ageRange: '12-24 months', context: 'Toddlers need almost constant engagement with a caregiver. Wanting your attention all the time at this age is completely normal and biologically appropriate. Short periods of independent play are emerging but your child still needs you close by.' },
    { ageRange: '2-3 years', context: 'Children this age can play independently for short periods (5-15 minutes) but still need frequent check-ins and connection. If negative attention-seeking increases, try filling their "attention cup" proactively with focused one-on-one time, then gradually encourage independent play.' },
    { ageRange: '3-4 years', context: 'Independent play increases but your child still needs regular connection. If your child acts out when you are busy, try special time: 10-15 minutes of fully focused, child-led play daily. This proactive connection often reduces negative attention-seeking dramatically.' },
    { ageRange: '4-5 years', context: 'Children can play independently for longer stretches. If attention-seeking behavior remains intense, consider whether there have been changes (new sibling, starting school, family stress). Maintain regular special time and catch your child being good - give attention for positive behavior.' },
  ],
  whenNormal: ['Your toddler wants your attention frequently - this is developmentally appropriate','Attention-seeking decreases when your child has had quality connection time','Your child can play independently for age-appropriate periods','Attention-seeking increases during times of stress or change'],
  whenToMention: ['Attention-seeking behavior is extreme and constant despite adequate one-on-one time','Your child cannot engage in any independent play at an age when peers can','Negative attention-seeking is the primary way your child interacts','Behavior is significantly impacting family functioning'],
  whenToActNow: ['Your child endangers themselves to get attention','You feel overwhelmed and unable to meet your child\'s needs'],
  relatedMilestones: [], showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Positive Reinforcement. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/family-life/family-dynamics/communication-discipline/Pages/Positive-Reinforcement.aspx' },
    { org: 'Zero to Three', citation: 'Zero to Three. Challenging Behaviors: Understanding and Responding.', url: 'https://www.zerotothree.org/resource/challenging-behaviors/' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Positive Parenting Tips.', url: 'https://www.cdc.gov/ncbddd/childdevelopment/positiveparenting/toddlers.html' },
  ],
  relatedConcernSlugs: ['toddler-clinginess-to-one-parent','toddler-testing-limits-constantly','toddler-power-struggles-daily','separation-anxiety'],
};
