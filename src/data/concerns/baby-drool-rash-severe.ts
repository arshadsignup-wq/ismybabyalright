import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-drool-rash-severe',
  title: 'Severe Drool Rash on Baby',
  category: 'skin',
  searchTerms: [
    'baby drool rash severe',
    'baby drool rash bad',
    'baby drool rash won\'t go away',
    'severe drool rash baby',
    'baby chin rash drool bad',
    'baby drool rash bleeding',
    'baby drool rash treatment severe',
    'baby excessive drool rash',
    'teething drool rash bad',
    'drool rash baby chest neck',
  ],
  quickAnswer:
    'Severe drool rash occurs when persistent moisture from saliva breaks down the skin barrier, causing raw, red, cracked skin on the chin, cheeks, neck, and chest. It is especially common during teething. Frequent gentle wiping (patting not rubbing), applying a thick barrier like petroleum jelly, and treating any secondary infection are key to management.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Early drooling can begin as young as 2 months. Severe drool rash at this age may indicate the baby has very sensitive skin or underlying eczema. Apply petroleum jelly frequently as a barrier. Change bibs often and pat (do not rub) drool from the chin throughout the day.',
    },
    {
      ageRange: '3-6 months',
      context:
        'This is often when drooling peaks as salivary glands mature and teething begins. Severe drool rash may cover the chin, cheeks, neck folds, and chest. Use drool bibs with an absorbent backing. Apply a thick layer of petroleum jelly or zinc-based cream before naps and at night when you cannot actively manage drool.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Teething intensifies drooling. Severe drool rash can become cracked and even bleed, making the baby irritable. If the skin is very raw, your pediatrician may prescribe a mild steroid cream for short-term use. Keeping a barrier on the skin at all times is essential for healing.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Drooling typically decreases as toddlers gain oral motor control, and drool rash usually improves. If severe drool rash persists beyond toddlerhood, discuss with your pediatrician whether excessive drooling could have another cause. Continue barrier protection as needed.',
    },
  ],
  whenNormal: [
    'Mild redness on the chin that responds to regular barrier cream application',
    'Drool rash that comes and goes with teething episodes',
  ],
  whenToMention: [
    'Drool rash is very raw, cracked, or bleeding despite barrier cream use',
    'The rash seems infected with yellow crusting or increasing redness',
    'Severe drool rash is spreading and causing your baby significant discomfort',
  ],
  whenToActNow: [
    'Drool rash becomes clearly infected with pus, spreading redness, and fever',
    'The baby is refusing to eat due to painful facial skin',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Drooling and Your Baby. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/teething-tooth-care/Pages/Drooling-and-Your-Baby.aspx',
    },
    {
      org: 'AAD',
      citation:
        'American Academy of Dermatology. How to Treat Baby Rashes.',
      url: 'https://www.aad.org/public/diseases/a-z/baby-rash',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Irritant Contact Dermatitis in Infants. Pediatric Dermatology.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/23679316/',
    },
  ],
  relatedConcernSlugs: ['baby-chin-rash-from-drool', 'baby-rash-around-mouth', 'eczema'],
};
