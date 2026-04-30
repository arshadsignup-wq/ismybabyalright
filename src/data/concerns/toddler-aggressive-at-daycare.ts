import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-aggressive-at-daycare',
  title: 'Toddler Being Aggressive at Daycare',
  category: 'behavior',
  searchTerms: ['toddler aggressive at daycare', 'toddler hitting at daycare', 'toddler biting at daycare', 'toddler behavior problems daycare', 'toddler pushing kids at daycare', 'toddler kicked out of daycare', 'toddler fighting at daycare', 'toddler hurting other kids', 'toddler aggressive with other children', 'daycare behavior report toddler'],
  quickAnswer: 'Aggressive behavior at daycare - hitting, biting, pushing, or grabbing - is very common in toddlers, particularly between ages 1-3. Toddlers are still developing impulse control, emotional regulation, and communication skills, and they often resort to physical behavior when they are frustrated, overwhelmed, tired, or unable to express their needs verbally. This does not mean your toddler is a "bad child" or that you are doing something wrong. Most toddler aggression decreases significantly as language skills improve and emotional regulation develops, typically between ages 3-4.',
  byAge: [
    { ageRange: '0-12 months', context: 'Babies do not act with aggressive intent. A baby who grabs, pulls hair, or bites during play is exploring and does not understand they are causing pain. Gently stopping the behavior and saying "Ouch, that hurts" while modeling gentle touch ("gentle hands") is appropriate. If your baby is in a daycare setting and biting during teething, providing appropriate teething toys can help redirect the urge to bite.' },
    { ageRange: '1-3 years', context: 'Toddler aggression in daycare is extremely common and usually peaks between 18-30 months. Common triggers include: not being able to communicate needs, difficulty sharing, transitions between activities, tiredness, hunger, overstimulation, and adjusting to the daycare environment. Work with daycare staff to identify triggers and patterns. At home, practice using words for emotions, role-play sharing, read books about feelings, and model gentle behavior. Ensure your child is getting enough sleep and food. Aggression that is persistent, severe, or not improving by age 3-4 may benefit from a behavioral consultation.' },
  ],
  whenNormal: ['Occasional hitting, pushing, or biting in a toddler under 3 who is still learning to communicate', 'Aggression that has identifiable triggers (sharing disputes, transitions, tiredness)', 'Behavior that is improving gradually over time', 'Your child shows remorse or understanding when redirected ("We don\'t hit, hitting hurts")'],
  whenToMention: ['Aggression is frequent and your child is at risk of being dismissed from daycare', 'The behavior is not improving despite consistent strategies at home and daycare', 'Your child seems to be targeting the same child repeatedly', 'Aggression is accompanied by other behavioral concerns (extreme defiance, destruction of property, hurting animals)'],
  whenToActNow: ['Your child is causing significant injury to other children', 'Aggression is sudden, severe, and out of character', 'The behavior is accompanied by developmental regression or other new concerning behaviors', 'Your child seems fearful, withdrawn, or is showing signs of being mistreated at daycare'],
  relatedMilestones: ['social-emotional'],
  showSelfReferral: false,
  relatedConcernSlugs: ['biting', 'hitting', 'tantrums', 'toddler-not-playing-with-other-kids'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Aggressive Behavior. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/family-life/family-dynamics/communication-discipline/Pages/Aggressive-Behavior.aspx' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Positive Parenting Tips for Toddlers.', url: 'https://www.cdc.gov/ncbddd/childdevelopment/positiveparenting/toddlers.html' },
    { org: 'NIH', citation: 'National Library of Medicine. Aggression in Young Children.', url: 'https://pubmed.ncbi.nlm.nih.gov/' },
  ],
};
