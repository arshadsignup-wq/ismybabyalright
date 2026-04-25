import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'no-social-smile',
  title: 'Baby Not Smiling Back (No Social Smile)',
  category: 'behavior',
  searchTerms: [
    'baby not smiling back at me',
    'baby doesn\'t smile when I smile',
    'no social smile baby',
    'baby won\'t smile at people',
    'baby not smiling in response',
    'baby doesn\'t return smile',
    'when do babies smile at you',
    'baby not responsive smiling',
    'baby not smiling at faces',
    'baby doesn\'t smile when I talk to them',
  ],
  quickAnswer:
    'A social smile  -  smiling specifically in response to seeing a face, hearing a voice, or during interaction  -  is one of the earliest and most meaningful social milestones. It typically develops between 6-12 weeks of age. While a general smile might happen randomly, a social smile is directed at people and shows your baby is connecting with you. If your baby is not showing social smiles by 3 months, it is worth discussing with your pediatrician.',
  byAge: [
    {
      ageRange: '0-6 weeks',
      context:
        'Before 6 weeks, smiles are generally reflexive  -  they happen during sleep or at random and are not in response to social interaction. Your baby may appear to smile when passing gas or during certain sleep stages. True social smiling has not yet developed, so the absence of responsive smiling at this age is completely expected and not a concern.',
    },
    {
      ageRange: '6-12 weeks',
      context:
        'This is the key window for the emergence of social smiling. Your baby may begin to smile when they see your face up close, hear your voice, or feel gentle touch. These smiles are different from reflexive ones  -  they involve the whole face, including the eyes, and are clearly directed at another person. Some babies develop this closer to 6 weeks, others closer to 12 weeks, and both are within normal range.',
    },
    {
      ageRange: '3-4 months',
      context:
        'By 3 months, most babies are smiling socially and regularly  -  lighting up when they see familiar people, smiling during face-to-face play, and beginning to laugh. If your baby is not showing social smiles by 3 months (adjusted age for preemies), this is a milestone to discuss with your pediatrician. They will want to assess hearing, vision, and overall social development, as early intervention can be very helpful.',
    },
    {
      ageRange: '4-6 months',
      context:
        'By this age, social smiling should be well established. Babies typically smile at familiar people, may smile at their reflection, and are beginning to show different facial expressions for different emotions. Absence of social smiling by 4-6 months warrants a prompt conversation with your pediatrician and possibly a developmental evaluation.',
    },
  ],
  whenNormal: [
    'Your baby is under 8 weeks old  -  social smiling is just beginning to develop and many babies have not started yet',
    'Your baby was premature  -  use adjusted age, not chronological age, to assess this milestone',
    'Your baby smiles socially sometimes but not every time, or smiles more with one caregiver than others  -  consistency comes with time',
    'Your baby smiles during calm, alert moments but not when overstimulated, tired, or hungry',
  ],
  whenToMention: [
    'Your baby is 3 months old (adjusted age) and you have not seen any clear smiles directed at people in response to interaction',
    'Your baby smiles at objects or randomly but does not smile specifically in response to your face or voice',
    'Your baby used to smile socially and has decreased or stopped  -  any regression in social skills is important to note',
    'Your baby is not making social smiles and is also not making eye contact, cooing, or showing interest in faces',
  ],
  whenToActNow: [
    'Your baby has lost social smiling they previously had  -  any loss of a social milestone at any age should be evaluated promptly',
    'Your baby at 4 months or older shows no social smiling, no eye contact, and no interest in faces or social interaction  -  early developmental evaluation is important',
    'Your baby is not smiling and also seems unusually floppy, stiff, or has feeding difficulties, which could indicate an underlying neurological concern',
  ],
  relatedMilestones: [
    'social-smile',
    'eye-tracking',
    'language-cooing',
    'social-emotional-attachment',
  ],
  showSelfReferral: true,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Emotional and Social Development: Birth to 3 Months. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Emotional-and-Social-Development-Birth-to-3-Months.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Important Milestones: Your Baby By Two Months.',
      url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-2mo.html',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Developmental Milestones: 3 Months. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Developmental-Milestones-3-Months.aspx',
    },
  ],
};
