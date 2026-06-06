import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'newborn-subconjunctival-hemorrhage-birth',
  title: 'Red Eye From Birth (Subconjunctival Hemorrhage)',
  category: 'medical',
  searchTerms: [
    'newborn red eye from birth',
    'baby blood in eye',
    'subconjunctival hemorrhage newborn',
    'newborn red spot in eye',
    'baby broken blood vessel eye birth',
    'red eye after delivery',
    'newborn hemorrhage white of eye',
    'baby eye blood spot',
    'birth trauma eye bleeding',
    'newborn red eye normal',
  ],
  quickAnswer:
    'A subconjunctival hemorrhage (a bright red patch on the white of the eye) in a newborn is a common and harmless result of pressure during delivery. It is caused by tiny blood vessels breaking in the eye during the birth process. It does not affect your baby\'s vision, causes no pain, and resolves on its own within 1-3 weeks without treatment.',
  byAge: [
    {
      ageRange: '0-1 month',
      context:
        'Subconjunctival hemorrhages are common after vaginal delivery, especially after prolonged pushing, vacuum-assisted delivery, or forceps use. The bright red patch on the white of the eye can look alarming but is completely benign. It is simply blood from a tiny broken blood vessel trapped under the clear membrane covering the eye (conjunctiva). It does not affect vision, does not cause pain, and requires no treatment. The blood gradually reabsorbs over 1-3 weeks, sometimes changing from red to yellow before disappearing completely.',
    },
    {
      ageRange: '1-3 months',
      context:
        'The hemorrhage should have fully resolved by this time. If a new red spot appears in the eye at this age, it is likely unrelated to birth and may be caused by crying, coughing, or straining. These are also typically harmless and self-resolving.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Birth-related subconjunctival hemorrhages are long resolved. New ones can occur at any age from straining or coughing and are generally benign.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Any eye redness at this age is unrelated to birth. Red eyes with discharge may indicate conjunctivitis. A blood spot in the white of the eye from crying or coughing is typically harmless.',
    },
  ],
  whenNormal: [
    'A flat, bright red patch on the white of the eye present at birth or shortly after delivery',
    'The red patch does not cause tearing, discharge, or swelling',
    'Baby is not bothered by it and can open the eye normally',
    'The patch gradually fades over 1-3 weeks',
  ],
  whenToMention: [
    'The hemorrhage does not resolve within 3 weeks',
    'You notice new red spots in the eyes appearing frequently without obvious cause',
    'You want reassurance that the red patch is not affecting vision',
  ],
  whenToActNow: [
    'Red eye with significant swelling of the eyelid, pus-like discharge, or the baby unable to open the eye, which could indicate an eye infection',
    'Blood visible in the colored part of the eye (iris) or pupil appearing irregular, which requires urgent ophthalmologic evaluation',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Eye Problems in Newborns. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/eyes/Pages/default.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Subconjunctival Hemorrhage. StatPearls.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK551666/',
    },
  ],
  relatedConcernSlugs: ['newborn-eye-swelling-after-birth', 'newborn-bruising-from-delivery', 'newborn-conjunctivitis-sticky-eye'],
};
