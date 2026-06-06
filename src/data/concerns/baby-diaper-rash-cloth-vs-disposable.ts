import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-diaper-rash-cloth-vs-disposable',
  title: 'Diaper Type and Rash: Cloth vs Disposable',
  category: 'skin',
  searchTerms: [
    'cloth diaper vs disposable rash',
    'baby diaper type rash',
    'cloth diaper rash',
    'disposable diaper rash baby',
    'best diaper for sensitive skin',
    'diaper brand rash baby',
    'baby rash from diaper type',
    'cloth diapers better for skin',
    'diaper allergy baby',
    'diaper change frequency rash',
  ],
  quickAnswer:
    'Both cloth and disposable diapers can contribute to diaper rash. Disposable diapers are generally more absorbent and keep skin drier, but some babies may react to chemicals or fragrances in certain brands. Cloth diapers are free from chemicals but may hold moisture closer to the skin. Frequent changing is more important than diaper type in preventing rash.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Newborns need frequent diaper changes (8 to 12 times daily) regardless of diaper type. If using cloth diapers, ensure thorough washing and rinsing to remove detergent residue. If using disposables, choose fragrance-free options. If your baby develops a rash, try switching brands or types to see if a specific product is the culprit.',
    },
    {
      ageRange: '3-6 months',
      context:
        'As diaper change frequency decreases slightly, the absorbency of the diaper becomes more important. Superabsorbent disposables draw moisture away from skin effectively. If using cloth, add extra absorbent inserts and change promptly after wetting. Barrier cream helps regardless of diaper type.',
    },
    {
      ageRange: '6-12 months',
      context:
        'With solid food introduction, stools become more irritating. Frequent changes remain the best prevention regardless of diaper type. Some parents find success alternating between cloth (at home when frequent changes are easy) and disposables (overnight and for outings). The goal is keeping the skin as dry as possible.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddlers may show preference or reaction to specific diaper brands. If switching diaper brands resolves a persistent rash, the previous brand may have contained an irritating chemical or fragrance. During potty training transition, continue using barrier cream to protect skin during accidents.',
    },
  ],
  whenNormal: [
    'A mild rash that resolves with more frequent diaper changes and barrier cream, regardless of diaper type',
    'Transitioning between cloth and disposable without significant skin issues',
  ],
  whenToMention: [
    'You suspect your baby is reacting to a specific diaper brand or type',
    'Diaper rash persists despite trying different diapers and maintaining good hygiene',
    'You want guidance on which diaper type is best for your baby\'s sensitive skin',
  ],
  whenToActNow: [
    'A severe rash with distinct patterns matching the edges or shape of the diaper suggesting an allergic contact reaction',
    'Severe diaper rash with bleeding or infection signs',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Choosing Diapers. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/diapers-clothing/Pages/Choosing-Diapers.aspx',
    },
    {
      org: 'AAD',
      citation:
        'American Academy of Dermatology. Diaper Rash Prevention.',
      url: 'https://www.aad.org/public/diseases/a-z/diaper-rash-treatment',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Diaper Dermatitis: A Review. Pediatric Dermatology.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/24636195/',
    },
  ],
  relatedConcernSlugs: ['diaper-rash', 'baby-diaper-rash-barrier-cream', 'contact-dermatitis-baby'],
};
