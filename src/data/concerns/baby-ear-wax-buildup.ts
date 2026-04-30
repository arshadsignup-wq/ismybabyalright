import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-ear-wax-buildup',
  title: 'Excessive Ear Wax in Baby',
  category: 'physical',
  searchTerms: [
    'baby ear wax',
    'baby ear wax buildup',
    'baby ear wax removal',
    'baby earwax color',
    'baby earwax dark brown',
    'baby earwax yellow',
    'how to clean baby ears',
    'baby ear wax blocking ear',
    'baby earwax smell',
    'baby ear wax impaction',
  ],
  quickAnswer:
    'Ear wax (cerumen) is normal and protective - it traps dust and germs and keeps the ear canal moisturized. Babies naturally produce ear wax, and the amount varies from child to child. You should never put cotton swabs, fingers, or anything else into your baby\'s ear canal. Ear wax normally works its way out on its own. Simply wipe away any visible wax on the outer ear with a damp cloth during bath time.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Newborns may have vernix (white, waxy coating) in and around their ears from birth, which is normal and does not need to be removed. As the ear canal develops, you may see small amounts of yellow, orange, or brown wax at the ear opening. This is healthy and does not need cleaning. The ear canal is very short in babies, making them especially vulnerable to injury from cotton swabs.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Some babies produce more ear wax than others, and it can range in color from light yellow to dark brown. Darker wax is older wax that has collected more debris and is completely normal. If your baby has frequent ear infections, your pediatrician may need to clear excess wax to see the eardrum, but this should only be done by a medical professional.',
    },
    {
      ageRange: '1-3 years',
      context:
        'Toddlers may have visible ear wax that parents find unsightly, but it is best left alone. Ear wax production can increase with allergies, frequent ear infections, or using hearing aids or earbuds. If you notice your toddler pulling at their ears or if you suspect hearing difficulty, your pediatrician can check whether wax is blocking the ear canal and remove it safely if needed.',
    },
  ],
  whenNormal: [
    'Visible wax at the opening of the ear canal in any shade from yellow to dark brown',
    'One ear producing more wax than the other',
    'Wax that appears to come and go as it naturally migrates out',
    'Wax with a mild, musky odor',
  ],
  whenToMention: [
    'You suspect ear wax may be affecting your baby\'s hearing',
    'Your baby frequently tugs at one ear and has visible wax buildup',
    'Ear wax has a strong, foul odor or is accompanied by drainage',
    'Your pediatrician cannot see the eardrum due to wax during an exam',
  ],
  whenToActNow: [
    'Your baby has ear pain, fever, and foul-smelling drainage from the ear (could indicate an ear infection or ruptured eardrum, not just wax)',
    'Your baby suddenly seems to not hear well from one ear',
    'You see blood in or around the ear',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['ear-infections', 'baby-ear-pulling', 'hearing-loss-signs-baby'],
  sources: [
    {
      org: 'AAP',
      citation: 'American Academy of Pediatrics. Earwax. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/ear-nose-throat/Pages/Earwax.aspx',
    },
    {
      org: 'AAP',
      citation: 'American Academy of Pediatrics. Ear Care for Children.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/ear-nose-throat/Pages/default.aspx',
    },
    {
      org: 'NIH',
      citation: 'National Institute on Deafness and Other Communication Disorders. Earwax.',
      url: 'https://www.nidcd.nih.gov/health/earwax',
    },
  ],
};
