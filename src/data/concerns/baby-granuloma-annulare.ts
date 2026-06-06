import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-granuloma-annulare',
  title: 'Granuloma Annulare (Ring-Shaped Skin Bumps) in Baby',
  category: 'skin',
  searchTerms: [
    'baby granuloma annulare',
    'baby ring shaped bumps skin',
    'baby raised ring bumps',
    'granuloma annulare child',
    'toddler granuloma annulare',
    'baby flesh colored ring bumps',
    'baby ring bumps not ringworm',
    'baby granuloma annulare treatment',
    'baby bumps in circle pattern',
    'baby ring of bumps skin',
  ],
  quickAnswer:
    'Granuloma annulare is a harmless skin condition that causes flesh-colored or slightly pink firm bumps arranged in a ring or arc shape. It is not ringworm and is not contagious. The cause is unknown. It typically resolves on its own within 1 to 2 years without treatment, though it may recur.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Granuloma annulare is very rare in infants under 6 months. Ring-shaped skin lesions at this age are more likely to be other conditions and should be evaluated by your pediatrician.',
    },
    {
      ageRange: '3-6 months',
      context:
        'If ring-shaped bumps appear at this age, they are more likely ringworm than granuloma annulare, but your pediatrician can help distinguish the two. Granuloma annulare bumps are smooth and firm without the scaling typical of ringworm.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Granuloma annulare may begin to appear. The bumps are typically on the hands, feet, elbows, or knees. They form a ring or arc of small, firm, smooth bumps without any scaling or itching. No treatment is needed as they resolve on their own.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddlers may develop granuloma annulare lesions that persist for months. While parents may worry about the appearance, the condition is benign. Treatment is usually not recommended for children because the lesions resolve spontaneously and treatments can cause more scarring than the condition itself.',
    },
  ],
  whenNormal: [
    'Flesh-colored firm bumps arranged in a ring that are not painful, itchy, or scaly',
    'Lesions that remain stable or slowly resolve over months',
  ],
  whenToMention: [
    'Ring-shaped bumps appear and you want confirmation of the diagnosis',
    'The bumps are changing in appearance or becoming symptomatic',
    'Granuloma annulare lesions are very numerous or widespread',
  ],
  whenToActNow: [
    'Ring-shaped lesions become very red, scaly, or itchy, suggesting they may actually be ringworm or another treatable condition',
    'Widespread granuloma annulare covering large body areas, which may occasionally be associated with underlying conditions',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAD',
      citation:
        'American Academy of Dermatology. Granuloma Annulare: Overview.',
      url: 'https://www.aad.org/public/diseases/a-z/granuloma-annulare-overview',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Granuloma Annulare. StatPearls.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK459377/',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Skin Conditions. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/skin/Pages/default.aspx',
    },
  ],
  relatedConcernSlugs: ['baby-ring-shaped-rash', 'ringworm-vs-eczema', 'baby-raised-bumps-on-skin'],
};
