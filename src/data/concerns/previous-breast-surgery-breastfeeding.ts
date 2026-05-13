import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'previous-breast-surgery-breastfeeding',
  title: 'Breastfeeding After Breast Surgery',
  category: 'feeding',
  searchTerms: [
    'breastfeeding after breast surgery',
    'breast reduction breastfeeding',
    'breast augmentation breastfeeding',
    'breast implants nursing',
    'breast biopsy breastfeeding',
    'can I breastfeed after surgery',
    'low supply after breast surgery',
    'nipple surgery breastfeeding',
    'lumpectomy breastfeeding',
  ],
  quickAnswer:
    'Many mothers who have had previous breast surgery can breastfeed, though the extent of milk production may depend on the type of surgery, how much glandular tissue and nerve supply were affected, and whether the milk ducts were severed. Breast augmentation typically has less impact on breastfeeding than breast reduction. Working with a lactation consultant before delivery can help you prepare a feeding plan tailored to your situation.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'The early weeks are the most important time to assess how your milk supply is responding after breast surgery. Monitor your baby\'s weight gain closely and watch for signs of adequate intake such as frequent wet and dirty diapers. If your supply is insufficient, your lactation consultant may recommend supplementing with a supplemental nursing system at the breast to provide extra nutrition while still stimulating your supply.',
    },
    {
      ageRange: '3-6 months',
      context:
        'By this point you will have a clearer picture of your milk supply capacity. Some mothers with previous breast surgery find their supply increases over the first few months as nerve pathways regenerate and additional glandular tissue develops. Continue working with your lactation consultant to optimize your supply and adjust any supplementation as needed.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As your baby starts solids, the pressure on your breast milk supply for complete nutrition decreases. This can be reassuring for mothers whose supply was limited after surgery. Any amount of breast milk continues to provide immunological and nutritional benefits. Celebrate what your body can provide rather than focusing on what it cannot.',
    },
  ],
  whenNormal: [
    'You have some milk production after surgery even if it is not a full supply',
    'Your supply gradually increases over the first weeks as your body responds to nursing stimulation',
    'You need to supplement some feeds but can still provide partial breastfeeding',
    'The breast that was not operated on produces more milk than the surgical side',
  ],
  whenToMention: [
    'You are unsure whether your previous surgery will affect breastfeeding and want predelivery counseling',
    'Your baby is not gaining weight adequately and you are unsure how much milk you are producing',
    'You want to maximize your supply and need a personalized plan from a lactation consultant',
    'You are experiencing nipple sensation changes that make it difficult to know when letdown occurs',
  ],
  whenToActNow: [
    'Your baby is showing signs of dehydration or significant weight loss and you are unsure whether they are getting enough milk',
    'You have a breast implant and notice sudden changes in breast shape, size, or pain that suggest implant complications',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Breastfeeding and the Use of Human Milk. Pediatrics.',
      url: 'https://publications.aap.org/pediatrics/article/150/1/e2022057988/188347/Breastfeeding-and-the-Use-of-Human-Milk',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Breastfeeding After Breast and Nipple Surgeries. National Library of Medicine.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK501468/',
    },
    {
      org: 'La Leche League',
      citation:
        'La Leche League International. Breastfeeding After Breast Surgery.',
      url: 'https://llli.org/breastfeeding-info/breast-surgery/',
    },
  ],
};
