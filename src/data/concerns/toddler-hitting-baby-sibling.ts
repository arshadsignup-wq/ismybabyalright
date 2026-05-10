import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'toddler-hitting-baby-sibling',
  title: 'Toddler Hitting Baby Sibling',
  category: 'behavior',
  searchTerms: [
    'toddler hitting newborn baby',
    'toddler slapping baby brother',
    'my toddler hits the baby',
    'toddler aggressive toward baby sibling',
    'how to stop toddler from hitting baby',
    'toddler rough with newborn',
    'toddler pushing baby over',
    'is it normal for toddler to hit baby sibling',
  ],
  quickAnswer:
    'It is very common for toddlers to hit, push, or be rough with a baby sibling. Toddlers have limited impulse control and cannot fully understand that the baby is fragile. This behavior is usually driven by jealousy, frustration, curiosity, or a desire for attention rather than malice. Close supervision, calm redirection, and teaching gentle touch are the most effective strategies.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'In the early weeks, the older toddler may test boundaries with the new baby out of curiosity or jealousy. They may poke, pat too hard, or try to pick up the baby. Never leave the toddler and baby unsupervised, even briefly. Show the toddler how to touch gently and praise every positive interaction.',
    },
    {
      ageRange: '3-6 months',
      context:
        'As the novelty of the baby wears off and the baby demands more attention, hitting may increase. The toddler may act out when you are feeding, holding, or soothing the baby. Try to involve the older child during baby care routines and provide special activities they can do nearby.',
    },
    {
      ageRange: '6-12 months',
      context:
        'When the baby starts crawling and getting into the toddler\'s toys and space, physical aggression often peaks. The toddler may feel their territory is being invaded. Help the older child have a safe space for their belongings and supervise all interactions closely.',
    },
    {
      ageRange: '12 months+',
      context:
        'With both children mobile and competing for resources, physical conflicts become two-sided. Teaching both children about gentle hands, using simple emotion words, and modeling conflict resolution become essential daily practices. Hitting should gradually decrease as language and emotional regulation improve.',
    },
  ],
  whenNormal: [
    'Your toddler occasionally hits, pushes, or is rough with the baby, especially during transitions or when the baby is getting attention',
    'The hitting is impulsive rather than planned, and your toddler shows some remorse or understanding when redirected',
    'Rough behavior decreases over time with consistent teaching and supervision',
    'Your toddler also shows affection toward the baby at other times',
  ],
  whenToMention: [
    'Hitting is frequent, intense, and not improving despite consistent intervention over several weeks',
    'Your toddler seems to seek out the baby specifically to hurt them, even when they are not competing for attention or toys',
    'Your toddler shows no concern or remorse when the baby cries after being hit, even after being told they hurt the baby',
  ],
  whenToActNow: [
    'Your toddler has injured the baby or uses objects to hit the baby',
    'You feel unable to keep the baby safe from the older sibling despite constant supervision',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'sibling-rivalry-toddler',
    'new-sibling-adjustment-regression',
    'aggressive-play-vs-normal-play',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. How to Shape and Manage Your Young Child\'s Behavior. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/family-life/family-dynamics/communication-discipline/Pages/How-to-Shape-Manage-Young-Child-Behavior.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Aggressive Behavior. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/family-life/family-dynamics/communication-discipline/Pages/Aggressive-Behavior.aspx',
    },
  ],
};
