import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-ring-shaped-rash',
  title: 'Circular or Ring-Shaped Rash on Baby',
  category: 'skin',
  searchTerms: [
    'baby ring shaped rash',
    'baby circular rash',
    'baby round rash',
    'baby rash shaped like ring',
    'baby ringworm or eczema',
    'infant ring rash',
    'baby circle rash not ringworm',
    'baby annular rash',
    'round red patch baby skin',
    'baby rash with clear center',
  ],
  quickAnswer:
    'A ring-shaped or circular rash on a baby can be caused by ringworm (a fungal infection), granuloma annulare, nummular eczema, or Lyme disease. Ringworm is the most common cause and is easily treated with antifungal cream. If the ring has a clear center with a raised, scaly border, ringworm is very likely. A ring-shaped rash following a tick bite needs prompt medical evaluation.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Ring-shaped rashes are uncommon in very young infants. If one appears, it may be nummular eczema (round patches of dry, irritated skin) rather than ringworm. Ringworm is possible if there has been contact with an infected person or pet. Have your pediatrician evaluate any circular rash on a newborn.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Nummular eczema can appear as coin-shaped, dry, scaly patches that may be confused with ringworm. Ringworm has a more defined border with clearing in the center and is less common at this age. If the circular rash is not responding to moisturizer, it may need antifungal treatment, so see your pediatrician for an accurate diagnosis.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As babies become more mobile and interact with pets and other children, ringworm becomes more likely. The classic appearance is a red, slightly raised ring with a scaly border and clearer center. Ringworm is not dangerous and responds well to over-the-counter antifungal creams applied for 2 to 4 weeks.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddlers who attend daycare or play with animals are at higher risk for ringworm. Granuloma annulare, another cause of ring-shaped bumps, is harmless and resolves on its own. If you live in a tick-endemic area and notice an expanding ring-shaped rash after outdoor play, this could be erythema migrans from a tick bite and needs evaluation for Lyme disease.',
    },
  ],
  whenNormal: [
    'A single small ring-shaped patch that responds to antifungal cream, consistent with ringworm',
    'Coin-shaped dry patches that improve with moisturizer, suggesting nummular eczema',
    'Flesh-colored ring-shaped bumps without redness or itching, suggesting granuloma annulare',
  ],
  whenToMention: [
    'A ring-shaped rash is not improving after 2 weeks of antifungal cream',
    'Multiple ring-shaped patches are appearing on the body',
    'You are unsure whether the rash is ringworm, eczema, or something else',
  ],
  whenToActNow: [
    'An expanding ring-shaped rash appears after a known or possible tick bite, as this could indicate Lyme disease requiring prompt antibiotic treatment',
    'A ring-shaped rash is accompanied by fever, joint pain, or other systemic symptoms',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Ringworm. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/skin/Pages/Ringworm.aspx',
    },
    {
      org: 'AAD',
      citation:
        'American Academy of Dermatology. Ringworm: Overview.',
      url: 'https://www.aad.org/public/diseases/a-z/ringworm-overview',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Lyme Disease: Signs and Symptoms.',
      url: 'https://www.cdc.gov/lyme/signs-symptoms/index.html',
    },
  ],
  relatedConcernSlugs: ['baby-red-ring-rash', 'ringworm-vs-eczema', 'baby-ringworm-treatment', 'baby-granuloma-annulare'],
};
