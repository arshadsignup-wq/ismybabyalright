import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'diaper-rash',
  title: 'Diaper Rash in Babies',
  category: 'skin',
  searchTerms: [
    'baby diaper rash',
    'diaper rash treatment',
    'red bum baby',
    'baby rash in diaper area',
    'how to treat diaper rash',
    'diaper rash cream',
    'baby bottom red and raw',
    'diaper rash won\'t go away',
    'baby diaper rash blisters',
    'baby rash from diapers',
  ],
  quickAnswer:
    'Diaper rash is one of the most common skin issues in babies, and nearly every baby gets it at some point. It is usually caused by prolonged contact with a wet or soiled diaper and responds well to frequent diaper changes, air drying, and a thick layer of zinc oxide barrier cream.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Newborn skin is very delicate and can develop redness quickly from friction and moisture. Frequent diaper changes, gentle cleaning with water or fragrance-free wipes, and applying a protective layer of zinc oxide or petroleum jelly at every change is the best prevention. Avoid alcohol-based wipes in the newborn period.',
    },
    {
      ageRange: '3-6 months',
      context:
        'As babies begin sleeping longer stretches and wearing diapers for extended periods overnight, diaper rash may flare. This is a common age for first episodes. Allowing some diaper-free time on a waterproof mat can help healing. Make sure the barrier cream is applied thickly enough that it stays visible between changes.',
    },
    {
      ageRange: '6-12 months',
      context:
        'The introduction of solid foods often changes stool composition and acidity, which can trigger new or worsening diaper rash. This is the peak age for diaper rash. Acidic foods like citrus, tomatoes, and berries are common culprits. Prompt diaper changes after bowel movements are especially important during this transition.',
    },
    {
      ageRange: '12 months+',
      context:
        'Diaper rash may continue as long as your child is in diapers but often becomes less frequent as their skin matures. Toddlers who are starting potty training may get occasional rashes from accidents or pull-ups. The same principles of barrier protection and frequent changes still apply.',
    },
  ],
  whenNormal: [
    'Mild redness in the diaper area that improves quickly with more frequent changes and barrier cream',
    'A brief flare after introducing a new food, particularly acidic fruits',
    'Slight redness after a night in a wet diaper that clears by midday',
    'Rash that stays in the areas directly in contact with the diaper',
  ],
  whenToMention: [
    'The rash is not improving after 3-4 days of consistent home treatment with barrier cream and frequent changes',
    'The rash has bright red, raised borders or satellite spots extending beyond the main rash area, which may suggest yeast involvement',
    'Your baby has recurrent diaper rashes that keep coming back despite good diaper care',
    'Blisters, sores, or peeling skin develop in the diaper area',
  ],
  whenToActNow: [
    'The rash has open, bleeding sores or pus-filled blisters suggesting a bacterial infection',
    'Your baby develops a fever along with a worsening, painful-looking diaper rash',
    'The rash spreads outside the diaper area and your baby seems unwell',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Diaper Rash. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/diapers-clothing/Pages/Diaper-Rash.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. How to Prevent and Treat Diaper Rash. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/diapers-clothing/Pages/Diaper-Rash-Solution.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Diaper Dermatitis. MedlinePlus.',
      url: 'https://medlineplus.gov/ency/article/000964.htm',
    },
  ],
};
