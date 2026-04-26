import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'toddler-biting-self',
  title: 'Toddler Biting Self When Frustrated',
  category: 'behavior',
  searchTerms: [
    'toddler biting self',
    'toddler bites own hand',
    'toddler self-biting',
    'toddler bites arm when frustrated',
    'why does my toddler bite themselves',
    'toddler hurting themselves when angry',
    'toddler self-harm biting',
    'baby biting own fingers hard',
    'toddler bites self during tantrums',
    'is self-biting normal in toddlers',
  ],
  quickAnswer:
    'Self-biting during frustration is more common in toddlers than many parents realize. It typically occurs between 12 and 36 months when children have intense emotions but very limited ability to express or regulate them. The physical sensation of biting provides a form of sensory release when they feel overwhelmed. While it looks alarming, occasional self-biting during intense frustration is within the range of normal toddler behavior and usually resolves as emotional regulation and language skills develop.',
  byAge: [
    {
      ageRange: '8-12 months',
      context:
        'Some babies bite their own hands or arms during teething, which is sensory rather than emotional. They may also bite themselves during moments of high excitement or frustration as they discover the cause-and-effect of their own body. If the biting seems related to teething, offering appropriate teething toys can redirect the behavior.',
    },
    {
      ageRange: '12-24 months',
      context:
        'This is the most common age for self-biting during frustration. Your toddler has intense feelings but cannot express them with words. Biting provides an immediate physical outlet for overwhelming emotions. Stay calm, gently prevent the biting by redirecting their hands, and acknowledge their feeling: "You are really frustrated. I will not let you hurt yourself. Let\'s squeeze this toy instead." Teaching alternative physical outlets like stomping feet or squeezing a stress ball helps over time.',
    },
    {
      ageRange: '2-3 years',
      context:
        'Self-biting should gradually decrease as your child develops more language and emotional regulation. If your toddler is still frequently biting themselves, focus on building their vocabulary for emotions ("angry," "frustrated," "sad") and practicing coping strategies during calm moments. Role-play with stuffed animals can help: "Bear is really mad! What can Bear do instead of biting himself?"',
    },
    {
      ageRange: '3-4 years',
      context:
        'By age 3-4, most children have moved past self-biting. If the behavior continues to be frequent and intense, leaves marks, or is accompanied by other self-injurious behaviors, discuss it with your pediatrician. They can help determine whether anxiety, sensory processing differences, or other factors may be contributing and connect you with appropriate support.',
    },
  ],
  whenNormal: [
    'Your toddler bites themselves occasionally during intense tantrums or moments of peak frustration',
    'The biting does not leave lasting marks, bruises, or break the skin',
    'Your child is between 12 and 30 months and the behavior is occurring less frequently over time',
    'Self-biting happens only during moments of overwhelming emotion and not at random times',
    'Your child responds to redirection and calms down after the emotional peak passes',
  ],
  whenToMention: [
    'Self-biting is frequent (happening multiple times daily), is leaving marks or bruises, and is not decreasing over weeks of consistent redirection',
    'Self-biting is accompanied by other self-injurious behaviors like head banging, scratching, or pulling hair',
    'Your child seems to bite themselves at times that are not connected to frustration, such as during calm play or while alone',
  ],
  whenToActNow: [
    'Your child is breaking the skin, causing significant bruising, or biting themselves in ways that could cause injury',
    'Self-biting is sudden, new, and severe, especially if accompanied by other dramatic behavioral changes or regression',
  ],
  relatedMilestones: [
    'social-emotional-regulation',
    'language-expressive',
  ],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Self-Comforting Behaviors in Children. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/emotional-problems/Pages/Repetitive-Behaviors.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Positive Parenting Tips: Toddlers (1-2 years).',
      url: 'https://www.cdc.gov/ncbddd/childdevelopment/positiveparenting/toddlers.html',
    },
    {
      org: 'NIH',
      citation:
        'MedlinePlus. Temper Tantrums. U.S. National Library of Medicine.',
      url: 'https://medlineplus.gov/ency/article/001922.htm',
    },
  ],
};
