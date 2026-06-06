import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-target-shaped-rash',
  title: 'Target or Bullseye-Shaped Rash on Baby',
  category: 'skin',
  searchTerms: [
    'baby target shaped rash',
    'baby bullseye rash',
    'baby rash looks like target',
    'baby erythema multiforme',
    'baby concentric circle rash',
    'baby lyme disease rash',
    'baby rash with rings',
    'baby bulls eye rash tick bite',
    'infant target lesion',
    'baby rash red center ring',
  ],
  quickAnswer:
    'A target or bullseye-shaped rash with concentric rings can indicate erythema multiforme (often triggered by viruses or herpes simplex) or Lyme disease (from a tick bite). Erythema multiforme causes multiple target-shaped lesions on the hands and feet. A single expanding bullseye rash after a tick bite needs prompt evaluation for Lyme disease.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Target-shaped rashes are very rare in newborns. If one appears, it should be evaluated promptly by your pediatrician to determine the cause. Tick-borne diseases are possible even in very young infants if they spend time outdoors in tick-endemic areas.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Erythema multiforme can occasionally occur in infants, often following a herpes simplex or other viral infection. It presents as distinct target-shaped lesions, often on the hands, feet, and face. If your baby develops these distinctive lesions, see your pediatrician for evaluation and to determine if treatment is needed.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As babies become more mobile and spend time outdoors, tick exposure increases. A single expanding bullseye rash (erythema migrans) at the site of a tick bite is the hallmark of Lyme disease and should be evaluated promptly. Not all Lyme rashes have the classic bullseye appearance, so any expanding rash after a tick bite warrants attention.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddlers playing outdoors are at increased risk for tick bites. Erythema migrans from Lyme disease typically appears 3 to 30 days after a tick bite and expands over days. Erythema multiforme from viral triggers can also occur. Target-shaped rashes should always be evaluated, especially in tick-endemic regions.',
    },
  ],
  whenNormal: [
    'There is no version of a true target-shaped rash that should be dismissed; all should be evaluated by a healthcare provider',
  ],
  whenToMention: [
    'Any rash that has a distinct target or bullseye appearance should be seen by your pediatrician',
    'A rash that appeared at the site of a known or suspected tick bite, even without a classic bullseye pattern',
    'Multiple target-shaped lesions on the hands and feet following a viral illness',
  ],
  whenToActNow: [
    'An expanding bullseye rash after a tick bite, as early treatment for Lyme disease prevents complications',
    'Target-shaped lesions with mouth sores, swelling, or difficulty eating and drinking, which could indicate severe erythema multiforme',
    'Your baby has a target-shaped rash with fever, joint swelling, or other systemic symptoms',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Lyme Disease: Signs and Symptoms.',
      url: 'https://www.cdc.gov/lyme/signs-symptoms/index.html',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Lyme Disease. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/from-insects-animals/Pages/Lyme-Disease.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Erythema Multiforme. StatPearls.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK470259/',
    },
  ],
  relatedConcernSlugs: ['baby-ring-shaped-rash', 'baby-rash-with-fever', 'baby-insect-bite-swelling-large'],
};
