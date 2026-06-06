import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'formula-preparation-temperature',
  title: 'What Temperature Should I Use to Prepare Formula?',
  category: 'feeding',
  searchTerms: ['formula preparation temperature', 'formula water temperature', 'how hot water for formula', 'formula mixing temperature', 'warm water formula', 'room temperature formula', 'boiling water formula', 'formula preparation safety', 'formula water boiling', 'cold water formula safe'],
  quickAnswer: 'The WHO recommends using water that has been boiled and cooled to no less than 158F (70C) to prepare powdered formula to kill any bacteria like Cronobacter that may be present in the powder. However, many families in the US use room temperature or warm water. The CDC recommends using water from a safe source. Always follow the mixing instructions on your formula can exactly.',
  byAge: [
    { ageRange: '0-3 months', context: 'Newborns are most vulnerable to bacteria in formula. Using boiled water cooled to 70C (158F) provides the best safety margin. Let the formula cool to body temperature before feeding. Always test on your wrist. For premature or immunocompromised babies, this step is especially important.' },
    { ageRange: '4-6 months', context: 'Continue safe preparation practices. If using a formula pitcher to make larger batches, refrigerate immediately and use within 24 hours. Shake or stir well before serving.' },
    { ageRange: '6-9 months', context: 'The same preparation guidelines apply. As baby starts solids, formula remains important and should be prepared safely.' },
    { ageRange: '9-12 months', context: 'Some babies at this age prefer formula at different temperatures. It is safe to serve formula cold, at room temperature, or warm as long as it was prepared safely.' },
    { ageRange: '12-24 months', context: 'If still using formula, the same preparation rules apply. Many toddlers transition to whole milk around 12 months.' },
  ],
  whenNormal: ['You prepare formula with water from a safe source following package directions', 'You test formula temperature on your wrist before feeding', 'You discard formula that has been at room temperature for more than 2 hours'],
  whenToMention: ['You are unsure about your water quality and whether it is safe for formula', 'You want guidance on the safest preparation method for your baby', 'Baby has frequent digestive issues and you wonder if preparation method could be a factor'],
  whenToActNow: ['Baby develops symptoms of foodborne illness such as vomiting, diarrhea, and fever after a formula feed', 'There is a formula recall and you have the affected product'],
  relatedMilestones: ['feeding'],
  showSelfReferral: false,
  relatedConcernSlugs: ['preparing-formula-safely', 'formula-storage-guidelines', 'mixing-formula-concentration'],
  sources: [
    { org: 'WHO', citation: 'World Health Organization. How to Prepare Formula for Bottle-Feeding at Home. Geneva, 2007.', url: 'https://www.who.int/publications/i/item/9789241595414' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. How to Clean, Sanitize, and Store Infant Feeding Items. 2023.', url: 'https://www.cdc.gov/nutrition/infantandtoddlernutrition/formula-feeding/infant-formula-preparation-and-storage.html' },
  ],
};
