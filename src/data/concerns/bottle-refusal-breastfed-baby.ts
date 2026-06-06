import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'bottle-refusal-breastfed-baby',
  title: 'My Breastfed Baby Refuses the Bottle',
  category: 'feeding',
  searchTerms: ['breastfed baby refuses bottle', 'breastfed baby won\'t take bottle', 'bottle refusal breastfed', 'baby prefers breast to bottle', 'getting breastfed baby to take bottle', 'bottle rejection breastfed baby', 'baby fights bottle', 'breastfed baby bottle training', 'returning to work baby won\'t take bottle', 'introduce bottle breastfed baby'],
  quickAnswer: 'Bottle refusal in breastfed babies is extremely common. Many babies prefer the breast due to the familiar feel, warmth, and closeness. Strategies include having someone other than the nursing parent offer the bottle, trying different nipple shapes and flow rates, offering the bottle when baby is calm but not starving, and paced bottle feeding. Most babies eventually accept a bottle with patience and persistence.',
  byAge: [
    { ageRange: '0-3 months', context: 'If planning to introduce a bottle, try between 3-6 weeks. Earlier may cause nipple confusion in some babies, while waiting too long can lead to refusal. Have someone other than the nursing parent offer the bottle. Try a slow-flow nipple similar to breast flow.' },
    { ageRange: '4-6 months', context: 'If baby has been exclusively breastfed and refuses a bottle, try different nipple shapes. Some babies prefer one brand over another. Offer expressed breast milk first as the taste is familiar. Try when baby is calm and not extremely hungry.' },
    { ageRange: '6-9 months', context: 'If bottle refusal continues, you can try a cup instead. Many babies this age can learn to drink from an open cup or straw cup. If returning to work, baby may take a cup or do reverse cycling (nursing more when you are together).' },
    { ageRange: '9-12 months', context: 'If baby still refuses a bottle, a cup may be the better option. Some babies refuse bottles but accept sippy cups or straw cups readily. Baby is also eating solids which provides hydration and nutrition during separations.' },
    { ageRange: '12-24 months', context: 'By this age, cups are preferred over bottles anyway. If your toddler still breastfeeds, they can drink expressed milk or other drinks from a cup during separations.' },
  ],
  whenNormal: ['Baby takes time to adjust to a bottle but eventually accepts it', 'Baby prefers the bottle from certain caregivers', 'Baby drinks less from a bottle than at the breast but makes up for it during nursing sessions'],
  whenToMention: ['Baby refuses all bottles and you must return to work', 'Baby goes long periods without eating during separations', 'You have tried multiple bottle types and strategies without success'],
  whenToActNow: ['Baby is not eating at all during lengthy separations and is losing weight', 'Baby shows signs of dehydration from refusing all bottles'],
  relatedMilestones: ['feeding'],
  showSelfReferral: false,
  relatedConcernSlugs: ['refusing-bottle', 'bottle-preference', 'paced-bottle-feeding-concerns'],
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Introducing a Bottle to a Breastfed Baby. HealthyChildren.org, 2023.', url: 'https://www.healthychildren.org/English/ages-stages/baby/breastfeeding/Pages/default.aspx' },
    { org: 'NIH', citation: 'National Institutes of Health. Bottle Refusal in Breastfed Infants. Journal of Human Lactation, 2019.', url: 'https://pubmed.ncbi.nlm.nih.gov/' },
  ],
};
