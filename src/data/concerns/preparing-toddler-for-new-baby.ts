import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'preparing-toddler-for-new-baby',
  title: 'Preparing a Toddler for a New Baby',
  category: 'behavior',
  searchTerms: [
    'preparing toddler for new baby',
    'toddler jealous of new baby',
    'sibling adjustment new baby',
    'toddler regression new baby',
    'how to prepare child for new sibling',
    'toddler acting out new baby',
    'older child adjusting to baby',
    'toddler hitting new baby',
    'sibling rivalry newborn',
  ],
  quickAnswer:
    'Adjusting to a new sibling is one of the biggest transitions a toddler will face, and some regression and behavioral changes are completely normal. Most toddlers need weeks to months to fully adjust, and their reactions can range from excitement to jealousy to temporary regression in skills they had mastered. With patience, consistent routines, and dedicated one-on-one time, most children settle into their new role as an older sibling.',
  byAge: [
    {
      ageRange: '12-24 months',
      context:
        'Toddlers under two have limited understanding of what a new baby means. They may not grasp explanations about pregnancy, so focus on simple, concrete preparations like reading books about babies and practicing gentle touch with dolls. After the baby arrives, expect clingy behavior, sleep disruptions, or changes in eating, as your toddler senses the shift in attention. Maintaining their existing routine as closely as possible provides the most comfort during this transition.',
    },
    {
      ageRange: '24-36 months',
      context:
        'Two-year-olds can understand more about what is happening but may still struggle with the reality of sharing their parents. Common reactions include demanding to be carried like a baby, reverting to diapers or a bottle, or acting out with hitting or tantrums. These are not signs of failure; they are expressions of big emotions your child does not yet have words for. Involving them in baby care tasks like fetching diapers or singing to the baby can help them feel included and important.',
    },
    {
      ageRange: '3-5 years',
      context:
        'Preschoolers can be more involved in preparation and may feel excited about their role as a big sibling. However, they may also express jealousy more directly through words or behavior changes at preschool. Setting aside regular one-on-one time, even just 10-15 minutes a day, has a significant positive impact on adjustment. Acknowledging their feelings without judgment, such as saying "It is hard to share Mommy and that is okay," validates their experience and builds emotional resilience.',
    },
  ],
  whenNormal: [
    'Your toddler has temporary regression in potty training, sleep, or speech around the time the new baby arrives',
    'Your child alternates between affection toward the baby and ignoring or expressing frustration about the baby',
    'Your toddler is more clingy, demanding, or emotional than usual for several weeks after the baby comes home',
    'Your child occasionally says things like "send the baby back" or "I don\'t like the baby," which is an honest expression of their feelings',
  ],
  whenToMention: [
    'Regression or behavioral changes are still intensifying after 2-3 months rather than gradually improving',
    'Your toddler is repeatedly aggressive toward the baby despite consistent redirection and supervision',
    'Your child seems persistently sad, withdrawn, or anxious in a way that is out of character and not improving',
    'You are feeling overwhelmed managing both children and need support or strategies from your pediatrician',
  ],
  whenToActNow: [
    'Your toddler has hurt the baby or made a serious attempt to harm the baby, requiring immediate safety planning',
    'Your child shows signs of severe emotional distress such as refusing to eat, extreme sleep disturbance, or complete withdrawal from all activities for more than a few days',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Preparing Your Family for a New Baby. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/prenatal/Pages/Preparing-Your-Family-for-a-New-Baby.aspx',
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
        'Zero to Three. Preparing Your Child for a New Sibling.',
      url: 'https://www.zerotothree.org/resource/preparing-your-child-for-a-new-sibling/',
    },
  ],
};
