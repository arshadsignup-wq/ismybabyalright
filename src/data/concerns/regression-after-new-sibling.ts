import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'regression-after-new-sibling',
  title: 'My Toddler Regressed After a New Baby',
  category: 'behavior',
  searchTerms: [
    'toddler regression after new baby',
    'older child acting like baby again',
    'toddler wants bottle again after new sibling',
    'potty trained toddler having accidents after new baby',
    'toddler behavior worse after new sibling',
    'toddler jealous of new baby',
    'first born regression',
    'toddler hitting new baby',
    'older sibling acting out',
    'toddler clingy after new baby arrived',
  ],
  quickAnswer:
    'Regression after a new sibling arrives is one of the most common and predictable toddler behaviors. Your older child may temporarily lose skills they had mastered  -  wanting bottles, having potty accidents, baby talk, increased clinginess, or sleep disruption. This is a normal stress response and a way of saying "I still need you." With patience and extra connection, most children return to their previous level within a few weeks to months.',
  byAge: [
    {
      ageRange: '18 months - 2 years',
      context:
        'Toddlers in this age range may not fully understand what is happening with a new baby but are highly sensitive to changes in routine, parental attention, and emotional energy. They may become clingier, more fussy, have disrupted sleep, or increase tantrums. Because their language is still limited, they express their distress through behavior. Extra physical affection, maintaining existing routines as much as possible, and one-on-one time with each parent can help tremendously.',
    },
    {
      ageRange: '2-3 years',
      context:
        'This is the most common age for visible regression. Your two or three-year-old may ask for a bottle or pacifier they had given up, start having potty accidents, use baby talk, want to be carried, or demand to nurse again. They may also show direct jealousy  -  asking you to "send the baby back" or showing aggression toward the newborn. All of these are normal responses to the biggest change in their life so far. Let minor regressions slide and focus on maintaining connection.',
    },
    {
      ageRange: '3-4 years',
      context:
        'Older toddlers and preschoolers may regression more subtly  -  increased whining, attention-seeking behavior, acting out at preschool, nighttime fears, or demanding to be treated like a baby. They have enough language to express some feelings, so talking about the change helps: "It\'s hard to share mommy. I love you just as much as always." Giving them a special role as "big helper" can also channel their need for attention positively, but be careful not to put too much responsibility on young shoulders.',
    },
    {
      ageRange: '4+ years',
      context:
        'Even older children can regress when a sibling arrives. They may become more anxious, act younger than their age, or have behavior changes at school. While less dramatic than toddler regression, these children benefit just as much from one-on-one time and reassurance. Most children adjust fully within 3-6 months, though some degree of sibling rivalry is a normal part of family life for years to come.',
    },
  ],
  whenNormal: [
    'Your toddler temporarily loses recently acquired skills like potty training, sleeping independently, or self-feeding after the new baby arrives',
    'Your child is more clingy, whiny, or tantrum-prone than before but is still able to be comforted and redirected',
    'Regression started within days to weeks of the new baby\'s arrival and is gradually improving over weeks to months',
    'Your child shows a mix of love and jealousy toward the baby  -  wanting to hold the baby one moment and pushing them away the next',
  ],
  whenToMention: [
    'Regression is severe and lasting  -  your child has not returned to their previous skill level after 3-4 months and things seem to be getting worse rather than better',
    'Your child is consistently aggressive toward the baby despite supervision and redirection, and you are concerned about the baby\'s safety',
    'Your child seems genuinely depressed  -  withdrawn, not interested in playing, eating less, or expressing persistent sadness or worthlessness',
  ],
  whenToActNow: [
    'Your child has hurt the baby or made a serious attempt to harm the baby when unsupervised',
    'Your child is expressing thoughts of self-harm, says they wish they were dead, or shows extreme emotional distress that is not resolving with comfort and reassurance',
  ],
  relatedMilestones: [
    'social-emotional-regulation',
    'social-emotional-attachment',
    'language-expressive',
  ],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Preparing Your Child for a New Sibling. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/family-life/family-dynamics/Pages/Preparing-Your-Child-for-a-New-Sibling.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Helping Your Child Adjust to a New Baby. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/family-life/family-dynamics/Pages/Adjusting-To-A-New-Baby.aspx',
    },
    {
      org: 'Zero to Three',
      citation:
        'Zero to Three. Tips for Welcoming a Second Child.',
      url: 'https://www.zerotothree.org/resource/tips-for-welcoming-a-second-child/',
    },
  ],
};
