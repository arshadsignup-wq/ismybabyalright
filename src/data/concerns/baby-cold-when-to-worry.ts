import type { ConcernPage } from './types';

export const concern: ConcernPage = {
  slug: 'baby-cold-when-to-worry',
  title: 'Baby Has a Cold - When to Worry',
  category: 'medical',
  searchTerms: [
    'baby cold when to worry',
    'baby cold symptoms',
    'baby stuffy nose',
    'baby runny nose how long',
    'newborn cold what to do',
    'baby cold remedies',
    'when to take baby to doctor for cold',
    'baby cold getting worse',
    'baby congested and coughing',
    'infant cold vs something serious',
    'baby cold not sleeping',
    'how long does baby cold last',
    'baby first cold',
  ],
  quickAnswer:
    'Babies can catch 8-10 colds per year, especially once in daycare. A typical cold lasts 7-10 days, with symptoms peaking around days 3-5. Most colds are caused by viruses and cannot be treated with antibiotics. Treatment focuses on comfort: saline drops, gentle nasal suctioning, humidifier, and keeping your baby hydrated. While most colds are harmless, certain warning signs - especially in babies under 3 months - require medical attention.',
  byAge: [
    {
      ageRange: '0-3 months',
      context:
        'Colds in newborns require extra caution because young infants are obligate nose breathers and have immature immune systems. Even a mild cold can cause significant feeding difficulties because babies cannot breathe through their mouth while nursing or taking a bottle. Use saline drops and gentle suction before feeds to clear the nose. Any fever (100.4F/38C or higher rectally) in a baby under 3 months is a medical emergency regardless of cold symptoms. Call your pediatrician for any cold symptoms in this age group.',
    },
    {
      ageRange: '3-6 months',
      context:
        'Colds at this age are common, especially if baby has older siblings or is in childcare. A clear or slightly cloudy runny nose, mild cough, and slight fussiness are typical. Green or yellow mucus does not automatically mean a bacterial infection - it is a normal part of the immune response. Keep baby hydrated with frequent breast or bottle feeds. A cool-mist humidifier in the bedroom can help. Do not give over-the-counter cold medications to babies under 6 months.',
    },
    {
      ageRange: '6-12 months',
      context:
        'As maternal antibodies wane, babies in this age range may seem to catch cold after cold, especially in winter. This is normal and actually helps build their immune system. Continue with saline drops, suction, and humidifier. You can elevate the head of the crib slightly (under the mattress, not with pillows) to help with drainage. Acetaminophen (Tylenol) can be given for fever or discomfort per your pediatrician\'s dosing guidance. Ibuprofen can be used after 6 months of age.',
    },
    {
      ageRange: '12-36 months',
      context:
        'Toddlers average 8-10 colds per year, with each lasting 7-14 days. It can feel like they are always sick, especially during their first year of daycare. Over-the-counter cold and cough medications are not recommended for children under 2 (and many experts advise against them until age 6). Honey (1-2 teaspoons) can be given for cough in children over 12 months and is actually as effective as most OTC cough medicines in studies. Keep your toddler hydrated and comfortable.',
    },
  ],
  whenNormal: [
    'Your baby has a runny nose, mild cough, and slight fussiness but is still feeding and making wet diapers',
    'Cold symptoms have lasted 7-10 days and are gradually improving',
    'Your baby\'s mucus has turned yellow or green during the course of the cold - this is normal immune response',
    'Your baby has a low-grade fever (under 100.4F/38C) for 1-2 days at the start of the cold',
  ],
  whenToMention: [
    'Cold symptoms have lasted more than 10 days without improvement',
    'Your baby has a persistent cough that lasts longer than the other cold symptoms',
    'Your baby has thick yellow-green nasal discharge for more than 10 days with facial pain or swelling, suggesting possible sinusitis',
    'Your baby is getting cold after cold with little break in between and you are concerned about their immune function',
  ],
  whenToActNow: [
    'Any fever (100.4F/38C or higher rectally) in a baby under 3 months old - this requires same-day medical evaluation regardless of other symptoms',
    'Your baby is having difficulty breathing - fast breathing, chest retracting between ribs, nasal flaring, or wheezing',
    'Your baby is refusing to eat or drink and showing signs of dehydration (fewer than 3 wet diapers in 24 hours, no tears, dry mouth)',
  ],
  relatedMilestones: [],
  showSelfReferral: false,
  relatedConcernSlugs: ['rsv-baby', 'bronchiolitis-baby', 'baby-coughing-a-lot', 'chronic-congestion'],
  sources: [
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Children and Colds. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/ear-nose-throat/Pages/Children-and-Colds.aspx',
    },
    {
      org: 'AAP',
      citation:
        'American Academy of Pediatrics. Coughs and Colds: Medicines or Home Remedies. HealthyChildren.org.',
      url: 'https://www.healthychildren.org/English/health-issues/conditions/chest-lungs/Pages/Coughs-and-Colds-Medicines-or-Home-Remedies.aspx',
    },
    {
      org: 'CDC',
      citation:
        'Centers for Disease Control and Prevention. Common Colds.',
      url: 'https://www.cdc.gov/common-cold/about/index.html',
    },
  ],
};
