import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'newborn-yeast-diaper-rash',
  title: 'Fungal (Yeast) Diaper Rash in Newborns',
  category: 'skin',
  searchTerms: ['yeast diaper rash baby', 'candida diaper rash', 'fungal diaper rash newborn', 'bright red diaper rash', 'diaper rash won\'t go away', 'yeast infection baby bottom', 'diaper rash satellite lesions', 'antifungal cream baby', 'diaper rash not improving', 'candida rash treatment baby'],
  quickAnswer:
    'A yeast (Candida) diaper rash appears as a bright red rash, often in the skin folds, with small red dots (satellite lesions) spreading outward. It is more common after antibiotic use or when regular diaper rash persists for more than 3 days. Treatment requires an antifungal cream prescribed by your pediatrician, as regular diaper cream alone will not clear a yeast infection.',
  byAge: [
    { ageRange: '0-1 month', context: 'Yeast diaper rash can develop when Candida, a yeast normally present on the skin and in the gut, overgrows in the warm, moist diaper area. It is more likely to develop when an irritant diaper rash has been present for more than 2-3 days, creating an environment favorable for yeast. Unlike regular diaper rash, yeast rash is typically bright red, occurs in skin folds, and has characteristic satellite lesions (small red dots around the edges). Treatment includes an antifungal cream (such as nystatin or clotrimazole) applied with each diaper change, along with continued diaper rash prevention measures.' },
    { ageRange: '1-3 months', context: 'Yeast diaper rash can recur, especially if your baby or you are taking antibiotics, or if baby has oral thrush (as the yeast passes through the digestive tract). Treating oral thrush and diaper yeast simultaneously helps prevent recurrence. Probiotics may be discussed with your pediatrician.' },
    { ageRange: '3-6 months', context: 'Continue prevention strategies. If yeast diaper rash recurs frequently, ensure diapers are changed promptly and the skin is kept as dry as possible. Briefly airing out the diaper area during the day can help.' },
    { ageRange: '6-12 months', context: 'Yeast diaper rash can still occur, particularly during teething (when stools may be more acidic and frequent) or after antibiotic courses. The same treatment approach applies.' },
  ],
  whenNormal: ['Yeast diaper rash that responds to antifungal cream within 3-5 days', 'Gradual improvement with proper treatment and diaper care', 'Mild yeast rash that does not significantly bother the baby'],
  whenToMention: ['Diaper rash that does not improve after 3 days of regular diaper cream (may need antifungal)', 'Recurrent yeast diaper rash', 'Rash that is spreading beyond the diaper area'],
  whenToActNow: ['Open, bleeding sores in the diaper area with signs of secondary bacterial infection', 'Baby is in significant pain, has fever, or the rash is worsening rapidly despite antifungal treatment'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Diaper Rash. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/baby/diapers-clothing/Pages/Diaper-Rash.aspx' },
    { org: 'NIH', citation: 'National Library of Medicine. Candidal Diaper Dermatitis. StatPearls.', url: 'https://www.ncbi.nlm.nih.gov/books/NBK554604/' },
  ],
  relatedConcernSlugs: ['newborn-diaper-rash-first-weeks', 'newborn-oral-thrush-early', 'yeast-diaper-rash'],
};
