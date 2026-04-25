import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'ringworm-vs-eczema',
  title: 'Is It Ringworm or Eczema?',
  category: 'skin',
  searchTerms: [
    'ringworm vs eczema baby',
    'baby ringworm',
    'ring shaped rash on baby',
    'circular rash baby',
    'is it ringworm or eczema',
    'baby fungal infection skin',
    'tinea baby',
    'red circle on baby skin',
    'ringworm toddler',
    'round red patch on baby',
  ],
  quickAnswer:
    'Ringworm and eczema can look similar, but ringworm typically forms a distinct ring shape with a clearing center and raised, scaly edges, while eczema tends to appear as irregular dry, red patches. Ringworm is a fungal infection (not actually a worm) that is treatable with antifungal cream, while eczema is a chronic condition managed with moisturizers and sometimes medicated creams.',
  byAge: [
    {
      ageRange: '0-6 months',
      context:
        'Ringworm is uncommon in very young infants but can occur, especially if there is a pet in the home or an infected family member. At this age, round red patches are more likely to be a form of eczema, nummular dermatitis, or a contact reaction. If you notice a round, scaly patch with a clearing center that is expanding outward, have your pediatrician examine it. A simple skin scraping test can distinguish ringworm from eczema.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As babies become more mobile and interact with the environment, their exposure to fungi increases. Ringworm on the body (tinea corporis) presents as one or more circular, red, scaly patches with raised borders and a clearer center. Eczema at this age usually appears in skin creases and is itchier and drier looking. A key difference is that ringworm patches tend to expand outward over days, while eczema patches stay in the same general areas.',
    },
    {
      ageRange: '1-2 years',
      context:
        'Toddlers in daycare or who have pets are more commonly exposed to ringworm. It can appear on the scalp (tinea capitis), causing a scaly bald patch, or on the body. Scalp ringworm is especially common in toddlers and requires oral antifungal medication, not just cream. Eczema at this age tends to follow a chronic waxing and waning pattern in predictable locations like elbows and knees, whereas ringworm appears as a new isolated patch.',
    },
    {
      ageRange: '2-3 years',
      context:
        'At this age, children can contract ringworm from playmates, shared surfaces, or animals. If your toddler develops a new ring-shaped lesion, avoid applying eczema creams containing steroids before getting a diagnosis, as steroid cream can make ringworm worse and harder to recognize (a condition called tinea incognito). Your pediatrician can often diagnose ringworm visually or with a simple skin culture.',
    },
  ],
  whenNormal: [
    'A single small, round, mildly scaly patch that is not spreading rapidly or causing significant discomfort',
    'Dry patches in typical eczema locations (cheeks, elbows, knees) that improve with moisturizer',
    'A ring-shaped patch that responds to over-the-counter antifungal cream within 1-2 weeks',
  ],
  whenToMention: [
    'A circular rash is expanding, not improving with moisturizer, or you are unsure whether it is ringworm or eczema',
    'Your child has a scaly, bald patch on the scalp, which may be scalp ringworm requiring oral treatment',
    'The rash has been present for more than 2 weeks without improvement despite treatment',
  ],
  whenToActNow: [
    'The affected area is becoming very swollen, boggy, tender, or oozing pus, which may indicate a kerion (an inflamed fungal abscess on the scalp) or secondary bacterial infection',
    'Your child has a widespread rash with fever and seems unwell, which could indicate a more serious condition than either ringworm or eczema',
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
        'American Academy of Dermatology. Ringworm: Signs and Symptoms.',
      url: 'https://www.aad.org/public/diseases/a-z/ringworm-symptoms',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Ringworm (Body). Symptoms & Causes.',
      url: 'https://www.mayoclinic.org/diseases-conditions/ringworm-body/symptoms-causes/syc-20353780',
    },
  ],
};
