import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-fever-recurring-daily',
  title: 'My Baby\'s Fever Keeps Coming Back Every Day',
  category: 'medical',
  searchTerms: [
    'baby fever coming back every day',
    'recurring fever baby',
    'baby fever returns daily',
    'fever goes away and comes back baby',
    'daily fever baby',
    'intermittent fever baby',
    'cyclical fever baby',
    'baby fever pattern daily',
    'fever every evening baby',
    'baby fever breaks then returns',
  ],
  quickAnswer:
    'A fever that recurs daily for several days is common during many viral illnesses and does not automatically mean something serious. Most childhood viral infections cause fevers that come and go for 3-5 days. However, a fever that recurs daily for more than 5 days or follows a predictable pattern over weeks warrants medical evaluation to rule out bacterial infection or other causes.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Any recurring fever in a baby under 3 months requires medical evaluation. At this age, the immune system is immature and cannot always fight infections effectively. Even if the fever seems to come and go, your baby should be seen by a doctor to rule out serious bacterial infection, urinary tract infection, or other conditions.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Recurring fevers over 2-3 days during a viral illness are not unusual but should be monitored closely. Track the pattern: when the fever appears, how high it goes, how long each episode lasts, and how your baby acts between fevers. If the fever recurs for more than 3 days or your baby seems increasingly unwell, contact your pediatrician.',
    },
    {
      ageRange: '6-12 months',
      context:
        'Babies in daycare may seem to have recurring fevers as they catch sequential viral illnesses. A fever lasting 3-5 days, resolving, and then returning a week later is likely a new infection. True daily recurring fever (same illness) that persists beyond 5 days needs evaluation for possible ear infection, urinary tract infection, or other bacterial source.',
    },
    {
      ageRange: '12-24 months',
      context:
        'Toddlers commonly develop fevers with teething, viral illnesses, and ear infections. A pattern of fever higher in the evening and lower in the morning is typical of many infections. If the fever pattern persists beyond 5 days, or you notice a predictable cycle of fevers every few weeks, discuss this with your pediatrician as some rare conditions cause periodic fevers.',
    },
    {
      ageRange: '2-3 years',
      context:
        'If your toddler has fevers that follow a remarkably regular pattern (such as every 3-5 weeks), this may suggest a periodic fever syndrome like PFAPA, which is manageable but requires diagnosis. Random recurring fevers with different illnesses are extremely common in toddlers, especially those in group childcare settings.',
    },
  ],
  whenNormal: [
    'A viral illness causes fever for 3-5 days with the fever being higher in the evening and lower in the morning',
    'Your baby is playful and eating well when the fever is down, even if the fever returns when medicine wears off',
    'Separate illnesses cause fevers a week or more apart, particularly in babies attending daycare',
  ],
  whenToMention: [
    'The fever has recurred daily for more than 5 days',
    'You notice a predictable pattern of fever episodes every few weeks',
    'New symptoms develop alongside the recurring fever such as joint pain, rash, or mouth sores',
  ],
  whenToActNow: [
    'Your baby under 3 months has any recurring fever, or a fever above 104°F at any age that recurs despite medication',
    'Your baby shows signs of worsening illness such as increased lethargy, dehydration, persistent vomiting, difficulty breathing, or a new rash with each fever episode',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: [
    'baby-low-grade-fever-persistent',
    'baby-fever-with-no-symptoms',
    'persistent-fever-baby',
    'illness-duration-when-to-worry',
  ],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Fever: When to Call the Doctor. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/fever/Pages/When-to-Call-the-Pediatrician.aspx',
    },
    {
      org: 'NIH',
      citation:
        'National Institutes of Health. Periodic Fever Syndromes. Genetic and Rare Diseases Information Center.',
      url: 'https://rarediseases.info.nih.gov/diseases/10878/periodic-fever-aphthous-stomatitis-pharyngitis-and-adenitis',
    },
    {
      org: 'Mayo Clinic',
      citation:
        'Mayo Clinic. Fever - Symptoms and causes.',
      url: 'https://www.mayoclinic.org/diseases-conditions/fever/symptoms-causes/syc-20352759',
    },
  ],
};
