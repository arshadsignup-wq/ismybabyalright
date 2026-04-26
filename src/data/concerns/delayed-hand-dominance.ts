import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'delayed-hand-dominance',
  title: 'Delayed Hand Dominance',
  category: 'physical',
  searchTerms: [
    'delayed hand dominance',
    'child not picking a dominant hand',
    'toddler switches hands',
    'when do kids pick dominant hand',
    'child uses both hands equally',
    'toddler ambidextrous',
    'toddler no hand preference',
    'when does handedness develop',
    'child hasn\'t picked left or right hand',
    'preschooler no dominant hand',
    'hand preference toddler',
  ],
  quickAnswer:
    'Hand dominance - a consistent preference for using one hand over the other - typically becomes clearly established between ages 2 and 4, though it can take until age 5 or 6 in some children. It is completely normal for toddlers under 2 to switch hands frequently. Using both hands equally at this age does not mean anything is wrong and actually shows good bilateral coordination.',
  byAge: [
    {
      ageRange: '6-12 months',
      context:
        'Babies at this age use both hands freely and should not show a strong hand preference. They reach with whichever hand is closer to the object and transfer items between hands easily. A very strong preference for one hand before 12 months can actually be a concern, as it may indicate weakness or neurological differences on the non-preferred side. Babies should be using both hands actively at this age.',
    },
    {
      ageRange: '1-2 years',
      context:
        'Toddlers begin to show a slight preference for one hand for certain tasks, but they still switch hands frequently. You may notice your toddler prefers one hand for eating and the other for stacking blocks, or they may switch back and forth within the same activity. This is all normal and expected. There is no need to encourage or direct hand preference at this age.',
    },
    {
      ageRange: '2-3 years',
      context:
        'Hand preference becomes more consistent during this period, though some children still switch hands. Most children will show a clear preference for one hand during activities like drawing, throwing, and eating by around age 3. If your child is still switching hands frequently at this age, it is usually not a concern as long as they are developing fine motor skills appropriately with both hands.',
    },
    {
      ageRange: '3-5 years',
      context:
        'Hand dominance should be clearly established by age 4 to 5 for most children. If your child is over 4 and still has no consistent hand preference, and this seems to be accompanied by difficulty with fine motor tasks like drawing, cutting, or buttoning, an occupational therapy evaluation may help. Some children are naturally more ambidextrous, and as long as they can complete fine motor tasks effectively, there may be no concern.',
    },
  ],
  whenNormal: [
    'Your child is under 2 years old and uses both hands equally, switching between them freely.',
    'Your toddler shows a preference for one hand during some activities but switches for others.',
    'Your child is between 2 and 4 years old and gradually showing an emerging hand preference, even if it is not fully consistent yet.',
    'Your child seems to be ambidextrous but can complete fine motor tasks well with either hand.',
  ],
  whenToMention: [
    'Your child is over 4 years old and has no hand preference at all, and this seems to be making fine motor tasks like drawing or cutting more difficult.',
    'Your child seems to avoid using one hand entirely, which may indicate weakness on that side rather than true hand preference delay.',
    'Your child had a clear hand preference and has lost it, or has started showing weakness in their dominant hand.',
  ],
  whenToActNow: [
    'Your baby under 12 months shows a very strong preference for one hand and avoids using the other hand at all, as early hand dominance can indicate weakness or a neurological issue on the non-preferred side.',
    'Your child has sudden weakness or loss of function in one hand after previously using both hands well.',
  ],
  relatedMilestones: [
    'fine-motor-grasping',
    'fine-motor-drawing',
    'fine-motor-self-feeding',
  ],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Hand and Finger Skills: 8 to 12 Months. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Hand-and-Finger-Skills-8-to-12-Months.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Important Milestones: Your Child By Two Years.',
      url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-2yr.html',
    },
  ],
};
