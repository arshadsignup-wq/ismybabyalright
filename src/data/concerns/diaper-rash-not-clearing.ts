import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'diaper-rash-not-clearing',
  title: 'Diaper Rash Not Clearing Up',
  category: 'skin',
  searchTerms: [
    'diaper rash not clearing up',
    'persistent diaper rash',
    'diaper rash won\'t go away',
    'stubborn diaper rash',
    'chronic diaper rash',
    'diaper rash getting worse',
    'yeast diaper rash',
    'diaper rash treatment not working',
    'severe diaper rash baby',
    'diaper rash with bumps',
    'diaper rash cream not helping',
  ],
  quickAnswer:
    'Most diaper rashes clear up within 3-5 days with frequent diaper changes, barrier cream, and air time. If your baby\'s rash persists beyond a week or seems to be getting worse despite good care, it may be a yeast infection or another type of rash that needs different treatment. Your pediatrician can help identify the cause and recommend the right approach.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Newborns have very sensitive skin and may develop diaper rash frequently. Change diapers as soon as possible after soiling, use warm water and a soft cloth for cleaning, and apply a thick layer of zinc oxide or petroleum jelly as a barrier. If the rash has bright red spots with satellite lesions (small red dots around the main rash), it may be a yeast infection requiring antifungal cream.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Drool and increased saliva production during teething can change stool acidity, which may trigger or worsen diaper rash. Continue with frequent changes and generous barrier cream. If the rash is in the skin folds (rather than on the raised areas), it is more likely yeast. If it is on the raised areas where the diaper touches, it is more likely irritant dermatitis.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Introduction of new foods often changes stool composition and can trigger diaper rash. Acidic foods like citrus, tomatoes, and berries are common culprits. If you notice rash appearing after specific foods, consider reducing that food temporarily. A persistent rash with a defined border may be a yeast rash needing prescription or over-the-counter antifungal treatment.',
    },
    {
      ageRange: '1-2 years',
      context:
        'Toddlers who are beginning to use the toilet may have more exposure to stool against skin. Persistent rash in an older toddler that does not respond to regular diaper cream may be contact dermatitis from a specific diaper brand or wipe ingredient. Try switching brands and see if it helps. Yeast infections remain common at this age, especially after antibiotic use.',
    },
    {
      ageRange: '2-3 years',
      context:
        'During toilet training, diaper rash may worsen if your child holds stool or has frequent loose stools. Keep the skin clean and protected. If a rash is persistent and accompanied by other skin changes, your pediatrician may want to evaluate for conditions like psoriasis or allergic contact dermatitis.',
    },
  ],
  whenNormal: [
    'Mild redness in the diaper area that clears within 2-3 days with barrier cream and frequent changes',
    'Occasional rash flares after new foods, teething, or illness',
    'Rash that improves with air time and staying dry',
    'Slight redness around the anus during diarrhea that heals as stools normalize',
  ],
  whenToMention: [
    'Diaper rash does not improve after 5-7 days of consistent home treatment',
    'Rash has bright red patches with satellite spots, suggesting yeast',
    'Blisters, peeling skin, or bleeding areas in the diaper region',
  ],
  whenToActNow: [
    'Rash has open sores that appear infected with pus, warmth, or fever',
    'Your baby is in significant pain, refusing to sit, and seems very unwell along with the rash',
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
        'American Academy of Pediatrics. Yeast Infections in Children. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/infections/Pages/Candida-Infections.aspx',
    },
  ],
};
