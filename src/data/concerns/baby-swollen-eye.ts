import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-swollen-eye',
  title: 'Baby Eye Swollen, Puffy, or Red',
  category: 'physical',
  searchTerms: [
    'baby swollen eye',
    'baby puffy eye',
    'baby eye swollen shut',
    'baby eyelid swollen',
    'baby eye swollen after sleep',
    'baby red swollen eye',
    'baby eye swollen one side',
    'periorbital swelling baby',
    'baby swollen eye insect bite',
    'baby eye swollen allergic reaction',
  ],
  quickAnswer:
    'A swollen or puffy eye in a baby can have many causes, from mild (insect bite, allergic reaction, or normal morning puffiness) to serious (periorbital or orbital cellulitis). The key distinctions are whether the swelling involves just the eyelid or the area around the eye, whether there is fever, whether the eye itself is red or has discharge, and whether the swelling came on suddenly or gradually. Eye swelling with fever always needs prompt medical evaluation.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Newborns commonly have puffy eyelids from the birth process, which resolves within days. A blocked tear duct can cause watery, goopy eyes with mild eyelid swelling. Dacryocystitis (infection of the tear duct) causes redness and swelling at the inner corner of the eye and needs medical treatment. If one eye is significantly more swollen than the other with redness and warmth, seek medical evaluation.',
    },
    {
      ageRange: '6-12 months',
      context:
        'At this age, insect bites near the eye are a common cause of dramatic eyelid swelling. A mosquito bite near the eye can make the entire eyelid swell shut, which looks alarming but is usually harmless if there is no fever. Allergic reactions to foods (especially during new food introductions) can also cause facial and eye swelling. Contact allergies from touching something and then rubbing eyes are common as babies become more mobile.',
    },
    {
      ageRange: '1-3 years',
      context:
        'Toddlers are prone to both injuries around the eye (bumps, falls) and infections. Preseptal (periorbital) cellulitis - infection of the tissue around the eye - is more common in this age group and typically follows a sinus infection, insect bite, or skin wound near the eye. It causes redness, swelling, and warmth of the eyelid with or without fever. This needs same-day medical evaluation.',
    },
  ],
  whenNormal: [
    'Mild puffiness of both eyelids after waking up that resolves within an hour',
    'Slight eyelid swelling from crying',
    'Puffiness from a known insect bite near the eye with no fever or eye redness',
    'Mild eyelid swelling with a cold or allergies',
  ],
  whenToMention: [
    'One eye is noticeably more swollen than the other without a clear cause',
    'Eyelid swelling persists for more than 2-3 days',
    'There is discharge from the eye along with swelling',
    'Your baby rubs or paws at the swollen eye frequently',
  ],
  whenToActNow: [
    'Eye swelling is accompanied by fever',
    'The eye appears to be bulging forward or the eyeball itself is red',
    'Your baby cannot open the eye and the area is red, warm, and tender to touch',
    'Swelling is spreading rapidly or is accompanied by hives, lip swelling, or breathing difficulty (allergic reaction)',
    'Your baby was hit in the eye and there is significant swelling, bruising, or change in pupil size',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['baby-pink-eye', 'blocked-tear-duct', 'cellulitis-baby', 'insect-bites-baby', 'hives'],
  sources: [
    {
      org: 'AAP',
      citation: 'American Academy of Pediatrics. Eye Infections. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/eyes/Pages/default.aspx',
    },
    {
      org: 'AAP',
      citation: 'American Academy of Pediatrics. Periorbital and Orbital Cellulitis. Pediatrics in Review.',
      url: 'https://publications.aap.org/pediatricsinreview',
    },
    {
      org: 'NIH',
      citation: 'National Library of Medicine. Periorbital Cellulitis. StatPearls.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK470408/',
    },
  ],
};
