import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-eczema-infected-signs',
  title: 'Signs of Infected Eczema in Baby',
  category: 'skin',
  searchTerms: [
    'baby eczema infected',
    'infected eczema baby signs',
    'baby eczema oozing yellow',
    'baby eczema crusty weeping',
    'baby eczema with pus',
    'baby eczema getting worse suddenly',
    'eczema herpeticum baby',
    'baby eczema staph infection',
    'infected eczema baby treatment',
    'baby eczema honey colored crust',
  ],
  quickAnswer:
    'Eczema skin is more vulnerable to infection because the skin barrier is compromised. Signs of infected eczema include yellow or honey-colored crusting, oozing pus, increased redness and warmth, worsening pain, and fever. Infected eczema needs treatment with antibiotics and should be evaluated by your pediatrician promptly.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Infected eczema in very young babies needs prompt attention because their immune systems are still developing. Look for yellow crusting over eczema patches, increased fussiness, or fever. Bacterial infections (usually Staphylococcus aureus) are the most common, but viral infections like eczema herpeticum are also possible and more serious.',
    },
    {
      ageRange: '3-6 months',
      context:
        'As babies begin to scratch eczema patches, the risk of infection increases. Broken skin allows bacteria to enter. Signs include patches becoming more red, warm, swollen, or developing a honey-colored crust. If you notice these changes, see your pediatrician within 24 hours for evaluation and possible antibiotic treatment.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Babies this age are more active and may scratch eczema vigorously, increasing infection risk. Keeping nails short and using cotton mittens at night can help prevent scratching. If eczema patches suddenly look worse than usual with oozing or crusting, it is likely infected and needs treatment.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddlers may scratch more aggressively, leading to secondary infections. Recurrent skin infections over eczema may benefit from a bleach bath protocol (very dilute bleach baths under your doctor\'s guidance) to reduce skin bacteria. If your child has frequent eczema infections, discuss preventive strategies with your pediatrician.',
    },
  ],
  whenNormal: [
    'Eczema that is red and dry but without crusting, oozing, or increased warmth',
    'Mild temporary redness after applying moisturizer that settles quickly',
  ],
  whenToMention: [
    'Eczema patches develop yellow or honey-colored crusting',
    'The eczema area is becoming more red, swollen, or painful than usual',
    'You notice pus or oozing from eczema patches',
    'Your baby seems more uncomfortable than during a typical eczema flare',
  ],
  whenToActNow: [
    'Your baby develops a sudden widespread worsening of eczema with small, painful, punched-out blisters or erosions, which could indicate eczema herpeticum, a viral emergency',
    'Infected eczema is accompanied by fever, red streaking from the affected area, or rapidly spreading redness, suggesting a serious spreading infection',
    'Your baby is lethargic, feeding poorly, or seems significantly unwell alongside infected eczema',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. How to Treat and Control Eczema Rashes in Children. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/skin/Pages/Eczema-Tips.aspx',
    },
    {
      org: 'AAD',
      citation:
        'American Academy of Dermatology. Eczema: When to See a Dermatologist.',
      url: 'https://www.aad.org/public/diseases/eczema/childhood/when-to-see-derm',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Eczema Herpeticum: Clinical Features and Outcomes. Journal of Allergy and Clinical Immunology.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/19910026/',
    },
  ],
  relatedConcernSlugs: ['eczema', 'baby-skin-infection-staph', 'impetigo-baby', 'baby-eczema-face-severe'],
};
