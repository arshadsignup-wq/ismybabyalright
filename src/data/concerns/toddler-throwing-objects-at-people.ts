import type { ConcernPage } from '@/data/concerns/types';
export const concern: ConcernPage = {
  slug: 'toddler-throwing-objects-at-people', title: 'Toddler Throws Things at People', category: 'behavior',
  searchTerms: ['toddler throwing things at people','toddler throws toys','toddler throws things when angry','toddler throwing objects','toddler throws food','toddler throwing phase','stop toddler throwing','toddler hurls things','toddler throws at other kids','toddler dangerous throwing'],
  quickAnswer: 'Throwing is actually a developmental milestone - it requires coordination and motor planning. Young toddlers throw to explore cause and effect. Older toddlers throw when frustrated because it is a powerful physical release. The goal is not to stop all throwing but to teach what can be thrown (balls outside) and what cannot (toys at people). Channel the urge rather than eliminate it.',
  byAge: [
    { ageRange: '12-18 months', context: 'Throwing emerges as a motor skill. Your baby drops and throws things to learn about gravity and cause and effect. This is not aggressive. Provide safe things to throw (soft balls, beanbags) and set up throwing play. Redirect unsafe throwing without punishing the skill itself.' },
    { ageRange: '18-30 months', context: 'Throwing during anger or frustration is common. Your child is flooded with emotion and throwing provides physical release. Stay calm, remove dangerous objects, and set the limit: "I cannot let you throw that. You can throw this ball instead." Offer a safe alternative for the physical impulse.' },
    { ageRange: '2.5-4 years', context: 'Teach the rule: "Balls are for throwing. Toys are not for throwing at people." Use natural consequences: "If you throw the toy, I will put it away because throwing toys is not safe." Follow through consistently. Provide plenty of opportunities for safe throwing through play.' },
    { ageRange: '4-5 years', context: 'Throwing at people should be rare. If your child still throws objects when angry, they may need more support with emotional regulation and impulse control. Help them identify the feeling before the throwing impulse and practice alternatives.' },
  ],
  whenNormal: ['Young toddlers throwing to explore - this is a motor milestone','Occasional throwing during intense frustration','Throwing that decreases with consistent redirection','Your child can be taught what is okay to throw and what is not'],
  whenToMention: ['Your child deliberately throws heavy or dangerous objects at people','Throwing at others continues past age 3-4 despite consistent intervention','Throwing is part of a broader pattern of aggression','Your child targets specific people with thrown objects'],
  whenToActNow: ['Your child has injured someone by throwing objects','Throwing behavior is escalating in intensity and frequency'],
  relatedMilestones: [], showSelfReferral: false,
  sources: [
    { org: 'Zero to Three', citation: 'Zero to Three. Aggressive Behavior in Toddlers.', url: 'https://www.zerotothree.org/resource/aggressive-behavior-in-toddlers/' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. How to Shape and Manage Your Child\'s Behavior. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/family-life/family-dynamics/communication-discipline/Pages/How-to-Shape-Manage-Young-Child-Behavior.aspx' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Positive Parenting Tips.', url: 'https://www.cdc.gov/ncbddd/childdevelopment/positiveparenting/toddlers.html' },
  ],
  relatedConcernSlugs: ['toddler-hitting-when-angry','toddler-anger-management-skills','toddler-impulse-control-development','toddler-emotional-regulation-skills'],
};
