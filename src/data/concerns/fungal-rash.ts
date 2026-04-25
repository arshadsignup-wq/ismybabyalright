import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'fungal-rash',
  title: 'Baby Fungal Rash (Ringworm / Tinea)',
  category: 'skin',
  searchTerms: [
    'baby ringworm',
    'ringworm in toddler',
    'baby fungal infection skin',
    'ring shaped rash on baby',
    'tinea baby',
    'baby circular rash',
    'ringworm treatment baby',
    'round red patch on baby skin',
    'is baby rash ringworm',
    'fungal skin infection toddler',
  ],
  quickAnswer:
    'Despite its name, ringworm has nothing to do with worms -- it is a common, harmless fungal infection of the skin. It appears as a round or oval red patch that may have a raised, scaly border with clearing in the center. It is easily treated with antifungal cream and typically clears within 2-4 weeks.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Ringworm is uncommon in very young babies but can occur if there is close contact with an infected person, pet, or contaminated surface. In young infants, any unusual rash should be seen by your pediatrician to confirm the diagnosis, since other conditions can look similar. Over-the-counter antifungal creams are generally safe for babies but check with your doctor for the right product and dosing.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As babies become more mobile and explore their environment, they have more exposure to surfaces and objects that could harbor fungal spores. Ringworm on the body (tinea corporis) appears as a round, red patch with a raised, slightly scaly edge. It is mildly contagious and spreads through direct skin contact or shared items like towels and clothing.',
    },
    {
      ageRange: '1-3 years',
      context:
        'Toddlers in daycare are at increased risk of ringworm due to close contact with other children. Ringworm of the scalp (tinea capitis) is more common in this age group and may cause scaly patches, broken hairs, or small bald spots. Unlike body ringworm, scalp ringworm requires oral antifungal medication prescribed by your doctor, as topical creams cannot penetrate the hair follicle.',
    },
  ],
  whenNormal: [
    'A single small round patch on the body that responds to antifungal cream within 1-2 weeks',
    'The ring-shaped rash has a clear center and raised, slightly scaly border',
    'The patch is not painful, just mildly itchy',
    'Improvement is steady after starting appropriate antifungal treatment',
  ],
  whenToMention: [
    'The rash is not improving after 2 weeks of consistent antifungal cream application',
    'Scaly patches appear on the scalp with hair loss or breakage, which may need oral antifungal medication',
    'Multiple patches are appearing in different locations',
    'The rash is spreading to other family members or pets',
  ],
  whenToActNow: [
    'The affected area becomes very swollen, boggy, tender, and oozing (a kerion), which is an intense inflammatory reaction requiring prescription treatment',
    'Your child develops a widespread rash with fever, which may not be ringworm and needs prompt evaluation',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Ringworm (Tinea). HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/skin/Pages/Ringworm.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Ringworm Information for Healthcare Professionals.',
      url: 'https://www.cdc.gov/ringworm/index.html',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Tinea Capitis (Ringworm of the Scalp). Red Book.',
      url: 'https://publications.aap.org/redbook',
    },
  ],
};
