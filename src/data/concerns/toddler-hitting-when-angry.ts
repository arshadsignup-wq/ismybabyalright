import type { ConcernPage } from '@/data/concerns/types';
export const concern: ConcernPage = {
  slug: 'toddler-hitting-when-angry', title: 'Toddler Hits When Angry or Frustrated', category: 'behavior',
  searchTerms: ['toddler hitting','toddler hits when angry','toddler hits parents','toddler hitting other kids','toddler slapping face','toddler hitting phase','stop toddler hitting','toddler aggressive hitting','toddler hits when frustrated','why does my toddler hit'],
  quickAnswer: 'Hitting is one of the most common toddler behaviors and is developmentally normal between ages 1-3. Your toddler hits because their emotions are bigger than their ability to manage them, and physical expression is their most available tool. Hitting does not mean your child is aggressive or that you are failing as a parent. Respond by calmly stopping the behavior, naming the emotion, and teaching alternatives over many, many repetitions.',
  byAge: [
    { ageRange: '12-18 months', context: 'Hitting at this age is often experimental or a response to overwhelming emotion. Your child does not understand that hitting hurts others. Gently catch their hand, say "Gentle hands" and show them how to touch gently. Stay calm and consistent.' },
    { ageRange: '18-30 months', context: 'Hitting increases as emotions intensify. Your child may hit you, other children, or themselves when frustrated, angry, or overwhelmed. Stay close during playdates, intervene before hitting when possible, and consistently remove them when they hit. "I will not let you hit. Hitting hurts."' },
    { ageRange: '2.5-4 years', context: 'As language develops, teach specific alternatives: "When you are angry, you can stamp your feet, squeeze your hands, or say I am mad. You may not hit." This takes hundreds of repetitions over months or years. Praise every time they use words instead of hitting.' },
    { ageRange: '4-5 years', context: 'Hitting should be rare by this age. If your child still frequently hits peers or adults, or if hitting is increasing rather than decreasing, discuss with your pediatrician. Consider whether your child needs support with emotional regulation or social skills.' },
  ],
  whenNormal: ['Toddlers hit - it is one of the most common behaviors at this age','Hitting decreases as communication and regulation skills develop','Your child does not plan attacks but hits impulsively in the moment','Hitting is limited to certain triggers like frustration or overwhelm'],
  whenToMention: ['Hitting is increasing in frequency or intensity','Your child hits frequently at daycare and is being sent home','Hitting continues past age 4 without improvement','Your child seems to enjoy hurting others or shows no concern afterward'],
  whenToActNow: ['Your child injures other children seriously','Hitting is part of a pattern of escalating aggression'],
  relatedMilestones: [], showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Aggressive Behavior. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/family-life/family-dynamics/communication-discipline/Pages/Aggressive-Behavior.aspx' },
    { org: 'Zero to Three', citation: 'Zero to Three. Aggressive Behavior in Toddlers.', url: 'https://www.zerotothree.org/resource/aggressive-behavior-in-toddlers/' },
    { org: 'NIH', citation: 'Tremblay RE et al. Physical aggression during early childhood. Pediatrics. 2004;114(1):e43-e50.', url: 'https://pubmed.ncbi.nlm.nih.gov/15231972/' },
  ],
  relatedConcernSlugs: ['toddler-biting-when-frustrated','toddler-kicking-when-upset','toddler-anger-management-skills','toddler-gentle-hands-teaching'],
};
