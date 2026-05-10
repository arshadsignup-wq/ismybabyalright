import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'toddler-jealousy-new-baby',
  title: 'Toddler Jealousy of New Baby',
  category: 'behavior',
  searchTerms: [
    'toddler jealous of new baby',
    'firstborn jealous of newborn',
    'older child jealous when I hold baby',
    'toddler acting out since new baby',
    'how to help toddler adjust to new sibling jealousy',
    'toddler wants to be baby again',
    'toddler angry when I nurse the baby',
    'signs of jealousy in toddler new sibling',
  ],
  quickAnswer:
    'Jealousy toward a new baby is one of the most natural and expected toddler emotions. Your older child has had your undivided attention and is now learning to share it — a monumental adjustment. Jealousy may show up as clinginess, acting out, regression, or even asking to send the baby back. With empathy, dedicated one-on-one time, and patience, most toddlers gradually adapt within a few months.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'The initial adjustment period is often the hardest. The toddler sees a dramatic shift in routines and parental availability. They may demand to be held when you hold the baby, interrupt feedings, or become extra clingy. Validating their feelings ("You wish I could hold you right now") while maintaining safety is key.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Some toddlers settle during this period while others escalate as they realize the baby is a permanent family member. Jealousy may manifest as deliberately misbehaving during baby care, refusing to cooperate, or expressing negative feelings about the baby. Continue to acknowledge emotions and carve out special time.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As the baby becomes more interactive and receives praise for milestones like sitting or babbling, jealousy can resurge. The older child may feel overshadowed. Celebrating the older child\'s achievements and giving them important "big kid" roles helps maintain their sense of significance.',
    },
    {
      ageRange: '12 months+',
      context:
        'Once the younger child is walking and talking, the dynamic shifts again. Jealousy may continue but often transforms into genuine sibling interaction. Fostering cooperative play and continuing to provide individual attention to each child builds a foundation for a positive sibling relationship.',
    },
  ],
  whenNormal: [
    'Your toddler says they do not like the baby, wants to send the baby back, or asks why the baby is here',
    'Your child demands attention specifically when you are busy with the baby — nursing, changing, or holding',
    'Your toddler reverts to baby-like behavior such as wanting a bottle, crawling, or using baby talk',
    'Jealousy comes in waves and your child also shows moments of genuine affection toward the baby',
  ],
  whenToMention: [
    'Your child seems persistently sad, withdrawn, or anxious for more than a month after the baby arrives, and does not respond to extra attention and reassurance',
    'Jealousy is manifesting as severe behavioral changes such as refusing to eat, persistent sleep disruption, or significant aggression toward others',
    'Your child\'s self-esteem seems affected, and they express feelings of being unloved or unwanted',
  ],
  whenToActNow: [
    'Your child expresses a desire to hurt themselves or the baby in a way that seems serious or planned',
    'Your child shows signs of severe depression or anxiety, such as complete withdrawal, loss of interest in all activities, or inability to function in daily routines',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'new-sibling-adjustment-regression',
    'sibling-rivalry-toddler',
    'toddler-hitting-baby-sibling',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Preparing Your Family for a New Baby. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/family-life/family-dynamics/Pages/Preparing-Your-Family-for-a-New-Baby.aspx',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. New sibling: Preparing your older child.',
      url: 'https://www.mayoclinic.org/healthy-lifestyle/childrens-health/in-depth/new-sibling/art-20045930',
    },
  ],
};
