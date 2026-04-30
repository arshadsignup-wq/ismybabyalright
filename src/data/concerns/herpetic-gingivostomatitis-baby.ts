import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'herpetic-gingivostomatitis-baby',
  title: 'Herpetic Gingivostomatitis (Mouth Sores) in Babies',
  category: 'medical',
  searchTerms: [
    'baby mouth sores herpes',
    'baby painful mouth ulcers',
    'gingivostomatitis baby',
    'baby cold sore mouth',
    'baby won\'t eat mouth pain',
    'baby drooling mouth sores fever',
    'herpes simplex baby mouth',
    'baby gums red swollen sores',
    'primary herpes baby',
    'baby mouth blisters fever',
  ],
  quickAnswer:
    'Herpetic gingivostomatitis is a common first-time infection with the herpes simplex virus (HSV-1) that causes painful sores on the gums, tongue, lips, and inside the cheeks. It is most common in children between 6 months and 5 years. While the sores look alarming and can make eating very painful for several days, the infection resolves on its own within 7-14 days. The main concern is keeping your child hydrated while their mouth is sore.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'HSV infection in babies under 6 months is uncommon but can be more serious due to their immature immune system. Neonatal herpes (contracted during birth) is a separate, more urgent condition. If a very young baby develops mouth sores with fever, seek medical evaluation promptly. Avoid kissing a baby if you have an active cold sore.',
    },
    {
      ageRange: '6-12 months',
      context:
        'This is a common age for a first HSV-1 infection, often acquired from a family member\'s cold sore through kisses or shared utensils. The infection starts with a fever of 102-104F (39-40C), followed by painful sores appearing on the gums, tongue, and inner cheeks. Gums may become very red, swollen, and bleed easily. Your baby will likely drool heavily and refuse to eat. Cool liquids, cold foods, and pain medication can help.',
    },
    {
      ageRange: '1-3 years',
      context:
        'Toddlers with gingivostomatitis may have 10-20 painful ulcers in the mouth at once. They will often refuse all food and most drinks. Popsicles, cold milk, yogurt, and smoothies are often better tolerated than warm foods. The worst pain is typically days 2-5, with gradual improvement after that. After this primary infection, the virus stays dormant and may occasionally cause cold sores later in life.',
    },
  ],
  whenNormal: [
    'Multiple small, shallow ulcers on the gums, tongue, and inner cheeks during the first HSV-1 infection',
    'High fever (102-104F / 39-40C) for 3-5 days at the start of the illness',
    'Heavy drooling and refusal to eat due to mouth pain',
    'Swollen, red gums that may bleed when touched',
    'Sores that take 7-14 days to fully heal',
  ],
  whenToMention: [
    'Your child is drinking very little and you are concerned about dehydration',
    'Fever persists beyond 5-7 days',
    'Mouth sores have not started to heal after 10 days',
    'Your child has recurrent episodes of mouth sores',
  ],
  whenToActNow: [
    'Your child shows signs of dehydration: no wet diapers for 6+ hours, no tears, sunken fontanelle, or dry mouth',
    'A baby under 3 months develops any mouth sores or blisters with fever',
    'Your child has sores near or in the eyes, which can cause serious eye infection',
    'Your child has a weakened immune system and develops mouth sores',
    'Your child becomes very lethargic, difficult to wake, or has a stiff neck',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['thrush', 'hand-foot-mouth', 'baby-white-tongue', 'dehydration-signs-baby'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Herpes Simplex Virus. Red Book Online.',
      url: 'https://redbook.solutions.aap.org/',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Cold Sores in Children. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/skin/Pages/Herpes-Simplex-Virus-Cold-Sores.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Herpetic Gingivostomatitis. StatPearls.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK526068/',
    },
  ],
};
