import type { ConcernPage } from '@/data/concerns/types';
export const concern: ConcernPage = {
  slug: 'toddler-anger-management-skills', title: 'Teaching Toddlers to Manage Anger', category: 'behavior',
  searchTerms: ['toddler anger management','toddler angry all the time','toddler rage','teaching toddler about anger','toddler fury','toddler aggressive anger','toddler mad constantly','toddler anger issues','toddler explosive anger','toddler cannot handle anger'],
  quickAnswer: 'Anger is a normal, healthy emotion. The goal is not to prevent your toddler from feeling angry but to teach them safe ways to express and manage anger. Toddlers lack the brain development to regulate strong emotions independently - they need your calm, consistent coaching over many years. Punishing anger teaches children to suppress it rather than manage it.',
  byAge: [
    { ageRange: '12-24 months', context: 'Young toddlers express anger physically because they have no words for it. Expect hitting, biting, throwing, and screaming when frustrated. Stay calm, stop unsafe behavior gently, and name the emotion: "You are angry because I took that away." This builds the foundation.' },
    { ageRange: '2-3 years', context: 'Your child can begin learning simple anger management: stomping feet instead of hitting, squeezing a stuffed animal, or saying "I am mad." Model calm anger yourself. When your child sees you say "I am frustrated but I am going to take a deep breath," they learn regulation by watching you.' },
    { ageRange: '3-4 years', context: 'Children can learn to use words, take space, or use calming tools when angry. Create a calm-down kit with putty, a stress ball, or feelings cards. Practice these strategies when your child is calm so they are accessible during anger. Be patient - this takes hundreds of repetitions.' },
    { ageRange: '4-5 years', context: 'Children develop better impulse control and can start using strategies independently, though they still need reminders. Help them identify anger triggers and body signals (clenched fists, hot face). Problem-solving after anger episodes teaches valuable skills.' },
  ],
  whenNormal: ['Your toddler gets angry - anger is a normal emotion','Physical expressions of anger in young toddlers who lack verbal skills','Anger that resolves and your child can return to play','Gradual improvement in managing anger with age and coaching'],
  whenToMention: ['Anger seems disproportionate to triggers and is very intense','Your child is aggressive toward others frequently','Anger episodes last very long and your child cannot recover','Your child seems angry most of the time, not just in specific situations'],
  whenToActNow: ['Your child injures themselves or others during anger episodes','You are worried about your own anger in response to your child'],
  relatedMilestones: [], showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. How to Shape and Manage Your Child\'s Behavior. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/family-life/family-dynamics/communication-discipline/Pages/How-to-Shape-Manage-Young-Child-Behavior.aspx' },
    { org: 'Zero to Three', citation: 'Zero to Three. Aggressive Behavior in Toddlers.', url: 'https://www.zerotothree.org/resource/aggressive-behavior-in-toddlers/' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Positive Parenting Tips: Toddlers.', url: 'https://www.cdc.gov/ncbddd/childdevelopment/positiveparenting/toddlers.html' },
  ],
  relatedConcernSlugs: ['tantrums','toddler-hitting-when-angry','toddler-biting-when-frustrated','toddler-emotional-regulation-skills'],
};
