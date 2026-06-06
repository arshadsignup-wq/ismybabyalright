import type { ConcernPage } from '@/data/concerns/types';
export const concern: ConcernPage = {
  slug: 'toddler-new-baby-adjustment-timeline', title: 'How Long Does It Take a Toddler to Adjust to a New Baby?', category: 'behavior',
  searchTerms: ['toddler adjusting to new baby','toddler new baby timeline','how long toddler adjust new sibling','toddler behavior after new baby','toddler jealous new baby','toddler acting out new baby','sibling adjustment timeline','toddler regression new baby','when does toddler accept new baby','new sibling adjustment period'],
  quickAnswer: 'Most toddlers take 3-6 months to fully adjust to a new sibling, though some take up to a year. The first few weeks often involve a "honeymoon" period where everything seems fine, followed by regression and acting out as the reality sets in. This is completely normal. Your toddler\'s world has fundamentally changed, and they need time, patience, and extra connection to adjust.',
  byAge: [
    { ageRange: '12-24 months', context: 'Young toddlers may not fully understand what has happened. They sense that things are different - you are less available, there is a new person, routines have changed. They may become clingier, have more tantrums, or regress in sleep or toileting. Extra physical affection and maintaining their routine helps.' },
    { ageRange: '2-3 years', context: 'This age is often the most challenging for adjustment. Your child understands enough to feel displaced but lacks the coping skills to manage it. Expect regression, jealousy, attention-seeking, and possibly aggression toward the baby. Protect special one-on-one time. Involve your toddler in baby care when safe.' },
    { ageRange: '3-4 years', context: 'Children this age can talk about their feelings. Encourage them: "It is okay to feel sad or angry about sharing mommy and daddy." They may fluctuate between loving the baby and wanting to send it back. Both feelings are valid. Read books about new siblings together.' },
    { ageRange: '4-5 years', context: 'Older children often adjust more quickly because they have more coping skills and can be more involved in caring for the baby. Give them a special role: "You are such a great big brother/sister." Make sure they still get plenty of individual attention and activities.' },
  ],
  whenNormal: ['Behavioral changes in the first 3-6 months after baby arrives','Fluctuating feelings about the new sibling','Some regression in sleep, toileting, or behavior','Gradual improvement in adjustment over months'],
  whenToMention: ['Your toddler has not shown any improvement after 6 months','Aggression toward the baby is persistent and increasing','Your child seems genuinely depressed or withdrawn','Regression is severe and lasting across many areas'],
  whenToActNow: ['Your toddler has injured the baby','You are unable to keep the baby safe','Your toddler is showing signs of severe emotional distress'],
  relatedMilestones: [], showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Preparing Your Child for a New Sibling. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/family-life/family-dynamics/Pages/Preparing-Your-Child-for-a-New-Sibling.aspx' },
    { org: 'Zero to Three', citation: 'Zero to Three. The New Baby: Helping Your Older Child Adjust.', url: 'https://www.zerotothree.org/resource/the-new-baby/' },
    { org: 'NIH', citation: 'Volling BL. Family transitions following the birth of a sibling. Dev Psychol. 2012;48(5):1564-1580.', url: 'https://pubmed.ncbi.nlm.nih.gov/22448985/' },
  ],
  relatedConcernSlugs: ['toddler-aggressive-toward-baby','toddler-regression-potty-new-sibling','toddler-acting-like-baby-again','toddler-regression-behavior-general'],
};
