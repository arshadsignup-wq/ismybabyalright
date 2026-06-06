import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-cradle-cap-eyebrows',
  title: 'Cradle Cap on Baby\'s Eyebrows',
  category: 'skin',
  searchTerms: [
    'cradle cap on baby eyebrows',
    'baby flaky eyebrows',
    'baby scaly eyebrows',
    'baby eyebrow dandruff',
    'seborrheic dermatitis baby eyebrows',
    'baby crusty eyebrows',
    'baby yellow scales eyebrows',
    'cradle cap not just scalp',
    'baby eyebrow skin flaking',
    'baby eyebrow rash',
  ],
  quickAnswer:
    'Cradle cap (seborrheic dermatitis) commonly appears on the eyebrows as yellowish, greasy, flaky scales. This is completely harmless and very common in babies under 12 months. Gently massaging with oil and using a soft brush to loosen the scales usually resolves it. It is not painful or itchy for your baby.',
  byAge: [
    { ageRange: '0-3 months', context: 'Seborrheic dermatitis often appears on the eyebrows along with the scalp in the first few months. The scales may look greasy and yellowish. Gently massaging a small amount of mineral oil or coconut oil onto the eyebrows before bath time can help loosen the scales. Use a soft cloth or brush to gently remove them during the bath.' },
    { ageRange: '3-6 months', context: 'Cradle cap on the eyebrows typically peaks in the first few months and begins to improve by this age. Continue gentle oil massage and removal as needed. If the area becomes red and inflamed beyond the normal greasy scaling, it may overlap with eczema and could benefit from your pediatrician\'s assessment.' },
    { ageRange: '6-12 months', context: 'Most babies outgrow eyebrow cradle cap by this age. If it persists, it is still usually harmless but may benefit from a medicated shampoo or cream as directed by your pediatrician. Persistent flaking and redness of the eyebrows beyond 12 months may need evaluation to rule out other conditions.' },
    { ageRange: '12-24 months', context: 'Cradle cap on the eyebrows is uncommon beyond the first year. If flaking persists in toddlers, it may be seborrheic dermatitis that needs medical treatment, or it could be eczema. Your pediatrician can help determine the best approach.' },
  ],
  whenNormal: [
    'Greasy, yellowish scales on the eyebrows in a baby under 6 months that are not red or inflamed',
    'Scales that loosen and come away easily with gentle oil massage',
    'Cradle cap that gradually improves over weeks to months with gentle care',
  ],
  whenToMention: [
    'The eyebrow area is becoming red, inflamed, or spreading beyond the eyebrow region',
    'Cradle cap on the eyebrows persists beyond 12 months of age',
    'The scales are thick, difficult to remove, or seem to be bothering your baby',
  ],
  whenToActNow: [
    'The eyebrow area becomes infected with oozing, increased redness, or swelling',
    'Widespread scaling and redness develops on the face along with other symptoms like poor weight gain',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Cradle Cap. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/skin/Pages/Cradle-Cap.aspx' },
    { org: 'AAD', citation: 'American Academy of Dermatology. Seborrheic Dermatitis: Overview.', url: 'https://www.aad.org/public/diseases/a-z/seborrheic-dermatitis-overview' },
    { org: 'NIH', citation: 'National Library of Medicine. Infantile Seborrheic Dermatitis. StatPearls.', url: 'https://www.ncbi.nlm.nih.gov/books/NBK531461/' },
  ],
  relatedConcernSlugs: ['cradle-cap', 'baby-seborrheic-dermatitis-body', 'baby-cradle-cap-treatment-oil'],
};
