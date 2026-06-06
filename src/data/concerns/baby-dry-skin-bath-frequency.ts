import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-dry-skin-bath-frequency',
  title: 'How Often to Bathe Baby with Dry Skin',
  category: 'skin',
  searchTerms: [
    'how often bathe baby dry skin',
    'baby bath frequency dry skin',
    'baby eczema how often bath',
    'over bathing baby dry skin',
    'baby bath every day bad for skin',
    'bathing baby with eczema',
    'baby dry skin bath tips',
    'should I bathe baby every day',
    'baby bath routine dry skin',
    'baby skin care bath frequency',
  ],
  quickAnswer:
    'For babies with dry skin or eczema, daily short baths (5 to 10 minutes in lukewarm water) followed immediately by moisturizer can actually help hydrate the skin, a technique called "soak and seal." The key is to keep baths brief, use lukewarm water, minimize soap use, and always apply thick moisturizer within 3 minutes of getting out.',
  byAge: [
    { ageRange: '0-3 months', context: 'Newborns do not need daily baths since they do not get very dirty. Bathing 2 to 3 times per week is typically sufficient, with gentle spot-cleaning of the diaper area, face, and neck folds in between. If your baby has eczema, your pediatrician may recommend more frequent baths as part of a soak and seal routine.' },
    { ageRange: '3-6 months', context: 'For babies with dry skin, bathing every other day may be ideal unless using the soak and seal method. When you do bathe, use a gentle, fragrance-free cleanser only on areas that need it (diaper area, skin folds) rather than lathering the entire body. Apply a thick moisturizer to damp skin immediately after the bath.' },
    { ageRange: '6-12 months', context: 'As babies start eating solids and crawling, they get messier and may need more frequent baths. Short daily baths followed by immediate moisturizing are often recommended by dermatologists for babies with eczema. Avoid bubble baths, fragranced products, and very warm water, which can all worsen dryness.' },
    { ageRange: '12-24 months', context: 'Toddlers may love bath time but extended soaking can dry out the skin. Keep baths to 10 minutes or less, use lukewarm water, and follow every bath with generous moisturizer. If your toddler has persistent dry skin, daily soak and seal baths remain the gold standard approach.' },
  ],
  whenNormal: [
    'Mild dry skin that responds well to the soak and seal bathing method',
    'Skin that looks hydrated and comfortable with a consistent bath and moisturizing routine',
    'Temporary dryness after baths that resolves completely with moisturizer',
  ],
  whenToMention: [
    'You are unsure how often to bathe your baby given their skin condition',
    'Your baby\'s skin seems worse after baths despite using the soak and seal method',
    'You need product recommendations for bath cleanser and moisturizer',
  ],
  whenToActNow: [
    'Your baby\'s skin is cracked, bleeding, or showing signs of infection that bath and moisturize alone cannot manage',
    'Your baby is in significant discomfort from dry skin despite an appropriate skin care routine',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Bathing Your Baby. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/baby/bathing-skin-care/Pages/Bathing-Your-Newborn.aspx' },
    { org: 'AAD', citation: 'American Academy of Dermatology. Eczema: Bathing Tips.', url: 'https://www.aad.org/public/diseases/eczema/childhood/bathing' },
    { org: 'NIH', citation: 'National Library of Medicine. Bathing Frequency and Associated Outcomes in Atopic Dermatitis. Annals of Allergy, Asthma & Immunology.', url: 'https://pubmed.ncbi.nlm.nih.gov/31201854/' },
  ],
  relatedConcernSlugs: ['dry-skin', 'eczema', 'baby-eczema-moisturizer-routine', 'baby-dry-skin-winter'],
};
