import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-not-stacking-blocks',
  title: 'Baby Not Stacking Blocks',
  category: 'physical',
  searchTerms: [
    'baby not stacking blocks',
    'toddler won\'t stack blocks',
    'when do babies stack blocks',
    'child can\'t stack blocks',
    'toddler not building tower',
    '1 year old not stacking',
    'baby only knocks down blocks',
    'toddler can\'t stack 2 blocks',
    'delayed block stacking',
    'when should toddler stack blocks',
  ],
  quickAnswer:
    'Block stacking is a fine motor milestone that typically begins around 12 to 15 months, when most toddlers can stack 2 blocks. By 18 months, many children can stack 3 to 4 blocks, and by 2 years, a tower of 6 or more. Before 12 months, babies are more interested in grasping, mouthing, and banging blocks rather than stacking them, and that is perfectly appropriate.',
  byAge: [
    {
      ageRange: '8-12 months',
      context:
        'Babies at this age enjoy holding blocks, banging them together, and putting them in and out of containers. They do not yet have the hand-eye coordination or motor planning to stack blocks on top of each other. They love knocking down towers that you build, which actually helps them learn about cause and effect. Do not expect stacking at this age.',
    },
    {
      ageRange: '12-18 months',
      context:
        'Most toddlers begin stacking 2 blocks around 12 to 15 months. The tower will be wobbly and fall frequently, and that is part of the learning process. Some toddlers are more interested in other activities and may not show much interest in block stacking yet. By 18 months, stacking 3 to 4 blocks is typical. If your child shows no interest in any fine motor activities involving small objects by 18 months, mention this to your pediatrician.',
    },
    {
      ageRange: '18-24 months',
      context:
        'Block stacking skills improve, and most toddlers can stack 4 to 6 blocks by age 2. They may also begin lining blocks up in a row or building simple structures. If your toddler is 18 months or older and cannot stack even 2 blocks despite having opportunities to practice, this could indicate a fine motor coordination concern worth discussing with your doctor.',
    },
    {
      ageRange: '2-3 years',
      context:
        'Children typically stack 6 to 8 or more blocks by age 2 to 3 and begin building more complex structures like bridges and enclosures. If your child is over 2 and still cannot stack 2 to 3 blocks, an occupational therapy evaluation may be helpful. Difficulty with stacking at this age can sometimes reflect challenges with hand-eye coordination, motor planning, or fine motor control that benefit from targeted support.',
    },
  ],
  whenNormal: [
    'Your baby is under 12 months and prefers banging or mouthing blocks rather than stacking them.',
    'Your toddler can stack 2 blocks but the tower always falls over because they are still developing steadiness.',
    'Your toddler prefers knocking down towers rather than building them, which is a normal play behavior.',
    'Your toddler stacks blocks some days but not others, depending on their mood, attention, and interest.',
    'Your toddler builds with other toys like cups or containers but has not shown interest in blocks specifically.',
  ],
  whenToMention: [
    'Your toddler is 18 months or older and cannot stack 2 blocks despite having regular opportunities to practice.',
    'Your toddler avoids all activities that require precise hand movements, not just block stacking.',
  ],
  whenToActNow: [
    'Your toddler previously could stack blocks and has lost the ability, as regression in any skill needs prompt evaluation.',
    'Your toddler has no ability to grasp and release objects deliberately by 15 months, as stacking requires both grasping and controlled release.',
  ],
  relatedMilestones: [
    'fine-motor-stacking',
    'fine-motor-grasping',
    'fine-motor-pincer-grasp',
  ],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Cognitive Development: One-Year-Old. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/toddler/Pages/Cognitive-Development-One-Year-Old.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Important Milestones: Your Child By Eighteen Months.',
      url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-18mo.html',
    },
  ],
};
