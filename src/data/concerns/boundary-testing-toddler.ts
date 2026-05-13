import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'boundary-testing-toddler',
  title: 'Boundary Testing in Toddlers',
  category: 'behavior',
  searchTerms: [
    'toddler testing boundaries',
    'toddler pushing limits',
    'toddler does what you say not to',
    'toddler looks at you then does it anyway',
    'why does toddler keep doing what I said no to',
    'toddler deliberately disobeying',
    'toddler testing limits normal',
    'toddler repeats bad behavior',
  ],
  quickAnswer:
    'When your toddler looks right at you and does exactly what you told them not to, they are not being malicious. They are conducting an important experiment about how the world works: "What happens when I do this? Will the response be the same every time?" Boundary testing is a sign of healthy cognitive development and shows that your child is learning about cause and effect, social rules, and your reliability as a caregiver.',
  byAge: [
    {
      ageRange: '6-12 months',
      context:
        'Babies begin very early boundary testing by doing things like dropping food off the high chair repeatedly. This is actually a physics experiment, not misbehavior. They are learning about gravity, cause and effect, and your reaction. Responding with calm consistency, rather than frustration, helps them feel secure while satisfying their curiosity.',
    },
    {
      ageRange: '12-24 months',
      context:
        'This is when deliberate boundary testing really begins. Your toddler may reach for a forbidden object while watching your face, touch something they know is off-limits, or hit and then look at your reaction. They are not trying to make you angry. They are testing whether rules are consistent and whether you will keep them safe. Short, calm, consistent responses work best.',
    },
    {
      ageRange: '24-36 months',
      context:
        'Boundary testing becomes more creative and persistent. Your toddler may test the same boundary dozens of times, try new approaches to circumvent a rule, or test boundaries differently with different caregivers. This sophistication is a sign of advanced cognitive development. Children this age need consistency across caregivers and environments to learn where the boundaries truly are. It is normal for this process to take many repetitions.',
    },
  ],
  whenNormal: [
    'Your toddler tests the same boundary repeatedly even though you have responded consistently each time, as repetition is how they learn',
    'Your child tests boundaries more with parents than with less familiar adults, which shows they feel safe with you',
    'Boundary testing increases when your child is tired, hungry, or overstimulated',
    'Your toddler tests different boundaries with different caregivers to see if rules are consistent',
  ],
  whenToMention: [
    'Boundary testing involves consistently dangerous behavior that your child seems unable to stop despite clear consequences and redirection',
    'Your child shows no awareness of or interest in social rules or the emotional reactions of others, even by age 2-3',
    'Boundary testing is accompanied by extreme distress, as though your child wants to stop but cannot control the impulse',
    'You are finding it very difficult to remain calm and consistent, and would benefit from strategies or support',
  ],
  whenToActNow: [
    'Your child is repeatedly engaging in self-harmful behavior such as head-banging against hard surfaces, biting themselves, or pulling out their own hair',
    'Boundary testing involves extreme, escalating aggression toward other children or animals that goes well beyond typical toddler impulsiveness',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Disciplining Your Child. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/family-life/family-dynamics/communication-discipline/Pages/Disciplining-Your-Child.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Positive Parenting Tips: Toddlers (1-2 years).',
      url: 'https://www.cdc.gov/ncbddd/childdevelopment/positiveparenting/toddlers.html',
    },
    {
      org: 'Zero to Three',
      citation:
        'Zero to Three. Toddlers and Challenging Behavior: Why They Do It and How to Respond.',
      url: 'https://www.zerotothree.org/resource/toddlers-and-challenging-behavior/',
    },
  ],
};
