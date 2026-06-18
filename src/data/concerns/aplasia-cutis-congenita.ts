import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'aplasia-cutis-congenita',
  title: 'My Baby Was Born with a Raw Spot on Their Scalp (Aplasia Cutis)',
  category: 'skin',
  searchTerms: [
    'aplasia cutis congenita baby',
    'raw spot on baby scalp at birth',
    'missing skin on baby head',
    'bald spot baby scalp birth',
    'aplasia cutis treatment',
    'baby born with wound on head',
    'congenital scalp defect',
    'aplasia cutis congenita prognosis',
    'open wound baby scalp birth',
    'hairless scar baby scalp from birth',
  ],
  quickAnswer:
    'Aplasia cutis congenita (ACC) is a condition where a baby is born with a small area of missing skin, most commonly on the scalp. It occurs in about 1 in 10,000 births. The affected area may look like a raw wound, an ulcer, or may have already healed into a thin, shiny scar by the time of birth. Most cases are small, isolated, and heal well with basic wound care — the area eventually forms a hairless scar. Larger defects or those associated with other findings may need more investigation, but isolated small ACC has an excellent prognosis.',
  byAge: [
    {
      ageRange: '0-1 month',
      context:
        'At birth, the aplasia cutis area may appear as a raw, red patch, a shallow ulcer, or a thin membrane-covered area on the scalp. Your medical team will assess the size and depth. Small, superficial defects (which are the vast majority) are managed with gentle wound care — keeping the area clean and protected. Larger or deeper defects, particularly those overlying a fontanelle, may need imaging to evaluate the underlying bone and may require surgical consultation.',
    },
    {
      ageRange: '1-3 months',
      context:
        'Small ACC defects typically heal within the first few weeks to months. The area forms a smooth, flat, hairless scar. During healing, it is important to keep the area clean and protect it from trauma. Your pediatrician will monitor healing progress. If the area is not healing as expected, or if there are signs of infection (increasing redness, swelling, drainage), medical evaluation is needed.',
    },
    {
      ageRange: '3-12 months',
      context:
        'By this age, most small ACC defects have fully healed. The resulting scar will be hairless, which becomes more noticeable as surrounding hair grows in. If the defect was associated with other findings (limb abnormalities, other skin lesions), your doctor may recommend genetic evaluation to check for associated syndromes such as Adams-Oliver syndrome.',
    },
    {
      ageRange: '1 year+',
      context:
        'The hairless scar from ACC is permanent but usually small and easily covered by surrounding hair. For larger or more noticeable scars, cosmetic options like tissue expansion or scar revision can be discussed with a plastic surgeon when the child is older. Hair transplantation is another option for mature patients. Functionally, most children with isolated ACC have no long-term health implications.',
    },
  ],
  whenNormal: [
    'Your baby has a small aplasia cutis area on the scalp that is healing with basic wound care',
    'The area has formed a clean, flat scar and surrounding skin is healthy',
    'Your baby has an isolated small ACC with no other associated findings',
  ],
  whenToMention: [
    'The ACC area is not healing or seems to be getting larger',
    'There are signs of infection — redness spreading beyond the wound, swelling, discharge, or fever',
    'Your baby has other skin or limb findings in addition to the scalp defect',
    'The defect is larger than a coin or is located over the fontanelle or midline',
  ],
  whenToActNow: [
    'The ACC area is bleeding heavily and the bleeding does not stop with gentle pressure — seek emergency care',
    'The area shows signs of serious infection — fever, spreading redness, pus, or your baby seems unwell',
    'The defect is large, deep, or overlies a fontanelle — urgent evaluation by a pediatric surgeon or dermatologist is needed',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'nevus-sebaceous',
    'epidermal-nevus',
  ],
  sources: [
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Aplasia Cutis Congenita. StatPearls, 2024.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK535401/',
    },
    {
      org: 'DermNet',
      citation:
        'DermNet NZ. Aplasia Cutis Congenita.',
      url: 'https://dermnetnz.org/topics/aplasia-cutis-congenita',
    },
    {
      org: 'NORD',
      citation:
        'National Organization for Rare Disorders. Aplasia Cutis Congenita.',
      url: 'https://rarediseases.org/rare-diseases/aplasia-cutis-congenita/',
    },
  ],
};
