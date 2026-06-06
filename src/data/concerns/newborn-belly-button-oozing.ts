import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'newborn-belly-button-oozing',
  title: 'Oozing After Cord Falls Off',
  category: 'medical',
  searchTerms: ['baby belly button oozing', 'newborn belly button wet', 'belly button discharge after cord', 'baby navel oozing', 'belly button not healing after cord', 'clear fluid belly button baby', 'newborn belly button won\'t dry', 'oozy belly button baby', 'belly button weeping baby', 'newborn navel drainage'],
  quickAnswer: 'A small amount of clear or slightly bloody fluid from the belly button after the cord stump falls off is common and usually harmless. This minor oozing typically resolves within a few days with gentle cleaning and keeping the area dry. Persistent oozing may indicate an umbilical granuloma, which your pediatrician can easily treat.',
  byAge: [
    { ageRange: '0-1 month', context: 'After the cord stump separates, the belly button area may ooze a small amount of clear, slightly yellow, or blood-tinged fluid for a few days. This is a normal part of the healing process. Keep the area clean and dry. Fold the diaper below the belly button to allow air circulation. If oozing persists beyond a week, a small pink tissue growth (umbilical granuloma) may have formed, which your pediatrician can treat with silver nitrate applications. Persistent clear drainage can also rarely indicate a urachal remnant (connection to the bladder) that needs evaluation.' },
    { ageRange: '1-3 months', context: 'The belly button should be fully healed by now. If oozing continues, your pediatrician should evaluate for granuloma, urachal remnant, or other causes.' },
    { ageRange: '3-6 months', context: 'Persistent belly button drainage beyond this age is unusual and warrants investigation.' },
    { ageRange: '6-12 months', context: 'The belly button should be completely healed with no drainage. Any new drainage should be evaluated.' },
  ],
  whenNormal: ['Small amount of clear or slightly bloody oozing for a few days after the cord falls off', 'The surrounding skin looks normal without redness', 'Oozing resolves within a few days to a week', 'Baby is not bothered and no odor is present'],
  whenToMention: ['Oozing continues beyond a week after the cord fell off', 'You notice a small pink or red tissue growth at the belly button (granuloma)', 'Clear watery drainage that seems persistent'],
  whenToActNow: ['Foul-smelling discharge with redness, swelling, or warmth indicating infection', 'Heavy or persistent bleeding from the belly button', 'Baby has fever along with belly button drainage'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Umbilical Cord Care. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/ages-stages/baby/bathing-skin-care/Pages/Umbilical-Cord-Care.aspx' },
    { org: 'NIH', citation: 'National Library of Medicine. Umbilical Granuloma. StatPearls.', url: 'https://www.ncbi.nlm.nih.gov/books/NBK557394/' },
  ],
  relatedConcernSlugs: ['newborn-umbilical-granuloma', 'newborn-cord-stump-smell', 'umbilical-cord-stump-infection'],
};
