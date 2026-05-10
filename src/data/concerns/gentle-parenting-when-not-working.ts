import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'gentle-parenting-when-not-working',
  title: 'When Gentle Parenting Isn\'t Working',
  category: 'behavior',
  searchTerms: [
    'gentle parenting not working toddler',
    'toddler ignores gentle parenting',
    'gentle parenting toddler still misbehaving',
    'why gentle parenting doesn\'t work',
    'toddler doesn\'t respond to gentle discipline',
    'failing at gentle parenting',
    'gentle parenting too permissive',
    'gentle parenting burnout',
    'alternative to gentle parenting',
  ],
  quickAnswer:
    'Gentle parenting — which emphasizes empathy, boundaries, and respectful communication — is well-supported by research on child development. However, many parents struggle with implementation, especially during the intense toddler years. Common pitfalls include confusing "gentle" with "permissive" (no boundaries), spending so long validating feelings that boundaries never get set, and expecting immediate behavior change. Gentle parenting still includes firm limits — the "gentle" part is in how you enforce them, not in whether you enforce them.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Gentle parenting with newborns is simply responsive parenting — attending to cries, providing comfort, and meeting needs. There are no discipline challenges at this age. If you feel pressure to implement a complex gentle parenting framework for a newborn, simplify: respond to your baby\'s cues and take care of yourself.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Babies begin to develop routines and preferences. Gentle parenting at this age means being responsive while also beginning to establish consistent routines. There is no conflict between being gentle and having structure.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As babies become mobile and curious, redirection becomes a key tool. Gentle parenting does not mean allowing your baby to do whatever they want — it means calmly redirecting them from unsafe situations without shouting, shaming, or physical punishment.',
    },
    {
      ageRange: '12 months+',
      context:
        'The toddler years are where gentle parenting feels hardest. If your toddler ignores you, throws things, or hits despite your calm explanations, you are not failing. Toddlers need hundreds of repetitions to learn limits. Ensure you are setting clear boundaries ("I won\'t let you hit"), following through with consequences (removing from the situation), and not just endlessly narrating feelings without action. It is gentle AND firm, not just gentle.',
    },
  ],
  whenNormal: [
    'Your toddler tests limits repeatedly despite your consistent, calm responses — this requires hundreds of repetitions',
    'You sometimes lose your patience and raise your voice — recovering and repairing matters more than being perfect',
    'Gentle parenting feels harder with your child than it looks online — every child and family is different',
    'Your child\'s behavior improves slowly over weeks and months rather than immediately',
  ],
  whenToMention: [
    'Your child\'s behavior is not improving despite months of consistent gentle parenting with clear boundaries — not permissiveness',
    'You are so focused on being gentle that you are unable to set any limits, and your child\'s behavior is escalating',
    'Parenting guilt and pressure to be "gentle" all the time is significantly affecting your mental health',
  ],
  whenToActNow: [
    'Your child has persistent, severe behavioral issues — extreme aggression, self-harm, or prolonged inconsolable tantrums — that may indicate a need beyond any parenting approach',
    'You feel you are unable to cope and are at risk of harming yourself or your child — seek help immediately regardless of parenting philosophy',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'attachment-parenting-burnout',
    'co-parenting-different-styles',
    'sleep-training-guilt-methods',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. How to Shape and Manage Your Young Child\'s Behavior. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/family-life/family-dynamics/communication-discipline/Pages/How-to-Shape-Manage-Young-Child-Behavior.aspx',
    },
    {
      org: 'NIH',
      citation:
        'Gershoff, E. et al. The Strength of the Evidence Against Physical Punishment of Children. Psychology, Public Policy, and Law. 2013.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/',
    },
  ],
};
