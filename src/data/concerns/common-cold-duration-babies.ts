import type { ConcernPage } from '@/data/concerns/types';

export const concern: ConcernPage = {
  slug: 'common-cold-duration-babies',
  title: 'How Long a Cold Lasts in Babies',
  category: 'medical',
  searchTerms: [
    'how long does baby cold last',
    'baby cold duration',
    'baby runny nose how many days',
    'baby cold not getting better',
    'how long cold lasts infant',
    'baby congested for a week',
    'newborn cold timeline',
    'baby cold still sick after a week',
    'when does baby cold get better',
  ],
  quickAnswer:
    'The common cold in babies typically lasts 7 to 10 days, though some symptoms like a residual cough or runny nose can linger for up to two weeks. Symptoms usually peak around days 2 to 3 and then gradually improve. Babies may catch 8 to 10 colds per year in their first two years, which is completely normal and helps build their immune system.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Newborns are obligate nose breathers, so even a mild cold can cause significant feeding and sleeping difficulties. Nasal congestion at this age should be managed with saline drops and gentle suction. Any fever (100.4\u00b0F / 38\u00b0C or higher) during a cold in a baby under 3 months requires immediate medical evaluation, as it could indicate a more serious infection.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Colds at this age follow a typical pattern: runny nose and mild fussiness for the first 2-3 days, peak congestion around days 3-4, then gradual improvement. The nasal discharge often starts clear, turns thick and yellow or green (which is a normal part of the immune response, not necessarily a sign of bacterial infection), and then clears. Using a cool-mist humidifier and keeping baby upright during feedings can help.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As maternal antibodies wane and babies put everything in their mouths, cold frequency increases. A cold lasting 7-10 days is normal; however, if symptoms worsen after day 5 or a new fever develops after initial improvement, this may indicate a secondary infection like an ear infection. Babies this age may also refuse solids during a cold but should still be taking breast milk or formula.',
    },
    {
      ageRange: '12-36 months',
      context:
        'Toddlers in group care settings may seem to have a nearly constant runny nose through fall and winter. Each individual cold should still follow the 7-10 day timeline. A cough from postnasal drip can persist for 2-3 weeks after other symptoms resolve. Honey (for children over 12 months) can soothe a cough, but over-the-counter cold medicines are not recommended for children under 4 years.',
    },
  ],
  whenNormal: [
    'The cold follows the expected timeline: worsening for 2-3 days, then gradually improving over the next 5-7 days',
    'Nasal discharge changes from clear to yellow or green and back to clear  -  this color change is a normal part of the immune response',
    'Your baby has mild fussiness but is still feeding reasonably well and producing wet diapers',
    'A mild cough lingers for up to 2 weeks after the worst of the cold has passed',
  ],
  whenToMention: [
    'The cold is not improving at all after 10 days, or symptoms worsen after initial improvement',
    'Your baby develops a new fever on day 5 or later of the cold, which may suggest a secondary infection',
    'Your baby is coughing enough to cause vomiting or is having difficulty sleeping despite home remedies',
    'You notice thick, persistent green nasal discharge for more than 10-14 days',
  ],
  whenToActNow: [
    'Your baby has difficulty breathing  -  fast breathing, flared nostrils, rib retractions, or wheezing  -  or refuses to drink fluids',
    'Any fever in a baby under 3 months, or a fever above 104\u00b0F (40\u00b0C) in older babies that does not respond to medication',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Children and Colds. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/ear-nose-throat/Pages/Children-and-Colds.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institute of Allergy and Infectious Diseases. Common Cold.',
      url: 'https://www.niaid.nih.gov/diseases-conditions/common-cold',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Coughs and Colds: Medicines or Home Remedies? HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/chest-lungs/Pages/Coughs-and-Colds-Medicines-or-Home-Remedies.aspx',
    },
  ],
};
