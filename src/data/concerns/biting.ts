import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'biting',
  title: 'Toddler Biting',
  category: 'behavior',
  searchTerms: [
    'toddler biting other kids',
    'why does my toddler bite',
    'baby biting while breastfeeding',
    'toddler biting at daycare',
    'how to stop toddler from biting',
    'is biting normal for toddlers',
    '1 year old biting',
    'toddler biting when excited',
    'toddler biting themselves',
    'why does my baby bite me',
  ],
  quickAnswer:
    'Biting is one of the most common and developmentally normal behaviors in toddlers, especially between 12 and 36 months. It usually happens because toddlers lack the language skills to express frustration, excitement, or sensory needs. While it can feel alarming, most children outgrow biting as their communication skills develop.',
  byAge: [
    {
      ageRange: '6-12 months',
      context:
        'Babies at this age often bite while teething or exploring the world with their mouths, which is a primary way infants learn about objects and textures. Biting during breastfeeding is also common during teething. This type of biting is not aggressive  -  it is purely sensory and developmental. Offering appropriate teething toys can help redirect the behavior.',
    },
    {
      ageRange: '12-24 months',
      context:
        'This is the peak age for biting. Toddlers have big emotions but very limited ability to express them with words. Biting often happens during moments of frustration, overstimulation, excitement, or when a toddler wants a toy another child has. It can also be experimental  -  they are learning about cause and effect. A calm, brief response ("No biting. Biting hurts.") is more effective than a big reaction.',
    },
    {
      ageRange: '2-3 years',
      context:
        'As language skills grow, biting typically decreases. If your 2-year-old is still biting frequently, focus on teaching them words for their feelings and offering alternatives like "Say \'mine\' instead of biting." Consistent, patient responses work better than punishment. Most children stop biting almost entirely by age 3 as verbal skills catch up to their emotions.',
    },
    {
      ageRange: '3+ years',
      context:
        'By age 3-4, most children have enough language and emotional regulation to have stopped biting. If a child over 3 is still biting frequently, especially if it seems aggressive rather than reactive, it is worth discussing with your pediatrician. They can help evaluate whether there might be underlying sensory, emotional, or communication factors.',
    },
  ],
  whenNormal: [
    'Your baby is teething and biting on objects, fingers, or during breastfeeding',
    'Your toddler bites occasionally during moments of frustration or excitement but responds to redirection',
    'Biting happens mainly with siblings or at daycare during conflicts over toys or space',
    'Your child is between 12-30 months and the biting is decreasing as their language improves',
    'Your toddler seems surprised or upset after biting, showing they are starting to understand it hurts others',
  ],
  whenToMention: [
    'Biting is happening multiple times a day and does not seem to be decreasing over weeks despite consistent responses',
    'Your child is over 3 years old and still biting regularly',
    'Your child bites themselves hard enough to leave marks, especially during frustration or meltdowns',
    'Biting is accompanied by other persistent aggressive behaviors like frequent hitting, kicking, or throwing objects at people',
  ],
  whenToActNow: [
    'A bite breaks the skin  -  clean the wound thoroughly and watch for signs of infection (redness, swelling, warmth, pus)',
    'Your child suddenly starts biting after a period of not doing so, combined with other behavioral changes, regression, or signs of stress or pain',
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
        'American Academy of Pediatrics. Biting. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/family-life/family-dynamics/communication-discipline/Pages/Biting.aspx',
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
        'Zero to Three. Toddlers and Biting: Finding the Right Response.',
      url: 'https://www.zerotothree.org/resource/toddlers-and-biting-finding-the-right-response/',
    },
  ],
};
