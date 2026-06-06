import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-mosquito-bite-reaction',
  title: 'Mosquito Bite Reaction in Baby',
  category: 'skin',
  searchTerms: ['baby mosquito bite reaction', 'baby mosquito bite swollen', 'baby mosquito bite large red', 'baby allergic to mosquito bites', 'skeeter syndrome baby mosquito', 'baby mosquito bite treatment', 'baby mosquito bite won\'t go away', 'toddler mosquito bite big', 'baby mosquito bite blister', 'preventing mosquito bites baby'],
  quickAnswer: 'Babies often have exaggerated reactions to mosquito bites because their immune systems have not yet developed tolerance to mosquito saliva proteins. Bites may swell significantly, turn bright red, and even blister. This is called skeeter syndrome and is a local reaction, not a dangerous allergy. Cool compresses, anti-itch cream, and time are the best treatments.',
  byAge: [
    { ageRange: '0-3 months', context: 'Protect young infants from mosquito bites using mosquito nets over strollers and cribs rather than repellents. DEET-containing repellents should not be used on babies under 2 months. If bitten, a cool damp cloth can soothe the area. Large reactions in very young babies may be confused with infections.' },
    { ageRange: '3-6 months', context: 'DEET-based repellents (10 to 30% concentration) can be used from 2 months of age according to the AAP. Apply to clothing and exposed skin, avoiding hands and face. Mosquito bites may cause large, red, swollen bumps that can persist for days. This exaggerated reaction is normal for this age.' },
    { ageRange: '6-12 months', context: 'Reactions to mosquito bites are often at their most dramatic at this age. A single bite may swell to a large red welt that looks concerning but is benign. Keeping nails short prevents scratching, which can lead to secondary infection. Applying calamine lotion or a cool compress can ease itching.' },
    { ageRange: '12-24 months', context: 'With repeated exposure to mosquito bites over time, reactions typically become less severe. Continue using repellents during mosquito season. If bites become infected from scratching (impetigo), antibiotic treatment may be needed. Some children continue to have large reactions and may benefit from oral antihistamines before and after exposure.' },
  ],
  whenNormal: ['A large red, swollen, itchy bump at the bite site that gradually improves over 3 to 7 days', 'A blister forming at the center of a mosquito bite in a baby with sensitive skin', 'Multiple itchy bumps after outdoor play during mosquito season'],
  whenToMention: ['Reactions are very large and distressing and you want to discuss prevention strategies', 'Bites are becoming infected with yellow crusting or increasing redness', 'Your child has excessive swelling or seems to react more severely than other children'],
  whenToActNow: ['Hives, facial swelling, or difficulty breathing after a mosquito bite, suggesting a rare systemic allergic reaction', 'A bite develops spreading redness, red streaks, warmth, and fever suggesting cellulitis'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Choosing an Insect Repellent. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/safety-prevention/at-play/Pages/Insect-Repellents.aspx' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Mosquito Bite Prevention.', url: 'https://www.cdc.gov/mosquitoes/prevention/index.html' },
    { org: 'NIH', citation: 'National Library of Medicine. Mosquito Allergy. Annals of Allergy, Asthma & Immunology.', url: 'https://pubmed.ncbi.nlm.nih.gov/22339817/' },
  ],
  relatedConcernSlugs: ['baby-insect-bite-swelling-large', 'baby-flea-bites-pattern', 'impetigo-baby'],
};
