import type { ConcernPage } from '@/data/concerns/types';
export const concern: ConcernPage = {
  slug: 'toddler-tantrum-public-handling', title: 'Managing Tantrums in Public', category: 'behavior',
  searchTerms: ['toddler tantrum in public','handling public meltdown','toddler screaming in store','public tantrum embarrassing','toddler tantrum grocery store','how to handle public tantrum','toddler meltdown in public','child screaming in restaurant','public tantrum tips','toddler tantrum outside home'],
  quickAnswer: 'Public tantrums feel more intense because of the added pressure of onlookers, but the same principles apply as at home: stay calm, ensure safety, do not give in to demands that caused the tantrum, and wait for it to pass. It is okay to calmly remove your child from the situation. Every parent has been there - you are not being judged as much as you think.',
  byAge: [
    { ageRange: '12-24 months', context: 'Young toddlers have no concept of social appropriateness. Remove them from stimulation if possible (go to the car, a quiet corner). Hold them calmly if they are safe. Distraction may work at this age - redirect attention to something interesting.' },
    { ageRange: '2-3 years', context: 'Prevention helps: go shopping when your child is rested and fed. Set clear expectations beforehand. If a tantrum happens, stay calm, get down to their level if possible, and speak quietly. If needed, calmly carry your child out. Do not negotiate or give in to demands during the tantrum.' },
    { ageRange: '3-4 years', context: 'Your child can now understand rules. Set expectations before entering a store or restaurant. Use natural consequences ("If you cannot be calm, we will leave"). Follow through consistently. Praise cooperative behavior enthusiastically.' },
    { ageRange: '4-5 years', context: 'Children this age can understand social norms. Talk about appropriate public behavior beforehand. If a meltdown happens, briefly acknowledge their feelings, then calmly state what will happen ("We are going to leave now"). Follow through without anger.' },
  ],
  whenNormal: ['Occasional public tantrums in toddlers are universal','Tantrums happen when your child is tired, hungry, or overstimulated','Your child recovers after the tantrum and the outing can sometimes continue','Public tantrums decrease with age and consistent responses'],
  whenToMention: ['Every outing results in a major meltdown making normal activities impossible','Your child has extreme reactions in all public settings suggesting anxiety','Public behavior is significantly worse than other children the same age'],
  whenToActNow: ['Your child runs into danger during public meltdowns','You feel unable to keep your child or others safe during episodes'],
  relatedMilestones: [], showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Temper Tantrums. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/family-life/family-dynamics/communication-discipline/Pages/Temper-Tantrums.aspx' },
    { org: 'Zero to Three', citation: 'Zero to Three. Taming Tantrums.', url: 'https://www.zerotothree.org/resource/toddler-tantrums/' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Positive Parenting Tips: Toddlers.', url: 'https://www.cdc.gov/ncbddd/childdevelopment/positiveparenting/toddlers.html' },
  ],
  relatedConcernSlugs: ['tantrums','toddler-tantrum-duration-normal','toddler-tantrum-frequency-normal','toddler-running-away-in-public'],
};
