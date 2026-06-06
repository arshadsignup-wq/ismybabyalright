import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'newborn-vacuum-marks',
  title: 'Marks From Vacuum Extraction',
  category: 'medical',
  searchTerms: [
    'vacuum delivery marks baby',
    'baby head bruise vacuum',
    'ventouse marks newborn',
    'vacuum extraction swelling baby',
    'baby circular mark on head',
    'vacuum delivery head shape',
    'chignon baby head',
    'vacuum extraction complications',
    'baby head injury vacuum delivery',
    'how long vacuum marks last',
  ],
  quickAnswer:
    'A circular bruise or swelling on the top of your baby\'s head after vacuum-assisted delivery is expected and temporary. The raised area (called a chignon) and surrounding bruising typically resolve within a few days to 2 weeks. Your baby\'s head shape will return to normal. The marks do not affect the brain or development.',
  byAge: [
    {
      ageRange: '0-1 month',
      context:
        'After vacuum-assisted delivery, it is normal to see a raised, circular area of swelling on the scalp where the vacuum cup was applied (called a chignon). There may also be surrounding bruising. The swelling is caused by suction on the scalp tissue and typically resolves within 24-48 hours. The bruising takes 1-2 weeks to fade. In some cases, a cephalohematoma (collection of blood under the scalp bone covering) may develop, which appears as a firm, defined swelling that may take weeks to months to resolve. Your baby will be monitored for jaundice, as breakdown of the bruised blood produces bilirubin.',
    },
    {
      ageRange: '1-3 months',
      context:
        'The immediate marks from vacuum delivery should be resolved by this time. If a cephalohematoma developed, it may still be present but gradually decreasing. The head shape should be normalizing. No long-term cosmetic or developmental issues are expected from vacuum delivery marks.',
    },
    {
      ageRange: '3-6 months',
      context:
        'All external signs of vacuum delivery should be resolved. Any residual cephalohematoma should have reabsorbed. You may feel a slight ridge where the cephalohematoma calcified at its edges, which is normal and will smooth out over time.',
    },
    {
      ageRange: '6-12 months',
      context:
        'There should be no remaining signs of vacuum-assisted delivery. Head shape and scalp should appear completely normal.',
    },
  ],
  whenNormal: [
    'A circular raised area and bruising on the scalp at the vacuum application site',
    'The chignon (raised area) resolves within 24-48 hours',
    'Bruising that fades from purple to yellow over 1-2 weeks',
    'Baby is alert, feeding well, and behaving normally',
  ],
  whenToMention: [
    'A firm swelling develops on the scalp that persists for more than a few days (possible cephalohematoma)',
    'Bruising seems excessive or is not fading as expected',
    'You have concerns about your baby\'s head shape',
  ],
  whenToActNow: [
    'A rapidly growing, soft swelling that crosses suture lines (which could indicate subgaleal hemorrhage, a rare but serious complication requiring emergency care)',
    'Baby becomes unusually lethargic, pale, feeds poorly, or develops signs of shock (rapid heart rate, mottled skin)',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Assisted Vaginal Delivery. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/ages-stages/baby/Pages/default.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Library of Medicine. Vacuum Extraction Birth Injuries. StatPearls.',
      url: 'https://www.ncbi.nlm.nih.gov/books/NBK539764/',
    },
  ],
  relatedConcernSlugs: ['cephalohematoma-newborn', 'subgaleal-hemorrhage-newborn', 'newborn-bruising-from-delivery', 'newborn-head-molding'],
};
