import type { ConcernPage } from '@/data/concerns/types';
export const concern: ConcernPage = {
  slug: 'toddler-scratching-others', title: 'Toddler Scratches Others When Upset', category: 'behavior',
  searchTerms: ['toddler scratching','toddler scratches others','toddler scratches face','toddler scratching at daycare','toddler scratches parent','toddler claws at people','toddler scratching when angry','stop toddler scratching others','toddler fingernail scratching','toddler scratches siblings'],
  quickAnswer: 'Scratching is a common form of physical aggression in toddlers, often occurring alongside hitting and biting. Like other physical behaviors, it stems from frustration and limited communication skills. Keeping nails trimmed short can reduce injury while you work on teaching alternatives. The same approach applies as with other physical aggression: stay calm, stop the behavior, name the feeling, and teach what to do instead.',
  byAge: [
    { ageRange: '6-12 months', context: 'Babies scratch faces (their own and yours) mainly because they have poor motor control and their nails are sharp. This is not aggressive behavior. Keep nails trimmed and filed. When baby grabs your face, gently move their hand and say "Gentle touch."' },
    { ageRange: '12-24 months', context: 'Scratching becomes more intentional as a way to express frustration or get a reaction. Your toddler may scratch during struggles over toys or when they do not want to be held. Keep nails short, intervene quickly, and model gentle touching. "Hands are for gentle touches, not scratching."' },
    { ageRange: '2-3 years', context: 'If scratching persists, be consistent with your response: calmly remove your child, attend to the person who was scratched first (this avoids reinforcing the behavior with attention), then address your child. "Scratching hurts. I see you were angry. You can use your words instead."' },
    { ageRange: '3-5 years', context: 'Scratching should decrease significantly. If it continues, your child may need additional support with impulse control and emotional expression. Talk about what happened after everyone is calm: "What were you feeling? What could you do next time instead?"' },
  ],
  whenNormal: ['Occasional scratching in toddlers under age 3','Scratching that occurs during moments of frustration or conflict','Scratching decreases as communication improves','Your child can be redirected after the episode'],
  whenToMention: ['Scratching is frequent and causing injury to others','Your child scratches themselves deliberately when upset','Scratching continues past age 3 despite consistent intervention','Scratching is part of a broader pattern of aggression'],
  whenToActNow: ['Scratching causes wounds that may need medical attention','Your child is injuring themselves through scratching'],
  relatedMilestones: [], showSelfReferral: false,
  sources: [
    { org: 'Zero to Three', citation: 'Zero to Three. Aggressive Behavior in Toddlers.', url: 'https://www.zerotothree.org/resource/aggressive-behavior-in-toddlers/' },
    { org: 'AAP', citation: 'American Academy of Pediatrics. Aggressive Behavior. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/family-life/family-dynamics/communication-discipline/Pages/Aggressive-Behavior.aspx' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Positive Parenting Tips.', url: 'https://www.cdc.gov/ncbddd/childdevelopment/positiveparenting/toddlers.html' },
  ],
  relatedConcernSlugs: ['toddler-hitting-when-angry','toddler-pinching-behavior','toddler-pulling-hair-others','toddler-gentle-hands-teaching'],
};
