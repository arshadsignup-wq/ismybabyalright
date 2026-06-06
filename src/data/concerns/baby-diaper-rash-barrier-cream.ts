import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-diaper-rash-barrier-cream',
  title: 'Choosing Barrier Cream for Diaper Rash',
  category: 'skin',
  searchTerms: [
    'baby diaper rash cream',
    'best diaper cream baby',
    'diaper rash barrier cream',
    'zinc oxide diaper cream baby',
    'petroleum jelly diaper rash',
    'diaper rash paste vs cream',
    'which diaper cream for baby',
    'baby diaper cream prevention',
    'diaper rash treatment cream',
    'baby butt cream comparison',
  ],
  quickAnswer:
    'Barrier creams containing zinc oxide or petroleum jelly are the gold standard for preventing and treating diaper rash. Apply a thick layer at every diaper change, like spreading frosting on a cake. For prevention, petroleum jelly works well. For active rash, a higher concentration zinc oxide paste provides better protection. You do not need to fully remove the barrier at each change.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Start using barrier cream from day one. White petroleum jelly is an excellent, affordable, gentle preventive option. For active rash, use a paste with at least 10 to 40% zinc oxide concentration. Apply generously at every diaper change. When cleaning at the next change, gently wipe away the soiled layer and add fresh cream on top.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Continue regular barrier cream use. If your baby has sensitive skin or eczema-prone skin, choose a cream without fragrance, dyes, or common irritants. Some pediatricians recommend a layering approach: antifungal cream closest to the skin if yeast is suspected, then barrier paste on top.',
    },
    {
      ageRange: '6-12 months',
      context:
        'With the introduction of solids, stool composition changes and can become more irritating to the skin. Increase barrier cream use during transitions to new foods or during any diarrheal illness. A thick zinc oxide paste provides excellent protection during high-risk periods.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Continue using barrier cream especially during diarrheal episodes, teething, and antibiotic courses. For toddlers in daycare, send a clearly labeled container of barrier cream to ensure it is applied at each change. Standing diaper changes make barrier cream application trickier; focus on the areas most prone to redness.',
    },
  ],
  whenNormal: [
    'Using barrier cream preventively at every diaper change, even without active rash',
    'Mild diaper redness that resolves quickly with barrier cream application',
  ],
  whenToMention: [
    'Diaper rash is not responding to consistent barrier cream use',
    'You are unsure which type of cream is best for your baby\'s specific rash',
    'You suspect a yeast infection that needs antifungal treatment in addition to barrier cream',
  ],
  whenToActNow: [
    'Severe diaper rash with bleeding, open sores, or signs of infection',
    'Your baby develops an allergic reaction to a diaper cream product',
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
      org: 'AAD',
      citation:
        'American Academy of Dermatology. How to Treat Diaper Rash.',
      url: 'https://www.aad.org/public/diseases/a-z/diaper-rash-treatment',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Evidence-Based Diaper Dermatitis Management. Pediatric Dermatology.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/24636195/',
    },
  ],
  relatedConcernSlugs: ['diaper-rash', 'baby-diaper-rash-bleeding', 'yeast-diaper-rash', 'baby-diaper-rash-cloth-vs-disposable'],
};
