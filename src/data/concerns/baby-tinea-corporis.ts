import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-tinea-corporis',
  title: 'Body Ringworm (Tinea Corporis) in Baby',
  category: 'skin',
  searchTerms: ['baby tinea corporis', 'body ringworm baby', 'baby fungal rash body', 'tinea corporis infant', 'ringworm on baby body', 'toddler body ringworm', 'baby fungal skin infection body', 'ringworm baby trunk', 'tinea baby treatment', 'baby ring rash body fungal'],
  quickAnswer: 'Tinea corporis is ringworm on the body, appearing as circular, scaly, red patches with a raised border and clearer center. It is caused by dermatophyte fungi and is contagious. It responds well to topical antifungal cream applied for 2 to 4 weeks. Pets, other children, and contaminated surfaces are common sources.',
  byAge: [
    { ageRange: '0-3 months', context: 'Body ringworm is uncommon in very young infants. If a ring-shaped rash appears, your pediatrician should confirm the diagnosis, as nummular eczema can look very similar. Antifungal treatment should only be started after proper diagnosis.' },
    { ageRange: '3-6 months', context: 'If ringworm is confirmed, apply over-the-counter clotrimazole or miconazole cream twice daily for 2 to 4 weeks. Continue treatment for at least one week after the rash appears clear to prevent recurrence. Keep the area clean and covered when possible.' },
    { ageRange: '6-12 months', context: 'Babies may contract ringworm from pets (especially cats and dogs with skin patches) or from other children. The rash typically starts as a small red patch and expands into a ring shape over days. It may itch mildly. Wash bedding and clothing in hot water during treatment.' },
    { ageRange: '12-24 months', context: 'Toddlers in daycare or who have pets are at higher risk. If ringworm is widespread or not responding to topical treatment, oral antifungal medication may be needed. A skin scraping can confirm the fungal diagnosis. Your child can attend daycare once treatment has been started.' },
  ],
  whenNormal: ['A single ringworm patch that responds to antifungal cream within 1 to 2 weeks', 'Gradual clearing of the ring from the center outward with treatment'],
  whenToMention: ['Multiple ringworm patches on the body', 'Ringworm not improving after 2 weeks of topical antifungal', 'Ringworm keeps recurring after completing treatment'],
  whenToActNow: ['A ringworm patch becomes very swollen, boggy, painful, and oozing, suggesting a kerion reaction', 'Widespread body fungal infection with signs of immune compromise'],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    { org: 'AAP', citation: 'American Academy of Pediatrics. Ringworm. HealthyChildren.org.', url: 'https://www.healthychildren.org/English/health-issues/conditions/skin/Pages/Ringworm.aspx' },
    { org: 'CDC', citation: 'Centers for Disease Control and Prevention. Ringworm.', url: 'https://www.cdc.gov/fungal/diseases/ringworm/index.html' },
    { org: 'NIH', citation: 'National Library of Medicine. Tinea Corporis. StatPearls.', url: 'https://www.ncbi.nlm.nih.gov/books/NBK544360/' },
  ],
  relatedConcernSlugs: ['baby-ringworm-treatment', 'ringworm-vs-eczema', 'baby-ring-shaped-rash', 'baby-tinea-capitis-scalp'],
};
