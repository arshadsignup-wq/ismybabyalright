import type { ConcernPage } from '@/data/concerns/types';
export const concern: ConcernPage = {
  slug: 'toddler-pinching-behavior', title: 'Toddler Pinches Others', category: 'behavior',
  searchTerms: ['toddler pinching','toddler pinches others','toddler pinching parents','toddler pinching at daycare','toddler pinches when angry','toddler pinching behavior','stop toddler pinching','toddler pinches hard','toddler pinching siblings','why toddler pinching'],
  quickAnswer: 'Pinching is a common toddler behavior that usually emerges between 12-30 months. Like other forms of physical aggression, it happens because toddlers experience emotions they cannot yet express with words. Pinching can also be a sensory-seeking behavior or an attempt to get a reaction. The key is consistent, calm intervention: stop the behavior, name the feeling, and teach an alternative.',
  byAge: [
    { ageRange: '12-18 months', context: 'Pinching at this age is often exploratory. Your baby is discovering cause and effect: "I squeeze and something happens!" They may pinch your arm while nursing or grab skin while being held. Gently remove their hand and say "Ouch, that hurts. Gentle hands" while showing a soft touch.' },
    { ageRange: '18-30 months', context: 'Pinching becomes more intentional, often occurring during frustration, toy disputes, or when seeking attention. Some toddlers pinch because they get a big reaction. Keep your response calm but firm: "I will not let you pinch. Pinching hurts." Then redirect.' },
    { ageRange: '2.5-3.5 years', context: 'As language develops, help your child use words instead: "Tell your friend: I do not like that. Instead of pinching, say stop." Practice these scripts during calm moments. If pinching continues, remove your child from the situation briefly.' },
    { ageRange: '3.5-5 years', context: 'Pinching should be rare. If it persists, look for patterns: when does it happen, with whom, and what is the trigger? Some children pinch as a sensory-seeking behavior and may benefit from sensory alternatives like squeezing putty or stress balls.' },
  ],
  whenNormal: ['Occasional pinching in toddlers under age 3','Pinching that occurs during moments of frustration','Pinching decreases with consistent intervention and improved communication','Your child is remorseful or can be redirected after pinching'],
  whenToMention: ['Pinching is very frequent despite consistent responses','Your child pinches hard enough to cause bruising','Pinching continues past age 3-4','Pinching is one of several aggressive behaviors'],
  whenToActNow: ['Pinching is causing significant injury','Aggressive behaviors are escalating across multiple forms'],
  relatedMilestones: [], showSelfReferral: false,
  sources: [
    { org: 'Zero to Three', citation: 'Zero to Three. Aggressive Behavior in Toddlers.', url: 'https://www.zerotothree.org/resource/aggressive-behavior-in-toddlers/' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Aggressive Behavior. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/family-life/family-dynamics/communication-discipline/Pages/Aggressive-Behavior.aspx' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Positive Parenting Tips: Toddlers.', url: 'https://www.cdc.gov/ncbddd/childdevelopment/positiveparenting/toddlers.html' },
  ],
  relatedConcernSlugs: ['toddler-scratching-others','toddler-hitting-when-angry','toddler-biting-when-frustrated','toddler-gentle-hands-teaching'],
};
