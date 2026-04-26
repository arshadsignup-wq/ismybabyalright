import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-stranger-anxiety-extreme',
  title: 'Extreme Stranger Anxiety in Baby',
  category: 'behavior',
  searchTerms: [
    'baby extreme stranger anxiety',
    'baby screams around strangers',
    'baby afraid of people',
    'baby cries with everyone',
    'baby won\'t go to anyone',
    'baby only wants mommy',
    'stranger danger baby',
    'baby terrified of new people',
    'severe stranger anxiety baby',
    'baby cries when someone looks at them',
    'baby fear of unfamiliar people',
  ],
  quickAnswer:
    'Stranger anxiety is a completely normal and healthy developmental phase that typically begins around 6-8 months and peaks between 12-18 months. It means your baby has formed strong attachments and can distinguish between familiar and unfamiliar people - both signs of healthy emotional and cognitive development. Some babies experience more intense stranger anxiety than others, and this is often related to temperament rather than any problem. Even intense stranger anxiety almost always resolves by age 2-3.',
  byAge: [
    {
      ageRange: '4-8 months',
      context:
        'Stranger anxiety often first appears around 6-8 months when babies develop the ability to tell familiar faces from unfamiliar ones. Your baby may suddenly cry when Grandma visits or refuse to be held by anyone except their primary caregivers. This can feel surprising, especially if your baby was previously social with everyone. It is a sign of healthy attachment and developing memory.',
    },
    {
      ageRange: '8-12 months',
      context:
        'Stranger anxiety typically intensifies during this period. Your baby may cry, hide their face, cling tightly, or become visibly distressed around anyone they do not see regularly. Allow visitors to approach slowly, avoid forcing your baby into unfamiliar arms, and let your baby warm up at their own pace while being held by you. Your calm, positive demeanor around others signals to your baby that these people are safe.',
    },
    {
      ageRange: '12-18 months',
      context:
        'This is often the peak of stranger anxiety. Your toddler may refuse to be in a different room from you, cling in public places, and scream when approached by well-meaning strangers. This is normal, even if it seems extreme. Respect your child\'s feelings rather than pushing them to be social. Gradual, repeated exposure to the same people in comfortable settings helps the most.',
    },
    {
      ageRange: '18 months - 3 years',
      context:
        'Stranger anxiety gradually eases as your child develops more confidence, language skills, and social understanding. Some shyness or wariness around new people is normal throughout toddlerhood and into the preschool years. If your child is comfortable with familiar people but shy with new ones, that is temperament, not a problem. By age 3, most children can warm up to new people within a reasonable amount of time.',
    },
  ],
  whenNormal: [
    'Your baby is between 6 and 18 months old and cries or clings around unfamiliar people',
    'Your baby is comfortable and happy with primary caregivers and a small circle of familiar people',
    'Stranger anxiety is worse in new environments or when your baby is tired or hungry',
    'Your child gradually warms up to people after some time, even if the initial reaction is intense',
    'Stranger anxiety comes in waves, sometimes better and sometimes worse',
  ],
  whenToMention: [
    'Your child is over 2 and is so fearful of all people outside the immediate family that they cannot participate in any group activities, even after extended warm-up time',
    'Stranger anxiety seems to be intensifying rather than improving after age 2, and your child is becoming more withdrawn over time',
    'Your child\'s anxiety extends to familiar people they used to be comfortable with, not just strangers',
  ],
  whenToActNow: [
    'Your child shows sudden, extreme fear of specific people they were previously comfortable with, combined with other behavioral changes that concern you',
    'Your child is completely unable to function in any social setting, shows extreme distress in all situations outside the home, and the anxiety seems to be getting worse rather than better',
  ],
  relatedMilestones: [
    'social-emotional-regulation',
    'cognitive-object-permanence',
  ],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Separation Anxiety. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/toddler/Pages/Soothing-Your-Childs-Separation-Anxiety.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Important Milestones: Your Child By One Year.',
      url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-1yr.html',
    },
    {
      org: 'NIH',
      citation:
        'MedlinePlus. Stranger Anxiety. U.S. National Library of Medicine.',
      url: 'https://medlineplus.gov/ency/article/001559.htm',
    },
  ],
};
