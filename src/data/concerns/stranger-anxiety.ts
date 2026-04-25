import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'stranger-anxiety',
  title: 'Baby Stranger Anxiety',
  category: 'behavior',
  searchTerms: [
    'baby scared of strangers',
    'baby cries around new people',
    'stranger anxiety baby',
    'baby afraid of other people',
    'when does stranger anxiety start',
    'baby screams at strangers',
    'baby only wants mom or dad',
    'stranger danger reaction baby',
    'toddler afraid of new people',
    'baby cries when grandparents hold them',
  ],
  quickAnswer:
    'Stranger anxiety is a completely normal and healthy developmental milestone that typically begins between 6-9 months of age. It shows that your baby can distinguish between familiar and unfamiliar people, which is a sign of strong cognitive development and secure attachment. Most babies gradually become more comfortable with new people as they grow through toddlerhood.',
  byAge: [
    {
      ageRange: '4-6 months',
      context:
        'Some babies begin showing early signs of wariness around unfamiliar people at this age, such as staring intently at new faces, becoming quieter around strangers, or showing a preference for familiar caregivers. This is the beginning of your baby being able to tell the difference between people they know and people they do not, which is an important cognitive milestone.',
    },
    {
      ageRange: '6-10 months',
      context:
        'This is the classic onset window for stranger anxiety. Your baby may cry, cling, hide their face, or become very upset when an unfamiliar person approaches, tries to hold them, or even makes eye contact. This can be especially noticeable with well-meaning relatives your baby has not seen recently. It is not a reflection of the other person  -  it means your baby has a strong, healthy attachment to their primary caregivers.',
    },
    {
      ageRange: '10-18 months',
      context:
        'Stranger anxiety often peaks during this period, especially alongside separation anxiety. Your baby or toddler may refuse to be held by anyone unfamiliar and may take a long time to warm up in new environments. Give them time to observe from the safety of your arms before encouraging interaction. Forcing the issue usually makes the anxiety worse.',
    },
    {
      ageRange: '18 months - 3 years',
      context:
        'Stranger anxiety gradually diminishes as toddlers develop language, gain more experience with different people and settings, and build confidence. Some children remain naturally more cautious or shy, which is a normal temperament variation. Occasional flare-ups during stressful periods or big transitions are common and temporary.',
    },
  ],
  whenNormal: [
    'Your baby cries or clings when an unfamiliar person approaches but calms down once the person gives them space and time to warm up',
    'Your baby is between 6-18 months and shows strong preferences for familiar caregivers over strangers',
    'Your baby is fine once they have had time to observe a new person from a safe distance or from your arms',
    'Stranger anxiety is worse when your baby is tired, hungry, or in an unfamiliar environment',
    'Your baby eventually warms up to new people, even if it takes the whole visit',
  ],
  whenToMention: [
    'Your baby shows extreme anxiety around all people, including familiar caregivers other than the primary one, well beyond 18 months',
    'Your child is over 2-3 years old and stranger anxiety is so intense that it prevents them from attending playgroups, daycare, or family gatherings',
    'Your child seems fearful or anxious in general, not just around strangers, and this seems to affect their daily functioning',
  ],
  whenToActNow: [
    'Your child shows a sudden onset of fear around people they were previously comfortable with, which could indicate a traumatic experience or other concern',
    'Your baby shows no preference for familiar people at all  -  seeming equally comfortable with anyone  -  by 7-9 months, which could indicate an attachment concern worth discussing with your doctor',
    'Extreme anxiety is accompanied by regression in other developmental areas like language loss, motor skill loss, or social withdrawal',
  ],
  relatedMilestones: [
    'social-emotional-attachment',
    'cognitive-object-permanence',
    'social-emotional-regulation',
  ],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Emotional and Social Development: 8 to 12 Months. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Emotional-and-Social-Development-8-12-Months.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Stranger Anxiety. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Stranger-Anxiety.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Important Milestones: Your Baby By 9 Months.',
      url: 'https://www.cdc.gov/ncbddd/actearly/milestones/milestones-9mo.html',
    },
  ],
};
