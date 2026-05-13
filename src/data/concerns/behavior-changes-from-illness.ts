import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'behavior-changes-from-illness',
  title: 'Behavior Changes When Baby Is Sick',
  category: 'behavior',
  searchTerms: [
    'baby behavior change when sick',
    'toddler acting different sick',
    'baby clingy when sick',
    'toddler regression during illness',
    'baby fussy before getting sick',
    'toddler not eating when sick',
    'baby sleeping more when sick normal',
    'toddler personality change illness',
  ],
  quickAnswer:
    'It is completely normal for babies and toddlers to act very differently when they are sick. Clinginess, increased crying, sleep changes, appetite loss, regression in recently acquired skills, and general irritability are all expected when a child is fighting an illness. These behavior changes are your child\'s way of communicating that they feel unwell and need extra comfort. Most behavioral changes resolve as the illness passes.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Young babies who are sick may become unusually sleepy or lethargic, feed poorly, cry more than usual, or seem less responsive. Because newborns cannot clearly communicate pain or discomfort, behavioral changes may be the first sign of illness. Any significant behavior change in a baby under 3 months, especially reduced feeding, excessive sleepiness, or a fever of 100.4F (38C) or higher, warrants prompt medical attention.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Sick babies at this age typically become clingy, want to be held constantly, may refuse the breast or bottle, and may sleep much more or much less than usual. You may notice they lose interest in toys or activities they normally enjoy. These changes are appropriate responses to feeling unwell and are not a cause for concern as long as your baby stays hydrated and the illness follows an expected course.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Older babies may show more dramatic behavioral changes during illness because they have more skills to lose temporarily. A baby who was sleeping through the night may wake frequently. A baby who had been happy to play independently may demand constant holding. Separation anxiety may intensify significantly. Appetite often decreases, especially for solids, but maintaining breast milk or formula intake is the priority.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddlers who are sick may regress in potty training, speech, sleep habits, or self-feeding. They may become extremely clingy, want bottles or pacifiers they had given up, or be inconsolable. Some toddlers become uncharacteristically quiet and withdrawn, while others become extremely whiny and difficult. Both responses are normal. Behavioral changes may last a few days beyond the illness itself as your child recovers fully.',
    },
  ],
  whenNormal: [
    'Your child is clingier, fussier, and sleepier than usual during and shortly after an illness',
    'Your baby or toddler temporarily loses interest in food, especially solids, but is still taking some fluids',
    'Recently acquired skills like sleeping through the night, using a cup, or new words temporarily disappear during illness',
    'Behavior returns to normal within a week or so after the illness resolves',
  ],
  whenToMention: [
    'Behavioral changes persist for more than 1-2 weeks after all other symptoms of illness have resolved',
    'Your child seems to get sick very frequently and never returns to baseline behavior between illnesses',
    'You notice new behaviors that appeared during illness and are now persisting, such as new fears, severe sleep disruption, or ongoing regression',
  ],
  whenToActNow: [
    'Your baby under 3 months has a fever of 100.4F (38C) or higher, is unusually sleepy, or is not feeding',
    'Your child is inconsolable, extremely lethargic, not producing tears or wet diapers, or shows signs of dehydration at any age',
    'Your child has a sudden, dramatic personality change such as confusion, inability to recognize you, or extreme irritability with a stiff neck, which could indicate a serious infection',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Fever and Your Baby. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/fever/Pages/Fever-and-Your-Baby.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Signs and Symptoms of Childhood Illness. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/Pages/default.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. When Your Child Is Sick.',
      url: 'https://www.cdc.gov/flu/highrisk/children-sick.htm',
    },
  ],
};
