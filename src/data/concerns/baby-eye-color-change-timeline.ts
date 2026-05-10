import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-eye-color-change-timeline',
  title: 'Baby Eye Color Change Timeline',
  category: 'medical',
  searchTerms: [
    'when does baby eye color change',
    'baby eye color timeline',
    'when do babies eyes change color',
    'baby born with blue eyes change',
    'baby eye color permanent when',
    'newborn eye color prediction',
    'baby eyes changing color',
    'when is baby eye color final',
  ],
  quickAnswer:
    'Many babies are born with blue or gray eyes because melanin, the pigment that determines eye color, has not yet been fully deposited in the iris. Eye color changes are most common in the first 6-9 months of life and typically stabilize by 12 months, though subtle changes can continue until age 3. Babies with more melanin at birth (often those with darker skin tones) tend to be born with brown eyes that remain brown.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Newborns often have dark blue, gray, or slate-colored eyes regardless of their eventual eye color. This is because the melanocytes (pigment-producing cells) in the iris have not yet been activated by light exposure. Babies of African, Asian, and Hispanic descent are more likely to be born with brown eyes that remain dark.',
    },
    {
      ageRange: '3-6 months',
      context:
        'This is when significant eye color changes begin. Exposure to light stimulates melanocytes to produce melanin. If your baby\'s eyes are going to change from blue to brown, hazel, or green, you will likely start noticing the shift during this period. The change is gradual and may appear as flecks or patches of color in the iris.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Most babies will have their near-final eye color by 9-12 months. However, the color may continue to deepen slightly. Eyes can go from light to dark (blue to brown) but essentially never change from dark to light. Some children with hazel or green eyes may see continued subtle changes.',
    },
    {
      ageRange: '12 months+',
      context:
        'Eye color is largely established by the first birthday, but minor changes in shade or intensity can occur up to age 3 and in rare cases beyond. If only one eye changes color (heterochromia), this should be evaluated by a pediatric ophthalmologist as it can occasionally indicate an underlying condition.',
    },
  ],
  whenNormal: [
    'Your newborn\'s eyes are blue or gray and you know the family has brown-eyed members',
    'You notice gradual darkening or color change in both eyes equally during the first year',
    'Your baby\'s eye color is different from what you expected based on parent eye colors',
    'Both eyes are the same color and changing at the same rate',
  ],
  whenToMention: [
    'One eye is noticeably different in color from the other (heterochromia), which should be evaluated',
    'You notice the eye color in one eye changing while the other stays the same',
    'Your baby\'s eyes appear to have an unusual color or a white, yellow, or grayish hue to the pupil or iris',
  ],
  whenToActNow: [
    'One pupil appears white or has a different color reflection in photographs, which could indicate leukocoria and requires immediate evaluation to rule out retinoblastoma or congenital cataracts',
    'Your baby\'s eyes have become very different colors suddenly, or one iris has become lighter with a change in pupil size, which could indicate Horner syndrome or other neurological conditions',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAO',
      citation:
        'American Academy of Ophthalmology. Can You Predict Your Baby\'s Eye Color?',
      url: 'https://www.aao.org/eye-health/tips-prevention/can-you-predict-babys-eye-color',
    },
    {
      org: 'AAPOS',
      citation:
        'American Association for Pediatric Ophthalmology and Strabismus. Eye Color.',
      url: 'https://aapos.org/glossary/eye-color',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Newborn Eye Color. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/Newborn-Eye-Color.aspx',
    },
  ],
};
